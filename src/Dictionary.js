import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

function handleResponse(response) {


}

function search(event) {
event.preventDefault();
alert(`Searching for ${keyword} `);
let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
    }

function handleKeywordSearch(event) {

setKeyword(event.target.value);
    }

return ( <div className="Dictionary">
    <form onSubmit={search}>
<input type="search" className="dict-search" onChange={handleKeywordSearch} />


    </form>

</div>

);}