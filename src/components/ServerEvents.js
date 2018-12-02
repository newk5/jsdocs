
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';




export class ServerEvents extends Component {

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
                        <h1>Server events</h1>

                        <Accordion>
                        <AccordionTab header="Server events"  id="serverEvents" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`function onServerLoadScripts() {

}


function onServerUnloadScripts() {

}

function onServerShutdown() {

}

function onServerInitialise() {

}

function onPluginCommand(identifier, message) {

}

function onIncomingConnection(name, password, ip) {
    return name;
}

function onServerPerformanceReport(entry, descriptions, times) {

}
`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Player events"  id="playerEvents">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
   `function onPlayerSpawn(player) {

}

function onPlayerConnect(player) {

}


function onPlayerDisconnect(player, reason) {

}


function onPlayerEnterVehicle(player, vehicle, slot) {

}


function onPlayerExitVehicle(player, vehicle) {

}

function onPlayerCommand(player, message) {

}


function onPlayerCrashReport(player, crashLog) {

}

function onPlayerSpectate(player, spectated) {

}


function onPlayerKeyBindUp(player, keyBindIndex) {

}


function onPlayerKeyBindDown(player, keyBindIndex) {

}


function onPlayerPrivateMessage(player, recipient, message) {

    return true;
}


function onPlayerMessage(player, message) {
   
}


function onPlayerAwayChange(player, isAway) {

}


function onPlayerEndTyping(player) {


}


function onPlayerBeginTyping(player) {


}


function onPlayerGameKeysChange(player, oldKeys, newKeys) {

}


function onPlayerCrouchChange(player, isCrouching) {

}


function onPlayerOnFireChange(player, isOnFire) {

}


function onPlayerActionChange(player, oldAction, newAction) {

}


function onPlayerStateChange(player, oldState, newState) {

}


function onPlayerNameChange(player, oldName, newName) {

}


function onPlayerRequestEnterVehicle(player, vehicle, slot) {

    return true;

}


function onPlayerDeath(player, killer, reason, bodyPart) {
   
}


function onPlayerRequestSpawn(player) {


    return true;
}


function onPlayerRequestClass(player, classIndex) {

}

function onPlayerModuleList(player, list) {

}


function onClientScriptData(player, stream) {

}

function onPlayerUpdate(player, updateType) {

}

function onPlayerMove(player, oldX, oldY, oldZ, newX, newY, newZ) {

}

function onPlayerHealthChange(player, lastHP, newHP) {

}

function onPlayerArmourChange(player, lastArmour, newArmour) {

}

function onPlayerWeaponChange(player, oldWep, newWep) {

}

`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Vehicle events"  id="vehicleEvents">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
`function onVehicleExplode(vehicle) {

}

function onVehicleRespawn(vehicle) {

}

function onVehicleUpdate(vehicle, updateType) {

}
`
                                            }
                                        </PrismHighlight>
                                   
                            </AccordionTab>
                            <AccordionTab header="Checkpoint events"  id="checkPointEvents">
                           
                                        <PrismHighlight language="javascript"  >
                                            {
`function onCheckPointExited(checkPoint, player) {

}


function onCheckPointEntered(checkPoint, player) {

}`
                                            }
                                        </PrismHighlight>
                          
                            </AccordionTab>
                            <AccordionTab header="Pickup events"  id="pickupEvents" >
                           
                                    <PrismHighlight language="javascript"  >
                                            {
 `function onPickupRespawn(pickup) {

}


function onPickupPicked(pickup, player) {

}


function onPickupPickAttempt(pickup, player) {


    return true;
}`
                                            }
                                        </PrismHighlight>
                               
                            </AccordionTab>
                            <AccordionTab header="Object events" id="objectEvents">
                            
                                    <PrismHighlight  language="javascript"  >
                                            {
 `function onObjectTouched(object, player) {

}


function onObjectShot(object, player, weaponId) {

}`
                                            }
                                    </PrismHighlight>
                             
                            </AccordionTab>
                        </Accordion>


                    </div>
                </div>
            </div>

        );
    }
}