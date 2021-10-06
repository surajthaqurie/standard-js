import View from "./View";
import icons from '../../img/icons.svg';  // Parcel 1 | parcel-bundler


class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded';

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }


    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }

    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();

            // FormData API collect all form data.
            const dataArr = [...new FormData(this)];
            // console.log(data);

            // Object.fromEntries(): In JavaScript, since ES2019, there is now a new and very handy method that 
            // that we can use to convert entries to an object. Opposite of the Entries method that is available on arrays
            // It takes an array of entries and converts it to an object.
            const data = Object.fromEntries(dataArr);

            handler(data);
        });
    }

    _generateMarkup() { }

}

export default new AddRecipeView();