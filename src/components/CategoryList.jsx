import React from 'react';
import Category from './Category';
import styled from 'styled-components';

const CategoryTable = styled.table`
  font-size: calc(8px + 0.3vw);
  text-align: center; 
  vertical-align: middle;
`;

const CategoryTableHeader = styled.tr`
  font-size: calc(12px + 0.3vw);
  font-weight: bold;
  color: black;
`;

export default function CategoryList(props) {

  var candidateHeaders = [];

  for (var i = 1; i <= props.maxCandidates; i++){
    candidateHeaders.push(<th key={i}>CANDIDATE {i}</th>);
  }

    return (
        <CategoryTable className="table table-bordered">
        <thead>
          <CategoryTableHeader>
            <th>CATEGORY</th>
            <th>STATUS</th>
            {candidateHeaders}
          </CategoryTableHeader>
        </thead>
        <tbody>
          {
            props.categoryListData.map( ({key, categoryId, rowStyle, showButton, category, categoryStatus, candidates}) => 
              <Category 
                key={key}
                categoryId={categoryId}
                rowStyle={rowStyle}
                showButton={showButton}
                category={category}
                categoryStatus={categoryStatus}
                candidates={candidates}
                handleVote={props.handleVote}
              />
            )
          }
        </tbody>
        </CategoryTable>
    );
}
