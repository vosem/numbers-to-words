import React, { useState } from 'react';
import { ReactComponent as Arrow } from './images/arrow-left.svg';

import config from './config.json';

import styles from './styles.module.scss';

type Props = {
    setWords: (numbers: Array<string>) => void;
};

const URL = 'http://localhost:9000/convert';

const Keyboard = ({ setWords }: Props): JSX.Element => {
    const [numbers, setNumbers] = useState<string>('');
    const { buttons } = config;

    const sendRequest = async (numbers: string): Promise<void> => {
        const response = await fetch(URL + '?' + new URLSearchParams({ numbers: numbers }).toString());
        const { data } = await response.json();

        setWords(data);
    }

    const convert = async (number: string): Promise<void> => {
        const newNumbersSet = numbers.concat(number);

        setNumbers(newNumbersSet);

        if (newNumbersSet.length) {
            await sendRequest(newNumbersSet);
        }
    };

    const removeNumber = async (): Promise<void> => {
        const newNumbersSet = numbers.slice(0, -1);
        console.log('newNumbersSet', newNumbersSet)

        setNumbers(newNumbersSet);

        if (newNumbersSet.length) {
            await sendRequest(newNumbersSet);
        }
    };

    return (
        <div className={styles.Wrapper}>
            <input
                type="text"
                className={styles.Input}
                name="ask-question"
                maxLength={15}
                value={numbers}
                disabled={true}
            />
            <div className={styles.Keyboard}>
                {buttons.map((button, index) => {
                    const number = Object.keys(button)[0];
                    const letters = Object.values(button)[0];

                    return (
                        <button
                            key={number}
                            onClick={index === buttons.length - 1 ? removeNumber : () => convert(number)}
                            className={styles.Button}
                            disabled={number === '*'}
                        >
                            <p className={styles.Number}>
                                {number}
                                {index === buttons.length - 1 && <Arrow />}
                            </p>
                            <p className={styles.Letters}>
                                {letters}
                            </p>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default Keyboard;
