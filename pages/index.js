import Jumbotron from "../components/Jumbotron"
import MainPageHeader from "../components/MainPageHeader"
import Navbar from "../components/navbar"

export default function MainPage() {
    return (
        <>
            <Navbar links={[
                {text: "Home", path: "/"},
                {text: "about", path: "/about"},
            ]} bgcolor = "transparent"/>
            <Jumbotron/>
            <MainPageHeader/>
        </>
    )
}