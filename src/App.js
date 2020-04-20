import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer';
import { useSocket } from './socket/useSocket';
import { SocketFail } from './socket/SocketFail';
import { TreeLayout } from './treestructure/TreeLayout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const uri = 'ws://localhost:8000/ws';

function App() {
  const { data } = useSocket({ uri });

  return (
    <Container className="app-container">
      <header>
        <h1 className="mt-4 mb-4">Fast Explorer</h1>
      </header>

      <main>
        {data ? (
          <TreeLayout data={data}/>
        ) : (
          <SocketFail />
        )}
      </main>

      <Footer url="fastexplorer-js" />
    </Container>
  );
}

export default App;
