function isObject(a) {
  return a !== null && typeof a === 'object';
}

function looseEqual(a, b, map = new WeakMap()) {
  if (a === b) return true;

  const isObjectA = isObject(a);
  const isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    // 稍微增强循环引用的处理能力
    if (map.has(a) && map.has(b)) {
      return a === b;
    }
    map.set(a, true);
    map.set(b, true);
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every(function (item, index) {
            return looseEqual(item, b[index], map);
          })
        );
      } else if (a instanceof Date && b instanceof Date) {
        return +a === +b;
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return (
          keysA.length === keysB.length &&
          keysA.every(key => {
            return looseEqual(a[key], b[key], map);
          })
        );
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  }

  return false;
}

// console.log(looseEqual({ a: 1 }, { a: 1 }));
// console.log(looseEqual(1, '1'));
// console.log(looseEqual(1, true));

const a = { x: 1 };
const b = { x: 1 };
const c = { c: 1 };
const d = { c: 1 };
a.ref = a;
a.ref.ref2 = c;
b.ref = a;
b.ref.ref2 = c;
// console.log(JSON.stringify(a));
console.log(looseEqual(a, b));
