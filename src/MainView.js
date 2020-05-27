import React from 'react';
import { connect } from 'react-redux';
import { SocketFail } from './socket/SocketFail';
import { TreeLayout } from './treestructure/TreeLayout';
import { ImageInput } from './viewers/ImageInput';
import { Heatmap } from './viewers/Heatmap';

const ViewImage = ({children, tw, ...props}) => (
  <div className={`w-full flex-auto sm:flex-1 md:flex-auto lg:flex-1 max-w-sm lg:max-w-md ${tw}`} {...props}>
    {children}
  </div>
);

const MainViewComponent = ({ data }) => {
  return data ? (
    <div className="flex flex-wrap justify-start">
      <div className="flex-none">
        <TreeLayout data={data} />
      </div>
      <div className="flex flex-wrap flex-auto md:flex-1">
        <ViewImage>
          <ImageInput />
        </ViewImage>
        <ViewImage tw="sm:ml-3 md:ml-0 lg:ml-3">
          <Heatmap />
        </ViewImage>
      </div>
    </div>
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
