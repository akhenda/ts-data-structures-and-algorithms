export default class MyArray<T> {
  array = new Map<number, T>();

  /**
   * initialize MyArray
   *
   * in this case we'll use JavaScript built-in Map
   */
  constructor(...args: T[]) {
    for (let index = 0; index < args.length; index++) {
      this.array.set(index, args[index]);
    }
  }

  /**
   * Returns the size/length of the array
   *
   * @return {number} the size of the array
   */
  get length() {
    return this.array.size;
  }

  /**
   * Given an item, returns the key of the item
   *
   * @param {T} item item to get the key of from the map
   * @returns {number | null} the key of the item
   */
  private getKey(item: T) {
    return [...this.array].find(([, value]) => item === value)?.[0];
  }

  /**
   * Shifts all the elements to the left by one position
   *
   * Given a key, shifts all the elements from that key
   * to the left by one position. Used for removing an
   * item from the array.
   *
   * @param {number} key the key to shift from
   */
  private shiftLeft(key: number) {
    for (let index = key; index < this.array.size; index++) {
      const next = this.array.get(index + 1);

      if (next) this.array.set(index, next);
    }
  }

  /**
   * Shifts all the elements to the right by one or more positions
   *
   * Given a number of spaces, shifts all the elements from that
   * position to the right by the given number of spaces. Used for
   * inserting an item/items into the array.
   *
   * @param {number} spaces the number of spaces to shift to the right
   */
  private shiftRight(spaces: number) {
    const { size } = this.array;

    // create the spaces first
    for (let index = 0; index < spaces; index++) {
      this.array.set(size + index, index as T);
    }

    for (let index = size; index >= 0; index--) {
      const next = this.array.get(index - 1);

      if (next) this.array.set(index + spaces - 1, next);
    }
  }

  /**
   * Adds an item onto the array
   *
   * @param {T} item item to add
   */
  add(item: T) {
    this.array.set(this.array.size, item);
  }

  /**
   * Removes an item from the array
   *
   * @param {T} item item to remove
   */
  remove(item: T) {
    // if the array is empty, return
    if (this.array.size === 0) return;

    // get the key of the item
    const key = this.getKey(item);

    // if the key doesn't exist, return
    if (!key) return;

    // remove the item
    if (this.array.has(key)) this.array.delete(key);

    const { size } = this.array;

    // loop through the array and shift all the items to the left
    this.shiftLeft(key);

    // remove the last item
    this.array.delete(size);

    // remove the item recursively if it still exists
    if (this.array.has(key)) this.remove(item);
  }

  /**
   * Look for the given item in the array
   *
   * @param  {T} item item to search for
   * @return {number}      the array index position of the item found
   */
  search(item: T) {
    const iterator = this.array.entries();

    for (const [key, val] of iterator) {
      if (val === item) return key;
    }

    return null;
  }

  /**
   * Get an item given its index on the array
   *
   * @param  {number} index index of the item to get
   * @return {T}       the item found at the given index
   */
  at(index: number) {
    return this.array.get(index);
  }

  /**
   * Removes the last element from an array and returns that element.
   *
   * @return {T} the last element from the array
   */
  pop() {
    if (this.array.size === 0) return undefined;

    const lastKey = this.array.size - 1;
    const lastItem = this.array.get(lastKey);

    this.array.delete(lastKey);

    return lastItem;
  }

  shift() {
    if (this.array.size === 0) return undefined;

    const firstKey = 0;
    const firstItem = this.array.get(firstKey);

    this.shiftLeft(firstKey);
    this.array.delete(this.array.size - 1);

    return firstItem;
  }

  unshift(...items: T[]) {
    if (items.length > 0) {
      this.shiftRight(items.length);

      for (let index = 0; index < items.length; index++) {
        this.array.set(index, items[index]);
      }
    }

    return this.array.size;
  }

  /**
   * Prints the contents of the array
   *
   * @return {string}
   */
  print() {
    console.table(this.array.entries());
    console.info([...this.array.values()].join(' '));

    return [...this.array.values()].join(' ');
  }
}
