import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import './Lobby.css';

class JoinLobby extends Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <title>Join a lobby</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet" />
                <h1>[INSERT LOGO HERE]</h1>
                <br />
                <h1>JOIN A LOBBY</h1>
                <br />
                <div id="container">
                    <label htmlFor="joinCode">ENTER A JOIN CODE: </label>
                    <input defaultValue="" type="text" className="input" id="joinCode"/>
                    <br /><br />
                    <label htmlFor="nickname">WHAT SHOULD WE CALL YOU?: </label>
                    <input defaultValue="" type="text" className="input" id="nickname"/>
                    <br /><br />
                </div>
                <h2>Choose an avatar</h2>
                <br/>
                <table>
                    <tbody><tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr></tbody>
                </table>
                <br/>
                <NavLink to="/Game"><img src={ require('./images/blueSplash.png') } alt="button" /></NavLink>
            </div>
        );
    }
}

export default JoinLobby;
