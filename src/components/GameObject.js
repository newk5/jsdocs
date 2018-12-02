
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';




export class GameObject extends Component {

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
                        <h1>GameObject</h1>

                        <Accordion activeIndex={0}>
                        <AccordionTab header="GameObject functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`GameObject.shotReportEnabled -  boolean
GameObject.rotateBy( float x, float  y, float  z, float  w, millis)
GameObject.rotateByEuler(float  x, float  y, float z, millis)
GameObject.rotateToEuler(float x, float y, float z, integer millis)
GameObject.rotateTo(float x, float y, float z, float w, integer millis);
GameObject.moveTo(float  x,float  y, float z, integer millis)
GameObject.moveBy(float  x, float y, float z, integer millis) 
GameObject.delete()
GameObject.rotation -  Quaternion
GameObject.touchedReportEnabled -  boolean
GameObject.valid -  boolean
GameObject.world  -  integer
GameObject.pos -  Vector
GameObject.rotationEuler -  Vector
GameObject.alpha  -  integer | GameObject.setAlpha(integer alpha, integer fadeTime)
GameObject.isStreamedForPlayer(player) -  boolean
GameObject.model  -  integer
GameObject.id -  integer
GameObject.isValid() - boolean
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