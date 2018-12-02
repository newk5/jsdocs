
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';




export class Crypto extends Component {

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
                        <h1>Crypto module</h1>
                        <p>Hashing module</p>
                        <ul>
                            <li><b>SHA512</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>SHA256</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>SHA384</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>SHA224</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>MD5</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>encodeBase64</b>( string text , <i>(optional)</i> function(hashedResult) )</li>
                            <li><b>decodeBase64</b>( string text , <i>(optional)</i> function(hashedResult) )</li>

                            <p>All functions are called asynchronously when a function is passed</p>

                               <h3>Examples:</h3>
                          <PrismHighlight language="javascript"  >
                              {`var crypto = require("crypto");

/*asynchronous operation*/
crypto.SHA512("secretPassword", function(hashedResult){
   console.log(hashedResult);
});

/*synchronous operation*/
var hashedResult = crypto.SHA512("secretPassword");

`
                              }
                          </PrismHighlight>

                        </ul>


                    </div>
                </div>
            </div>

        );
    }
}