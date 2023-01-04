import styled from "styled-components";


const SectionTitle = (props) => {
    return (
        <>
            {props.children 
            ? <StyledTitle align={props.align}>{props.children}</StyledTitle> 
            : null}  
        </>
    )
};

export const StyledTitle = styled.h1`
width: 100%;
margin-top: 0;
font-size: 40pt;
color: #444444;
text-align: ${props => props.align ? props.align : null};
`


export default SectionTitle