const app = "I don't do much."

function map(collection, callback) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, index, collection));
  }
  return result;
}
