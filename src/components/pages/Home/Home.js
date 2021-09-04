import { SharedSection, MainHeader } from "../../sharedStyling"

const Home = ({ forwardedRef }) => {
    return (
        <SharedSection id="home" ref={forwardedRef}>
            <MainHeader>home</MainHeader>
        </SharedSection>
    )
}

export default Home
