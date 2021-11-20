import styled from "styled-components";
import Book from "./Book";
import { books } from "../dummyData";
import {SearchOutlined} from "@material-ui/icons";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const SearchContainer=styled.div`
    display:flex;
    align-items: center;
    margin:5px;
`;



const BookList = () => {
    return (
        <>
        <SearchContainer>
        ALL BOOKS <input type="text" placeholder="search book" style={{marginLeft:"5px"}} />
        <SearchOutlined/>
    </SearchContainer>
        <Container>
            {books.map((book) => (
                <Book book={book} key={book.id} />
            ))}
        </Container>
        </>
    )
}

export default BookList
