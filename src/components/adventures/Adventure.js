import React, { Component } from 'react'
import Resort1 from "../../images/banner4.jpg";
import Resort2 from "../../images/banner5.jpg";
import Resort3 from "../../images/banner8.jpg";

import 'materialize-css/dist/css/materialize.min.css';

import { HashLink as Link } from 'react-router-hash-link';

export default class Adventure extends Component {
    render() {
        return (
            <section id="adventures" className="section section-adventures srollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">AirPnP </span> Adventures
                    </h4>

                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">

                                    <img src={Resort1} alt="Cuba" />
                                    <span className="card-title">Cacun</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Cacun<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort2} alt="Cuba" />
                                    <span className="card-title">Jamaica</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                   
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Jamaica<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort3} alt="Cuba" />
                                    <span className="card-title">Cuba</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                   
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Cuba<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
