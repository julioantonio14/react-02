import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
    console.log('h1 clicado');
};

function App() {
    const [counter, setCounter] = useState(0);

    //componetDidUpdate = executa toda vez que o component atualiza
    useEffect(() => {
        document.querySelector('h1')?.addEventListener('click', eventFn);
        console.log('componetDidUpdate');
    });

    //componetDidMount = executa 1x
    let didInit = false;
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            console.log('componetDidMount');
        }
    }, []);
    useEffect(() => {
        return () => {
            document.querySelector('h1')?.removeEventListener('click', eventFn);
        };
    }, []);

    //Com dependência - executa toda vez que a dependência mudar
    useEffect(() => {
        console.log('Counter mudou para', counter);
    }, [counter]);

    return (
        <div className="App">
            <h1>Contadora: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
}

export default App;
