import React, { Component } from 'react';
import './App.css';
import Book from "./Book";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {books: this.props.books, enterFieldFlag: false, lastFieldIndex: -1 }
        this.incrementBookCount = this.incrementBookCount.bind( this );
        this.decrementBookCount = this.decrementBookCount.bind( this );
        this.doubleClickInput = this.doubleClickInput.bind( this );
        this.onStockChange = this.onStockChange.bind(this);
        this.onStockKeyUp = this.onStockKeyUp.bind(this);
    }

    bookList(){
        return this.state.books.map( (book, i) => {
            return ( <Book
                book={book}
                onIncrement={this.incrementBookCount(i)}
                onDecrement={this.decrementBookCount(i)}
                onDoubleClick={this.doubleClickInput(i)}
                onStockChange={this.onStockChange(i)}
                onStockKeyUp={this.onStockKeyUp(i)}
                rowClass= {(i % 2 === 0)? "row1" : "row0"}
                key={i}/> );
        });
    }

    incrementBookCount( i ) {
        return () => {
            if (!this.state.enterFieldFlag ){
                const books = this.state.books
                let book = books[i]

                if( book.stock < 999 ) {
                    book.stock = Number(book.stock) +1
                    this.setState({books: books})
                }
            }
        }
    }

    decrementBookCount( i ) {
        return () => {
            if (!this.state.enterFieldFlag ){
                const books = this.state.books
                let book = books[i]

                if( book.stock > 0 ) {
                    book.stock -= 1
                    this.setState({books: books})
                }
            }
        }
    }

    doubleClickInput(i){
        return () => {
            if (!this.state.enterFieldFlag ) {
                console.log( this.state.lastFieldIndex );
                if( this.state.lastFieldIndex != -1 ) {
                    const books = this.state.books
                    let book=books[this.state.lastFieldIndex]
                    book.stockLabelClass='show'
                    book.stockFieldClass='hide'

                    this.setState({books: books})
                }

                this.state.lastFieldIndex = i;

                const books = this.state.books
                let book=books[i]
                book.stockLabelClass='hide'
                book.stockFieldClass='show'

                this.setState({books: books})
            }
        }
    }

    onStockChange(i){
        return (event) =>{
            const books = this.state.books
            let book=books[i]


            this.state.enterFieldFlag = (event.target.value === '')


            if ((event.target.value <= 999) && (event.target.value >= 0)) {
                book.stock = event.target.value;
            }

            this.setState({books: books})
        }
    }

    onStockKeyUp(i){
        return (event) => {
            if( event.keyCode === 13 && event.target.value !== '' && !this.state.enterFieldFlag ) {
                const books = this.state.books
                let book=books[i]

                book.stockLabelClass='show'
                book.stockFieldClass='hide'

                this.setState({books: books})
            }
        }
    }

  render() {
    return (
        <div id="app">
            <div className="inventory">
                <h1>Inventory</h1>

                <table>
                    <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Description</th>
                        <th>Stock</th>
                    </tr>
                    </thead>

                    <tbody>

                    {this.bookList()}

                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default App;
