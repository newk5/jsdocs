
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


var serverEvents = {
    onStart: function (connection, msg) { //when the server starts
        console.log(msg);
    },
    onMessage: function (conn, msg, uri, address) { //when the server receives a message from a client
        console.log("RECEIVED MSG: " + msg);
    },
    onOpen: function (conn, uri, addr) { //when a client connects to the server
        console.log("connected: " + addr);
    },
    onClose: function (conn, uri, address) { //when a client closes the connection
        console.log("closed: " + address);
    }
};

//starts up the websocket server and listens for messages on the /general endpoint
var socketServer = ws.startServer("/general", 3030, { events: serverEvents } );
`
}
</PrismHighlight><hr/>
<h3>Sending a message to all the clients connected to a specific endpoint</h3>
<PrismHighlight language="javascript"  >
                                            {
`
//sends a message to all clients to connected to the /general endpoint
socketServer.broadcast("/general", "hello");

`
}
</PrismHighlight><hr/>
<h3>Adding multiple endpoints</h3>
<PrismHighlight language="javascript"  >
                                            {
`
var newEndpointEvents = {
    onStart: function (connection, msg) { 
        console.log(msg);
    },
    onMessage: function (conn, msg, uri, address) {
        console.log("RECEIVED MSG: " + msg);
    },
    onOpen: function (conn, uri, addr) { 
        console.log("connected: " + addr);
    },
    onClose: function (conn, uri, address) { 
        console.log("closed: " + address);
    }
};

socketServer.addEndpoint("/chat",  { events: newEndpointEvents } );
socketServer.addEndpoint("/chat2",  { events: newEndpointEvents } );

`
}
</PrismHighlight><hr/>


<h3>Creating a websocket client</h3>

<PrismHighlight language="javascript"  >
                                            {
`
var ws = require("websockets");

var clientEvents = {
    onOpen: function (connection, data) { //when the client opens a connection to the websocket server

    },
    onMessage: function (msg) { //when the client receives a message from the server

    },
    onClose: function (code, reason, remote) { //when the client closes its connection to the websocket server

    },
    onError: function (error) { //when an error happens

    }
};
//sends a message to the server /general endpoint
var wsclient = ws.startClient("ws://localhost:3030/general", { events : clientEvents });

`
}
</PrismHighlight>
<hr/>
<h3>Sending messages to the server</h3>

<PrismHighlight language="javascript"  >
                                            {
`
wsclient.send("hello!");
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