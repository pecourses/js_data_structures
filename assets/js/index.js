"use strict";

class MyArray {
  constructor(...args) {
    this.length = 0;

    for (const item of args) {
      this[this.length] = item;
      ++this.length;
    }
  }

  push(...args) {
    for (const item of args) {
      this[this.length++] = item;
    }
    return this.length;
  }

  pop() {
    const lastElement = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElement;
  }

  concat(arr) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }

  flat(depth = 1) {
    if (depth < 0) {
      throw new RangeError("depth must be a positive value");
    }

    if (depth === 0) {
      return this;
    }

    let newArr = new MyArray();

    /* for (const item of this) {
        if (Array.isArray(item)) {
          let buffer = new MyArray(...item);
  
          newArr = newArr.concat(buffer.flat(depth - 1));
        } else {
          newArr.push(item)
        }
      } */

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        let buffer = new MyArray(...this[i]);

        newArr = newArr.concat(buffer.flat(depth - 1));
      } else {
        newArr.push(this[i]);
      }
    }
    return newArr;
  }
}
