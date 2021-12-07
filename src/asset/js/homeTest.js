import { HomeLoad } from './test';
import { Model } from './model';
import { getUsername } from './data';

export const AppComponent = {
    init() {
        this.appELem = document.querySelector('#root');
        this.render();
        this.getValue();
        this.handleSearchValue();
    },
    handleSearchValue() {
        let searchValue = ' ';
        handleInputChange = (e) => {
            searchValue = e.target.value;
            return searchValue;
        };
        findUser.addEventListener('change', handleInputChange);
        getUsername(searchValue);
    },
    getValue() {
        const htmlSelectors = (selector) => document.querySelector(selector);

        const findUser = htmlSelectors('#search-user');
        const submitForm = htmlSelectors('#submit-btn');
        submitForm.addEventListener('click', handleSearchValue);
        findUser.addEventListener('input', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchValue();
            }
        });
    },
    render() {
        this.appELem.innerHTML = HomeLoad(Model);
    },
};
