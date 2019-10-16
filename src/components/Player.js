
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';



export class Player extends Component {

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
                        <h1>Player</h1>

                        <Accordion>
                        <AccordionTab header="Player functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`Player.standingOnObject -  GameObject
Player.HP -  float
Player.gameKeys -  integer
Player.armour -  float
Player.score -  integer
Player.cameraLocked -  boolean
Player.action -  integer
Player.getWeaponAtSlot(integer slot)  -  integer
Player.state  -  integer
Player.id  -  integer
Player.isValid() - boolean
Player.getAmmoAtSlot(integer slot) -  integer
Player.UID2 -  string
Player.IP -  string
Player.onFire -  boolean
Player.setAnimation(int groupId, integer animationId)
Player.UID -  string
Player.playerClass -  integer
Player.crouching -  boolean
Player.secondaryWorld -  integer
Player.name -  string
Player.putInVehicle(Vehicle v, integer slot, boolean makeRoom, boolean warp)
Player.redirectToServer(String address, integer port, String serverPassword, String userPassword)
Player.removeAllWeapons()
Player.removeFromVehicle() -  boolean
Player.removeWeapon(integer weaponID)
Player.requestModuleList()
Player.restoreCamera()
Player.typing -  boolean
Player.spectateTarget -  player 
Player.cameraPosition -  Vector
Player.UniqueID -  integer
Player.hasOption(playerOption) |  Player.setOption(PlayerOption option, boolean value)
Player.spawned -  boolean
Player.away -  boolean
Player.ping -  integer
Player.FPS -  double
Player.giveMoney(integer ammount)
Player.giveWeapon(integer wepID, integer ammo)
Player.skin -  integer
Player.admin -  boolean
Player.weaponAmmo  -  integer
Player.aimDirection -  Vector
Player.speed -  Vector
Player.standingOnVehicle -  Vehicle
Player.vehicle -  Vehicle
Player.valid -  boolean
Player.weapon -  integer
Player.world -  integer
Player.pos -  Vector
Player.alpha -  integer | player.setAlpha(integer alpha, integer fadetime)
Player.aimPosition -  Vector
Player.uniqueWorld -  integer
Player.immunities -  PlayerImmunity
Player.heading -  float;
Player.colourHex -  integer
Player.team -  integer
Player.colour -  Colour
Player.inVehicleStatus -  integer
Player.setCameraPos(float x, float y, float z, float lookX,  float lookY, float lookZ)
Player.immunityFlags -  integer
Player.weaponSlot -  integer
Player.money -  integer
Player.inVehicleSlot -  integer
Player.isStreamedForPlayer(player) -  boolean
Player.wantedLevel - integer
Player.addSpeed(float x, float y, float z)
Player.ban()
Player.forceSelect()
Player.forceSpawn()
Player.isCompatibleWithWorld(integer world) -  boolean
`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Player Immunity flags"  id="playerImFlags">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
   `PlayerImmunity.BulletProof - integer
   PlayerImmunity.FireProof - integer
   PlayerImmunity.ExplosionProof - integer
   PlayerImmunity.CollisionProof - integer
   PlayerImmunity.BulletProof  - integer
   PlayerImmunity.CannotFall - integer
   PlayerImmunity.NoCriticals - integer

   Examples:
   
function onPlayerSpawn(player) {
    var pi = player.immunities;
    //adding immunities
    pi.add(PlayerImmunity.BulletProof);
    pi.add(PlayerImmunity.FireProof );
    pi.add(PlayerImmunity.ExplosionProof );

    player.immunities = pi;
    //removing
    pi.remove(PlayerImmunity.FireProof );
    pi.remove(PlayerImmunity.ExplosionProof );
    player.immunities = pi;
}
`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Player option flags"  id="playerOptionFlags">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
`PlayerOption.Controllable - integer
PlayerOption.CanDriveby - integer
PlayerOption.WhiteScanlines - integer
PlayerOption.GreenScanlines - integer
PlayerOption.Widescreen - integer
PlayerOption.ShowMarkers - integer
PlayerOption.CanAttack - integer
PlayerOption.HasMarker - integer
PlayerOption.ChatTagsEnabled - integer
PlayerOption.DrunkEffects - integer

Examples:

function onPlayerSpawn(player) {
    var canDriveBy = player.hasOption(PlayerOption.CanDriveby);
    if (canDriveBy){
        player.setOption(PlayerOption.CanDriveby, false);
    }
}
                                              
`
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