import React from 'react';

import styles from './styles.module.scss';

type Props = {
    words: Array<string>;
};

const Output = ({ words }: Props): JSX.Element => (
    <div className={styles.Wrapper}>
        <div className={styles.Output}>
            <span>{words.join(', ')}</span>
        </div>
    </div>
);

export default Output;
