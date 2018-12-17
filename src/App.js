import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppInlineProfile } from './AppInlineProfile';
import { Route } from 'react-router-dom';
import { GettingStarted } from './components/GettingStarted';
import { ServerFunctions } from './components/ServerFunctions';
import { ServerEvents } from './components/ServerEvents';
import { Player } from './components/Player';
import { Vehicle } from './components/Vehicle';
import { GameObject } from './components/GameObject';

import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';
import './theme.css'
import { Pickup } from './components/Pickup';
import { Blip } from './components/Blip';
import { Checkpoint } from './components/Checkpoint';
import { FileSystem } from './components/Filesystem';
import { SQL } from './components/SQL';
import { IRC } from './components/IRC';
import { Crypto } from './components/crypto';
import { HttpClient } from './components/httpClient';
import { Timers } from './components/Timers';
import { Streams } from './components/Streams';
import { Vector } from './components/Vector';
import { Quaternion } from './components/Quaternion';
import { Colour } from './components/Colour';
import { FAQ } from './components/FAQ';
import { Websockets } from './components/Websockets';


class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }

        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
        setTimeout(() => { this.layoutMenuScroller.moveBar(); }, 500);
    }

    onMenuItemClick(event) {
        if (!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            { label: 'Getting started', icon: 'pi pi-fw pi-home', command: () => { window.location = '#/' } },
            {
                label: 'Server', icon: 'pi pi-fw pi-inbox',
                items: [
                    { label: 'Functions', icon: 'pi pi-fw pi-bars', command: () => window.location = "#/serverFunctions" },
                    { label: 'Events', icon: 'pi pi-fw pi-bars', command: () => window.location = "#/serverEvents" }

                ]
            },
            {
                label: 'Vehicle', icon: 'pi pi-fw pi-align-left', command: () => { window.location = '#/vehicle' }

            },
            {
                label: 'Player', icon: 'pi pi-user pi-align-left', command: () => { window.location = '#/player' }

            },
            {
                label: 'Checkpoint', icon: 'pi pi-circle-on pi-align-left', command: () => { window.location = '#/checkpoint' }
            },
            {
                label: 'GameObject', icon: 'pi pi-fw pi-trash', command: () => { window.location = '#/gameObject' }
            },
            {
                label: 'Pickup', icon: 'pi pi-circle-off pi-align-left', command: () => { window.location = '#/pickup' }
            },
            {
                label: 'Map blips', icon: 'pi pi-fw pi-bookmark', command: () => { window.location = '#/blip' }
            },
            {
                label: 'Timers', icon: 'pi pi-clock pi-align-left', command: () => { window.location = '#/timers' }
            },
            {
                label: 'Streams', icon: 'pi pi-refresh pi-align-left', command: () => { window.location = '#/streams' }
            },
            {
                label: 'Modules', icon: 'pi pi-fw pi-clone', badge: '6',
                items: [
                    { label: 'Filesystem', icon: 'pi pi-fw  pi-align-left', command: () => { window.location = '#/filesystem' } },
                    { label: 'Crypto', icon: 'pi pi-fw pi-align-left', command: () => { window.location = '#/crypto' } },
                    { label: 'SQL', icon: 'pi pi-fw pi-align-left', command: () => { window.location = "#/sql" } },
                    { label: 'HTTP Client', icon: 'pi pi-fw pi-globe', command: () => { window.location = "#/httpClient" } },
                    { label: 'IRC Bot', icon: 'pi pi-fw pi-clone', command: () => { window.location = "#/irc" } },
                    { label: 'Websockets', icon: 'pi pi-fw pi-clone', command: () => { window.location = "#/websockets" } }

                ]
            },
            {
                label: 'Common data structures', icon: 'pi pi-fw pi-clone',
                items: [
                    { label: 'Vector', icon: 'pi pi-fw pi-align-justify', command: () => { window.location = '#/vector' } },
                    { label: 'Quaternion', icon: 'pi pi-fw pi-align-justify', command: () => { window.location = '#/quaternion' } },
                    { label: 'Colour', icon: 'pi pi-fw pi-align-justify', command: () => { window.location = "#/colour" } }
                ]
            },


            { label: 'F.A.Q.', icon: 'pi pi-fw pi-question', command: () => { window.location = "#/faq" } }
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        let logo = 'assets/layout/images/vcmp_logo.png';

        let wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });
        let sidebarClassName = classNames("layout-sidebar", { 'layout-sidebar-dark': this.state.layoutColorMode === 'dark' });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu} />

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>

                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{ height: '100%' }}>
                        <div className="layout-sidebar-scroll-content" >
                            <div className="layout-logo">
                                <img alt="Logo" src={logo} style={{ height: '68px' }} />
                            </div>
                            <AppInlineProfile />
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                        </div>
                    </ScrollPanel>
                </div>

                <div className="layout-main">
                    <Route path="/" exact component={GettingStarted} />
                    <Route path="/serverFunctions" exact component={ServerFunctions} />
                    <Route path="/serverEvents" exact component={ServerEvents} />
                    <Route path="/player" exact component={Player} />
                    <Route path="/vehicle" exact component={Vehicle} />
                    <Route path="/gameObject" exact component={GameObject} />
                    <Route path="/pickup" exact component={Pickup} />
                    <Route path="/blip" exact component={Blip} />
                    <Route path="/checkpoint" exact component={Checkpoint} />
                    <Route path="/filesystem" exact component={FileSystem} />
                    <Route path="/sql" exact component={SQL} />
                    <Route path="/irc" exact component={IRC} />
                    <Route path="/timers" exact component={Timers} />
                    <Route path="/httpClient" exact component={HttpClient} />
                    <Route path="/crypto" exact component={Crypto} />
                    <Route path="/streams" exact component={Streams} />
                    <Route path="/colour" exact component={Colour} />
                    <Route path="/Vector" exact component={Vector} />
                    <Route path="/Quaternion" exact component={Quaternion} />
                    <Route path="/Websockets" exact component={Websockets} />



                    <Route path="/faq" component={FAQ} />
                </div>

                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default App;
