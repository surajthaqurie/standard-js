'use strict';

///////////////////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function (data, className) {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
     </div>
    </article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);

    countriesContainer.style.opacity = 1;
}

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

/*
~ AJAX CALL: XMLHTTPREQUEST -----------------------------------------------------------------
*/

/*
const getCountryData = function (country) {

    const request = new XMLHttpRequest();
    // console.log(request);

    // we need the Method(type of request) and URL to which we will make the AJAX call.
    request.open('GET', `https://restcountries.com/v2/name/${country}`);

    // send off the request then fetches the data in the background.
    // And once that is done, it will emit the load event. using the event listener
    request.send();

    // register a callback on the request object for the load event.
    // as soon as data arrives this callback function will be called.
    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;

    });
}

getCountryData('portugal');
getCountryData('nepal');
getCountryData('usa');
getCountryData('germany');
*/


/*
  ~ Callback Hell -----------------------------------------------------------------
*/
/*
const getCountryDataAndNeighbour = function (country) {

    // AJAX call Country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        // console.log(data);

        // Render country
        renderCountry(data);

        // Get neighbour country 2
        const [neighbour] = data.borders;

        if (!neighbour) return;

        // AJAX call Country 1
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            // console.log(data2);

            renderCountry(data2, 'neighbour');
        });
    });
}


// getCountryDataAndNeighbour('portugal');
getCountryDataAndNeighbour('usa');


// * CallBack Hell: Nested Callback(Callback inside Callback) --------------------------------------------------------
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
                setTimeout(() => {
                    console.log('5 second passed');
                    setTimeout(() => {
                        console.log('6 second passed');
                        setTimeout(() => {
                            console.log('7 second passed');
                            setTimeout(() => {
                                console.log('8 second passed');
                                setTimeout(() => {
                                    console.log('9 second passed');
                                    setTimeout(() => {
                                        console.log('10 second passed');
                                        console.log('Im Callback Hell');
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

/*
  ~ Promises And The Fetch API -----------------------------------------------------------------
*/

// AJAX call
//  const request = new XMLHttpRequest();
//  request.open('GET', `https://restcountries.com/v2/name/${country}`);
//  request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// * Consuming Promises -----------------------------------------------------------------

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// }

// * Chaining Promises -----------------------------------------------------------------
// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response);
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//             // , error => alert(error)  // we can handle error as 2nd callback function of then method

//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json()
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} ***`);
//             renderError(`Some thing went wrong ${err.message} Try again`);
//         })
//         // no matter promise is fulfilled or rejected this finally method always is called.
//         .finally(() => {
//             // example loading spinner

//             countriesContainer.style.opacity = 1;
//         });
// }

// * Throwing Errors Manually  -----------------------------------------------------------------
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
        // , error => alert(error)  // we can handle error as 2nd callback function of then method
    });
};


const getCountryData = function (country) {
    // Country 1

    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) throw new Error(`No neighbour found!`);

            // Country 2
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found')
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} ***`);
            renderError(`Some thing went wrong ${err.message} Try again!`);
        })
        // no matter promise is fulfilled or rejected this finally method always is called.
        .finally(() => {
            // example loading spinner

            countriesContainer.style.opacity = 1;
        });
}

btn.addEventListener('click', function (e) {
    // getCountryData('portugal');
    // getCountryData('Nepal');
    getCountryData('australia');
});
*/

/*
  ~ Coding Challenge #1 -----------------------------------------------------------------
*/
/*
In this challenge you will build a function
'whereAmI' which renders a country ONLY based on GPS
coordinates, For that, you will use a second API to
geocode coordinates.

Here are your tasks:

Part1:
1. Create a function 'whereAmI' which takes as inputs
a latitude value (lat) amd a longitude value (lng)
(these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided
coordinates. Reserve geocoding means to convert
coordinates to a meaningful location, like a city and
country name. Use this API to do reverse geocoding:
https://geocode.xyz/api.
The AJAX call will be done to a URL with this format:
https://gecode.xyz/52.508,13.381?geoit=json. Use the
fetch API and promises to get the data. Do NOT use
the getJSON function we created, that is cheating ;)

3. Once you have the data, take a look at it in the
console to see all the attributes that you received
about the provided location. Then, using this data,
log a message like this to the console: 'You are in
Berlin, Germany'

4. Chain a .catch method to the end of the promise
chain and log errors to this console.

5. This API allows you to make only 3 request per
second. If you reload fast, you will get this error
with code 403. This is an error with the request.
Remember, fetch() does NOT reject the promise
yourself, with a meaningful error message.

PART 2:
6. Noe it's time to use the received data to render a
country, So take the relevant attribute from the
geocoding API result, and plug it into the countries
API that we have been using.

7. Render the country and catch any errors, just like
we have done in the last lecture (you can even copy
this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude,
Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 3: -33.933, 18.474I
*/

