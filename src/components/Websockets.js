
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';





export class Websockets extends Component {

    constructor() {
        super();
        this.state = {
            

        };

    }

    

    appendClickListeners() {
        let t = document.getElementsByClassName("title");
        Array.from(t).forEach(function (element) {
            element.addEventListener('click', function () {
                var next = element.nextElementSibling;
               
                if (next.tagName == 'DIV'){
                    next = next.nextElementSibling;
                }
                if (next.style.display == "block") {
                    next.style.setProperty("display", "none");
                    element.style.color = "white";
                    element.style.fontSize = "17px";


                } else {
                    next.style.setProperty("display", "block");
                    element.style.color = "#3990da";
                    element.style.fontSize = "20px";
                }
            });

        });
    }


    componentDidMount() {
        let t = document.getElementsByClassName("language-javascript");
        Array.from(t).forEach(function (element) {
            element.style.setProperty("display", "block");
        });
    }

    download() {
        fetch('https://api.github.com/repos/newk5/websockets-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }

    render() {


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Websockets module</h1>
                        <a style={{"cursor":"pointer"}} onClick={this.download}>Download</a><br/>
                        <i>Extract the contents of the zip file to the "modules" folder on the server root directory (if you don't have this folder create it)</i><br/><br/>
                        <p>Websockets module used to create websocket servers or clients. Can be used to communicate with the browser or other websocket servers</p>
                        <h3>Creating a websocket server</h3>

                       
                                        <PrismHighlight language="javascript"  >
                                            {
`var ws = require("websockets");

var wsserver = ws.startServer("localhost", 3030, {
    events: {
        onStart: function (msg) { //when the websocket server starts
            wsserver.broadcast("hello to all clients!"); //sends a message to all of the connected clients
        },
        onMessage: function (conn, msg) { //when the server receives a message from a client

        },
        onOpen: function (connection, client) { //when a client opens a connection to this websocket server

        },
        onClose: function (connection, code, reason, remote) { //when a client closes a connection to this websocket server

        },
        onError: function (connection, error) { //when an error happens

        }

    }
});
`
}
</PrismHighlight><hr/>
<h3>Creating a websocket client</h3>

<PrismHighlight language="javascript"  >
                                            {
`
var ws = require("websockets");

var wsclient = ws.startClient("ws://localhost:3030", {
    events: {
        onOpen: function (connection, data) { //when the client opens a connection to the websocket server

        },
        onMessage: function (msg) { //when the client receives a message from the server

        },
        onClose: function (code, reason, remote) { //when the client closes its connection to the websocket server

        },
        onError: function (error) { //when an error happens

        }
    }
});

`
}
</PrismHighlight>
<hr/>

                   

                    </div>
                </div>
            </div>

        );
    }
}