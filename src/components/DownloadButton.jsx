import styled from 'styled-components';

const Button = styled.button`
    margin-top: 0.25rem;
    margin-left: auto;
    max-width: max-content;
    padding: 0;
    font-size: 1rem;
`

export function DownloadButton (props) {

    const generatePDF = () => {
        console.log('PDF generated');
    }

    return (
        <Button onClick={generatePDF}>
            Download
        </Button>
    );
}