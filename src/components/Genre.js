import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {format} from "timeago.js";


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




const Title = styled.h3``;

const Author = styled.h4``;


const Created = styled.span``;


const Updated = styled.span``;

const Button = styled.button`
    height:200px;
`;



const Genre = ({ genre }) => {
    return (
        <Container> 
            <Info>
                <Center>
                    <Title>{genre.name}</Title>
                    <Created>Created on : {format(genre.createOn)}</Created>
                    <Updated>Updated on: {format(genre.lastUpdateOn)}</Updated>
                </Center>
                <Right>
                    <Link to={`/genre/${genre._id}`}>
                        <Button>
                            <ArrowRightAltOutlined />
                        </Button>
                    </Link>
                </Right>
            </Info>
        </Container>
    )
}

export default Genre;
