import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";

const Container = styled.div``;

const Image = styled.img``;

const Info = styled.div``;

const Title = styled.h3``;

const Author = styled.h4``;

const Genre = styled.span``;

const Created = styled.span``;


const Updated = styled.span``;

const Button = styled.button``;



const Book = ({ book }) => {
    return (
        <Container>
            <Image src={book.img} />
            <Info>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <Genre>{book.genre}</Genre>
                <Created>{book.created}</Created>
                <Updated>{book.updated}</Updated>
                <Button>
                    <ArrowRightAltOutlined />
                </Button>
            </Info>
        </Container>
    )
}

export default Book
