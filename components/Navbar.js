import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Navbar({links}) {
    const router = useRouter();
    return (
        <div style={{
            top: "0",
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
            <h2 style={{color:"white"}}>Isabella Bertagnolli</h2>
            <div style={{display: "flex", gap: "1rem"}}>
                {
                    links.map(link => (
                        <Button 
                        onClick={() => router.push(link.path)} key={link.path}
                        variant="text"
                        sx={{
                          color: "white",
                          borderColor: "white",
                          ":hover": {
                            backgroundcolor: "white"
                          }
                        }}
                        >{link.text}</Button>
                    ))
                }
            </div>
        </div>
    )
}
