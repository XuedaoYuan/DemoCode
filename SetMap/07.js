function Node(data) {
  this.data = data;
  this.next = null;
}
Node.prototype[Symbol.iterator] = function () {
  let cur = this;
  return {
    next: function () {
      if (cur) {
        const data = cur.data;
        cur = cur.next;
        return {
          value: data,
          done: false
        };
      }
      return { done: true };
    }
  };
};

const p1 = new Node(1);
const p2 = new Node(2);
p1.next = p2;
const p3 = new Node(3);
p2.next = p3;

for (let nodeValue of p1) {
  console.log(nodeValue);
}
