import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props) {

let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null); 
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
}

function search() {
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey="563492ad6f9170000100000142d2bc7be5c343fb81e75c2f1e658226";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers ={ Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

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
<Photos photos={photos} />
</div>

);} else {
    load();
    return "Loading";
}

}