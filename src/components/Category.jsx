import React from 'react';
import styled from 'styled-components';

const CategoryCell = styled.td`
    border: 1px solid #cccccc;
    text-align: center;
    vertical-align: center;
    min-width: 14vmax;
    max-width: 30px;
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

    function buttonToggle(showButton, can) {

        if (showButton) {
           return <Button onClick={() => {handleVote(can)}}>Vote</Button>
        } else {return}
    }

    let candidateList = props.candidates.map((candidate, index) => {
        return <CategoryCell key={index}>{candidate}{buttonToggle(props.showButton, index)}</CategoryCell>
    })

        return (
            
            <tr className = {props.rowStyle}>
                <CategoryCell>{props.category}</CategoryCell>
                <CategoryCell>{props.categoryStatus}</CategoryCell>
                {candidateList}
            </tr>

        );
}
