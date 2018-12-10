
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from '../layout/atom';
import  PrismHighlight  from './PrismHighlight';



export class SQL extends Component {

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
                        <h1>SQL module</h1>
                        <p>SQL module to use with SQLite and MySQL</p>
                        <Accordion>
                        <AccordionTab header="Creating the connection"  id="" ><br />
                        <h3>SQLite connection </h3>
                        <p>sql.newConnection("jdbc:sqlite:"+pathToSQLiteDB);</p>
                                        <PrismHighlight language="javascript"  >
                                            {
`var sql = require("sql");

var pathToDBFile = "src/database.db";
var conn = sql.newConnection("jdbc:sqlite:"+pathToDBFile);`
}
</PrismHighlight>
<h3>MySQL connection </h3>
<p>sql.connect(database, ip, port, dbUser, dbPassword)</p>
<PrismHighlight language="javascript"  >
                                            {
`var sql = require("sql");

var conn = sql.connect("dbName", "localhost", 3306, "dbUser", "password");`
}
</PrismHighlight>
   
                    </AccordionTab>
                    <AccordionTab header="Queries"  id="" ><br />
                          <p>From this point onwards, all of the following functions are the same for both SQLite and MySQL. The SQL module shares the same API for both databases.
                               All queries can be made asynchronously or synchronously.</p>
                            <h1>SELECT queries</h1>
                               <h2>Single result - <i>returns object</i></h2>
                               <h3>Async: conn.findFirst(statement, function(result) { }) </h3>
                               <h3>Sync : conn.findFirst(statement) </h3>
                          <PrismHighlight language="javascript"  >
                              {
`var sql = require("sql");

function onPlayerConnect(player) {

    /* This operation can be done either asynchronously or synchronously*/
    var stm = conn.instance.prepareStatement("SELECT * FROM Players where nickname=?");
    stm.setString(1, player.name);

    /*asynchronous operation*/
    conn.findFirst(stm, function(account) {
        if (account != null) {
            console.log("account found!");
        }
    });

    /* OR */

    /*synchronous operation*/
    var account = conn.findFirst(stm)
    if (account != null) {
        console.log("account found!");
    }
}

`
                              }
                          </PrismHighlight>
                          <hr/>
                          <h2>Multiple results - <i>returns array of objects</i></h2>
                          <h3>Async: conn.query(statement, function(results) { }) </h3>
                          <h3>Sync : conn.query(statement) </h3>
                          <PrismHighlight language="javascript"  >
                              {
`var sql = require("sql");

function onPlayerConnect(player) {

    /* This operation can be done either asynchronously or synchronously*/
    var stm = conn.instance.prepareStatement("SELECT * FROM Players where ip=?");
    stm.setString(1, player.IP);

    /*asynchronous operation*/
    conn.query(stm, function(accounts) {
        console.log(accounts.length+" found!");
    });

    /* OR */

    /*synchronous operation*/
    var accounts = conn.query(stm)
    console.log(accounts.length+" found!");
}

`
                              }
                          </PrismHighlight>
                          <h1>Insert/Update/Delete queries</h1>
                          <h3>Async: conn.query(statement, function(results) { }) </h3>
                          <h3>Sync : conn.query(statement) </h3>
                          <PrismHighlight language="javascript"  >
                              {
`var sql = require("sql");

/*INSERT*/
function registerAccount(nickname, password, ip) {

    /*
        RETURN_GENERATED_KEYS is used to return the generated DB ID (only use this if your primary key is an integer and is set to 
            AUTO_INCREMENT) if you want to set the ID manually just remove the SQLOptions.RETURN_GENERATED_KEYS
    */
    var stm = conn.instance.prepareStatement("INSERT INTO Players(nickname,password,registerDate) VALUES (?,?,?);", SQLOptions.RETURN_GENERATED_KEYS);
    
    stm.setString(1,nickname);
    stm.setString(2, password);
    stm.setTimestamp(3, DateUtils.toSQLTimestamp(Date.now())); //dates should always be saved as SQL timestamps


    /*asynchronous operation*/
    /*
    when the table's primary key is an integer and is set to AUTO_INCREMENT, you can pass a function with a parameter that will
    give you the row ID generated by the DB (only use this if you passed SQLOptions.RETURN_GENERATED_KEYS when creating the statement)
    */
    conn.query(stm, function (accountID) {
        console.log("new account inserted with ID "+accountID);
    });

    /*if you pass a boolean set to true instead of a function, the operation will be done asynchronous aswell*/
    conn.query(stm, true);

    /* OR */

    /*synchronous operation*/
    conn.query(stm);
}

/*UPDATE*/
function changeAccountName(accountID, nickname) {

    var updateQ = conn.instance.prepareStatement("UPDATE Players SET nickname=? WHERE id=?");
    updateQ.setString(1, nickname);
    updateQ.setInt(2, accountID);

    /*asynchronous operation*/
    conn.query(updateQ, true);

    /* OR */

    /*synchronous operation*/
    conn.query(updateQ);
}

/*DELETE*/
function deleteAccount(accountID) {

    var deleteQ = conn.instance.prepareStatement("DELETE FROM Players WHERE id=?");
    deleteQ.setInt(1, accountID);

    /*asynchronous operation*/
    conn.query(deleteQ, true);

    /* OR */

    /*synchronous operation*/
    conn.query(deleteQ);
}

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