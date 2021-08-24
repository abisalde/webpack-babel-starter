import { HomeLoad } from './test';
import { Model } from './model';

export const AppComponent = {
    init() {
        this.appELem = document.querySelector('#root');
        this.render();
        this.getValue();
    },
    getValue() {
        let searchValue = ' ';
        const searchInput = document.querySelector('#search');
        const onKeyDown = document.querySelector('form');
        searchInput.addEventListener('input', (e) => {
            e.preventDefault();
            searchValue = e.target.value;
            onKeyDown.addEventListener('submit', (e) => {
                e.preventDefault();
                let displayItem = document.querySelector('#text');
                displayItem.innerText = searchValue;

                return displayItem;
            });
        });
    },
    render() {
        this.appELem.innerHTML = HomeLoad(Model);
    },
};
