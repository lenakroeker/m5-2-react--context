import React, { useState, useEffect } from 'react';

export default function usePersistedState(initialValue, key) {
    const [storedState, setStoredState] = useState(() => {
        const currentItem = localStorage.getItem(key);
        if (currentItem) {
            return JSON.parse(currentItem);
        } else {
            return initialValue;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedState))
        localStorage.setItem("time", Math.floor(Date.now() / 1000))
    }, [storedState, key])

    return [storedState, setStoredState];
}