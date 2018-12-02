
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';





export class IRC extends Component {

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

    render() {


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>IRCBot module</h1>
                        <p>IRC module used to create IRC bot to interact with the server </p>
                        <h3>Creating the connection and joining the server </h3>

                       
                                        <PrismHighlight language="javascript"  >
                                            {
`var irc = require("ircbot");

var config = new IRCConfig()
    .setName("guest151234") //bot name
    .setServerHostname("irc.liberty-unleashed.co.uk") //IRC server ip
    .setServerPort(6667) //IRC server port
    .addAutoJoinChannel("#IRCTest162")
    .addAutoJoinChannel("#IRCTest162Staff channelPassword");


var events = {
    onConnect: function (msg) {
        console.success(msg);
    },
    onMessage: function (channel, user, msg) {
        server.sendClientMsg(null, new Colour(93, 193, 89), "(IRC) " + user.nick + ": " + msg)
    }
};

var bot = irc.init(config, events);
`
}
</PrismHighlight><hr/>
<h3>IRC Events </h3>
<p><b>onConnect: function (string msg) </b>- <i>When the bot successfully connects to the IRC server</i></p>
<p><b>onMessage: function (string channel, IRCUser user, string msg)</b>  - <i>When an IRC user in any of the channels the bot joined types on IRC</i></p>

<PrismHighlight language="javascript"  >
                                            {
`{
    onConnect: function (msg) {
        console.success(msg);
    },
    onMessage: function (channel, user, msg) {
        server.sendClientMsg(null, new Colour(93, 193, 89), "(IRC) " + user.nick + ": " + msg)
    }
}

`
}
</PrismHighlight>
<hr/>
<h3>Echoing from the server to IRC</h3>
<p><b>bot.echo(string channel, string message)</b></p>
<PrismHighlight language="javascript"  >
{`
var irc = require("ircbot");

function onPlayerConnect(player) {
    var red = irc.color("RED");
    bot.echo("#IRCTest162", red + player.name + " has joined the server");
}
`
}
</PrismHighlight> 
<hr/>
<h3>IRCUser Object </h3>
<PrismHighlight language="javascript"  >
{`IRCUser.nick - string
IRCUser.op - boolean
IRCUser.hop - boolean
IRCUser.sop - boolean
IRCUser.vop - boolean
IRCUser.owner - boolean
IRCUser.getLevel() - string

`
}
</PrismHighlight>   <hr/>
<h3>IRC Colors and styles </h3>
<PrismHighlight language="javascript"  >
{`
"NORMAL"
"BOLD"
"UNDERLINE"
"WHITE"
"BLACK"
"DARK_BLUE"
"DARK_GREEN"
"RED"
"BROWN"
"PURPLE"
"OLIVE"
"YELLOW"
"GREEN"
"TEAL"
"CYAN"
"BLUE"
"MAGENTA"
"DARK_GRAY"
"LIGHT_GRAY"

Examples: 
    var bold = irc.color("BOLD");
    var red = irc.color("RED");
    var cyan = irc.color("CYAN");
    bot.echo("#IRCTest162", bold + "this text is bold");
    bot.echo("#IRCTest162", bold + red+"this text is bold red");
    bot.echo("#IRCTest162", red  + "this text is red" + cyan + " and this text is cyan");


`
}
</PrismHighlight>  
                   

                    </div>
                </div>
            </div>

        );
    }
}