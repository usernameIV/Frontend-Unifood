import { Footer } from "./infra/Footer"
import { Navbar } from "./infra/Navbar"


export const Layout = ( {children} : any) => {
    return (
        <> 
        <Navbar />
        {children}
        <Footer />
        </>
    )
}