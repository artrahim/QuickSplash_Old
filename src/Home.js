import React, { Component } from "react";
import {NavLink, HashRouter} from "react-router-dom";

import './Main.css';

class Home extends Component {

    render() {
        return (
            <HashRouter>
                <div id="navbarContainer">
                    <div id="navbar">
                        <ul>
                            <li><NavLink to="/createLobby">Create a Lobby</NavLink></li>
                            <li><NavLink to="/joinLobby">Join a Lobby</NavLink></li>
                        </ul>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

export default Home;
