import React from 'react';
import Category from './Category';
import styled from 'styled-components';

const CategoryTable = styled.table`
  font-size: 1rem;
  text-align: center; 
  vertical-align: middle;
`;

const CategoryTableHeader = styled.tr`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export default function CategoryList(props) {
    return (
        <CategoryTable className="table table-secondary table-bordered">
        <thead>
          <CategoryTableHeader>
            <th>Category</th>
            <th>Category Status</th>
            <th>Candidate1</th>
            <th>Candidate2</th>
            <th>Candidate3</th>
            <th>Candidate4</th>
            <th>Candidate5</th>
          </CategoryTableHeader>
        </thead>
        <tbody>
          {
            props.categoryListData.map( ({key, category, categoryStatus, candidate1, candidate2, candidate3, candidate4, candidate5}) => 
              <Category 
                key={key}
                category={category}
                categoryStatus={categoryStatus}
                candidate1={candidate1}
                candidate2={candidate2}
                candidate3={candidate3}
                candidate4={candidate4}
                candidate5={candidate5}
                handleVote={props.handleVote}
              />
            )
          }
        </tbody>
        </CategoryTable>
    );
}
