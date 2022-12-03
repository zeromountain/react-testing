import styled from '@emotion/styled';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const handleMinusClick = () => {
    setCounter(counter - 1);
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };

  const handleOnOffClick = () => {
    setDisabled(!disabled);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <GapFlex gap='20px'>
          <Button
            data-testid='minus-button'
            disabled={disabled}
            onClick={handleMinusClick}>
            -
          </Button>
          <Button
            data-testid='plus-button'
            disabled={disabled}
            onClick={handlePlusClick}>
            +
          </Button>
        </GapFlex>
        <Button
          data-testid='on-off-button'
          backgroundColor='skyblue'
          onClick={handleOnOffClick}>
          On/Off
        </Button>
      </header>
    </div>
  );
}

export default App;

type PropsType = {
  flexDirection?: 'row' | 'column';
  gap?: string;
  backgroundColor?: string;
};

const GapFlex = styled.div((props: PropsType) => ({
  display: 'flex',
  gap: props.gap || '1rem',
  flexDirection: props.flexDirection || 'row',
}));

const Button = styled.button((props: PropsType) => ({
  width: '50px',
  height: '30px',
  backgroundColor: props.backgroundColor || 'gray',
  color: 'white',
  border: '1px solid black',
  borderRadius: '5px',
  ':disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
}));
