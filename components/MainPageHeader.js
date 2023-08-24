import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const MainPageHeader = () => {
   const router = useRouter();
    return (<div style={{position: "relative", width: "100vw", height: "100vh", display: "flex", alignItems:"center", justifyContent: "center", flexDirection:"column"}}>
        <h2 style={{fontSize: 65}}>Hi I&apos;m</h2>
        <h1 style={{fontSize: 75}}>Isabella Bertagnolli</h1>
        <div style={{flexDirection:"column"}}>
        <Button
        variant="outlined"
        sx={{ m:1,
          color: "#BAB1D2"}}
    >
     My Resume </Button>
     <Button
      onClick={() => {
         router.push("/about");
       }}
        variant="outlined"
        sx={{ m:1,
          color: "#BAB1D2"}}
    >
     About Me </Button>
     </div>
     <div style={{flexDirection:"column"}}>
     <Button 
      onClick={() => {
         router.push("https://github.com/ibertagnolli");
       }}
     variant="outlined"
     sx={{m:1,
        color: "#BAB1D2"}}
     >
    Github
     </Button>
     <Button 
      onClick={() => {
         router.push("https://www.linkedin.com/in/isabella-bertagnolli/");
       }}
     variant="outlined"
     sx={{m:1,
        color: "#BAB1D2"}}
     >
    LinkedIn
     </Button>
     </div>
    </div>)
}

export default MainPageHeader;
