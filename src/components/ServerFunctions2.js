
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import CodeHighlight from 'code-highlight';

// import all the styles
import "code-highlight/lib/style.css";
import "highlight.js/styles/atom-one-dark.css";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/atom'




export class ServerFunctions extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Download (x86)',
                    icon: 'pi pi-refresh',

                }
            ]

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
        console.log("aaa")
        //this.appendClickListeners();
    }
    renderHighlight(code) {
        return (<Highlight  {...defaultProps} theme={theme} code={code} language="javascript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>);
    }


    render() {


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Server functions</h1>

                        <p>All server functions are called using the global <b>server</b> variable. Don't override this variable or you won't be able to use any server functions</p>
                        <Accordion>
                        <AccordionTab header="General functions"><br />
                                <ul>
                                    <li>
                                    <div className="title" >server.sendClientMsg(Player recipient, Colour colour, String message);</div>
                            {this.renderHighlight(`
function onPlayerConnect(player) {
    server.sendClientMsg(player, new Colour(102, 162, 232), "Welcome to the server: "+ player.name);
    /*  passing null as the recipient sends a general message to all players*/ 
    server.sendClientMsg(null, new Colour(102, 162, 232),  player.name +" has joined the server"); 
}`)}
                                       
                                    </li>
                                    <li>
                                        <CodeHighlight description="used to send annoucements" language="javascript" title="server.sendGameMessage(Player recipient, integer type, String message);" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("ann ")){
           var type = parseInt(message.split(" ")[1]);
           var msg = message.split(" ")[2];
           server.sendGameMessage(player, type, msg); 
           /*  passing null as the recipient sends a general message to all players*/ 
           server.sendGameMessage(null, type, msg); 

       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.shutdownServer();" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("shutdown")){
            server.shutdownServer()
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.createExplosion(integer worldId, integer type, Vector position, Player responsiblePlayer, boolean atGroundLevel);" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("boom")){
           server.createExplosion(player.world, 1, player.pos, player, true);
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.playSound(integer worldId, integer soundId, Vector pos);" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("playSound")){
           server.playSound(player.world, 2, player.pos);

       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                </ul>

                            </AccordionTab>
                            <AccordionTab header="Weapon Functions">
                                <ul>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.resetAllWeaponData();" >
                                            {
   `function onPlayerCommand(player, message) {
       if (message.startsWith("resetWepsData")){
            server.resetAllWeaponData();
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.resetWeaponData(integer weaponId)" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("resetWepData ")){
           var id = parseInt(message.split(" ")[1]);
           server.resetWeaponData(id);
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="Weapon fields" >
                                            {
                                                `WeaponField.Unused
WeaponField.FireType
WeaponField.Range
WeaponField.FiringRate
WeaponField.Reload
WeaponField.ClipSize
WeaponField.Damage
WeaponField.Speed
WeaponField.Radius
WeaponField.LifeSpan
WeaponField.Spread
WeaponField.FireOffsetX
WeaponField.FireOffsetY
WeaponField.FireOffsetZ
WeaponField.AnimGroup
WeaponField.AnimLoopStart
WeaponField.AnimLoopEnd
WeaponField.AnimFirePos
WeaponField.AnimTwoLoopStart
WeaponField.AnimTwoLoopEnd
WeaponField.AnimTwoFirePos
WeaponField.AnimBreakoutPos
WeaponField.ModelId
WeaponField.ModelTwoId
WeaponField.Flags
WeaponField.WeaponSlot`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setWeaponDataValue(integer weaponId, WeaponField field, float value)" >
                                        {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("setWepValueDmg ")){ /* /setWepValueDmg <wepID> <value> */
           var wepID = parseInt(message.split(" ")[1]);
           var value = parseFloat(message.split(" ")[2]);
           server.setWeaponDataValue(wepID, WeaponField.Damage, value);         
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getWeaponDataValue(integer weaponId, WeaponField field);" >
                                        {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("getWepValueDmg ")){ /* /getWepValueDmg <wepID>  */
           var wepID = parseInt(message.split(" ")[1]);
           var value = server.getWeaponDataValue(wepID, WeaponField.Damage); 
           server.sendClientMsg(player, new Colour(102, 162, 232),  "Weapon damage: " +value); 
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.resetWeaponDataValue(integer weaponId, WeaponField field);" >
                                        {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("resetWepDmg ")){ /* /resetWepDmg <wepID>  */
           var wepID = parseInt(message.split(" ")[1]);
           server.resetWeaponDataValue(wepID, WeaponField.Damage); 
         
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.isWeaponDataValueModified(integer weaponId, WeaponField field);" >
                                        {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("isWepDmgModified ")){ /* /isWepModified <wepID>  */
           var wepID = parseInt(message.split(" ")[1]);
           var changed = server.isWeaponDataValueModified(wepID, WeaponField.Damage); 
           server.sendClientMsg(player, new Colour(102, 162, 232),  (changed ? "Weapon damage has been modified": "Weapon damage has not been modified"));  
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                </ul>

                            </AccordionTab>
                            <AccordionTab header="Administrative Functions"><br />
                                <ul>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.kick(player)" >
                                            {
                                                `var p = server.getPlayer(1); /*gets player with ID 1*/ \nserver.kick(p); `
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.banAddress(String ip)" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("banip ")){
           var ip = message.split(" ")[1];
           server.banAddress(ip);
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.unbanAddress(String ip)" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("unbanip ")){
           var ip = message.split(" ")[1];
           server.unbanAddress(ip);
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.isAddressBanned(String ip)" >
                                            {
                                                `function onPlayerCommand(player, message) {
       if (message.startsWith("isIPBanned ")){
           var ip = message.split(" ")[1];
           var banned = server.isAddressBanned(ip);
           server.sendClientMsg(player, new Colour(102, 162, 232), ip +  (banned ? " is banned":"isn't banned") );

       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                </ul>

                            </AccordionTab>
                            <AccordionTab header="Server settings">
                                <ul>

                                    <li>
                                        <CodeHighlight language="javascript" title="server.getServerVersion()" >
                                            {
                                                `function onServerInitialise() {  
    console.log( "Server version: "+server.getServerVersion() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.addClass(teamId, col, modelId, x, y, z, angle, wep1, ammo1, wep2, ammo2, wep3, ammo3)" >
                                            {
                                                `function onServerInitialise() {  
    var teamId = 6;
    var col = new Colour(255, 0, 0);
    var modelId = 73;
    var x = 0;
    var y = 0;
    var z = 0;
    var angle = 0;
    var wep1 = 19;
    var wep2 = 18;
    var wep3 = 21;
    var ammo = 999;
    server.addClass(teamId, col, modelId, x, y, z, angle, wep1, ammo, wep2, ammo, wep3, ammo);
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getServerPort();" >
                                            {
                                                `function onServerInitialise() {
    console.log( "Server started on port: "+server.getServerPort() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getServerName()" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server name: "+server.getServerName() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setServerName(String name)" >
                                            {
                                                `function onServerInitialise() {   
    server.setServerName("My server");
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getPlayerLimit();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server player limit: "+server.getPlayerLimit() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setPlayerLimit(integer playerLimit);" >
                                            {
                                                `function onServerInitialise() {   
    server.setPlayerLimit(50); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getServerPassword();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server password: "+server.getServerPassword() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setServerPassword(String password);" >
                                            {
                                                `function onServerInitialise() {   
    server.setServerPassword("serverPassword123"); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setGameModeText();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server gamemode: "+server.getGameModeText() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setGameModeText(String text);" >
                                            {
                                                `function onServerInitialise() {   
    server.setGameModeText("TDM 1.0"); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setWorldBounds(MapBounds bounds);" >
                                            {
                                                `function onServerInitialise() {
    var maxX= 1000;
    var minX = 200;
    var maxY = 2000;
    var minY = 1200;   
    server.setWorldBounds(new MapBounds(maxX, minX, maxY, minY)); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight className="getWorldBounds code-highlight" description="returns MapBounds" language="javascript" title="server.getWorldBounds();" >
                                            {
                                                `function onServerInitialise() {   
    var bounds = server.getWorldBounds();
    console.log("MapBounds: X " + bounds.maxX + " | " + bounds.minX + " , Y "+bounds.maxY+" | "+bounds.minY);

}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setHour(integer hour);" >
                                            {
                                                `function onServerInitialise() {   
    server.setHour(10); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getHour();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server hour: "+server.getHour() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setMinute(integer minutes);" >
                                            {
                                                `function onServerInitialise() {   
    server.setMinute(10); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getMinute();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server minutes: "+server.getMinute() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setTimeRate(integer timeRate);" >
                                            {
                                                `function onServerInitialise() {   
    server.setTimeRate(2); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getTimeRate();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server timerate: "+server.getTimeRate() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setWeather(integer weather);" >
                                            {
                                                `function onServerInitialise() {   
    server.setWeather(4); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getWeather();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server weather: "+server.getWeather() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setGravity(float gravity);" >
                                            {
                                                `function onServerInitialise() {   
    server.setGravity(0.5); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getGravity();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server gravity: "+server.getGravity() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setGameSpeed(float gameSpeed);" >
                                            {
                                                `function onServerInitialise() {   
    server.setGameSpeed(0.7); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getGameSpeed();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server game speed: "+server.getGameSpeed() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setWaterLevel(float level);" >
                                            {
                                                `function onServerInitialise() {   
    server.setWaterLevel(0.9); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getWaterLevel();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server water level: "+server.getWaterLevel() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setAltitudeLimit(float altitudeLimit);" >
                                            {
                                                `function onServerInitialise() {   
    server.setAltitudeLimit(126.2); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getAltitudeLimit();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server altitude limit: "+server.getAltitudeLimit() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setKillCommandDelay(integer delayMillis);" >
                                            {
                                                `function onServerInitialise() {   
    server.setKillCommandDelay(3000); /*3 seconds*/
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getKillCommandDelay();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server /kill cmd delay: "+server.getKillCommandDelay() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setVehiclesForcedRespawnAltitude(float height);" >
                                            {
                                                `function onServerInitialise() {   
    server.setVehiclesForcedRespawnAltitude(15.8); 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getVehiclesForcedRespawnAltitude();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Vehicle respawn altitude: "+server.getVehiclesForcedRespawnAltitude() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setFallTimer(integer ms);" >
                                            {
                                                `function onServerInitialise() {   
    server.setFallTimer(1000); /* 1 second*/ 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getFallTimer();" >
                                            {
                                                `function onServerInitialise() {   
    console.log( "Server fall timer: "+server.getFallTimer() );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setSpawnScreenPlayerPos(Vector pos);" >
                                            {
                                                `function onServerInitialise() {   
    server.setSpawnScreenPlayerPos(new Vector(140,23,200));
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setSpawnScreenCameraPos(Vector pos);" >
                                            {
                                                `function onServerInitialise() {
    server.setSpawnScreenCameraPos(new Vector(140,23,200));
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setSpawnScreenCameraLookAt(Vector pos);" >
                                            {
                                                `function onServerInitialise() {
    server.setSpawnScreenCameraLookAt(new Vector(140,23,200));
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight className="code-highlight serverSetOptions" language="javascript" title="Server options" >
                                            {
                                                `ServerOption.SyncFrameLimiter
ServerOption.FrameLimiter
ServerOption.TaxiBoostJump
ServerOption.DriveOnWater
ServerOption.FastSwitch
ServerOption.FriendlyFire
ServerOption.DisableDriveby
ServerOption.PerfectHandling
ServerOption.FlyingCars
ServerOption.JumpSwitch
ServerOption.ShowMarkers
ServerOption.ShowOnlyTeamMarkers
ServerOption.StuntBike
ServerOption.ShootInAir
ServerOption.ShowNameTags
ServerOption.AutoJoinMessages
ServerOption.AutoDeathMessages
ServerOption.ChatTags
ServerOption.UseClasses
ServerOption.Wallglitch
ServerOption.DisableBackfaceCulling
ServerOption.DisableHeliBladeDamage`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight className="code-highlight serverSetOption" language="javascript" title="server.setOption(ServerOption setting, boolean value);" >
                                            {
                                                `function onServerInitialise() {
    server.setOption(ServerOption.FriendlyFire, true);
    server.setOption(ServerOption.TaxiBoostJump, false);
    server.setOption(ServerOption.DisableDriveby, true);
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getOption(ServerOption setting);" >
                                            {
                                                `function onServerInitialise() {
    var ffOn = server.getOption(ServerOption.FriendlyFire);
    console.log( "Friendly fire is "+ (ffOn ? "on":"off") );
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.setWastedSettings(WastedSettings settings);" >
                                            {
                                                `function onServerInitialise() {
    var deathTimeMillis = 2000;
    var fadeTimeMillis = 1000;
    var fadeInSpeed = 2.2;
    var fadeOutSpeed = 3.1;
    var fadeColour = new Colour(93, 193, 89);
    var corpseFadeStart = 950;
    var corpseFadeDuration = 2000;


    var ws = new WastedSettings(deathTimeMillis, fadeTimeMillis, fadeInSpeed, fadeOutSpeed, fadeColour, corpseFadeStart, corpseFadeDuration);
    server.setWastedSettings(ws);
}`
                                            }
                                        </CodeHighlight>
                                    </li>

                                </ul>
                            </AccordionTab>
                            <AccordionTab header="Player functions">
                            <ul>
                            <li>
                                        <CodeHighlight language="javascript" title="server.getPlayer(integer id);" >
                                            {
`function onPlayerCommand(player, message) {
    if (message.startsWith("kick ")){
        var id = parseInt(message.split(" ")[1]);
        var p = server.getPlayer(id);
        if (p != null){
           server.kick(p);
        }
    } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.findPlayer(String nickname);" >
                                            {
 `function onPlayerCommand(player, message) {
       if (message.startsWith("ping ")){
           var nick = message.split(" ")[1];
           var p = server.findPlayer(nick);
           if (p != null){
                server.sendClientMsg(player, new Colour(102, 162, 232), p.name + "'s ping:"+p.ping );
           }
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                                    <li>
                                        <CodeHighlight language="javascript" title="server.getAllPlayers();" >
                                            {
 `function onPlayerCommand(player, message) {
       if (message.startsWith("removeWeps")){
          server.getAllPlayers().forEach(p => {
             p.removeAllWeapons();
          });
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                            </ul>
                            </AccordionTab>
                            <AccordionTab header="Vehicle functions">
                            <ul>
                                <li>
                                    <CodeHighlight language="javascript" title="server.getVehicle(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("veh ")){
        var id = parseInt(message.split(" ")[1]);
        var v = server.getVehicle(id);
        if (p != null){
            player.putInVehicle(v, 0, true, false);
        }
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.createVehicle(integer modelId, integer worldId, Vector position, float angle, VehicleColours colours);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("heli ")){
         server.createVehicle(218, player.world, player.pos, 2.1, new VehicleColours(1, 1));
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.resetAllVehicleHandlings();" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("resetHandlings ")){
        server.resetAllVehicleHandlings()
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="Handling rules" >
                                            {
 ` HandlingRule.None
 HandlingRule.Mass
 HandlingRule.DimensionsX
 HandlingRule.DimensionsY
 HandlingRule.DimensionsZ
 HandlingRule.CentreOfMassX
 HandlingRule.CentreOfMassY
 HandlingRule.CentreOfMassZ
 HandlingRule.PercentSubmerged
 HandlingRule.TractionMultiplier
 HandlingRule.TractionLoss
 HandlingRule.TractionBias
 HandlingRule.NumberOfGears
 HandlingRule.MaxSpeed
 HandlingRule.Acceleration
 HandlingRule.DriveType
 HandlingRule.EngineType
 HandlingRule.BrakeDeceleration
 HandlingRule.BrakeBias
 HandlingRule.SteeringLock
 HandlingRule.SuspensionForceLevel
 HandlingRule.SuspensionDampening
 HandlingRule.SeatOffset
 HandlingRule.DamageMultiplier
 HandlingRule.SuspensionUpperLimit
 HandlingRule.SuspensionLowerLimit
 HandlingRule.SuspensionBias
 HandlingRule.SuspensionAntiDive
 HandlingRule.Flags
 HandlingRule.LightsFront
 HandlingRule.LightsRear
 HandlingRule.SuperiorGrip
 HandlingRule.FlyingMode
 HandlingRule.DriveOnWater`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.resetHandling(integer modelId);" >
                                            {
 `server.resetHandling(181);`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.resetHandlingRule(integer modelId, HandlingRule rule);" >
                                            {
 `server.resetHandlingRule(181, HandlingRule.MaxSpeed)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight description="returns float" language="javascript" title="server.getHandlingRule(integer modelId, HandlingRule rule);" >
                                            {
 `server.getHandlingRule(181, HandlingRule.MaxSpeed)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight  language="javascript" title="server.setHandlingRule(integer modelId, HandlingRule rule, float value);" >
                                            {
 `server.setHandlingRule(181, HandlingRule.MaxSpeed, 120.3)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight description="returns boolean" language="javascript" title="server.handlingRuleExists(integer modelId, HandlingRule rule);" >
                                            {
 `server.handlingRuleExists(181, HandlingRule.MaxSpeed)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight  language="javascript" title="server.addRadioStream(integer radioId, String name, String url, boolean isListed);" >
                                            {
 `server.addRadioStream(2,"radioStream", "http://....", true)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.removeRadioStream(integer modelId);" >
                                            {
 `server.removeRadioStream(2)`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                        <CodeHighlight language="javascript" title="server.getAllVehicles();" >
                                            {
 `function onPlayerCommand(player, message) {
       if (message.startsWith("deleteVehs ")){
          server.getAllVehicles().forEach(v => {
             v.delete();
          });
       } 
}`
                                            }
                                        </CodeHighlight>
                                    </li>
                            </ul>
                            </AccordionTab>
                            <AccordionTab header="Object functions">
                            <ul>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.createObject(integer modelId, integer worldId, Vector position, integer alpha);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("obj ")){
        var id = parseInt(message.split(" ")[1]);
        server.createObject(id, player.world, player.pos, 255); 
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.getObject(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("delObj ")){
        var id = parseInt(message.split(" ")[1]);
        var obj = server.getObject(id);
        if (obj !=null) {
            obj.delete();
        }
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.showAllMapObjects();" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("showObjs ")){
        server.showAllMapObjects();
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.showMapObject(integer modelId, Vector position);" >
                                            {
 `function onPlayerCommand(player, message) { /* /showObject <modelID> <x> <y> <z>  */
    if (message.startsWith("showObject ")){
        var modelID = parseInt(message.split(" ")[1]);

        var x = parseFloat(message.split(" ")[2]);
        var y = parseFloat(message.split(" ")[3);
        var z = parseFloat(message.split(" ")[4]);
        
        server.showMapObject(modelID, new Vector(x, y , z) );

    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.hideMapObject(integer modelId, Vector position);" >
                                            {
 `function onPlayerCommand(player, message) { /* /hideObject <modelID> <x> <y> <z>  */
    if (message.startsWith("hideObject ")){
        var modelID = parseInt(message.split(" ")[1]);

        var x = parseFloat(message.split(" ")[2]);
        var y = parseFloat(message.split(" ")[3);
        var z = parseFloat(message.split(" ")[4]);
        
        server.hideMapObject(modelID, new Vector(x, y , z) );

    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                            </ul>
                            </AccordionTab>
                            <AccordionTab header="Pickup functions">
                            <ul>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.createPickup(integer modelId, integer worldId, integer quantity, Vector position, integer alpha, boolean automatic);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("pickup ")){
        var id = parseInt(message.split(" ")[1]);
        server.createPickup(id, player.world, 1, player.pos, 255, true); 
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.getPickup(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("delPickup ")){
        var id = parseInt(message.split(" ")[1]);
        var p = server.getPickup(id);
        if (p !=null) {
            p.delete();
        }
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                            </ul>
                            </AccordionTab>
                            <AccordionTab header="Checkpoint functions">
                            <ul>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.createPickup(integer modelId, integer worldId, integer quantity, Vector position, integer alpha, boolean automatic);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("cp")){
        server.createCheckPoint(player, player.world, true, player.pos, new Colour(102, 162, 232), 1.3);
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.getCheckPoint(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("delCp ")){
        var id = parseInt(message.split(" ")[1]);
        var cp = server.getCheckPoint(id);
        if (cp !=null) {
            cp.delete();
        }
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                </ul>
                            </AccordionTab>
                            <AccordionTab header="CoordBlip functions">
                            <ul>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.createCoordBlip(CoordBlipInfo blip);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("blip ")){
        var spriteId = message.split(" ")[1];
        var blip = new CoordBlipInfo(1, player.world, player.pos, 1, new Colour(255,0,0), spriteId) ;
        server.createCoordBlip(blip);
    } 
}`
                                            }
                                    </CodeHighlight>
                            </li>
                                <li>
                                    <CodeHighlight language="javascript" title="server.destroyCoordBlip(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("delBlip ")){
        var id = parseInt(message.split(" ")[1]);
        server.destroyCoordBlip(id);
       
    } 
}`
                                            }
                                    </CodeHighlight>
                                </li>
                                <li>
                                    <CodeHighlight  language="javascript" title="server.getCoordBlipInfo(integer id);" >
                                            {
 `function onPlayerCommand(player, message) {
    if (message.startsWith("moveBlip ")){
        var id = parseInt(message.split(" ")[1]);
        var blip = server.getCoordBlipInfo(id);
        if (blip != null) { 
            blip.pos = player.pos;
        }
    } 
}`
                                            }
                                    </CodeHighlight>
                            </li>
                            </ul>
                            </AccordionTab>
                            <AccordionTab header="Server side keybinds">
                            <ul>
                           
                                <li>
                                    <CodeHighlight  language="javascript" title="server.registerKeyBind(integer keyBindId, boolean onRelease, integer keyOne, integer keyTwo, integer keyThree);" >
                                            {
 `function onServerInitialise() {
    server.registerKeyBind(1, false, 0x12, 0, 0);
}   `
                                            }
                                    </CodeHighlight>
                            </li>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.removeKeyBind(integer keyBindId)" >
                                    {
 `function onServerInitialise() {
    server.removeKeyBind(0x12);
}   `
                                            }
                                    </CodeHighlight>
                            </li>
                            <li>
                                    <CodeHighlight  language="javascript" title="server.removeAllKeyBinds();" >
                                            {
 `server.removeAllKeyBinds();`
                                            }
                                    </CodeHighlight>
                            </li>
                            <li>
                                    <CodeHighlight description="returns int"  language="javascript" title="server.getUnusedKeybindSlot();" >
                                            {
 `var slot = server.getUnusedKeybindSlot();`
                                            }
                                    </CodeHighlight>
                            </li>
                            <li>
                                    <CodeHighlight description="returns KeyBind"  language="javascript" title="server.getKeyBind(integer keyBindId)" >
                                            {
 `var kb = server.getKeyBind(2);`
                                            }
                                    </CodeHighlight>
                            </li>
                            </ul>
                            </AccordionTab>
                        </Accordion>


                    </div>
                </div>
            </div>

        );
    }
}