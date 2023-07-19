
export default function Navbar({links}) {

    return (
        <div style={{
            position: "sticky", 
            height: 64, 
            width: "100vw", 
            marginBottom: -64, 
            paddingLeft: "1rem", 
            paddingRight: "1rem", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            zIndex: 69,
        }}>
            <h2>Isabella Bertagnolli</h2>
            <div style={{display: "flex", gap: "1rem"}}>
                {
                    links.map(link => (
                        <button onClick={() => alert(link.path)} key={link.path}>{link.text}</button>
                    ))
                }
            </div>
        </div>
    )
}
