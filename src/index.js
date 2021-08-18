import _ from 'lodash';

const homePage = () => {
    const htmlElem = document.createElement('h1');

    htmlElem.innerHTML = _.join(['Hello', 'Webpack-Babel-WE'], ' ');

    return htmlElem;
};

document.body.appendChild(homePage());
