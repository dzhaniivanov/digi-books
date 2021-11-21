import styled from "styled-components";
import Book from "./Book";
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
    const [search, setSearch] = useState("");


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
            <SearchContainer >
                ALL BOOKS
                <input
                    type="text"
                    name="search"
                    placeholder="search book"
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => { setSearch(e.target.value) }} />
                <SearchOutlined />
            </SearchContainer>
            <Container>
                {books.filter(book => {
                    if (search === "") {
                        return book;
                    } else if (book.name.toLowerCase().includes(search.toLowerCase())) {
                        return book;
                    }
                }).map((book) => (
                    <Book book={book} key={book._id} />
                ))}
            </Container>
        </>
    )
}

export default BookList
