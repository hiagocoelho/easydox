import styled from 'styled-components';

const Div = styled.div`
    width: 50rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px) {
        width: 20rem;
    }
`

export function EditorContainer ({ children }) {
    return (
        <Div>
            {children}
        </Div>
    );
}