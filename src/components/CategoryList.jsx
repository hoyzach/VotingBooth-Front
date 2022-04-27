import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
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
            <th>Candidate 1</th>
            <th>Candidate 2</th>
            <th>Candidate 3</th>
            <th>Candidate 4</th>
            <th>Candidate 5</th>
          </CategoryTableHeader>
        </thead>
        <tbody>
          {
            props.categoryListData.map( ({key, categoryId, category, categoryStatus, candidate1, candidate2, candidate3, candidate4, candidate5}) => 
              <Category 
                key={key}
                categoryId={categoryId}
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
