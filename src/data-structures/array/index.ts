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
   * Given an item, returns the key of the item
   *
   * @param {T} item item to get the key of from the map
   * @returns {number | null} the key of the item
   */
  getKey(item: T) {
    return [...this.array].find(([, value]) => item === value)?.[0];
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
    if (this.array.size === 0) return;

    const key = this.getKey(item);

    if (!key) return;
    if (this.array.has(key)) this.array.delete(key);

    const size = this.array.size;

    for (let index = key; index < this.array.size; index++) {
      const next = this.array.get(index + 1);

      if (next) this.array.set(index, next);
    }

    this.array.delete(size);

    if (this.array.has(key)) this.remove(item);
  }

  /**
   * Look for the given item in the array
   *
   * @param  {T} item item to search for
   * @return {number}      the array index position of the item found
   */
  search(item: T) {
    const iterator = this.array[Symbol.iterator]();

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
   * Returns the size/length of the array
   *
   * @return {number} the size of the array
   */
  get length() {
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
