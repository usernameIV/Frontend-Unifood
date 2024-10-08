import { Footer } from "./infra/Footer"
import { Navbar } from "./infra/Navbar"
import './Layout.style.css'


export const Layout = ( {children} : any) => {
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}