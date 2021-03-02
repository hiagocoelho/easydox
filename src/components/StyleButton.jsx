export function StyleButton (props) {
    return (
        <button type='button' onClick={props.onClick}>
            {props.children}
        </button>            
    );
}