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
        <CategoryTable className="table table-bordered">
        <thead>
          <CategoryTableHeader>
            <th>CATEGORY</th>
            <th>CATEGORY STATUS</th>
            <th>CANDIDATE 1</th>
            <th>CANDIDATE 2</th>
            <th>CANDIDATE 3</th>
          </CategoryTableHeader>
        </thead>
        <tbody>
          {
            props.categoryListData.map( ({key, categoryId, rowStyle, category, categoryStatus, candidate1, candidate2, candidate3}) => 
              <Category 
                key={key}
                categoryId={categoryId}
                rowStyle={rowStyle}
                category={category}
                categoryStatus={categoryStatus}
                candidate1={candidate1}
                candidate2={candidate2}
                candidate3={candidate3}
                handleVote={props.handleVote}
              />
            )
          }
        </tbody>
        </CategoryTable>
    );
}
