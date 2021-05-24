import React from 'react';
import './Results.css';
import Meaning from './Meaning';
import Phonetics from './Phonetics';

export default function Results(props) {

if(props.results) {
    return (
<div className="Results">
    <section>
<h2>{props.results.word}</h2>
{props.results.phonetics.map(function (phonetics, index) {
    return(
<div key={index}> 
<Phonetics phonetics={phonetics} />
    </div>
    );}
   
)} </section>
{props.results.meanings.map(function (meaning, index) {
    return (
        <section>
    <div key={index}>
    <Meaning meaning={meaning} />
   </div></section>
);
})}
</div>

);
} else {

    return null;
}

}