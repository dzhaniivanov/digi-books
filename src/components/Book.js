import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {format} from "timeago.js";


const Container = styled.div`
    display:flex;
`;

const Info = styled.div`
    display:flex;
    max-width:400px;
    margin:10px;
    box-shadow:-3px 6px 11px 5px #000000;

`;

const Left = styled.div``;

const Center = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    
`;

const Right = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;

const Image = styled.img`
    width:50%;
    margin:10px;
    
`;



const Title = styled.h3`
    font-size:20px;
`;

const Author = styled.h4`
    font-size:14px;
`;

const Genre = styled.span`
    font-size:18px;
`;

const Created = styled.span`
    font-size:18px;

`;


const Updated = styled.span`
    font-size:18px;

`;

const Button = styled.button`
    height:200px;
    background-color: blue;
    color:white;
    border-radius:10px;
`;



const Book = ({ book }) => {
    let genreName=Object.values(book.genre)[1];
    return (
        <Container> 
            <Info>
                <Left>
                    <Image src={book.image} />
                </Left>
                <Center>
                    <Title>{book.name}</Title>
                    <Author>{book.author}</Author>
                    <Genre>Genre:<b>{genreName}</b></Genre>
                    <Created>Created on : {format(book.createOn)}</Created>
                    <Updated>Updated on: {format(book.lastUpdateOn)}</Updated>
                </Center>
                <Right>
                    <Link to={`/book/${book._id}`}>
                        <Button>
                            <ArrowRightAltOutlined />
                        </Button>
                    </Link>
                </Right>
            </Info>
        </Container>
    )
}

export default Book
