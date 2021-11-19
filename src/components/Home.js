import styled from "styled-components";
import BookList from "./BookList";
import Navbar from "./Navbar";

const Container = styled.div``;

const Home = () => {
    return (
        <Container>
            <Navbar />
            <BookList />
        </Container>
    )
}

export default Home;
