import keyMirror from 'key-mirror-nested'

export const serverEvents = keyMirror({
  LOAD: {
    INPUT: null,
  }
}, { connChar: '_' })
