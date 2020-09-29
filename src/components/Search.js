import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        };
        if (term) {
            search()
        } //if the user doesn't put anything to search, then don't invoke the search function
    }, [term])

    const renderedResults = results.map((result) => {
        return(
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>

        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>  
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>

    )

};

export default Search; 