/*
const whereAmI = function (lat, lng) {

    // fetch(`https://cors-anywhere.herokuapp.com/https://gecode.xyz/${lat},${lng}?json=1`)
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then(res => {
            // console.log(res);
            if (!res.ok) throw new Error(`Problem With Geocoding (${res.status})`);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            console.log(`You are in ${data.city}, ${data.countryName}`);

            return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Country not found (${res.status})`);

            return res.json()
        })
        .then(data => {
            console.log(data);
            renderCountry(data[0])
        })
        .catch(err => console.error(`${err.message} *****`))
}

whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI( 27.72292,85.31982);
*/


/*
  ~ The Event Loop -----------------------------------------------------------------
*/

/*
console.log('Test Start');  // First
setTimeout(() => console.log('0 sec timer'), 0); // Fifth (regular callback)
Promise.resolve('Resolved Promise 1').then(res => console.log(res));  // Third (microtasks priority)
Promise.resolve('Resolved Promise 2').then(res => {   // Fourth (microtasks priority)
    for (let i = 0; i < 1000000000; i++) { }

    console.log(res);
})

console.log('Test End'); // Second
*/


/*
  ~ Creating Promise -----------------------------------------------------------------
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lootter draw is happening');

    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN')
        } else {
            // reject('You lost your money');
            reject(new Error('You lost your money'));
        }
    }, 2000)
});

// Consuming promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/

// * Promisifying -------------------------------------------------------

/*
// These problems runs immediately
Promise.resolve('ABC').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

// - Promisifying setTimeout ---------------------------
/*
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(2);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(3);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(4);
    });

 */

// - Promisifying Geolocation API ---------------------------
/*
console.log('Getting position');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );

        navigator.geolocation.getCurrentPosition(resolve, reject);

    });
}
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
    getPosition()
        .then(pos => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        })
        .then(res => {
            // console.log(res);
            if (!res.ok) throw new Error(`Problem With Geocoding (${res.status})`);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            console.log(`You are in ${data.city}, ${data.countryName}`);

            return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Country not found (${res.status})`);

            return res.json()
        })
        .then(data => {
            console.log(data);
            renderCountry(data[0])
        })
        .catch(err => console.error(`${err.message} *****`));
}


btn.addEventListener('click', whereAmI);
*/


/*
  ~ Coding Challenge #2 -----------------------------------------------------------------
*/

/*
Build the image loading functionality that i just
showed you in the screen.

Tasks are not super-descriptive this time, so that
you can figure out some stuff on your own. Pretend
you'are working on your own.

PART 1:
1. Create a function 'createImage' which receives
imgPath as an input. This function returns a promise
which creates a new image (use document.createElement
('img')) and sets the .src attribute to the provided
image path. When tha image is done loading, append it
to the DOM element with the 'images' class, and
resolve the promise. The fulfilled value should be
the image element itself. In case there us an error
loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the
first part of the solution.

PART 2
2. Consume the promise using .then and also add an
error handler;
3. After the image has loaded, pause execution for 2
seconds the wait function we created earlier.
4. After the 2 seconds have passed, hide the current
image (set display to 'none'), and load a second
image (HINT: Use the image element returned by the
createdImage promise to hide the current image. You
will need a global variable for that ;) );
5. After the second image has loaded, pause execution
for 2 seconds again;
6. After the 2 seconds have passed, hide the current
image.

TEST DATA: Images in the img folder. Test the error
handler by passing a wrong image path. Set the
network speed to 'Fast 3G' in the dev tools Network
tab, otherwise images load too fast.

GOOD LUCK :)
*/
/*
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);

            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        })
    });
}

let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log(`Image 1 loaded`);
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg')
    })
    .then((img) => {
        currentImg = img;
        console.log(`Image 2 loaded`);
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-3.jpg')
    })
    .then((img) => {
        currentImg = img;
        console.log(`Image 2 loaded`);
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));
 */


/*
~  Error Handling With Try...Catch -----------------------------------------------------------------
*/

