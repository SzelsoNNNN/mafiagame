import React, { Component } from 'react'

import './header_styles.css'

import gamemasterPic from './../../resources/images/gamemaster/profile_picture.png'        
import gameTimeDay from './../../resources/images/gametime/day.png'
import gameTimeNight from './../../resources/images/gametime/night.png'

class Header extends Component {
    constructor(props) {
        super(props)

        //Pobiera z propów obecny czas
    }
    render() {
        const gamemasterAlt = "Gamemaster profile picture"
        /* if(this.props.game.time === 'day') {
            gameTimePicSrc = './../../resources/images/gametime/day.png'
            gameTimeAlt = "Dzień"
        } else {
            gameTimePicSrc = './../../resources/images/gametime/night.png'
            gameTimeAlt = "Noc"
        } */
        /* let gameTimePicSrc = './../../resources/images/dayTime.png'
        let gameTimeAlt = "Dzień" */
        
        let gameTimePicSrc = gameTimeNight 
        let gameTimeAlt = "Dzień"
        
        if(gameTimeAlt === 'Dzień') {
            document.body.style.backgroundColor = '#ffffff'
            document.body.style.color = '#000000'
        } else {
            document.body.style.backgroundColor = 'rgba(0, 0, 0, .9)'
            document.body.style.color = '#ffffff'
        }

        return(
            <div className="header_main">
                <div className="header_tile">
                    <img className="header_tile_picture" src={gamemasterPic} alt={gamemasterAlt}/>
                    <p className="header_tile_text">
                        gamemaster.name
                    </p>
                </div>
                <div className="header_tile">
                    <img className="header_tile_picture" src={gameTimePicSrc} alt={gameTimeAlt} />
                    <p className="header_tile_text">
                        {gameTimeAlt}
                    </p>    
                </div>
                <div className="header_tile">
                    <p className="header_tile_text">
                        Liczba mieszkańców: residents.count
                    </p>
                </div>
                <div className="header_tile">
                    <p className="header_tile_text">
                        Liczba mafii: mafia.count
                    </p>
                </div>
            </div>
        )
    }
}

export default Header