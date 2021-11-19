import styled from "styled-components";
import Book from "./Book";
import { books } from "../dummyData";

const Container = styled.div`
    padding: 20px;
    display: flex;
`;


const BookList = () => {
    return (
        <Container>
            {books.map((book) => (
                <Book book={book} key={book.id} />
            ))}
        </Container>
    )
}

export default BookList
