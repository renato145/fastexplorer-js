import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from './Footer';
import { SocketFail } from './socket/SocketFail';
import { TreeLayout } from './treestructure/TreeLayout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { ImageInput } from './viewers/ImageInput';
import { Heatmap } from './viewers/Heatmap';
import { SocketStatus } from './socket/SocketStatus';

const App = ({data}) => {
  return (
    <Container className="app-container" fluid="xl">
      <header>
        <h1 className="mt-4 mb-4">Fast Explorer</h1>
      </header>

      <main>
        <Row>
          <Col>
            <SocketStatus />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {data ? (
            <>
              <Col sm="auto">
                <TreeLayout data={data} />
              </Col>
              <Col>
                <ImageInput />
                <Heatmap />
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

const mapStateToProps = (state) => {
  return {
    data: state.socket.data
  };
};

export default connect(mapStateToProps, null)(App);
