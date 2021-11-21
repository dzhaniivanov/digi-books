import styled from "styled-components";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { format } from "timeago.js";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    flex-wrap:wrap;
    `;

const Info = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border:0.5px solid lightgray;
    box-shadow:-3px 6px 11px 5px #000000;
    margin:10px;
    padding:20px;
    max-width:300px;
    background-color: lightgreen;
`;


const Title = styled.h3`
    font-size:20px;
    margin:10px;
`;


const Created = styled.span`
    font-size:18px;
    font-weight:500;
`;


const Updated = styled.span`
    font-size:18px;
    font-weight:500;
`;




const Genre = ({ genre }) => {
    return (
        <Container>
            <Info>
                <Link to={`/genre/${genre._id}`} style={{textDecoration:"none",color:"inherit"}}>
                    <Title>{genre.name}</Title>
                </Link>
                <Created>Created on : {format(genre.createOn)}</Created>
                <Updated>Updated on: {format(genre.lastUpdateOn)}</Updated>
            </Info>
        </Container>
    )
}

export default Genre;
