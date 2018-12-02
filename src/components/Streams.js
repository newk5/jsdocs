
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';




export class Streams extends Component {

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
                        <h1>Streams</h1>

                        <Accordion activeIndex={0}>
                        <AccordionTab header="Input streams"  id="" ><br />
                          
                                        <PrismHighlight language="javascript"  >
                                            {
`
function onClientScriptData(player, stream) {
   var int = stream.readInt();
   var string =stream.readUTF(); //to read strings
   var byte = stream.readByte();
   var float = stream.readFloat();

}

`
                                            }
                                        </PrismHighlight>
                                  
                           
                    </AccordionTab>
                    <AccordionTab header="Output streams"  id="" ><br />
                          
                          <PrismHighlight language="javascript"  >
                              {
`
var stream = new Stream(1); //'1' will be the first int on the stream, this can be any number (this can used to identify the stream)
stream.writeString("hello");
stream.writeByte(2);
stream.writeInt(5);
stream.writeFloat(2.4);
stream.send(server, player);


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