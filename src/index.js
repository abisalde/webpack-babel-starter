import _ from 'lodash';
import './asset/index.css';
import HomeLoad from './asset/js/test';

const App = () => {
    const element = document.createElement('div');

    element.appendChild(HomeLoad);

    return element;
};

document.body.appendChild(App());
