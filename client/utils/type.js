// const  isObject = (data) => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'

const typeOf = (data) => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()

const isArray = data => typeOf(data) === 'array'
const isNull = data => typeOf(data) === 'null'
const isNumber = data => typeOf(data) === 'number'
const isObject = data => typeOf(data) === 'object';
const isSymbol = data => typeOf(data) === 'symbol';
const isBicInt = data => typeOf(data) === 'bicint';
const isFunction = data => typeOf(data) === 'function';
const isMath = data => typeOf(data) === 'math';
const isString = data => typeOf(data) === 'string';
const isUndefined = data => typeOf(data) === 'undefined';


