import React from 'react';
import AddStock from './components/AddStock';
import StockCard from './components/StockCard';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
    }
  }

  addStock = (newStock) => {
    console.log(newStock)
    this.setState({stocks: [...this.state.stocks, newStock]});
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className='title'>Stock Watcher</h1>
          <AddStock addStock={this.addStock}/>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {this.state.stocks.map(stock => {
               return <StockCard key={stock['Global Quote']['01. symbol']} stock={stock}/>
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
