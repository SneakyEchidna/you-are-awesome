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
const incrementor = () => { };
const asyncIncrementor = () => { };
const createIncrementer = () => { };

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (input) => {
  return new Promise((resolve) => setTimeout(resolve, 1001, input))
};
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => {
  let o = new String();
  //this.valueOf = () => {
  //  return this.toString()
  //  }
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