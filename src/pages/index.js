import * as React from "react"
import Navbar from "../components/Navbar";
import Header from "../components/frontpage/Header";

const IndexPage = () => {
    return (
        <>
            <Navbar />
            <Header title="Finest Web Experiences" />
        </>
    )
}

export default IndexPage

export const Head = () => <title>IDGATE - Agencja interaktywna - Strony internetowe, strony WordPress, strony lading page</title>
