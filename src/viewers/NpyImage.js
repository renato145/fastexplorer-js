import React, { useEffect, useRef } from 'react';
import { urlToArray } from '../helpers/numpyReader';

export const NpyImage = ({ url }) => {
  const ref = useRef();

  useEffect(() => {
    if (!url) return;
    urlToArray(url).then(({ data, shape }) => {
      const canvas = ref.current;
      const [channels, height, width ] =
        shape.length === 3 ? shape : [1, ...shape];
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      if (channels === 1) {
        for (let i = 0; i < d.length / 4; i++) {
          const idx = i * 4;
          // const colorValue = color(interpolateMagma(data[idx]/255)); TODO add colormap selector
          const colorValue = data[i] * 255;
          d[idx] = colorValue;
          d[idx + 1] = colorValue;
          d[idx + 2] = colorValue;
          d[idx + 3] = 255;
        }
      } else {
        const channelPixels = width * height;
        for (let i = 0; i < d.length / 4; i++) {
          const idx = i * 4;
          d[idx] = data[i] * 255;
          d[idx + 1] = data[i + channelPixels] * 255;
          d[idx + 2] = data[i + channelPixels * 2] * 255;
          d[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    });
  }, [url]);

  return (
    <canvas ref={ref} style={{ width: '100%', background: '#eee' }} />
  );
};
