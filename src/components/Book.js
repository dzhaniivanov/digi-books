import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:flex;
`;

const Info = styled.div`
    display:flex;

`;

const Left = styled.div``;

const Center = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    
`;

const Right = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;

const Image = styled.img`
`;



const Title = styled.h3``;

const Author = styled.h4``;

const Genre = styled.span``;

const Created = styled.span``;


const Updated = styled.span``;

const Button = styled.button`
    height:200px;
`;



const Book = ({ book }) => {
    return (
        <Container>
            <Info>
                <Left>
                    <Image src={book.image} />
                </Left>
                <Center>
                    <Title>{book.name}</Title>
                    <Author>{book.author}</Author>
                  {/*   <Genre>Genre: {book.genre}</Genre> */}
                    <Created>Created on : {book.createOn}</Created>
                    <Updated>Updated on: {book.lastUpdateOn}</Updated>
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
