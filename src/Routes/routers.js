import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Game from './../Pages/Game/index.js'
import Config from './../Pages/Config/index.js'

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Game/>} />
                <Route path="/game" element={<Game/>} />
                <Route path="/config" element={<Config/>} />
            </Routes>
        </Router>
    )
}

export default Routing