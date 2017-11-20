(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":25}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":26}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":27}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":4}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":4}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":2}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":7,"../helpers/typeof":17}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":17}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],18:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":35}],19:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":35,"../../modules/es6.object.assign":103}],20:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":35,"../../modules/es6.object.create":104}],21:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":35,"../../modules/es6.object.define-property":105}],22:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":106}],23:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":35,"../../modules/es6.object.keys":107}],24:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":108}],25:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":35,"../modules/es6.object.to-string":109,"../modules/es6.promise":110,"../modules/es6.string.iterator":111,"../modules/es7.promise.finally":113,"../modules/es7.promise.try":114,"../modules/web.dom.iterable":117}],26:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":35,"../../modules/es6.object.to-string":109,"../../modules/es6.symbol":112,"../../modules/es7.symbol.async-iterator":115,"../../modules/es7.symbol.observable":116}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":99,"../../modules/es6.string.iterator":111,"../../modules/web.dom.iterable":117}],28:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],29:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],30:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],31:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":54}],32:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":91,"./_to-iobject":93,"./_to-length":94}],33:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":34,"./_wks":100}],34:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],35:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],36:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":28}],37:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],38:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":43}],39:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":45,"./_is-object":54}],40:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],41:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":72,"./_object-keys":75,"./_object-pie":76}],42:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],44:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":94,"./core.get-iterator-method":101}],45:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],46:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],47:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":38,"./_object-dp":67,"./_property-desc":80}],48:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":45}],49:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],51:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":34}],52:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":60,"./_wks":100}],53:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":34}],54:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],55:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":31}],56:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":47,"./_object-create":66,"./_property-desc":80,"./_set-to-string-tag":85,"./_wks":100}],57:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":61,"./_object-gpo":73,"./_redefine":82,"./_set-to-string-tag":85,"./_wks":100}],58:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":100}],59:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],60:[function(require,module,exports){
module.exports = {};

},{}],61:[function(require,module,exports){
module.exports = true;

},{}],62:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":67,"./_uid":97}],63:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":34,"./_global":45,"./_task":90}],64:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":28}],65:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":43,"./_iobject":51,"./_object-gops":72,"./_object-keys":75,"./_object-pie":76,"./_to-object":95}],66:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":68,"./_shared-key":86}],67:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":96}],68:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":31,"./_descriptors":38,"./_object-dp":67,"./_object-keys":75}],69:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":76,"./_property-desc":80,"./_to-iobject":93,"./_to-primitive":96}],70:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":71,"./_to-iobject":93}],71:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":40,"./_object-keys-internal":74}],72:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],73:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":46,"./_shared-key":86,"./_to-object":95}],74:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":32,"./_has":46,"./_shared-key":86,"./_to-iobject":93}],75:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":40,"./_object-keys-internal":74}],76:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],77:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":35,"./_export":42,"./_fails":43}],78:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],79:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":31,"./_is-object":54,"./_new-promise-capability":64}],80:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],81:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":47}],82:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":47}],83:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":69}],84:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":67,"./_wks":100}],85:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":46,"./_object-dp":67,"./_wks":100}],86:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":87,"./_uid":97}],87:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":45}],88:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":28,"./_an-object":31,"./_wks":100}],89:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":37,"./_to-integer":92}],90:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],91:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":92}],92:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],93:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":37,"./_iobject":51}],94:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":92}],95:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":37}],96:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":54}],97:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],98:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":35,"./_global":45,"./_library":61,"./_object-dp":67,"./_wks-ext":99}],99:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":100}],100:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":45,"./_shared":87,"./_uid":97}],101:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":100}],102:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":93}],103:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":42,"./_object-assign":65}],104:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":42,"./_object-create":66}],105:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":38,"./_export":42,"./_object-dp":67}],106:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":73,"./_object-sap":77,"./_to-object":95}],107:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":75,"./_object-sap":77,"./_to-object":95}],108:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":42,"./_set-proto":83}],109:[function(require,module,exports){

},{}],110:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":28,"./_an-instance":30,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":61,"./_microtask":63,"./_new-promise-capability":64,"./_perform":78,"./_promise-resolve":79,"./_redefine-all":81,"./_set-species":84,"./_set-to-string-tag":85,"./_species-constructor":88,"./_task":90,"./_wks":100}],111:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":57,"./_string-at":89}],112:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":31,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_library":61,"./_meta":62,"./_object-create":66,"./_object-dp":67,"./_object-gopd":69,"./_object-gopn":71,"./_object-gopn-ext":70,"./_object-gops":72,"./_object-keys":75,"./_object-pie":76,"./_property-desc":80,"./_redefine":82,"./_set-to-string-tag":85,"./_shared":87,"./_to-iobject":93,"./_to-primitive":96,"./_uid":97,"./_wks":100,"./_wks-define":98,"./_wks-ext":99}],113:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":35,"./_export":42,"./_global":45,"./_promise-resolve":79,"./_species-constructor":88}],114:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":42,"./_new-promise-capability":64,"./_perform":78}],115:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":98}],116:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":98}],117:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":100,"./es6.array.iterator":102}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Tamer on 06/11/2017.
 */

/**
 * @class Actions
 */
var Actions = function () {
  /**
   * Creates an instance of Actions.
   * 
   * @param {object} 
   * @memberof Actions
   * @access public
   */
  function Actions(o) {
    (0, _classCallCheck3.default)(this, Actions);

    this.toolbox = o.toolbox;
    this.deploymentId = o.deploymentId;
    this.blueprintId = o.blueprintId;
  }

  /**
   * get output data
   * 
   * @returns 
   * @memberof Actions
   * @access public
   */


  (0, _createClass3.default)(Actions, [{
    key: 'doGetDeployment',
    value: function doGetDeployment() {
      return _promise2.default.resolve([{
        id: 'os',
        type: 'dropdown',
        flex: 100,
        position: 50,
        params: {
          label: 'Operating System',
          placeholder: 'Please Select the OS',
          multiple: false,
          options: [{ text: 'Windows', value: 'windows' }, { text: 'Linux', value: 'linux' }]
        }
      }, {
        id: 'my_button',
        type: 'button',
        flex: 100,
        position: 101,
        params: {
          label: 'My Button',
          circular: false,
          icon: 'facebook', // list of icons https://react.semantic-ui.com/elements/icon label will overwrite
          color: 'green', // red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, black,
          action: 'createDeployment'
        }
      }, {
        id: 'my_input',
        type: 'input',
        flex: 33,
        position: 99,
        params: {
          label: 'My Input',
          default: 'Hello Input',
          placeholder: 'Please Enter Your Data',
          isPassword: false
        }
      }, {
        id: 'my_checkbox',
        type: 'checkbox',
        flex: 33,
        position: 99,
        params: {
          label: 'My Checkbox',
          default: true
        }
      }, {
        id: 'my_toggle',
        type: 'toggle',
        flex: 33,
        position: 99,
        params: {
          label: 'My Toggle',
          default: true
        }
      }, {
        id: 'my_radio',
        type: 'radio',
        flex: 33,
        position: 99,
        params: {
          label: 'My Radio',
          default: 'op1',
          options: [{ text: 'Option 1', value: 'op1' }, { text: 'Option 2', value: 'op2' }, { text: 'Option 3', value: 'op3' }]
        }
      }, {
        id: 'my_dropdown',
        type: 'dropdown',
        flex: 33,
        position: 99,
        params: {
          label: 'My Dropdown',
          placeholder: 'Hello Dropdown',
          multiple: true,
          default: ['op1'],
          options: [{ text: 'Option 1', value: 'op1' }, { text: 'Option 2', value: 'op2' }, { text: 'Option 3', value: 'op3' }]
        }
      }, {
        id: 'my_range',
        type: 'range',
        flex: 33,
        position: 99,
        params: {
          label: 'My Range',
          default: 20,
          step: 1,
          min: 0,
          max: 100
        }
      }, {
        type: 'message',
        flex: 33,
        position: 99,
        params: {
          label: 'Hello i am a Message',
          color: 'green'
        }
      }, {
        id: 'my_selectbox',
        type: 'selectbox',
        flex: 100,
        position: 97,
        params: {
          label: 'My SelectBox',
          template: '<h1>{{text}}</h1><p>{{value}}</p>',
          style: 1, // 1 or 2
          default: '2b',
          options: [{ text: 'x-small', value: '1m' }, { text: 'small', value: '2b' }, { text: 'medium', value: '3m' }, { text: 'large', value: '5l' }]
        }
      }]);
      // return this.toolbox.getManager().doGet(`/deployments/${this.deploymentId}`);
    }
  }, {
    key: 'doGetInputDescriptor',
    value: function doGetInputDescriptor() {
      var _this = this;

      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input_descriptor.yaml';

      console.log({ path: path });
      return this.doGetFilesTree(this.blueprintId).then(function (files) {
        var file = files.children[0].children.find(function (item) {
          return item.title === path;
        });
        if (file) {
          return _this.doGetFileContent(file.key);
        } else {
          return _promise2.default.reject(path + ' not found.');
        }
      });
    }
  }, {
    key: 'doGetBlueprintId',
    value: function doGetBlueprintId(deploymentId) {
      return this.toolbox.getManager().doGet('/deployments/' + deploymentId + '?_include=id,blueprint_id');
    }
  }, {
    key: 'doGetFilesTree',
    value: function doGetFilesTree(blueprintId) {
      return this.toolbox.getInternal().doGet('/source/browse/' + blueprintId + '/archive');
    }
  }, {
    key: 'doGetFileContent',
    value: function doGetFileContent(path) {
      return this.toolbox.getInternal().doGet('/source/browse/file', { path: path });
    }
  }]);
  return Actions;
}();

exports.default = Actions;

},{"babel-runtime/core-js/promise":8,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _YAML = require('./utils/YAML');

var _YAML2 = _interopRequireDefault(_YAML);

var _base10to = require('./utils/base10to64');

var _base10to2 = _interopRequireDefault(_base10to);

var _SelectBox = require('./components/SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class List
 * @extends {Component}
 */
var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  /**
   * Creates an instance of List.
   * @param {any} props 
   * @param {any} context 
   */
  function List(props, context) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props, context));

    _initialiseProps.call(_this);

    var user = _this.props.toolbox.getManager().getCurrentUsername();
    var blueprint = _this.props.widget.configuration.blueprintId;
    var time64 = (0, _base10to2.default)(Math.floor(Date.now() / 1000));
    // const time64 = btoa(Math.floor(Date.now() / 1000));
    // const time64 = btoa(Math.round(Math.random()*10000));

    _this.state = {
      form: {},
      visual_data: {},
      errors: {},
      success: null,
      deploymentTitle: 'admin deployment ' + user + '_' + blueprint + '_' + time64,
      loading: false,
      yamlError: null,
      development: null
    };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var data = this.props.data;
      this.setState({ development: data });
      this.renderJSON2YAML(data);
      // data = YAML.parse(data);
      // this.prepareData(data);
    }
  }, {
    key: 'prepareData',
    value: function prepareData(data) {

      // extract available inputs to the loop
      var visual_data = data.filter(function (e) {
        return ['button', 'input', 'textarea', 'checkbox', 'toggle', 'radio', 'dropdown', 'range', 'message', 'selectbox'].includes(e.type);
      });

      console.log({ visual_data: visual_data });

      // sort items by position
      visual_data.sort(function (a, b) {
        return a.position - b.position;
      });

      // set default data
      var form = {};
      visual_data.forEach(function (item) {
        if (item.id && item.type !== 'button') {
          form[item.id] = item.params.default;
        }
      });
      this.setState({ form: form, visual_data: visual_data });
    }
  }, {
    key: 'renderJSON2YAML',
    value: function renderJSON2YAML(value) {
      this.setState({ yamlError: null });
      try {
        var data = _YAML2.default.parse(value || this.state.development);
        this.prepareData(data);
      } catch (e) {
        this.setState({ yamlError: e.message });
      }
    }

    /*
    |--------------------------------------------------------------------------
    | React Renderer
    |--------------------------------------------------------------------------
    */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.loading) {
        return React.createElement(Stage.Basic.Loading, null);
      }

      var _Stage$Basic = Stage.Basic,
          Button = _Stage$Basic.Button,
          Input = _Stage$Basic.Input,
          Checkbox = _Stage$Basic.Checkbox,
          Dropdown = _Stage$Basic.Dropdown,
          Message = _Stage$Basic.Message,
          Card = _Stage$Basic.Card;

      /**
       * charts visual output
       */

      var visuals = this.state.visual_data.map(function (item, idx) {
        return React.createElement(
          'div',
          { className: 'chart-box', key: idx, style: { flexBasis: (item.flex || 33) + '%' } },
          item.type === 'button' && React.createElement(
            Button,
            {
              fluid: !item.params.circular,
              color: item.params.color,
              circular: item.params.circular,
              icon: item.params.label ? false : item.params.icon,
              onClick: function onClick() {
                item.params.action === 'createDeployment' && _this2._createDeployment.call(_this2);
              }
            },
            item.params.label
          ),
          item.type === 'input' && React.createElement(Input, {
            fluid: true,
            type: item.params.isPassword ? 'password' : 'text',
            label: item.params.label,
            placeholder: item.params.placeholder,
            value: _this2.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this2.handleChange.call(_this2, item.id, options.value);
            }
          }),
          item.type === 'checkbox' && React.createElement(Checkbox, {
            label: item.params.label,
            checked: _this2.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this2.handleChange.call(_this2, item.id, options.checked);
            }
          }),
          item.type === 'toggle' && React.createElement(Checkbox, {
            toggle: true,
            label: item.params.label,
            checked: _this2.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this2.handleChange.call(_this2, item.id, options.checked);
            }
          }),
          item.type === 'radio' && React.createElement(
            'div',
            null,
            React.createElement(
              'b',
              null,
              item.params.label
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            item.params.options.map(function (option, idx) {
              return React.createElement(
                'div',
                { key: idx },
                React.createElement(Checkbox, {
                  radio: true,
                  name: item.id,
                  label: option.text,
                  value: option.value,
                  checked: _this2.state.form[item.id] === option.value,
                  onChange: function onChange(proxy, options) {
                    return _this2.handleChange.call(_this2, item.id, options.value);
                  }
                })
              );
            })
          ),
          item.type === 'dropdown' && React.createElement(
            'div',
            null,
            React.createElement(
              'b',
              null,
              item.params.label
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(Dropdown, {
              fluid: true,
              selection: true,
              multiple: item.params.multiple,
              placeholder: item.params.placeholder,
              options: item.params.options,
              value: _this2.state.form[item.id],
              onChange: function onChange(proxy, options) {
                return _this2.handleChange.call(_this2, item.id, options.value);
              }
            })
          ),
          item.type === 'range' && React.createElement(
            'div',
            null,
            React.createElement(
              'b',
              null,
              item.params.label
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('input', {
              type: 'range',
              step: item.params.step || 1,
              min: item.params.min || 0,
              max: item.params.max || 100,
              value: _this2.state.form[item.id],
              onChange: function onChange(proxy) {
                return _this2.handleChange.call(_this2, item.id, proxy.target.value);
              },
              style: { width: '100%' }
            })
          ),
          item.type === 'message' && React.createElement(
            Message,
            {
              color: item.params.color
            },
            item.params.label
          ),
          item.type === 'selectbox' && React.createElement(
            'div',
            null,
            React.createElement(
              'b',
              null,
              item.params.label
            ),
            React.createElement('br', null),
            React.createElement(_SelectBox2.default, {
              style: item.params.style,
              template: item.params.template,
              options: item.params.options,
              value: _this2.state.form[item.id],
              onChange: function onChange(value) {
                return _this2.handleChange.call(_this2, item.id, value);
              }
            })
          ),
          _this2.state.errors[item.id] && _this2.state.errors[item.id].split(',').includes('required') && React.createElement(
            'div',
            { className: 'err' },
            'Please Fill ',
            item.params.label || 'Field',
            ' its Required'
          )
        );
      });

      var errorMessage = this.state.errors.error && React.createElement(
        Message,
        { color: 'red', onDismiss: function onDismiss() {
            return _this2.setState({ errors: (0, _extends4.default)({}, _this2.state.errors, { error: null }) });
          } },
        this.state.errors.error
      );
      var successMessage = this.state.success && React.createElement(
        Message,
        { color: 'green', onDismiss: function onDismiss() {
            return _this2.setState({ success: null });
          } },
        this.state.success
      );
      var yamlError = this.state.yamlError && React.createElement(
        Message,
        { color: 'yellow', onDismiss: function onDismiss() {
            return _this2.setState({ yamlError: null });
          } },
        this.state.yamlError
      );

      var allowNameEdit = this.props.widget.configuration.allowNameEdit;
      var devMode = this.props.widget.configuration.devMode;

      console.log;
      return React.createElement(
        'div',
        null,
        errorMessage,
        successMessage,
        devMode && React.createElement(
          Card,
          { fluid: true },
          React.createElement(Card.Content, { header: 'Development Mode (you can deactivate it from widget settings)' }),
          React.createElement(
            Card.Content,
            null,
            yamlError,
            React.createElement('textArea', {
              placeholder: 'YAML Development Mode',
              value: this.state.development,
              onChange: function onChange(event) {
                return _this2.setState({ development: event.target.value });
              },
              style: { width: '100%', height: '200px', fontFamily: 'monospace,monospace', fontSize: '1em' }
            })
          ),
          React.createElement(
            Card.Content,
            { extra: true },
            React.createElement(
              Button,
              { color: 'blue', onClick: function onClick() {
                  return _this2.renderJSON2YAML.call(_this2);
                } },
              'Render'
            )
          )
        ),
        !this.state.success && allowNameEdit && React.createElement(Input, {
          fluid: true,
          type: 'text',
          label: 'Deployment Title',
          placeholder: 'Please Enter Your Deployment Title, should be unique name',
          value: this.state.deploymentTitle,
          onChange: function onChange(proxy, options) {
            return _this2.setState({ deploymentTitle: options.value });
          }
        }),
        React.createElement(
          'div',
          { className: 'deployment-visual-creation' },
          !this.state.success && visuals
        )
      );
    }
  }]);
  return List;
}(React.Component); /**
                     * Created by Tamer on 19/10/2017.
                     */


var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleChange = function (id, value) {
    // TODO: before submit check for arrays to join them
    _this3.setState({ form: (0, _extends4.default)({}, _this3.state.form, (0, _defineProperty3.default)({}, id, value)) });
    console.log('form state', _this3.state.form);
  };

  this._createDeployment = function () {
    var errors = {};
    (0, _keys2.default)(_this3.state.form).forEach(function (item) {
      // TODO: add more validations methods, by default now is required
      if (_.isNil(_this3.state.form[item]) || _this3.state.form[item] === '') {
        errors[item] = 'required';
      }
    });
    if ((0, _keys2.default)(errors).length !== 0) {
      errors.error = 'Please check errors given below';
    }
    _this3.setState({ errors: errors });
    if ((0, _keys2.default)(errors).length === 0) {

      // let selectedDeployment = toolbox.getContext().getValue('deploymentId');
      // var blueprintId = toolbox.getContext().getValue('blueprintId');

      var blueprint = _this3.props.widget.configuration.blueprintId;
      // const deployment = this.props.widget.configuration.deploymentId;
      var deployment = _this3.state.deploymentTitle; //new Date().toISOString();
      var privateResource = false;
      var skipPluginsValidation = false;
      var inputs = {
        'blueprint_id': 'service',
        'deployment_inputs': _this3.state.form,
        'deployment_id': 'request_to_admin_' + deployment
      };

      _this3.setState({ loading: true });
      var actions = new Stage.Common.BlueprintActions(_this3.props.toolbox);
      actions.doDeploy({ id: blueprint }, deployment, inputs, privateResource, skipPluginsValidation).then(function () /*deployment*/{
        _this3.setState({ loading: false, errors: {}, success: 'Your request has been submitted and awaiting approval' });
        // this.props.onHide();
      }).catch(function (err) {
        _this3.setState({ loading: false, errors: { error: err.message } });
      });
    }
  };
};

exports.default = List;

},{"./components/SelectBox":120,"./utils/YAML":121,"./utils/base10to64":133,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/defineProperty":13,"babel-runtime/helpers/extends":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mustache = require('../utils/mustache');

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class List
 * @extends {Component}
 */
var SelectBox = function (_React$Component) {
  (0, _inherits3.default)(SelectBox, _React$Component);

  /**
   * Creates an instance of List.
   * @param {any} props 
   * @param {any} context 
   */
  function SelectBox(props, context) {
    (0, _classCallCheck3.default)(this, SelectBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectBox.__proto__ || (0, _getPrototypeOf2.default)(SelectBox)).call(this, props, context));

    _this.state = {
      formData: {}
    };
    return _this;
  }

  /*
  |--------------------------------------------------------------------------
  | React Renderer
  |--------------------------------------------------------------------------
  */


  (0, _createClass3.default)(SelectBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          template = _props.template,
          onChange = _props.onChange,
          value = _props.value,
          style = _props.style;


      return React.createElement(
        'div',
        { className: 'selectbox-style' + (style || 1) },
        options.map(function (item, idx) {
          return React.createElement('div', {
            key: idx,
            className: ['item', item.value === value && 'active'].join(' '),
            onClick: function onClick() {
              return item.value !== value && onChange(item.value);
            },
            dangerouslySetInnerHTML: { __html: (0, _mustache2.default)(template, item) }
          });
        })
      );
    }
  }]);
  return SelectBox;
}(React.Component); /**
                     * Created by Tamer on 19/10/2017.
                     */


exports.default = SelectBox;

},{"../utils/mustache":134,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],121:[function(require,module,exports){
'use strict';

var Yaml = require('./lib/Yaml');
module.exports = Yaml;

},{"./lib/Yaml":132}],122:[function(require,module,exports){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generated by CoffeeScript 1.12.4
var Dumper, Inline, Utils;

Utils = require('./Utils');

Inline = require('./Inline');

Dumper = function () {
  function Dumper() {}

  Dumper.indentation = 4;

  Dumper.prototype.dump = function (input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var i, key, len, output, prefix, value, willBeInlined;
    if (inline == null) {
      inline = 0;
    }
    if (indent == null) {
      indent = 0;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    output = '';
    prefix = indent ? Utils.strRepeat(' ', indent) : '';
    if (inline <= 0 || (typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) !== 'object' || input instanceof Date || Utils.isEmpty(input)) {
      output += prefix + Inline.dump(input, exceptionOnInvalidType, objectEncoder);
    } else {
      if (input instanceof Array) {
        for (i = 0, len = input.length; i < len; i++) {
          value = input[i];
          willBeInlined = inline - 1 <= 0 || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object' || Utils.isEmpty(value);
          output += prefix + '-' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, willBeInlined ? 0 : indent + this.indentation, exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      } else {
        for (key in input) {
          value = input[key];
          willBeInlined = inline - 1 <= 0 || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object' || Utils.isEmpty(value);
          output += prefix + Inline.dump(key, exceptionOnInvalidType, objectEncoder) + ':' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, willBeInlined ? 0 : indent + this.indentation, exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      }
    }
    return output;
  };

  return Dumper;
}();

module.exports = Dumper;

},{"./Inline":127,"./Utils":131,"babel-runtime/helpers/typeof":17}],123:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var Escaper, Pattern;

Pattern = require('./Pattern');

Escaper = function () {
  var ch;

  function Escaper() {}

  Escaper.LIST_ESCAPEES = ['\\', '\\\\', '\\"', '"', "\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\x08", "\x09", "\x0a", "\x0b", "\x0c", "\x0d", "\x0e", "\x0f", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x16", "\x17", "\x18", "\x19", "\x1a", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f", (ch = String.fromCharCode)(0x0085), ch(0x00A0), ch(0x2028), ch(0x2029)];

  Escaper.LIST_ESCAPED = ['\\\\', '\\"', '\\"', '\\"', "\\0", "\\x01", "\\x02", "\\x03", "\\x04", "\\x05", "\\x06", "\\a", "\\b", "\\t", "\\n", "\\v", "\\f", "\\r", "\\x0e", "\\x0f", "\\x10", "\\x11", "\\x12", "\\x13", "\\x14", "\\x15", "\\x16", "\\x17", "\\x18", "\\x19", "\\x1a", "\\e", "\\x1c", "\\x1d", "\\x1e", "\\x1f", "\\N", "\\_", "\\L", "\\P"];

  Escaper.MAPPING_ESCAPEES_TO_ESCAPED = function () {
    var i, j, mapping, ref;
    mapping = {};
    for (i = j = 0, ref = Escaper.LIST_ESCAPEES.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      mapping[Escaper.LIST_ESCAPEES[i]] = Escaper.LIST_ESCAPED[i];
    }
    return mapping;
  }();

  Escaper.PATTERN_CHARACTERS_TO_ESCAPE = new Pattern('[\\x00-\\x1f]|\xc2\x85|\xc2\xa0|\xe2\x80\xa8|\xe2\x80\xa9');

  Escaper.PATTERN_MAPPING_ESCAPEES = new Pattern(Escaper.LIST_ESCAPEES.join('|').split('\\').join('\\\\'));

  Escaper.PATTERN_SINGLE_QUOTING = new Pattern('[\\s\'":{}[\\],&*#?]|^[-?|<>=!%@`]');

  Escaper.requiresDoubleQuoting = function (value) {
    return this.PATTERN_CHARACTERS_TO_ESCAPE.test(value);
  };

  Escaper.escapeWithDoubleQuotes = function (value) {
    var result;
    result = this.PATTERN_MAPPING_ESCAPEES.replace(value, function (_this) {
      return function (str) {
        return _this.MAPPING_ESCAPEES_TO_ESCAPED[str];
      };
    }(this));
    return '"' + result + '"';
  };

  Escaper.requiresSingleQuoting = function (value) {
    return this.PATTERN_SINGLE_QUOTING.test(value);
  };

  Escaper.escapeWithSingleQuotes = function (value) {
    return "'" + value.replace(/'/g, "''") + "'";
  };

  return Escaper;
}();

module.exports = Escaper;

},{"./Pattern":129}],124:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var DumpException,
    extend = function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key];
  }function ctor() {
    this.constructor = child;
  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
},
    hasProp = {}.hasOwnProperty;

