import React, { Component } from 'react'

class ReturnPlayer extends Component {
    constructor(props) {
        super(props)
    }
    ReturnPlayer() {
        //TODO: Przywraca gracza do gry dodając go spowrotem do propów
    }
    render() {
        return(
            <button className="action_tile" onClick={this.ReturnPlayer()}>
                Przywróć gracza
            </button>
        )
    }
}

export default ReturnPlayer