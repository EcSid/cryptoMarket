import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import RegistrationSection from './components/RegistrationSection'
import MainSectionWithRegister from './components/MainSectionWithRegister'




export default function App() {


    if (localStorage.getItem("registrationPasseddd")) {
        return (
        <>
            <Header username={localStorage.getItem("username")}/>
            <MainSectionWithRegister />
        </>
        )
    }

    return (
    <> 
        <Header />
        <MainSection />
        <RegistrationSection />
        <Footer />
    </>
    )
}