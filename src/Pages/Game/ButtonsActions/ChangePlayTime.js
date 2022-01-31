
import React, { Component } from 'react'

class ChangePlayTime extends Component {
    constructor(props) {
        super(props)
    }
    ChangeTime() {
        //TODO: Zmmienia się w propach pora dnia
    }
    render() {
        return(
            <button className="action_tile" onClick={this.ChangeTime()}>
                Zmień porę dnia
            </button>
        )
    }
}

import React, { Component } from 'react'

class ChangePlayTime extends Component {
    constructor(props) {
        super(props)
    }
    ChangeTime() {
        //TODO: Zmmienia się w propach pora dnia
    }
    render() {
        return(
            <button className="action_tile" onClick={this.ChangeTime()}>
                Zmień porę dnia
            </button>
        )
    }
}

export default ChangePlayTime