import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './../Pages/Home/index.js'
import Game from './../Pages/Game/index.js'
import Config from './../Pages/Config/index.js'

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/game" element={<Game/>} />
                <Route path="/config" element={<Config/>} />
            </Routes>
        </Router>
    )
}

export default Routing