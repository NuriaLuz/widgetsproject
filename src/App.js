import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework'
    },
    {
        title: 'What is CSS?',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML'
    }

]

const options = [
    {
        label: "The Color Red",
        value: 'red'
    },
    {
        label: "The Color Orange",
        value: 'orange'
    },
    {
        label: "The Color Yellow",
        value: 'yellow'
    },
    {
        label: "The Color Green",
        value: 'green'
    },
    {
        label: "The Color Blue",
        value: 'blue'
    },
    {
        label: "The Color Purple",
        value: 'purple'
    }
]


export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
        <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select A Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};