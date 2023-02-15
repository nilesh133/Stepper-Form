import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import StepperComponent from './components/StepperComponent';
import ContextProvider from './context/ContextProvider';
import FormsContainer from './components/FormsContainer';

function App() {
  return (
    <ContextProvider>
      <Container>
        <StepperComponent />
        <FormsContainer/>
      </Container>
    </ContextProvider>
  );
}

export default App;
