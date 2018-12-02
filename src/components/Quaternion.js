
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';




export class Quaternion extends Component {

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
                        <h1>Quaternion</h1>

                        <Accordion activeIndex={0}>
                        <AccordionTab header="Functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`
Quaternion.x
Quaternion.y
Quaternion.z
Quaternion.w
----------------
constructor: new Quaternion(float x, float y, float z, floatw)
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