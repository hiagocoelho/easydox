import React, { useState } from 'react'
import styled from 'styled-components'

const EditorContainer = styled.div`
    width: 50rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px) {
        width: 20rem;
    }
`

const Buttons = styled.div`
    display: flex;
    padding: 0.1rem 0;
    margin-bottom: .2rem;

    @media(max-width: 800px) {
        padding: 0 0;
    }

    button {
        font-family: sans-serif;
        border: 1px solid black;
        padding: 2px 10px;
        box-shadow: 4px 3px 3px #111111;
    }
`

const TextField = styled.textarea`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: sans-serif;
    width: 100%;
    height: 500px;
    resize: none;
    font-weight: ${props => props.textStyles.fontWeight || 'normal'};
    font-style: ${props => props.textStyles.fontStyle || 'normal'};
    text-decoration: ${props => props.textStyles.textDecoration || 'initial'};
    padding: 4px;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: #ffffff;
    box-shadow: 4px 3px 3px #111111;
`

export default function Editor () {
    const [text, setText] = useState('')
    const [textStyles, setTextStyles] = useState({})

    const textHandler = (e) => {
        setText(e.target.value)
    }

    const stylesHandler = (prop, value) => {
        if (prop in textStyles) {
            delete textStyles[prop]
            setTextStyles((prevStyles) => ({
                ...prevStyles,
            }))
        } else {
            setTextStyles((prevStyles) => ({
                ...prevStyles,
                [prop]: value
            }))
        }
    }

    return (
        <EditorContainer>
            <Buttons>
                <button onClick={() => stylesHandler('fontWeight', 'bold')}><strong>b</strong></button>
                <button onClick={() => stylesHandler('fontStyle', 'italic')}><i>i</i></button>
                <button onClick={() => stylesHandler('textDecoration', 'underline')}><u>u</u></button>
            </Buttons>
            <TextField autoComplete='off' value={text} onChange={e => textHandler(e)} textStyles={textStyles} spellCheck="false" placeholder='Start writing:'/>
        </EditorContainer>
    )
}