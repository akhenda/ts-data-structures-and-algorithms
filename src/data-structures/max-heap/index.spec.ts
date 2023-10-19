import MaxHeap from '@ds/max-heap';

describe('MaxHeap', () => {
  const maxHeap = new MaxHeap();

  it('creates a maxHeap successfully', () => {
    expect(maxHeap).toBeObject();
    expect(maxHeap).toBeInstanceOf(MaxHeap);
  });

  describe('when we insert to the maxHeap', () => {
    it('adds "41" to the maxHeap', () => {
      maxHeap.insert(41);
      expect(maxHeap).toHaveLength(1);
    });

    it('adds "39" to the maxHeap', () => {
      maxHeap.insert(39);
      expect(maxHeap).toHaveLength(2);
    });

    it('adds "33" to the maxHeap', () => {
      maxHeap.insert(33);
      expect(maxHeap).toHaveLength(3);
    });

    it('adds "18" to the maxHeap', () => {
      maxHeap.insert(18);
      expect(maxHeap).toHaveLength(4);
    });

    it('adds "27" to the maxHeap', () => {
      maxHeap.insert(27);
      expect(maxHeap).toHaveLength(5);
    });

    it('adds "12" to the maxHeap', () => {
      maxHeap.insert(12);
      expect(maxHeap).toHaveLength(6);
    });

    it('has a length of 6', () => {
      expect(maxHeap).toHaveLength(6);
      expect(maxHeap.toString()).toBe('41 39 33 18 27 12');
    });

    it('adds "55" to the maxHeap', () => {
      maxHeap.insert(55);
      expect(maxHeap).toHaveLength(7);
    });

    it('has a length of 7', () => {
      expect(maxHeap).toHaveLength(7);
    });

    it('prints all the elements we have just added to the maxHeap', () => {
      expect(maxHeap.toString()).toBe('55 39 41 18 27 12 33');
    });
  });

  describe('when we extract max', () => {
    it('extracts the element "55"', () => {
      expect(maxHeap.extractMax()).toBe(55);
      expect(maxHeap.toString()).toBe('41 39 33 18 27 12');
    });

    it('extracts the element "41"', () => {
      expect(maxHeap.extractMax()).toBe(41);
      expect(maxHeap.toString()).toBe('39 27 33 18 12');
    });
  });

  // describe('when we remove, insert and toString elements', () => {
  //   it('removes the element "3"', () => {
  //     maxHeap.remove(3);
  //     expect(maxHeap.toString()).toBe('1 2 4');
  //   });

  //   it('adds "5" to the maxHeap', () => {
  //     maxHeap.insert(5);
  //     expect(maxHeap.length).toBe(4);
  //   });

  //   it('adds another "5" to the maxHeap', () => {
  //     maxHeap.insert(5);
  //     expect(maxHeap.length).toBe(5);
  //   });

  //   it('prints out the maxHeap again', () => {
  //     expect(maxHeap.toString()).toBe('1 2 4 5 5');
  //   });

  //   it('removes the element "5"', () => {
  //     maxHeap.remove(5);
  //     expect(maxHeap.toString()).toBe('1 2 4');
  //   });
  // });
});
