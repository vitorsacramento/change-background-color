import React, { useState } from 'react';
import styles from './InputColor.module.css';

type InputColorProps = {
    inputColor: (value: string) => void;
}

export const InputColor = ({ inputColor }: InputColorProps) => {
    const setOnlyNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text: string = event.target.value;
        const pattern = /[^0-9]/;
        const result = text.match(pattern);

        if (result) {
            event.target.value = '';
        }
    }

    const setMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text: string = event.target.value;

        if (text > '255') {
            event.target.value = '';
        }
    }

    const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOnlyNumberInput(event);
        setMaxValue(event);
        inputGetColor(event);
    }

    const inputGetColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputColor(event.target.value);
    }

    return (
        <div>
            <input className={styles.input}
                type="text"
                maxLength={3}
                onChange={handleChangeEvent}
            />
            <div></div>
        </div>

    );
}
