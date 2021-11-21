import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import Navbar from "./Navbar";
import { format } from "timeago.js";

const Container = styled.div`
    display:flex;
`;

const Left = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:100%;
`;

const Right = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    padding:20px;
    margin:20px;
`;

const Title = styled.h1`
    background-color: green;
    color:white;
`;

const Genre = styled.span``;

const Author = styled.h3`
    color:blue;
`;

const Created = styled.span``;

const Updated = styled.span``;

const Desc = styled.span`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction:column;
`;


const SingleGenre = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const genGenre = async () => {
            try {
                const res = await userRequest.get("/api/genre/" + id)
                setGenre(res.data);
            } catch (error) {
                console.log(error)
            };
        }
        genGenre();
    }, [id])



    return (
        <>
            <Navbar />
            <Container>

                {genre.length > 0 ? genre.map((genre) => (
                    <>
                        <Left>
                            <Image src={genre.image} />
                        </Left>
                        <Right>
                            <Title>{genre.name}</Title>
                            <Genre><b>Genre:</b>{genre.genre?.name}</Genre>
                            <Author>{genre.author}</Author>
                            <Created>Created on: {format(genre.createOn)}</Created>
                            <Updated>Updated on: {format(genre.lastUpdateOn)}</Updated>
                            <Desc><b>Short description:</b>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis maiores cumque soluta distinctio quaerat iusto, delectus, voluptas quia quibusdam aliquam earum? Ad consectetur quasi itaque non repudiandae voluptatem quibusdam.</Desc>
                        </Right>
                    </>
                ))
                    :
                    <span style={{  color: "red" }}>No books in this genre found</span>
                }
            </Container>
        </>
    )

}

export default SingleGenre;
