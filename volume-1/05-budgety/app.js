// BUDGET CONTROLLER ------------------------------------------------------------
var bugetController = (function () {
    // Constructor
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {

            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;

        data.allItems[type].forEach(function (current) {
            sum += current.value;
        });
        data.total[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // [1, 2, 3, 4, 5], next ID = 6
            // [1, 2, 3, 6, 8], next ID = 9
            // ID = last ID + 1

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                // console.log(ID);
            } else {
                ID = 0;
            }


            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);

            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },
        deleteItem: function (type, id) {

            var ids, index;

            // id = 6;
            // data.allItems[type][id];
            // ids = [1, 2, 4, 6, 8]
            // index = 3

            ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            index = ids.indexOf(id);

            // -1 when it didn't find the element
            if (index !== -1) {
                data.allItems[type].splice(index, 1);

            }
        },
        calculateBudget: function () {
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expenses
            data.budget = data.total.inc - data.total.exp;

            // calculate the percentage of income that we spent
            if (data.total.inc > 0) {
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercantages: function () {
            /*
            a = 20
            b = 10,
            c = 40, 
            totalIncom = 100
            a = 20/100 = 20%
            b = 10/100 = 10%
            c = 40/100 = 40%
            */

            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.total.inc);
            });

        },

        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage
            }
        },

        testing: function () {
            console.log(data);
        }
    };
})();


// UI CONTROLLER -----------------------------------------------------------------
var UIController = (function () {

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dataLabel: '.budget__title--month'
    };

    var formatNumber = function (num, type) {

        var numSplit, int, dec;
        /*
        + or - before number
        exactly 2 decimal points
        comma separarting the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

        num = Math.abs(num);
        num = num.toFixed(2); // 2000 -> 2000.00

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            // substr allows to only take a part of string (startposition,readhowmuchnumber)
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
            // input 23510 output 23,510
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    }

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i)
        }
    }

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstring.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value),

            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML string with place holder text
            if (type === 'inc') {
                element = DOMstring.incomeContainer
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div> </div>';

            } else if (type === 'exp') {
                element = DOMstring.expenseContainer
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert the HTML into the DOM 
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);

        },
        // DOM Manipulation: https://blog.garstasio.com/you-dont-need-jquery/dom-manipulation/
        deleteListItem: function (selectorID) {
            // document.getElementById(selectorID).parentNode.removeChild(document.getElementById(selectorID));
            var el;
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        clearFileds: function () {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMstring.inputDescription + ',' + DOMstring.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();

        },
        displayBudget: function (obj) {

            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstring.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstring.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

            if (obj.percentage > 0) {
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + '%';

            } else {
                document.querySelector(DOMstring.percentageLabel).textContent = '---';

            }
        },
        displayPercentages: function (percentages) {

            // querySelectorAll --> returns NodeList
            var fields = document.querySelectorAll(DOMstring.expensesPercLabel);

            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';

                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function () {

            var now, months, month, year;

            now = new Date();
            //  christams = new Date(2016, 11, 25);

            months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMstring.dataLabel).textContent = months[month] + ' ' + year;
        },
        changedType: function () {
            var fields = document.querySelectorAll(
                DOMstring.inputType + ',' +
                DOMstring.inputDescription + ',' +
                DOMstring.inputValue
            );

            nodeListForEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstring.inputBtn).classList.toggle('red');

        },
        getDOMstring: function () {
            return DOMstring;
        }

    };

})();

// GLOBAL APP CONTROLLER ---------------------------------------------------------
var controller = (function (bugetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstring();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            // console.log(event);
            if (event.which === 13 || event.keyCode === 13 || event.code === 'Enter') {

                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };

    var updateBudget = function () {
        // 1. Calculate The Budget
        bugetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = bugetCtrl.getBudget();

        // 3. Display the budget on th UI
        UICtrl.displayBudget(budget);

    };

    var upadatePercentages = function () {
        // 1. Calculate percentages
        bugetCtrl.calculatePercantages();

        // 2. Read percentages from the budget controller
        var percentages = bugetCtrl.getPercentages();
        // console.log(percentages);

        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getinput();
        // console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add item to the budget controller
            newItem = bugetCtrl.addItem(input.type, input.description, input.value);
            // console.log(newItem);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFileds();

            // 5. Calculate and update Budget
            updateBudget();

            // 6. Calculate and update percentages 
            upadatePercentages()
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {

            // inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item form the data structure
            bugetCtrl.deleteItem(type, ID);

            // 2. delete the item form the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();

            // 4. Calculate and update percentages 
            upadatePercentages();

        }
    }

    return {
        init: function () {
            console.log("Application has started");
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });

            setupEventListeners();
        }
    }

})(bugetController, UIController);

controller.init();