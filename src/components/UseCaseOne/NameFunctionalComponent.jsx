export function NameFunctionalComponent(props) {
    return (
        <div>
            <h3>Name Component- Functional</h3>
            Hey my name is {props.name}
            <br />
            Message Sent is <b>{props.message}</b>
        </div>
    )
}