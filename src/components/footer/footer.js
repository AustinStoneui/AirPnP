import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import { Link } from 'react-router-dom';
import './footer.css';


export default class footer extends Component {
    render() {
        return (
            <section className="section purple darken-2 white-text center scrollspy">
                <div className="row">
                    <h4>Follow Us</h4>
                    <p>
                        check out social media for special offers
                    </p>
                    <Link to="https://facebook.com" target="blank" className="white-text">
                        <i className="fab fa-facebook fa-3x"></i>
                    </Link>
                    <Link to="https://twitter.com" target="blank" className="white-text">
                        <i className="fab fa-twitter fa-3x"></i>
                    </Link>
                    <Link to="https://linkedIn.com" target="blank" className="white-text">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </Link>
                    <Link to="https://googleplus.com" target="blank" className="white-text">
                        <i className="fab fa-google-plus fa-3x"></i>
                    </Link>
                    <Link to="https://pinterest.com" target="blank" className="white-text">
                        <i className="fab fa-pinterest fa-3x"></i>
                    </Link>
                </div>
                <div className="row">
                    <div className="fixed-action-btn">
                        <Link className="btn-floating btn-large nlue">
                            <i className="large material-icons">mode_edit</i>

                        </Link>
                        <ul>
                            <li><Link className="btn-floating red"><i className="material-icons">insert_chart</i></Link></li>
                            <li><Link className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></Link></li>
                            <li><Link className="btn-floating green"><i className="material-icons">publish</i></Link></li>
                            <li><Link className="btn-floating blue"><i className="material-icons">attach_file</i></Link></li>
                           
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
