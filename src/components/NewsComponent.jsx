import styled from "styled-components";

const NewsComponent = ({news}) => {

    return (
        <>
        <NewsDiv>
        
        {news ? 
    <>
        <NewsDate>
            {news.date}
        </NewsDate>

        <NewsContent>
            {news.news}
        </NewsContent>
    </>

:null 
}

    <StyledButton>
        More
    </StyledButton>
</NewsDiv>
</>
    )
};

const NewsDiv = styled.div`
display: flex;
gap: 5vw;
margin-bottom: 1em;
`

const NewsDate = styled.p`

`
const NewsContent = styled.p`

`

const StyledButton = styled.button`

`

export default NewsComponent;