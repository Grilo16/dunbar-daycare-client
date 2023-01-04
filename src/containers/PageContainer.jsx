import styled from "styled-components";
import SectionDivider from "../components/SectionDivider";
import SectionContainer from "./SectionContainer";

const PageContainer = (props) => {



    return (
        <PageContainerDiv>

        {props.children}

        </PageContainerDiv>
    )
};

const PageContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10vw;
margin-right: 10vw;
` 



export default PageContainer