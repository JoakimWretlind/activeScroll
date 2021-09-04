import { SharedSection, MainHeader } from "../../sharedStyling"

const Contact = ({ forwardedRef }) => {
    return (
        <SharedSection id="contact" ref={forwardedRef}>
            <MainHeader>contact</MainHeader>
        </SharedSection>
    )
}

export default Contact