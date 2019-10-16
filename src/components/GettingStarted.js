
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
                    command: () => window.location = "https://mega.nz/#!LrxWTKCa!Yx0O1QjV14lWP2h22kPOdMNN0lkVPFnPVW6uqy8edns"


                }
            ]

        };

    }

    downloadLinux(e) {
        window.location = "https://mega.nz/#!emxwXYiI!qRViBw8DDhxnh3YhcuNxRK9qZOXoOwOdMW0bmITupT8";
    }

    downloadWin64(e) {
        window.location = "https://mega.nz/#!qjxSmQpb!M0UyptNkUtgXf9arWj27Gs_Pn3SJs2PCM2rSb04_TpE";
    }

    downloadSample(e) {
        window.location = "https://mega.nz/#!Cm4nACzA!vJLlNMpoIB7rFrMPyHr--cso41ZHYP2lDsB6PQn0CBM";

    }

    downloadSQL() {
        fetch('https://api.github.com/repos/newk5/sql-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }

    downloadHttp() {
        fetch('https://api.github.com/repos/newk5/httpclient-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }

    downloadFS() {
        fetch('https://api.github.com/repos/newk5/filesystem-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }


    downloadIRC() {
        fetch('https://api.github.com/repos/newk5/ircbot-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
    }



    downloadCrypto() {
        fetch('https://api.github.com/repos/newk5/crypto-mod/releases/latest')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                window.location.href = json.assets[0].browser_download_url;
            });
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
                                <Button icon="pi pi-check" onClick={this.downloadLinux} className="success" label="Download (x64)" iconPos="right" />
                            </div>
                            <div className="p-col dl-wrapper">
                                <h2 style={{ right: '38px' }}>Windows</h2>
                                <img src="assets/layout/images/windows.png" />
                                <SplitButton label="Download (x64)" onClick={this.downloadWin64} style={{ width: '189px', marginTop: '50px' }}
                                    className="p-button-success" model={this.state.items} />

                            </div>
                        </div>
                        <ul>
                            <li><a href="https://adoptopenjdk.net/releases.html">Download and install JDK8 if you don't have it already</a></li>
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
                        <hr />
                        <h3>Sample script</h3>
                        <div>
                            The sample script is set up with an IRC bot that connects to a LUnet channel that echoes what people
                            type ingame and what people type on IRC. This script uses SQLite for player registration and has the /login
                            command the /register command and the /stats command. If you'd like to use MySQL instead of SQLite on this
                            sample script, all you need to change is how you create the DB connection. Everything else is the exact same.
                            The SQL module shares the same API for both SQLite and MySQL, function names are all the same. So if you ever
                             need to migrate your server from SQLite to MySQL or MySQL to SQLite, all you'll need to change is how you create
                            the connection.
                        </div><br />
                        <a style={{ "cursor": "pointer", "fontSize": "16px" }} onClick={this.downloadSample}>Download</a><br />

                        <ul>
                            <li>Extract the contents to the /src/ folder</li>
                            <li>Download the modules used by the script:<br />

                                <a style={{ "cursor": "pointer" }} onClick={this.downloadSQL}>sql</a><br />
                                <a style={{ "cursor": "pointer" }} onClick={this.downloadCrypto}>crypto</a><br />
                                <a style={{ "cursor": "pointer" }} onClick={this.downloadHttp}>httpclient</a><br />
                                <a style={{ "cursor": "pointer" }} onClick={this.downloadIRC}>ircbot</a><br />
                                <a style={{ "cursor": "pointer" }} onClick={this.downloadFS}>filesystem</a><br />

                            </li>
                            <li>Extract the contents of each module zip file to the /modules/ folder (including the lib folder)</li>

                        </ul>



                    </div>
                </div>
            </div>

        );
    }
}
