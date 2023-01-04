import styled from "styled-components";
import TextContainer from "../containers/TextContainer";
import EnterteinmentImg from "../static/EnterteinmentImg.png"


const ServicesComponent = () => {
    return (
        <ServicesDiv>
        <TextContainer 
        width ="50"
        subtitle="Enterteinment"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore enim voluptate soluta laudantium illum, quaerat adipisci rem doloribus quod nemo dolor. Laudantium ad iste itaque, sunt soluta aliquam quae maxime ipsa odit corporis magnam mollitia, dolores nobis eveniet totam optio, voluptates molestiae alias veritatis eum in dolorem quam. Dolorem."
        />

        <ImgContainerDiv>
            <img src={EnterteinmentImg} alt="" />
        </ImgContainerDiv>

    </ServicesDiv>
    )
}; 


const ServicesDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const ImgContainerDiv = styled.div`
margin-top: 4.20em;
width: 39%
`

export default ServicesComponent;