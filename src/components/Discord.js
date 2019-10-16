
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';





export class Discord extends Component {

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
        fetch('https://api.github.com/repos/newk5/discord-mod/releases/latest')
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
                        <h1>Discord module</h1>
                        <a style={{"cursor":"pointer"}} onClick={this.download}>Download</a><br/>
                        <i>Extract the contents of the zip file to the "modules" folder on the server root directory (if you don't have this folder create it)</i><br/><br/>
                        <p>Discord module used to interact with discord bots</p>
                        <h3>Initializing</h3>

                       
                                        <PrismHighlight language="javascript"  >
                                            {
`var disc = require("discord");

var events = {
    onMessage: function (event, roles) {
        let channel = event.channel.name;
        let serverName = event.guild.name;
        let userName = event.author.name;
        let msg = event.message.contentDisplay;
        console.log("server: " + serverName + ", channel: " + channel + ", user: " + userName + ", msg: " + msg);
    },
    onReady: function (event) {
        let totalUsersInTheServer = event.guildTotalCount;
        let totalUsersOnlineInTheServer = event.guildAvailableCount;
        let totalUsersOffline = event.guildUnavailableCount;

        console.log("ready");
    },
    onPrivateMsg: function (event) {
        let userName = event.author.name;
        let msg = event.message.contentDisplay;
        console.log(userName+": "+msg);

    }  
};

var discordBot = disc.init("<Your-Bot-Token>", events);
`
}
</PrismHighlight><hr/>
<h3>Bot events </h3>
<p><b>onPrivateMsg: function (event) </b>- <i>When the bot receives a private message</i></p>
<p><b>onMessage: function (event, roles)</b>  - <i>When a discord user sends a message to any of the channels the bot is in</i></p>
<p><b>onReady: function (event)</b>  - <i>When the bot connection has been fully initialized</i></p>

<PrismHighlight language="javascript"  >
                                            {
`{
    onMessage: function (event, roles) {
        let channel = event.channel.name;
        let serverName = event.guild.name;
        let userName = event.author.name;
        let msg = event.message.contentDisplay;

    },
    onReady: function (event) {
        let totalUsersInTheServer = event.guildTotalCount;
        let totalUsersOnlineInTheServer = event.guildAvailableCount;
        let totalUsersOffline = event.guildUnavailableCount;

    },
    onPrivateMsg: function (event) {
        let userName = event.author.name;
        let msg = event.message.contentDisplay;

    }  
}
`
}
</PrismHighlight>
<hr/>
<h3>Sending messages</h3>
<p><b>discordBot.send(string channel, string message) - sends a message to a specific channel</b></p>
<p><b>discordBot.message(string userName, string message) - sends a message to specific discord user</b></p>
<PrismHighlight language="javascript"  >
{`

function onPlayerConnect(player) {
    discordBot.send("channel", player.name+" has joined the server");
}
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