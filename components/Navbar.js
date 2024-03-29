import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import theme from "../styles/theme";

export default function Navbar({links}, bgcolor) {
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
            backgroundColor: bgcolor,
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
                          mb:1,
                          ":hover": {
                            backgroundcolor: "white",
                            textDecoration: "underline #ffffff"
                          }
                        }}
                        >{link.text}</Button>
                    ))
                }
            </div>
        </div>
    )
}
