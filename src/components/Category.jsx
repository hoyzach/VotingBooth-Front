import React from 'react';
import styled from 'styled-components';

const CategoryCell = styled.td`
    border: 1px solid #cccccc;
    width: 10vw;
    text-align: center;
    vertical-align: center;
`;

const Button = styled.button`
    font-size: 11px;
    width: 40px;
    margin: 3px 5px 0;
`;

export default function Category(props) {

    function handleVote(can) {
        //Prevent the default action of submitting the form
        //event.preventDefault();
        props.handleVote(props.categoryId,can);
    }
    
        return (
            <tr>
                <CategoryCell>{props.category}</CategoryCell>
                <CategoryCell>{props.categoryStatus}</CategoryCell>
                <CategoryCell>{props.candidate1}<Button onClick={() => {handleVote(0)}}>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate2}<Button onClick={() => {handleVote(1)}}>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate3}<Button onClick={() => {handleVote(2)}}>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate4}<Button onClick={() => {handleVote(3)}}>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate5}<Button onClick={() => {handleVote(4)}}>Vote</Button></CategoryCell>
            </tr>
        );
}
