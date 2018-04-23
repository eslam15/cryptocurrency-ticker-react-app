import React, { Component } from 'react';
import './App.css';
import Tickers from './components/tickers/Tickers.js';
import Cryptocurrency from './components/cryptocurrency/Cryptocurrency.js';


class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <div className = "App-header">
                    <h2>Cryptocurrency Ticker</h2>
                </div>
                <Tickers />
            </div>
        );
    }
}

export default App;