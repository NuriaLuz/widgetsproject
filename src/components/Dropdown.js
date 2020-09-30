import React, { useState, useEffect, useRef} from 'react'


const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const clickedDom = (event) =>{
            if(ref.current.contains(event.target)){
                return;
            }
        setOpen(false)
        };

        document.body.addEventListener('click' , clickedDom)

        return() => {
            document.body.removeEventListener('click', clickedDom)
        }; //Cleans up event listener 


    }, [])


    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                onClick={() => {
                    onSelectedChange(option)
                }}
                key={option.value}
                className="item"
            >
                {option.label}
            </div>
        )

    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => { setOpen(!open) }}
                    className={`ui selection dropdown ${open ? "visible active" : ''}`} >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div
                        onClick={() => { setOpen(!open) }}
                        className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;