import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer';
import { useSocket } from './useSocket';
import { SocketFail } from './SocketFail';
import { GraphLayout } from './GraphLayout';
import { TreeLayout } from './treestructure/TreeLayout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const uri = 'ws://localhost:8000/ws';

// TODO
// https://observablehq.com/@d3/collapsible-tree?collection=@d3/d3-hierarchy -> instead of force sim

function App() {
  const { data } = useSocket({ uri });
  console.log(data);

  return (
    <Container className="app-container">
      <header>
        <h1 className="mt-4 mb-4">Fast Explorer</h1>
      </header>

      <main>
        {data ? (
          <GraphLayout
            nodes={data.nodes}
            links={data.links}
          />
          // <TreeLayout data={data}/>
        ) : (
          <SocketFail />
        )}
      </main>

      <Footer url="fastexplorer-js" />
    </Container>
  );
}

export default App;
