// MUI
import * as React from 'react';
import { Container } from '@mui/material';
import { TireProvider } from './context/TireContext';

// Components
import TireList from './components/TireList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{
        border: '4px solid #b4e4fc',
        height: '100vh',
      }}>
        <TireProvider>
          <TireList />
        </TireProvider>
      </Container>
    </div>
  );
}

export default App;
