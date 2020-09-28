import React from 'react'
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content : 'React is a front end JavaScript framework'
    },
    {
        title: 'What is CSS?',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML'
    }

]

export default () => {
    return (
    <div>
       <Accordion items = {items} />
    </div>
    )
};