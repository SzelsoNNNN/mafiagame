import React, { Component } from 'react'

import './game_styles.css';

import playerImg from './../../resources/images/gamemaster/profile_picture.png'
import logoImg from './../../resources/images/logo/Logo_Mafia.svg.png'

import Header from './../../Components/Header/index.js'
import ChangePlayTime from './ButtonsActions/ChangePlayTime.js'
import ReturnPlayer from './ButtonsActions/ReturnPlayer.js'
import ReturnMove from './ButtonsActions/ReturnMove.js'

class Game extends Component {
    render() {
        return(
            <div className="game">
                <Header />
                <div className="main_container">
                    <div className="left_side_main">
                        <div className="main_tile">
                            <div className="main_tile_name">
                                lista graczy
                            </div>
                            <div className="main_tile_players">
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />

                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>
                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />
                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>
                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />
                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>
                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />

                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>
                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />
                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>

                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />
                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>
                                </div>
                                <div className="player_tile">
                                    <div className="player_info">
                                        <div className="player_img">
                                            <img src={playerImg} />
                                        </div>
                                        <div className="player_name">
                                            [player.name]
                                        </div>
                                    </div>
                                    <div className="player_action">
                                        Kick
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center_side_main">
                        <div className="main_logo">
                            <img src={logoImg} />
                        </div>
                        <div className="main_history">
                            <div className="history_tile_name">
                                historia gry
                            </div>
                            <div className="history_tiles">
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                                <div className="history_tile">
                                    Historia ruchów
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_side_main">
                        <div className="main_tile">
                            <div className="main_tile_name">
                                zarządzanie zdarzeniami
                            </div>
                            <div className="actions_tiles">
                                <ChangePlayTime />
                                <ReturnPlayer />
                                <ReturnMove />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game