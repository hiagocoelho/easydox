import styled from 'styled-components';

const Div = styled.div`
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

export function StylesContainer ({ children }) {
    return (
        <Div>
            {children}
        </Div>
    );
}