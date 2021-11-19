import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
`;


const WrapperLeft = styled.div`
    padding:20px;
`;

const Logo = styled.div`
    

`;

const Title = styled.h1`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:26px;
    font-weight:600;
`;


const Form = styled.form`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 10px 0px;
    padding:10px;
`;

const Button = styled.button`
    width:90%;
    border:none;
    padding:15px 20px;
    background-color: #1076B5;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    cursor:pointer;
`;

const WrapperRight = styled.div`
    display:flex;
`;

const Image = styled.img`
`;

const Login = () => {
    return (
        <Container>
            <WrapperLeft>
                <Logo>
                    <img src="images/Exclusion 1.png" alt="" />
                </Logo>
                <Title>Welcome back!</Title>
                <Form>
                    <Input placeholder="enter a email" type="email" />
                    <Input placeholder="password" type="password" />
                    <Button>LOG IN</Button>
                    <span>You  dont't have an account?SIGN UP HERE</span>
                </Form>
            </WrapperLeft>
            <WrapperRight>
                <Image src="images/Group 19445.png" />
            </WrapperRight>
        </Container>
    )
}

export default Login;