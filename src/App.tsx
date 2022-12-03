import styled from '@emotion/styled';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleMinusClick = () => {
    setCounter(counter - 1);
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <GapFlex gap='20px'>
          <Button data-testid='minus-button' onClick={handleMinusClick}>
            -
          </Button>
          <Button data-testid='plus-button' onClick={handlePlusClick}>
            +
          </Button>
        </GapFlex>
      </header>
    </div>
  );
}

export default App;

type PropsType = {
  gap?: string;
};

const GapFlex = styled.div((props: PropsType) => ({
  display: 'flex',
  gap: props.gap || '1rem',
}));

const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: gray;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid black;
`;
