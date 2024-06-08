import React from 'react';

import styles from '../styles/wardStateButton.module.css'


const WardStateButton = ({state }) => {
    // state 값에 따라 색상 결정
    const getColor = () => {
        if (state === 0) return 'red'; // fall이 1 이상이면 빨간색
        else return 'white'
    };

    const color = getColor();

    return (
        <div className =  {styles.stateBtn} style={{ backgroundColor: color }}></div>
    );
};

export default WardStateButton;