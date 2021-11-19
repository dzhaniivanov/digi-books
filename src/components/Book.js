import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin:5px;
    min-width:280px;
    height:350px;
    border:0.5px solid lightgray;
`;

const Image = styled.img`
    height:30%;
`;

const Info = styled.div`
    display:flex;
    flex-direction:column;

`;

const Title = styled.h3``;

const Author = styled.h4``;

const Genre = styled.span``;

const Created = styled.span``;


const Updated = styled.span``;

const Button = styled.button`
    
`;



const Book = ({ book }) => {
    return (
        <Container>
            <Image src={book.img} />
            <Info>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <Genre>Genre: {book.genre}</Genre>
                <Created>Created on : {book.created}</Created>
                <Updated>Updated on: {book.updated}</Updated>
                <Link to={`/book/${book.id}`}>
                <Button>
                    <ArrowRightAltOutlined />
                </Button>
                </Link>
            </Info>
        </Container>
    )
}

export default Book
