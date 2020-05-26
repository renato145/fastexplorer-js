import React, { useEffect, useRef, useState } from 'react';
import { urlToArray } from '../helpers/numpyReader';
import styled from 'styled-components';
import {
  color,
  ascending,
  interpolateRdBu,
  interpolateMagma,
  interpolateInferno,
  interpolateWarm,
  interpolateCool,
  interpolateSpectral,
  interpolatePlasma,
  interpolateGreys,
} from 'd3';

const colors = {
  Magma: interpolateMagma,
  RdBu: interpolateRdBu,
  Inferno: interpolateInferno,
  Warm: interpolateWarm,
  Cool: interpolateCool,
  Spectral: interpolateSpectral,
  Plasma: interpolatePlasma,
  Greys: interpolateGreys,
};

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 0em;
`;

export const NpyImage = ({ url, title, defaultCmap = 'RdBu' }) => {
  const ref = useRef();
  const [channels, setChannels] = useState();
  const [cmap, setCmap] = useState(defaultCmap);

  useEffect(() => {
    if (!url) return;
    urlToArray(url).then(({ data, shape }) => {
      const canvas = ref.current;
      const [channels, height, width] =
        shape.length === 3 ? shape : [1, ...shape];
      setChannels(channels);
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      if (channels === 1) {
        for (let i = 0; i < d.length / 4; i++) {
          const idx = i * 4;
          const colorValue = color(colors[cmap](data[i]));
          d[idx] = colorValue.r;
          d[idx + 1] = colorValue.b;
          d[idx + 2] = colorValue.g;
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
  }, [url, cmap]);

  return (
    <>
      <Title>
        <div className="tw-ml-1 tw-font-medium tw-text-gray-900">{title}</div>
        {channels === 1 && (
          <div>
            <select
              className="tw-px-2 tw-h-auto tw-text-xs tw-bg-white tw-border-gray-400 tw-border tw-rounded-sm focus:tw-outline-none"
              defaultValue={cmap}
              onChange={(e) => setCmap(e.target.value)}
            >
              {Object.keys(colors).sort(ascending).map((d) => (
                <option key={d} value={d} className="tw-py-2">
                  {d}
                </option>
              ))}
            </select>
          </div>
        )}
      </Title>
      <canvas ref={ref} style={{ width: '100%', background: '#eee' }} />
    </>
  );
};
