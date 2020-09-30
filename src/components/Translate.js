import React, { useState, useEffect, useRef } from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'

const options = [
    {
        label: "Arabic",
        value: 'ar'
    },
    {
        label: "Chinese",
        value: 'zh-CN'
    },
    {
        label: "Danish",
        value: 'da'
    },
    {
        label: "English",
        value: 'en'
    },
    {
        label: "French",
        value: 'fr'
    },
    {
        label: "German",
        value: 'de'
    },
    {
        label: "Hindi",
        value: 'hi'
    },
    {
        label: "Japanese",
        value: 'ja'
    },
    {
        label: "Korean",
        value: 'ko'
    },
    {
        label: "Portuguese",
        value: 'pt'
    },
    {
        label: "Spanish",
        value: 'es'
    }
]


const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')


    return (
        //reusing Dropdown Component
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(event) => { setText(event.target.value) }}
                    />
                </div>
            </div>
            <Dropdown
                label="Select A Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options} />
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert
                language={language}
                text={text} />
        </div>
    )
};

export default Translate;



