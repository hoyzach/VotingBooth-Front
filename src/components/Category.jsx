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
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Category(props) {

    const handleVote= (event) => {
        //Prevent the default action of submitting the form
        event.preventDefault();
        props.handleVote();
    }
    
        return (
            <tr>
                <CategoryCell>{props.category}</CategoryCell>
                <CategoryCell>{props.candidate1}<Button onClick={handleVote}>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate2}<Button>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate3}<Button>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate4}<Button>Vote</Button></CategoryCell>
                <CategoryCell>{props.candidate5}<Button>Vote</Button></CategoryCell>
            </tr>
        );
}
