
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'
import  PrismHighlight  from './PrismHighlight';



export class HttpClient extends Component {

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
    }

    getSc() {
        return ":";
    }



    render() {
        const paramStyle = {
            color: '#98c379',
            fontWeight: 'bold',
        };

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>HttpClient module</h1>
                        <p>An HTTP client to make http requests</p>
                        <ul>
                            <li><b>postJson</b>( <u>string</u>  <span style={paramStyle} >url</span> ,  <u>object or string</u> <span style={paramStyle} >json</span>, <u>function(response)</u>  <span style={paramStyle} >onSuccess</span> );</li>
                            <li><b>postJson</b>( <u>string</u>  <span style={paramStyle} >url</span> ,  <u>object or string</u> <span style={paramStyle} >json</span>, <u>boolean</u> <span style={paramStyle} >async</span> );</li>

                            <li><b>postForm</b>( <u>string</u>  <span style={paramStyle} >url</span> ,  <u>object or string</u>  <span style={paramStyle} >params</span>, <u>function(response)</u> <span style={paramStyle} >onSuccess</span> );</li>
                            <li><b>postForm</b>( <u>string</u>  <span style={paramStyle} >url</span> ,  <u>object or string</u>  <span style={paramStyle} >params</span>, <u>boolean</u> <span style={paramStyle} >async</span> ) );</li>

                            <li><b>post</b>({'{'} <span style={paramStyle} >url</span> : <u>string</u>,  <span style={paramStyle} >type</span> : <u>string</u>, <span style={paramStyle} >data</span> : <u>object</u>, <span style={paramStyle} >headers</span> : <u>object</u>, <span style={paramStyle} >onSuccess</span> : <u>function (resp)</u>, <span style={paramStyle} >onError</span> : <u>function (err)</u> {' }'});</li>
                            <li><b>get</b>( <u>string</u>  <span style={paramStyle} >url</span> , <u>function(response)</u> <span style={paramStyle} >onSuccess</span> );</li>

                            <p>All functions are called asynchronously when a function is passed as a parameter or a boolean set to true.</p>

                            <h3>Examples:</h3>
                            <PrismHighlight language="javascript"  >
                                {`var http = require("httpclient");
var data = {
    X: player.pos.X,
    Y: player.pos.Y,
    Z: player.pos.Z
};

//postJson( url , object , onSuccessFunction ); 
http.postJson("https://httpbin.org/post", data, function (response) {
    var resp = response.body().string();
    console.log(resp);
});


//postJson( url , params , async );
http.postJson("https://httpbin.org/post", data, true);

//postForm( url, params, onSuccessFunction ) (post request will be made with 'application/x-www-form-urlencoded' content type )
http.postForm("https://httpbin.org/post", data, function (response) {
    var resp = response.body().string();
    console.log(resp);
});

//postForm( url, params, async )
http.postForm("https://httpbin.org/post", data, true);


//post({ url, type, data, headers, onSuccessFunction, onErrorFunction });
http.post({
    url: "https://httpbin.org/post",
    type: "application/json",
    data: { test: 3 },
    headers: { "header1" : "value1" , "header2" : "value2"},
    onSuccess: function (resp) {
        var response = resp.body().string();
        console.log(response);
    },
    onError: function (err) {
        console.error(err);
    }
});


//get(url, onSuccessFunction)
http.get("https://httpbin.org/get", function (resp) {
    var json = resp.body().string();
    console.log(json);
});

/*
    Creating the request using the http builder 
    (this is useful for cases where you want to set specific timeouts for the request)
*/

//timeout values are in milliseconds
var timeouts = {
    connectTimeout: 2000,
    writeTimeout: 1000,
    readTimeout: 3000
};

var req = http.builder()
    .url("https://httpbin.org/post")
    .post(http.jsonBody({ field1: 1 }))
    .addHeader("header1", "value1")
    .addHeader("header2", "value2")
    .build();

var call = http.client(timeouts).newCall(req);

http.execute(call, function (resp) {
    console.log(resp.body().string());
});

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