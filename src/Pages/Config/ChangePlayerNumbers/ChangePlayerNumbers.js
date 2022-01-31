import React, { Component } from 'react'

class ChangePlayerNumbers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerNumber: 0
        }
        this.setPlayerNumbers = this.setPlayerNumbers.bind(this)
    }
    setPlayerNumbers(nbr){
        this.setState({playerNumber : nbr})
        console.log(this.state.playerNumbers)
        const buttons = document.getElementsByClassName(`card_button`)
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].id.endsWith(nbr)) {
                buttons[i].style.backgroundColor = '#3333ff'
            } else {
                buttons[i].style.backgroundColor = '#ff3333'
            }
        }
    }
    render() {
        return(
            <div className="card_tile">
                <div className="card_name">
                    ilość graczy
                </div>
                <button id="button_5" className="card_button" onClick={() => this.setPlayerNumbers(5)}>5</button>
                <button id="button_7" className="card_button" onClick={() => this.setPlayerNumbers(7)}>7</button>
                <button id="button_9" className="card_button" onClick={() => this.setPlayerNumbers(9)}>9</button>
                <button id="button_11" className="card_button" onClick={() => this.setPlayerNumbers(11)}>11</button>
                <button id="button_13" className="card_button" onClick={() => this.setPlayerNumbers(13)}>13</button>
            </div>
        )
    }
}

export default ChangePlayerNumbers