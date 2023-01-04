import styled from "styled-components";
import { StyledTitle } from "../components/SectionTitle";

const TextContainer = ({title, subtitle, content, extra, width, height}) => {
    return (
        <TextBlockDiv height={height} width={width}>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
        <StyledContent>{content}</StyledContent>

        {extra ? extra : null}
        
        </TextBlockDiv>
    )
};

const TextBlockDiv = styled.div`
width: ${props => props.width ? props.width + "%" : null};
height: ${props => props.height ? props.height + "%" : null};
`


const StyledSubTitle = styled.h3`
font-size: 28pt;
font-weight: normal;
color: #444444;

`
const StyledContent = styled.p`
font-size: 20pt;
color: #444444

`


export default TextContainer;