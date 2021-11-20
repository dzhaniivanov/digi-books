import styled from "styled-components";
import Book from "./Book";
import { books } from "../dummyData";
import { SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../requestMethods";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const SearchContainer = styled.div`
    display:flex;
    align-items: center;
    margin:5px;
`;



const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await userRequest.get("/api/book");
                setBooks(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        getBooks();
    }, [])


    return (
        <>
            <SearchContainer>
                ALL BOOKS <input type="text" placeholder="search book" style={{ marginLeft: "5px" }} />
                <SearchOutlined />
            </SearchContainer>
            <Container>
                {books.map((book) => (
                    <Book book={book} key={book._id} />
                ))}
            </Container>
        </>
    )
}

export default BookList
