export default class Stack {
  private data: Record<number, StackItem> = {};
  private top = 0;

  /**
   * Initializes the stack
   *
   * @param {number} capacity The capacity of the stack
   */
  constructor(private readonly capacity = Infinity) {
    this.capacity = capacity;
  }

  /**
   * Adds a new element onto the stack
   *
   * @param  {StackItem} element
   * @return {number|string} The index of the added element or stack overflow message
   */
  push(element: StackItem) {
    if (this.top < this.capacity) {
      this.data[this.top++] = element;

      return this.top;
    }

    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  /**
   * Does the reverse of the push() and then decrements the top pointer variable
   *
   * @return {StackItem} The element in the top position of the stack or an error message
   */
  pop() {
    if (this.top === 0) return 'No element inside the stack. Add element before poping.';

    const element = this.data[--this.top];

    delete this.data[this.top];

    if (this.top < 0) this.top = 0;

    return element;
  }

  /**
   * Returns the most recent element added onto the stack
   *
   * @return {any} Returns the top element of the stack
   */
  peek() {
    return this.top > 0 ? this.data[this.top - 1] : undefined;
  }

  /**
   * Returns the size/length of the stack
   *
   * @return {number} The value of top
   */
  size() {
    return this.top;
  }

  /**
   * Check whether the stack is empty
   *
   * @return {boolean}
   */
  isEmpty() {
    return this.top === 0;
  }

  /**
   * Clears the stack and sets the top pointer variable back to 0
   */
  clear() {
    this.data = {};
    this.top = 0;
  }

  /**
   * Clones the instance of this class
   *
   * @returns a copy of the instance of this class
   */
  clone() {
    const newStack = new Stack();

    newStack.top = this.top;
    newStack.data = { ...this.data };

    return newStack;
  }

  /**
   * Displays the stack
   */
  print() {
    return Object.values(this.data).join(' ');
  }
}
