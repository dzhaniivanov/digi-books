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

const Title = styled.h1``;

const Subtitle = styled.h2``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

const WrapperRight = styled.div`
`;

const Image = styled.img``;



const Register = () => {
    return (
        <Container>
            <WrapperLeft>
                <Logo>
                    <img src="images/Exclusion 1.png" alt="" />
                </Logo>
                <Title>Welcome to the best book database!</Title>
                <Subtitle>Create your profile</Subtitle>
                <Form>
                    <Input placeholder="enter a email" type="email" />
                    <Input placeholder="password" type="password" />
                    <Input placeholder="repeat password" type="password" />
                    <Button>SIGN UP</Button>
                    <span>You have a account?LOG IN HERE</span>
                </Form>
            </WrapperLeft>
            <WrapperRight>
                <Image src="images/Group 19445.png" />
            </WrapperRight>
        </Container>
    )
}

export default Register;