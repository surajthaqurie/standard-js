import axios from 'axios';
import {
    key,
    proxy
} from '../config'

export default class Search {

    constructor(query) {
        this.query = query;
    }

    // https://spoonacular.com/food-api
    // https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
    // https://forkify-api.herokuapp.com/

    async getResults() {
        try {

            // const res = await axios(`${proxy}https://api.spoonacular.com/food/products/search?query=${this.query}&apiKey=${key}`);
            // const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${this.query}&apiKey=${key}&number=30`);


            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            // console.log(res);

            this.result = res.data.recipes;
            // console.log(this.result);

        } catch (error) {
            alert('Some thing went wrong in Search :(', error);
            console.log('Some thing went wrong in Search :(', error);

        }

    }
}