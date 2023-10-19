export default class MaxHeap {
  constructor(public values: number[] = []) {
    this.values = values;
  }

  get length() {
    return this.values.length;
  }

  swap(i: number, j: number) {
    const temp = this.values[i];

    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  bubbleUp() {
    let index = this.length - 1;

    while (index > 0) {
      const value = this.values[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (parent >= value) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    const length = this.length;
    const element = this.values[0];

    while (index < length) {
      let swap: number | null = null;
      let leftChild: (typeof this.values)[number] | null = null;
      let rightChild: (typeof this.values)[number] | null = null;

      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild > element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild > element) || (leftChild && swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.swap(index, swap);
      index = swap;
    }
  }

  insert(value: number) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (end && this.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  toString() {
    return this.values.join(' ');
  }
}
