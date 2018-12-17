
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import PrismHighlight from './PrismHighlight';




export class FileSystem extends Component {

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

                if (next.tagName == 'DIV') {
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




        //
    }

    download() {
        fetch('https://api.github.com/repos/newk5/filesystem-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }

    render() {


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Filesystem module</h1>
                        <a style={{"cursor":"pointer"}} onClick={this.download}>Download</a><br/>
                        <i>Extract the contents of the zip file to the "modules" folder on the server root directory (if you don't have this folder create it)</i><br/><br/>
                        <p>This module is used to create, read and delete files and folders from disk. It can also be used to verify if certain files and folders exist, or even renaming them or checking permissions</p>
                        <Accordion>
                            <AccordionTab header="Creating a new file" id="" ><br />

                                <PrismHighlight language="javascript"  >
                                    {
                                        `var fs = require("filesystem");

/* This operation can be done either asynchronously or synchronously*/

/*asynchronous operation*/
fs.appendToFile("test.txt", "this will be written to the file", function(){
    //this function will called after the file is created
});

/*synchronous operation*/
fs.appendToFile("test.txt", "this will be written to the file");
`
                                    }
                                </PrismHighlight>
                                <p>The <b>appendToFile</b> function can also be used to append text to an existing file.</p>

                            </AccordionTab>
                            <AccordionTab header="Reading a file" id="" ><br />

                                <PrismHighlight language="javascript"  >
                                    {
                                        `var fs = require("filesystem");

/* This operation can be done either asynchronously or synchronously*/

/*asynchronous operation*/
fs.readFile("test.txt", function(text){
    console.log(text);
});

/*synchronous operation*/
var text = fs.readFile("test.txt");
console.log(text);

`
                                    }
                                </PrismHighlight>

                            </AccordionTab >

                            <AccordionTab header="Deleting a folder" id="" ><br />

                                <PrismHighlight language="javascript"  >
                                    {
                                        `var fs = require("filesystem");

/* This operation can be done either asynchronously or synchronously*/

/*asynchronous operation*/
fs.deleteFolder("testFolder", function(text){
    console.log(text);
});

/*synchronous operation*/
fs.deleteFolder("testFolder");

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