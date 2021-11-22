import styled from "styled-components";
import { AccountCircleOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {mobile} from "../responsive";

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
    ${mobile({display:"none"})}

`;

const LogoImage = styled.img`
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
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <MenuItem>Library</MenuItem>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
                        <MenuItem>Settings</MenuItem>
                    </Link>
                    <Link to="/genres" style={{ textDecoration: "none", color: "inherit" }}>
                        <MenuItem>Genres</MenuItem>
                    </Link>
                </Center>
                <Right>
                    <AccountCircleOutlined />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
