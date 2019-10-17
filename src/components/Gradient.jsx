import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '20%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.75em',
  },

  triangleRight: {
    width: 0,
    height: 0,
    borderTop: '5px solid transparent',
    borderLeft: '10px solid white',
    borderBottom: '5px solid transparent',
  },

  triangleContainer: {
    paddingLeft: '1em',
    paddingTop: '1em',
    paddingBottom: '1em',
    top: '50%',
  },

  redGradient: {
    background: 'rgb(235,86,49)',
    background: 'linear-gradient(180deg, rgba(235,86,49,1) 0%, rgba(187,6,6,1) 42%, rgba(144,23,0,1) 100%)',
  },

  greenGradient: {
    background: 'rgb(106,245,49)',
    background: 'linear-gradient(180deg, rgba(106,245,49,1) 0%, rgba(41,158,0,1) 42%, rgba(0,163,51,1) 100%)',
  },

  nums: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.85em',
    justifyContent: 'space-between',
    marginTop: '1em',
    marginBottom: '1em',
    borderLeft: 'solid 1px white',
  },
}

// takes open high low and color
function Gradient(props){

  const backgroundColor = props.change < 0 ? styles.redGradient : styles.greenGradient;

  return(
    <div style={{...styles.container, ...backgroundColor}}>
      <div style={styles.triangleContainer}>
        <div style={styles.triangleRight} />
      </div>
      <div style={styles.nums}>
        <span>{props.high}</span>
        <span>{props.low}</span>
      </div>
    </div>
  );
}

export default Gradient;
