import Stack from './index';

describe('Stack', () => {
  const stack = new Stack(4);

  let anotherStack: Stack = new Stack(4);

  it('creates an stack successfully', () => {
    expect(stack).toBeObject();
    expect(stack).toBeInstanceOf(Stack);
  });

  describe('when we push to the stack', () => {
    it('pushes "1" onto the stack', () => {
      stack.push(1);
      expect(stack.size()).toBe(1);
    });

    it('pushes "2" onto the stack', () => {
      stack.push(2);
      expect(stack.size()).toBe(2);
    });

    it('pushes "3" onto the stack', () => {
      stack.push(3);
      expect(stack.size()).toBe(3);
    });

    it('pushes "4" onto the stack', () => {
      stack.push(4);
      expect(stack.size()).toBe(4);
    });

    it('has a size of 4', () => {
      expect(stack.size()).toBe(4);
    });

    it('prints all the elements we have just pushed onto the stack', () => {
      expect(stack.print()).toBe('1 2 3 4');
    });

    it('does not add "5" onto the Stack', () => {
      expect(stack.push(5)).toBe('Max capacity already reached. Remove element before adding a new one.');
    });

    it('can be cloned', () => {
      anotherStack = stack.clone();

      expect(anotherStack).toBeObject();
      expect(anotherStack).toBeInstanceOf(Stack);
      expect(anotherStack.size()).toBe(4);
    });
  });

  describe('when we peek, pop, push and print elements', () => {
    it('peeks at the stack', () => {
      expect(stack.peek()).toBe(4);
    });

    it('pops the stack', () => {
      expect(stack.pop()).toBe(4);
    });

    it('prints elements in the stack', () => {
      expect(stack.print()).toBe('1 2 3');
    });

    it('pops the stack again', () => {
      expect(stack.pop()).toBe(3);
    });

    it('has a size of 2 now', () => {
      expect(stack.size()).toBe(2);
    });

    it('pops the stack a third time', () => {
      expect(stack.pop()).toBe(2);
    });

    it('has a size of 1 now', () => {
      expect(stack.size()).toBe(1);
    });

    it('pops the stack a fourth time', () => {
      expect(stack.pop()).toBe(1);
    });

    it('prints again elements in the stack', () => {
      expect(stack.print()).toBe('');
    });

    it('peeks at the stack again', () => {
      expect(stack.peek()).toBeUndefined();
    });

    it('pops the stack a fifth time', () => {
      const msg = 'No element inside the stack. Add element before poping.';
      expect(stack.pop()).toStrictEqual(msg);
    });
  });

  describe('when we clear the stack', () => {
    it('checks if the stack is empty', () => {
      expect(anotherStack.print()).toBe('1 2 3 4');
      expect(anotherStack.isEmpty()).toBeFalse();
    });

    it('clears the stack', () => {
      anotherStack.clear();

      expect(anotherStack.peek()).toBeUndefined();
      expect(anotherStack.isEmpty()).toBeTrue();
    });

    it('checks again to see if the stack is empty', () => {
      expect(anotherStack.print()).toBeEmpty();
      expect(anotherStack.isEmpty()).toBeTrue();
    });
  });
});
