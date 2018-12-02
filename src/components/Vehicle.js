
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';



export class Vehicle extends Component {

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
                        <h1>Vehicle</h1>

                        <Accordion>
                        <AccordionTab header="Vehicle functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`Vehicle.delete()
Vehicle.detonate()
Vehicle.isValid() - boolean
Vehicle.respawn()
Vehicle.damage -  VehicleDamage
Vehicle.syncReasonOrdinal -  integer
Vehicle.speed -  Vector
Vehicle.radio -  integer
Vehicle.getHandlingRule(integer ruleIndex) | setHandlingRule(integer ruleIndex, double value)
Vehicle.world -  integer
Vehicle.turrentRotation -  Rotation2d
Vehicle.pos -  Vector
Vehicle.taxiLight -  boolean
Vehicle.spawnRotationEuler -  Vector
Vehicle.damageHex -  integer
Vehicle.model -  integer
Vehicle.id -  integer
Vehicle.idleRespawnTimeout -  integer
Vehicle.spawnRotation -  Quaternion
Vehicle.immunities -  VehicleImmunity
Vehicle.setTurnSpeed(float x, float y, float z, boolean add, boolean relative)
Vehicle.getTurnSpeed(boolean relative) -  vector
Vehicle.rotation -  Quaternion 
Vehicle.HP -  float
Vehicle.syncController -  Player
Vehicle.lightsData -  integer
Vehicle.immunityFlags -  integer
Vehicle.rotationEuler -  Vector
Vehicle.syncReason -  VehicleSyncReason
Vehicle.isStreamedForPlayer(player) -  boolean
Vehicle.wrecked -  boolean
Vehicle.occupant -  Player
Vehicle.spawnPos -  Vector
Vehicle.hasOption(integer optionID) |  setOption(VehicleOption setting, boolean value)
Vehicle.colours -  VehicleColours | setColours(integer primary, integer secondary)
`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Vehicle Immunity flags"  id="vehImFlags">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
   `VehicleImmunity.BulletProof - integer
VehicleImmunity.FireProof - integer
VehicleImmunity.ExplosionProof - integer
VehicleImmunity.CollisionProof - integer
VehicleImmunity.MeleeProof - integer
VehicleImmunity.Windows - integer
VehicleImmunity.Tyres - integer
VehicleImmunity.FlipDamage - integer
VehicleImmunity.hex - integer
----------------------
Contructor:  VehicleImmunity(integer... flags) 

Examples:

function onVehicleRespawn(vehicle) {
    vehicle.immunities = ( VehicleImmunity.FireProof | VehicleImmunity.BulletProof );
}
`
                                            }
                                        </PrismHighlight>
                                  
                            </AccordionTab>
                            <AccordionTab header="Vehicle option flags"  id="playerOptionFlags">
                                
                                        <PrismHighlight language="javascript"  >
                                            {
`VehicleOption.DoorsLocked - integer
VehicleOption.Alarm - integer
VehicleOption.Lights - integer
VehicleOption.RadioLocked - integer
VehicleOption.Ghost - integer
VehicleOption.Siren - integer
VehicleOption.SingleUse - integer 

Examples:

function onVehicleRespawn(vehicle) {
    var locked = vehicle.hasOption(VehicleOption.DoorsLocked );
    if (locked ){
        vehicle.setOption(VehicleOption.DoorsLocked, false );
    }
}
                                              
`
                                            }
                                        </PrismHighlight>
                                   
                            </AccordionTab>
                            <AccordionTab header="VehicleColours"  id="playerOptionFlags">
                                
                                <PrismHighlight language="javascript"  >
                                    {
`VehicleColours.primary - integer
VehicleColours.secondary - integer
------------------------------
Contructor:  VehicleColours(integer primary, integer secondary)   

function onVehicleRespawn(vehicle) {
    vehicle.colours = new VehicleColours(0xFFFF5500, 0xFFFF5500);
}
`
                                    }
                                </PrismHighlight>
                           
                    </AccordionTab>
                    <AccordionTab header="Rotation2d"  id="playerOptionFlags">
                                
                                <PrismHighlight language="javascript"  >
                                    {
`Rotation2d.horizontal - float
Rotation2d.vertical - float
----------------------
Contructor:  Rotation2d(float horizontal, float vertical) 

Examples:

function onVehicleRespawn(vehicle) {
    vehicle.turrentRotation = new Rotation2d(2.1, 3.6);
}
                                    
`
                                    }
                                </PrismHighlight>
                           
                    </AccordionTab>
                    <AccordionTab header="Vehicle Sync reason flags"  id="playerOptionFlags">
                                
                                <PrismHighlight language="javascript"  >
                                    {
`VehicleSyncReason.NotSynced - integer
VehicleSyncReason.Driver - integer
VehicleSyncReason.PreviousDriver - integer
VehicleSyncReason.Passenger - integer
VehicleSyncReason.Near - integer
                                     
`
                                    }
                                </PrismHighlight>
                           
                    </AccordionTab>
                            <AccordionTab header="Vehicle damage flags"  id="vehDamageFlags">
                                
                                <PrismHighlight language="javascript"  >
                                    {
`VehicleDamage.Door.FrontLeft - integer
VehicleDamage.Door.FrontRight - integer
VehicleDamage.Door.RearLeft - integer
VehicleDamage.Door.RearRight - integer
VehicleDamage.Door.Bonnet - integer
VehicleDamage.Door.Boot - integer

VehicleDamage.DoorStatus.Undamaged - integer
VehicleDamage.DoorStatus.Damaged - integer
VehicleDamage.DoorStatus.Flapping - integer
VehicleDamage.DoorStatus.Detached - integer

VehicleDamage.Panel.LeftWing - integer
VehicleDamage.Panel.RightWing - integer
VehicleDamage.Panel.FrontBumper - integer
VehicleDamage.Panel.RearBumper - integer
VehicleDamage.Panel.Windscreen - integer

VehicleDamage.PanelStatus.Undamaged - integer
VehicleDamage.PanelStatus.Damaged - integer
VehicleDamage.PanelStatus.Detached - integer

VehicleDamage.TyreStatus.Undamaged - integer
VehicleDamage.TyreStatus.Flat - integer
VehicleDamage.TyreStatus.Detached - integer

VehicleDamage.Tyre.LeftFront - integer
VehicleDamage.Tyre.LeftRear - integer
VehicleDamage.Tyre.RightFront - integer
VehicleDamage.Tyre.RightRear - integer

VehicleDamage.getTyreStatus(integer tyre)  - integer
VehicleDamage.setTyreStatus(integer tyre, integer tyreStatus) 
VehicleDamage.setPanelStatus(integer panel, integer panelStatus)
VehicleDamage.getPanelStatus(integer panel)   - integer
VehicleDamage.getTyreShift(integer tyre) - integer
VehicleDamage.damage - integer
VehicleDamage.getPanelShift(integer panel)  - integer
VehicleDamage.getDoorStatus(integer door)  - integer
VehicleDamage.setDoorStatus(integer door, integer doorStatus)
VehicleDamage.getDoorShift(integer door)

Constructor:  VehicleDamage(integer damage) 

Examples:

function onVehicleRespawn(vehicle) {
    VehicleDamage vd = vehicle.damage;

    vd.setDoorStatus(VehicleDamage.Door.FrontLeft, VehicleDamage.DoorStatus.Detached);
    vd.setDoorStatus(VehicleDamage.Door.FrontRight, VehicleDamage.DoorStatus.Damaged);

    vd.setTyreStatus(VehicleDamage.Tyre.RightFront, VehicleDamage.TyreStatus.Flat);

    vehicle.damage = vd;

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