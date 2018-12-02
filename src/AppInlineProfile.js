import React, { Component } from 'react';
import classNames from 'classnames';

export class AppInlineProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="profile">
                <div>
                    <img src="assets/layout/images/profile.png" alt="" />
                </div>
                <a className="profile-link" >
                    <span className="username">VC:MP Javascript plugin</span>
                </a>
              
            </div>
        );
    }
}