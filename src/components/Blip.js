
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';



export class Blip extends Component {

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
                        <h1>CoordBlipInfo</h1>

                        <Accordion activeIndex={0}>
                        <AccordionTab header="CoordBlipInfo functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`CoordBlipInfo.index - integer
CoordBlipInfo.colour - integer
CoordBlipInfo.position - Vector
CoordBlipInfo.scale - integer
CoordBlipInfo.spriteId - integer
CoordBlipInfo.worldId - integer
-------------------
constructor: CoordBlipInfo(integer index, integer worldId, Vector position, integer scale, Colour colour, integer spriteId) 
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