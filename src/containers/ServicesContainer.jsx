import styled from "styled-components";
import TextContainer from "./TextContainer";
import EnterteinmentImg from "../static/EnterteinmentImg.png"
import ServicesComponent from "../components/ServicesComponent";
import ServicesScroll from "../components/ServicesScroll";

const ServicesContainer = () => {
    return (
        <ServicesDiv>
        <ServicesComponent/>
        <ServicesScroll/>
        </ServicesDiv>
    )
};

const ServicesDiv = styled.div`


`


export default ServicesContainer;