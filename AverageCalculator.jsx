import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [windowState, setWindowState] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [average, setAverage] = useState(null);

    const fetchNumbers = async (numberId) => {
        try {
            const response = await axios.get('http://localhost:9876/numbers/e');
            const data = response.data;
            setWindowState(data.windowPrevState);
            setNumbers(data.numbers);
            setAverage(data.avg);
        } catch (error) {
            console.error('Error fetching numbers:', error);
        }
    };

    return (
        <div className="average-calculator">
            <button onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
            <button onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
            <button onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
            <button onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>

            <h2>Previous Window State: {JSON.stringify(windowState)}</h2>
            <h2>Current Window State: {JSON.stringify(numbers)}</h2>
            <h2>Average: {average !== null ? average.toFixed(2) : 'N/A'}</h2>
        </div>
    );
};

export default AverageCalculator;