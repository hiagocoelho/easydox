import styled from 'styled-components';

const Div = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    flex: 1;
    overflow-y: scroll;

    width: 100%;
    min-height: 500px;
    max-height: 500px;
    resize: none;

    padding: .5rem .5rem;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: #ffffff;
    box-shadow: 4px 3px 3px #111111;

    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
`

export function TextField ({ children }) {
    return (
        <Div contentEditable='true'>
            {children}
        </Div>
    );
}