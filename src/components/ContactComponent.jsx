import styled from "styled-components";
import {ReactComponent as FacebookIcon} from "../static/contactIcons/FacebookIcon.svg"
import {ReactComponent as InstagramIcon} from "../static/contactIcons/InstagramIcon.svg"
import {ReactComponent as TwitterIcon} from "../static/contactIcons/TwitterIcon.svg"

const ContactComponent = () => {
    return(
        <FlexDiv>

            <ContactDiv>

            <ContactIconsDiv> 
            <IconDiv> 
                <FacebookIcon/>
            </IconDiv>
            <IconDiv> 
                <TwitterIcon/>
            </IconDiv>
            <IconDiv> 
                <InstagramIcon/>
            </IconDiv>
                </ContactIconsDiv>          
            <StyledP>(+44) 01368-862-843</StyledP>

            </ContactDiv>

            <StyledButton>Support us</StyledButton>

        </FlexDiv>
    )
}; 

const FlexDiv = styled.div`
display: flex;
align-items: center;
`
const ContactDiv = styled.div`
text-align: right;
margin-left: -5%;
margin-right: 5%;
`

const ContactIconsDiv = styled.div`
display: flex;
gap: 5%;
justify-content: right;
`

const StyledP = styled.p`
margin: 0;
font-size: 18pt;
font-weight: 500;
`

const StyledButton = styled.button`
height: 3vw;
width: 9vw;
border-radius: 0.3vw;
border-color: grey;
background-color: #246A73;
color: white;
font-size: 16pt;
font-weight: 690;
`

const IconDiv = styled.div`

`


export default ContactComponent;