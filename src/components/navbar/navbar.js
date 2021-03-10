import React, { Component } from 'react'
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const SmoothScroll = () => {
  return (
    <section>
      <div className="navbar-fixed">
        <nav class="purple">
          <div class="container">
            <div class="nav-wrapper">
              <AnchorLink href="!#" class="brand-logo">AirPnP</AnchorLink>
              <AnchorLink href="!#" data-target="mobile-demo" class="sidenav-trigger"
              ><i class="material-icons">menu</i></AnchorLink>

              <ul class="right hide-on-med-and-down">
                <li><AnchorLink href="/home">Home</AnchorLink></li>
                <li><AnchorLink href="/search">Search</AnchorLink></li>
                <li><AnchorLink href="/explore">Explore</AnchorLink></li>
                <li><AnchorLink href="/adventure">Adventures</AnchorLink></li>
                <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
        <li><AnchorLink href="/home">Home</AnchorLink></li>
        <li><AnchorLink href="/search">Search</AnchorLink></li>
        <li><AnchorLink href="/explore">Explore</ AnchorLink></li>
        <li><AnchorLink href="/adventure">Adventures</AnchorLink></li>
        <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </section>
  )
}

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <SmoothScroll />
      </div>
    )
  }
}
