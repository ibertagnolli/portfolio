export default function Jumbotron(){
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
            style={{width: "100vw", position: "absolute", filter: "brightness(0.5)"}} 
            src="/images/computer_img.jpg" 
            alt = "computer on desk" 
        />
    )
}