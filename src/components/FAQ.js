import React, { Component } from 'react';
import './faq.css';

export class FAQ extends Component {

    constructor() {
        super();
        this.state = {
          
        }

    }

    componentDidMount() {
       

    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card faq">
                        <h1>Frequently asked questions</h1>
                        <br/><br/>
                       <ul>
                           <li >
                               <b>Can I use node.js modules with this plugin?</b><br/>
                               No. This plugin is a javascript plugin, not a node.js plugin.
                               As a result, node.js modules will not work.
                           
                           </li>
                           <li>
                               <b>Why do I have to install the JDK to use this plugin?</b><br/>
                                This plugin relies on the already existent VCMP Java plugin 
                                to expose the VCMP environment to the javascript context. So the JDK 
                                is necessary for the java plugin. The reason for this is to facilitate maintainability, meaning, if a bug is 
                                fixed on the java plugin, it will be automatically fixed for this plugin aswell, or if a new VCMP
                                update is released and the java plugin is updated, this one will automatically be up to date too
                                since they share the same (native) codebase. All IO operations are also implemented in Java.
                           </li>
                           <li >
                               <b>I get an error when starting the server: "VcmpPluginInit returned 0"</b><br/>
                               Make sure the <i>classPath</i> and the <i>jvmLibPath</i> properties are correct on the javaplugin.properties file. 
                               If you are absolutely sure they are correct then make sure you downloaded the correct version of the plugin (windows or linux) for 
                               your operating system. If you're on windows make sure you downloaded the correct version regarding OS architecture (32bit vs 64bit) 
                               and install Microsoft Visual C++ Redistributable 2010 and Microsoft Visual C++ Redistributable 2015.

                           
                           </li>
                       </ul>

                    </div>
                </div>
            </div>
        );
    }
}