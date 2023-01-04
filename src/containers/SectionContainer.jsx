import styled from "styled-components";
import SectionDivider from "../components/SectionDivider";
import SectionTitle from "../components/SectionTitle";

const SectionContainer = (props) => {
  return (
    <StyledSection>
      
      <SectionDivider />
      <br />

      {props.flex
      ? <StyledFlexContainer> 
       {props.children}
      </StyledFlexContainer>
       :props.children
      }

    </StyledSection>
  );
};

const StyledSection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 1em;
`;

const StyledFlexContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;





export default SectionContainer;
