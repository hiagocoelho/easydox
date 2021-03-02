/* 
ESTE COMPONENTE ESTÁ SENDO SEPARADO EM COMPONENTES MENORES, E POSTERIORMENTE SERÁ REMOVIDO
*/

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import jsPDF from 'jspdf';

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
    font-family: ${props => props.textStyles.fontFamily || 'Times' };
    font-size: ${props => props.textStyles.fontSize || '12px' };
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
const DownloadButton = styled.button`
    margin-top: 0.25rem;
    margin-left: auto;
    max-width: max-content;
    padding: 0;
    font-size: 1rem;
`

export default function Editor () {
    const [fontSize, setFontSize] = useState(12);
    const [fontFamily, setFontFamily] = useState('Times');
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

    function generatePDF () {
        const pdfName = prompt('Insira o nome do arquivo a ser salvo: ');
        var doc = new jsPDF();
        doc.setFontSize(fontSize);
        doc.setFont(fontFamily);
        var splittedText = doc.splitTextToSize(text, 200);
        doc.text(3, 7, splittedText);
        doc.save(`${pdfName}.pdf`);
    }

    return (
        <EditorContainer>
            <Buttons>
                <button onClick={() => stylesHandler('fontWeight', 'bold')}><strong>b</strong></button>
                <button onClick={() => stylesHandler('fontStyle', 'italic')}><i>i</i></button>
                <button onClick={() => stylesHandler('textDecoration', 'underline')}><u>u</u></button>
            </Buttons>
            <TextField
            autoComplete='off'
            value={text}
            onChange={e => textHandler(e)}
            textStyles={textStyles} 
            spellCheck="false" 
            placeholder='Start writing:'
            />
            <DownloadButton onClick={generatePDF}>Download</DownloadButton>
        </EditorContainer>
    )
}