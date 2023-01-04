import styled from "styled-components";
import ContactComponent from "../components/ContactComponent";
import {ReactComponent as Logo} from "../static/DunbarDayCentreLogo.svg"


const HeaderContainer = () => {
    return (
        <HeaderDiv>
            <Logo height="75%"/>
            <ContactComponent/>
        </HeaderDiv>
    )
};

const HeaderDiv = styled.div`
margin-left: 10vw;
margin-right: 10vw;
display: flex;
align-items: center;
height: 7vw;
justify-content: space-between;
`

export default HeaderContainer