import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary(props) {

let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null); 
let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
setResults(response.data[0]);
}


function search() {
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleKeywordSearch(event) {
setKeyword(event.target.value);
    }

function load() {
setLoaded(true); 
search();
}

if (loaded) {
    return ( <div className="Dictionary">
    <section>
    <h1>What word are you looking for?</h1>
    <form onSubmit={handleSubmit}>
    <input type="search" onChange={handleKeywordSearch} />
    </form>
    <div className="hint">
    <small>i.e. sunset, wine, avocado</small>
    </div></section>

<Results results={results} />

</div>

);} else {
    load();
    return "Loading";
}

}