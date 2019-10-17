import React from 'react';
import Gradient from './Gradient';
import arrowDown from '../images/arrow-down.svg';
import arrowUp from '../images/arrow-up.svg';

const styles = {
  container: {
    display: 'flex',
    height: '8em',
    border: 'solid 1px black',
    margin: '0.5em',
    color: '#3E5769',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '1em',
  },

  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },

  rowItem: {
    paddingRight: '0.5em',
  },

  grayBold: {
    fontWeight: 'bold',
    color: '#98A1A8',
  },

  name: {
    fontWeight: 'bold',
  },

  img: {
    width: '0.5em',
  },

  small: {
    fontSize: '0.75em',
  },

  large: {
    fontSize: '1.5em',
  },
};

function StockCard(props){
  const name = (props.stock.name || 'stub company').toUpperCase();
  const data = props.stock['Global Quote'];
  const symbol = data['01. symbol'];
  const open = Number(data['02. open']).toFixed(2);
  const high = Number(data['03. high']).toFixed(2);
  const low = Number(data['04. low']).toFixed(2);
  const price = Number(data['05. price']).toFixed(2);
  const change = Number(data['09. change']).toFixed(2);
  const change_percent = Number(data['10. change percent'].slice(0, -1)).toFixed(2) + '%';

  const red = '#BB0606';
  const green = '#299E00';

  const color = change < 0 ? red : green;
  const arrow = change < 0 ? arrowDown : arrowUp;
  const charColor = { color: color };

  return(
    <div style={styles.container}>
      <Gradient open={open} high={high} low={low} change={change} />
      <div style={styles.info}>

        <span style={styles.name}> {name} </span>
        <span style={{...styles.grayBold, ...styles.small}}> {symbol} </span>

        <div style={{...styles.row}}>
          <span style={{...styles.large, ...styles.rowItem}}> {price} </span>
          <img style={{...styles.img, ...styles.rowItem}} src={arrow} />
          <span style={{...charColor, ...styles.small, ...styles.rowItem}}>
            {change}
          </span>
          <span style={{...charColor, ...styles.small, ...styles.rowItem}}>
            ({change_percent})
          </span>
        </div>

        <div style={{...styles.row, ...styles.small}}>
          <span style={styles.rowItem}>
            <span style={styles.grayBold}> OPEN </span> {open}
          </span>
          <span style={styles.rowItem}>
            <span style={styles.grayBold}> HIGH </span> {high}
          </span>
          <span style={styles.rowItem}>
            <span style={styles.grayBold}> LOW </span> {low}
          </span>
        </div>

      </div>
    </div>
  );
}

export default StockCard;
