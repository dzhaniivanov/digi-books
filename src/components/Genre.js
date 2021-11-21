import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { format } from "timeago.js";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border:0.5px solid lightgray;
    box-shadow:-3px 6px 11px 5px #000000;
`;


const Title = styled.h3``;


const Created = styled.span``;


const Updated = styled.span``;




const Genre = ({ genre }) => {
    return (
        <Container>
            <Info>
                <Title>{genre.name}</Title>
                <Created>Created on : {format(genre.createOn)}</Created>
                <Updated>Updated on: {format(genre.lastUpdateOn)}</Updated>
            </Info>
        </Container>
    )
}

export default Genre;
