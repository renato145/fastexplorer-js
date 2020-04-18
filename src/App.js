import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Container className="app-container">
      <header>
        <h1 className="mt-4 mb-4">Fast Explorer</h1>
      </header>

      <main>
        <p>Todo (a lot 😅...)</p>
      </main>

      <Footer url="fastexplorer-js" />
    </Container>
  );
}

export default App;
