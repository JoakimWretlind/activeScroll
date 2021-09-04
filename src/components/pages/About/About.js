import { SharedSection, MainHeader } from "../../sharedStyling"

const About = ({ forwardedRef }) => {
    return (
        <SharedSection id="about" className="" ref={forwardedRef}>
            <MainHeader>about</MainHeader>
        </SharedSection>
    )
}

export default About