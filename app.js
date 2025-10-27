import { LinkedList } from "./linked-list";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  isEmpty() {
    return this.list.length === 0;
  }

  toArray() {
    return this.list.slice();
  }
}
