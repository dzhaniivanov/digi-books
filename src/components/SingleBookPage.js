import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
    display:flex;
`;

const Left = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:80%;
`;

const Right = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
`;

const Title = styled.h1``;

const Genre=styled.span``;

const Author = styled.h3``;

const Created = styled.span``;

const Updated = styled.span``;

const Desc = styled.span``;


const SingleBookPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Left>
                    <Image src="/images/booksCover/Mask Group 17.png" />
                </Left>
                <Right>
                    <Title>Will</Title>
                    <Genre><b>Genre:</b>Personal Growth</Genre>
                    <Author>Will Smith</Author>
                    <Created>Created on: 01.01.2021</Created>
                    <Updated>Updated on: 02.01.2021</Updated>
                    <Desc><b>Short description:</b>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis maiores cumque soluta distinctio quaerat iusto, delectus, voluptas quia quibusdam aliquam earum? Ad consectetur quasi itaque non repudiandae voluptatem quibusdam.</Desc>
                </Right>
            </Container>
        </>
    )
}

export default SingleBookPage;
