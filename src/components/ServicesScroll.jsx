import styled from "styled-components";
import {ReactComponent as RightArrow} from "../static/RightArrow.svg"
import {ReactComponent as LeftArrow} from "../static/LeftArrow.svg"

const ServicesScroll = () => {
    const mockItems = [1, 2, 3, 4, 5]

    const ScrollSelectors = mockItems.map((item, index) => {
        return <PageSelectorDiv key={index} selected={index === 1 ? true : false}/>
    } )


    return (
      <ScrollDiv>

        <LeftArrow height="1.5em"/>
        {ScrollSelectors}
        <RightArrow height="1.5em"/>
        
      </ScrollDiv>  

    )
};

const ScrollDiv = styled.div`
margin-top: 3em;
margin-bottom: 1em;
width : 100%;
display : flex;
align-items: center;
justify-content: center;
`

const PageSelectorDiv = styled.div`
background-color: ${props => props.selected ? "grey" : "lightGrey"};
border-radius: 50%;
height: 1.5em;
width: 1.5em;
margin-left: 0.5em;
margin-right: 0.5em;
`

export default ServicesScroll