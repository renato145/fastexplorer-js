import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { send_event } from '../sagas/socketSaga';
import { serverEvents } from '../constants/serverEvents';
import { urlToArray } from '../helpers/numpyReader';

const mapDispatch = { send_event };

export const ImageViewerComponent = ({ inputImage, send_event }) => {
  const ref = useRef();

  useEffect(() => {
    if (!inputImage) return;
    urlToArray(inputImage).then(({data, shape}) => {
      const canvas = ref.current;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length/4; i++) {
        const idx = i*4;
        // const colorValue = color(interpolateMagma(data[idx]/255));
        const colorValue = data[i]*255;
        d[idx] = colorValue;
        d[idx+1] = colorValue;
        d[idx+2] = colorValue;
        d[idx+3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    });
  }, [inputImage]);

  return (
    <div style={{maxWidth: '300px'}}>
      <Button variant='link' onClick={() => send_event(serverEvents.LOAD_INPUT)}>Load Input</Button>
      <canvas ref={ref} width={28} height={28} style={{width:'100%', background:'#eee'}} />
    </div>
  );
};

const mapStateToProps = state => ({
  inputImage: state.socket.inputImage,
});

export const ImageViewer = connect(mapStateToProps, mapDispatch)(ImageViewerComponent);
