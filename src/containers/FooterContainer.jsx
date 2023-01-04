import styled from "styled-components";
import ClosingDivider from "../components/ClosingDivider";
import {ReactComponent as Logo} from "../static/DunbarDayCentreLogo.svg"



const FooterContainer = () => {
    return (
        <FooterDiv>
        <ClosingDivider/>
        <FlexDiv> 

        <Logo height="3vw"/>

        </FlexDiv>
        </FooterDiv>
    )
}; 


const FooterDiv = styled.div`
margin-left: 10vw;
margin-right: 10vw;
margin-bottom: 1em;
`

const FlexDiv = styled.div`
display: flex; 
justify-content: center;
margin-top: 1em;

`

export default FooterContainer