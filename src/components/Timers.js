
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';




export class Timers extends Component {

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
                        <h1>Timers</h1>

                        <Accordion activeIndex={0}>
                        <AccordionTab header="Timer functions and properties"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`Timer.interval -  integer
Timer.recurring -  boolean
Timer.cancel();
Timer.isActive() -  boolean
`
                                            }
                                        </PrismHighlight>
                                  
                           
                    </AccordionTab>
                    <AccordionTab header="Creating a timer"  id="" ><br />
                    <p>Timers.create( <u>boolean</u> recurring, <u>integer</u> interval, function, <i>(optional)  </i>params...  ) </p>
                          <PrismHighlight language="javascript"  >
                              {
`
/*Timer that will run every 5 seconds and print "hello!" to the console*/
var t = Timers.create(true, 5000, function (text) {
    console.log(text);
}, "hello!");

/*Timer that will wait 30 seconds, print "hello!" to the console and cancel the previous timer*/
Timers.create(false, 30000, function (text) {
    console.log(text);
    t.cancel();
}, "hello!");
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