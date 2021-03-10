import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/banner9.jpg';
import Imgtwo from '../../images/banner6.jpg';
import Imgthree from '../../images/banner7.jpg';
import {Link} from 'react-router-dom';
import './Banner.css';

export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="Vacation"/>
                        <div className="caption center-align">
                            <h2>Pick your Destination</h2>
                            <h5 className="light: grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="Budget"/>
                        <div className="caption right-align">
                            <h2>Book your trip</h2>
                            <h5 className="light: grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="Vacation"/>
                        <div className="caption left-align">
                            <h2>Relax and Enjoy</h2>
                            <h5 className="light: grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>

                </ul>
                
            </section>
        )
    }
}
