import PageContainer from "../containers/PageContainer";
import SectionContainer from "../containers/SectionContainer";
import TextContainer from "../containers/TextContainer";
import DaycentrePicture from "../static/DaycentreFrontPicture.png"
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import NewsContainer from "../containers/NewsContainer";
import ServicesContainer from "../containers/ServicesContainer";


const Homepage = () => {
    return (
        <PageContainer> 
            
            <SectionContainer flex={true}>

                <TextContainer
                    width="55.5"
                    title="Welcome to the Dunbar Day Centre!"
                    subtitle="Where we provide care, companionship, and activities for our elderly community!"
                    content="The Dunbar Day Centre is a welcoming place for the elderly to spend their days, offering a range of activities and top-quality care. Our goal is to help our clients lead active, fulfilling lives and feel at home in our centre. Visit us to see how we can make a positive difference."
                    extra={<a href="/"><h1>Find out more</h1></a>}
                /> 

                <ImgContainerDiv>
                <img src={DaycentrePicture} alt="" />
                </ImgContainerDiv>

            </SectionContainer>

            <SectionContainer>
                <SectionTitle>News & Announcements</SectionTitle>
                <NewsContainer/>
            </SectionContainer>



            <SectionContainer>
                <SectionTitle>Our Services</SectionTitle>
                <ServicesContainer/>
            </SectionContainer>



        </PageContainer>
        )
};

const ImgContainerDiv = styled.div`
width: 39%
`


export default Homepage