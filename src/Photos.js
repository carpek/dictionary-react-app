import React from 'react';
import './Photos.css';

export default function Photos(props) {

if (props.photos) {
return (

    <section className="photos">
     <div className="row">   
     
    {props.photos.map(function(photos, index) {
        return ( 
            <div className="col-4" key={index}>
            <a href={photos.src.original} target="_blank" rel="noreferrer">
            <img src={photos.src.landscape} className="img-fluid" alt="your requested pic" />
            </a></div>
            );
    })}
    </div>
    </section>
);
} else {
return null;

} 

}