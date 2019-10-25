import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),   //заполняем пустотой массив из 9 элементов
      count: 0
    }
    this.winnerLines = [
      [0, 1, 2],    //горизонтальные линии
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],    //вертикальные линии
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],    //диагональные линии
      [2, 4, 6]
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? "X" : "O";
    for (let i = 0; i < this.winnerLines.length; i++) {
      let line = this.winnerLines[i];
      if (this.state.square[line[0]] === s    //если выигрышная линия. Проверяем
        && this.state.square[line[1]] === s
        && this.state.square[line[2]] === s) {
        alert(s + ' win');
        setTimeout(() => {
          this.setState({ square: Array(9).fill(null) })    //обнуляем массив
          this.setState({ count: 0 })   //обнуляем счётчик
        }, 3000)
      }
    }
  }

  clickHandler = (e) => {
    console.log(1);

    //data - номер квадрата, по которому кликнули
    let data = e.target.getAttribute('data');
    let currentSquare = this.state.square;    //массив квардатов
    console.log(currentSquare)
    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? "X" : "O";
      this.setState({ count: this.state.count + 1 })    //инкремент не сработает
      this.setState({ square: currentSquare })
    } else {
      alert('Нельзя кликать на ту же ячейку!')
    }
    this.isWinner();
  }


  render() {
    return (
      <div className='tic-tac-toe'>
        <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.square[0]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.square[1]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.square[2]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.square[3]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.square[4]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.square[5]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.square[6]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.square[7]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.square[8]}</div>
      </div>
    );
  }
}


export default App;
