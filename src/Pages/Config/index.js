import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ChangePlayerNumbers from './ChangePlayerNumbers/ChangePlayerNumbers.js'

import './config_page.css'

class Config extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerNumber: 0
        }
    }


    // Ma wysyłać do propów zebrane dane
    players = 5

    render() {
        return(
            <div className="config_container">
                <div className="config_left_side">
                    <div className="config_tile">
                        <div className="config_tile_name">
                            konfiguracja gry
                        </div>
                        <div className="config_tile_card">
                            
                                <ChangePlayerNumbers />

                            <div className="card_tile">
                                <div className="card_name">
                                    ilość mafii
                                </div>
                                <button className="card_button">liczba</button>
                                <button className="card_button">liczba</button>
                                <button className="card_button">liczba</button>
                                <button className="card_button">liczba</button>
                                <button className="card_button">liczba</button>
                            </div>

                            <div className="card_tile">
                                <div className="card_name">
                                    Mistrz gry
                                </div>
                                <div className="card_gamemaster">
                                    <input placeholder="Nazwa mistrza gry" />
                                    <input placeholder="Zapewne coś tu powinno być" />
                                    <input placeholder="Zapewne coś tu powinno być" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="config_tile_addPlayer">
                        <div className="config_tile_name">
                            Ilość graczy: {this.state.playerNumber}
                        </div>
                        <div className="config_addPlayers">
                            <input placeholder="Nazwa gracza" />
                            <input placeholder="Nazwa gracza" />
                            <input placeholder="Nazwa gracza" />
                            <input placeholder="Nazwa gracza" />
                            <input placeholder="Nazwa gracza" />
                        </div>
                        <div className="config_tile_buttons">
                            <button className="button_play">
                                <Link to="/game">
                                    Zacznij grę
                                </Link>
                            </button>
                            <button className="button_reset">Zresetuj pola</button>
                        </div>
                    </div>
                </div>
                <div className="config_right_side">
                    <div className="config_tile_game">
                        <div className="config_tile_name">
                            przebieg rozgrywki
                        </div>
                        <div className="tile_game_tiles">
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                            <div className="mini_game_tile">
                                Zapewne coś ciekawego
                                Zapewne coś ciekawego
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Config