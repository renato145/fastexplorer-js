import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { SocketFail } from './socket/SocketFail';
import { TreeLayout } from './treestructure/TreeLayout';
import { ImageInput } from './viewers/ImageInput';
import { Heatmap } from './viewers/Heatmap';

const MainViewComponent = ({ data }) => {
  return data ? (
    <>
      <Col sm="auto">
        <TreeLayout data={data} />
      </Col>
      <Col>
        <Row>
          <Col md={6}>
            <ImageInput />
          </Col>
          <Col md={6}>
            <Heatmap />
          </Col>
        </Row>
      </Col>
    </>
  ) : (
    <SocketFail />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.socket.data,
  };
};

export const MainView = connect(mapStateToProps, null)(MainViewComponent);
