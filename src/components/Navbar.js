import styled from "styled-components";
import { AccountCircleOutlined } from "@material-ui/icons";

const Container = styled.div`
    height: 60px;
    border:1px solid lightgray;
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
`;

const Logo = styled.div`
    display:flex;
`;

const LogoImage=styled.img`
    width:150px;
`;

const Center = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const MenuItem = styled.span`
    margin:5px;
    font-size:16px;
    cursor:pointer;
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    cursor:pointer;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <LogoImage src="images/Exclusion 1.png" alt="" />
                    </Logo>
                </Left>
                <Center>
                    <MenuItem>Library</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Center>
                <Right>
                    <AccountCircleOutlined />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
