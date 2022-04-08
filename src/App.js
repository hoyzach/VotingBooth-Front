import './App.css';
import Header from './components/Header.jsx';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
  background-color: rgb(20,56,97);
  color: #cccccc;
`;

function App() {
  return (
    <AppDiv>
      <Header/>
    </AppDiv>
  );
}

export default App;