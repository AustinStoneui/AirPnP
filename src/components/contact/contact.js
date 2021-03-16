import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';



export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel purple white-text center">
                                <i className="material-icons"> email</i>
                                <h5>AirPnP Address</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul>
                                    <li className="collection-header">
                                        <h4>Main Office</h4>
                                    </li>
                                    <li className="collection-item">AirPnP Booking</li>
                                    <li className="collection-item"><i className="fas fa-map-marker-alt"> 123 Checkout Rd, California, US</i></li>
                                    <li className="collection-item"><i className="fas fa-phone"> (800) 123-4567</i></li>
                                    <li className="collection-item"><i className="fas fa-envelope-square"> booking@airpnp.com</i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3">
                                <h5>Please fill out this form</h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" className="validate" />
                                        <label for="name" className="purple-text">Name</label>

                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="phone" className="validate" />
                                        <label for="phone" className="purple-text">Phone</label>

                                    </div>
                                    <div className="input-field">
                                        <textarea type="text" id="message" className="materialize-textarea" data-length="120" ></textarea>
                                        <label for="message" className="purple-text">Message</label>

                                    </div>

                                    <input type="submit" value="Submit" className="btn purple" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
