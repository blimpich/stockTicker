/**
 *  A component
 */

import React from 'react';

const styles = {
  container: {
  },

  button: {
    backgroundColor: '#284CC9',
    color: 'white',
    fontSize: '0.9em',
    fontWeight: 'bold',
    border: 'none',
  },

  sizing: {
    borderRadius: '2px',
    height: '2.5em',
    width: '8em',
  },

  input: {
    color: '#98A1A8',
  },
};

class AddStock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: 'AAPL',
      selectedStock: null,
    }
  }

  onChange = (e) => {
    this.setState({input: e.target.value});
  }

  onSubmit = async (e) => {
    const stockDataURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.input}&apikey=HY0JP87WH3PG17X6`;

    let data = await fetch(stockDataURL);
    data = await data.json();
    let symbol = data['Global Quote']['01. symbol'];

console.log('hello', symbol)

    const stockNameURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=HY0JP87WH3PG17X6`;

    let name = await fetch(stockNameURL);
    name = await name.json();
    name = name['bestMatches'] ? name['bestMatches'][0]['2. name'] : 'undefined';

    const result = {...data, name};

    if(!('Error Message' in result)){
      this.props.addStock(result);
    }
  }

  render() {

    return(
      <div style={styles.container}>
        <input style={{...styles.input, ...styles.sizing}}value={this.state.input} type='text' onChange={this.onChange}/>
        <button style={{...styles.button, ...styles.sizing}} onClick={this.onSubmit}>Add Stock</button>
      </div>
    );
  }
}

export default AddStock;
