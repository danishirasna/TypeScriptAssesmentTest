import Index from './index';

describe('TestCase of Index File', () => {
  let dir = "C:/Users/danii/Downloads/Node Typescript";

  it('Re-Write Stock JSON', () => {
    expect(Index(dir)).toBe(true)
  })
})