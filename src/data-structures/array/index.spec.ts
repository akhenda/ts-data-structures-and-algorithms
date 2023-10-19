import MyArray from '@ds/array';

describe('Array', () => {
  const array = new MyArray<number>();

  it('creates an array successfully', () => {
    expect(array).toBeObject();
    expect(array).toBeInstanceOf(MyArray);
  });

  describe('when we add to the array', () => {
    it('adds "1" to the array', () => {
      array.add(1);
      expect(array.length()).toBe(1);
    });

    it('adds "2" to the array', () => {
      array.add(2);
      expect(array.length()).toBe(2);
    });

    it('adds "3" to the array', () => {
      array.add(3);
      expect(array.length()).toBe(3);
    });

    it('adds "4" to the array', () => {
      array.add(4);
      expect(array.length()).toBe(4);
    });

    it('has a length of 4', () => {
      expect(array.length()).toBe(4);
    });

    it('prints all the elements we have just added to the array', () => {
      expect(array.print()).toBe('1 2 3 4');
    });
  });

  describe('when we search or get', () => {
    it('searches for the element "3"', () => {
      expect(array.search(3)).toBe(2);
    });

    it('gets element at index "2"', () => {
      expect(array.getAtIndex(2)).toBe(3);
    });
  });

  describe('when we remove, add and print elements', () => {
    it('removes the element "3"', () => {
      array.remove(3);
      expect(array.print()).toBe('1 2 4');
    });

    it('adds "5" to the array', () => {
      array.add(5);
      expect(array.length()).toBe(4);
    });

    it('adds another "5" to the array', () => {
      array.add(5);
      expect(array.length()).toBe(5);
    });

    it('prints out the array again', () => {
      expect(array.print()).toBe('1 2 4 5 5');
    });

    it('removes the element "5"', () => {
      array.remove(5);
      expect(array.print()).toBe('1 2 4');
    });
  });
});
