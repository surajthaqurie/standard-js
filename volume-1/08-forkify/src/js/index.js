import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';

import * as searchView from './views/searchView'
import * as recipeView from './views/recipeView'
import * as listView from './views/listView'
import * as likesView from './views/likesView';

import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';

/** Global state of the app
 * * - Search object
 * ! - Current recipe object
 * ? - Shopping list object
 */

const state = {};

/**
 * ! SEARCH CONTROLLER
 */
const controlSearch = async () => {

    //~ 1) Get query form view
    const query = searchView.getInput();

    //~ console.log(query);

    if (query) {
        //~ 2) New Search object and add to state
        state.search = new Search(query);

        //~  3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {

            //~ 4) Search for recipes
            await state.search.getResults();

            //~ 5) Render results on UI
            //~ console.log(state.search.result);
            clearLoader();
            searchView.renderResults(state.search.result);

            //~ console.log(state);
        } catch (error) {
            alert('Something wrong with the search...', error);
            console.log('Something wrong with the search...', error);
            clearLoader();

        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10); //~ * 10: base decimal | 2: base binary

        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * ! RECIPE CONTROLLER
 */

//~ const r = new Recipe(47746);
//~ r.getRecipe();


const controlRecipe = async () => {
    //~ Get Id From URL
    const id = window.location.hash.replace('#', '');

    if (id) {

        //~ Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //~ Highlight selected search
        if (state.search) searchView.highlightSelected(id);

        //~ Create new recipe object
        state.recipe = new Recipe(id);

        try {
            //~ Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            // ~ console.log(state.recipe.ingredients);
            state.recipe.parseIngredients();

            //~ Calculate Serving and time
            state.recipe.calcTime();
            state.recipe.calcServings()

            //~ Render recipe
            //~ console.log(state.recipe);
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );

        } catch (error) {
            alert('Error Processing recipe....', error);
            console.log('Error Processing recipe....', error);
        }


    }
}


//~ window.addEventListener('hashchange', controlRecipe);
//~ window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));



/**
 * * LIST CONTROLLER
 */
const controlList = () => {
    listView.clearShopping();

    //~ Create a new list IF there is none yet
    if (!state.list) state.list = new List();

    //~ Add each ingredients to the list
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}


//~ Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //~ Handle the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete form state 
        state.list.deleteItem(id);

        // Delete form UI
        listView.deleteItem(id);

        // Handle the count update
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        if (val > 0) state.list.updateCount(id, val);
    }
});


/**
 * * LIKE CONTROLLER
 */
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();

    const currentID = state.recipe.id;

    //~ User has NOT yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add Like to the state

        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        )

        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);
        // console.log(state.likes);

        //~ User HAS liked current recipe
    } else {

        // Remove like from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);


        // Remove like from UI list
        likesView.deleteLike(currentID);
        // console.log(state.likes);

    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
}

//- Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    //~ Restore likes
    state.likes.readStorage();

    //~ Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    //~ Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

//- Event Delegation----------
//~ Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        //~ Decrease button is clicked
        if (state.recipe.servings > 1) {

            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        //~ Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        //~ Add ingredients to shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        //~ Like controller
        controlLike();
    }

});