import React, { Component } from 'react'

import './game_styles.css';

import Header from './../../Components/Header/index.js'

class Game extends Component {
    render() {
        return(
            <div className="game">
                <Header />
            </div>
        )
    }
}

export default Game