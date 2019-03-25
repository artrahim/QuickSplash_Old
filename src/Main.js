import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";
import socketIOClient from "socket.io-client";

import Home from "./Home";
import CreateLobby from "./CreateLobby";
import JoinLobby from "./JoinLobby";
import Game from "./Game";

var socket;

class Main extends Component {

    constructor() {
        super();
        this.state = {endpoint: "http://localhost:3000/"};
        socket = socketIOClient(this.state.endpoint);
    }

    render() {
        return (
            <div>
                <div className="content">
                    <HashRouter>
                        <Route exact path="/" component={Home}/>
                        <Route path="/createLobby" component={CreateLobby}/>
                        <Route path="/joinLobby" component={JoinLobby}/>
                        <Route path="/game" component={Game}/>
                    </HashRouter>
                </div>
            </div>
        );
    }

}

export { Main, socket };
