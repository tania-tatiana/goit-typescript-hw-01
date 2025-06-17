function merge<T extends object, G extends object>(objA: T, objB: G): T & G {
  return Object.assign({}, objA, objB);
}

console.log(merge);
