/***************************************************************************************
 * Simple Example of Asynchronous 
 */

/*
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
}


const frist = () => {
    console.log('Hey here');
    second();
    console.log('End');

}
frist();
*/

/***************************************************************************************
 * Asynchronous with Call Back
 */

/*
function getRecipe() {
    setTimeout(() => {
        const recipeId = [523, 883, 432, 974];
        console.log(recipeId);

        setTimeout(id => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            }
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: publisher
                }

                console.log(recipe);

            }, 1500, recipe.publisher);

        }, 1500, recipeId[2]);
    }, 1500);
}

getRecipe();

*/


/***************************************************************************************
 * Asynchronous with Promise
 */

/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            }
            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recId);
    });
}


const getRelated = publisher => {
    return new Promise((resolve, reject) => {

        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: pub
            }

            resolve(`${pub}:${recipe.title}`);

        }, 1500, publisher)
    });
}

getIDs
    .then((IDs) => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('jonas');
    })
    .then(recipe => {
        console.log(recipe);

    })
    .catch(err => {
        console.log('Error!', err);
    });
*/


/***************************************************************************************
 * Asynchronous with Async/await
 */

/*

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            }
            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recId);
    });
}


const getRelated = publisher => {
    return new Promise((resolve, reject) => {

        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: pub
            }

            resolve(`${pub}:${recipe.title}`);

        }, 1500, publisher)
    });
}

async function getRecipeAW() {

    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const relatated = await getRelated('Jonas');
    console.log(relatated);


    return recipe;

}

// getRecipeAW();

// const rec = getRecipeAW();
// console.log(rec); // Promise {<pending>}

getRecipeAW().then(result=>console.log(`${result} is the best ever!`));

*/

/***************************************************************************************
 * AJAX And API
 * Api for Weather : https://www.metaweather.com/api/ | FOR CORS: https://corsproxy.github.io/

 */

// fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/');

function getWeather(woeid) {

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures  Today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(err => {
            console.log(err);
        });
}
getWeather(2487956);
getWeather(44418);


async function getWeatherAw(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

        const data = await result.json();
        // console.log(data);

        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);

        return data;

    } catch (err) {
        console.log(err);
    }
}

getWeatherAw(2487956);

let dataLondon;
getWeatherAw(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);

});