DumpException = function (superClass) {
  extend(DumpException, superClass);

  function DumpException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  DumpException.prototype.toString = function () {
    if (this.parsedLine != null && this.snippet != null) {
      return '<DumpException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<DumpException> ' + this.message;
    }
  };

  return DumpException;
}(Error);

module.exports = DumpException;

},{}],125:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var ParseException,
    extend = function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key];
  }function ctor() {
    this.constructor = child;
  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
},
    hasProp = {}.hasOwnProperty;

ParseException = function (superClass) {
  extend(ParseException, superClass);

  function ParseException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseException.prototype.toString = function () {
    if (this.parsedLine != null && this.snippet != null) {
      return '<ParseException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseException> ' + this.message;
    }
  };

  return ParseException;
}(Error);

module.exports = ParseException;

},{}],126:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var ParseMore,
    extend = function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key];
  }function ctor() {
    this.constructor = child;
  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
},
    hasProp = {}.hasOwnProperty;

ParseMore = function (superClass) {
  extend(ParseMore, superClass);

  function ParseMore(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseMore.prototype.toString = function () {
    if (this.parsedLine != null && this.snippet != null) {
      return '<ParseMore> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseMore> ' + this.message;
    }
  };

  return ParseMore;
}(Error);

module.exports = ParseMore;

},{}],127:[function(require,module,exports){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generated by CoffeeScript 1.12.4
var DumpException,
    Escaper,
    Inline,
    ParseException,
    ParseMore,
    Pattern,
    Unescaper,
    Utils,
    indexOf = [].indexOf || function (item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  }return -1;
};

Pattern = require('./Pattern');

Unescaper = require('./Unescaper');

Escaper = require('./Escaper');

Utils = require('./Utils');

ParseException = require('./Exception/ParseException');

ParseMore = require('./Exception/ParseMore');

DumpException = require('./Exception/DumpException');

Inline = function () {
  function Inline() {}

  Inline.REGEX_QUOTED_STRING = '(?:"(?:[^"\\\\]*(?:\\\\.[^"\\\\]*)*)"|\'(?:[^\']*(?:\'\'[^\']*)*)\')';

  Inline.PATTERN_TRAILING_COMMENTS = new Pattern('^\\s*#.*$');

  Inline.PATTERN_QUOTED_SCALAR = new Pattern('^' + Inline.REGEX_QUOTED_STRING);

  Inline.PATTERN_THOUSAND_NUMERIC_SCALAR = new Pattern('^(-|\\+)?[0-9,]+(\\.[0-9]+)?$');

  Inline.PATTERN_SCALAR_BY_DELIMITERS = {};

  Inline.settings = {};

  Inline.configure = function (exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = null;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
  };

  Inline.parse = function (value, exceptionOnInvalidType, objectDecoder) {
    var context, result;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
    if (value == null) {
      return '';
    }
    value = Utils.trim(value);
    if (0 === value.length) {
      return '';
    }
    context = {
      exceptionOnInvalidType: exceptionOnInvalidType,
      objectDecoder: objectDecoder,
      i: 0
    };
    switch (value.charAt(0)) {
      case '[':
        result = this.parseSequence(value, context);
        ++context.i;
        break;
      case '{':
        result = this.parseMapping(value, context);
        ++context.i;
        break;
      default:
        result = this.parseScalar(value, null, ['"', "'"], context);
    }
    if (this.PATTERN_TRAILING_COMMENTS.replace(value.slice(context.i), '') !== '') {
      throw new ParseException('Unexpected characters near "' + value.slice(context.i) + '".');
    }
    return result;
  };

  Inline.dump = function (value, exceptionOnInvalidType, objectEncoder) {
    var ref, result, type;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    if (value == null) {
      return 'null';
    }
    type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
    if (type === 'object') {
      if (value instanceof Date) {
        return value.toISOString();
      } else if (objectEncoder != null) {
        result = objectEncoder(value);
        if (typeof result === 'string' || result != null) {
          return result;
        }
      }
      return this.dumpObject(value);
    }
    if (type === 'boolean') {
      return value ? 'true' : 'false';
    }
    if (Utils.isDigits(value)) {
      return type === 'string' ? "'" + value + "'" : String(parseInt(value));
    }
    if (Utils.isNumeric(value)) {
      return type === 'string' ? "'" + value + "'" : String(parseFloat(value));
    }
    if (type === 'number') {
      return value === 2e308 ? '.Inf' : value === -2e308 ? '-.Inf' : isNaN(value) ? '.NaN' : value;
    }
    if (Escaper.requiresDoubleQuoting(value)) {
      return Escaper.escapeWithDoubleQuotes(value);
    }
    if (Escaper.requiresSingleQuoting(value)) {
      return Escaper.escapeWithSingleQuotes(value);
    }
    if ('' === value) {
      return '""';
    }
    if (Utils.PATTERN_DATE.test(value)) {
      return "'" + value + "'";
    }
    if ((ref = value.toLowerCase()) === 'null' || ref === '~' || ref === 'true' || ref === 'false') {
      return "'" + value + "'";
    }
    return value;
  };

  Inline.dumpObject = function (value, exceptionOnInvalidType, objectSupport) {
    var j, key, len1, output, val;
    if (objectSupport == null) {
      objectSupport = null;
    }
    if (value instanceof Array) {
      output = [];
      for (j = 0, len1 = value.length; j < len1; j++) {
        val = value[j];
        output.push(this.dump(val));
      }
      return '[' + output.join(', ') + ']';
    } else {
      output = [];
      for (key in value) {
        val = value[key];
        output.push(this.dump(key) + ': ' + this.dump(val));
      }
      return '{' + output.join(', ') + '}';
    }
  };

  Inline.parseScalar = function (scalar, delimiters, stringDelimiters, context, evaluate) {
    var i, joinedDelimiters, match, output, pattern, ref, ref1, strpos, tmp;
    if (delimiters == null) {
      delimiters = null;
    }
    if (stringDelimiters == null) {
      stringDelimiters = ['"', "'"];
    }
    if (context == null) {
      context = null;
    }
    if (evaluate == null) {
      evaluate = true;
    }
    if (context == null) {
      context = {
        exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
        objectDecoder: this.settings.objectDecoder,
        i: 0
      };
    }
    i = context.i;
    if (ref = scalar.charAt(i), indexOf.call(stringDelimiters, ref) >= 0) {
      output = this.parseQuotedScalar(scalar, context);
      i = context.i;
      if (delimiters != null) {
        tmp = Utils.ltrim(scalar.slice(i), ' ');
        if (!(ref1 = tmp.charAt(0), indexOf.call(delimiters, ref1) >= 0)) {
          throw new ParseException('Unexpected characters (' + scalar.slice(i) + ').');
        }
      }
    } else {
      if (!delimiters) {
        output = scalar.slice(i);
        i += output.length;
        strpos = output.indexOf(' #');
        if (strpos !== -1) {
          output = Utils.rtrim(output.slice(0, strpos));
        }
      } else {
        joinedDelimiters = delimiters.join('|');
        pattern = this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters];
        if (pattern == null) {
          pattern = new Pattern('^(.+?)(' + joinedDelimiters + ')');
          this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters] = pattern;
        }
        if (match = pattern.exec(scalar.slice(i))) {
          output = match[1];
          i += output.length;
        } else {
          throw new ParseException('Malformed inline YAML string (' + scalar + ').');
        }
      }
      if (evaluate) {
        output = this.evaluateScalar(output, context);
      }
    }
    context.i = i;
    return output;
  };

  Inline.parseQuotedScalar = function (scalar, context) {
    var i, match, output;
    i = context.i;
    if (!(match = this.PATTERN_QUOTED_SCALAR.exec(scalar.slice(i)))) {
      throw new ParseMore('Malformed inline YAML string (' + scalar.slice(i) + ').');
    }
    output = match[0].substr(1, match[0].length - 2);
    if ('"' === scalar.charAt(i)) {
      output = Unescaper.unescapeDoubleQuotedString(output);
    } else {
      output = Unescaper.unescapeSingleQuotedString(output);
    }
    i += match[0].length;
    context.i = i;
    return output;
  };

  Inline.parseSequence = function (sequence, context) {
    var e, i, isQuoted, len, output, ref, value;
    output = [];
    len = sequence.length;
    i = context.i;
    i += 1;
    while (i < len) {
      context.i = i;
      switch (sequence.charAt(i)) {
        case '[':
          output.push(this.parseSequence(sequence, context));
          i = context.i;
          break;
        case '{':
          output.push(this.parseMapping(sequence, context));
          i = context.i;
          break;
        case ']':
          return output;
        case ',':
        case ' ':
        case "\n":
          break;
        default:
          isQuoted = (ref = sequence.charAt(i)) === '"' || ref === "'";
          value = this.parseScalar(sequence, [',', ']'], ['"', "'"], context);
          i = context.i;
          if (!isQuoted && typeof value === 'string' && (value.indexOf(': ') !== -1 || value.indexOf(":\n") !== -1)) {
            try {
              value = this.parseMapping('{' + value + '}');
            } catch (error) {
              e = error;
            }
          }
          output.push(value);
          --i;
      }
      ++i;
    }
    throw new ParseMore('Malformed inline YAML string ' + sequence);
  };

  Inline.parseMapping = function (mapping, context) {
    var done, i, key, len, output, shouldContinueWhileLoop, value;
    output = {};
    len = mapping.length;
    i = context.i;
    i += 1;
    shouldContinueWhileLoop = false;
    while (i < len) {
      context.i = i;
      switch (mapping.charAt(i)) {
        case ' ':
        case ',':
        case "\n":
          ++i;
          context.i = i;
          shouldContinueWhileLoop = true;
          break;
        case '}':
          return output;
      }
      if (shouldContinueWhileLoop) {
        shouldContinueWhileLoop = false;
        continue;
      }
      key = this.parseScalar(mapping, [':', ' ', "\n"], ['"', "'"], context, false);
      i = context.i;
      done = false;
      while (i < len) {
        context.i = i;
        switch (mapping.charAt(i)) {
          case '[':
            value = this.parseSequence(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case '{':
            value = this.parseMapping(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case ':':
          case ' ':
          case "\n":
            break;
          default:
            value = this.parseScalar(mapping, [',', '}'], ['"', "'"], context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            --i;
        }
        ++i;
        if (done) {
          break;
        }
      }
    }
    throw new ParseMore('Malformed inline YAML string ' + mapping);
  };

  Inline.evaluateScalar = function (scalar, context) {
    var cast, date, exceptionOnInvalidType, firstChar, firstSpace, firstWord, objectDecoder, raw, scalarLower, subValue, trimmedScalar;
    scalar = Utils.trim(scalar);
    scalarLower = scalar.toLowerCase();
    switch (scalarLower) {
      case 'null':
      case '':
      case '~':
        return null;
      case 'true':
        return true;
      case 'false':
        return false;
      case '.inf':
        return 2e308;
      case '.nan':
        return 0 / 0;
      case '-.inf':
        return 2e308;
      default:
        firstChar = scalarLower.charAt(0);
        switch (firstChar) {
          case '!':
            firstSpace = scalar.indexOf(' ');
            if (firstSpace === -1) {
              firstWord = scalarLower;
            } else {
              firstWord = scalarLower.slice(0, firstSpace);
            }
            switch (firstWord) {
              case '!':
                if (firstSpace !== -1) {
                  return parseInt(this.parseScalar(scalar.slice(2)));
                }
                return null;
              case '!str':
                return Utils.ltrim(scalar.slice(4));
              case '!!str':
                return Utils.ltrim(scalar.slice(5));
              case '!!int':
                return parseInt(this.parseScalar(scalar.slice(5)));
              case '!!bool':
                return Utils.parseBoolean(this.parseScalar(scalar.slice(6)), false);
              case '!!float':
                return parseFloat(this.parseScalar(scalar.slice(7)));
              case '!!timestamp':
                return Utils.stringToDate(Utils.ltrim(scalar.slice(11)));
              default:
                if (context == null) {
                  context = {
                    exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
                    objectDecoder: this.settings.objectDecoder,
                    i: 0
                  };
                }
                objectDecoder = context.objectDecoder, exceptionOnInvalidType = context.exceptionOnInvalidType;
                if (objectDecoder) {
                  trimmedScalar = Utils.rtrim(scalar);
                  firstSpace = trimmedScalar.indexOf(' ');
                  if (firstSpace === -1) {
                    return objectDecoder(trimmedScalar, null);
                  } else {
                    subValue = Utils.ltrim(trimmedScalar.slice(firstSpace + 1));
                    if (!(subValue.length > 0)) {
                      subValue = null;
                    }
                    return objectDecoder(trimmedScalar.slice(0, firstSpace), subValue);
                  }
                }
                if (exceptionOnInvalidType) {
                  throw new ParseException('Custom object support when parsing a YAML file has been disabled.');
                }
                return null;
            }
            break;
          case '0':
            if ('0x' === scalar.slice(0, 2)) {
              return Utils.hexDec(scalar);
            } else if (Utils.isDigits(scalar)) {
              return Utils.octDec(scalar);
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else {
              return scalar;
            }
            break;
          case '+':
            if (Utils.isDigits(scalar)) {
              raw = scalar;
              cast = parseInt(raw);
              if (raw === String(cast)) {
                return cast;
              } else {
                return raw;
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          case '-':
            if (Utils.isDigits(scalar.slice(1))) {
              if ('0' === scalar.charAt(1)) {
                return -Utils.octDec(scalar.slice(1));
              } else {
                raw = scalar.slice(1);
                cast = parseInt(raw);
                if (raw === String(cast)) {
                  return -cast;
                } else {
                  return -raw;
                }
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          default:
            if (date = Utils.stringToDate(scalar)) {
              return date;
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
        }
    }
  };

  return Inline;
}();

module.exports = Inline;

},{"./Escaper":123,"./Exception/DumpException":124,"./Exception/ParseException":125,"./Exception/ParseMore":126,"./Pattern":129,"./Unescaper":130,"./Utils":131,"babel-runtime/helpers/typeof":17}],128:[function(require,module,exports){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generated by CoffeeScript 1.12.4
var Inline, ParseException, ParseMore, Parser, Pattern, Utils;

Inline = require('./Inline');

Pattern = require('./Pattern');

Utils = require('./Utils');

ParseException = require('./Exception/ParseException');

ParseMore = require('./Exception/ParseMore');

Parser = function () {
  Parser.prototype.PATTERN_FOLDED_SCALAR_ALL = new Pattern('^(?:(?<type>![^\\|>]*)\\s+)?(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_FOLDED_SCALAR_END = new Pattern('(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_SEQUENCE_ITEM = new Pattern('^\\-((?<leadspaces>\\s+)(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_ANCHOR_VALUE = new Pattern('^&(?<ref>[^ ]+) *(?<value>.*)');

  Parser.prototype.PATTERN_COMPACT_NOTATION = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\{\\[].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_MAPPING_ITEM = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\[\\{].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_DECIMAL = new Pattern('\\d+');

  Parser.prototype.PATTERN_INDENT_SPACES = new Pattern('^ +');

  Parser.prototype.PATTERN_TRAILING_LINES = new Pattern('(\n*)$');

  Parser.prototype.PATTERN_YAML_HEADER = new Pattern('^\\%YAML[: ][\\d\\.]+.*\n', 'm');

  Parser.prototype.PATTERN_LEADING_COMMENTS = new Pattern('^(\\#.*?\n)+', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_START = new Pattern('^\\-\\-\\-.*?\n', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_END = new Pattern('^\\.\\.\\.\\s*$', 'm');

  Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION = {};

  Parser.prototype.CONTEXT_NONE = 0;

  Parser.prototype.CONTEXT_SEQUENCE = 1;

  Parser.prototype.CONTEXT_MAPPING = 2;

  function Parser(offset) {
    this.offset = offset != null ? offset : 0;
    this.lines = [];
    this.currentLineNb = -1;
    this.currentLine = '';
    this.refs = {};
  }

  Parser.prototype.parse = function (value, exceptionOnInvalidType, objectDecoder) {
    var alias, allowOverwrite, block, c, context, data, e, first, i, indent, isRef, j, k, key, l, lastKey, len, len1, len2, len3, lineCount, m, matches, mergeNode, n, name, parsed, parsedItem, parser, ref, ref1, ref2, refName, refValue, val, values;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.currentLineNb = -1;
    this.currentLine = '';
    this.lines = this.cleanup(value).split("\n");
    data = null;
    context = this.CONTEXT_NONE;
    allowOverwrite = false;
    while (this.moveToNextLine()) {
      if (this.isCurrentLineEmpty()) {
        continue;
      }
      if ("\t" === this.currentLine[0]) {
        throw new ParseException('A YAML file cannot contain tabs as indentation.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      isRef = mergeNode = false;
      if (values = this.PATTERN_SEQUENCE_ITEM.exec(this.currentLine)) {
        if (this.CONTEXT_MAPPING === context) {
          throw new ParseException('You cannot define a sequence item when in a mapping');
        }
        context = this.CONTEXT_SEQUENCE;
        if (data == null) {
          data = [];
        }
        if (values.value != null && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (this.currentLineNb < this.lines.length - 1 && !this.isNextLineUnIndentedCollection()) {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            data.push(parser.parse(this.getNextEmbedBlock(null, true), exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(null);
          }
        } else {
          if (((ref = values.leadspaces) != null ? ref.length : void 0) && (matches = this.PATTERN_COMPACT_NOTATION.exec(values.value))) {
            c = this.getRealCurrentLineNb();
            parser = new Parser(c);
            parser.refs = this.refs;
            block = values.value;
            indent = this.getCurrentLineIndentation();
            if (this.isNextLineIndented(false)) {
              block += "\n" + this.getNextEmbedBlock(indent + values.leadspaces.length + 1, true);
            }
            data.push(parser.parse(block, exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(this.parseValue(values.value, exceptionOnInvalidType, objectDecoder));
          }
        }
      } else if ((values = this.PATTERN_MAPPING_ITEM.exec(this.currentLine)) && values.key.indexOf(' #') === -1) {
        if (this.CONTEXT_SEQUENCE === context) {
          throw new ParseException('You cannot define a mapping item when in a sequence');
        }
        context = this.CONTEXT_MAPPING;
        if (data == null) {
          data = {};
        }
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        try {
          key = Inline.parseScalar(values.key);
        } catch (error) {
          e = error;
          e.parsedLine = this.getRealCurrentLineNb() + 1;
          e.snippet = this.currentLine;
          throw e;
        }
        if ('<<' === key) {
          mergeNode = true;
          allowOverwrite = true;
          if (((ref1 = values.value) != null ? ref1.indexOf('*') : void 0) === 0) {
            refName = values.value.slice(1);
            if (this.refs[refName] == null) {
              throw new ParseException('Reference "' + refName + '" does not exist.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            refValue = this.refs[refName];
            if ((typeof refValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(refValue)) !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (refValue instanceof Array) {
              for (i = j = 0, len = refValue.length; j < len; i = ++j) {
                value = refValue[i];
                if (data[name = String(i)] == null) {
                  data[name] = value;
                }
              }
            } else {
              for (key in refValue) {
                value = refValue[key];
                if (data[key] == null) {
                  data[key] = value;
                }
              }
            }
          } else {
            if (values.value != null && values.value !== '') {
              value = values.value;
            } else {
              value = this.getNextEmbedBlock();
            }
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            parsed = parser.parse(value, exceptionOnInvalidType);
            if ((typeof parsed === 'undefined' ? 'undefined' : (0, _typeof3.default)(parsed)) !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (parsed instanceof Array) {
              for (l = 0, len1 = parsed.length; l < len1; l++) {
                parsedItem = parsed[l];
                if ((typeof parsedItem === 'undefined' ? 'undefined' : (0, _typeof3.default)(parsedItem)) !== 'object') {
                  throw new ParseException('Merge items must be objects.', this.getRealCurrentLineNb() + 1, parsedItem);
                }
                if (parsedItem instanceof Array) {
                  for (i = m = 0, len2 = parsedItem.length; m < len2; i = ++m) {
                    value = parsedItem[i];
                    k = String(i);
                    if (!data.hasOwnProperty(k)) {
                      data[k] = value;
                    }
                  }
                } else {
                  for (key in parsedItem) {
                    value = parsedItem[key];
                    if (!data.hasOwnProperty(key)) {
                      data[key] = value;
                    }
                  }
                }
              }
            } else {
              for (key in parsed) {
                value = parsed[key];
                if (!data.hasOwnProperty(key)) {
                  data[key] = value;
                }
              }
            }
          }
        } else if (values.value != null && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (mergeNode) {} else if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (!this.isNextLineIndented() && !this.isNextLineUnIndentedCollection()) {
            if (allowOverwrite || data[key] === void 0) {
              data[key] = null;
            }
          } else {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            val = parser.parse(this.getNextEmbedBlock(), exceptionOnInvalidType, objectDecoder);
            if (allowOverwrite || data[key] === void 0) {
              data[key] = val;
            }
          }
        } else {
          val = this.parseValue(values.value, exceptionOnInvalidType, objectDecoder);
          if (allowOverwrite || data[key] === void 0) {
            data[key] = val;
          }
        }
      } else {
        lineCount = this.lines.length;
        if (1 === lineCount || 2 === lineCount && Utils.isEmpty(this.lines[1])) {
          try {
            value = Inline.parse(this.lines[0], exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
            if (value instanceof Array) {
              first = value[0];
            } else {
              for (key in value) {
                first = value[key];
                break;
              }
            }
            if (typeof first === 'string' && first.indexOf('*') === 0) {
              data = [];
              for (n = 0, len3 = value.length; n < len3; n++) {
                alias = value[n];
                data.push(this.refs[alias.slice(1)]);
              }
              value = data;
            }
          }
          return value;
        } else if ((ref2 = Utils.ltrim(value).charAt(0)) === '[' || ref2 === '{') {
          try {
            return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
        throw new ParseException('Unable to parse.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      if (isRef) {
        if (data instanceof Array) {
          this.refs[isRef] = data[data.length - 1];
        } else {
          lastKey = null;
          for (key in data) {
            lastKey = key;
          }
          this.refs[isRef] = data[lastKey];
        }
      }
    }
    if (Utils.isEmpty(data)) {
      return null;
    } else {
      return data;
    }
  };

  Parser.prototype.getRealCurrentLineNb = function () {
    return this.currentLineNb + this.offset;
  };

  Parser.prototype.getCurrentLineIndentation = function () {
    return this.currentLine.length - Utils.ltrim(this.currentLine, ' ').length;
  };

  Parser.prototype.getNextEmbedBlock = function (indentation, includeUnindentedCollection) {
    var data, indent, isItUnindentedCollection, newIndent, removeComments, removeCommentsPattern, unindentedEmbedBlock;
    if (indentation == null) {
      indentation = null;
    }
    if (includeUnindentedCollection == null) {
      includeUnindentedCollection = false;
    }
    this.moveToNextLine();
    if (indentation == null) {
      newIndent = this.getCurrentLineIndentation();
      unindentedEmbedBlock = this.isStringUnIndentedCollectionItem(this.currentLine);
      if (!this.isCurrentLineEmpty() && 0 === newIndent && !unindentedEmbedBlock) {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    } else {
      newIndent = indentation;
    }
    data = [this.currentLine.slice(newIndent)];
    if (!includeUnindentedCollection) {
      isItUnindentedCollection = this.isStringUnIndentedCollectionItem(this.currentLine);
    }
    removeCommentsPattern = this.PATTERN_FOLDED_SCALAR_END;
    removeComments = !removeCommentsPattern.test(this.currentLine);
    while (this.moveToNextLine()) {
      indent = this.getCurrentLineIndentation();
      if (indent === newIndent) {
        removeComments = !removeCommentsPattern.test(this.currentLine);
      }
      if (removeComments && this.isCurrentLineComment()) {
        continue;
      }
      if (this.isCurrentLineBlank()) {
        data.push(this.currentLine.slice(newIndent));
        continue;
      }
      if (isItUnindentedCollection && !this.isStringUnIndentedCollectionItem(this.currentLine) && indent === newIndent) {
        this.moveToPreviousLine();
        break;
      }
      if (indent >= newIndent) {
        data.push(this.currentLine.slice(newIndent));
      } else if (Utils.ltrim(this.currentLine).charAt(0) === '#') {} else if (0 === indent) {
        this.moveToPreviousLine();
        break;
      } else {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    }
    return data.join("\n");
  };

  Parser.prototype.moveToNextLine = function () {
    if (this.currentLineNb >= this.lines.length - 1) {
      return false;
    }
    this.currentLine = this.lines[++this.currentLineNb];
    return true;
  };

  Parser.prototype.moveToPreviousLine = function () {
    this.currentLine = this.lines[--this.currentLineNb];
  };

  Parser.prototype.parseValue = function (value, exceptionOnInvalidType, objectDecoder) {
    var e, foldedIndent, matches, modifiers, pos, ref, ref1, val;
    if (0 === value.indexOf('*')) {
      pos = value.indexOf('#');
      if (pos !== -1) {
        value = value.substr(1, pos - 2);
      } else {
        value = value.slice(1);
      }
      if (this.refs[value] === void 0) {
        throw new ParseException('Reference "' + value + '" does not exist.', this.currentLine);
      }
      return this.refs[value];
    }
    if (matches = this.PATTERN_FOLDED_SCALAR_ALL.exec(value)) {
      modifiers = (ref = matches.modifiers) != null ? ref : '';
      foldedIndent = Math.abs(parseInt(modifiers));
      if (isNaN(foldedIndent)) {
        foldedIndent = 0;
      }
      val = this.parseFoldedScalar(matches.separator, this.PATTERN_DECIMAL.replace(modifiers, ''), foldedIndent);
      if (matches.type != null) {
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        return Inline.parseScalar(matches.type + ' ' + val);
      } else {
        return val;
      }
    }
    if ((ref1 = value.charAt(0)) === '[' || ref1 === '{' || ref1 === '"' || ref1 === "'") {
      while (true) {
        try {
          return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
        } catch (error) {
          e = error;
          if (e instanceof ParseMore && this.moveToNextLine()) {
            value += "\n" + Utils.trim(this.currentLine, ' ');
          } else {
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
      }
    } else {
      if (this.isNextLineIndented()) {
        value += "\n" + this.getNextEmbedBlock();
      }
      return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
    }
  };

  Parser.prototype.parseFoldedScalar = function (separator, indicator, indentation) {
    var isCurrentLineBlank, j, len, line, matches, newText, notEOF, pattern, ref, text;
    if (indicator == null) {
      indicator = '';
    }
    if (indentation == null) {
      indentation = 0;
    }
    notEOF = this.moveToNextLine();
    if (!notEOF) {
      return '';
    }
    isCurrentLineBlank = this.isCurrentLineBlank();
    text = '';
    while (notEOF && isCurrentLineBlank) {
      if (notEOF = this.moveToNextLine()) {
        text += "\n";
        isCurrentLineBlank = this.isCurrentLineBlank();
      }
    }
    if (0 === indentation) {
      if (matches = this.PATTERN_INDENT_SPACES.exec(this.currentLine)) {
        indentation = matches[0].length;
      }
    }
    if (indentation > 0) {
      pattern = this.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation];
      if (pattern == null) {
        pattern = new Pattern('^ {' + indentation + '}(.*)$');
        Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation] = pattern;
      }
      while (notEOF && (isCurrentLineBlank || (matches = pattern.exec(this.currentLine)))) {
        if (isCurrentLineBlank) {
          text += this.currentLine.slice(indentation);
        } else {
          text += matches[1];
        }
        if (notEOF = this.moveToNextLine()) {
          text += "\n";
          isCurrentLineBlank = this.isCurrentLineBlank();
        }
      }
    } else if (notEOF) {
      text += "\n";
    }
    if (notEOF) {
      this.moveToPreviousLine();
    }
    if ('>' === separator) {
      newText = '';
      ref = text.split("\n");
      for (j = 0, len = ref.length; j < len; j++) {
        line = ref[j];
        if (line.length === 0 || line.charAt(0) === ' ') {
          newText = Utils.rtrim(newText, ' ') + line + "\n";
        } else {
          newText += line + ' ';
        }
      }
      text = newText;
    }
    if ('+' !== indicator) {
      text = Utils.rtrim(text);
    }
    if ('' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, "\n");
    } else if ('-' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, '');
    }
    return text;
  };

  Parser.prototype.isNextLineIndented = function (ignoreComments) {
    var EOF, currentIndentation, ret;
    if (ignoreComments == null) {
      ignoreComments = true;
    }
    currentIndentation = this.getCurrentLineIndentation();
    EOF = !this.moveToNextLine();
    if (ignoreComments) {
      while (!EOF && this.isCurrentLineEmpty()) {
        EOF = !this.moveToNextLine();
      }
    } else {
      while (!EOF && this.isCurrentLineBlank()) {
        EOF = !this.moveToNextLine();
      }
    }
    if (EOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() > currentIndentation) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isCurrentLineEmpty = function () {
    var trimmedLine;
    trimmedLine = Utils.trim(this.currentLine, ' ');
    return trimmedLine.length === 0 || trimmedLine.charAt(0) === '#';
  };

  Parser.prototype.isCurrentLineBlank = function () {
    return '' === Utils.trim(this.currentLine, ' ');
  };

  Parser.prototype.isCurrentLineComment = function () {
    var ltrimmedLine;
    ltrimmedLine = Utils.ltrim(this.currentLine, ' ');
    return ltrimmedLine.charAt(0) === '#';
  };

  Parser.prototype.cleanup = function (value) {
    var count, i, indent, j, l, len, len1, line, lines, ref, ref1, ref2, smallestIndent, trimmedValue;
    if (value.indexOf("\r") !== -1) {
      value = value.split("\r\n").join("\n").split("\r").join("\n");
    }
    count = 0;
    ref = this.PATTERN_YAML_HEADER.replaceAll(value, ''), value = ref[0], count = ref[1];
    this.offset += count;
    ref1 = this.PATTERN_LEADING_COMMENTS.replaceAll(value, '', 1), trimmedValue = ref1[0], count = ref1[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
    }
    ref2 = this.PATTERN_DOCUMENT_MARKER_START.replaceAll(value, '', 1), trimmedValue = ref2[0], count = ref2[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
      value = this.PATTERN_DOCUMENT_MARKER_END.replace(value, '');
    }
    lines = value.split("\n");
    smallestIndent = -1;
    for (j = 0, len = lines.length; j < len; j++) {
      line = lines[j];
      if (Utils.trim(line, ' ').length === 0) {
        continue;
      }
      indent = line.length - Utils.ltrim(line).length;
      if (smallestIndent === -1 || indent < smallestIndent) {
        smallestIndent = indent;
      }
    }
    if (smallestIndent > 0) {
      for (i = l = 0, len1 = lines.length; l < len1; i = ++l) {
        line = lines[i];
        lines[i] = line.slice(smallestIndent);
      }
      value = lines.join("\n");
    }
    return value;
  };

  Parser.prototype.isNextLineUnIndentedCollection = function (currentIndentation) {
    var notEOF, ret;
    if (currentIndentation == null) {
      currentIndentation = null;
    }
    if (currentIndentation == null) {
      currentIndentation = this.getCurrentLineIndentation();
    }
    notEOF = this.moveToNextLine();
    while (notEOF && this.isCurrentLineEmpty()) {
      notEOF = this.moveToNextLine();
    }
    if (false === notEOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() === currentIndentation && this.isStringUnIndentedCollectionItem(this.currentLine)) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isStringUnIndentedCollectionItem = function () {
    return this.currentLine === '-' || this.currentLine.slice(0, 2) === '- ';
  };

  return Parser;
}();

module.exports = Parser;

},{"./Exception/ParseException":125,"./Exception/ParseMore":126,"./Inline":127,"./Pattern":129,"./Utils":131,"babel-runtime/helpers/typeof":17}],129:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var Pattern;

Pattern = function () {
  Pattern.prototype.regex = null;

  Pattern.prototype.rawRegex = null;

  Pattern.prototype.cleanedRegex = null;

  Pattern.prototype.mapping = null;

  function Pattern(rawRegex, modifiers) {
    var _char, capturingBracketNumber, cleanedRegex, i, len, mapping, name, part, subChar;
    if (modifiers == null) {
      modifiers = '';
    }
    cleanedRegex = '';
    len = rawRegex.length;
    mapping = null;
    capturingBracketNumber = 0;
    i = 0;
    while (i < len) {
      _char = rawRegex.charAt(i);
      if (_char === '\\') {
        cleanedRegex += rawRegex.slice(i, +(i + 1) + 1 || 9e9);
        i++;
      } else if (_char === '(') {
        if (i < len - 2) {
          part = rawRegex.slice(i, +(i + 2) + 1 || 9e9);
          if (part === '(?:') {
            i += 2;
            cleanedRegex += part;
          } else if (part === '(?<') {
            capturingBracketNumber++;
            i += 2;
            name = '';
            while (i + 1 < len) {
              subChar = rawRegex.charAt(i + 1);
              if (subChar === '>') {
                cleanedRegex += '(';
                i++;
                if (name.length > 0) {
                  if (mapping == null) {
                    mapping = {};
                  }
                  mapping[name] = capturingBracketNumber;
                }
                break;
              } else {
                name += subChar;
              }
              i++;
            }
          } else {
            cleanedRegex += _char;
            capturingBracketNumber++;
          }
        } else {
          cleanedRegex += _char;
        }
      } else {
        cleanedRegex += _char;
      }
      i++;
    }
    this.rawRegex = rawRegex;
    this.cleanedRegex = cleanedRegex;
    this.regex = new RegExp(this.cleanedRegex, 'g' + modifiers.replace('g', ''));
    this.mapping = mapping;
  }

  Pattern.prototype.exec = function (str) {
    var index, matches, name, ref;
    this.regex.lastIndex = 0;
    matches = this.regex.exec(str);
    if (matches == null) {
      return null;
    }
    if (this.mapping != null) {
      ref = this.mapping;
      for (name in ref) {
        index = ref[name];
        matches[name] = matches[index];
      }
    }
    return matches;
  };

  Pattern.prototype.test = function (str) {
    this.regex.lastIndex = 0;
    return this.regex.test(str);
  };

  Pattern.prototype.replace = function (str, replacement) {
    this.regex.lastIndex = 0;
    return str.replace(this.regex, replacement);
  };

  Pattern.prototype.replaceAll = function (str, replacement, limit) {
    var count;
    if (limit == null) {
      limit = 0;
    }
    this.regex.lastIndex = 0;
    count = 0;
    while (this.regex.test(str) && (limit === 0 || count < limit)) {
      this.regex.lastIndex = 0;
      str = str.replace(this.regex, replacement);
      count++;
    }
    return [str, count];
  };

  return Pattern;
}();

module.exports = Pattern;

},{}],130:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var Pattern, Unescaper, Utils;

Utils = require('./Utils');

Pattern = require('./Pattern');

Unescaper = function () {
  function Unescaper() {}

  Unescaper.PATTERN_ESCAPED_CHARACTER = new Pattern('\\\\([0abt\tnvfre "\\/\\\\N_LP]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})');

  Unescaper.unescapeSingleQuotedString = function (value) {
    return value.replace(/\'\'/g, '\'');
  };

  Unescaper.unescapeDoubleQuotedString = function (value) {
    if (this._unescapeCallback == null) {
      this._unescapeCallback = function (_this) {
        return function (str) {
          return _this.unescapeCharacter(str);
        };
      }(this);
    }
    return this.PATTERN_ESCAPED_CHARACTER.replace(value, this._unescapeCallback);
  };

  Unescaper.unescapeCharacter = function (value) {
    var ch;
    ch = String.fromCharCode;
    switch (value.charAt(1)) {
      case '0':
        return ch(0);
      case 'a':
        return ch(7);
      case 'b':
        return ch(8);
      case 't':
        return "\t";
      case "\t":
        return "\t";
      case 'n':
        return "\n";
      case 'v':
        return ch(11);
      case 'f':
        return ch(12);
      case 'r':
        return ch(13);
      case 'e':
        return ch(27);
      case ' ':
        return ' ';
      case '"':
        return '"';
      case '/':
        return '/';
      case '\\':
        return '\\';
      case 'N':
        return ch(0x0085);
      case '_':
        return ch(0x00A0);
      case 'L':
        return ch(0x2028);
      case 'P':
        return ch(0x2029);
      case 'x':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 2)));
      case 'u':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 4)));
      case 'U':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 8)));
      default:
        return '';
    }
  };

  return Unescaper;
}();

module.exports = Unescaper;

},{"./Pattern":129,"./Utils":131}],131:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var Pattern,
    Utils,
    hasProp = {}.hasOwnProperty;

Pattern = require('./Pattern');

Utils = function () {
  function Utils() {}

  Utils.REGEX_LEFT_TRIM_BY_CHAR = {};

  Utils.REGEX_RIGHT_TRIM_BY_CHAR = {};

  Utils.REGEX_SPACES = /\s+/g;

  Utils.REGEX_DIGITS = /^\d+$/;

  Utils.REGEX_OCTAL = /[^0-7]/gi;

  Utils.REGEX_HEXADECIMAL = /[^a-f0-9]/gi;

  Utils.PATTERN_DATE = new Pattern('^' + '(?<year>[0-9][0-9][0-9][0-9])' + '-(?<month>[0-9][0-9]?)' + '-(?<day>[0-9][0-9]?)' + '(?:(?:[Tt]|[ \t]+)' + '(?<hour>[0-9][0-9]?)' + ':(?<minute>[0-9][0-9])' + ':(?<second>[0-9][0-9])' + '(?:\.(?<fraction>[0-9]*))?' + '(?:[ \t]*(?<tz>Z|(?<tz_sign>[-+])(?<tz_hour>[0-9][0-9]?)' + '(?::(?<tz_minute>[0-9][0-9]))?))?)?' + '$', 'i');

  Utils.LOCAL_TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;

  Utils.trim = function (str, _char) {
    var regexLeft, regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexLeft, '').replace(regexRight, '');
  };

  Utils.ltrim = function (str, _char) {
    var regexLeft;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    return str.replace(regexLeft, '');
  };

  Utils.rtrim = function (str, _char) {
    var regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexRight, '');
  };

  Utils.isEmpty = function (value) {
    return !value || value === '' || value === '0' || value instanceof Array && value.length === 0 || this.isEmptyObject(value);
  };

  Utils.isEmptyObject = function (value) {
    var k;
    return value instanceof Object && function () {
      var results;
      results = [];
      for (k in value) {
        if (!hasProp.call(value, k)) continue;
        results.push(k);
      }
      return results;
    }().length === 0;
  };

  Utils.subStrCount = function (string, subString, start, length) {
    var c, i, j, len, ref, sublen;
    c = 0;
    string = '' + string;
    subString = '' + subString;
    if (start != null) {
      string = string.slice(start);
    }
    if (length != null) {
      string = string.slice(0, length);
    }
    len = string.length;
    sublen = subString.length;
    for (i = j = 0, ref = len; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (subString === string.slice(i, sublen)) {
        c++;
        i += sublen - 1;
      }
    }
    return c;
  };

  Utils.isDigits = function (input) {
    this.REGEX_DIGITS.lastIndex = 0;
    return this.REGEX_DIGITS.test(input);
  };

  Utils.octDec = function (input) {
    this.REGEX_OCTAL.lastIndex = 0;
    return parseInt((input + '').replace(this.REGEX_OCTAL, ''), 8);
  };

  Utils.hexDec = function (input) {
    this.REGEX_HEXADECIMAL.lastIndex = 0;
    input = this.trim(input);
    if ((input + '').slice(0, 2) === '0x') {
      input = (input + '').slice(2);
    }
    return parseInt((input + '').replace(this.REGEX_HEXADECIMAL, ''), 16);
  };

  Utils.utf8chr = function (c) {
    var ch;
    ch = String.fromCharCode;
    if (0x80 > (c %= 0x200000)) {
      return ch(c);
    }
    if (0x800 > c) {
      return ch(0xC0 | c >> 6) + ch(0x80 | c & 0x3F);
    }
    if (0x10000 > c) {
      return ch(0xE0 | c >> 12) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
    }
    return ch(0xF0 | c >> 18) + ch(0x80 | c >> 12 & 0x3F) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
  };

  Utils.parseBoolean = function (input, strict) {
    var lowerInput;
    if (strict == null) {
      strict = true;
    }
    if (typeof input === 'string') {
      lowerInput = input.toLowerCase();
      if (!strict) {
        if (lowerInput === 'no') {
          return false;
        }
      }
      if (lowerInput === '0') {
        return false;
      }
      if (lowerInput === 'false') {
        return false;
      }
      if (lowerInput === '') {
        return false;
      }
      return true;
    }
    return !!input;
  };

  Utils.isNumeric = function (input) {
    this.REGEX_SPACES.lastIndex = 0;
    return typeof input === 'number' || typeof input === 'string' && !isNaN(input) && input.replace(this.REGEX_SPACES, '') !== '';
  };

  Utils.stringToDate = function (str) {
    var date, day, fraction, hour, info, minute, month, second, tz_hour, tz_minute, tz_offset, year;
    if (!(str != null ? str.length : void 0)) {
      return null;
    }
    info = this.PATTERN_DATE.exec(str);
    if (!info) {
      return null;
    }
    year = parseInt(info.year, 10);
    month = parseInt(info.month, 10) - 1;
    day = parseInt(info.day, 10);
    if (info.hour == null) {
      date = new Date(Date.UTC(year, month, day));
      return date;
    }
    hour = parseInt(info.hour, 10);
    minute = parseInt(info.minute, 10);
    second = parseInt(info.second, 10);
    if (info.fraction != null) {
      fraction = info.fraction.slice(0, 3);
      while (fraction.length < 3) {
        fraction += '0';
      }
      fraction = parseInt(fraction, 10);
    } else {
      fraction = 0;
    }
    if (info.tz != null) {
      tz_hour = parseInt(info.tz_hour, 10);
      if (info.tz_minute != null) {
        tz_minute = parseInt(info.tz_minute, 10);
      } else {
        tz_minute = 0;
      }
      tz_offset = (tz_hour * 60 + tz_minute) * 60000;
      if ('-' === info.tz_sign) {
        tz_offset *= -1;
      }
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (tz_offset) {
      date.setTime(date.getTime() - tz_offset);
    }
    return date;
  };

  Utils.strRepeat = function (str, number) {
    var i, res;
    res = '';
    i = 0;
    while (i < number) {
      res += str;
      i++;
    }
    return res;
  };

  Utils.getStringFromFile = function (path, callback) {
    var data, fs, j, len1, name, ref, req, xhr;
    if (callback == null) {
      callback = null;
    }
    xhr = null;
    if (typeof window !== "undefined" && window !== null) {
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        ref = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          name = ref[j];
          try {
            xhr = new ActiveXObject(name);
          } catch (error) {}
        }
      }
    }
    if (xhr != null) {
      if (callback != null) {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
              return callback(xhr.responseText);
            } else {
              return callback(null);
            }
          }
        };
        xhr.open('GET', path, true);
        return xhr.send(null);
      } else {
        xhr.open('GET', path, false);
        xhr.send(null);
        if (xhr.status === 200 || xhr.status === 0) {
          return xhr.responseText;
        }
        return null;
      }
    } else {
      req = require;
      fs = req('fs');
      if (callback != null) {
        return fs.readFile(path, function (err, data) {
          if (err) {
            return callback(null);
          } else {
            return callback(String(data));
          }
        });
      } else {
        data = fs.readFileSync(path);
        if (data != null) {
          return String(data);
        }
        return null;
      }
    }
  };

  return Utils;
}();

module.exports = Utils;

},{"./Pattern":129}],132:[function(require,module,exports){
'use strict';

// Generated by CoffeeScript 1.12.4
var Dumper, Parser, Utils, Yaml;

Parser = require('./Parser');

Dumper = require('./Dumper');

Utils = require('./Utils');

Yaml = function () {
  function Yaml() {}

  Yaml.parse = function (input, exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    return new Parser().parse(input, exceptionOnInvalidType, objectDecoder);
  };

  Yaml.parseFile = function (path, callback, exceptionOnInvalidType, objectDecoder) {
    var input;
    if (callback == null) {
      callback = null;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    if (callback != null) {
      return Utils.getStringFromFile(path, function (_this) {
        return function (input) {
          var result;
          result = null;
          if (input != null) {
            result = _this.parse(input, exceptionOnInvalidType, objectDecoder);
          }
          callback(result);
        };
      }(this));
    } else {
      input = Utils.getStringFromFile(path);
      if (input != null) {
        return this.parse(input, exceptionOnInvalidType, objectDecoder);
      }
      return null;
    }
  };

  Yaml.dump = function (input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var yaml;
    if (inline == null) {
      inline = 2;
    }
    if (indent == null) {
      indent = 4;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    yaml = new Dumper();
    yaml.indentation = indent;
    return yaml.dump(input, inline, 0, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.stringify = function (input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    return this.dump(input, inline, indent, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.load = function (path, callback, exceptionOnInvalidType, objectDecoder) {
    return this.parseFile(path, callback, exceptionOnInvalidType, objectDecoder);
  };

  return Yaml;
}();

if (typeof window !== "undefined" && window !== null) {
  window.YAML = Yaml;
}

if (typeof window === "undefined" || window === null) {
  undefined.YAML = Yaml;
}

module.exports = Yaml;

},{"./Dumper":122,"./Parser":128,"./Utils":131}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function base10_to_base64(num) {
  var order = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  var base = order.length;
  var str = '',
      r;
  while (num) {
    r = num % base;
    num -= r;
    num /= base;
    str = order.charAt(r) + str;
  }
  return str;
}

exports.default = base10_to_base64;

},{}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/userpixel/micromustache/blob/master/lib/render.js

/**
 * @callback ResolverFn
 * @param {string} varName - variable name before being parsed.
 *        For example: {a.b.c} ->  'a.b.c', {  x  } -> 'x'
 * @param {Object} view - the view object that was passed to .render() function
 * @returns {string|number|boolean|Object|undefined} the value to be
 *        interpolated. If the function returns undefined, the value resolution
 *        algorithm will go ahead with the default behaviour (resolving the
 *        variable name from the provided object).
 */

var VAR_MATCH_REGEX = /\{\{\s*(.*?)\s*\}\}/g;

function _valueToString(value) {
  switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
    case 'string':
    case 'number':
    case 'boolean':
      return value;
    case 'object':
      try {
        // null is an object but is falsy. Swallow it.
        return value === null ? '' : (0, _stringify2.default)(value);
      } catch (jsonError) {
        return '{...}';
      }
    default:
      // Anything else will be replaced with an empty string
      // For example: undefined, Symbol, etc.
      return '';
  }
}

/**
 * Recursively goes through an object trying to resolve a path.
 *
 * @param {Object} scope - The object to traverse (in each recursive call we dig into this object)
 * @param {string[]} path - An array of property names to traverse one-by-one
 * @param {number} [pathIndex=0] - The current index in the path array
 */
function _recursivePathResolver(scope, path) {
  var pathIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((typeof scope === 'undefined' ? 'undefined' : (0, _typeof3.default)(scope)) !== 'object' || scope === null || scope === undefined) {
    return '';
  }

  var varName = path[pathIndex];
  var value = scope[varName];

  if (pathIndex === path.length - 1) {
    // It's a leaf, return whatever it is
    return value;
  }

  return _recursivePathResolver(value, path, ++pathIndex);
}

function defaultResolver(varName, view) {
  return _recursivePathResolver(view, varName.split('.'));
}

/**
 * Replaces every {{variable}} inside the template with values provided by view.
 *
 * @param {string} template - The template containing one or more {{variableNames}} every variable
 *        names that is used in the template. If it's omitted, it'll be assumed an empty object.
 * @param {Object} [view={}] - An object containing values for every variable names that is used in
 *        the template. If it's omitted, it'll be set to an empty object essentially removing all
 *        {{varName}}s in the template.
 * @param {ResolverFn} [resolver] - An optional function that will be
 *        called for every {{varName}} to generate a value. If the resolver throws an error
 *        we'll proceed with the default value resolution algorithm (find the value from the view
 *        object).
 * @returns {string} - Template where its variable names replaced with
 *        corresponding values. If a value is not found or is invalid, it will
 *        be assumed empty string ''. If the value is an object itself, it'll
 *        be stringified by JSON.
 *        In case of a JSON stringify error the result will look like "{...}".
 */
function render(template) {
  var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var resolver = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResolver;

  // don't touch the template if it is not a string
  if (typeof template !== 'string') {
    return template;
  }

  return template.replace(VAR_MATCH_REGEX, function (match, varName) {
    try {
      // defaultResolver never throws
      return _valueToString(resolver(varName, view));
    } catch (e) {
      // if your resolver throws, we proceed with the default resolver
      return _valueToString(defaultResolver(varName, view));
    }
  });
}

exports.default = render;

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/helpers/typeof":17}],135:[function(require,module,exports){
'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Tamer on 19/10/2017.
 */

Stage.defineWidget({
  id: 'visual-input',
  name: 'Visualization Deployment Creation Input',
  description: 'Visualization Deployment Creation Input Widget',
  initialWidth: 12,
  initialHeight: 16,
  color: 'purple',
  hasStyle: true,
  isReact: true,

  permission: Stage.GenericConfig.CUSTOM_WIDGET_PERMISSIONS.CUSTOM_ALL,
  categories: [Stage.GenericConfig.CATEGORY.SYSTEM_RESOURCES],

  initialConfiguration: [{ id: 'blueprintId', name: 'Blueprint Id', default: 'COV', type: Stage.Basic.GenericField.STRING }, { id: 'deploymentId', name: 'Deployment Id', default: 'cloudify-deployment-visualization-widget-sample', type: Stage.Basic.GenericField.STRING }, { id: 'allowNameEdit', name: 'Allow User to change Deployment Name', default: true, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: 'devMode', name: 'Enable Developers Mode', default: false, type: Stage.Basic.GenericField.BOOLEAN_TYPE }],

  fetchData: function fetchData(widget, toolbox, params) {
    var actions = new _Actions2.default((0, _extends3.default)({
      toolbox: toolbox
    }, widget.configuration));

    return actions.doGetInputDescriptor();
  },


  render: function render(widget, data, error, toolbox) {

    if (_.isEmpty(data)) {
      return React.createElement(Stage.Basic.Loading, null);
    }

    var actions = new _Actions2.default((0, _extends3.default)({
      toolbox: toolbox
    }, widget.configuration));

    return React.createElement(_List2.default, {
      widget: widget,
      data: data,
      toolbox: toolbox,
      actions: actions
    });
  }
});

},{"./Actions":118,"./List":119,"babel-runtime/helpers/extends":14}]},{},[118,120,119,134,135])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy9BY3Rpb25zLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvTGlzdC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL2NvbXBvbmVudHMvU2VsZWN0Qm94LmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9pbmRleC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0R1bXBlci5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0VzY2FwZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9FeGNlcHRpb24vRHVtcEV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZUV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZU1vcmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9JbmxpbmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXJzZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXR0ZXJuLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVW5lc2NhcGVyLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVXRpbHMuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9ZYW1sLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvYmFzZTEwdG82NC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL211c3RhY2hlLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvd2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFP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USxNQURWO0FBRUUsWUFBTSxJQUZSO0FBR0UsZUFBUyxPQUhYO0FBSUUsZUFBUztBQUpYLE1BREY7QUFRRDtBQWpEWSxDQUFuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICBpZiAoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmICgkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJHJlcGxhY2VyKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBUYW1lciBvbiAwNi8xMS8yMDE3LlxuICovXG5cbi8qKlxuICogQGNsYXNzIEFjdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9ucyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFjdGlvbnMuXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gXG4gICAqIEBtZW1iZXJvZiBBY3Rpb25zXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvKSB7XG4gICAgdGhpcy50b29sYm94ID0gby50b29sYm94O1xuICAgIHRoaXMuZGVwbG95bWVudElkID0gby5kZXBsb3ltZW50SWQ7XG4gICAgdGhpcy5ibHVlcHJpbnRJZCA9IG8uYmx1ZXByaW50SWQ7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IG91dHB1dCBkYXRhXG4gICAqIFxuICAgKiBAcmV0dXJucyBcbiAgICogQG1lbWJlcm9mIEFjdGlvbnNcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG4gIGRvR2V0RGVwbG95bWVudCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdvcycsXG4gICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgIGZsZXg6IDEwMCxcbiAgICAgICAgcG9zaXRpb246IDUwLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ09wZXJhdGluZyBTeXN0ZW0nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdCB0aGUgT1MnLFxuICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdXaW5kb3dzJywgdmFsdWU6ICd3aW5kb3dzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTGludXgnLCB2YWx1ZTogJ2xpbnV4JyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X2J1dHRvbicsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBmbGV4OiAxMDAsXG4gICAgICAgIHBvc2l0aW9uOiAxMDEsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgQnV0dG9uJyxcbiAgICAgICAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgICAgICAgaWNvbjogJ2ZhY2Vib29rJywgLy8gbGlzdCBvZiBpY29ucyBodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pY29uIGxhYmVsIHdpbGwgb3ZlcndyaXRlXG4gICAgICAgICAgY29sb3I6ICdncmVlbicsIC8vIHJlZCwgb3JhbmdlLCB5ZWxsb3csIG9saXZlLCBncmVlbiwgdGVhbCwgYmx1ZSwgdmlvbGV0LCBwdXJwbGUsIHBpbmssIGJyb3duLCBncmV5LCBibGFjayxcbiAgICAgICAgICBhY3Rpb246ICdjcmVhdGVEZXBsb3ltZW50J1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9pbnB1dCcsXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgSW5wdXQnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdIZWxsbyBJbnB1dCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgRW50ZXIgWW91ciBEYXRhJyxcbiAgICAgICAgICBpc1Bhc3N3b3JkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X2NoZWNrYm94JyxcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBDaGVja2JveCcsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X3RvZ2dsZScsXG4gICAgICAgIHR5cGU6ICd0b2dnbGUnLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IFRvZ2dsZScsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X3JhZGlvJyxcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBSYWRpbycsXG4gICAgICAgICAgZGVmYXVsdDogJ29wMScsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDEnLCB2YWx1ZTogJ29wMScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAyJywgdmFsdWU6ICdvcDInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMycsIHZhbHVlOiAnb3AzJyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X2Ryb3Bkb3duJyxcbiAgICAgICAgdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBEcm9wZG93bicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdIZWxsbyBEcm9wZG93bicsXG4gICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDogWydvcDEnXSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMScsIHZhbHVlOiAnb3AxJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDInLCB2YWx1ZTogJ29wMicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAzJywgdmFsdWU6ICdvcDMnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfcmFuZ2UnLFxuICAgICAgICB0eXBlOiAncmFuZ2UnLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IFJhbmdlJyxcbiAgICAgICAgICBkZWZhdWx0OiAyMCxcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnSGVsbG8gaSBhbSBhIE1lc3NhZ2UnLFxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfc2VsZWN0Ym94JyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdGJveCcsXG4gICAgICAgIGZsZXg6IDEwMCxcbiAgICAgICAgcG9zaXRpb246IDk3LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IFNlbGVjdEJveCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICc8aDE+e3t0ZXh0fX08L2gxPjxwPnt7dmFsdWV9fTwvcD4nLFxuICAgICAgICAgIHN0eWxlOiAxLCAvLyAxIG9yIDJcbiAgICAgICAgICBkZWZhdWx0OiAnMmInLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ3gtc21hbGwnLCB2YWx1ZTogJzFtJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnc21hbGwnLCB2YWx1ZTogJzJiJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnbWVkaXVtJywgdmFsdWU6ICczbScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ2xhcmdlJywgdmFsdWU6ICc1bCcgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pO1xuICAgIC8vIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KGAvZGVwbG95bWVudHMvJHt0aGlzLmRlcGxveW1lbnRJZH1gKTtcbiAgfVxuXG4gIGRvR2V0SW5wdXREZXNjcmlwdG9yKHBhdGggPSAnaW5wdXRfZGVzY3JpcHRvci55YW1sJykge1xuICAgIGNvbnNvbGUubG9nKHtwYXRofSlcbiAgICByZXR1cm4gdGhpcy5kb0dldEZpbGVzVHJlZSh0aGlzLmJsdWVwcmludElkKS50aGVuKGZpbGVzID0+IHtcbiAgICAgIGxldCBmaWxlID0gZmlsZXMuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZmluZChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHBhdGgpO1xuICAgICAgaWYoZmlsZSl7XG4gICAgICAgIHJldHVybiB0aGlzLmRvR2V0RmlsZUNvbnRlbnQoZmlsZS5rZXkpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgJHtwYXRofSBub3QgZm91bmQuYCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRvR2V0Qmx1ZXByaW50SWQoZGVwbG95bWVudElkKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9HZXQoYC9kZXBsb3ltZW50cy8ke2RlcGxveW1lbnRJZH0/X2luY2x1ZGU9aWQsYmx1ZXByaW50X2lkYCk7XG4gIH1cblxuICBkb0dldEZpbGVzVHJlZShibHVlcHJpbnRJZCkge1xuICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0SW50ZXJuYWwoKS5kb0dldChgL3NvdXJjZS9icm93c2UvJHtibHVlcHJpbnRJZH0vYXJjaGl2ZWApO1xuICB9XG5cbiAgZG9HZXRGaWxlQ29udGVudChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRJbnRlcm5hbCgpLmRvR2V0KCcvc291cmNlL2Jyb3dzZS9maWxlJywgeyBwYXRoIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgVGFtZXIgb24gMTkvMTAvMjAxNy5cbiAqL1xuaW1wb3J0IFlBTUwgZnJvbSAnLi91dGlscy9ZQU1MJztcbmltcG9ydCBiYXNlMTB0bzY0IGZyb20gJy4vdXRpbHMvYmFzZTEwdG82NCc7XG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RCb3gnO1xuXG4vKipcbiAqIEBjbGFzcyBMaXN0XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTGlzdC5cbiAgICogQHBhcmFtIHthbnl9IHByb3BzIFxuICAgKiBAcGFyYW0ge2FueX0gY29udGV4dCBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZ2V0Q3VycmVudFVzZXJuYW1lKCk7XG4gICAgY29uc3QgYmx1ZXByaW50ID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5ibHVlcHJpbnRJZDtcbiAgICBjb25zdCB0aW1lNjQgPSBiYXNlMTB0bzY0KE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApKTtcbiAgICAvLyBjb25zdCB0aW1lNjQgPSBidG9hKE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApKTtcbiAgICAvLyBjb25zdCB0aW1lNjQgPSBidG9hKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMDAwMCkpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmlzdWFsX2RhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBkZXBsb3ltZW50VGl0bGU6IGBhZG1pbiBkZXBsb3ltZW50ICR7dXNlcn1fJHtibHVlcHJpbnR9XyR7dGltZTY0fWAsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHlhbWxFcnJvcjogbnVsbCxcbiAgICAgIGRldmVsb3BtZW50OiBudWxsXG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldmVsb3BtZW50OiBkYXRhfSlcbiAgICB0aGlzLnJlbmRlckpTT04yWUFNTChkYXRhKTtcbiAgICAvLyBkYXRhID0gWUFNTC5wYXJzZShkYXRhKTtcbiAgICAvLyB0aGlzLnByZXBhcmVEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHJlcGFyZURhdGEoZGF0YSkge1xuICAgIFxuICAgIC8vIGV4dHJhY3QgYXZhaWxhYmxlIGlucHV0cyB0byB0aGUgbG9vcFxuICAgIGNvbnN0IHZpc3VhbF9kYXRhID0gZGF0YS5maWx0ZXIoZSA9PiBbXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICd0b2dnbGUnLFxuICAgICAgJ3JhZGlvJyxcbiAgICAgICdkcm9wZG93bicsXG4gICAgICAncmFuZ2UnLFxuICAgICAgJ21lc3NhZ2UnLFxuICAgICAgJ3NlbGVjdGJveCdcbiAgICBdLmluY2x1ZGVzKGUudHlwZSkpO1xuXG4gICAgY29uc29sZS5sb2coeyB2aXN1YWxfZGF0YSB9KVxuXG4gICAgLy8gc29ydCBpdGVtcyBieSBwb3NpdGlvblxuICAgIHZpc3VhbF9kYXRhLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRhdGFcbiAgICBsZXQgZm9ybSA9IHt9O1xuICAgIHZpc3VhbF9kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCAmJiBpdGVtLnR5cGUgIT09ICdidXR0b24nKSB7XG4gICAgICAgIGZvcm1baXRlbS5pZF0gPSBpdGVtLnBhcmFtcy5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0sIHZpc3VhbF9kYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGlkLCB2YWx1ZSkgPT4ge1xuICAgIC8vIFRPRE86IGJlZm9yZSBzdWJtaXQgY2hlY2sgZm9yIGFycmF5cyB0byBqb2luIHRoZW1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybTogey4uLnRoaXMuc3RhdGUuZm9ybSwgW2lkXTogdmFsdWV9IH0pO1xuICAgIGNvbnNvbGUubG9nKCdmb3JtIHN0YXRlJywgdGhpcy5zdGF0ZS5mb3JtKTtcbiAgfVxuXG5fY3JlYXRlRGVwbG95bWVudCA9ICgpID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9O1xuICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZvcm0pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gVE9ETzogYWRkIG1vcmUgdmFsaWRhdGlvbnMgbWV0aG9kcywgYnkgZGVmYXVsdCBub3cgaXMgcmVxdWlyZWRcbiAgICBpZiAoXy5pc05pbCh0aGlzLnN0YXRlLmZvcm1baXRlbV0pIHx8IHRoaXMuc3RhdGUuZm9ybVtpdGVtXSA9PT0gJycpIHtcbiAgICAgIGVycm9yc1tpdGVtXSA9ICdyZXF1aXJlZCc7XG4gICAgfVxuICB9KTtcbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoICE9PSAwKSB7XG4gICAgZXJyb3JzLmVycm9yID0gJ1BsZWFzZSBjaGVjayBlcnJvcnMgZ2l2ZW4gYmVsb3cnO1xuICB9XG4gIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgLy8gbGV0IHNlbGVjdGVkRGVwbG95bWVudCA9IHRvb2xib3guZ2V0Q29udGV4dCgpLmdldFZhbHVlKCdkZXBsb3ltZW50SWQnKTtcbiAgICAvLyB2YXIgYmx1ZXByaW50SWQgPSB0b29sYm94LmdldENvbnRleHQoKS5nZXRWYWx1ZSgnYmx1ZXByaW50SWQnKTtcblxuICAgIGNvbnN0IGJsdWVwcmludCA9IHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb24uYmx1ZXByaW50SWQ7XG4gICAgLy8gY29uc3QgZGVwbG95bWVudCA9IHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb24uZGVwbG95bWVudElkO1xuICAgIGNvbnN0IGRlcGxveW1lbnQgPSB0aGlzLnN0YXRlLmRlcGxveW1lbnRUaXRsZTsvL25ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBwcml2YXRlUmVzb3VyY2UgPSBmYWxzZTtcbiAgICBjb25zdCBza2lwUGx1Z2luc1ZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBjb25zdCBpbnB1dHMgPSB7XG4gICAgICAgICdibHVlcHJpbnRfaWQnOiAnc2VydmljZScsXG4gICAgICAgICdkZXBsb3ltZW50X2lucHV0cyc6IHRoaXMuc3RhdGUuZm9ybSxcbiAgICAgICAgJ2RlcGxveW1lbnRfaWQnOiAncmVxdWVzdF90b19hZG1pbl8nICsgZGVwbG95bWVudFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIHZhciBhY3Rpb25zID0gbmV3IFN0YWdlLkNvbW1vbi5CbHVlcHJpbnRBY3Rpb25zKHRoaXMucHJvcHMudG9vbGJveCk7XG4gICAgYWN0aW9ucy5kb0RlcGxveSh7IGlkOiBibHVlcHJpbnQgfSwgZGVwbG95bWVudCwgaW5wdXRzLCBwcml2YXRlUmVzb3VyY2UsIHNraXBQbHVnaW5zVmFsaWRhdGlvbilcbiAgICAgIC50aGVuKCgvKmRlcGxveW1lbnQqLykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yczoge30sIHN1Y2Nlc3M6ICdZb3VyIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIGFuZCBhd2FpdGluZyBhcHByb3ZhbCcgfSk7XG4gICAgICAgIC8vIHRoaXMucHJvcHMub25IaWRlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcnM6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5yZW5kZXJKU09OMllBTUwodmFsdWUpe1xuICB0aGlzLnNldFN0YXRlKHsgeWFtbEVycm9yOiBudWxsIH0pXG4gIHRyeSB7XG4gICAgbGV0IGRhdGEgPSBZQU1MLnBhcnNlKHZhbHVlIHx8IHRoaXMuc3RhdGUuZGV2ZWxvcG1lbnQpO1xuICAgIHRoaXMucHJlcGFyZURhdGEoZGF0YSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7eWFtbEVycm9yOiBlLm1lc3NhZ2V9KVxuICB9XG59XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgUmVhY3QgUmVuZGVyZXJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbnJlbmRlcigpIHtcbiAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgIHJldHVybiA8U3RhZ2UuQmFzaWMuTG9hZGluZyAvPjtcbiAgfVxuXG4gIGNvbnN0IHtCdXR0b24sIElucHV0LCBDaGVja2JveCwgRHJvcGRvd24sIE1lc3NhZ2UsIENhcmR9ID0gU3RhZ2UuQmFzaWM7XG5cbiAgLyoqXG4gICAqIGNoYXJ0cyB2aXN1YWwgb3V0cHV0XG4gICAqL1xuICBjb25zdCB2aXN1YWxzID0gdGhpcy5zdGF0ZS52aXN1YWxfZGF0YS5tYXAoKGl0ZW0sIGlkeCkgPT4gPGRpdiBjbGFzc05hbWU9J2NoYXJ0LWJveCcga2V5PXtpZHh9IHN0eWxlPXt7IGZsZXhCYXNpczogKGl0ZW0uZmxleCB8fCAzMykgKyAnJScgfX0+XG5cbiAgICB7aXRlbS50eXBlID09PSAnYnV0dG9uJyAmJiA8QnV0dG9uXG4gICAgICBmbHVpZD17IWl0ZW0ucGFyYW1zLmNpcmN1bGFyfVxuICAgICAgY29sb3I9e2l0ZW0ucGFyYW1zLmNvbG9yfVxuICAgICAgY2lyY3VsYXI9e2l0ZW0ucGFyYW1zLmNpcmN1bGFyfVxuICAgICAgaWNvbj17aXRlbS5wYXJhbXMubGFiZWwgPyBmYWxzZSA6IGl0ZW0ucGFyYW1zLmljb259XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGl0ZW0ucGFyYW1zLmFjdGlvbiA9PT0gJ2NyZWF0ZURlcGxveW1lbnQnICYmIHRoaXMuX2NyZWF0ZURlcGxveW1lbnQuY2FsbCh0aGlzKTtcbiAgICAgIH0gfVxuICAgICAgPlxuICAgICAge2l0ZW0ucGFyYW1zLmxhYmVsfVxuICAgIDwvQnV0dG9uPn1cblxuICAgIHtpdGVtLnR5cGUgPT09ICdpbnB1dCcgJiYgPElucHV0XG4gICAgICBmbHVpZFxuICAgICAgdHlwZT17aXRlbS5wYXJhbXMuaXNQYXNzd29yZCA/ICdwYXNzd29yZCcgOiAndGV4dCd9XG4gICAgICBsYWJlbD17aXRlbS5wYXJhbXMubGFiZWx9XG4gICAgICBwbGFjZWhvbGRlcj17aXRlbS5wYXJhbXMucGxhY2Vob2xkZXJ9XG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdfVxuICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBvcHRpb25zLnZhbHVlKX1cbiAgICAgIC8+fVxuXG4gICAge2l0ZW0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiA8Q2hlY2tib3hcbiAgICAgIGxhYmVsPXtpdGVtLnBhcmFtcy5sYWJlbH1cbiAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy5jaGVja2VkKX1cbiAgICAgIC8+fVxuXG4gICAge2l0ZW0udHlwZSA9PT0gJ3RvZ2dsZScgJiYgPENoZWNrYm94XG4gICAgICB0b2dnbGVcbiAgICAgIGxhYmVsPXtpdGVtLnBhcmFtcy5sYWJlbH1cbiAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy5jaGVja2VkKX1cbiAgICAgIC8+fVxuXG4gICAge2l0ZW0udHlwZSA9PT0gJ3JhZGlvJyAmJiA8ZGl2PlxuICAgICAgPGI+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvYj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICB7aXRlbS5wYXJhbXMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgcmFkaW9cbiAgICAgICAgICBuYW1lPXtpdGVtLmlkfVxuICAgICAgICAgIGxhYmVsPXtvcHRpb24udGV4dH1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2Pil9XG4gICAgPC9kaXY+fVxuXG4gICAge2l0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJyAmJiA8ZGl2PlxuICAgICAgPGI+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvYj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgZmx1aWRcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgIG11bHRpcGxlPXtpdGVtLnBhcmFtcy5tdWx0aXBsZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGFyYW1zLnBsYWNlaG9sZGVyfVxuICAgICAgICBvcHRpb25zPXtpdGVtLnBhcmFtcy5vcHRpb25zfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdfVxuICAgICAgICBvbkNoYW5nZT17KHByb3h5LCBvcHRpb25zKSA9PiB0aGlzLmhhbmRsZUNoYW5nZS5jYWxsKHRoaXMsIGl0ZW0uaWQsIG9wdGlvbnMudmFsdWUpfVxuICAgICAgICAvPlxuICAgIDwvZGl2Pn1cblxuICAgIHtpdGVtLnR5cGUgPT09ICdyYW5nZScgJiYgPGRpdj5cbiAgICAgIDxiPntpdGVtLnBhcmFtcy5sYWJlbH08L2I+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIHN0ZXA9e2l0ZW0ucGFyYW1zLnN0ZXAgfHwgMX1cbiAgICAgICAgbWluPXtpdGVtLnBhcmFtcy5taW4gfHwgMH1cbiAgICAgICAgbWF4PXtpdGVtLnBhcmFtcy5tYXggfHwgMTAwfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdfVxuICAgICAgICBvbkNoYW5nZT17cHJveHkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBwcm94eS50YXJnZXQudmFsdWUpfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgPC9kaXY+fVxuXG4gICAge2l0ZW0udHlwZSA9PT0gJ21lc3NhZ2UnICYmIDxNZXNzYWdlXG4gICAgICBjb2xvcj17aXRlbS5wYXJhbXMuY29sb3J9XG4gICAgICA+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvTWVzc2FnZT59XG5cbiAgICB7aXRlbS50eXBlID09PSAnc2VsZWN0Ym94JyAmJiA8ZGl2PlxuICAgICAgPGI+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvYj5cbiAgICAgIDxiciAvPjxTZWxlY3RCb3hcbiAgICAgICAgc3R5bGU9e2l0ZW0ucGFyYW1zLnN0eWxlfVxuICAgICAgICB0ZW1wbGF0ZT17aXRlbS5wYXJhbXMudGVtcGxhdGV9XG4gICAgICAgIG9wdGlvbnM9e2l0ZW0ucGFyYW1zLm9wdGlvbnN9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZS5jYWxsKHRoaXMsIGl0ZW0uaWQsIHZhbHVlKX1cbiAgICAgICAgLz5cbiAgICA8L2Rpdj59XG5cbiAgICB7XG4gICAgICB0aGlzLnN0YXRlLmVycm9yc1tpdGVtLmlkXSAmJlxuICAgICAgdGhpcy5zdGF0ZS5lcnJvcnNbaXRlbS5pZF0uc3BsaXQoJywnKS5pbmNsdWRlcygncmVxdWlyZWQnKSAmJlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycic+UGxlYXNlIEZpbGwge2l0ZW0ucGFyYW1zLmxhYmVsIHx8ICdGaWVsZCd9IGl0cyBSZXF1aXJlZDwvZGl2PlxuICAgIH1cblxuICA8L2Rpdj4pO1xuXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuZXJyb3JzLmVycm9yICYmIDxNZXNzYWdlIGNvbG9yPVwicmVkXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiB7Li4udGhpcy5zdGF0ZS5lcnJvcnMsIGVycm9yOiBudWxsfSB9KX0gPlxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZXJyb3J9XG4gICAgICA8L01lc3NhZ2U+O1xuICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuc3RhdGUuc3VjY2VzcyAmJiA8TWVzc2FnZSBjb2xvcj1cImdyZWVuXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc3VjY2VzczogbnVsbCB9KX0gPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zdWNjZXNzfVxuICAgICAgPC9NZXNzYWdlPjtcbiAgY29uc3QgeWFtbEVycm9yID0gdGhpcy5zdGF0ZS55YW1sRXJyb3IgJiYgPE1lc3NhZ2UgY29sb3I9XCJ5ZWxsb3dcIiBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB5YW1sRXJyb3I6IG51bGwgfSl9ID5cbiAgICAgIHt0aGlzLnN0YXRlLnlhbWxFcnJvcn1cbiAgICA8L01lc3NhZ2U+O1xuICAgICAgXG4gICAgY29uc3QgYWxsb3dOYW1lRWRpdCA9IHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb24uYWxsb3dOYW1lRWRpdDtcbiAgICBjb25zdCBkZXZNb2RlID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5kZXZNb2RlO1xuICAgIFxuICAgIGNvbnNvbGUubG9nXG4gIHJldHVybiA8ZGl2PlxuICAgIHtlcnJvck1lc3NhZ2V9XG4gICAge3N1Y2Nlc3NNZXNzYWdlfVxuXG4gICAge2Rldk1vZGUgJiYgXG4gICAgICA8Q2FyZCBmbHVpZD5cbiAgICAgICAgPENhcmQuQ29udGVudCBoZWFkZXI9J0RldmVsb3BtZW50IE1vZGUgKHlvdSBjYW4gZGVhY3RpdmF0ZSBpdCBmcm9tIHdpZGdldCBzZXR0aW5ncyknIC8+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAge3lhbWxFcnJvcn1cbiAgICAgICAgICA8dGV4dEFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWUFNTCBEZXZlbG9wbWVudCBNb2RlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRldmVsb3BtZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldmVsb3BtZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcyMDBweCcsIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UsbW9ub3NwYWNlJywgZm9udFNpemU6ICcxZW0nIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVuZGVySlNPTjJZQU1MLmNhbGwodGhpcyl9PlJlbmRlcjwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgIDwvQ2FyZD59XG5cbiAgICB7IXRoaXMuc3RhdGUuc3VjY2VzcyAmJiBhbGxvd05hbWVFZGl0ICYmIDxJbnB1dFxuICAgIGZsdWlkXG4gICAgdHlwZT17J3RleHQnfVxuICAgIGxhYmVsPVwiRGVwbG95bWVudCBUaXRsZVwiXG4gICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgRW50ZXIgWW91ciBEZXBsb3ltZW50IFRpdGxlLCBzaG91bGQgYmUgdW5pcXVlIG5hbWVcIlxuICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlcGxveW1lbnRUaXRsZX1cbiAgICBvbkNoYW5nZT17KHByb3h5LCBvcHRpb25zKSA9PiB0aGlzLnNldFN0YXRlKHtkZXBsb3ltZW50VGl0bGU6IG9wdGlvbnMudmFsdWV9KX1cbiAgICAvPn1cblxuICA8ZGl2IGNsYXNzTmFtZT0nZGVwbG95bWVudC12aXN1YWwtY3JlYXRpb24nPlxuICB7IXRoaXMuc3RhdGUuc3VjY2VzcyAmJiB2aXN1YWxzfVxuICA8L2Rpdj5cbjwvZGl2Pjtcbn1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBUYW1lciBvbiAxOS8xMC8yMDE3LlxuICovXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4uL3V0aWxzL211c3RhY2hlJztcblxuXG4vKipcbiAqIEBjbGFzcyBMaXN0XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMaXN0LlxuICAgKiBAcGFyYW0ge2FueX0gcHJvcHMgXG4gICAqIEBwYXJhbSB7YW55fSBjb250ZXh0IFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1EYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICAvKlxuICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgfCBSZWFjdCBSZW5kZXJlclxuICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7b3B0aW9ucywgdGVtcGxhdGUsIG9uQ2hhbmdlLCB2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3NlbGVjdGJveC1zdHlsZScrKHN0eWxlIHx8IDEpfT5cbiAgICAgIHtvcHRpb25zLm1hcCgoaXRlbSwgaWR4KSA9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtbJ2l0ZW0nLCAoaXRlbS52YWx1ZSA9PT0gdmFsdWUgJiYgJ2FjdGl2ZScpXS5qb2luKCcgJyl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaXRlbS52YWx1ZSAhPT0gdmFsdWUgJiYgb25DaGFuZ2UoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBSZW5kZXIodGVtcGxhdGUsIGl0ZW0pIH19XG4gICAgICAgICAgLz4pfVxuICAgIDwvZGl2PjtcbiAgfVxufVxuIiwiXG52YXIgWWFtbCA9IHJlcXVpcmUoJy4vbGliL1lhbWwnKTtcbm1vZHVsZS5leHBvcnRzID0gWWFtbDtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgRHVtcGVyLCBJbmxpbmUsIFV0aWxzO1xuXG5VdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcblxuSW5saW5lID0gcmVxdWlyZSgnLi9JbmxpbmUnKTtcblxuRHVtcGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEdW1wZXIoKSB7fVxuXG4gIER1bXBlci5pbmRlbnRhdGlvbiA9IDQ7XG5cbiAgRHVtcGVyLnByb3RvdHlwZS5kdW1wID0gZnVuY3Rpb24oaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSB7XG4gICAgdmFyIGksIGtleSwgbGVuLCBvdXRwdXQsIHByZWZpeCwgdmFsdWUsIHdpbGxCZUlubGluZWQ7XG4gICAgaWYgKGlubGluZSA9PSBudWxsKSB7XG4gICAgICBpbmxpbmUgPSAwO1xuICAgIH1cbiAgICBpZiAoaW5kZW50ID09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IDA7XG4gICAgfVxuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdEVuY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RW5jb2RlciA9IG51bGw7XG4gICAgfVxuICAgIG91dHB1dCA9ICcnO1xuICAgIHByZWZpeCA9IChpbmRlbnQgPyBVdGlscy5zdHJSZXBlYXQoJyAnLCBpbmRlbnQpIDogJycpO1xuICAgIGlmIChpbmxpbmUgPD0gMCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnIHx8IGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fCBVdGlscy5pc0VtcHR5KGlucHV0KSkge1xuICAgICAgb3V0cHV0ICs9IHByZWZpeCArIElubGluZS5kdW1wKGlucHV0LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YWx1ZSA9IGlucHV0W2ldO1xuICAgICAgICAgIHdpbGxCZUlubGluZWQgPSBpbmxpbmUgLSAxIDw9IDAgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCBVdGlscy5pc0VtcHR5KHZhbHVlKTtcbiAgICAgICAgICBvdXRwdXQgKz0gcHJlZml4ICsgJy0nICsgKHdpbGxCZUlubGluZWQgPyAnICcgOiBcIlxcblwiKSArIHRoaXMuZHVtcCh2YWx1ZSwgaW5saW5lIC0gMSwgKHdpbGxCZUlubGluZWQgPyAwIDogaW5kZW50ICsgdGhpcy5pbmRlbnRhdGlvbiksIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpICsgKHdpbGxCZUlubGluZWQgPyBcIlxcblwiIDogJycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGtleSBpbiBpbnB1dCkge1xuICAgICAgICAgIHZhbHVlID0gaW5wdXRba2V5XTtcbiAgICAgICAgICB3aWxsQmVJbmxpbmVkID0gaW5saW5lIC0gMSA8PSAwIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgVXRpbHMuaXNFbXB0eSh2YWx1ZSk7XG4gICAgICAgICAgb3V0cHV0ICs9IHByZWZpeCArIElubGluZS5kdW1wKGtleSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2RlcikgKyAnOicgKyAod2lsbEJlSW5saW5lZCA/ICcgJyA6IFwiXFxuXCIpICsgdGhpcy5kdW1wKHZhbHVlLCBpbmxpbmUgLSAxLCAod2lsbEJlSW5saW5lZCA/IDAgOiBpbmRlbnQgKyB0aGlzLmluZGVudGF0aW9uKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2RlcikgKyAod2lsbEJlSW5saW5lZCA/IFwiXFxuXCIgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gRHVtcGVyO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1bXBlcjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgRXNjYXBlciwgUGF0dGVybjtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5Fc2NhcGVyID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY2g7XG5cbiAgZnVuY3Rpb24gRXNjYXBlcigpIHt9XG5cbiAgRXNjYXBlci5MSVNUX0VTQ0FQRUVTID0gWydcXFxcJywgJ1xcXFxcXFxcJywgJ1xcXFxcIicsICdcIicsIFwiXFx4MDBcIiwgXCJcXHgwMVwiLCBcIlxceDAyXCIsIFwiXFx4MDNcIiwgXCJcXHgwNFwiLCBcIlxceDA1XCIsIFwiXFx4MDZcIiwgXCJcXHgwN1wiLCBcIlxceDA4XCIsIFwiXFx4MDlcIiwgXCJcXHgwYVwiLCBcIlxceDBiXCIsIFwiXFx4MGNcIiwgXCJcXHgwZFwiLCBcIlxceDBlXCIsIFwiXFx4MGZcIiwgXCJcXHgxMFwiLCBcIlxceDExXCIsIFwiXFx4MTJcIiwgXCJcXHgxM1wiLCBcIlxceDE0XCIsIFwiXFx4MTVcIiwgXCJcXHgxNlwiLCBcIlxceDE3XCIsIFwiXFx4MThcIiwgXCJcXHgxOVwiLCBcIlxceDFhXCIsIFwiXFx4MWJcIiwgXCJcXHgxY1wiLCBcIlxceDFkXCIsIFwiXFx4MWVcIiwgXCJcXHgxZlwiLCAoY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKSgweDAwODUpLCBjaCgweDAwQTApLCBjaCgweDIwMjgpLCBjaCgweDIwMjkpXTtcblxuICBFc2NhcGVyLkxJU1RfRVNDQVBFRCA9IFsnXFxcXFxcXFwnLCAnXFxcXFwiJywgJ1xcXFxcIicsICdcXFxcXCInLCBcIlxcXFwwXCIsIFwiXFxcXHgwMVwiLCBcIlxcXFx4MDJcIiwgXCJcXFxceDAzXCIsIFwiXFxcXHgwNFwiLCBcIlxcXFx4MDVcIiwgXCJcXFxceDA2XCIsIFwiXFxcXGFcIiwgXCJcXFxcYlwiLCBcIlxcXFx0XCIsIFwiXFxcXG5cIiwgXCJcXFxcdlwiLCBcIlxcXFxmXCIsIFwiXFxcXHJcIiwgXCJcXFxceDBlXCIsIFwiXFxcXHgwZlwiLCBcIlxcXFx4MTBcIiwgXCJcXFxceDExXCIsIFwiXFxcXHgxMlwiLCBcIlxcXFx4MTNcIiwgXCJcXFxceDE0XCIsIFwiXFxcXHgxNVwiLCBcIlxcXFx4MTZcIiwgXCJcXFxceDE3XCIsIFwiXFxcXHgxOFwiLCBcIlxcXFx4MTlcIiwgXCJcXFxceDFhXCIsIFwiXFxcXGVcIiwgXCJcXFxceDFjXCIsIFwiXFxcXHgxZFwiLCBcIlxcXFx4MWVcIiwgXCJcXFxceDFmXCIsIFwiXFxcXE5cIiwgXCJcXFxcX1wiLCBcIlxcXFxMXCIsIFwiXFxcXFBcIl07XG5cbiAgRXNjYXBlci5NQVBQSU5HX0VTQ0FQRUVTX1RPX0VTQ0FQRUQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGosIG1hcHBpbmcsIHJlZjtcbiAgICBtYXBwaW5nID0ge307XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IEVzY2FwZXIuTElTVF9FU0NBUEVFUy5sZW5ndGg7IDAgPD0gcmVmID8gaiA8IHJlZiA6IGogPiByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgbWFwcGluZ1tFc2NhcGVyLkxJU1RfRVNDQVBFRVNbaV1dID0gRXNjYXBlci5MSVNUX0VTQ0FQRURbaV07XG4gICAgfVxuICAgIHJldHVybiBtYXBwaW5nO1xuICB9KSgpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9DSEFSQUNURVJTX1RPX0VTQ0FQRSA9IG5ldyBQYXR0ZXJuKCdbXFxcXHgwMC1cXFxceDFmXXxcXHhjMlxceDg1fFxceGMyXFx4YTB8XFx4ZTJcXHg4MFxceGE4fFxceGUyXFx4ODBcXHhhOScpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9NQVBQSU5HX0VTQ0FQRUVTID0gbmV3IFBhdHRlcm4oRXNjYXBlci5MSVNUX0VTQ0FQRUVTLmpvaW4oJ3wnKS5zcGxpdCgnXFxcXCcpLmpvaW4oJ1xcXFxcXFxcJykpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9TSU5HTEVfUVVPVElORyA9IG5ldyBQYXR0ZXJuKCdbXFxcXHNcXCdcIjp7fVtcXFxcXSwmKiM/XXxeWy0/fDw+PSElQGBdJyk7XG5cbiAgRXNjYXBlci5yZXF1aXJlc0RvdWJsZVF1b3RpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLlBBVFRFUk5fQ0hBUkFDVEVSU19UT19FU0NBUEUudGVzdCh2YWx1ZSk7XG4gIH07XG5cbiAgRXNjYXBlci5lc2NhcGVXaXRoRG91YmxlUXVvdGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHJlc3VsdCA9IHRoaXMuUEFUVEVSTl9NQVBQSU5HX0VTQ0FQRUVTLnJlcGxhY2UodmFsdWUsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gX3RoaXMuTUFQUElOR19FU0NBUEVFU19UT19FU0NBUEVEW3N0cl07XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJ1wiJyArIHJlc3VsdCArICdcIic7XG4gIH07XG5cbiAgRXNjYXBlci5yZXF1aXJlc1NpbmdsZVF1b3RpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLlBBVFRFUk5fU0lOR0xFX1FVT1RJTkcudGVzdCh2YWx1ZSk7XG4gIH07XG5cbiAgRXNjYXBlci5lc2NhcGVXaXRoU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIikgKyBcIidcIjtcbiAgfTtcblxuICByZXR1cm4gRXNjYXBlcjtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFc2NhcGVyO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wRXhjZXB0aW9uLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuRHVtcEV4Y2VwdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEdW1wRXhjZXB0aW9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEdW1wRXhjZXB0aW9uKG1lc3NhZ2UsIHBhcnNlZExpbmUsIHNuaXBwZXQpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucGFyc2VkTGluZSA9IHBhcnNlZExpbmU7XG4gICAgdGhpcy5zbmlwcGV0ID0gc25pcHBldDtcbiAgfVxuXG4gIER1bXBFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8RHVtcEV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZSArICcgKGxpbmUgJyArIHRoaXMucGFyc2VkTGluZSArICc6IFxcJycgKyB0aGlzLnNuaXBwZXQgKyAnXFwnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPER1bXBFeGNlcHRpb24+ICcgKyB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEdW1wRXhjZXB0aW9uO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gRHVtcEV4Y2VwdGlvbjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgUGFyc2VFeGNlcHRpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5QYXJzZUV4Y2VwdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChQYXJzZUV4Y2VwdGlvbiwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gUGFyc2VFeGNlcHRpb24obWVzc2FnZSwgcGFyc2VkTGluZSwgc25pcHBldCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5wYXJzZWRMaW5lID0gcGFyc2VkTGluZTtcbiAgICB0aGlzLnNuaXBwZXQgPSBzbmlwcGV0O1xuICB9XG5cbiAgUGFyc2VFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8UGFyc2VFeGNlcHRpb24+ICcgKyB0aGlzLm1lc3NhZ2UgKyAnIChsaW5lICcgKyB0aGlzLnBhcnNlZExpbmUgKyAnOiBcXCcnICsgdGhpcy5zbmlwcGV0ICsgJ1xcJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzxQYXJzZUV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlRXhjZXB0aW9uO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VFeGNlcHRpb247XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhcnNlTW9yZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cblBhcnNlTW9yZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChQYXJzZU1vcmUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFBhcnNlTW9yZShtZXNzYWdlLCBwYXJzZWRMaW5lLCBzbmlwcGV0KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnBhcnNlZExpbmUgPSBwYXJzZWRMaW5lO1xuICAgIHRoaXMuc25pcHBldCA9IHNuaXBwZXQ7XG4gIH1cblxuICBQYXJzZU1vcmUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8UGFyc2VNb3JlPiAnICsgdGhpcy5tZXNzYWdlICsgJyAobGluZSAnICsgdGhpcy5wYXJzZWRMaW5lICsgJzogXFwnJyArIHRoaXMuc25pcHBldCArICdcXCcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICc8UGFyc2VNb3JlPiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGFyc2VNb3JlO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VNb3JlO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wRXhjZXB0aW9uLCBFc2NhcGVyLCBJbmxpbmUsIFBhcnNlRXhjZXB0aW9uLCBQYXJzZU1vcmUsIFBhdHRlcm4sIFVuZXNjYXBlciwgVXRpbHMsXG4gIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5VbmVzY2FwZXIgPSByZXF1aXJlKCcuL1VuZXNjYXBlcicpO1xuXG5Fc2NhcGVyID0gcmVxdWlyZSgnLi9Fc2NhcGVyJyk7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5QYXJzZUV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlRXhjZXB0aW9uJyk7XG5cblBhcnNlTW9yZSA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlTW9yZScpO1xuXG5EdW1wRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vRHVtcEV4Y2VwdGlvbicpO1xuXG5JbmxpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIElubGluZSgpIHt9XG5cbiAgSW5saW5lLlJFR0VYX1FVT1RFRF9TVFJJTkcgPSAnKD86XCIoPzpbXlwiXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteXCJcXFxcXFxcXF0qKSopXCJ8XFwnKD86W15cXCddKig/OlxcJ1xcJ1teXFwnXSopKilcXCcpJztcblxuICBJbmxpbmUuUEFUVEVSTl9UUkFJTElOR19DT01NRU5UUyA9IG5ldyBQYXR0ZXJuKCdeXFxcXHMqIy4qJCcpO1xuXG4gIElubGluZS5QQVRURVJOX1FVT1RFRF9TQ0FMQVIgPSBuZXcgUGF0dGVybignXicgKyBJbmxpbmUuUkVHRVhfUVVPVEVEX1NUUklORyk7XG5cbiAgSW5saW5lLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIgPSBuZXcgUGF0dGVybignXigtfFxcXFwrKT9bMC05LF0rKFxcXFwuWzAtOV0rKT8kJyk7XG5cbiAgSW5saW5lLlBBVFRFUk5fU0NBTEFSX0JZX0RFTElNSVRFUlMgPSB7fTtcblxuICBJbmxpbmUuc2V0dGluZ3MgPSB7fTtcblxuICBJbmxpbmUuY29uZmlndXJlID0gZnVuY3Rpb24oZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAob2JqZWN0RGVjb2RlciA9PSBudWxsKSB7XG4gICAgICBvYmplY3REZWNvZGVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncy5leGNlcHRpb25PbkludmFsaWRUeXBlID0gZXhjZXB0aW9uT25JbnZhbGlkVHlwZTtcbiAgICB0aGlzLnNldHRpbmdzLm9iamVjdERlY29kZXIgPSBvYmplY3REZWNvZGVyO1xuICB9O1xuXG4gIElubGluZS5wYXJzZSA9IGZ1bmN0aW9uKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgdmFyIGNvbnRleHQsIHJlc3VsdDtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3REZWNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdERlY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBleGNlcHRpb25PbkludmFsaWRUeXBlO1xuICAgIHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlciA9IG9iamVjdERlY29kZXI7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFsdWUgPSBVdGlscy50cmltKHZhbHVlKTtcbiAgICBpZiAoMCA9PT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnRleHQgPSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlOiBleGNlcHRpb25PbkludmFsaWRUeXBlLFxuICAgICAgb2JqZWN0RGVjb2Rlcjogb2JqZWN0RGVjb2RlcixcbiAgICAgIGk6IDBcbiAgICB9O1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDApKSB7XG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVNlcXVlbmNlKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgKytjb250ZXh0Lmk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneyc6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VNYXBwaW5nKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgKytjb250ZXh0Lmk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVNjYWxhcih2YWx1ZSwgbnVsbCwgWydcIicsIFwiJ1wiXSwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLlBBVFRFUk5fVFJBSUxJTkdfQ09NTUVOVFMucmVwbGFjZSh2YWx1ZS5zbGljZShjb250ZXh0LmkpLCAnJykgIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1VuZXhwZWN0ZWQgY2hhcmFjdGVycyBuZWFyIFwiJyArIHZhbHVlLnNsaWNlKGNvbnRleHQuaSkgKyAnXCIuJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgSW5saW5lLmR1bXAgPSBmdW5jdGlvbih2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHZhciByZWYsIHJlc3VsdCwgdHlwZTtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RFbmNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdEVuY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKG9iamVjdEVuY29kZXIgIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQgPSBvYmplY3RFbmNvZGVyKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IChyZXN1bHQgIT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kdW1wT2JqZWN0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuICh2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNEaWdpdHModmFsdWUpKSB7XG4gICAgICByZXR1cm4gKHR5cGUgPT09ICdzdHJpbmcnID8gXCInXCIgKyB2YWx1ZSArIFwiJ1wiIDogU3RyaW5nKHBhcnNlSW50KHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNOdW1lcmljKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICh0eXBlID09PSAnc3RyaW5nJyA/IFwiJ1wiICsgdmFsdWUgKyBcIidcIiA6IFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAodmFsdWUgPT09IDJlMzA4ID8gJy5JbmYnIDogKHZhbHVlID09PSAtMmUzMDggPyAnLS5JbmYnIDogKGlzTmFOKHZhbHVlKSA/ICcuTmFOJyA6IHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAoRXNjYXBlci5yZXF1aXJlc0RvdWJsZVF1b3RpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gRXNjYXBlci5lc2NhcGVXaXRoRG91YmxlUXVvdGVzKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKEVzY2FwZXIucmVxdWlyZXNTaW5nbGVRdW90aW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIEVzY2FwZXIuZXNjYXBlV2l0aFNpbmdsZVF1b3Rlcyh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICgnJyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiAnXCJcIic7XG4gICAgfVxuICAgIGlmIChVdGlscy5QQVRURVJOX0RBVEUudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfVxuICAgIGlmICgocmVmID0gdmFsdWUudG9Mb3dlckNhc2UoKSkgPT09ICdudWxsJyB8fCByZWYgPT09ICd+JyB8fCByZWYgPT09ICd0cnVlJyB8fCByZWYgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBJbmxpbmUuZHVtcE9iamVjdCA9IGZ1bmN0aW9uKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RTdXBwb3J0KSB7XG4gICAgdmFyIGosIGtleSwgbGVuMSwgb3V0cHV0LCB2YWw7XG4gICAgaWYgKG9iamVjdFN1cHBvcnQgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0U3VwcG9ydCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBvdXRwdXQgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSB2YWx1ZS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgdmFsID0gdmFsdWVbal07XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZHVtcCh2YWwpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnWycgKyBvdXRwdXQuam9pbignLCAnKSArICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gW107XG4gICAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YWwgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmR1bXAoa2V5KSArICc6ICcgKyB0aGlzLmR1bXAodmFsKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3snICsgb3V0cHV0LmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuICB9O1xuXG4gIElubGluZS5wYXJzZVNjYWxhciA9IGZ1bmN0aW9uKHNjYWxhciwgZGVsaW1pdGVycywgc3RyaW5nRGVsaW1pdGVycywgY29udGV4dCwgZXZhbHVhdGUpIHtcbiAgICB2YXIgaSwgam9pbmVkRGVsaW1pdGVycywgbWF0Y2gsIG91dHB1dCwgcGF0dGVybiwgcmVmLCByZWYxLCBzdHJwb3MsIHRtcDtcbiAgICBpZiAoZGVsaW1pdGVycyA9PSBudWxsKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHN0cmluZ0RlbGltaXRlcnMgPT0gbnVsbCkge1xuICAgICAgc3RyaW5nRGVsaW1pdGVycyA9IFsnXCInLCBcIidcIl07XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZXZhbHVhdGUgPT0gbnVsbCkge1xuICAgICAgZXZhbHVhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlOiB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsXG4gICAgICAgIG9iamVjdERlY29kZXI6IHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlcixcbiAgICAgICAgaTogMFxuICAgICAgfTtcbiAgICB9XG4gICAgaSA9IGNvbnRleHQuaTtcbiAgICBpZiAocmVmID0gc2NhbGFyLmNoYXJBdChpKSwgaW5kZXhPZi5jYWxsKHN0cmluZ0RlbGltaXRlcnMsIHJlZikgPj0gMCkge1xuICAgICAgb3V0cHV0ID0gdGhpcy5wYXJzZVF1b3RlZFNjYWxhcihzY2FsYXIsIGNvbnRleHQpO1xuICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgIGlmIChkZWxpbWl0ZXJzICE9IG51bGwpIHtcbiAgICAgICAgdG1wID0gVXRpbHMubHRyaW0oc2NhbGFyLnNsaWNlKGkpLCAnICcpO1xuICAgICAgICBpZiAoIShyZWYxID0gdG1wLmNoYXJBdCgwKSwgaW5kZXhPZi5jYWxsKGRlbGltaXRlcnMsIHJlZjEpID49IDApKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdVbmV4cGVjdGVkIGNoYXJhY3RlcnMgKCcgKyBzY2FsYXIuc2xpY2UoaSkgKyAnKS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRlbGltaXRlcnMpIHtcbiAgICAgICAgb3V0cHV0ID0gc2NhbGFyLnNsaWNlKGkpO1xuICAgICAgICBpICs9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIHN0cnBvcyA9IG91dHB1dC5pbmRleE9mKCcgIycpO1xuICAgICAgICBpZiAoc3RycG9zICE9PSAtMSkge1xuICAgICAgICAgIG91dHB1dCA9IFV0aWxzLnJ0cmltKG91dHB1dC5zbGljZSgwLCBzdHJwb3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgam9pbmVkRGVsaW1pdGVycyA9IGRlbGltaXRlcnMuam9pbignfCcpO1xuICAgICAgICBwYXR0ZXJuID0gdGhpcy5QQVRURVJOX1NDQUxBUl9CWV9ERUxJTUlURVJTW2pvaW5lZERlbGltaXRlcnNdO1xuICAgICAgICBpZiAocGF0dGVybiA9PSBudWxsKSB7XG4gICAgICAgICAgcGF0dGVybiA9IG5ldyBQYXR0ZXJuKCdeKC4rPykoJyArIGpvaW5lZERlbGltaXRlcnMgKyAnKScpO1xuICAgICAgICAgIHRoaXMuUEFUVEVSTl9TQ0FMQVJfQllfREVMSU1JVEVSU1tqb2luZWREZWxpbWl0ZXJzXSA9IHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoID0gcGF0dGVybi5leGVjKHNjYWxhci5zbGljZShpKSkpIHtcbiAgICAgICAgICBvdXRwdXQgPSBtYXRjaFsxXTtcbiAgICAgICAgICBpICs9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdNYWxmb3JtZWQgaW5saW5lIFlBTUwgc3RyaW5nICgnICsgc2NhbGFyICsgJykuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBvdXRwdXQgPSB0aGlzLmV2YWx1YXRlU2NhbGFyKG91dHB1dCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuaSA9IGk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICBJbmxpbmUucGFyc2VRdW90ZWRTY2FsYXIgPSBmdW5jdGlvbihzY2FsYXIsIGNvbnRleHQpIHtcbiAgICB2YXIgaSwgbWF0Y2gsIG91dHB1dDtcbiAgICBpID0gY29udGV4dC5pO1xuICAgIGlmICghKG1hdGNoID0gdGhpcy5QQVRURVJOX1FVT1RFRF9TQ0FMQVIuZXhlYyhzY2FsYXIuc2xpY2UoaSkpKSkge1xuICAgICAgdGhyb3cgbmV3IFBhcnNlTW9yZSgnTWFsZm9ybWVkIGlubGluZSBZQU1MIHN0cmluZyAoJyArIHNjYWxhci5zbGljZShpKSArICcpLicpO1xuICAgIH1cbiAgICBvdXRwdXQgPSBtYXRjaFswXS5zdWJzdHIoMSwgbWF0Y2hbMF0ubGVuZ3RoIC0gMik7XG4gICAgaWYgKCdcIicgPT09IHNjYWxhci5jaGFyQXQoaSkpIHtcbiAgICAgIG91dHB1dCA9IFVuZXNjYXBlci51bmVzY2FwZURvdWJsZVF1b3RlZFN0cmluZyhvdXRwdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBVbmVzY2FwZXIudW5lc2NhcGVTaW5nbGVRdW90ZWRTdHJpbmcob3V0cHV0KTtcbiAgICB9XG4gICAgaSArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgY29udGV4dC5pID0gaTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIElubGluZS5wYXJzZVNlcXVlbmNlID0gZnVuY3Rpb24oc2VxdWVuY2UsIGNvbnRleHQpIHtcbiAgICB2YXIgZSwgaSwgaXNRdW90ZWQsIGxlbiwgb3V0cHV0LCByZWYsIHZhbHVlO1xuICAgIG91dHB1dCA9IFtdO1xuICAgIGxlbiA9IHNlcXVlbmNlLmxlbmd0aDtcbiAgICBpID0gY29udGV4dC5pO1xuICAgIGkgKz0gMTtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgIHN3aXRjaCAoc2VxdWVuY2UuY2hhckF0KGkpKSB7XG4gICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMucGFyc2VTZXF1ZW5jZShzZXF1ZW5jZSwgY29udGV4dCkpO1xuICAgICAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMucGFyc2VNYXBwaW5nKHNlcXVlbmNlLCBjb250ZXh0KSk7XG4gICAgICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlIFwiXFxuXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNRdW90ZWQgPSAoKHJlZiA9IHNlcXVlbmNlLmNoYXJBdChpKSkgPT09ICdcIicgfHwgcmVmID09PSBcIidcIik7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlU2NhbGFyKHNlcXVlbmNlLCBbJywnLCAnXSddLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0KTtcbiAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgIGlmICghaXNRdW90ZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAodmFsdWUuaW5kZXhPZignOiAnKSAhPT0gLTEgfHwgdmFsdWUuaW5kZXhPZihcIjpcXG5cIikgIT09IC0xKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlTWFwcGluZygneycgKyB2YWx1ZSArICd9Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAtLWk7XG4gICAgICB9XG4gICAgICArK2k7XG4gICAgfVxuICAgIHRocm93IG5ldyBQYXJzZU1vcmUoJ01hbGZvcm1lZCBpbmxpbmUgWUFNTCBzdHJpbmcgJyArIHNlcXVlbmNlKTtcbiAgfTtcblxuICBJbmxpbmUucGFyc2VNYXBwaW5nID0gZnVuY3Rpb24obWFwcGluZywgY29udGV4dCkge1xuICAgIHZhciBkb25lLCBpLCBrZXksIGxlbiwgb3V0cHV0LCBzaG91bGRDb250aW51ZVdoaWxlTG9vcCwgdmFsdWU7XG4gICAgb3V0cHV0ID0ge307XG4gICAgbGVuID0gbWFwcGluZy5sZW5ndGg7XG4gICAgaSA9IGNvbnRleHQuaTtcbiAgICBpICs9IDE7XG4gICAgc2hvdWxkQ29udGludWVXaGlsZUxvb3AgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgIHN3aXRjaCAobWFwcGluZy5jaGFyQXQoaSkpIHtcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgIGNhc2UgJywnOlxuICAgICAgICBjYXNlIFwiXFxuXCI6XG4gICAgICAgICAgKytpO1xuICAgICAgICAgIGNvbnRleHQuaSA9IGk7XG4gICAgICAgICAgc2hvdWxkQ29udGludWVXaGlsZUxvb3AgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZENvbnRpbnVlV2hpbGVMb29wKSB7XG4gICAgICAgIHNob3VsZENvbnRpbnVlV2hpbGVMb29wID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAga2V5ID0gdGhpcy5wYXJzZVNjYWxhcihtYXBwaW5nLCBbJzonLCAnICcsIFwiXFxuXCJdLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0LCBmYWxzZSk7XG4gICAgICBpID0gY29udGV4dC5pO1xuICAgICAgZG9uZSA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgICAgc3dpdGNoIChtYXBwaW5nLmNoYXJBdChpKSkge1xuICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlU2VxdWVuY2UobWFwcGluZywgY29udGV4dCk7XG4gICAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgICAgaWYgKG91dHB1dFtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VNYXBwaW5nKG1hcHBpbmcsIGNvbnRleHQpO1xuICAgICAgICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgICAgICAgIGlmIChvdXRwdXRba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJzonOlxuICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VTY2FsYXIobWFwcGluZywgWycsJywgJ30nXSwgWydcIicsIFwiJ1wiXSwgY29udGV4dCk7XG4gICAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgICAgaWYgKG91dHB1dFtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgUGFyc2VNb3JlKCdNYWxmb3JtZWQgaW5saW5lIFlBTUwgc3RyaW5nICcgKyBtYXBwaW5nKTtcbiAgfTtcblxuICBJbmxpbmUuZXZhbHVhdGVTY2FsYXIgPSBmdW5jdGlvbihzY2FsYXIsIGNvbnRleHQpIHtcbiAgICB2YXIgY2FzdCwgZGF0ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgZmlyc3RDaGFyLCBmaXJzdFNwYWNlLCBmaXJzdFdvcmQsIG9iamVjdERlY29kZXIsIHJhdywgc2NhbGFyTG93ZXIsIHN1YlZhbHVlLCB0cmltbWVkU2NhbGFyO1xuICAgIHNjYWxhciA9IFV0aWxzLnRyaW0oc2NhbGFyKTtcbiAgICBzY2FsYXJMb3dlciA9IHNjYWxhci50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAoc2NhbGFyTG93ZXIpIHtcbiAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgY2FzZSAnJzpcbiAgICAgIGNhc2UgJ34nOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSAnLmluZic6XG4gICAgICAgIHJldHVybiAyZTMwODtcbiAgICAgIGNhc2UgJy5uYW4nOlxuICAgICAgICByZXR1cm4gMC8wO1xuICAgICAgY2FzZSAnLS5pbmYnOlxuICAgICAgICByZXR1cm4gMmUzMDg7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmaXJzdENoYXIgPSBzY2FsYXJMb3dlci5jaGFyQXQoMCk7XG4gICAgICAgIHN3aXRjaCAoZmlyc3RDaGFyKSB7XG4gICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICBmaXJzdFNwYWNlID0gc2NhbGFyLmluZGV4T2YoJyAnKTtcbiAgICAgICAgICAgIGlmIChmaXJzdFNwYWNlID09PSAtMSkge1xuICAgICAgICAgICAgICBmaXJzdFdvcmQgPSBzY2FsYXJMb3dlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpcnN0V29yZCA9IHNjYWxhckxvd2VyLnNsaWNlKDAsIGZpcnN0U3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChmaXJzdFdvcmQpIHtcbiAgICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0U3BhY2UgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wYXJzZVNjYWxhcihzY2FsYXIuc2xpY2UoMikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIGNhc2UgJyFzdHInOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlscy5sdHJpbShzY2FsYXIuc2xpY2UoNCkpO1xuICAgICAgICAgICAgICBjYXNlICchIXN0cic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmx0cmltKHNjYWxhci5zbGljZSg1KSk7XG4gICAgICAgICAgICAgIGNhc2UgJyEhaW50JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wYXJzZVNjYWxhcihzY2FsYXIuc2xpY2UoNSkpKTtcbiAgICAgICAgICAgICAgY2FzZSAnISFib29sJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHMucGFyc2VCb29sZWFuKHRoaXMucGFyc2VTY2FsYXIoc2NhbGFyLnNsaWNlKDYpKSwgZmFsc2UpO1xuICAgICAgICAgICAgICBjYXNlICchIWZsb2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLnBhcnNlU2NhbGFyKHNjYWxhci5zbGljZSg3KSkpO1xuICAgICAgICAgICAgICBjYXNlICchIXRpbWVzdGFtcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLnN0cmluZ1RvRGF0ZShVdGlscy5sdHJpbShzY2FsYXIuc2xpY2UoMTEpKSk7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZTogdGhpcy5zZXR0aW5ncy5leGNlcHRpb25PbkludmFsaWRUeXBlLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3REZWNvZGVyOiB0aGlzLnNldHRpbmdzLm9iamVjdERlY29kZXIsXG4gICAgICAgICAgICAgICAgICAgIGk6IDBcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iamVjdERlY29kZXIgPSBjb250ZXh0Lm9iamVjdERlY29kZXIsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBjb250ZXh0LmV4Y2VwdGlvbk9uSW52YWxpZFR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdERlY29kZXIpIHtcbiAgICAgICAgICAgICAgICAgIHRyaW1tZWRTY2FsYXIgPSBVdGlscy5ydHJpbShzY2FsYXIpO1xuICAgICAgICAgICAgICAgICAgZmlyc3RTcGFjZSA9IHRyaW1tZWRTY2FsYXIuaW5kZXhPZignICcpO1xuICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0U3BhY2UgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3REZWNvZGVyKHRyaW1tZWRTY2FsYXIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSBVdGlscy5sdHJpbSh0cmltbWVkU2NhbGFyLnNsaWNlKGZpcnN0U3BhY2UgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHN1YlZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3REZWNvZGVyKHRyaW1tZWRTY2FsYXIuc2xpY2UoMCwgZmlyc3RTcGFjZSksIHN1YlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignQ3VzdG9tIG9iamVjdCBzdXBwb3J0IHdoZW4gcGFyc2luZyBhIFlBTUwgZmlsZSBoYXMgYmVlbiBkaXNhYmxlZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGlmICgnMHgnID09PSBzY2FsYXIuc2xpY2UoMCwgMikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmhleERlYyhzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc0RpZ2l0cyhzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBVdGlscy5vY3REZWMoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIGlmIChVdGlscy5pc0RpZ2l0cyhzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJhdyA9IHNjYWxhcjtcbiAgICAgICAgICAgICAgY2FzdCA9IHBhcnNlSW50KHJhdyk7XG4gICAgICAgICAgICAgIGlmIChyYXcgPT09IFN0cmluZyhjYXN0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXN0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5QQVRURVJOX1RIT1VTQU5EX05VTUVSSUNfU0NBTEFSLnRlc3Qoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIucmVwbGFjZSgnLCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NhbGFyO1xuICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzRGlnaXRzKHNjYWxhci5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgICAgaWYgKCcwJyA9PT0gc2NhbGFyLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtVXRpbHMub2N0RGVjKHNjYWxhci5zbGljZSgxKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmF3ID0gc2NhbGFyLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGNhc3QgPSBwYXJzZUludChyYXcpO1xuICAgICAgICAgICAgICAgIGlmIChyYXcgPT09IFN0cmluZyhjYXN0KSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC1jYXN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLXJhdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5QQVRURVJOX1RIT1VTQU5EX05VTUVSSUNfU0NBTEFSLnRlc3Qoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIucmVwbGFjZSgnLCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NhbGFyO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoZGF0ZSA9IFV0aWxzLnN0cmluZ1RvRGF0ZShzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWVyaWMoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIudGVzdChzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNjYWxhci5yZXBsYWNlKCcsJywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIElubGluZTtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmxpbmU7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIElubGluZSwgUGFyc2VFeGNlcHRpb24sIFBhcnNlTW9yZSwgUGFyc2VyLCBQYXR0ZXJuLCBVdGlscztcblxuSW5saW5lID0gcmVxdWlyZSgnLi9JbmxpbmUnKTtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5VdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcblxuUGFyc2VFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9QYXJzZUV4Y2VwdGlvbicpO1xuXG5QYXJzZU1vcmUgPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9QYXJzZU1vcmUnKTtcblxuUGFyc2VyID0gKGZ1bmN0aW9uKCkge1xuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRk9MREVEX1NDQUxBUl9BTEwgPSBuZXcgUGF0dGVybignXig/Oig/PHR5cGU+IVteXFxcXHw+XSopXFxcXHMrKT8oPzxzZXBhcmF0b3I+XFxcXHx8PikoPzxtb2RpZmllcnM+XFxcXCt8XFxcXC18XFxcXGQrfFxcXFwrXFxcXGQrfFxcXFwtXFxcXGQrfFxcXFxkK1xcXFwrfFxcXFxkK1xcXFwtKT8oPzxjb21tZW50cz4gKyMuKik/JCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9GT0xERURfU0NBTEFSX0VORCA9IG5ldyBQYXR0ZXJuKCcoPzxzZXBhcmF0b3I+XFxcXHx8PikoPzxtb2RpZmllcnM+XFxcXCt8XFxcXC18XFxcXGQrfFxcXFwrXFxcXGQrfFxcXFwtXFxcXGQrfFxcXFxkK1xcXFwrfFxcXFxkK1xcXFwtKT8oPzxjb21tZW50cz4gKyMuKik/JCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9TRVFVRU5DRV9JVEVNID0gbmV3IFBhdHRlcm4oJ15cXFxcLSgoPzxsZWFkc3BhY2VzPlxcXFxzKykoPzx2YWx1ZT4uKz8pKT9cXFxccyokJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0FOQ0hPUl9WQUxVRSA9IG5ldyBQYXR0ZXJuKCdeJig/PHJlZj5bXiBdKykgKig/PHZhbHVlPi4qKScpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9DT01QQUNUX05PVEFUSU9OID0gbmV3IFBhdHRlcm4oJ14oPzxrZXk+JyArIElubGluZS5SRUdFWF9RVU9URURfU1RSSU5HICsgJ3xbXiBcXCdcIlxcXFx7XFxcXFtdLio/KSAqXFxcXDooXFxcXHMrKD88dmFsdWU+Lis/KSk/XFxcXHMqJCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9NQVBQSU5HX0lURU0gPSBuZXcgUGF0dGVybignXig/PGtleT4nICsgSW5saW5lLlJFR0VYX1FVT1RFRF9TVFJJTkcgKyAnfFteIFxcJ1wiXFxcXFtcXFxce10uKj8pICpcXFxcOihcXFxccysoPzx2YWx1ZT4uKz8pKT9cXFxccyokJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0RFQ0lNQUwgPSBuZXcgUGF0dGVybignXFxcXGQrJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0lOREVOVF9TUEFDRVMgPSBuZXcgUGF0dGVybignXiArJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX1RSQUlMSU5HX0xJTkVTID0gbmV3IFBhdHRlcm4oJyhcXG4qKSQnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fWUFNTF9IRUFERVIgPSBuZXcgUGF0dGVybignXlxcXFwlWUFNTFs6IF1bXFxcXGRcXFxcLl0rLipcXG4nLCAnbScpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9MRUFESU5HX0NPTU1FTlRTID0gbmV3IFBhdHRlcm4oJ14oXFxcXCMuKj9cXG4pKycsICdtJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9TVEFSVCA9IG5ldyBQYXR0ZXJuKCdeXFxcXC1cXFxcLVxcXFwtLio/XFxuJywgJ20nKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRE9DVU1FTlRfTUFSS0VSX0VORCA9IG5ldyBQYXR0ZXJuKCdeXFxcXC5cXFxcLlxcXFwuXFxcXHMqJCcsICdtJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfQllfSU5ERU5UQVRJT04gPSB7fTtcblxuICBQYXJzZXIucHJvdG90eXBlLkNPTlRFWFRfTk9ORSA9IDA7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5DT05URVhUX1NFUVVFTkNFID0gMTtcblxuICBQYXJzZXIucHJvdG90eXBlLkNPTlRFWFRfTUFQUElORyA9IDI7XG5cbiAgZnVuY3Rpb24gUGFyc2VyKG9mZnNldCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0ICE9IG51bGwgPyBvZmZzZXQgOiAwO1xuICAgIHRoaXMubGluZXMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRMaW5lTmIgPSAtMTtcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gJyc7XG4gICAgdGhpcy5yZWZzID0ge307XG4gIH1cblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgYWxpYXMsIGFsbG93T3ZlcndyaXRlLCBibG9jaywgYywgY29udGV4dCwgZGF0YSwgZSwgZmlyc3QsIGksIGluZGVudCwgaXNSZWYsIGosIGssIGtleSwgbCwgbGFzdEtleSwgbGVuLCBsZW4xLCBsZW4yLCBsZW4zLCBsaW5lQ291bnQsIG0sIG1hdGNoZXMsIG1lcmdlTm9kZSwgbiwgbmFtZSwgcGFyc2VkLCBwYXJzZWRJdGVtLCBwYXJzZXIsIHJlZiwgcmVmMSwgcmVmMiwgcmVmTmFtZSwgcmVmVmFsdWUsIHZhbCwgdmFsdWVzO1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudExpbmVOYiA9IC0xO1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAnJztcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5jbGVhbnVwKHZhbHVlKS5zcGxpdChcIlxcblwiKTtcbiAgICBkYXRhID0gbnVsbDtcbiAgICBjb250ZXh0ID0gdGhpcy5DT05URVhUX05PTkU7XG4gICAgYWxsb3dPdmVyd3JpdGUgPSBmYWxzZTtcbiAgICB3aGlsZSAodGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICBpZiAodGhpcy5pc0N1cnJlbnRMaW5lRW1wdHkoKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChcIlxcdFwiID09PSB0aGlzLmN1cnJlbnRMaW5lWzBdKSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignQSBZQU1MIGZpbGUgY2Fubm90IGNvbnRhaW4gdGFicyBhcyBpbmRlbnRhdGlvbi4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlzUmVmID0gbWVyZ2VOb2RlID0gZmFsc2U7XG4gICAgICBpZiAodmFsdWVzID0gdGhpcy5QQVRURVJOX1NFUVVFTkNFX0lURU0uZXhlYyh0aGlzLmN1cnJlbnRMaW5lKSkge1xuICAgICAgICBpZiAodGhpcy5DT05URVhUX01BUFBJTkcgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1lvdSBjYW5ub3QgZGVmaW5lIGEgc2VxdWVuY2UgaXRlbSB3aGVuIGluIGEgbWFwcGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLkNPTlRFWFRfU0VRVUVOQ0U7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgJiYgKG1hdGNoZXMgPSB0aGlzLlBBVFRFUk5fQU5DSE9SX1ZBTFVFLmV4ZWModmFsdWVzLnZhbHVlKSkpIHtcbiAgICAgICAgICBpc1JlZiA9IG1hdGNoZXMucmVmO1xuICAgICAgICAgIHZhbHVlcy52YWx1ZSA9IG1hdGNoZXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodmFsdWVzLnZhbHVlICE9IG51bGwpIHx8ICcnID09PSBVdGlscy50cmltKHZhbHVlcy52YWx1ZSwgJyAnKSB8fCBVdGlscy5sdHJpbSh2YWx1ZXMudmFsdWUsICcgJykuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudExpbmVOYiA8IHRoaXMubGluZXMubGVuZ3RoIC0gMSAmJiAhdGhpcy5pc05leHRMaW5lVW5JbmRlbnRlZENvbGxlY3Rpb24oKSkge1xuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKGMpO1xuICAgICAgICAgICAgcGFyc2VyLnJlZnMgPSB0aGlzLnJlZnM7XG4gICAgICAgICAgICBkYXRhLnB1c2gocGFyc2VyLnBhcnNlKHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2sobnVsbCwgdHJ1ZSksIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5wdXNoKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKChyZWYgPSB2YWx1ZXMubGVhZHNwYWNlcykgIT0gbnVsbCA/IHJlZi5sZW5ndGggOiB2b2lkIDApICYmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0NPTVBBQ1RfTk9UQVRJT04uZXhlYyh2YWx1ZXMudmFsdWUpKSkge1xuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKTtcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoYyk7XG4gICAgICAgICAgICBwYXJzZXIucmVmcyA9IHRoaXMucmVmcztcbiAgICAgICAgICAgIGJsb2NrID0gdmFsdWVzLnZhbHVlO1xuICAgICAgICAgICAgaW5kZW50ID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05leHRMaW5lSW5kZW50ZWQoZmFsc2UpKSB7XG4gICAgICAgICAgICAgIGJsb2NrICs9IFwiXFxuXCIgKyB0aGlzLmdldE5leHRFbWJlZEJsb2NrKGluZGVudCArIHZhbHVlcy5sZWFkc3BhY2VzLmxlbmd0aCArIDEsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5wdXNoKHBhcnNlci5wYXJzZShibG9jaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2RlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhLnB1c2godGhpcy5wYXJzZVZhbHVlKHZhbHVlcy52YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2RlcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgodmFsdWVzID0gdGhpcy5QQVRURVJOX01BUFBJTkdfSVRFTS5leGVjKHRoaXMuY3VycmVudExpbmUpKSAmJiB2YWx1ZXMua2V5LmluZGV4T2YoJyAjJykgPT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLkNPTlRFWFRfU0VRVUVOQ0UgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1lvdSBjYW5ub3QgZGVmaW5lIGEgbWFwcGluZyBpdGVtIHdoZW4gaW4gYSBzZXF1ZW5jZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLkNPTlRFWFRfTUFQUElORztcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBJbmxpbmUuY29uZmlndXJlKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGtleSA9IElubGluZS5wYXJzZVNjYWxhcih2YWx1ZXMua2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgZS5wYXJzZWRMaW5lID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCc8PCcgPT09IGtleSkge1xuICAgICAgICAgIG1lcmdlTm9kZSA9IHRydWU7XG4gICAgICAgICAgYWxsb3dPdmVyd3JpdGUgPSB0cnVlO1xuICAgICAgICAgIGlmICgoKHJlZjEgPSB2YWx1ZXMudmFsdWUpICE9IG51bGwgPyByZWYxLmluZGV4T2YoJyonKSA6IHZvaWQgMCkgPT09IDApIHtcbiAgICAgICAgICAgIHJlZk5hbWUgPSB2YWx1ZXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzW3JlZk5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdSZWZlcmVuY2UgXCInICsgcmVmTmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZlZhbHVlID0gdGhpcy5yZWZzW3JlZk5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZWYWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdZQU1MIG1lcmdlIGtleXMgdXNlZCB3aXRoIGEgc2NhbGFyIHZhbHVlIGluc3RlYWQgb2YgYW4gb2JqZWN0LicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlZlZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZlZhbHVlLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbbmFtZSA9IFN0cmluZyhpKV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChrZXkgaW4gcmVmVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlZlZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgJiYgdmFsdWVzLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlcy52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXROZXh0RW1iZWRCbG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKGMpO1xuICAgICAgICAgICAgcGFyc2VyLnJlZnMgPSB0aGlzLnJlZnM7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZXIucGFyc2UodmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignWUFNTCBtZXJnZSBrZXlzIHVzZWQgd2l0aCBhIHNjYWxhciB2YWx1ZSBpbnN0ZWFkIG9mIGFuIG9iamVjdC4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJzZWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcGFyc2VkLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZEl0ZW0gPSBwYXJzZWRbbF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRJdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdNZXJnZSBpdGVtcyBtdXN0IGJlIG9iamVjdHMuJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgcGFyc2VkSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRJdGVtIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IG0gPSAwLCBsZW4yID0gcGFyc2VkSXRlbS5sZW5ndGg7IG0gPCBsZW4yOyBpID0gKyttKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VkSXRlbVtpXTtcbiAgICAgICAgICAgICAgICAgICAgayA9IFN0cmluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtrXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcnNlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZWRJdGVtW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcnNlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VkW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgodmFsdWVzLnZhbHVlICE9IG51bGwpICYmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0FOQ0hPUl9WQUxVRS5leGVjKHZhbHVlcy52YWx1ZSkpKSB7XG4gICAgICAgICAgaXNSZWYgPSBtYXRjaGVzLnJlZjtcbiAgICAgICAgICB2YWx1ZXMudmFsdWUgPSBtYXRjaGVzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJnZU5vZGUpIHtcblxuICAgICAgICB9IGVsc2UgaWYgKCEodmFsdWVzLnZhbHVlICE9IG51bGwpIHx8ICcnID09PSBVdGlscy50cmltKHZhbHVlcy52YWx1ZSwgJyAnKSB8fCBVdGlscy5sdHJpbSh2YWx1ZXMudmFsdWUsICcgJykuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgaWYgKCEodGhpcy5pc05leHRMaW5lSW5kZW50ZWQoKSkgJiYgISh0aGlzLmlzTmV4dExpbmVVbkluZGVudGVkQ29sbGVjdGlvbigpKSkge1xuICAgICAgICAgICAgaWYgKGFsbG93T3ZlcndyaXRlIHx8IGRhdGFba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGFba2V5XSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMgPSB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxO1xuICAgICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihjKTtcbiAgICAgICAgICAgIHBhcnNlci5yZWZzID0gdGhpcy5yZWZzO1xuICAgICAgICAgICAgdmFsID0gcGFyc2VyLnBhcnNlKHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2soKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgICBpZiAoYWxsb3dPdmVyd3JpdGUgfHwgZGF0YVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWVzLnZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgICBpZiAoYWxsb3dPdmVyd3JpdGUgfHwgZGF0YVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVDb3VudCA9IHRoaXMubGluZXMubGVuZ3RoO1xuICAgICAgICBpZiAoMSA9PT0gbGluZUNvdW50IHx8ICgyID09PSBsaW5lQ291bnQgJiYgVXRpbHMuaXNFbXB0eSh0aGlzLmxpbmVzWzFdKSkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBJbmxpbmUucGFyc2UodGhpcy5saW5lc1swXSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgIGUucGFyc2VkTGluZSA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgIGZpcnN0ID0gdmFsdWVbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgJiYgZmlyc3QuaW5kZXhPZignKicpID09PSAwKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChuID0gMCwgbGVuMyA9IHZhbHVlLmxlbmd0aDsgbiA8IGxlbjM7IG4rKykge1xuICAgICAgICAgICAgICAgIGFsaWFzID0gdmFsdWVbbl07XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHRoaXMucmVmc1thbGlhcy5zbGljZSgxKV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKChyZWYyID0gVXRpbHMubHRyaW0odmFsdWUpLmNoYXJBdCgwKSkgPT09ICdbJyB8fCByZWYyID09PSAneycpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIElubGluZS5wYXJzZSh2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgIGUucGFyc2VkTGluZSA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdVbmFibGUgdG8gcGFyc2UuJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNSZWYpIHtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHRoaXMucmVmc1tpc1JlZl0gPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgbGFzdEtleSA9IGtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWZzW2lzUmVmXSA9IGRhdGFbbGFzdEtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFV0aWxzLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5nZXRSZWFsQ3VycmVudExpbmVOYiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMaW5lTmIgKyB0aGlzLm9mZnNldDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TGluZS5sZW5ndGggLSBVdGlscy5sdHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpLmxlbmd0aDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldE5leHRFbWJlZEJsb2NrID0gZnVuY3Rpb24oaW5kZW50YXRpb24sIGluY2x1ZGVVbmluZGVudGVkQ29sbGVjdGlvbikge1xuICAgIHZhciBkYXRhLCBpbmRlbnQsIGlzSXRVbmluZGVudGVkQ29sbGVjdGlvbiwgbmV3SW5kZW50LCByZW1vdmVDb21tZW50cywgcmVtb3ZlQ29tbWVudHNQYXR0ZXJuLCB1bmluZGVudGVkRW1iZWRCbG9jaztcbiAgICBpZiAoaW5kZW50YXRpb24gPT0gbnVsbCkge1xuICAgICAgaW5kZW50YXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoaW5jbHVkZVVuaW5kZW50ZWRDb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVVbmluZGVudGVkQ29sbGVjdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgaWYgKGluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIG5ld0luZGVudCA9IHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpO1xuICAgICAgdW5pbmRlbnRlZEVtYmVkQmxvY2sgPSB0aGlzLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtKHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgaWYgKCEodGhpcy5pc0N1cnJlbnRMaW5lRW1wdHkoKSkgJiYgMCA9PT0gbmV3SW5kZW50ICYmICF1bmluZGVudGVkRW1iZWRCbG9jaykge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ0luZGVudGF0aW9uIHByb2JsZW0uJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0luZGVudCA9IGluZGVudGF0aW9uO1xuICAgIH1cbiAgICBkYXRhID0gW3RoaXMuY3VycmVudExpbmUuc2xpY2UobmV3SW5kZW50KV07XG4gICAgaWYgKCFpbmNsdWRlVW5pbmRlbnRlZENvbGxlY3Rpb24pIHtcbiAgICAgIGlzSXRVbmluZGVudGVkQ29sbGVjdGlvbiA9IHRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbW1lbnRzUGF0dGVybiA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0VORDtcbiAgICByZW1vdmVDb21tZW50cyA9ICFyZW1vdmVDb21tZW50c1BhdHRlcm4udGVzdCh0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICB3aGlsZSAodGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKTtcbiAgICAgIGlmIChpbmRlbnQgPT09IG5ld0luZGVudCkge1xuICAgICAgICByZW1vdmVDb21tZW50cyA9ICFyZW1vdmVDb21tZW50c1BhdHRlcm4udGVzdCh0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1vdmVDb21tZW50cyAmJiB0aGlzLmlzQ3VycmVudExpbmVDb21tZW50KCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKSkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5jdXJyZW50TGluZS5zbGljZShuZXdJbmRlbnQpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNJdFVuaW5kZW50ZWRDb2xsZWN0aW9uICYmICF0aGlzLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtKHRoaXMuY3VycmVudExpbmUpICYmIGluZGVudCA9PT0gbmV3SW5kZW50KSB7XG4gICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGluZGVudCA+PSBuZXdJbmRlbnQpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuY3VycmVudExpbmUuc2xpY2UobmV3SW5kZW50KSk7XG4gICAgICB9IGVsc2UgaWYgKFV0aWxzLmx0cmltKHRoaXMuY3VycmVudExpbmUpLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoMCA9PT0gaW5kZW50KSB7XG4gICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdJbmRlbnRhdGlvbiBwcm9ibGVtLicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKFwiXFxuXCIpO1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUubW92ZVRvTmV4dExpbmUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGluZU5iID49IHRoaXMubGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gdGhpcy5saW5lc1srK3RoaXMuY3VycmVudExpbmVOYl07XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5tb3ZlVG9QcmV2aW91c0xpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gdGhpcy5saW5lc1stLXRoaXMuY3VycmVudExpbmVOYl07XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgZSwgZm9sZGVkSW5kZW50LCBtYXRjaGVzLCBtb2RpZmllcnMsIHBvcywgcmVmLCByZWYxLCB2YWw7XG4gICAgaWYgKDAgPT09IHZhbHVlLmluZGV4T2YoJyonKSkge1xuICAgICAgcG9zID0gdmFsdWUuaW5kZXhPZignIycpO1xuICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMSwgcG9zIC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVmc1t2YWx1ZV0gPT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1JlZmVyZW5jZSBcIicgKyB2YWx1ZSArICdcIiBkb2VzIG5vdCBleGlzdC4nLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlZnNbdmFsdWVdO1xuICAgIH1cbiAgICBpZiAobWF0Y2hlcyA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0FMTC5leGVjKHZhbHVlKSkge1xuICAgICAgbW9kaWZpZXJzID0gKHJlZiA9IG1hdGNoZXMubW9kaWZpZXJzKSAhPSBudWxsID8gcmVmIDogJyc7XG4gICAgICBmb2xkZWRJbmRlbnQgPSBNYXRoLmFicyhwYXJzZUludChtb2RpZmllcnMpKTtcbiAgICAgIGlmIChpc05hTihmb2xkZWRJbmRlbnQpKSB7XG4gICAgICAgIGZvbGRlZEluZGVudCA9IDA7XG4gICAgICB9XG4gICAgICB2YWwgPSB0aGlzLnBhcnNlRm9sZGVkU2NhbGFyKG1hdGNoZXMuc2VwYXJhdG9yLCB0aGlzLlBBVFRFUk5fREVDSU1BTC5yZXBsYWNlKG1vZGlmaWVycywgJycpLCBmb2xkZWRJbmRlbnQpO1xuICAgICAgaWYgKG1hdGNoZXMudHlwZSAhPSBudWxsKSB7XG4gICAgICAgIElubGluZS5jb25maWd1cmUoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgIHJldHVybiBJbmxpbmUucGFyc2VTY2FsYXIobWF0Y2hlcy50eXBlICsgJyAnICsgdmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgocmVmMSA9IHZhbHVlLmNoYXJBdCgwKSkgPT09ICdbJyB8fCByZWYxID09PSAneycgfHwgcmVmMSA9PT0gJ1wiJyB8fCByZWYxID09PSBcIidcIikge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSW5saW5lLnBhcnNlKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQYXJzZU1vcmUgJiYgdGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBcIlxcblwiICsgVXRpbHMudHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnBhcnNlZExpbmUgPSB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxO1xuICAgICAgICAgICAgZS5zbmlwcGV0ID0gdGhpcy5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzTmV4dExpbmVJbmRlbnRlZCgpKSB7XG4gICAgICAgIHZhbHVlICs9IFwiXFxuXCIgKyB0aGlzLmdldE5leHRFbWJlZEJsb2NrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gSW5saW5lLnBhcnNlKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZvbGRlZFNjYWxhciA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgaW5kaWNhdG9yLCBpbmRlbnRhdGlvbikge1xuICAgIHZhciBpc0N1cnJlbnRMaW5lQmxhbmssIGosIGxlbiwgbGluZSwgbWF0Y2hlcywgbmV3VGV4dCwgbm90RU9GLCBwYXR0ZXJuLCByZWYsIHRleHQ7XG4gICAgaWYgKGluZGljYXRvciA9PSBudWxsKSB7XG4gICAgICBpbmRpY2F0b3IgPSAnJztcbiAgICB9XG4gICAgaWYgKGluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIGluZGVudGF0aW9uID0gMDtcbiAgICB9XG4gICAgbm90RU9GID0gdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgIGlmICghbm90RU9GKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlzQ3VycmVudExpbmVCbGFuayA9IHRoaXMuaXNDdXJyZW50TGluZUJsYW5rKCk7XG4gICAgdGV4dCA9ICcnO1xuICAgIHdoaWxlIChub3RFT0YgJiYgaXNDdXJyZW50TGluZUJsYW5rKSB7XG4gICAgICBpZiAobm90RU9GID0gdGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgaXNDdXJyZW50TGluZUJsYW5rID0gdGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IGluZGVudGF0aW9uKSB7XG4gICAgICBpZiAobWF0Y2hlcyA9IHRoaXMuUEFUVEVSTl9JTkRFTlRfU1BBQ0VTLmV4ZWModGhpcy5jdXJyZW50TGluZSkpIHtcbiAgICAgICAgaW5kZW50YXRpb24gPSBtYXRjaGVzWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZGVudGF0aW9uID4gMCkge1xuICAgICAgcGF0dGVybiA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0JZX0lOREVOVEFUSU9OW2luZGVudGF0aW9uXTtcbiAgICAgIGlmIChwYXR0ZXJuID09IG51bGwpIHtcbiAgICAgICAgcGF0dGVybiA9IG5ldyBQYXR0ZXJuKCdeIHsnICsgaW5kZW50YXRpb24gKyAnfSguKikkJyk7XG4gICAgICAgIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9GT0xERURfU0NBTEFSX0JZX0lOREVOVEFUSU9OW2luZGVudGF0aW9uXSA9IHBhdHRlcm47XG4gICAgICB9XG4gICAgICB3aGlsZSAobm90RU9GICYmIChpc0N1cnJlbnRMaW5lQmxhbmsgfHwgKG1hdGNoZXMgPSBwYXR0ZXJuLmV4ZWModGhpcy5jdXJyZW50TGluZSkpKSkge1xuICAgICAgICBpZiAoaXNDdXJyZW50TGluZUJsYW5rKSB7XG4gICAgICAgICAgdGV4dCArPSB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKGluZGVudGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ICs9IG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdEVPRiA9IHRoaXMubW92ZVRvTmV4dExpbmUoKSkge1xuICAgICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgICBpc0N1cnJlbnRMaW5lQmxhbmsgPSB0aGlzLmlzQ3VycmVudExpbmVCbGFuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub3RFT0YpIHtcbiAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICB9XG4gICAgaWYgKG5vdEVPRikge1xuICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICB9XG4gICAgaWYgKCc+JyA9PT0gc2VwYXJhdG9yKSB7XG4gICAgICBuZXdUZXh0ID0gJyc7XG4gICAgICByZWYgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGxpbmUgPSByZWZbal07XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMCB8fCBsaW5lLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICAgICAgbmV3VGV4dCA9IFV0aWxzLnJ0cmltKG5ld1RleHQsICcgJykgKyBsaW5lICsgXCJcXG5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IGxpbmUgKyAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRleHQgPSBuZXdUZXh0O1xuICAgIH1cbiAgICBpZiAoJysnICE9PSBpbmRpY2F0b3IpIHtcbiAgICAgIHRleHQgPSBVdGlscy5ydHJpbSh0ZXh0KTtcbiAgICB9XG4gICAgaWYgKCcnID09PSBpbmRpY2F0b3IpIHtcbiAgICAgIHRleHQgPSB0aGlzLlBBVFRFUk5fVFJBSUxJTkdfTElORVMucmVwbGFjZSh0ZXh0LCBcIlxcblwiKTtcbiAgICB9IGVsc2UgaWYgKCctJyA9PT0gaW5kaWNhdG9yKSB7XG4gICAgICB0ZXh0ID0gdGhpcy5QQVRURVJOX1RSQUlMSU5HX0xJTkVTLnJlcGxhY2UodGV4dCwgJycpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzTmV4dExpbmVJbmRlbnRlZCA9IGZ1bmN0aW9uKGlnbm9yZUNvbW1lbnRzKSB7XG4gICAgdmFyIEVPRiwgY3VycmVudEluZGVudGF0aW9uLCByZXQ7XG4gICAgaWYgKGlnbm9yZUNvbW1lbnRzID09IG51bGwpIHtcbiAgICAgIGlnbm9yZUNvbW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY3VycmVudEluZGVudGF0aW9uID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgRU9GID0gIXRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICBpZiAoaWdub3JlQ29tbWVudHMpIHtcbiAgICAgIHdoaWxlICghRU9GICYmIHRoaXMuaXNDdXJyZW50TGluZUVtcHR5KCkpIHtcbiAgICAgICAgRU9GID0gIXRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCFFT0YgJiYgdGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKSkge1xuICAgICAgICBFT0YgPSAhdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoRU9GKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKSA+IGN1cnJlbnRJbmRlbnRhdGlvbikge1xuICAgICAgcmV0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNDdXJyZW50TGluZUVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRyaW1tZWRMaW5lO1xuICAgIHRyaW1tZWRMaW5lID0gVXRpbHMudHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgIHJldHVybiB0cmltbWVkTGluZS5sZW5ndGggPT09IDAgfHwgdHJpbW1lZExpbmUuY2hhckF0KDApID09PSAnIyc7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5pc0N1cnJlbnRMaW5lQmxhbmsgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJycgPT09IFV0aWxzLnRyaW0odGhpcy5jdXJyZW50TGluZSwgJyAnKTtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzQ3VycmVudExpbmVDb21tZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGx0cmltbWVkTGluZTtcbiAgICBsdHJpbW1lZExpbmUgPSBVdGlscy5sdHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgIHJldHVybiBsdHJpbW1lZExpbmUuY2hhckF0KDApID09PSAnIyc7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgY291bnQsIGksIGluZGVudCwgaiwgbCwgbGVuLCBsZW4xLCBsaW5lLCBsaW5lcywgcmVmLCByZWYxLCByZWYyLCBzbWFsbGVzdEluZGVudCwgdHJpbW1lZFZhbHVlO1xuICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiXFxyXCIpICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIlxcclxcblwiKS5qb2luKFwiXFxuXCIpLnNwbGl0KFwiXFxyXCIpLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIGNvdW50ID0gMDtcbiAgICByZWYgPSB0aGlzLlBBVFRFUk5fWUFNTF9IRUFERVIucmVwbGFjZUFsbCh2YWx1ZSwgJycpLCB2YWx1ZSA9IHJlZlswXSwgY291bnQgPSByZWZbMV07XG4gICAgdGhpcy5vZmZzZXQgKz0gY291bnQ7XG4gICAgcmVmMSA9IHRoaXMuUEFUVEVSTl9MRUFESU5HX0NPTU1FTlRTLnJlcGxhY2VBbGwodmFsdWUsICcnLCAxKSwgdHJpbW1lZFZhbHVlID0gcmVmMVswXSwgY291bnQgPSByZWYxWzFdO1xuICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vZmZzZXQgKz0gVXRpbHMuc3ViU3RyQ291bnQodmFsdWUsIFwiXFxuXCIpIC0gVXRpbHMuc3ViU3RyQ291bnQodHJpbW1lZFZhbHVlLCBcIlxcblwiKTtcbiAgICAgIHZhbHVlID0gdHJpbW1lZFZhbHVlO1xuICAgIH1cbiAgICByZWYyID0gdGhpcy5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9TVEFSVC5yZXBsYWNlQWxsKHZhbHVlLCAnJywgMSksIHRyaW1tZWRWYWx1ZSA9IHJlZjJbMF0sIGNvdW50ID0gcmVmMlsxXTtcbiAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMub2Zmc2V0ICs9IFV0aWxzLnN1YlN0ckNvdW50KHZhbHVlLCBcIlxcblwiKSAtIFV0aWxzLnN1YlN0ckNvdW50KHRyaW1tZWRWYWx1ZSwgXCJcXG5cIik7XG4gICAgICB2YWx1ZSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgIHZhbHVlID0gdGhpcy5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9FTkQucmVwbGFjZSh2YWx1ZSwgJycpO1xuICAgIH1cbiAgICBsaW5lcyA9IHZhbHVlLnNwbGl0KFwiXFxuXCIpO1xuICAgIHNtYWxsZXN0SW5kZW50ID0gLTE7XG4gICAgZm9yIChqID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxpbmUgPSBsaW5lc1tqXTtcbiAgICAgIGlmIChVdGlscy50cmltKGxpbmUsICcgJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZW50ID0gbGluZS5sZW5ndGggLSBVdGlscy5sdHJpbShsaW5lKS5sZW5ndGg7XG4gICAgICBpZiAoc21hbGxlc3RJbmRlbnQgPT09IC0xIHx8IGluZGVudCA8IHNtYWxsZXN0SW5kZW50KSB7XG4gICAgICAgIHNtYWxsZXN0SW5kZW50ID0gaW5kZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc21hbGxlc3RJbmRlbnQgPiAwKSB7XG4gICAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGxpbmVzLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBsaW5lc1tpXSA9IGxpbmUuc2xpY2Uoc21hbGxlc3RJbmRlbnQpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5pc05leHRMaW5lVW5JbmRlbnRlZENvbGxlY3Rpb24gPSBmdW5jdGlvbihjdXJyZW50SW5kZW50YXRpb24pIHtcbiAgICB2YXIgbm90RU9GLCByZXQ7XG4gICAgaWYgKGN1cnJlbnRJbmRlbnRhdGlvbiA9PSBudWxsKSB7XG4gICAgICBjdXJyZW50SW5kZW50YXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRJbmRlbnRhdGlvbiA9IHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpO1xuICAgIH1cbiAgICBub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgd2hpbGUgKG5vdEVPRiAmJiB0aGlzLmlzQ3VycmVudExpbmVFbXB0eSgpKSB7XG4gICAgICBub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgfVxuICAgIGlmIChmYWxzZSA9PT0gbm90RU9GKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKSA9PT0gY3VycmVudEluZGVudGF0aW9uICYmIHRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSkpIHtcbiAgICAgIHJldCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExpbmUgPT09ICctJyB8fCB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKDAsIDIpID09PSAnLSAnO1xuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBQYXR0ZXJuO1xuXG5QYXR0ZXJuID0gKGZ1bmN0aW9uKCkge1xuICBQYXR0ZXJuLnByb3RvdHlwZS5yZWdleCA9IG51bGw7XG5cbiAgUGF0dGVybi5wcm90b3R5cGUucmF3UmVnZXggPSBudWxsO1xuXG4gIFBhdHRlcm4ucHJvdG90eXBlLmNsZWFuZWRSZWdleCA9IG51bGw7XG5cbiAgUGF0dGVybi5wcm90b3R5cGUubWFwcGluZyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gUGF0dGVybihyYXdSZWdleCwgbW9kaWZpZXJzKSB7XG4gICAgdmFyIF9jaGFyLCBjYXB0dXJpbmdCcmFja2V0TnVtYmVyLCBjbGVhbmVkUmVnZXgsIGksIGxlbiwgbWFwcGluZywgbmFtZSwgcGFydCwgc3ViQ2hhcjtcbiAgICBpZiAobW9kaWZpZXJzID09IG51bGwpIHtcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuICAgIH1cbiAgICBjbGVhbmVkUmVnZXggPSAnJztcbiAgICBsZW4gPSByYXdSZWdleC5sZW5ndGg7XG4gICAgbWFwcGluZyA9IG51bGw7XG4gICAgY2FwdHVyaW5nQnJhY2tldE51bWJlciA9IDA7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIF9jaGFyID0gcmF3UmVnZXguY2hhckF0KGkpO1xuICAgICAgaWYgKF9jaGFyID09PSAnXFxcXCcpIHtcbiAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IHJhd1JlZ2V4LnNsaWNlKGksICsoaSArIDEpICsgMSB8fCA5ZTkpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnKCcpIHtcbiAgICAgICAgaWYgKGkgPCBsZW4gLSAyKSB7XG4gICAgICAgICAgcGFydCA9IHJhd1JlZ2V4LnNsaWNlKGksICsoaSArIDIpICsgMSB8fCA5ZTkpO1xuICAgICAgICAgIGlmIChwYXJ0ID09PSAnKD86Jykge1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IHBhcnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnKD88Jykge1xuICAgICAgICAgICAgY2FwdHVyaW5nQnJhY2tldE51bWJlcisrO1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgbmFtZSA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKGkgKyAxIDwgbGVuKSB7XG4gICAgICAgICAgICAgIHN1YkNoYXIgPSByYXdSZWdleC5jaGFyQXQoaSArIDEpO1xuICAgICAgICAgICAgICBpZiAoc3ViQ2hhciA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9ICcoJztcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hcHBpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nID0ge307XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtYXBwaW5nW25hbWVdID0gY2FwdHVyaW5nQnJhY2tldE51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSBzdWJDaGFyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IF9jaGFyO1xuICAgICAgICAgICAgY2FwdHVyaW5nQnJhY2tldE51bWJlcisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhbmVkUmVnZXggKz0gX2NoYXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFuZWRSZWdleCArPSBfY2hhcjtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgdGhpcy5yYXdSZWdleCA9IHJhd1JlZ2V4O1xuICAgIHRoaXMuY2xlYW5lZFJlZ2V4ID0gY2xlYW5lZFJlZ2V4O1xuICAgIHRoaXMucmVnZXggPSBuZXcgUmVnRXhwKHRoaXMuY2xlYW5lZFJlZ2V4LCAnZycgKyBtb2RpZmllcnMucmVwbGFjZSgnZycsICcnKSk7XG4gICAgdGhpcy5tYXBwaW5nID0gbWFwcGluZztcbiAgfVxuXG4gIFBhdHRlcm4ucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgaW5kZXgsIG1hdGNoZXMsIG5hbWUsIHJlZjtcbiAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgbWF0Y2hlcyA9IHRoaXMucmVnZXguZXhlYyhzdHIpO1xuICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBwaW5nICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IHRoaXMubWFwcGluZztcbiAgICAgIGZvciAobmFtZSBpbiByZWYpIHtcbiAgICAgICAgaW5kZXggPSByZWZbbmFtZV07XG4gICAgICAgIG1hdGNoZXNbbmFtZV0gPSBtYXRjaGVzW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH07XG5cbiAgUGF0dGVybi5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHRoaXMucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5yZWdleC50ZXN0KHN0cik7XG4gIH07XG5cbiAgUGF0dGVybi5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKHN0ciwgcmVwbGFjZW1lbnQpIHtcbiAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHRoaXMucmVnZXgsIHJlcGxhY2VtZW50KTtcbiAgfTtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oc3RyLCByZXBsYWNlbWVudCwgbGltaXQpIHtcbiAgICB2YXIgY291bnQ7XG4gICAgaWYgKGxpbWl0ID09IG51bGwpIHtcbiAgICAgIGxpbWl0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIGNvdW50ID0gMDtcbiAgICB3aGlsZSAodGhpcy5yZWdleC50ZXN0KHN0cikgJiYgKGxpbWl0ID09PSAwIHx8IGNvdW50IDwgbGltaXQpKSB7XG4gICAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh0aGlzLnJlZ2V4LCByZXBsYWNlbWVudCk7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gW3N0ciwgY291bnRdO1xuICB9O1xuXG4gIHJldHVybiBQYXR0ZXJuO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdHRlcm47XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhdHRlcm4sIFVuZXNjYXBlciwgVXRpbHM7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5QYXR0ZXJuID0gcmVxdWlyZSgnLi9QYXR0ZXJuJyk7XG5cblVuZXNjYXBlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVW5lc2NhcGVyKCkge31cblxuICBVbmVzY2FwZXIuUEFUVEVSTl9FU0NBUEVEX0NIQVJBQ1RFUiA9IG5ldyBQYXR0ZXJuKCdcXFxcXFxcXChbMGFidFxcdG52ZnJlIFwiXFxcXC9cXFxcXFxcXE5fTFBdfHhbMC05YS1mQS1GXXsyfXx1WzAtOWEtZkEtRl17NH18VVswLTlhLWZBLUZdezh9KScpO1xuXG4gIFVuZXNjYXBlci51bmVzY2FwZVNpbmdsZVF1b3RlZFN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcJ1xcJy9nLCAnXFwnJyk7XG4gIH07XG5cbiAgVW5lc2NhcGVyLnVuZXNjYXBlRG91YmxlUXVvdGVkU3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5fdW5lc2NhcGVDYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bmVzY2FwZUNhbGxiYWNrID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMudW5lc2NhcGVDaGFyYWN0ZXIoc3RyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5QQVRURVJOX0VTQ0FQRURfQ0hBUkFDVEVSLnJlcGxhY2UodmFsdWUsIHRoaXMuX3VuZXNjYXBlQ2FsbGJhY2spO1xuICB9O1xuXG4gIFVuZXNjYXBlci51bmVzY2FwZUNoYXJhY3RlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGNoO1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgICBzd2l0Y2ggKHZhbHVlLmNoYXJBdCgxKSkge1xuICAgICAgY2FzZSAnMCc6XG4gICAgICAgIHJldHVybiBjaCgwKTtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICByZXR1cm4gY2goNyk7XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgcmV0dXJuIGNoKDgpO1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHJldHVybiBcIlxcdFwiO1xuICAgICAgY2FzZSBcIlxcdFwiOlxuICAgICAgICByZXR1cm4gXCJcXHRcIjtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICByZXR1cm4gXCJcXG5cIjtcbiAgICAgIGNhc2UgJ3YnOlxuICAgICAgICByZXR1cm4gY2goMTEpO1xuICAgICAgY2FzZSAnZic6XG4gICAgICAgIHJldHVybiBjaCgxMik7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgcmV0dXJuIGNoKDEzKTtcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gY2goMjcpO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHJldHVybiAnICc7XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiAnXCInO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHJldHVybiAnLyc7XG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgcmV0dXJuICdcXFxcJztcbiAgICAgIGNhc2UgJ04nOlxuICAgICAgICByZXR1cm4gY2goMHgwMDg1KTtcbiAgICAgIGNhc2UgJ18nOlxuICAgICAgICByZXR1cm4gY2goMHgwMEEwKTtcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gY2goMHgyMDI4KTtcbiAgICAgIGNhc2UgJ1AnOlxuICAgICAgICByZXR1cm4gY2goMHgyMDI5KTtcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gVXRpbHMudXRmOGNocihVdGlscy5oZXhEZWModmFsdWUuc3Vic3RyKDIsIDIpKSk7XG4gICAgICBjYXNlICd1JzpcbiAgICAgICAgcmV0dXJuIFV0aWxzLnV0ZjhjaHIoVXRpbHMuaGV4RGVjKHZhbHVlLnN1YnN0cigyLCA0KSkpO1xuICAgICAgY2FzZSAnVSc6XG4gICAgICAgIHJldHVybiBVdGlscy51dGY4Y2hyKFV0aWxzLmhleERlYyh2YWx1ZS5zdWJzdHIoMiwgOCkpKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFVuZXNjYXBlcjtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbmVzY2FwZXI7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhdHRlcm4sIFV0aWxzLFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cblBhdHRlcm4gPSByZXF1aXJlKCcuL1BhdHRlcm4nKTtcblxuVXRpbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge31cblxuICBVdGlscy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUiA9IHt9O1xuXG4gIFV0aWxzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUiA9IHt9O1xuXG4gIFV0aWxzLlJFR0VYX1NQQUNFUyA9IC9cXHMrL2c7XG5cbiAgVXRpbHMuUkVHRVhfRElHSVRTID0gL15cXGQrJC87XG5cbiAgVXRpbHMuUkVHRVhfT0NUQUwgPSAvW14wLTddL2dpO1xuXG4gIFV0aWxzLlJFR0VYX0hFWEFERUNJTUFMID0gL1teYS1mMC05XS9naTtcblxuICBVdGlscy5QQVRURVJOX0RBVEUgPSBuZXcgUGF0dGVybignXicgKyAnKD88eWVhcj5bMC05XVswLTldWzAtOV1bMC05XSknICsgJy0oPzxtb250aD5bMC05XVswLTldPyknICsgJy0oPzxkYXk+WzAtOV1bMC05XT8pJyArICcoPzooPzpbVHRdfFsgXFx0XSspJyArICcoPzxob3VyPlswLTldWzAtOV0/KScgKyAnOig/PG1pbnV0ZT5bMC05XVswLTldKScgKyAnOig/PHNlY29uZD5bMC05XVswLTldKScgKyAnKD86XFwuKD88ZnJhY3Rpb24+WzAtOV0qKSk/JyArICcoPzpbIFxcdF0qKD88dHo+WnwoPzx0el9zaWduPlstK10pKD88dHpfaG91cj5bMC05XVswLTldPyknICsgJyg/OjooPzx0el9taW51dGU+WzAtOV1bMC05XSkpPykpPyk/JyArICckJywgJ2knKTtcblxuICBVdGlscy5MT0NBTF9USU1FWk9ORV9PRkZTRVQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG5cbiAgVXRpbHMudHJpbSA9IGZ1bmN0aW9uKHN0ciwgX2NoYXIpIHtcbiAgICB2YXIgcmVnZXhMZWZ0LCByZWdleFJpZ2h0O1xuICAgIGlmIChfY2hhciA9PSBudWxsKSB7XG4gICAgICBfY2hhciA9ICdcXFxccyc7XG4gICAgfVxuICAgIHJlZ2V4TGVmdCA9IHRoaXMuUkVHRVhfTEVGVF9UUklNX0JZX0NIQVJbX2NoYXJdO1xuICAgIGlmIChyZWdleExlZnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleExlZnQgPSBuZXcgUmVnRXhwKCdeJyArIF9jaGFyICsgJycgKyBfY2hhciArICcqJyk7XG4gICAgfVxuICAgIHJlZ2V4TGVmdC5sYXN0SW5kZXggPSAwO1xuICAgIHJlZ2V4UmlnaHQgPSB0aGlzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUltfY2hhcl07XG4gICAgaWYgKHJlZ2V4UmlnaHQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5SRUdFWF9SSUdIVF9UUklNX0JZX0NIQVJbX2NoYXJdID0gcmVnZXhSaWdodCA9IG5ldyBSZWdFeHAoX2NoYXIgKyAnJyArIF9jaGFyICsgJyokJyk7XG4gICAgfVxuICAgIHJlZ2V4UmlnaHQubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhMZWZ0LCAnJykucmVwbGFjZShyZWdleFJpZ2h0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMubHRyaW0gPSBmdW5jdGlvbihzdHIsIF9jaGFyKSB7XG4gICAgdmFyIHJlZ2V4TGVmdDtcbiAgICBpZiAoX2NoYXIgPT0gbnVsbCkge1xuICAgICAgX2NoYXIgPSAnXFxcXHMnO1xuICAgIH1cbiAgICByZWdleExlZnQgPSB0aGlzLlJFR0VYX0xFRlRfVFJJTV9CWV9DSEFSW19jaGFyXTtcbiAgICBpZiAocmVnZXhMZWZ0ID09IG51bGwpIHtcbiAgICAgIHRoaXMuUkVHRVhfTEVGVF9UUklNX0JZX0NIQVJbX2NoYXJdID0gcmVnZXhMZWZ0ID0gbmV3IFJlZ0V4cCgnXicgKyBfY2hhciArICcnICsgX2NoYXIgKyAnKicpO1xuICAgIH1cbiAgICByZWdleExlZnQubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhMZWZ0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMucnRyaW0gPSBmdW5jdGlvbihzdHIsIF9jaGFyKSB7XG4gICAgdmFyIHJlZ2V4UmlnaHQ7XG4gICAgaWYgKF9jaGFyID09IG51bGwpIHtcbiAgICAgIF9jaGFyID0gJ1xcXFxzJztcbiAgICB9XG4gICAgcmVnZXhSaWdodCA9IHRoaXMuUkVHRVhfUklHSFRfVFJJTV9CWV9DSEFSW19jaGFyXTtcbiAgICBpZiAocmVnZXhSaWdodCA9PSBudWxsKSB7XG4gICAgICB0aGlzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleFJpZ2h0ID0gbmV3IFJlZ0V4cChfY2hhciArICcnICsgX2NoYXIgKyAnKiQnKTtcbiAgICB9XG4gICAgcmVnZXhSaWdodC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleFJpZ2h0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMuaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICcwJyB8fCAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHx8IHRoaXMuaXNFbXB0eU9iamVjdCh2YWx1ZSk7XG4gIH07XG5cbiAgVXRpbHMuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGs7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICgoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbCh2YWx1ZSwgaykpIGNvbnRpbnVlO1xuICAgICAgICByZXN1bHRzLnB1c2goayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KSgpKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgVXRpbHMuc3ViU3RyQ291bnQgPSBmdW5jdGlvbihzdHJpbmcsIHN1YlN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICAgIHZhciBjLCBpLCBqLCBsZW4sIHJlZiwgc3VibGVuO1xuICAgIGMgPSAwO1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICAgIHN1YlN0cmluZyA9ICcnICsgc3ViU3RyaW5nO1xuICAgIGlmIChzdGFydCAhPSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2Uoc3RhcnQpO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBsZW5ndGgpO1xuICAgIH1cbiAgICBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuICAgIHN1YmxlbiA9IHN1YlN0cmluZy5sZW5ndGg7XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGxlbjsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICBpZiAoc3ViU3RyaW5nID09PSBzdHJpbmcuc2xpY2UoaSwgc3VibGVuKSkge1xuICAgICAgICBjKys7XG4gICAgICAgIGkgKz0gc3VibGVuIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH07XG5cbiAgVXRpbHMuaXNEaWdpdHMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuUkVHRVhfRElHSVRTLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHRoaXMuUkVHRVhfRElHSVRTLnRlc3QoaW5wdXQpO1xuICB9O1xuXG4gIFV0aWxzLm9jdERlYyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9PQ1RBTC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBwYXJzZUludCgoaW5wdXQgKyAnJykucmVwbGFjZSh0aGlzLlJFR0VYX09DVEFMLCAnJyksIDgpO1xuICB9O1xuXG4gIFV0aWxzLmhleERlYyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9IRVhBREVDSU1BTC5sYXN0SW5kZXggPSAwO1xuICAgIGlucHV0ID0gdGhpcy50cmltKGlucHV0KTtcbiAgICBpZiAoKGlucHV0ICsgJycpLnNsaWNlKDAsIDIpID09PSAnMHgnKSB7XG4gICAgICBpbnB1dCA9IChpbnB1dCArICcnKS5zbGljZSgyKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KChpbnB1dCArICcnKS5yZXBsYWNlKHRoaXMuUkVHRVhfSEVYQURFQ0lNQUwsICcnKSwgMTYpO1xuICB9O1xuXG4gIFV0aWxzLnV0ZjhjaHIgPSBmdW5jdGlvbihjKSB7XG4gICAgdmFyIGNoO1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgICBpZiAoMHg4MCA+IChjICU9IDB4MjAwMDAwKSkge1xuICAgICAgcmV0dXJuIGNoKGMpO1xuICAgIH1cbiAgICBpZiAoMHg4MDAgPiBjKSB7XG4gICAgICByZXR1cm4gY2goMHhDMCB8IGMgPj4gNikgKyBjaCgweDgwIHwgYyAmIDB4M0YpO1xuICAgIH1cbiAgICBpZiAoMHgxMDAwMCA+IGMpIHtcbiAgICAgIHJldHVybiBjaCgweEUwIHwgYyA+PiAxMikgKyBjaCgweDgwIHwgYyA+PiA2ICYgMHgzRikgKyBjaCgweDgwIHwgYyAmIDB4M0YpO1xuICAgIH1cbiAgICByZXR1cm4gY2goMHhGMCB8IGMgPj4gMTgpICsgY2goMHg4MCB8IGMgPj4gMTIgJiAweDNGKSArIGNoKDB4ODAgfCBjID4+IDYgJiAweDNGKSArIGNoKDB4ODAgfCBjICYgMHgzRik7XG4gIH07XG5cbiAgVXRpbHMucGFyc2VCb29sZWFuID0gZnVuY3Rpb24oaW5wdXQsIHN0cmljdCkge1xuICAgIHZhciBsb3dlcklucHV0O1xuICAgIGlmIChzdHJpY3QgPT0gbnVsbCkge1xuICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxvd2VySW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICdubycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChsb3dlcklucHV0ID09PSAnMCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gISFpbnB1dDtcbiAgfTtcblxuICBVdGlscy5pc051bWVyaWMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuUkVHRVhfU1BBQ0VTLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oaW5wdXQpICYmIGlucHV0LnJlcGxhY2UodGhpcy5SRUdFWF9TUEFDRVMsICcnKSAhPT0gJyc7XG4gIH07XG5cbiAgVXRpbHMuc3RyaW5nVG9EYXRlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIGRhdGUsIGRheSwgZnJhY3Rpb24sIGhvdXIsIGluZm8sIG1pbnV0ZSwgbW9udGgsIHNlY29uZCwgdHpfaG91ciwgdHpfbWludXRlLCB0el9vZmZzZXQsIHllYXI7XG4gICAgaWYgKCEoc3RyICE9IG51bGwgPyBzdHIubGVuZ3RoIDogdm9pZCAwKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGluZm8gPSB0aGlzLlBBVFRFUk5fREFURS5leGVjKHN0cik7XG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgeWVhciA9IHBhcnNlSW50KGluZm8ueWVhciwgMTApO1xuICAgIG1vbnRoID0gcGFyc2VJbnQoaW5mby5tb250aCwgMTApIC0gMTtcbiAgICBkYXkgPSBwYXJzZUludChpbmZvLmRheSwgMTApO1xuICAgIGlmIChpbmZvLmhvdXIgPT0gbnVsbCkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICBob3VyID0gcGFyc2VJbnQoaW5mby5ob3VyLCAxMCk7XG4gICAgbWludXRlID0gcGFyc2VJbnQoaW5mby5taW51dGUsIDEwKTtcbiAgICBzZWNvbmQgPSBwYXJzZUludChpbmZvLnNlY29uZCwgMTApO1xuICAgIGlmIChpbmZvLmZyYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIGZyYWN0aW9uID0gaW5mby5mcmFjdGlvbi5zbGljZSgwLCAzKTtcbiAgICAgIHdoaWxlIChmcmFjdGlvbi5sZW5ndGggPCAzKSB7XG4gICAgICAgIGZyYWN0aW9uICs9ICcwJztcbiAgICAgIH1cbiAgICAgIGZyYWN0aW9uID0gcGFyc2VJbnQoZnJhY3Rpb24sIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhY3Rpb24gPSAwO1xuICAgIH1cbiAgICBpZiAoaW5mby50eiAhPSBudWxsKSB7XG4gICAgICB0el9ob3VyID0gcGFyc2VJbnQoaW5mby50el9ob3VyLCAxMCk7XG4gICAgICBpZiAoaW5mby50el9taW51dGUgIT0gbnVsbCkge1xuICAgICAgICB0el9taW51dGUgPSBwYXJzZUludChpbmZvLnR6X21pbnV0ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHpfbWludXRlID0gMDtcbiAgICAgIH1cbiAgICAgIHR6X29mZnNldCA9ICh0el9ob3VyICogNjAgKyB0el9taW51dGUpICogNjAwMDA7XG4gICAgICBpZiAoJy0nID09PSBpbmZvLnR6X3NpZ24pIHtcbiAgICAgICAgdHpfb2Zmc2V0ICo9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uKSk7XG4gICAgaWYgKHR6X29mZnNldCkge1xuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gdHpfb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG4gIH07XG5cbiAgVXRpbHMuc3RyUmVwZWF0ID0gZnVuY3Rpb24oc3RyLCBudW1iZXIpIHtcbiAgICB2YXIgaSwgcmVzO1xuICAgIHJlcyA9ICcnO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbnVtYmVyKSB7XG4gICAgICByZXMgKz0gc3RyO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFV0aWxzLmdldFN0cmluZ0Zyb21GaWxlID0gZnVuY3Rpb24ocGF0aCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSwgZnMsIGosIGxlbjEsIG5hbWUsIHJlZiwgcmVxLCB4aHI7XG4gICAgaWYgKGNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgeGhyID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgIT09IG51bGwpIHtcbiAgICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgICAgIHJlZiA9IFtcIk1zeG1sMi5YTUxIVFRQLjYuMFwiLCBcIk1zeG1sMi5YTUxIVFRQLjMuMFwiLCBcIk1zeG1sMi5YTUxIVFRQXCIsIFwiTWljcm9zb2Z0LlhNTEhUVFBcIl07XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgbmFtZSA9IHJlZltqXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgeGhyID0gbmV3IEFjdGl2ZVhPYmplY3QobmFtZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHhociAhPSBudWxsKSB7XG4gICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgICAgICByZXR1cm4geGhyLnNlbmQobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcSA9IHJlcXVpcmU7XG4gICAgICBmcyA9IHJlcSgnZnMnKTtcbiAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmcy5yZWFkRmlsZShwYXRoLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhTdHJpbmcoZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFV0aWxzO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wZXIsIFBhcnNlciwgVXRpbHMsIFlhbWw7XG5cblBhcnNlciA9IHJlcXVpcmUoJy4vUGFyc2VyJyk7XG5cbkR1bXBlciA9IHJlcXVpcmUoJy4vRHVtcGVyJyk7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5ZYW1sID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBZYW1sKCkge31cblxuICBZYW1sLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3REZWNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdERlY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlcigpLnBhcnNlKGlucHV0LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgfTtcblxuICBZYW1sLnBhcnNlRmlsZSA9IGZ1bmN0aW9uKHBhdGgsIGNhbGxiYWNrLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgdmFyIGlucHV0O1xuICAgIGlmIChjYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gX3RoaXMucGFyc2UoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dCA9IFV0aWxzLmdldFN0cmluZ0Zyb21GaWxlKHBhdGgpO1xuICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFlhbWwuZHVtcCA9IGZ1bmN0aW9uKGlucHV0LCBpbmxpbmUsIGluZGVudCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHZhciB5YW1sO1xuICAgIGlmIChpbmxpbmUgPT0gbnVsbCkge1xuICAgICAgaW5saW5lID0gMjtcbiAgICB9XG4gICAgaWYgKGluZGVudCA9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSA0O1xuICAgIH1cbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RFbmNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdEVuY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICB5YW1sID0gbmV3IER1bXBlcigpO1xuICAgIHlhbWwuaW5kZW50YXRpb24gPSBpbmRlbnQ7XG4gICAgcmV0dXJuIHlhbWwuZHVtcChpbnB1dCwgaW5saW5lLCAwLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgfTtcblxuICBZYW1sLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGlucHV0LCBpbmxpbmUsIGluZGVudCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHJldHVybiB0aGlzLmR1bXAoaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgfTtcblxuICBZYW1sLmxvYWQgPSBmdW5jdGlvbihwYXRoLCBjYWxsYmFjaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRmlsZShwYXRoLCBjYWxsYmFjaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gIH07XG5cbiAgcmV0dXJuIFlhbWw7XG5cbn0pKCk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkge1xuICB3aW5kb3cuWUFNTCA9IFlhbWw7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuICB0aGlzLllBTUwgPSBZYW1sO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFlhbWw7XG4iLCJmdW5jdGlvbiBiYXNlMTBfdG9fYmFzZTY0KG51bSkge1xuICB2YXIgb3JkZXIgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG4gIHZhciBiYXNlID0gb3JkZXIubGVuZ3RoO1xuICB2YXIgc3RyID0gJycsIHI7XG4gIHdoaWxlIChudW0pIHtcbiAgICAgIHIgPSBudW0gJSBiYXNlXG4gICAgICBudW0gLT0gcjtcbiAgICAgIG51bSAvPSBiYXNlO1xuICAgICAgc3RyID0gb3JkZXIuY2hhckF0KHIpICsgc3RyO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2UxMF90b19iYXNlNjQ7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3VzZXJwaXhlbC9taWNyb211c3RhY2hlL2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXIuanNcblxuLyoqXG4gKiBAY2FsbGJhY2sgUmVzb2x2ZXJGblxuICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWUgLSB2YXJpYWJsZSBuYW1lIGJlZm9yZSBiZWluZyBwYXJzZWQuXG4gKiAgICAgICAgRm9yIGV4YW1wbGU6IHthLmIuY30gLT4gICdhLmIuYycsIHsgIHggIH0gLT4gJ3gnXG4gKiBAcGFyYW0ge09iamVjdH0gdmlldyAtIHRoZSB2aWV3IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgdG8gLnJlbmRlcigpIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxib29sZWFufE9iamVjdHx1bmRlZmluZWR9IHRoZSB2YWx1ZSB0byBiZVxuICogICAgICAgIGludGVycG9sYXRlZC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdW5kZWZpbmVkLCB0aGUgdmFsdWUgcmVzb2x1dGlvblxuICogICAgICAgIGFsZ29yaXRobSB3aWxsIGdvIGFoZWFkIHdpdGggdGhlIGRlZmF1bHQgYmVoYXZpb3VyIChyZXNvbHZpbmcgdGhlXG4gKiAgICAgICAgdmFyaWFibGUgbmFtZSBmcm9tIHRoZSBwcm92aWRlZCBvYmplY3QpLlxuICovXG5cbmNvbnN0IFZBUl9NQVRDSF9SRUdFWCA9IC9cXHtcXHtcXHMqKC4qPylcXHMqXFx9XFx9L2c7XG5cbmZ1bmN0aW9uIF92YWx1ZVRvU3RyaW5nICh2YWx1ZSkge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICBjYXNlICdudW1iZXInOlxuICBjYXNlICdib29sZWFuJzpcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNhc2UgJ29iamVjdCc6XG4gICAgdHJ5IHtcbiAgICAgIC8vIG51bGwgaXMgYW4gb2JqZWN0IGJ1dCBpcyBmYWxzeS4gU3dhbGxvdyBpdC5cbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgcmV0dXJuICd7Li4ufSc7XG4gICAgfVxuICBkZWZhdWx0OlxuICAgICAvLyBBbnl0aGluZyBlbHNlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgLy8gRm9yIGV4YW1wbGU6IHVuZGVmaW5lZCwgU3ltYm9sLCBldGMuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgZ29lcyB0aHJvdWdoIGFuIG9iamVjdCB0cnlpbmcgdG8gcmVzb2x2ZSBhIHBhdGguXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlIC0gVGhlIG9iamVjdCB0byB0cmF2ZXJzZSAoaW4gZWFjaCByZWN1cnNpdmUgY2FsbCB3ZSBkaWcgaW50byB0aGlzIG9iamVjdClcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGggLSBBbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0cmF2ZXJzZSBvbmUtYnktb25lXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhdGhJbmRleD0wXSAtIFRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBwYXRoIGFycmF5XG4gKi9cbmZ1bmN0aW9uIF9yZWN1cnNpdmVQYXRoUmVzb2x2ZXIoc2NvcGUsIHBhdGgsIHBhdGhJbmRleCA9IDApIHtcbiAgaWYgKHR5cGVvZiBzY29wZSAhPT0gJ29iamVjdCcgfHwgc2NvcGUgPT09IG51bGwgfHwgc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHZhck5hbWUgPSBwYXRoW3BhdGhJbmRleF07XG4gIGNvbnN0IHZhbHVlID0gc2NvcGVbdmFyTmFtZV07XG5cbiAgaWYgKHBhdGhJbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgLy8gSXQncyBhIGxlYWYsIHJldHVybiB3aGF0ZXZlciBpdCBpc1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBfcmVjdXJzaXZlUGF0aFJlc29sdmVyKHZhbHVlLCBwYXRoLCArK3BhdGhJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZXNvbHZlcih2YXJOYW1lLCB2aWV3KSB7XG4gIHJldHVybiBfcmVjdXJzaXZlUGF0aFJlc29sdmVyKHZpZXcsIHZhck5hbWUuc3BsaXQoJy4nKSk7XG59XG5cbi8qKlxuICogUmVwbGFjZXMgZXZlcnkge3t2YXJpYWJsZX19IGluc2lkZSB0aGUgdGVtcGxhdGUgd2l0aCB2YWx1ZXMgcHJvdmlkZWQgYnkgdmlldy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgY29udGFpbmluZyBvbmUgb3IgbW9yZSB7e3ZhcmlhYmxlTmFtZXN9fSBldmVyeSB2YXJpYWJsZVxuICogICAgICAgIG5hbWVzIHRoYXQgaXMgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIElmIGl0J3Mgb21pdHRlZCwgaXQnbGwgYmUgYXNzdW1lZCBhbiBlbXB0eSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3ZpZXc9e31dIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIGZvciBldmVyeSB2YXJpYWJsZSBuYW1lcyB0aGF0IGlzIHVzZWQgaW5cbiAqICAgICAgICB0aGUgdGVtcGxhdGUuIElmIGl0J3Mgb21pdHRlZCwgaXQnbGwgYmUgc2V0IHRvIGFuIGVtcHR5IG9iamVjdCBlc3NlbnRpYWxseSByZW1vdmluZyBhbGxcbiAqICAgICAgICB7e3Zhck5hbWV9fXMgaW4gdGhlIHRlbXBsYXRlLlxuICogQHBhcmFtIHtSZXNvbHZlckZufSBbcmVzb2x2ZXJdIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXG4gKiAgICAgICAgY2FsbGVkIGZvciBldmVyeSB7e3Zhck5hbWV9fSB0byBnZW5lcmF0ZSBhIHZhbHVlLiBJZiB0aGUgcmVzb2x2ZXIgdGhyb3dzIGFuIGVycm9yXG4gKiAgICAgICAgd2UnbGwgcHJvY2VlZCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlIHJlc29sdXRpb24gYWxnb3JpdGhtIChmaW5kIHRoZSB2YWx1ZSBmcm9tIHRoZSB2aWV3XG4gKiAgICAgICAgb2JqZWN0KS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGVtcGxhdGUgd2hlcmUgaXRzIHZhcmlhYmxlIG5hbWVzIHJlcGxhY2VkIHdpdGhcbiAqICAgICAgICBjb3JyZXNwb25kaW5nIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3QgZm91bmQgb3IgaXMgaW52YWxpZCwgaXQgd2lsbFxuICogICAgICAgIGJlIGFzc3VtZWQgZW1wdHkgc3RyaW5nICcnLiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0c2VsZiwgaXQnbGxcbiAqICAgICAgICBiZSBzdHJpbmdpZmllZCBieSBKU09OLlxuICogICAgICAgIEluIGNhc2Ugb2YgYSBKU09OIHN0cmluZ2lmeSBlcnJvciB0aGUgcmVzdWx0IHdpbGwgbG9vayBsaWtlIFwiey4uLn1cIi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldyA9IHt9LCByZXNvbHZlciA9IGRlZmF1bHRSZXNvbHZlcikge1xuICAvLyBkb24ndCB0b3VjaCB0aGUgdGVtcGxhdGUgaWYgaXQgaXMgbm90IGEgc3RyaW5nXG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoVkFSX01BVENIX1JFR0VYLCBmdW5jdGlvbiAobWF0Y2gsIHZhck5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gZGVmYXVsdFJlc29sdmVyIG5ldmVyIHRocm93c1xuICAgICAgcmV0dXJuIF92YWx1ZVRvU3RyaW5nKHJlc29sdmVyKHZhck5hbWUsIHZpZXcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB5b3VyIHJlc29sdmVyIHRocm93cywgd2UgcHJvY2VlZCB3aXRoIHRoZSBkZWZhdWx0IHJlc29sdmVyXG4gICAgICByZXR1cm4gX3ZhbHVlVG9TdHJpbmcoZGVmYXVsdFJlc29sdmVyKHZhck5hbWUsIHZpZXcpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFRhbWVyIG9uIDE5LzEwLzIwMTcuXG4gKi9cblxuIGltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucydcbiBpbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnXG5cblN0YWdlLmRlZmluZVdpZGdldCh7XG4gICAgaWQ6ICd2aXN1YWwtaW5wdXQnLFxuICAgIG5hbWU6ICdWaXN1YWxpemF0aW9uIERlcGxveW1lbnQgQ3JlYXRpb24gSW5wdXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXphdGlvbiBEZXBsb3ltZW50IENyZWF0aW9uIElucHV0IFdpZGdldCcsXG4gICAgaW5pdGlhbFdpZHRoOiAxMixcbiAgICBpbml0aWFsSGVpZ2h0OiAxNixcbiAgICBjb2xvciA6ICdwdXJwbGUnLFxuICAgIGhhc1N0eWxlOiB0cnVlLFxuICAgIGlzUmVhY3Q6IHRydWUsXG4gICAgXG4gICAgcGVybWlzc2lvbjogU3RhZ2UuR2VuZXJpY0NvbmZpZy5DVVNUT01fV0lER0VUX1BFUk1JU1NJT05TLkNVU1RPTV9BTEwsXG4gICAgY2F0ZWdvcmllczogW1N0YWdlLkdlbmVyaWNDb25maWcuQ0FURUdPUlkuU1lTVEVNX1JFU09VUkNFU10sXG5cbiAgICBpbml0aWFsQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBpZDogJ2JsdWVwcmludElkJywgbmFtZTogJ0JsdWVwcmludCBJZCcsIGRlZmF1bHQ6ICdDT1YnLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuU1RSSU5HIH0sICAgICAgXG4gICAgICB7IGlkOiAnZGVwbG95bWVudElkJywgbmFtZTogJ0RlcGxveW1lbnQgSWQnLCBkZWZhdWx0OiAnY2xvdWRpZnktZGVwbG95bWVudC12aXN1YWxpemF0aW9uLXdpZGdldC1zYW1wbGUnLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuU1RSSU5HIH0sXG4gICAgICB7aWQ6ICdhbGxvd05hbWVFZGl0JywgbmFtZTogJ0FsbG93IFVzZXIgdG8gY2hhbmdlIERlcGxveW1lbnQgTmFtZScsIGRlZmF1bHQ6IHRydWUsIHR5cGU6IFN0YWdlLkJhc2ljLkdlbmVyaWNGaWVsZC5CT09MRUFOX1RZUEV9LFxuICAgICAge2lkOiAnZGV2TW9kZScsIG5hbWU6ICdFbmFibGUgRGV2ZWxvcGVycyBNb2RlJywgZGVmYXVsdDogZmFsc2UsIHR5cGU6IFN0YWdlLkJhc2ljLkdlbmVyaWNGaWVsZC5CT09MRUFOX1RZUEV9LFxuICAgIF0sXG5cbiAgICBmZXRjaERhdGEgKHdpZGdldCwgdG9vbGJveCwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnMgKHtcbiAgICAgICAgICB0b29sYm94LFxuICAgICAgICAgIC4uLndpZGdldC5jb25maWd1cmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhY3Rpb25zLmRvR2V0SW5wdXREZXNjcmlwdG9yICgpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICh3aWRnZXQsIGRhdGEsIGVycm9yLCB0b29sYm94KSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoXy5pc0VtcHR5IChkYXRhKSkge1xuICAgICAgICAgIHJldHVybiA8U3RhZ2UuQmFzaWMuTG9hZGluZyAvPjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgYWN0aW9ucyA9IG5ldyBBY3Rpb25zICh7XG4gICAgICAgICAgdG9vbGJveCxcbiAgICAgICAgICAuLi53aWRnZXQuY29uZmlndXJhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgd2lkZ2V0PXt3aWRnZXR9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgdG9vbGJveD17dG9vbGJveH1cbiAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbn0pOyJdfQ==
