import React, { useState } from 'react'


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    //activeIndex -> current state
    //setActiveIndex -> function that updates the state (aka setState)



    //helper function
    const onTitleClicked = (index) => {
        setActiveIndex(index)
    };



    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        //if the index matches with the activeIndex(the one user clicks) then activate the contents

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>

        )
    })


    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
};

export default Accordion;