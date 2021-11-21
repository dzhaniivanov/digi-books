import styled from "styled-components";
import Book from "./Book";
import { SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import Navbar from "./Navbar";
import Genre from "./Genre";

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

const Button = styled.button``;




const GenreList = () => {
    const [genres, setGenres] = useState([]);
    const [search, setSearch] = useState("");

    /* export const getAllGenres = async () => {
    try {
        const res=await userRequest.get("/api/genre")
    } catch (error) {
        console.log(error)
    }
} */


    useEffect(() => {
        const getGenres = async () => {
            try {
                const res = await userRequest.get("/api/genre");
                setGenres(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        getGenres();
    }, [])





    return (
        <>
        <Navbar/>
            <SearchContainer >
                ALL GENRES
                <input
                    type="text"
                    name="search"
                    placeholder="search genres"
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => { setSearch(e.target.value) }} />
                <SearchOutlined />
            </SearchContainer>
            <Container>
                {genres.filter(genre => {
                    if (search === "") {
                        return genre;
                    } else if (genre.name.toLowerCase().includes(search.toLowerCase())) {
                        return genre;
                    }
                }).map((genre) => (
                    <Genre genre={genre} key={genre._id} />
                ))}
            </Container>
        </>
    )
}

export default GenreList
