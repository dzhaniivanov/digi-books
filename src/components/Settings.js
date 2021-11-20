import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
    display:flex;
`;

const Left = styled.div`
    flex:1;
`;

const Right = styled.div`
    flex:1;
`;
const UlItem = styled.ul``;

const LiItem = styled.li`
    list-style:none;
    padding:20px;
`;
const Title=styled.h3`
    
`;

const Wrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button=styled.button`
    background-color: #08C642;
    color:white;
    cursor:pointer;
    padding:10px;
    margin:20px;
`;



const Settings = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Left>
                    <Title style={{margin:"30px"}}>GENERAL SETTINGS</Title>
                    <UlItem>
                        <LiItem>NOTIFICATIONS AND EMAIL</LiItem>
                        <LiItem>USER MANAGEMENT</LiItem>
                        <LiItem>PHYSICAL LIBRARIES</LiItem>
                        <LiItem>READING EVENTS</LiItem>
                        <LiItem>INVOICING</LiItem>
                        <LiItem>BOOK STATISTICS</LiItem>
                        <LiItem>READER STATISTICS</LiItem>
                        <LiItem>EVENTS STATISTICS</LiItem>
                    </UlItem>
                </Left>
                <Right>
                    <Wrapper>
                    <Title>BOOK SETTINGS</Title>
                    <Button>ADD NEW</Button>
                  </Wrapper>
                    <UlItem>
                        <LiItem>MANAGE GENRES</LiItem>
                        <LiItem>BOOK VISIBILITY</LiItem>
                        <LiItem>AUTHORS DATABASE</LiItem>
                        <LiItem>BOOK COVERS</LiItem>
                    </UlItem>
                </Right>
            </Container>
        </>
    )
}

export default Settings
