
import React, { Component } from 'react'

class ReturnMove extends Component {
    constructor(props) {
        super(props)
    }
    ReturnMove() {
        //TODO: Przywraca grę do poprzedniego stanu
    }
    render() {
        return(
            <button className="action_tile" onClick={this.ReturnMove()}>
                Cofnij ruch
            </button>
        )
    }
}


import React, { Component } from 'react'

class ReturnMove extends Component {
    constructor(props) {
        super(props)
    }
    ReturnMove() {
        //TODO: Przywraca grę do poprzedniego stanu
    }
    render() {
        return(
            <button className="action_tile" onClick={this.ReturnMove()}>
                Cofnij ruch
            </button>
        )
    }
}

export default ReturnMove