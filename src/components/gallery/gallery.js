import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './gallery.css';


const Photo = ({ img, alt }) => {
    return (
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} />
        </div>
    );
}

class PhotoGallery extends Component {
   
        state = {
            photo: [
                {
                    id: 1,
                    img: "https://source.unsplash.com/1600x900/?hotel",
                    alt: "hotel"
                },
                {
                    id: 2,
                    img: "https://source.unsplash.com/1600x900/?restaurant",
                    alt: "restaurant"
                },
                {
                    id: 3,
                    img: "https://source.unsplash.com/1600x900/?beach",
                    alt: "nature"
                },
                {
                    id: 4,
                    img: "https://source.unsplash.com/1600x900/?travel",
                    alt: "beach"
                },
                {
                    id: 5,
                    img: "https://source.unsplash.com/1600x900/?city",
                    alt: "hotel"
                },
                {
                    id: 6,
                    img: "https://source.unsplash.com/1600x900/?adventure",
                    alt: "hotel"
                },
                {
                    id: 7,
                    img: "https://source.unsplash.com/1600x900/?sea",
                    alt: "hotel"
                },
                {
                    id: 8,
                    img: "https://source.unsplash.com/1600x900/?building",
                    alt: "hotel"
                },
                {
                    id: 9,
                    img: "https://source.unsplash.com/1600x900/?climbing",
                    alt: "hotel"
                },
                {
                    id: 10,
                    img: "https://source.unsplash.com/1600x900/?forest",
                    alt: "forest"
                },
                {
                    id: 11,
                    img: "https://source.unsplash.com/1600x900/?resort",
                    alt: "resort"
                },
            ]
        }
    

    render() {
        return (
            <div className="row">
                {this.state.photo.map(gal => (
                    <Photo key={gal.id}
                        img={gal.img} alt={gal.alt} />
                )

                )};
            </div>
        )
    }
}

export default class Gallery extends Component {
    render() {
        return (
            <section id="gallery" className="section section-gallery scrollspy">
                <div className="container">
                    <h4 className="center">
                        <span className="purple-text text-darken-1">Photo</span> Gallery
                    </h4>
                    <PhotoGallery />
                </div>
                
            </section>
        )
    }
}
