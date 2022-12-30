import React, { useState } from 'react';

import styles from './styles.module.scss';

type Props = {
    setWords: (numbers: Array<string>) => void;
}

const URL = "http://localhost:9000/convert";

const Keyboard = ({ setWords }: Props): JSX.Element => {
    const [numbers, setNumbers] = useState<string>('');
    const numbersArray: Array<string> = Array
        .from({length: 10}, (_, index) => index < 9 ? (index + 1).toString() : '0');

  const convert = async (number: string): Promise<void> => {
    // e.preventDefault();
    const newNumbersSet = numbers.concat(number);
    const response = await fetch(URL + '?' + new URLSearchParams({numbers: newNumbersSet}).toString());
    const { data } = await response.json();

    setNumbers(newNumbersSet);
    setWords(data);
  }

  return (
      <div className={styles.Wrapper}>
        <div className={styles.Keyboard}>
            {numbersArray.map(number => (
                <div
                    key={number}
                    onClick={() => convert(number)}
                >
                    {number}
                </div>
            ))}
        </div>
      </div>
  );
};

export default Keyboard;
