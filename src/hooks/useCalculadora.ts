import { useRef, useState } from 'react';

enum Operators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numberBefore, setNumberBefore] = useState('123123');
  const [number, setNumber] = useState('100');
  const operation = useRef<Operators>();

  const reset = () => {
    setNumber('0');
    setNumberBefore('0');
  };

  const del = () => {
    let negativo = '';
    let numeroTemp = number;
    if (number.includes('-')) {
      negativo = '-';
      numeroTemp = number.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumber(negativo + number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };
  const assembleNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (number.includes('.') && numberText === '0') {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const setPositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeToBeforeNumber = () => {
    if (number.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }

    setNumber('0');
  };

  const addUp = () => {
    changeToBeforeNumber();
    operation.current = Operators.sumar;
  };

  const subtract = () => {
    changeToBeforeNumber();
    operation.current = Operators.restar;
  };

  const multiply = () => {
    changeToBeforeNumber();
    operation.current = Operators.multiplicar;
  };

  const divide = () => {
    changeToBeforeNumber();
    operation.current = Operators.dividir;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(numberBefore);

    switch (operation.current) {
      case Operators.sumar:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.restar:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiplicar:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }

    setNumberBefore('0');
  };

  return {
    reset,
    del,
    assembleNumber,
    setPositiveNegative,
    addUp,
    subtract,
    multiply,
    divide,
    calcular,
    numberBefore,
    number,
  };
};
