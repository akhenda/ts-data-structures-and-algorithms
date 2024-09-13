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
      expect(array).toHaveLength(1);
    });

    it('adds "2" to the array', () => {
      array.add(2);
      expect(array).toHaveLength(2);
    });

    it('adds "3" to the array', () => {
      array.add(3);
      expect(array).toHaveLength(3);
    });

    it('adds "4" to the array', () => {
      array.add(4);
      expect(array).toHaveLength(4);
    });

    it('has a length of 4', () => {
      expect(array).toHaveLength(4);
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
      expect(array.at(2)).toBe(3);
    });
  });

  describe('when we remove, add and print elements', () => {
    it('removes the element "3"', () => {
      array.remove(3);
      expect(array.print()).toBe('1 2 4');
    });

    it('adds "5" to the array', () => {
      array.add(5);
      expect(array).toHaveLength(4);
    });

    it('adds another "5" to the array', () => {
      array.add(5);
      expect(array).toHaveLength(5);
    });

    it('prints out the array again', () => {
      expect(array.print()).toBe('1 2 4 5 5');
    });

    it('removes the element "5"', () => {
      array.remove(5);
      expect(array.print()).toBe('1 2 4');
    });
  });

  describe('when we pop the array', () => {
    it('returns "undefined" on an empty array', () => {
      expect(new MyArray().pop()).toBeUndefined();
    });

    it('adds "5" to the array then pops it', () => {
      expect(array).toHaveLength(3);
      expect(array.at(2)).toBe(4);

      array.add(5);

      expect(array.at(3)).toBe(5);
      expect(array).toHaveLength(4);
      expect(array.print()).toBe('1 2 4 5');

      expect(array.pop()).toBe(5);

      expect(array).toHaveLength(3);
      expect(array.print()).toBe('1 2 4');
    });

    it('adds to the array twice then pops the array twice', () => {
      expect(array).toHaveLength(3);
      expect(array.at(2)).toBe(4);

      array.add(17);
      array.add(73);

      expect(array.at(3)).toBe(17);
      expect(array.at(4)).toBe(73);
      expect(array).toHaveLength(5);
      expect(array.print()).toBe('1 2 4 17 73');

      expect(array.pop()).toBe(73);
      expect(array.print()).toBe('1 2 4 17');
      expect(array.pop()).toBe(17);

      expect(array.at(2)).toBe(4);
      expect(array).toHaveLength(3);
      expect(array.print()).toBe('1 2 4');
    });
  });

  describe('when we shift the array', () => {
    it('returns "undefined" on an empty array', () => {
      expect(new MyArray().shift()).toBeUndefined();
    });

    it('removes the first item in the array', () => {
      expect(array).toHaveLength(3);
      expect(array.at(0)).toBe(1);

      expect(array.shift()).toBe(1);

      expect(array).toHaveLength(2);
      expect(array.print()).toBe('2 4');
    });

    it('removes the "next" first item from the array', () => {
      expect(array).toHaveLength(2);
      expect(array.at(0)).toBe(2);

      expect(array.shift()).toBe(2);

      expect(array).toHaveLength(1);
      expect(array.print()).toBe('4');
    });
  });

  describe('when we unshift the array', () => {
    it('add an item to the start of the array', () => {
      expect(array).toHaveLength(1);
      expect(array.at(0)).toBe(4);

      expect(array.unshift(5)).toBe(2);

      expect(array).toHaveLength(2);
      expect(array.at(0)).toBe(5);
      expect(array.print()).toBe('5 4');
    });

    it('adds multiple items to the start of the array', () => {
      expect(array).toHaveLength(2);
      expect(array.at(0)).toBe(5);
      expect(array.at(1)).toBe(4);

      expect(array.unshift(7, 6)).toBe(4);

      expect(array).toHaveLength(4);
      expect(array.at(0)).toBe(7);
      expect(array.at(3)).toBe(4);
      expect(array.print()).toBe('7 6 5 4');

      expect(array.unshift(9, 9, 8)).toBe(7);

      expect(array).toHaveLength(7);
      expect(array.at(0)).toBe(9);
      expect(array.at(1)).toBe(9);
      expect(array.at(3)).toBe(7);
      expect(array.at(6)).toBe(4);
      expect(array.print()).toBe('9 9 8 7 6 5 4');

      expect(array.unshift(14, 13, 12, 11, 11, 10)).toBe(13);

      expect(array).toHaveLength(13);
      expect(array.at(0)).toBe(14);
      expect(array.at(4)).toBe(11);
      expect(array.at(8)).toBe(8);
      expect(array.at(12)).toBe(4);
      expect(array.print()).toBe('14 13 12 11 11 10 9 9 8 7 6 5 4');
    });
  });
});
