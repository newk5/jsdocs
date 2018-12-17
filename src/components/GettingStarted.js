
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';


export class GettingStarted extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Download (x86)',
                    icon: 'pi pi-refresh',
                    command: () => window.location = "https://mega.nz/#!qyxw3CSQ!xbEEBpNXpDrb4Bt-ZYw-w06XcUExDvsKz-A2ljbzBRY"


                }
            ]

        };

    }

    downloadLinux(e){
        window.location = "https://mega.nz/#!WjIkRY7T!2JoImkCnc4VsOs6cxSbOaaH7ye0u-z6ZPjdBvswcyE8";
    }

    downloadWin64(e){
        window.location = "https://mega.nz/#!aqJURawD!jg_9s8E0BrSZAWqKPY7u3csOAYiljSO7VyDuXu0uzBY";
    }
  

    componentDidMount() {
    }

    render() {


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Getting started</h1>


                        <div className="p-grid">
                            <div className="p-col dl-wrapper">
                                <h2 style={{ right: '38px' }} >Linux</h2>
                                <img src="assets/layout/images/linux.png" />
                                <Button icon="pi pi-check" onClick={this.downloadLinux}  className="success" label="Download (x64)" iconPos="right" />
                            </div>
                            <div className="p-col dl-wrapper">
                                <h2 style={{ right: '38px' }}>Windows</h2>
                                <img src="assets/layout/images/windows.png" />
                                <SplitButton label="Download (x64)" onClick={this.downloadWin64} style={{ width: '189px', marginTop: '50px' }}
                                    className="p-button-success" model={this.state.items} />

                            </div>
                        </div>
                        <ul>
                            <li><a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Download and install JDK8 if you don't have it already</a></li>
                            <li>Download the plugin above and extract the folder from the zip file</li>
                            <li><a href="https://forum.vc-mp.org/?board=4.0">Download the latest VCMP server and put it on the folder you extracted</a></li>

                            <li>Open javaplugin.properties and edit <i>jvmLibPath</i> and <i>classPath</i> (follow the instructions on the file)</li>
                            <li>Delete the instructions on the file after you're done editing it</li>
                            <li>Start up the server</li>

                        </ul>

                        <h3>A few notes</h3>

                        <ul>
                            <li>All javascript code must be inside the "src" folder</li>
                            <li>The entry script file must be named "main.js" and must be placed on the root of "src"</li>
                            <li>Use the <i>load( pathToJavascriptFile );</i> function to load other javascript files (this function is equivalent to squirrel's <i>dofile()</i> function) </li>
                        </ul>

                    </div>
                </div>
            </div>

        );
    }
}
