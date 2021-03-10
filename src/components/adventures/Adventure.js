import React, { Component } from 'react'
import Resort1 from "../../images/banner4.jpg";
import Resort2 from "../../images/banner4.jpg";
import Resort3 from "../../images/banner4.jpg";
import Resort4 from "../../images/banner4.jpg";
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export default class Adventure extends Component {
    render() {
        return (
            <section id="adventures" className="section section-adventures srollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">AirPnP </span> Adventures
                    </h4>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text"> hotel</i>
                                <h4>Hotels</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text"> restaurant</i>
                                <h4>Restaurant</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text"> local_cafe</i>
                                <h4>Cafe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text"> shopping_basket</i>
                                <h4>Shopping</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
