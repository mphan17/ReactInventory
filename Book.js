import React, { Component } from 'react';

class Book extends Component {

    render() {
        return (
            <tr className={this.props.rowClass}>
                <td>
                    <img src={this.props.book.cover} alt={this.props.book.title}/>
                </td>

                <td>
                    <div className="title"> {this.props.book.title} </div>
                    <div>{this.props.book.author}</div>
                    <div>Published in {this.props.book.year}</div>
                    <div>ISBN {this.props.book.isbn}</div>
                </td>

                <td>
                    <input type="button" value="-" onClick={this.props.onDecrement} onKeyUp={this.props.onStockKeyUp}></input>

                    <label className={this.props.book.stockLabelClass} onDoubleClick={this.props.onDoubleClick}>{this.props.book.stock}</label>
                    <input className={this.props.book.stockFieldClass} maxLength="4" size="4" value={this.props.book.stock} onChange={this.props.onStockChange} onKeyUp={this.props.onStockKeyUp}></input>

                    <input type="button" value="+" onClick={this.props.onIncrement} onKeyUp={this.props.onStockKeyUp}></input>
                </td>
            </tr>
        );
    }
}

export default Book;
