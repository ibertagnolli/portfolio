

function UnorderedList({items, fontColor = 'inherit'}) {
    // const items = props.items;

    return (
        <ul style={{color: fontColor}}>
            {items.map(item => <li>{item}</li>)}
        </ul>
    );
}

export default UnorderedList;
