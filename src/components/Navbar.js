import styled from "styled-components";
import { AccountCircleOutlined } from "@material-ui/icons";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
`;

const Logo = styled.div``;

const Center = styled.div`
    flex:1;
`;

const MenuItem = styled.span``;

const Right = styled.div`
    flex:1;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <img src="images/Exclusion 1.png" alt="" />
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
