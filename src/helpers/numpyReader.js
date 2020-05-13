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

const str2json = x => {
  return JSON.parse(
    x
      .replace(/'/g, '"')
      .replace('False', 'false')
      .replace('(', '[')
      .replace(')', ']')
      .replace(', }', '}')
      .replace(',]', ']')
    // .replace(/,*\),*/g, ']')
  );
};


export const npyToUrl = async (blob) => {
  const buffer = await blob.arrayBuffer();
  const payloadBuffer = buffer.slice(0, 100);
  const npyBuffer = buffer.slice(128);
  const headerLength = new DataView(npyBuffer.slice(8, 10)).getUint8(0);
  const offsetBytes = 128 + 10 + headerLength;

  const textDecoder = new TextDecoder('utf-8');

  const payloadContents = textDecoder.decode(new Uint8Array(payloadBuffer));

  const hcontents = textDecoder.decode(
    new Uint8Array(npyBuffer.slice(10, 10 + headerLength))
  );

  const payload = str2json(payloadContents);
  const header = str2json(hcontents);

  const { shape, descr } = header;
  const dataUrl = URL.createObjectURL(blob.slice(offsetBytes));

  return {
    type: payload.type,
    payload: {
      dataUrl,
      shape,
      descr,
      ...payload
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
