import _ from 'lodash';
import './asset/index.css';

const homePage = () => {
    const htmlElem = document.createElement('h1');

    htmlElem.innerHTML = _.join(
        ['Hello', 'Webpack-Babel-WE', 'Lagos City'],
        ' '
    );
    htmlElem.classList.add('heading');
    return htmlElem;
};

document.body.appendChild(homePage());
