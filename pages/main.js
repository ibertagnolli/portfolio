import Jumbotron from "../components/Jumbotron"
import MainPageHeader from "../components/MainPageHeader"
import Navbar from "../components/navbar"

export default function MainPage() {
    return (
        <>
            <Navbar links={[
                {text: "main", path: "/main"},
                {text: "about", path: "/about"},
            ]}/>
            <Jumbotron/>
            <MainPageHeader/>
        </>
    )
}