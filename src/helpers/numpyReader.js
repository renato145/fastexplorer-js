// Based on https://github.com/aplbrain/npyjs

const dtypes = {
  '<u1': {
    name: 'uint8',
    size: 8,
    arrayConstructor: Uint8Array,
  },
  '|u1': {
    name: 'uint8',
    size: 8,
    arrayConstructor: Uint8Array,
  },
  '|i1': {
    name: 'int8',
    size: 8,
    arrayConstructor: Int8Array,
  },
  '<u4': {
    name: 'uint32',
    size: 32,
    arrayConstructor: Int32Array,
  },
  '<i4': {
    name: 'int32',
    size: 32,
    arrayConstructor: Int32Array,
  },
  //   '<u8': {
  //     name: 'uint64',
  //     size: 64,
  //     arrayConstructor: BigUint64Array,
  //   },
  //   '<i8': {
  //     name: 'int64',
  //     size: 64,
  //     arrayConstructor: BigInt64Array,
  //   },
  '<f4': {
    name: 'float32',
    size: 32,
    arrayConstructor: Float32Array,
  },
  '<f8': {
    name: 'float64',
    size: 64,
    arrayConstructor: Float64Array,
  },
};

export const npyToUrl = async (blob) => {
  const buffer = await blob.arrayBuffer();
  const headerLength = new DataView(buffer.slice(8, 10)).getUint8(0);
  const offsetBytes = 10 + headerLength;

  const hcontents = new TextDecoder('utf-8').decode(
    new Uint8Array(buffer.slice(10, 10 + headerLength))
  );

  const header = JSON.parse(
    hcontents
      .replace(/'/g, '"')
      .replace('False', 'false')
      .replace('(', '[')
      .replace(')', ']')
      .replace(', }', '}')
    // .replace(/,*\),*/g, ']')
  );

  const { shape, descr } = header;
  const dataUrl = URL.createObjectURL(blob.slice(offsetBytes));

  return {
    type: header.type,
    payload: {
      dataUrl,
      shape,
      descr,
      i: header.i
    },
  };
};

export const urlToArray = async ({ dataUrl, shape, descr }) => {
  const url = new URL(dataUrl);
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return {
    data: new dtypes[descr]['arrayConstructor'](buffer),
    shape: shape
  }
};
