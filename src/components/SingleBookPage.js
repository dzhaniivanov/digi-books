import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import Navbar from "./Navbar";
import {format} from "timeago.js";

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


const SingleBookPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [book, setBook] = useState({});

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await userRequest.get("/api/book/" + id)
                setBook(res.data);
            } catch (error) {
                console.log(error)
            };
        }
        getBook();
    }, [id])
    
    
    



    return (
        <>
            <Navbar />
            <Container>
                <Left>
                    <Image src={book.image} />
                </Left>
                <Right>
                    <Title>{book.name}</Title>
                    <Genre><b>Genre:</b>{book.genre?.name}</Genre>
                    <Author>{book.author}</Author>
                    <Created>Created on: {format(book.createOn)}</Created>
                    <Updated>Updated on: {format(book.lastUpdateOn)}</Updated>
                    <Desc><b>Short description:</b>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis maiores cumque soluta distinctio quaerat iusto, delectus, voluptas quia quibusdam aliquam earum? Ad consectetur quasi itaque non repudiandae voluptatem quibusdam.</Desc>
                </Right>
            </Container>
        </>
    )
}

export default SingleBookPage;
