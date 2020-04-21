import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from './Footer';
import { useSocket } from './socket/useSocket';
import { SocketFail } from './socket/SocketFail';
import { TreeLayout } from './treestructure/TreeLayout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { ImageViewer } from './viewers/ImageViewer';
import { SocketStatus } from './socket/SocketStatus';

const uri = 'ws://localhost:8000/ws';

function App() {
  const { data, status, socket } = useSocket({ uri });

  return (
    <Container className="app-container" fluid="xl">
      <header>
        <h1 className="mt-4 mb-4">Fast Explorer</h1>
      </header>

      <main>
        <Row>
          <Col>
            <SocketStatus status={status} />
            <SocketStatus status={status} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {data ? (
            <>
              <Col sm="auto">
                <TreeLayout data={data} />
              </Col>
              <Col>
                <ImageViewer socket={socket} />
              </Col>
            </>
          ) : (
            <SocketFail />
          )}
        </Row>
      </main>

      <Footer url="fastexplorer-js" />
    </Container>
  );
}

export default App;