// * Normally -----------------------------------
// let y = 1;
// const x = 2;
// x = 3 // Uncaught TypeError: Assignment to constant variable.

// * Try catch -----------------------------------

// try {
//     let y = 1;
//     const x = 2;

//     x = 3;
// } catch (err) {
//     // alert(err.message);
//     console.log(err); // TypeError: Assignment to constant variable.
// }

/*
  ~ Consuming Promises With Async/Await -----------------------------------------------------------------
*/
/*
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);

    });
}

// fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => console.log(res));
const whereAmI = async function (country) {
    try {// Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const resGoe = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        if (!resGoe.ok) throw new (Error('Problem getting location data'));

        const dataGeo = await resGoe.json();
        // console.log(dataGeo);

        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
        if (!res.ok) throw new (Error('Problem getting country data'));

        // console.log(res);

        const data = await res.json();
        // console.log(data);

        renderCountry(data[0]);
    } catch (err) {
        console.log(err.message);
        renderError(`${err.message}`);
    }
}

whereAmI();
whereAmI();
whereAmI();

console.log('FIRST');
*/

/*
  ~ Returning Values From Async Functions -----------------------------------------------------------------
*/
/*
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);

    });
}

// fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => console.log(res));
const whereAmI = async function (country) {
    try {// Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const resGoe = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        if (!resGoe.ok) throw new (Error('Problem getting location data'));

        const dataGeo = await resGoe.json();
        // console.log(dataGeo);

        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
        if (!res.ok) throw new (Error('Problem getting country data'));

        // console.log(res);

        const data = await res.json();
        // console.log(data);

        renderCountry(data[0]);

        return `Your are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch (err) {
        console.log(err.message);
        renderError(`${err.message}`);

        // Re-throwing error: Reject promise returned from async function
        throw err;

    }
    // finally {
    //     console.log('Try catch finally block');
    // }
}

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message}`))
//     .finally(() => console.log('3: Finished getting location'));


(async function () {
    try {
        const city = await whereAmI();
        console.log(city);
    } catch (err) {
        console.error(`2: ${err.message}`)
    }
    console.log('3: Finished getting location')

})();
 */

/*
  ~ Running Promise In Parallel: Promise.all Combinator -----------------------------------------------------------------
*/

/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const get3Country = async function (c1, c2, c3) {
    try {

        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

        // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ]);

        console.log(data.map(d => d[0].capital));

    } catch (err) {
        console.log(err);
    }
}

get3Country('canada', 'portugal', 'tanzania');
 */

/*
  ~ Other Promise Combinators: Race, Allsettled And Any -----------------------------------------------------------------
*/

// * Promise.race -------------------------------------------
/*
 (async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);

    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/tanzania`),
    timeout(5)
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));

*/
// * Promise.allSettled -------------------------------------------
/*
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res));  // settled value

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));   // Error value
*/

// * Promise.any -------------------------------------------
/*
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/


/*
  ~ Coding Challenge #3 -----------------------------------------------------------------
*/

/*
PART 1
Write an async function 'loadNPause' that recreates
Coding Challenge #2, this time using async/await
(only the part where the promise is consumed).
Compare the two version, think about the big
differences, and see which one you like more.
Don't forget to test the error handler, and to set
the network speed to 'Fast 3G' in the dev tools
Network tab.

PART 2
1. Create an async function 'loadAll' that receives
an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the
images with the 'createImage' function (call the
resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it
like you expected?
4. Use promise combinator function to actually get
the images from the array ;)
5. Add the 'parallel' class to all the images (it has
some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/
img-3.jpg']. To test, turn off the 'loadNPause'
function.

GOOD LUCK :)
*/

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');


const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });

    });
};


// * Part 1 --------------------------
// let currentImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-3.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 3 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.log(err));


const loadNPause = async function () {
    try {

        // Load image 1
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');

        await wait(2);

        img.style.display = 'none';

        // Load image 2
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');

        await wait(2);

        img.style.display = 'none';

        // Load image 3
        img = await createImage('img/img-3.jpg');
        console.log('Image 3 loaded');

        await wait(2);

        img.style.display = 'none';

    } catch (err) {
        console.error(err);
    }
};

// loadNPause();


// * Part 2  ----------------------------
const testArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
const loadAll = async function (imgArr) {
    try {

        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);

        imgsEl.forEach((img) => img.classlist.add('parallel'))

    } catch (err) {
        console.log(err);
    }
};
loadAll(testArray);

