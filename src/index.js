// importing d3.js
import * as d3 from 'd3';

// importing bootstrap.js
import 'bootstrap';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importing stylesheets
import './style/main.css';
import './style/text.css';

// importing parsing functions from utils
import {parse} from './utils';

// importing modules
import Main from './components/Main';
import Sort from './components/Sort';

// setting up module instance
const main = Main(document.querySelector('.main-container'));
const sort = Sort();

// load data ===> d3.csv returns a promise
const data = d3.csv('./data/mock-data.csv', parse);

// call .then method on promises
data.then((data) => {
    main(data);

    d3.select('.controllers')
        .datum(data)
        .each(sort);
});

sort.on('btn:sort', function(d,data) {
    main.orderBy(d);
    main(data);
});
