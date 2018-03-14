// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
  return propertyName;
}
const createNotEnumerableProperty = (propertyName) => {
  return Symbol(propertyName)
};
const createProtoMagicObject = () => {
  let f = function () { }; f.__proto__ = f.prototype; return f
};
const incrementor = () => {
};
const asyncIncrementor = () => { };
const createIncrementer = function* () {
  let counter = 0
  while (true) {
    yield ++counter
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (input) => {
  return new Promise((resolve) => setTimeout(resolve, 1001, input))
};
const getDeepPropertiesCount = (obj) => {
  let ownPropCount = 0
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      ownPropCount++
      if (typeof obj[property] === 'object') {
        ownPropCount = ownPropCount + getDeepPropertiesCount(obj[property])
      }
    }
  }
  return ownPropCount
};
const createSerializedObject = () => {
  let o = new String();
  return o
};
const toBuffer = () => { };
const sortByProto = () => { };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;