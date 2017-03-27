import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './normalize.css';


const books = [{
    author: 'George R. R. Martin',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
    isbn: '978-0553103547',
    stock: 7,
    title: 'A Game of Thrones',
    stockLabelClass: 'show' ,
    stockFieldClass: 'hide',
    year: 1996
}, {
    author: 'Neal Stephenson',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
    isbn: '978-1491515051',
    stock: 3,
    title: 'Snow Crash',
    stockLabelClass: 'show' ,
    stockFieldClass: 'hide',
    year: 1992
}, {
    author: 'Andy Weir',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
    isbn: '978-0804139021',
    stock: 11,
    title: 'The Martian',
    stockLabelClass: 'show' ,
    stockFieldClass: 'hide',
    year: 2014
}]


ReactDOM.render(
    <App books={books} />,
    document.getElementById('root')
);
