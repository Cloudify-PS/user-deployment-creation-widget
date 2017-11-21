(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":17}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":18}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":19}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":20}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":21}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":22}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":23}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":24}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":25}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":26}],11:[function(require,module,exports){
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
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":7,"../helpers/typeof":16}],15:[function(require,module,exports){
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
},{"../helpers/typeof":16}],16:[function(require,module,exports){
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
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],17:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":34}],18:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":34,"../../modules/es6.object.assign":102}],19:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":34,"../../modules/es6.object.create":103}],20:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":34,"../../modules/es6.object.define-property":104}],21:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":34,"../../modules/es6.object.get-prototype-of":105}],22:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":34,"../../modules/es6.object.keys":106}],23:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":34,"../../modules/es6.object.set-prototype-of":107}],24:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":34,"../modules/es6.object.to-string":108,"../modules/es6.promise":109,"../modules/es6.string.iterator":110,"../modules/es7.promise.finally":112,"../modules/es7.promise.try":113,"../modules/web.dom.iterable":116}],25:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":34,"../../modules/es6.object.to-string":108,"../../modules/es6.symbol":111,"../../modules/es7.symbol.async-iterator":114,"../../modules/es7.symbol.observable":115}],26:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":98,"../../modules/es6.string.iterator":110,"../../modules/web.dom.iterable":116}],27:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],28:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],29:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],30:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":53}],31:[function(require,module,exports){
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

},{"./_to-absolute-index":90,"./_to-iobject":92,"./_to-length":93}],32:[function(require,module,exports){
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

},{"./_cof":33,"./_wks":99}],33:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],34:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],35:[function(require,module,exports){
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

},{"./_a-function":27}],36:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],37:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":42}],38:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":44,"./_is-object":53}],39:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],40:[function(require,module,exports){
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

},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],41:[function(require,module,exports){
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

},{"./_core":34,"./_ctx":35,"./_global":44,"./_hide":46}],42:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],43:[function(require,module,exports){
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

},{"./_an-object":30,"./_ctx":35,"./_is-array-iter":51,"./_iter-call":54,"./_to-length":93,"./core.get-iterator-method":100}],44:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],45:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],46:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":37,"./_object-dp":66,"./_property-desc":79}],47:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":44}],48:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":37,"./_dom-create":38,"./_fails":42}],49:[function(require,module,exports){
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

},{}],50:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":33}],51:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":59,"./_wks":99}],52:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":33}],53:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],54:[function(require,module,exports){
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

},{"./_an-object":30}],55:[function(require,module,exports){
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

},{"./_hide":46,"./_object-create":65,"./_property-desc":79,"./_set-to-string-tag":84,"./_wks":99}],56:[function(require,module,exports){
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

},{"./_export":41,"./_has":45,"./_hide":46,"./_iter-create":55,"./_iterators":59,"./_library":60,"./_object-gpo":72,"./_redefine":81,"./_set-to-string-tag":84,"./_wks":99}],57:[function(require,module,exports){
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

},{"./_wks":99}],58:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],59:[function(require,module,exports){
module.exports = {};

},{}],60:[function(require,module,exports){
module.exports = true;

},{}],61:[function(require,module,exports){
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

},{"./_fails":42,"./_has":45,"./_is-object":53,"./_object-dp":66,"./_uid":96}],62:[function(require,module,exports){
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

},{"./_cof":33,"./_global":44,"./_task":89}],63:[function(require,module,exports){
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

},{"./_a-function":27}],64:[function(require,module,exports){
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

},{"./_fails":42,"./_iobject":50,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_to-object":94}],65:[function(require,module,exports){
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

},{"./_an-object":30,"./_dom-create":38,"./_enum-bug-keys":39,"./_html":47,"./_object-dps":67,"./_shared-key":85}],66:[function(require,module,exports){
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

},{"./_an-object":30,"./_descriptors":37,"./_ie8-dom-define":48,"./_to-primitive":95}],67:[function(require,module,exports){
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

},{"./_an-object":30,"./_descriptors":37,"./_object-dp":66,"./_object-keys":74}],68:[function(require,module,exports){
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

},{"./_descriptors":37,"./_has":45,"./_ie8-dom-define":48,"./_object-pie":75,"./_property-desc":79,"./_to-iobject":92,"./_to-primitive":95}],69:[function(require,module,exports){
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

},{"./_object-gopn":70,"./_to-iobject":92}],70:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":39,"./_object-keys-internal":73}],71:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],72:[function(require,module,exports){
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

},{"./_has":45,"./_shared-key":85,"./_to-object":94}],73:[function(require,module,exports){
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

},{"./_array-includes":31,"./_has":45,"./_shared-key":85,"./_to-iobject":92}],74:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":39,"./_object-keys-internal":73}],75:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],76:[function(require,module,exports){
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

},{"./_core":34,"./_export":41,"./_fails":42}],77:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],78:[function(require,module,exports){
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

},{"./_an-object":30,"./_is-object":53,"./_new-promise-capability":63}],79:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],80:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":46}],81:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":46}],82:[function(require,module,exports){
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

},{"./_an-object":30,"./_ctx":35,"./_is-object":53,"./_object-gopd":68}],83:[function(require,module,exports){
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

},{"./_core":34,"./_descriptors":37,"./_global":44,"./_object-dp":66,"./_wks":99}],84:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":45,"./_object-dp":66,"./_wks":99}],85:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":86,"./_uid":96}],86:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":44}],87:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":27,"./_an-object":30,"./_wks":99}],88:[function(require,module,exports){
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

},{"./_defined":36,"./_to-integer":91}],89:[function(require,module,exports){
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

},{"./_cof":33,"./_ctx":35,"./_dom-create":38,"./_global":44,"./_html":47,"./_invoke":49}],90:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":91}],91:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],92:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":36,"./_iobject":50}],93:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":91}],94:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":36}],95:[function(require,module,exports){
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

},{"./_is-object":53}],96:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],97:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":34,"./_global":44,"./_library":60,"./_object-dp":66,"./_wks-ext":98}],98:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":99}],99:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":44,"./_shared":86,"./_uid":96}],100:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":32,"./_core":34,"./_iterators":59,"./_wks":99}],101:[function(require,module,exports){
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

},{"./_add-to-unscopables":28,"./_iter-define":56,"./_iter-step":58,"./_iterators":59,"./_to-iobject":92}],102:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":41,"./_object-assign":64}],103:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":41,"./_object-create":65}],104:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":37,"./_export":41,"./_object-dp":66}],105:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":94}],106:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":74,"./_object-sap":76,"./_to-object":94}],107:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":41,"./_set-proto":82}],108:[function(require,module,exports){

},{}],109:[function(require,module,exports){
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

},{"./_a-function":27,"./_an-instance":29,"./_classof":32,"./_core":34,"./_ctx":35,"./_export":41,"./_for-of":43,"./_global":44,"./_is-object":53,"./_iter-detect":57,"./_library":60,"./_microtask":62,"./_new-promise-capability":63,"./_perform":77,"./_promise-resolve":78,"./_redefine-all":80,"./_set-species":83,"./_set-to-string-tag":84,"./_species-constructor":87,"./_task":89,"./_wks":99}],110:[function(require,module,exports){
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

},{"./_iter-define":56,"./_string-at":88}],111:[function(require,module,exports){
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

},{"./_an-object":30,"./_descriptors":37,"./_enum-keys":40,"./_export":41,"./_fails":42,"./_global":44,"./_has":45,"./_hide":46,"./_is-array":52,"./_library":60,"./_meta":61,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":79,"./_redefine":81,"./_set-to-string-tag":84,"./_shared":86,"./_to-iobject":92,"./_to-primitive":95,"./_uid":96,"./_wks":99,"./_wks-define":97,"./_wks-ext":98}],112:[function(require,module,exports){
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

},{"./_core":34,"./_export":41,"./_global":44,"./_promise-resolve":78,"./_species-constructor":87}],113:[function(require,module,exports){
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

},{"./_export":41,"./_new-promise-capability":63,"./_perform":77}],114:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":97}],115:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":97}],116:[function(require,module,exports){
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

},{"./_global":44,"./_hide":46,"./_iterators":59,"./_wks":99,"./es6.array.iterator":101}],117:[function(require,module,exports){
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

},{"babel-runtime/core-js/promise":8,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
    key: 'render',


    /*
    |--------------------------------------------------------------------------
    | React Renderer
    |--------------------------------------------------------------------------
    */
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
            ' ',
            'its Required'
          )
        );
      });

      var errorMessage = this.state.errors.error && React.createElement(
        Message,
        { color: 'red', onDismiss: function onDismiss() {
            return _this2.setState({ errors: (0, _assign2.default)(_this2.state.errors, { error: null }) });
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
    _this3.setState({ form: (0, _assign2.default)(_this3.state.form, (0, _defineProperty3.default)({}, id, value)) });
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
        // const inputs = this.state.form;

      };_this3.setState({ loading: true });
      var actions = new Stage.Common.BlueprintActions(_this3.props.toolbox);
      actions.doDeploy({ id: blueprint }, deployment, inputs, privateResource, skipPluginsValidation).then(function (deployment) {
        _this3.setState({ loading: false, errors: {}, success: 'Your request has been submitted and awaiting approval' });
        var onFinishRedirect = _this3.props.widget.configuration.onFinishRedirect;
        var template = _this3.props.widget.configuration.template;
        if (onFinishRedirect) {
          _this3.props.toolbox.drillDown(_this3.props.widget, template, { deploymentId: deployment.id }, deployment.id);
        }
      }).catch(function (err) {
        _this3.setState({ loading: false, errors: { error: err.message } });
      });
    }
  };
};

exports.default = List;

},{"./components/SelectBox":119,"./utils/YAML":120,"./utils/base10to64":132,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/defineProperty":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],119:[function(require,module,exports){
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

},{"../utils/mustache":133,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],120:[function(require,module,exports){
'use strict';

var Yaml = require('./lib/Yaml');
module.exports = Yaml;

},{"./lib/Yaml":131}],121:[function(require,module,exports){
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

},{"./Inline":126,"./Utils":130,"babel-runtime/helpers/typeof":16}],122:[function(require,module,exports){
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

},{"./Pattern":128}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
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

},{"./Escaper":122,"./Exception/DumpException":123,"./Exception/ParseException":124,"./Exception/ParseMore":125,"./Pattern":128,"./Unescaper":129,"./Utils":130,"babel-runtime/helpers/typeof":16}],127:[function(require,module,exports){
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

},{"./Exception/ParseException":124,"./Exception/ParseMore":125,"./Inline":126,"./Pattern":128,"./Utils":130,"babel-runtime/helpers/typeof":16}],128:[function(require,module,exports){
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

},{}],129:[function(require,module,exports){
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

},{"./Pattern":128,"./Utils":130}],130:[function(require,module,exports){
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

},{"./Pattern":128}],131:[function(require,module,exports){
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

},{"./Dumper":121,"./Parser":127,"./Utils":130}],132:[function(require,module,exports){
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

},{}],133:[function(require,module,exports){
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

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/helpers/typeof":16}],134:[function(require,module,exports){
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

  initialConfiguration: [{ id: 'blueprintId', name: 'Blueprint Id', default: 'COV', type: Stage.Basic.GenericField.STRING },
  // { id: 'deploymentId', name: 'Deployment Id', default: 'cloudify-deployment-visualization-widget-sample', type: Stage.Basic.GenericField.STRING },
  { id: 'allowNameEdit', name: 'Allow User to change Deployment Name', default: true, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: 'onFinishRedirect', name: 'Redirect to Page on finish', default: false, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: 'template', name: 'Template to Redirect to, after finish', default: 'deployment', type: Stage.Basic.GenericField.STRING_TYPE }, { id: 'devMode', name: 'Enable Developers Mode', default: false, type: Stage.Basic.GenericField.BOOLEAN_TYPE }],

  fetchData: function fetchData(widget, toolbox, params) {
    var actions = new _Actions2.default((0, _assign2.default)({ toolbox: toolbox }, widget.configuration));

    return actions.doGetInputDescriptor();
  },


  render: function render(widget, data, error, toolbox) {

    if (_.isEmpty(data)) {
      return React.createElement(Stage.Basic.Loading, null);
    }

    var actions = new _Actions2.default((0, _assign2.default)({ toolbox: toolbox }, widget.configuration));

    return React.createElement(_List2.default, {
      widget: widget,
      data: data,
      toolbox: toolbox,
      actions: actions
    });
  }
});

},{"./Actions":117,"./List":118,"babel-runtime/core-js/object/assign":2}]},{},[117,119,118,132,133,120,121,122,123,124,125,126,127,128,129,130,131,134])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy9BY3Rpb25zLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvTGlzdC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL2NvbXBvbmVudHMvU2VsZWN0Qm94LmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9pbmRleC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0R1bXBlci5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0VzY2FwZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9FeGNlcHRpb24vRHVtcEV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZUV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZU1vcmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9JbmxpbmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXJzZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXR0ZXJuLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVW5lc2NhcGVyLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVXRpbHMuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9ZYW1sLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvYmFzZTEwdG82NC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL211c3RhY2hlLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvd2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7O0FBSUE7OztJQUdxQixPO0FBQ25COzs7Ozs7O0FBT0EsbUJBQVksQ0FBWixFQUFlO0FBQUE7O0FBQ2IsU0FBSyxPQUFMLEdBQWUsRUFBRSxPQUFqQjtBQUNBLFNBQUssWUFBTCxHQUFvQixFQUFFLFlBQXRCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEVBQUUsV0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7c0NBT2tCO0FBQ2hCLGFBQU8sa0JBQVEsT0FBUixDQUFnQixDQUNyQjtBQUNFLFlBQUksSUFETjtBQUVFLGNBQU0sVUFGUjtBQUdFLGNBQU0sR0FIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLGtCQUREO0FBRU4sdUJBQWEsc0JBRlA7QUFHTixvQkFBVSxLQUhKO0FBSU4sbUJBQVMsQ0FDUCxFQUFFLE1BQU0sU0FBUixFQUFtQixPQUFPLFNBQTFCLEVBRE8sRUFFUCxFQUFFLE1BQU0sT0FBUixFQUFpQixPQUFPLE9BQXhCLEVBRk87QUFKSDtBQUxWLE9BRHFCLEVBZ0JyQjtBQUNFLFlBQUksV0FETjtBQUVFLGNBQU0sUUFGUjtBQUdFLGNBQU0sR0FIUjtBQUlFLGtCQUFVLEdBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFdBREQ7QUFFTixvQkFBVSxLQUZKO0FBR04sZ0JBQU0sVUFIQSxFQUdZO0FBQ2xCLGlCQUFPLE9BSkQsRUFJVTtBQUNoQixrQkFBUTtBQUxGO0FBTFYsT0FoQnFCLEVBNkJyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxhQUZIO0FBR04sdUJBQWEsd0JBSFA7QUFJTixzQkFBWTtBQUpOO0FBTFYsT0E3QnFCLEVBeUNyQjtBQUNFLFlBQUksYUFETjtBQUVFLGNBQU0sVUFGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLGFBREQ7QUFFTixtQkFBUztBQUZIO0FBTFYsT0F6Q3FCLEVBbURyQjtBQUNFLFlBQUksV0FETjtBQUVFLGNBQU0sUUFGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFdBREQ7QUFFTixtQkFBUztBQUZIO0FBTFYsT0FuRHFCLEVBNkRyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxLQUZIO0FBR04sbUJBQVMsQ0FDUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBRE8sRUFFUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBRk8sRUFHUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBSE87QUFISDtBQUxWLE9BN0RxQixFQTRFckI7QUFDRSxZQUFJLGFBRE47QUFFRSxjQUFNLFVBRlI7QUFHRSxjQUFNLEVBSFI7QUFJRSxrQkFBVSxFQUpaO0FBS0UsZ0JBQVE7QUFDTixpQkFBTyxhQUREO0FBRU4sdUJBQWEsZ0JBRlA7QUFHTixvQkFBVSxJQUhKO0FBSU4sbUJBQVMsQ0FBQyxLQUFELENBSkg7QUFLTixtQkFBUyxDQUNQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFETyxFQUVQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFGTyxFQUdQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFITztBQUxIO0FBTFYsT0E1RXFCLEVBNkZyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxFQUZIO0FBR04sZ0JBQU0sQ0FIQTtBQUlOLGVBQUssQ0FKQztBQUtOLGVBQUs7QUFMQztBQUxWLE9BN0ZxQixFQTBHckI7QUFDRSxjQUFNLFNBRFI7QUFFRSxjQUFNLEVBRlI7QUFHRSxrQkFBVSxFQUhaO0FBSUUsZ0JBQVE7QUFDTixpQkFBTyxzQkFERDtBQUVOLGlCQUFPO0FBRkQ7QUFKVixPQTFHcUIsRUFtSHJCO0FBQ0UsWUFBSSxjQUROO0FBRUUsY0FBTSxXQUZSO0FBR0UsY0FBTSxHQUhSO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGdCQUFRO0FBQ04saUJBQU8sY0FERDtBQUVOLG9CQUFVLG1DQUZKO0FBR04saUJBQU8sQ0FIRCxFQUdJO0FBQ1YsbUJBQVMsSUFKSDtBQUtOLG1CQUFTLENBQ1AsRUFBRSxNQUFNLFNBQVIsRUFBbUIsT0FBTyxJQUExQixFQURPLEVBRVAsRUFBRSxNQUFNLE9BQVIsRUFBaUIsT0FBTyxJQUF4QixFQUZPLEVBR1AsRUFBRSxNQUFNLFFBQVIsRUFBa0IsT0FBTyxJQUF6QixFQUhPLEVBSVAsRUFBRSxNQUFNLE9BQVIsRUFBaUIsT0FBTyxJQUF4QixFQUpPO0FBTEg7QUFMVixPQW5IcUIsQ0FBaEIsQ0FBUDtBQXNJQTtBQUNEOzs7MkNBRW9EO0FBQUE7O0FBQUEsVUFBaEMsSUFBZ0MsdUVBQXpCLHVCQUF5Qjs7QUFDbkQsY0FBUSxHQUFSLENBQVksRUFBQyxVQUFELEVBQVo7QUFDQSxhQUFPLEtBQUssY0FBTCxDQUFvQixLQUFLLFdBQXpCLEVBQXNDLElBQXRDLENBQTJDLGlCQUFTO0FBQ3pELFlBQUksT0FBTyxNQUFNLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLElBQTNCLENBQWdDO0FBQUEsaUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFBQSxTQUFoQyxDQUFYO0FBQ0EsWUFBRyxJQUFILEVBQVE7QUFDTixpQkFBTyxNQUFLLGdCQUFMLENBQXNCLEtBQUssR0FBM0IsQ0FBUDtBQUNELFNBRkQsTUFFSztBQUNILGlCQUFPLGtCQUFRLE1BQVIsQ0FBa0IsSUFBbEIsaUJBQVA7QUFDRDtBQUNGLE9BUE0sQ0FBUDtBQVFEOzs7cUNBRWdCLFksRUFBYztBQUM3QixhQUFPLEtBQUssT0FBTCxDQUFhLFVBQWIsR0FBMEIsS0FBMUIsbUJBQWdELFlBQWhELCtCQUFQO0FBQ0Q7OzttQ0FFYyxXLEVBQWE7QUFDMUIsYUFBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLEtBQTNCLHFCQUFtRCxXQUFuRCxjQUFQO0FBQ0Q7OztxQ0FFZ0IsSSxFQUFNO0FBQ3JCLGFBQU8sS0FBSyxPQUFMLENBQWEsV0FBYixHQUEyQixLQUEzQixDQUFpQyxxQkFBakMsRUFBd0QsRUFBRSxVQUFGLEVBQXhELENBQVA7QUFDRDs7Ozs7a0JBckxrQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7O0lBSXFCLEk7OztBQUNuQjs7Ozs7QUFLQSxnQkFBWSxLQUFaLEVBQW1CLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUEsa0lBQ3BCLEtBRG9CLEVBQ2IsT0FEYTs7QUFBQTs7QUFHMUIsUUFBTSxPQUFPLE1BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsVUFBbkIsR0FBZ0Msa0JBQWhDLEVBQWI7QUFDQSxRQUFNLFlBQVksTUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxXQUFsRDtBQUNBLFFBQU0sU0FBUyx3QkFBVyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEdBQUwsS0FBYSxJQUF4QixDQUFYLENBQWY7QUFDQTtBQUNBOztBQUVBLFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxFQURLO0FBRVgsbUJBQWEsRUFGRjtBQUdYLGNBQVEsRUFIRztBQUlYLGVBQVMsSUFKRTtBQUtYLDZDQUFxQyxJQUFyQyxTQUE2QyxTQUE3QyxTQUEwRCxNQUwvQztBQU1YLGVBQVMsS0FORTtBQU9YLGlCQUFXLElBUEE7QUFRWCxtQkFBYTtBQVJGLEtBQWI7QUFUMEI7QUFtQjNCOzs7O3lDQUdvQjtBQUNuQixVQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFFLGFBQWEsSUFBZixFQUFkO0FBQ0EsV0FBSyxlQUFMLENBQXFCLElBQXJCO0FBQ0Q7OztvQ0FFZSxLLEVBQU87QUFDckIsV0FBSyxRQUFMLENBQWMsRUFBRSxXQUFXLElBQWIsRUFBZDtBQUNBLFVBQUk7QUFDRixZQUFJLE9BQU8sZUFBSyxLQUFMLENBQVcsU0FBUyxLQUFLLEtBQUwsQ0FBVyxXQUEvQixDQUFYO0FBQ0EsYUFBSyxXQUFMLENBQWlCLElBQWpCO0FBQ0QsT0FIRCxDQUdFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsYUFBSyxRQUFMLENBQWMsRUFBRSxXQUFXLEVBQUUsT0FBZixFQUFkO0FBQ0Q7QUFDRjs7O2dDQUVXLEksRUFBTTs7QUFFaEI7QUFDQSxVQUFNLGNBQWMsS0FBSyxNQUFMLENBQVk7QUFBQSxlQUFLLENBQ25DLFFBRG1DLEVBRW5DLE9BRm1DLEVBR25DLFVBSG1DLEVBSW5DLFVBSm1DLEVBS25DLFFBTG1DLEVBTW5DLE9BTm1DLEVBT25DLFVBUG1DLEVBUW5DLE9BUm1DLEVBU25DLFNBVG1DLEVBVW5DLFdBVm1DLEVBV25DLFFBWG1DLENBVzFCLEVBQUUsSUFYd0IsQ0FBTDtBQUFBLE9BQVosQ0FBcEI7O0FBYUEsY0FBUSxHQUFSLENBQVksRUFBRSx3QkFBRixFQUFaOztBQUVBO0FBQ0Esa0JBQVksSUFBWixDQUFpQixVQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsZUFBVSxFQUFFLFFBQUYsR0FBYSxFQUFFLFFBQXpCO0FBQUEsT0FBakI7O0FBRUE7QUFDQSxVQUFJLE9BQU8sRUFBWDtBQUNBLGtCQUFZLE9BQVosQ0FBb0IsZ0JBQVE7QUFDMUIsWUFBSSxLQUFLLEVBQUwsSUFBVyxLQUFLLElBQUwsS0FBYyxRQUE3QixFQUF1QztBQUNyQyxlQUFLLEtBQUssRUFBVixJQUFnQixLQUFLLE1BQUwsQ0FBWSxPQUE1QjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFdBQUssUUFBTCxDQUFjLEVBQUUsVUFBRixFQUFRLHdCQUFSLEVBQWQ7QUFDRDs7Ozs7QUFzREQ7Ozs7OzZCQUtTO0FBQUE7O0FBQ1AsVUFBSSxLQUFLLEtBQUwsQ0FBVyxPQUFmLEVBQXdCO0FBQ3RCLGVBQU8sb0JBQUMsS0FBRCxDQUFPLEtBQVAsQ0FBYSxPQUFiLE9BQVA7QUFDRDs7QUFITSx5QkFLb0QsTUFBTSxLQUwxRDtBQUFBLFVBS0EsTUFMQSxnQkFLQSxNQUxBO0FBQUEsVUFLUSxLQUxSLGdCQUtRLEtBTFI7QUFBQSxVQUtlLFFBTGYsZ0JBS2UsUUFMZjtBQUFBLFVBS3lCLFFBTHpCLGdCQUt5QixRQUx6QjtBQUFBLFVBS21DLE9BTG5DLGdCQUttQyxPQUxuQztBQUFBLFVBSzRDLElBTDVDLGdCQUs0QyxJQUw1Qzs7QUFPUDs7OztBQUdBLFVBQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEdBQXZCLENBQTJCLFVBQUMsSUFBRCxFQUFPLEdBQVA7QUFBQSxlQUFlO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLLEdBQWhDLEVBQXFDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxJQUFMLElBQWEsRUFBZCxJQUFvQixHQUFqQyxFQUE1QztBQUV2RCxlQUFLLElBQUwsS0FBYyxRQUFkLElBQTBCO0FBQUMsa0JBQUQ7QUFBQTtBQUN6QixxQkFBTyxDQUFDLEtBQUssTUFBTCxDQUFZLFFBREs7QUFFekIscUJBQU8sS0FBSyxNQUFMLENBQVksS0FGTTtBQUd6Qix3QkFBVSxLQUFLLE1BQUwsQ0FBWSxRQUhHO0FBSXpCLG9CQUFNLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEIsR0FBNEIsS0FBSyxNQUFMLENBQVksSUFKckI7QUFLekIsdUJBQVMsbUJBQU07QUFDYixxQkFBSyxNQUFMLENBQVksTUFBWixLQUF1QixrQkFBdkIsSUFBNkMsT0FBSyxpQkFBTCxDQUF1QixJQUF2QixRQUE3QztBQUNEO0FBUHdCO0FBU3hCLGlCQUFLLE1BQUwsQ0FBWTtBQVRZLFdBRjZCO0FBY3ZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUIsb0JBQUMsS0FBRDtBQUN4Qix1QkFEd0I7QUFFeEIsa0JBQU0sS0FBSyxNQUFMLENBQVksVUFBWixHQUF5QixVQUF6QixHQUFzQyxNQUZwQjtBQUd4QixtQkFBTyxLQUFLLE1BQUwsQ0FBWSxLQUhLO0FBSXhCLHlCQUFhLEtBQUssTUFBTCxDQUFZLFdBSkQ7QUFLeEIsbUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBTGlCO0FBTXhCLHNCQUFVLGtCQUFDLEtBQUQsRUFBUSxPQUFSO0FBQUEscUJBQW9CLE9BQUssWUFBTCxDQUFrQixJQUFsQixTQUE2QixLQUFLLEVBQWxDLEVBQXNDLFFBQVEsS0FBOUMsQ0FBcEI7QUFBQTtBQU5jLFlBZDhCO0FBdUJ2RCxlQUFLLElBQUwsS0FBYyxVQUFkLElBQTRCLG9CQUFDLFFBQUQ7QUFDM0IsbUJBQU8sS0FBSyxNQUFMLENBQVksS0FEUTtBQUUzQixxQkFBUyxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQUssRUFBckIsQ0FGa0I7QUFHM0Isc0JBQVUsa0JBQUMsS0FBRCxFQUFRLE9BQVI7QUFBQSxxQkFBb0IsT0FBSyxZQUFMLENBQWtCLElBQWxCLFNBQTZCLEtBQUssRUFBbEMsRUFBc0MsUUFBUSxPQUE5QyxDQUFwQjtBQUFBO0FBSGlCLFlBdkIyQjtBQTZCdkQsZUFBSyxJQUFMLEtBQWMsUUFBZCxJQUEwQixvQkFBQyxRQUFEO0FBQ3pCLHdCQUR5QjtBQUV6QixtQkFBTyxLQUFLLE1BQUwsQ0FBWSxLQUZNO0FBR3pCLHFCQUFTLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixDQUhnQjtBQUl6QixzQkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLHFCQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxRQUFRLE9BQTlDLENBQXBCO0FBQUE7QUFKZSxZQTdCNkI7QUFvQ3ZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUI7QUFBQTtBQUFBO0FBQ3hCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUR3QjtBQUV4QiwyQ0FGd0I7QUFHeEIsMkNBSHdCO0FBSXZCLGlCQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsTUFBRCxFQUFTLEdBQVQ7QUFBQSxxQkFBaUI7QUFBQTtBQUFBLGtCQUFLLEtBQUssR0FBVjtBQUN4QyxvQ0FBQyxRQUFEO0FBQ0UsNkJBREY7QUFFRSx3QkFBTSxLQUFLLEVBRmI7QUFHRSx5QkFBTyxPQUFPLElBSGhCO0FBSUUseUJBQU8sT0FBTyxLQUpoQjtBQUtFLDJCQUFTLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixNQUE2QixPQUFPLEtBTC9DO0FBTUUsNEJBQVUsa0JBQUMsS0FBRCxFQUFRLE9BQVI7QUFBQSwyQkFBb0IsT0FBSyxZQUFMLENBQWtCLElBQWxCLFNBQTZCLEtBQUssRUFBbEMsRUFBc0MsUUFBUSxLQUE5QyxDQUFwQjtBQUFBO0FBTlo7QUFEd0MsZUFBakI7QUFBQSxhQUF4QjtBQUp1QixXQXBDOEI7QUFvRHZELGVBQUssSUFBTCxLQUFjLFVBQWQsSUFBNEI7QUFBQTtBQUFBO0FBQzNCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUQyQjtBQUUzQiwyQ0FGMkI7QUFHM0IsMkNBSDJCO0FBSTNCLGdDQUFDLFFBQUQ7QUFDRSx5QkFERjtBQUVFLDZCQUZGO0FBR0Usd0JBQVUsS0FBSyxNQUFMLENBQVksUUFIeEI7QUFJRSwyQkFBYSxLQUFLLE1BQUwsQ0FBWSxXQUozQjtBQUtFLHVCQUFTLEtBQUssTUFBTCxDQUFZLE9BTHZCO0FBTUUscUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBTlQ7QUFPRSx3QkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLHVCQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxRQUFRLEtBQTlDLENBQXBCO0FBQUE7QUFQWjtBQUoyQixXQXBEMkI7QUFtRXZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUI7QUFBQTtBQUFBO0FBQ3hCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUR3QjtBQUV4QiwyQ0FGd0I7QUFHeEIsMkNBSHdCO0FBSXhCO0FBQ0Usb0JBQUssT0FEUDtBQUVFLG9CQUFNLEtBQUssTUFBTCxDQUFZLElBQVosSUFBb0IsQ0FGNUI7QUFHRSxtQkFBSyxLQUFLLE1BQUwsQ0FBWSxHQUFaLElBQW1CLENBSDFCO0FBSUUsbUJBQUssS0FBSyxNQUFMLENBQVksR0FBWixJQUFtQixHQUoxQjtBQUtFLHFCQUFPLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixDQUxUO0FBTUUsd0JBQVU7QUFBQSx1QkFBUyxPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxNQUFNLE1BQU4sQ0FBYSxLQUFuRCxDQUFUO0FBQUEsZUFOWjtBQU9FLHFCQUFPLEVBQUUsT0FBTyxNQUFUO0FBUFQ7QUFKd0IsV0FuRThCO0FBa0Z2RCxlQUFLLElBQUwsS0FBYyxTQUFkLElBQTJCO0FBQUMsbUJBQUQ7QUFBQTtBQUMxQixxQkFBTyxLQUFLLE1BQUwsQ0FBWTtBQURPO0FBRXhCLGlCQUFLLE1BQUwsQ0FBWTtBQUZZLFdBbEY0QjtBQXNGdkQsZUFBSyxJQUFMLEtBQWMsV0FBZCxJQUE2QjtBQUFBO0FBQUE7QUFDNUI7QUFBQTtBQUFBO0FBQUksbUJBQUssTUFBTCxDQUFZO0FBQWhCLGFBRDRCO0FBRTVCLDJDQUY0QjtBQUV0QjtBQUNKLHFCQUFPLEtBQUssTUFBTCxDQUFZLEtBRGY7QUFFSix3QkFBVSxLQUFLLE1BQUwsQ0FBWSxRQUZsQjtBQUdKLHVCQUFTLEtBQUssTUFBTCxDQUFZLE9BSGpCO0FBSUoscUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBSkg7QUFLSix3QkFBVTtBQUFBLHVCQUFTLE9BQUssWUFBTCxDQUFrQixJQUFsQixTQUE2QixLQUFLLEVBQWxDLEVBQXNDLEtBQXRDLENBQVQ7QUFBQTtBQUxOO0FBRnNCLFdBdEYwQjtBQWtHdEQsaUJBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBSyxFQUF2QixLQUNBLE9BQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBSyxFQUF2QixFQUEyQixLQUEzQixDQUFpQyxHQUFqQyxFQUFzQyxRQUF0QyxDQUErQyxVQUEvQyxDQURBLElBRUE7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQUE7QUFBa0MsaUJBQUssTUFBTCxDQUFZLEtBQVosSUFBcUIsT0FBdkQ7QUFBZ0UsZUFBaEU7QUFBQTtBQUFBO0FBcEdzRCxTQUFmO0FBQUEsT0FBM0IsQ0FBaEI7O0FBeUdBLFVBQU0sZUFBZSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEtBQWxCLElBQTRCO0FBQUMsZUFBRDtBQUFBLFVBQVMsT0FBTSxLQUFmLEVBQXFCLFdBQVc7QUFBQSxtQkFBTSxPQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsc0JBQWMsT0FBSyxLQUFMLENBQVcsTUFBekIsRUFBaUMsRUFBRSxPQUFPLElBQVQsRUFBakMsQ0FBVixFQUFkLENBQU47QUFBQSxXQUFoQztBQUM5QyxhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCO0FBRDRCLE9BQWpEOztBQUlBLFVBQU0saUJBQWlCLEtBQUssS0FBTCxDQUFXLE9BQVgsSUFBc0I7QUFBQyxlQUFEO0FBQUEsVUFBUyxPQUFNLE9BQWYsRUFBdUIsV0FBVztBQUFBLG1CQUFNLE9BQUssUUFBTCxDQUFjLEVBQUUsU0FBUyxJQUFYLEVBQWQsQ0FBTjtBQUFBLFdBQWxDO0FBQzFDLGFBQUssS0FBTCxDQUFXO0FBRCtCLE9BQTdDO0FBR0EsVUFBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0I7QUFBQyxlQUFEO0FBQUEsVUFBUyxPQUFNLFFBQWYsRUFBd0IsV0FBVztBQUFBLG1CQUFNLE9BQUssUUFBTCxDQUFjLEVBQUUsV0FBVyxJQUFiLEVBQWQsQ0FBTjtBQUFBLFdBQW5DO0FBQ3ZDLGFBQUssS0FBTCxDQUFXO0FBRDRCLE9BQTFDOztBQUlBLFVBQU0sZ0JBQWdCLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsYUFBbEIsQ0FBZ0MsYUFBdEQ7QUFDQSxVQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxPQUFoRDs7QUFFQSxjQUFRLEdBQVI7QUFDQSxhQUFPO0FBQUE7QUFBQTtBQUNKLG9CQURJO0FBRUosc0JBRkk7QUFJSixtQkFDQztBQUFDLGNBQUQ7QUFBQSxZQUFNLFdBQU47QUFDRSw4QkFBQyxJQUFELENBQU0sT0FBTixJQUFjLFFBQU8sK0RBQXJCLEdBREY7QUFFRTtBQUFDLGdCQUFELENBQU0sT0FBTjtBQUFBO0FBQ0cscUJBREg7QUFFRTtBQUNFLDJCQUFZLHVCQURkO0FBRUUscUJBQU8sS0FBSyxLQUFMLENBQVcsV0FGcEI7QUFHRSx3QkFBVSxrQkFBQyxLQUFEO0FBQUEsdUJBQVcsT0FBSyxRQUFMLENBQWMsRUFBRSxhQUFhLE1BQU0sTUFBTixDQUFhLEtBQTVCLEVBQWQsQ0FBWDtBQUFBLGVBSFo7QUFJRSxxQkFBTyxFQUFFLE9BQU8sTUFBVCxFQUFpQixRQUFRLE9BQXpCLEVBQWtDLFlBQVkscUJBQTlDLEVBQXFFLFVBQVUsS0FBL0U7QUFKVDtBQUZGLFdBRkY7QUFXRTtBQUFDLGdCQUFELENBQU0sT0FBTjtBQUFBLGNBQWMsV0FBZDtBQUNFO0FBQUMsb0JBQUQ7QUFBQSxnQkFBUSxPQUFNLE1BQWQsRUFBcUIsU0FBUztBQUFBLHlCQUFNLE9BQUssZUFBTCxDQUFxQixJQUFyQixRQUFOO0FBQUEsaUJBQTlCO0FBQUE7QUFBQTtBQURGO0FBWEYsU0FMRztBQXFCSixTQUFDLEtBQUssS0FBTCxDQUFXLE9BQVosSUFBdUIsYUFBdkIsSUFBd0Msb0JBQUMsS0FBRDtBQUN2QyxxQkFEdUM7QUFFdkMsZ0JBQU0sTUFGaUM7QUFHdkMsaUJBQU0sa0JBSGlDO0FBSXZDLHVCQUFZLDJEQUoyQjtBQUt2QyxpQkFBTyxLQUFLLEtBQUwsQ0FBVyxlQUxxQjtBQU12QyxvQkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLG1CQUFvQixPQUFLLFFBQUwsQ0FBYyxFQUFFLGlCQUFpQixRQUFRLEtBQTNCLEVBQWQsQ0FBcEI7QUFBQTtBQU42QixVQXJCcEM7QUE4Qkw7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNHLFdBQUMsS0FBSyxLQUFMLENBQVcsT0FBWixJQUF1QjtBQUQxQjtBQTlCSyxPQUFQO0FBa0NEOzs7RUF4UytCLE1BQU0sUyxHQVh4Qzs7Ozs7Ozs7T0FzRkUsWSxHQUFlLFVBQUMsRUFBRCxFQUFLLEtBQUwsRUFBZTtBQUM1QjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUUsTUFBTSxzQkFBYyxPQUFLLEtBQUwsQ0FBVyxJQUF6QixvQ0FBa0MsRUFBbEMsRUFBdUMsS0FBdkMsRUFBUixFQUFkO0FBQ0EsWUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixPQUFLLEtBQUwsQ0FBVyxJQUFyQztBQUNELEc7O09BRUQsaUIsR0FBb0IsWUFBTTtBQUN4QixRQUFJLFNBQVMsRUFBYjtBQUNBLHdCQUFZLE9BQUssS0FBTCxDQUFXLElBQXZCLEVBQTZCLE9BQTdCLENBQXFDLGdCQUFRO0FBQzNDO0FBQ0EsVUFBSSxFQUFFLEtBQUYsQ0FBUSxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQVIsS0FBa0MsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixNQUEwQixFQUFoRSxFQUFvRTtBQUNsRSxlQUFPLElBQVAsSUFBZSxVQUFmO0FBQ0Q7QUFDRixLQUxEO0FBTUEsUUFBSSxvQkFBWSxNQUFaLEVBQW9CLE1BQXBCLEtBQStCLENBQW5DLEVBQXNDO0FBQ3BDLGFBQU8sS0FBUCxHQUFlLGlDQUFmO0FBQ0Q7QUFDRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLGNBQUYsRUFBZDtBQUNBLFFBQUksb0JBQVksTUFBWixFQUFvQixNQUFwQixLQUErQixDQUFuQyxFQUFzQzs7QUFFcEM7QUFDQTs7QUFFQSxVQUFNLFlBQVksT0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxXQUFsRDtBQUNBO0FBQ0EsVUFBTSxhQUFhLE9BQUssS0FBTCxDQUFXLGVBQTlCLENBUG9DLENBT1U7QUFDOUMsVUFBTSxrQkFBa0IsS0FBeEI7QUFDQSxVQUFNLHdCQUF3QixLQUE5QjtBQUNBLFVBQU0sU0FBUztBQUNiLHdCQUFnQixTQURIO0FBRWIsNkJBQXFCLE9BQUssS0FBTCxDQUFXLElBRm5CO0FBR2IseUJBQWlCLHNCQUFzQjtBQUV6Qzs7QUFMZSxPQUFmLENBT0EsT0FBSyxRQUFMLENBQWMsRUFBRSxTQUFTLElBQVgsRUFBZDtBQUNBLFVBQUksVUFBVSxJQUFJLE1BQU0sTUFBTixDQUFhLGdCQUFqQixDQUFrQyxPQUFLLEtBQUwsQ0FBVyxPQUE3QyxDQUFkO0FBQ0EsY0FBUSxRQUFSLENBQWlCLEVBQUUsSUFBSSxTQUFOLEVBQWpCLEVBQW9DLFVBQXBDLEVBQWdELE1BQWhELEVBQXdELGVBQXhELEVBQXlFLHFCQUF6RSxFQUNHLElBREgsQ0FDUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsZUFBSyxRQUFMLENBQWMsRUFBRSxTQUFTLEtBQVgsRUFBa0IsUUFBUSxFQUExQixFQUE4QixTQUFTLHVEQUF2QyxFQUFkO0FBQ0EsWUFBTSxtQkFBbUIsT0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxnQkFBekQ7QUFDQSxZQUFNLFdBQVcsT0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxRQUFqRDtBQUNBLFlBQUcsZ0JBQUgsRUFBb0I7QUFDbEIsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBNkIsT0FBSyxLQUFMLENBQVcsTUFBeEMsRUFBZ0QsUUFBaEQsRUFBMEQsRUFBRSxjQUFjLFdBQVcsRUFBM0IsRUFBMUQsRUFBMkYsV0FBVyxFQUF0RztBQUNEO0FBQ0YsT0FSSCxFQVNHLEtBVEgsQ0FTUyxVQUFDLEdBQUQsRUFBUztBQUNkLGVBQUssUUFBTCxDQUFjLEVBQUUsU0FBUyxLQUFYLEVBQWtCLFFBQVEsRUFBRSxPQUFPLElBQUksT0FBYixFQUExQixFQUFkO0FBQ0QsT0FYSDtBQVlEO0FBQ0YsRzs7O2tCQTdIa0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7OztBQUdBOzs7O0lBSXFCLFM7OztBQUNuQjs7Ozs7QUFLQSxxQkFBWSxLQUFaLEVBQW1CLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUEsNElBQ3BCLEtBRG9CLEVBQ2IsT0FEYTs7QUFFMUIsVUFBSyxLQUFMLEdBQWE7QUFDWCxnQkFBVTtBQURDLEtBQWI7QUFGMEI7QUFLM0I7O0FBRUQ7Ozs7Ozs7Ozs2QkFLUztBQUFBLG1CQUMyQyxLQUFLLEtBRGhEO0FBQUEsVUFDRixPQURFLFVBQ0YsT0FERTtBQUFBLFVBQ08sUUFEUCxVQUNPLFFBRFA7QUFBQSxVQUNpQixRQURqQixVQUNpQixRQURqQjtBQUFBLFVBQzJCLEtBRDNCLFVBQzJCLEtBRDNCO0FBQUEsVUFDa0MsS0FEbEMsVUFDa0MsS0FEbEM7OztBQUdQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVyxxQkFBbUIsU0FBUyxDQUE1QixDQUFoQjtBQUNKLGdCQUFRLEdBQVIsQ0FBWSxVQUFDLElBQUQsRUFBTyxHQUFQO0FBQUEsaUJBQ1g7QUFDRSxpQkFBSyxHQURQO0FBRUUsdUJBQVcsQ0FBQyxNQUFELEVBQVUsS0FBSyxLQUFMLEtBQWUsS0FBZixJQUF3QixRQUFsQyxFQUE2QyxJQUE3QyxDQUFrRCxHQUFsRCxDQUZiO0FBR0UscUJBQVM7QUFBQSxxQkFBTSxLQUFLLEtBQUwsS0FBZSxLQUFmLElBQXdCLFNBQVMsS0FBSyxLQUFkLENBQTlCO0FBQUEsYUFIWDtBQUlFLHFDQUF5QixFQUFFLFFBQVEsd0JBQU8sUUFBUCxFQUFpQixJQUFqQixDQUFWO0FBSjNCLFlBRFc7QUFBQSxTQUFaO0FBREksT0FBUDtBQVNEOzs7RUE5Qm9DLE1BQU0sUyxHQVY3Qzs7Ozs7a0JBVXFCLFM7Ozs7O0FDVHJCLElBQUksT0FBTyxRQUFRLFlBQVIsQ0FBWDtBQUNBLE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLElBQUksTUFBSixFQUFZLE1BQVosRUFBb0IsS0FBcEI7O0FBRUEsUUFBUSxRQUFRLFNBQVIsQ0FBUjs7QUFFQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVBLFNBQVUsWUFBVztBQUNuQixXQUFTLE1BQVQsR0FBa0IsQ0FBRTs7QUFFcEIsU0FBTyxXQUFQLEdBQXFCLENBQXJCOztBQUVBLFNBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixVQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0Msc0JBQWhDLEVBQXdELGFBQXhELEVBQXVFO0FBQzdGLFFBQUksQ0FBSixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLGFBQXhDO0FBQ0EsUUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUyxDQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLENBQVQ7QUFDRDtBQUNELFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxhQUFTLEVBQVQ7QUFDQSxhQUFVLFNBQVMsTUFBTSxTQUFOLENBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLENBQVQsR0FBd0MsRUFBbEQ7QUFDQSxRQUFJLFVBQVUsQ0FBVixJQUFlLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWhDLElBQTRDLGlCQUFpQixJQUE3RCxJQUFxRSxNQUFNLE9BQU4sQ0FBYyxLQUFkLENBQXpFLEVBQStGO0FBQzdGLGdCQUFVLFNBQVMsT0FBTyxJQUFQLENBQVksS0FBWixFQUFtQixzQkFBbkIsRUFBMkMsYUFBM0MsQ0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixhQUFLLElBQUksQ0FBSixFQUFPLE1BQU0sTUFBTSxNQUF4QixFQUFnQyxJQUFJLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDO0FBQzVDLGtCQUFRLE1BQU0sQ0FBTixDQUFSO0FBQ0EsMEJBQWdCLFNBQVMsQ0FBVCxJQUFjLENBQWQsSUFBbUIsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBcEMsSUFBZ0QsTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFoRTtBQUNBLG9CQUFVLFNBQVMsR0FBVCxJQUFnQixnQkFBZ0IsR0FBaEIsR0FBc0IsSUFBdEMsSUFBOEMsS0FBSyxJQUFMLENBQVUsS0FBVixFQUFpQixTQUFTLENBQTFCLEVBQThCLGdCQUFnQixDQUFoQixHQUFvQixTQUFTLEtBQUssV0FBaEUsRUFBOEUsc0JBQTlFLEVBQXNHLGFBQXRHLENBQTlDLElBQXNLLGdCQUFnQixJQUFoQixHQUF1QixFQUE3TCxDQUFWO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTCxhQUFLLEdBQUwsSUFBWSxLQUFaLEVBQW1CO0FBQ2pCLGtCQUFRLE1BQU0sR0FBTixDQUFSO0FBQ0EsMEJBQWdCLFNBQVMsQ0FBVCxJQUFjLENBQWQsSUFBbUIsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBcEMsSUFBZ0QsTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFoRTtBQUNBLG9CQUFVLFNBQVMsT0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixzQkFBakIsRUFBeUMsYUFBekMsQ0FBVCxHQUFtRSxHQUFuRSxJQUEwRSxnQkFBZ0IsR0FBaEIsR0FBc0IsSUFBaEcsSUFBd0csS0FBSyxJQUFMLENBQVUsS0FBVixFQUFpQixTQUFTLENBQTFCLEVBQThCLGdCQUFnQixDQUFoQixHQUFvQixTQUFTLEtBQUssV0FBaEUsRUFBOEUsc0JBQTlFLEVBQXNHLGFBQXRHLENBQXhHLElBQWdPLGdCQUFnQixJQUFoQixHQUF1QixFQUF2UCxDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBTyxNQUFQO0FBQ0QsR0FsQ0Q7O0FBb0NBLFNBQU8sTUFBUDtBQUVELENBM0NRLEVBQVQ7O0FBNkNBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7Ozs7QUNwREE7QUFDQSxJQUFJLE9BQUosRUFBYSxPQUFiOztBQUVBLFVBQVUsUUFBUSxXQUFSLENBQVY7O0FBRUEsVUFBVyxZQUFXO0FBQ3BCLE1BQUksRUFBSjs7QUFFQSxXQUFTLE9BQVQsR0FBbUIsQ0FBRTs7QUFFckIsVUFBUSxhQUFSLEdBQXdCLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DLE1BQW5DLEVBQTJDLE1BQTNDLEVBQW1ELE1BQW5ELEVBQTJELE1BQTNELEVBQW1FLE1BQW5FLEVBQTJFLE1BQTNFLEVBQW1GLE1BQW5GLEVBQTJGLE1BQTNGLEVBQW1HLE1BQW5HLEVBQTJHLE1BQTNHLEVBQW1ILE1BQW5ILEVBQTJILE1BQTNILEVBQW1JLE1BQW5JLEVBQTJJLE1BQTNJLEVBQW1KLE1BQW5KLEVBQTJKLE1BQTNKLEVBQW1LLE1BQW5LLEVBQTJLLE1BQTNLLEVBQW1MLE1BQW5MLEVBQTJMLE1BQTNMLEVBQW1NLE1BQW5NLEVBQTJNLE1BQTNNLEVBQW1OLE1BQW5OLEVBQTJOLE1BQTNOLEVBQW1PLE1BQW5PLEVBQTJPLE1BQTNPLEVBQW1QLE1BQW5QLEVBQTJQLE1BQTNQLEVBQW1RLE1BQW5RLEVBQTJRLE1BQTNRLEVBQW1SLE1BQW5SLEVBQTJSLENBQUMsS0FBSyxPQUFPLFlBQWIsRUFBMkIsTUFBM0IsQ0FBM1IsRUFBK1QsR0FBRyxNQUFILENBQS9ULEVBQTJVLEdBQUcsTUFBSCxDQUEzVSxFQUF1VixHQUFHLE1BQUgsQ0FBdlYsQ0FBeEI7O0FBRUEsVUFBUSxZQUFSLEdBQXVCLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsT0FBckMsRUFBOEMsT0FBOUMsRUFBdUQsT0FBdkQsRUFBZ0UsT0FBaEUsRUFBeUUsT0FBekUsRUFBa0YsT0FBbEYsRUFBMkYsS0FBM0YsRUFBa0csS0FBbEcsRUFBeUcsS0FBekcsRUFBZ0gsS0FBaEgsRUFBdUgsS0FBdkgsRUFBOEgsS0FBOUgsRUFBcUksS0FBckksRUFBNEksT0FBNUksRUFBcUosT0FBckosRUFBOEosT0FBOUosRUFBdUssT0FBdkssRUFBZ0wsT0FBaEwsRUFBeUwsT0FBekwsRUFBa00sT0FBbE0sRUFBMk0sT0FBM00sRUFBb04sT0FBcE4sRUFBNk4sT0FBN04sRUFBc08sT0FBdE8sRUFBK08sT0FBL08sRUFBd1AsT0FBeFAsRUFBaVEsS0FBalEsRUFBd1EsT0FBeFEsRUFBaVIsT0FBalIsRUFBMFIsT0FBMVIsRUFBbVMsT0FBblMsRUFBNFMsS0FBNVMsRUFBbVQsS0FBblQsRUFBMFQsS0FBMVQsRUFBaVUsS0FBalUsQ0FBdkI7O0FBRUEsVUFBUSwyQkFBUixHQUF1QyxZQUFXO0FBQ2hELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxPQUFWLEVBQW1CLEdBQW5CO0FBQ0EsY0FBVSxFQUFWO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sUUFBUSxhQUFSLENBQXNCLE1BQTVDLEVBQW9ELEtBQUssR0FBTCxHQUFXLElBQUksR0FBZixHQUFxQixJQUFJLEdBQTdFLEVBQWtGLElBQUksS0FBSyxHQUFMLEdBQVcsRUFBRSxDQUFiLEdBQWlCLEVBQUUsQ0FBekcsRUFBNEc7QUFDMUcsY0FBUSxRQUFRLGFBQVIsQ0FBc0IsQ0FBdEIsQ0FBUixJQUFvQyxRQUFRLFlBQVIsQ0FBcUIsQ0FBckIsQ0FBcEM7QUFDRDtBQUNELFdBQU8sT0FBUDtBQUNELEdBUHFDLEVBQXRDOztBQVNBLFVBQVEsNEJBQVIsR0FBdUMsSUFBSSxPQUFKLENBQVksMkRBQVosQ0FBdkM7O0FBRUEsVUFBUSx3QkFBUixHQUFtQyxJQUFJLE9BQUosQ0FBWSxRQUFRLGFBQVIsQ0FBc0IsSUFBdEIsQ0FBMkIsR0FBM0IsRUFBZ0MsS0FBaEMsQ0FBc0MsSUFBdEMsRUFBNEMsSUFBNUMsQ0FBaUQsTUFBakQsQ0FBWixDQUFuQzs7QUFFQSxVQUFRLHNCQUFSLEdBQWlDLElBQUksT0FBSixDQUFZLG9DQUFaLENBQWpDOztBQUVBLFVBQVEscUJBQVIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCO0FBQzlDLFdBQU8sS0FBSyw0QkFBTCxDQUFrQyxJQUFsQyxDQUF1QyxLQUF2QyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLHNCQUFSLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjtBQUMvQyxRQUFJLE1BQUo7QUFDQSxhQUFTLEtBQUssd0JBQUwsQ0FBOEIsT0FBOUIsQ0FBc0MsS0FBdEMsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQ3JFLGFBQU8sVUFBUyxHQUFULEVBQWM7QUFDbkIsZUFBTyxNQUFNLDJCQUFOLENBQWtDLEdBQWxDLENBQVA7QUFDRCxPQUZEO0FBR0QsS0FKcUQsQ0FJbkQsSUFKbUQsQ0FBN0MsQ0FBVDtBQUtBLFdBQU8sTUFBTSxNQUFOLEdBQWUsR0FBdEI7QUFDRCxHQVJEOztBQVVBLFVBQVEscUJBQVIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCO0FBQzlDLFdBQU8sS0FBSyxzQkFBTCxDQUE0QixJQUE1QixDQUFpQyxLQUFqQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLHNCQUFSLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjtBQUMvQyxXQUFPLE1BQU0sTUFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFOLEdBQWtDLEdBQXpDO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLE9BQVA7QUFFRCxDQWhEUyxFQUFWOztBQWtEQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDdkRBO0FBQ0EsSUFBSSxhQUFKO0FBQUEsSUFDRSxTQUFTLFNBQVQsTUFBUyxDQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxPQUFLLElBQUksR0FBVCxJQUFnQixNQUFoQixFQUF3QjtBQUFFLFFBQUksUUFBUSxJQUFSLENBQWEsTUFBYixFQUFxQixHQUFyQixDQUFKLEVBQStCLE1BQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQTJCLEdBQUMsU0FBUyxJQUFULEdBQWdCO0FBQUUsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQTJCLEdBQUMsS0FBSyxTQUFMLEdBQWlCLE9BQU8sU0FBeEIsQ0FBbUMsTUFBTSxTQUFOLEdBQWtCLElBQUksSUFBSixFQUFsQixDQUE4QixNQUFNLFNBQU4sR0FBa0IsT0FBTyxTQUF6QixDQUFvQyxPQUFPLEtBQVA7QUFBZSxDQUQ1UjtBQUFBLElBRUUsVUFBVSxHQUFHLGNBRmY7O0FBSUEsZ0JBQWlCLFVBQVMsVUFBVCxFQUFxQjtBQUNwQyxTQUFPLGFBQVAsRUFBc0IsVUFBdEI7O0FBRUEsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFVBQWhDLEVBQTRDLE9BQTVDLEVBQXFEO0FBQ25ELFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Q7O0FBRUQsZ0JBQWMsU0FBZCxDQUF3QixRQUF4QixHQUFtQyxZQUFXO0FBQzVDLFFBQUssS0FBSyxVQUFMLElBQW1CLElBQXBCLElBQThCLEtBQUssT0FBTCxJQUFnQixJQUFsRCxFQUF5RDtBQUN2RCxhQUFPLHFCQUFxQixLQUFLLE9BQTFCLEdBQW9DLFNBQXBDLEdBQWdELEtBQUssVUFBckQsR0FBa0UsTUFBbEUsR0FBMkUsS0FBSyxPQUFoRixHQUEwRixLQUFqRztBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8scUJBQXFCLEtBQUssT0FBakM7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsU0FBTyxhQUFQO0FBRUQsQ0FuQmUsQ0FtQmIsS0FuQmEsQ0FBaEI7O0FBcUJBLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7QUMxQkE7QUFDQSxJQUFJLGNBQUo7QUFBQSxJQUNFLFNBQVMsU0FBVCxNQUFTLENBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUFFLE9BQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsUUFBSSxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLENBQUosRUFBK0IsTUFBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFBMkIsR0FBQyxTQUFTLElBQVQsR0FBZ0I7QUFBRSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFBMkIsR0FBQyxLQUFLLFNBQUwsR0FBaUIsT0FBTyxTQUF4QixDQUFtQyxNQUFNLFNBQU4sR0FBa0IsSUFBSSxJQUFKLEVBQWxCLENBQThCLE1BQU0sU0FBTixHQUFrQixPQUFPLFNBQXpCLENBQW9DLE9BQU8sS0FBUDtBQUFlLENBRDVSO0FBQUEsSUFFRSxVQUFVLEdBQUcsY0FGZjs7QUFJQSxpQkFBa0IsVUFBUyxVQUFULEVBQXFCO0FBQ3JDLFNBQU8sY0FBUCxFQUF1QixVQUF2Qjs7QUFFQSxXQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakMsRUFBNkMsT0FBN0MsRUFBc0Q7QUFDcEQsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRDs7QUFFRCxpQkFBZSxTQUFmLENBQXlCLFFBQXpCLEdBQW9DLFlBQVc7QUFDN0MsUUFBSyxLQUFLLFVBQUwsSUFBbUIsSUFBcEIsSUFBOEIsS0FBSyxPQUFMLElBQWdCLElBQWxELEVBQXlEO0FBQ3ZELGFBQU8sc0JBQXNCLEtBQUssT0FBM0IsR0FBcUMsU0FBckMsR0FBaUQsS0FBSyxVQUF0RCxHQUFtRSxNQUFuRSxHQUE0RSxLQUFLLE9BQWpGLEdBQTJGLEtBQWxHO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxzQkFBc0IsS0FBSyxPQUFsQztBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPLGNBQVA7QUFFRCxDQW5CZ0IsQ0FtQmQsS0FuQmMsQ0FBakI7O0FBcUJBLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7Ozs7QUMxQkE7QUFDQSxJQUFJLFNBQUo7QUFBQSxJQUNFLFNBQVMsU0FBVCxNQUFTLENBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUFFLE9BQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsUUFBSSxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLENBQUosRUFBK0IsTUFBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFBMkIsR0FBQyxTQUFTLElBQVQsR0FBZ0I7QUFBRSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFBMkIsR0FBQyxLQUFLLFNBQUwsR0FBaUIsT0FBTyxTQUF4QixDQUFtQyxNQUFNLFNBQU4sR0FBa0IsSUFBSSxJQUFKLEVBQWxCLENBQThCLE1BQU0sU0FBTixHQUFrQixPQUFPLFNBQXpCLENBQW9DLE9BQU8sS0FBUDtBQUFlLENBRDVSO0FBQUEsSUFFRSxVQUFVLEdBQUcsY0FGZjs7QUFJQSxZQUFhLFVBQVMsVUFBVCxFQUFxQjtBQUNoQyxTQUFPLFNBQVAsRUFBa0IsVUFBbEI7O0FBRUEsV0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLFVBQTVCLEVBQXdDLE9BQXhDLEVBQWlEO0FBQy9DLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Q7O0FBRUQsWUFBVSxTQUFWLENBQW9CLFFBQXBCLEdBQStCLFlBQVc7QUFDeEMsUUFBSyxLQUFLLFVBQUwsSUFBbUIsSUFBcEIsSUFBOEIsS0FBSyxPQUFMLElBQWdCLElBQWxELEVBQXlEO0FBQ3ZELGFBQU8saUJBQWlCLEtBQUssT0FBdEIsR0FBZ0MsU0FBaEMsR0FBNEMsS0FBSyxVQUFqRCxHQUE4RCxNQUE5RCxHQUF1RSxLQUFLLE9BQTVFLEdBQXNGLEtBQTdGO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxpQkFBaUIsS0FBSyxPQUE3QjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPLFNBQVA7QUFFRCxDQW5CVyxDQW1CVCxLQW5CUyxDQUFaOztBQXFCQSxPQUFPLE9BQVAsR0FBaUIsU0FBakI7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0EsSUFBSSxhQUFKO0FBQUEsSUFBbUIsT0FBbkI7QUFBQSxJQUE0QixNQUE1QjtBQUFBLElBQW9DLGNBQXBDO0FBQUEsSUFBb0QsU0FBcEQ7QUFBQSxJQUErRCxPQUEvRDtBQUFBLElBQXdFLFNBQXhFO0FBQUEsSUFBbUYsS0FBbkY7QUFBQSxJQUNFLFVBQVUsR0FBRyxPQUFILElBQWMsVUFBUyxJQUFULEVBQWU7QUFBRSxPQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsSUFBSSxLQUFLLE1BQXpCLEVBQWlDLElBQUksQ0FBckMsRUFBd0MsR0FBeEMsRUFBNkM7QUFBRSxRQUFJLEtBQUssSUFBTCxJQUFhLEtBQUssQ0FBTCxNQUFZLElBQTdCLEVBQW1DLE9BQU8sQ0FBUDtBQUFXLEdBQUMsT0FBTyxDQUFDLENBQVI7QUFBWSxDQURySjs7QUFHQSxVQUFVLFFBQVEsV0FBUixDQUFWOztBQUVBLFlBQVksUUFBUSxhQUFSLENBQVo7O0FBRUEsVUFBVSxRQUFRLFdBQVIsQ0FBVjs7QUFFQSxRQUFRLFFBQVEsU0FBUixDQUFSOztBQUVBLGlCQUFpQixRQUFRLDRCQUFSLENBQWpCOztBQUVBLFlBQVksUUFBUSx1QkFBUixDQUFaOztBQUVBLGdCQUFnQixRQUFRLDJCQUFSLENBQWhCOztBQUVBLFNBQVUsWUFBVztBQUNuQixXQUFTLE1BQVQsR0FBa0IsQ0FBRTs7QUFFcEIsU0FBTyxtQkFBUCxHQUE2QixzRUFBN0I7O0FBRUEsU0FBTyx5QkFBUCxHQUFtQyxJQUFJLE9BQUosQ0FBWSxXQUFaLENBQW5DOztBQUVBLFNBQU8scUJBQVAsR0FBK0IsSUFBSSxPQUFKLENBQVksTUFBTSxPQUFPLG1CQUF6QixDQUEvQjs7QUFFQSxTQUFPLCtCQUFQLEdBQXlDLElBQUksT0FBSixDQUFZLCtCQUFaLENBQXpDOztBQUVBLFNBQU8sNEJBQVAsR0FBc0MsRUFBdEM7O0FBRUEsU0FBTyxRQUFQLEdBQWtCLEVBQWxCOztBQUVBLFNBQU8sU0FBUCxHQUFtQixVQUFTLHNCQUFULEVBQWlDLGFBQWpDLEVBQWdEO0FBQ2pFLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixJQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxTQUFLLFFBQUwsQ0FBYyxzQkFBZCxHQUF1QyxzQkFBdkM7QUFDQSxTQUFLLFFBQUwsQ0FBYyxhQUFkLEdBQThCLGFBQTlCO0FBQ0QsR0FURDs7QUFXQSxTQUFPLEtBQVAsR0FBZSxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ3BFLFFBQUksT0FBSixFQUFhLE1BQWI7QUFDQSxRQUFJLDBCQUEwQixJQUE5QixFQUFvQztBQUNsQywrQkFBeUIsS0FBekI7QUFDRDtBQUNELFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsU0FBSyxRQUFMLENBQWMsc0JBQWQsR0FBdUMsc0JBQXZDO0FBQ0EsU0FBSyxRQUFMLENBQWMsYUFBZCxHQUE4QixhQUE5QjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGFBQU8sRUFBUDtBQUNEO0FBQ0QsWUFBUSxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQVI7QUFDQSxRQUFJLE1BQU0sTUFBTSxNQUFoQixFQUF3QjtBQUN0QixhQUFPLEVBQVA7QUFDRDtBQUNELGNBQVU7QUFDUiw4QkFBd0Isc0JBRGhCO0FBRVIscUJBQWUsYUFGUDtBQUdSLFNBQUc7QUFISyxLQUFWO0FBS0EsWUFBUSxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQVI7QUFDRSxXQUFLLEdBQUw7QUFDRSxpQkFBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsQ0FBVDtBQUNBLFVBQUUsUUFBUSxDQUFWO0FBQ0E7QUFDRixXQUFLLEdBQUw7QUFDRSxpQkFBUyxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsT0FBekIsQ0FBVDtBQUNBLFVBQUUsUUFBUSxDQUFWO0FBQ0E7QUFDRjtBQUNFLGlCQUFTLEtBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixJQUF4QixFQUE4QixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTlCLEVBQTBDLE9BQTFDLENBQVQ7QUFWSjtBQVlBLFFBQUksS0FBSyx5QkFBTCxDQUErQixPQUEvQixDQUF1QyxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQXBCLENBQXZDLEVBQStELEVBQS9ELE1BQXVFLEVBQTNFLEVBQStFO0FBQzdFLFlBQU0sSUFBSSxjQUFKLENBQW1CLGlDQUFpQyxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQXBCLENBQWpDLEdBQTBELElBQTdFLENBQU47QUFDRDtBQUNELFdBQU8sTUFBUDtBQUNELEdBdENEOztBQXdDQSxTQUFPLElBQVAsR0FBYyxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ25FLFFBQUksR0FBSixFQUFTLE1BQVQsRUFBaUIsSUFBakI7QUFDQSxRQUFJLDBCQUEwQixJQUE5QixFQUFvQztBQUNsQywrQkFBeUIsS0FBekI7QUFDRDtBQUNELFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsYUFBTyxNQUFQO0FBQ0Q7QUFDRCxrQkFBYyxLQUFkLHVEQUFjLEtBQWQ7QUFDQSxRQUFJLFNBQVMsUUFBYixFQUF1QjtBQUNyQixVQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixlQUFPLE1BQU0sV0FBTixFQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ2hDLGlCQUFTLGNBQWMsS0FBZCxDQUFUO0FBQ0EsWUFBSSxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsSUFBK0IsVUFBVSxJQUE3QyxFQUFvRDtBQUNsRCxpQkFBTyxNQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQVA7QUFDRDtBQUNELFFBQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3RCLGFBQVEsUUFBUSxNQUFSLEdBQWlCLE9BQXpCO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sUUFBTixDQUFlLEtBQWYsQ0FBSixFQUEyQjtBQUN6QixhQUFRLFNBQVMsUUFBVCxHQUFvQixNQUFNLEtBQU4sR0FBYyxHQUFsQyxHQUF3QyxPQUFPLFNBQVMsS0FBVCxDQUFQLENBQWhEO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFKLEVBQTRCO0FBQzFCLGFBQVEsU0FBUyxRQUFULEdBQW9CLE1BQU0sS0FBTixHQUFjLEdBQWxDLEdBQXdDLE9BQU8sV0FBVyxLQUFYLENBQVAsQ0FBaEQ7QUFDRDtBQUNELFFBQUksU0FBUyxRQUFiLEVBQXVCO0FBQ3JCLGFBQVEsVUFBVSxLQUFWLEdBQWtCLE1BQWxCLEdBQTRCLFVBQVUsQ0FBQyxLQUFYLEdBQW1CLE9BQW5CLEdBQThCLE1BQU0sS0FBTixJQUFlLE1BQWYsR0FBd0IsS0FBMUY7QUFDRDtBQUNELFFBQUksUUFBUSxxQkFBUixDQUE4QixLQUE5QixDQUFKLEVBQTBDO0FBQ3hDLGFBQU8sUUFBUSxzQkFBUixDQUErQixLQUEvQixDQUFQO0FBQ0Q7QUFDRCxRQUFJLFFBQVEscUJBQVIsQ0FBOEIsS0FBOUIsQ0FBSixFQUEwQztBQUN4QyxhQUFPLFFBQVEsc0JBQVIsQ0FBK0IsS0FBL0IsQ0FBUDtBQUNEO0FBQ0QsUUFBSSxPQUFPLEtBQVgsRUFBa0I7QUFDaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sWUFBTixDQUFtQixJQUFuQixDQUF3QixLQUF4QixDQUFKLEVBQW9DO0FBQ2xDLGFBQU8sTUFBTSxLQUFOLEdBQWMsR0FBckI7QUFDRDtBQUNELFFBQUksQ0FBQyxNQUFNLE1BQU0sV0FBTixFQUFQLE1BQWdDLE1BQWhDLElBQTBDLFFBQVEsR0FBbEQsSUFBeUQsUUFBUSxNQUFqRSxJQUEyRSxRQUFRLE9BQXZGLEVBQWdHO0FBQzlGLGFBQU8sTUFBTSxLQUFOLEdBQWMsR0FBckI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBbkREOztBQXFEQSxTQUFPLFVBQVAsR0FBb0IsVUFBUyxLQUFULEVBQWdCLHNCQUFoQixFQUF3QyxhQUF4QyxFQUF1RDtBQUN6RSxRQUFJLENBQUosRUFBTyxHQUFQLEVBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixHQUExQjtBQUNBLFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsZUFBUyxFQUFUO0FBQ0EsV0FBSyxJQUFJLENBQUosRUFBTyxPQUFPLE1BQU0sTUFBekIsRUFBaUMsSUFBSSxJQUFyQyxFQUEyQyxHQUEzQyxFQUFnRDtBQUM5QyxjQUFNLE1BQU0sQ0FBTixDQUFOO0FBQ0EsZUFBTyxJQUFQLENBQVksS0FBSyxJQUFMLENBQVUsR0FBVixDQUFaO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sT0FBTyxJQUFQLENBQVksSUFBWixDQUFOLEdBQTBCLEdBQWpDO0FBQ0QsS0FQRCxNQU9PO0FBQ0wsZUFBUyxFQUFUO0FBQ0EsV0FBSyxHQUFMLElBQVksS0FBWixFQUFtQjtBQUNqQixjQUFNLE1BQU0sR0FBTixDQUFOO0FBQ0EsZUFBTyxJQUFQLENBQVksS0FBSyxJQUFMLENBQVUsR0FBVixJQUFpQixJQUFqQixHQUF3QixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQXBDO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sT0FBTyxJQUFQLENBQVksSUFBWixDQUFOLEdBQTBCLEdBQWpDO0FBQ0Q7QUFDRixHQXBCRDs7QUFzQkEsU0FBTyxXQUFQLEdBQXFCLFVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixnQkFBN0IsRUFBK0MsT0FBL0MsRUFBd0QsUUFBeEQsRUFBa0U7QUFDckYsUUFBSSxDQUFKLEVBQU8sZ0JBQVAsRUFBeUIsS0FBekIsRUFBZ0MsTUFBaEMsRUFBd0MsT0FBeEMsRUFBaUQsR0FBakQsRUFBc0QsSUFBdEQsRUFBNEQsTUFBNUQsRUFBb0UsR0FBcEU7QUFDQSxRQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsbUJBQWEsSUFBYjtBQUNEO0FBQ0QsUUFBSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUIseUJBQW1CLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbkI7QUFDRDtBQUNELFFBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ25CLGdCQUFVLElBQVY7QUFDRDtBQUNELFFBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixpQkFBVyxJQUFYO0FBQ0Q7QUFDRCxRQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNuQixnQkFBVTtBQUNSLGdDQUF3QixLQUFLLFFBQUwsQ0FBYyxzQkFEOUI7QUFFUix1QkFBZSxLQUFLLFFBQUwsQ0FBYyxhQUZyQjtBQUdSLFdBQUc7QUFISyxPQUFWO0FBS0Q7QUFDRCxRQUFJLFFBQVEsQ0FBWjtBQUNBLFFBQUksTUFBTSxPQUFPLE1BQVAsQ0FBYyxDQUFkLENBQU4sRUFBd0IsUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBK0IsR0FBL0IsS0FBdUMsQ0FBbkUsRUFBc0U7QUFDcEUsZUFBUyxLQUFLLGlCQUFMLENBQXVCLE1BQXZCLEVBQStCLE9BQS9CLENBQVQ7QUFDQSxVQUFJLFFBQVEsQ0FBWjtBQUNBLFVBQUksY0FBYyxJQUFsQixFQUF3QjtBQUN0QixjQUFNLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixFQUE2QixHQUE3QixDQUFOO0FBQ0EsWUFBSSxFQUFFLE9BQU8sSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFQLEVBQXNCLFFBQVEsSUFBUixDQUFhLFVBQWIsRUFBeUIsSUFBekIsS0FBa0MsQ0FBMUQsQ0FBSixFQUFrRTtBQUNoRSxnQkFBTSxJQUFJLGNBQUosQ0FBbUIsNEJBQTRCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBNUIsR0FBOEMsSUFBakUsQ0FBTjtBQUNEO0FBQ0Y7QUFDRixLQVRELE1BU087QUFDTCxVQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLGlCQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBVDtBQUNBLGFBQUssT0FBTyxNQUFaO0FBQ0EsaUJBQVMsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFUO0FBQ0EsWUFBSSxXQUFXLENBQUMsQ0FBaEIsRUFBbUI7QUFDakIsbUJBQVMsTUFBTSxLQUFOLENBQVksT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixNQUFoQixDQUFaLENBQVQ7QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMLDJCQUFtQixXQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBbkI7QUFDQSxrQkFBVSxLQUFLLDRCQUFMLENBQWtDLGdCQUFsQyxDQUFWO0FBQ0EsWUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsb0JBQVUsSUFBSSxPQUFKLENBQVksWUFBWSxnQkFBWixHQUErQixHQUEzQyxDQUFWO0FBQ0EsZUFBSyw0QkFBTCxDQUFrQyxnQkFBbEMsSUFBc0QsT0FBdEQ7QUFDRDtBQUNELFlBQUksUUFBUSxRQUFRLElBQVIsQ0FBYSxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWIsQ0FBWixFQUEyQztBQUN6QyxtQkFBUyxNQUFNLENBQU4sQ0FBVDtBQUNBLGVBQUssT0FBTyxNQUFaO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZ0JBQU0sSUFBSSxjQUFKLENBQW1CLG1DQUFtQyxNQUFuQyxHQUE0QyxJQUEvRCxDQUFOO0FBQ0Q7QUFDRjtBQUNELFVBQUksUUFBSixFQUFjO0FBQ1osaUJBQVMsS0FBSyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCLE9BQTVCLENBQVQ7QUFDRDtBQUNGO0FBQ0QsWUFBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLFdBQU8sTUFBUDtBQUNELEdBM0REOztBQTZEQSxTQUFPLGlCQUFQLEdBQTJCLFVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQjtBQUNuRCxRQUFJLENBQUosRUFBTyxLQUFQLEVBQWMsTUFBZDtBQUNBLFFBQUksUUFBUSxDQUFaO0FBQ0EsUUFBSSxFQUFFLFFBQVEsS0FBSyxxQkFBTCxDQUEyQixJQUEzQixDQUFnQyxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWhDLENBQVYsQ0FBSixFQUFpRTtBQUMvRCxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFtQyxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQW5DLEdBQXFELElBQW5FLENBQU47QUFDRDtBQUNELGFBQVMsTUFBTSxDQUFOLEVBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixNQUFNLENBQU4sRUFBUyxNQUFULEdBQWtCLENBQXJDLENBQVQ7QUFDQSxRQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsQ0FBZCxDQUFaLEVBQThCO0FBQzVCLGVBQVMsVUFBVSwwQkFBVixDQUFxQyxNQUFyQyxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsZUFBUyxVQUFVLDBCQUFWLENBQXFDLE1BQXJDLENBQVQ7QUFDRDtBQUNELFNBQUssTUFBTSxDQUFOLEVBQVMsTUFBZDtBQUNBLFlBQVEsQ0FBUixHQUFZLENBQVo7QUFDQSxXQUFPLE1BQVA7QUFDRCxHQWZEOztBQWlCQSxTQUFPLGFBQVAsR0FBdUIsVUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCO0FBQ2pELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxRQUFWLEVBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLEVBQWlDLEdBQWpDLEVBQXNDLEtBQXRDO0FBQ0EsYUFBUyxFQUFUO0FBQ0EsVUFBTSxTQUFTLE1BQWY7QUFDQSxRQUFJLFFBQVEsQ0FBWjtBQUNBLFNBQUssQ0FBTDtBQUNBLFdBQU8sSUFBSSxHQUFYLEVBQWdCO0FBQ2QsY0FBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLGNBQVEsU0FBUyxNQUFULENBQWdCLENBQWhCLENBQVI7QUFDRSxhQUFLLEdBQUw7QUFDRSxpQkFBTyxJQUFQLENBQVksS0FBSyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCLE9BQTdCLENBQVo7QUFDQSxjQUFJLFFBQVEsQ0FBWjtBQUNBO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sSUFBUCxDQUFZLEtBQUssWUFBTCxDQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFaO0FBQ0EsY0FBSSxRQUFRLENBQVo7QUFDQTtBQUNGLGFBQUssR0FBTDtBQUNFLGlCQUFPLE1BQVA7QUFDRixhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDQSxhQUFLLElBQUw7QUFDRTtBQUNGO0FBQ0UscUJBQVksQ0FBQyxNQUFNLFNBQVMsTUFBVCxDQUFnQixDQUFoQixDQUFQLE1BQStCLEdBQS9CLElBQXNDLFFBQVEsR0FBMUQ7QUFDQSxrQkFBUSxLQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUEzQixFQUF1QyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXZDLEVBQW1ELE9BQW5ELENBQVI7QUFDQSxjQUFJLFFBQVEsQ0FBWjtBQUNBLGNBQUksQ0FBQyxRQUFELElBQWEsT0FBTyxLQUFQLEtBQWlCLFFBQTlCLEtBQTJDLE1BQU0sT0FBTixDQUFjLElBQWQsTUFBd0IsQ0FBQyxDQUF6QixJQUE4QixNQUFNLE9BQU4sQ0FBYyxLQUFkLE1BQXlCLENBQUMsQ0FBbkcsQ0FBSixFQUEyRztBQUN6RyxnQkFBSTtBQUNGLHNCQUFRLEtBQUssWUFBTCxDQUFrQixNQUFNLEtBQU4sR0FBYyxHQUFoQyxDQUFSO0FBQ0QsYUFGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2Qsa0JBQUksS0FBSjtBQUNEO0FBQ0Y7QUFDRCxpQkFBTyxJQUFQLENBQVksS0FBWjtBQUNBLFlBQUUsQ0FBRjtBQTNCSjtBQTZCQSxRQUFFLENBQUY7QUFDRDtBQUNELFVBQU0sSUFBSSxTQUFKLENBQWMsa0NBQWtDLFFBQWhELENBQU47QUFDRCxHQXhDRDs7QUEwQ0EsU0FBTyxZQUFQLEdBQXNCLFVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQjtBQUMvQyxRQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixNQUF2QixFQUErQix1QkFBL0IsRUFBd0QsS0FBeEQ7QUFDQSxhQUFTLEVBQVQ7QUFDQSxVQUFNLFFBQVEsTUFBZDtBQUNBLFFBQUksUUFBUSxDQUFaO0FBQ0EsU0FBSyxDQUFMO0FBQ0EsOEJBQTBCLEtBQTFCO0FBQ0EsV0FBTyxJQUFJLEdBQVgsRUFBZ0I7QUFDZCxjQUFRLENBQVIsR0FBWSxDQUFaO0FBQ0EsY0FBUSxRQUFRLE1BQVIsQ0FBZSxDQUFmLENBQVI7QUFDRSxhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDQSxhQUFLLElBQUw7QUFDRSxZQUFFLENBQUY7QUFDQSxrQkFBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLG9DQUEwQixJQUExQjtBQUNBO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sTUFBUDtBQVRKO0FBV0EsVUFBSSx1QkFBSixFQUE2QjtBQUMzQixrQ0FBMEIsS0FBMUI7QUFDQTtBQUNEO0FBQ0QsWUFBTSxLQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsQ0FBMUIsRUFBNEMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE1QyxFQUF3RCxPQUF4RCxFQUFpRSxLQUFqRSxDQUFOO0FBQ0EsVUFBSSxRQUFRLENBQVo7QUFDQSxhQUFPLEtBQVA7QUFDQSxhQUFPLElBQUksR0FBWCxFQUFnQjtBQUNkLGdCQUFRLENBQVIsR0FBWSxDQUFaO0FBQ0EsZ0JBQVEsUUFBUSxNQUFSLENBQWUsQ0FBZixDQUFSO0FBQ0UsZUFBSyxHQUFMO0FBQ0Usb0JBQVEsS0FBSyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQVI7QUFDQSxnQkFBSSxRQUFRLENBQVo7QUFDQSxnQkFBSSxPQUFPLEdBQVAsTUFBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMxQixxQkFBTyxHQUFQLElBQWMsS0FBZDtBQUNEO0FBQ0QsbUJBQU8sSUFBUDtBQUNBO0FBQ0YsZUFBSyxHQUFMO0FBQ0Usb0JBQVEsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLENBQVI7QUFDQSxnQkFBSSxRQUFRLENBQVo7QUFDQSxnQkFBSSxPQUFPLEdBQVAsTUFBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMxQixxQkFBTyxHQUFQLElBQWMsS0FBZDtBQUNEO0FBQ0QsbUJBQU8sSUFBUDtBQUNBO0FBQ0YsZUFBSyxHQUFMO0FBQ0EsZUFBSyxHQUFMO0FBQ0EsZUFBSyxJQUFMO0FBQ0U7QUFDRjtBQUNFLG9CQUFRLEtBQUssV0FBTCxDQUFpQixPQUFqQixFQUEwQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTFCLEVBQXNDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBdEMsRUFBa0QsT0FBbEQsQ0FBUjtBQUNBLGdCQUFJLFFBQVEsQ0FBWjtBQUNBLGdCQUFJLE9BQU8sR0FBUCxNQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzFCLHFCQUFPLEdBQVAsSUFBYyxLQUFkO0FBQ0Q7QUFDRCxtQkFBTyxJQUFQO0FBQ0EsY0FBRSxDQUFGO0FBNUJKO0FBOEJBLFVBQUUsQ0FBRjtBQUNBLFlBQUksSUFBSixFQUFVO0FBQ1I7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxVQUFNLElBQUksU0FBSixDQUFjLGtDQUFrQyxPQUFoRCxDQUFOO0FBQ0QsR0FsRUQ7O0FBb0VBLFNBQU8sY0FBUCxHQUF3QixVQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEI7QUFDaEQsUUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixzQkFBaEIsRUFBd0MsU0FBeEMsRUFBbUQsVUFBbkQsRUFBK0QsU0FBL0QsRUFBMEUsYUFBMUUsRUFBeUYsR0FBekYsRUFBOEYsV0FBOUYsRUFBMkcsUUFBM0csRUFBcUgsYUFBckg7QUFDQSxhQUFTLE1BQU0sSUFBTixDQUFXLE1BQVgsQ0FBVDtBQUNBLGtCQUFjLE9BQU8sV0FBUCxFQUFkO0FBQ0EsWUFBUSxXQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxPQUFMO0FBQ0UsZUFBTyxLQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxLQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxJQUFFLENBQVQ7QUFDRixXQUFLLE9BQUw7QUFDRSxlQUFPLEtBQVA7QUFDRjtBQUNFLG9CQUFZLFlBQVksTUFBWixDQUFtQixDQUFuQixDQUFaO0FBQ0EsZ0JBQVEsU0FBUjtBQUNFLGVBQUssR0FBTDtBQUNFLHlCQUFhLE9BQU8sT0FBUCxDQUFlLEdBQWYsQ0FBYjtBQUNBLGdCQUFJLGVBQWUsQ0FBQyxDQUFwQixFQUF1QjtBQUNyQiwwQkFBWSxXQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsMEJBQVksWUFBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLFVBQXJCLENBQVo7QUFDRDtBQUNELG9CQUFRLFNBQVI7QUFDRSxtQkFBSyxHQUFMO0FBQ0Usb0JBQUksZUFBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ3JCLHlCQUFPLFNBQVMsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBVCxDQUFQO0FBQ0Q7QUFDRCx1QkFBTyxJQUFQO0FBQ0YsbUJBQUssTUFBTDtBQUNFLHVCQUFPLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixDQUFQO0FBQ0YsbUJBQUssT0FBTDtBQUNFLHVCQUFPLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixDQUFQO0FBQ0YsbUJBQUssT0FBTDtBQUNFLHVCQUFPLFNBQVMsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBVCxDQUFQO0FBQ0YsbUJBQUssUUFBTDtBQUNFLHVCQUFPLE1BQU0sWUFBTixDQUFtQixLQUFLLFdBQUwsQ0FBaUIsT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFqQixDQUFuQixFQUFzRCxLQUF0RCxDQUFQO0FBQ0YsbUJBQUssU0FBTDtBQUNFLHVCQUFPLFdBQVcsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBWCxDQUFQO0FBQ0YsbUJBQUssYUFBTDtBQUNFLHVCQUFPLE1BQU0sWUFBTixDQUFtQixNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQVAsQ0FBYSxFQUFiLENBQVosQ0FBbkIsQ0FBUDtBQUNGO0FBQ0Usb0JBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ25CLDRCQUFVO0FBQ1IsNENBQXdCLEtBQUssUUFBTCxDQUFjLHNCQUQ5QjtBQUVSLG1DQUFlLEtBQUssUUFBTCxDQUFjLGFBRnJCO0FBR1IsdUJBQUc7QUFISyxtQkFBVjtBQUtEO0FBQ0QsZ0NBQWdCLFFBQVEsYUFBeEIsRUFBdUMseUJBQXlCLFFBQVEsc0JBQXhFO0FBQ0Esb0JBQUksYUFBSixFQUFtQjtBQUNqQixrQ0FBZ0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFoQjtBQUNBLCtCQUFhLGNBQWMsT0FBZCxDQUFzQixHQUF0QixDQUFiO0FBQ0Esc0JBQUksZUFBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ3JCLDJCQUFPLGNBQWMsYUFBZCxFQUE2QixJQUE3QixDQUFQO0FBQ0QsbUJBRkQsTUFFTztBQUNMLCtCQUFXLE1BQU0sS0FBTixDQUFZLGNBQWMsS0FBZCxDQUFvQixhQUFhLENBQWpDLENBQVosQ0FBWDtBQUNBLHdCQUFJLEVBQUUsU0FBUyxNQUFULEdBQWtCLENBQXBCLENBQUosRUFBNEI7QUFDMUIsaUNBQVcsSUFBWDtBQUNEO0FBQ0QsMkJBQU8sY0FBYyxjQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsVUFBdkIsQ0FBZCxFQUFrRCxRQUFsRCxDQUFQO0FBQ0Q7QUFDRjtBQUNELG9CQUFJLHNCQUFKLEVBQTRCO0FBQzFCLHdCQUFNLElBQUksY0FBSixDQUFtQixtRUFBbkIsQ0FBTjtBQUNEO0FBQ0QsdUJBQU8sSUFBUDtBQTNDSjtBQTZDQTtBQUNGLGVBQUssR0FBTDtBQUNFLGdCQUFJLFNBQVMsT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFiLEVBQWlDO0FBQy9CLHFCQUFPLE1BQU0sTUFBTixDQUFhLE1BQWIsQ0FBUDtBQUNELGFBRkQsTUFFTyxJQUFJLE1BQU0sUUFBTixDQUFlLE1BQWYsQ0FBSixFQUE0QjtBQUNqQyxxQkFBTyxNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBSixFQUE2QjtBQUNsQyxxQkFBTyxXQUFXLE1BQVgsQ0FBUDtBQUNELGFBRk0sTUFFQTtBQUNMLHFCQUFPLE1BQVA7QUFDRDtBQUNEO0FBQ0YsZUFBSyxHQUFMO0FBQ0UsZ0JBQUksTUFBTSxRQUFOLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQzFCLG9CQUFNLE1BQU47QUFDQSxxQkFBTyxTQUFTLEdBQVQsQ0FBUDtBQUNBLGtCQUFJLFFBQVEsT0FBTyxJQUFQLENBQVosRUFBMEI7QUFDeEIsdUJBQU8sSUFBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPLEdBQVA7QUFDRDtBQUNGLGFBUkQsTUFRTyxJQUFJLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUFKLEVBQTZCO0FBQ2xDLHFCQUFPLFdBQVcsTUFBWCxDQUFQO0FBQ0QsYUFGTSxNQUVBLElBQUksS0FBSywrQkFBTCxDQUFxQyxJQUFyQyxDQUEwQyxNQUExQyxDQUFKLEVBQXVEO0FBQzVELHFCQUFPLFdBQVcsT0FBTyxPQUFQLENBQWUsR0FBZixFQUFvQixFQUFwQixDQUFYLENBQVA7QUFDRDtBQUNELG1CQUFPLE1BQVA7QUFDRixlQUFLLEdBQUw7QUFDRSxnQkFBSSxNQUFNLFFBQU4sQ0FBZSxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWYsQ0FBSixFQUFxQztBQUNuQyxrQkFBSSxRQUFRLE9BQU8sTUFBUCxDQUFjLENBQWQsQ0FBWixFQUE4QjtBQUM1Qix1QkFBTyxDQUFDLE1BQU0sTUFBTixDQUFhLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBYixDQUFSO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsc0JBQU0sT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFOO0FBQ0EsdUJBQU8sU0FBUyxHQUFULENBQVA7QUFDQSxvQkFBSSxRQUFRLE9BQU8sSUFBUCxDQUFaLEVBQTBCO0FBQ3hCLHlCQUFPLENBQUMsSUFBUjtBQUNELGlCQUZELE1BRU87QUFDTCx5QkFBTyxDQUFDLEdBQVI7QUFDRDtBQUNGO0FBQ0YsYUFaRCxNQVlPLElBQUksTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDbEMscUJBQU8sV0FBVyxNQUFYLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxLQUFLLCtCQUFMLENBQXFDLElBQXJDLENBQTBDLE1BQTFDLENBQUosRUFBdUQ7QUFDNUQscUJBQU8sV0FBVyxPQUFPLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCLENBQVgsQ0FBUDtBQUNEO0FBQ0QsbUJBQU8sTUFBUDtBQUNGO0FBQ0UsZ0JBQUksT0FBTyxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsQ0FBWCxFQUF1QztBQUNyQyxxQkFBTyxJQUFQO0FBQ0QsYUFGRCxNQUVPLElBQUksTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDbEMscUJBQU8sV0FBVyxNQUFYLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxLQUFLLCtCQUFMLENBQXFDLElBQXJDLENBQTBDLE1BQTFDLENBQUosRUFBdUQ7QUFDNUQscUJBQU8sV0FBVyxPQUFPLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCLENBQVgsQ0FBUDtBQUNEO0FBQ0QsbUJBQU8sTUFBUDtBQTNHSjtBQWpCSjtBQStIRCxHQW5JRDs7QUFxSUEsU0FBTyxNQUFQO0FBRUQsQ0FoZFEsRUFBVDs7QUFrZEEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7Ozs7Ozs7OztBQ3BlQTtBQUNBLElBQUksTUFBSixFQUFZLGNBQVosRUFBNEIsU0FBNUIsRUFBdUMsTUFBdkMsRUFBK0MsT0FBL0MsRUFBd0QsS0FBeEQ7O0FBRUEsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFQSxVQUFVLFFBQVEsV0FBUixDQUFWOztBQUVBLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUEsaUJBQWlCLFFBQVEsNEJBQVIsQ0FBakI7O0FBRUEsWUFBWSxRQUFRLHVCQUFSLENBQVo7O0FBRUEsU0FBVSxZQUFXO0FBQ25CLFNBQU8sU0FBUCxDQUFpQix5QkFBakIsR0FBNkMsSUFBSSxPQUFKLENBQVksZ0lBQVosQ0FBN0M7O0FBRUEsU0FBTyxTQUFQLENBQWlCLHlCQUFqQixHQUE2QyxJQUFJLE9BQUosQ0FBWSxvR0FBWixDQUE3Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIscUJBQWpCLEdBQXlDLElBQUksT0FBSixDQUFZLDhDQUFaLENBQXpDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixvQkFBakIsR0FBd0MsSUFBSSxPQUFKLENBQVksK0JBQVosQ0FBeEM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLHdCQUFqQixHQUE0QyxJQUFJLE9BQUosQ0FBWSxhQUFhLE9BQU8sbUJBQXBCLEdBQTBDLGtEQUF0RCxDQUE1Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsb0JBQWpCLEdBQXdDLElBQUksT0FBSixDQUFZLGFBQWEsT0FBTyxtQkFBcEIsR0FBMEMsa0RBQXRELENBQXhDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixlQUFqQixHQUFtQyxJQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5DOztBQUVBLFNBQU8sU0FBUCxDQUFpQixxQkFBakIsR0FBeUMsSUFBSSxPQUFKLENBQVksS0FBWixDQUF6Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsc0JBQWpCLEdBQTBDLElBQUksT0FBSixDQUFZLFFBQVosQ0FBMUM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLG1CQUFqQixHQUF1QyxJQUFJLE9BQUosQ0FBWSwyQkFBWixFQUF5QyxHQUF6QyxDQUF2Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsd0JBQWpCLEdBQTRDLElBQUksT0FBSixDQUFZLGNBQVosRUFBNEIsR0FBNUIsQ0FBNUM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLDZCQUFqQixHQUFpRCxJQUFJLE9BQUosQ0FBWSxpQkFBWixFQUErQixHQUEvQixDQUFqRDs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsMkJBQWpCLEdBQStDLElBQUksT0FBSixDQUFZLGlCQUFaLEVBQStCLEdBQS9CLENBQS9DOztBQUVBLFNBQU8sU0FBUCxDQUFpQixvQ0FBakIsR0FBd0QsRUFBeEQ7O0FBRUEsU0FBTyxTQUFQLENBQWlCLFlBQWpCLEdBQWdDLENBQWhDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixnQkFBakIsR0FBb0MsQ0FBcEM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLGVBQWpCLEdBQW1DLENBQW5DOztBQUVBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixTQUFLLE1BQUwsR0FBYyxVQUFVLElBQVYsR0FBaUIsTUFBakIsR0FBMEIsQ0FBeEM7QUFDQSxTQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0Q7O0FBRUQsU0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFVBQVMsS0FBVCxFQUFnQixzQkFBaEIsRUFBd0MsYUFBeEMsRUFBdUQ7QUFDOUUsUUFBSSxLQUFKLEVBQVcsY0FBWCxFQUEyQixLQUEzQixFQUFrQyxDQUFsQyxFQUFxQyxPQUFyQyxFQUE4QyxJQUE5QyxFQUFvRCxDQUFwRCxFQUF1RCxLQUF2RCxFQUE4RCxDQUE5RCxFQUFpRSxNQUFqRSxFQUF5RSxLQUF6RSxFQUFnRixDQUFoRixFQUFtRixDQUFuRixFQUFzRixHQUF0RixFQUEyRixDQUEzRixFQUE4RixPQUE5RixFQUF1RyxHQUF2RyxFQUE0RyxJQUE1RyxFQUFrSCxJQUFsSCxFQUF3SCxJQUF4SCxFQUE4SCxTQUE5SCxFQUF5SSxDQUF6SSxFQUE0SSxPQUE1SSxFQUFxSixTQUFySixFQUFnSyxDQUFoSyxFQUFtSyxJQUFuSyxFQUF5SyxNQUF6SyxFQUFpTCxVQUFqTCxFQUE2TCxNQUE3TCxFQUFxTSxHQUFyTSxFQUEwTSxJQUExTSxFQUFnTixJQUFoTixFQUFzTixPQUF0TixFQUErTixRQUEvTixFQUF5TyxHQUF6TyxFQUE4TyxNQUE5TztBQUNBLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxTQUFLLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQUssT0FBTCxDQUFhLEtBQWIsRUFBb0IsS0FBcEIsQ0FBMEIsSUFBMUIsQ0FBYjtBQUNBLFdBQU8sSUFBUDtBQUNBLGNBQVUsS0FBSyxZQUFmO0FBQ0EscUJBQWlCLEtBQWpCO0FBQ0EsV0FBTyxLQUFLLGNBQUwsRUFBUCxFQUE4QjtBQUM1QixVQUFJLEtBQUssa0JBQUwsRUFBSixFQUErQjtBQUM3QjtBQUNEO0FBQ0QsVUFBSSxTQUFTLEtBQUssV0FBTCxDQUFpQixDQUFqQixDQUFiLEVBQWtDO0FBQ2hDLGNBQU0sSUFBSSxjQUFKLENBQW1CLGlEQUFuQixFQUFzRSxLQUFLLG9CQUFMLEtBQThCLENBQXBHLEVBQXVHLEtBQUssV0FBNUcsQ0FBTjtBQUNEO0FBQ0QsY0FBUSxZQUFZLEtBQXBCO0FBQ0EsVUFBSSxTQUFTLEtBQUsscUJBQUwsQ0FBMkIsSUFBM0IsQ0FBZ0MsS0FBSyxXQUFyQyxDQUFiLEVBQWdFO0FBQzlELFlBQUksS0FBSyxlQUFMLEtBQXlCLE9BQTdCLEVBQXNDO0FBQ3BDLGdCQUFNLElBQUksY0FBSixDQUFtQixxREFBbkIsQ0FBTjtBQUNEO0FBQ0Qsa0JBQVUsS0FBSyxnQkFBZjtBQUNBLFlBQUksUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLGlCQUFPLEVBQVA7QUFDRDtBQUNELFlBQUssT0FBTyxLQUFQLElBQWdCLElBQWpCLEtBQTJCLFVBQVUsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixPQUFPLEtBQXRDLENBQXJDLENBQUosRUFBd0Y7QUFDdEYsa0JBQVEsUUFBUSxHQUFoQjtBQUNBLGlCQUFPLEtBQVAsR0FBZSxRQUFRLEtBQXZCO0FBQ0Q7QUFDRCxZQUFJLEVBQUUsT0FBTyxLQUFQLElBQWdCLElBQWxCLEtBQTJCLE9BQU8sTUFBTSxJQUFOLENBQVcsT0FBTyxLQUFsQixFQUF5QixHQUF6QixDQUFsQyxJQUFtRSxNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLE9BQS9CLENBQXVDLEdBQXZDLE1BQWdELENBQXZILEVBQTBIO0FBQ3hILGNBQUksS0FBSyxhQUFMLEdBQXFCLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBekMsSUFBOEMsQ0FBQyxLQUFLLDhCQUFMLEVBQW5ELEVBQTBGO0FBQ3hGLGdCQUFJLEtBQUssb0JBQUwsS0FBOEIsQ0FBbEM7QUFDQSxxQkFBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLENBQVQ7QUFDQSxtQkFBTyxJQUFQLEdBQWMsS0FBSyxJQUFuQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxPQUFPLEtBQVAsQ0FBYSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLEVBQTZCLElBQTdCLENBQWIsRUFBaUQsc0JBQWpELEVBQXlFLGFBQXpFLENBQVY7QUFDRCxXQUxELE1BS087QUFDTCxpQkFBSyxJQUFMLENBQVUsSUFBVjtBQUNEO0FBQ0YsU0FURCxNQVNPO0FBQ0wsY0FBSSxDQUFDLENBQUMsTUFBTSxPQUFPLFVBQWQsS0FBNkIsSUFBN0IsR0FBb0MsSUFBSSxNQUF4QyxHQUFpRCxLQUFLLENBQXZELE1BQThELFVBQVUsS0FBSyx3QkFBTCxDQUE4QixJQUE5QixDQUFtQyxPQUFPLEtBQTFDLENBQXhFLENBQUosRUFBK0g7QUFDN0gsZ0JBQUksS0FBSyxvQkFBTCxFQUFKO0FBQ0EscUJBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFUO0FBQ0EsbUJBQU8sSUFBUCxHQUFjLEtBQUssSUFBbkI7QUFDQSxvQkFBUSxPQUFPLEtBQWY7QUFDQSxxQkFBUyxLQUFLLHlCQUFMLEVBQVQ7QUFDQSxnQkFBSSxLQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQUosRUFBb0M7QUFDbEMsdUJBQVMsT0FBTyxLQUFLLGlCQUFMLENBQXVCLFNBQVMsT0FBTyxVQUFQLENBQWtCLE1BQTNCLEdBQW9DLENBQTNELEVBQThELElBQTlELENBQWhCO0FBQ0Q7QUFDRCxpQkFBSyxJQUFMLENBQVUsT0FBTyxLQUFQLENBQWEsS0FBYixFQUFvQixzQkFBcEIsRUFBNEMsYUFBNUMsQ0FBVjtBQUNELFdBVkQsTUFVTztBQUNMLGlCQUFLLElBQUwsQ0FBVSxLQUFLLFVBQUwsQ0FBZ0IsT0FBTyxLQUF2QixFQUE4QixzQkFBOUIsRUFBc0QsYUFBdEQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRixPQXBDRCxNQW9DTyxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFMLENBQTBCLElBQTFCLENBQStCLEtBQUssV0FBcEMsQ0FBVixLQUErRCxPQUFPLEdBQVAsQ0FBVyxPQUFYLENBQW1CLElBQW5CLE1BQTZCLENBQUMsQ0FBakcsRUFBb0c7QUFDekcsWUFBSSxLQUFLLGdCQUFMLEtBQTBCLE9BQTlCLEVBQXVDO0FBQ3JDLGdCQUFNLElBQUksY0FBSixDQUFtQixxREFBbkIsQ0FBTjtBQUNEO0FBQ0Qsa0JBQVUsS0FBSyxlQUFmO0FBQ0EsWUFBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU8sRUFBUDtBQUNEO0FBQ0QsZUFBTyxTQUFQLENBQWlCLHNCQUFqQixFQUF5QyxhQUF6QztBQUNBLFlBQUk7QUFDRixnQkFBTSxPQUFPLFdBQVAsQ0FBbUIsT0FBTyxHQUExQixDQUFOO0FBQ0QsU0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsY0FBSSxLQUFKO0FBQ0EsWUFBRSxVQUFGLEdBQWUsS0FBSyxvQkFBTCxLQUE4QixDQUE3QztBQUNBLFlBQUUsT0FBRixHQUFZLEtBQUssV0FBakI7QUFDQSxnQkFBTSxDQUFOO0FBQ0Q7QUFDRCxZQUFJLFNBQVMsR0FBYixFQUFrQjtBQUNoQixzQkFBWSxJQUFaO0FBQ0EsMkJBQWlCLElBQWpCO0FBQ0EsY0FBSSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQWYsS0FBeUIsSUFBekIsR0FBZ0MsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFoQyxHQUFvRCxLQUFLLENBQTFELE1BQWlFLENBQXJFLEVBQXdFO0FBQ3RFLHNCQUFVLE9BQU8sS0FBUCxDQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBVjtBQUNBLGdCQUFJLEtBQUssSUFBTCxDQUFVLE9BQVYsS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsb0JBQU0sSUFBSSxjQUFKLENBQW1CLGdCQUFnQixPQUFoQixHQUEwQixtQkFBN0MsRUFBa0UsS0FBSyxvQkFBTCxLQUE4QixDQUFoRyxFQUFtRyxLQUFLLFdBQXhHLENBQU47QUFDRDtBQUNELHVCQUFXLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBWDtBQUNBLGdCQUFJLFFBQU8sUUFBUCx1REFBTyxRQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLG9CQUFNLElBQUksY0FBSixDQUFtQixnRUFBbkIsRUFBcUYsS0FBSyxvQkFBTCxLQUE4QixDQUFuSCxFQUFzSCxLQUFLLFdBQTNILENBQU47QUFDRDtBQUNELGdCQUFJLG9CQUFvQixLQUF4QixFQUErQjtBQUM3QixtQkFBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sU0FBUyxNQUEvQixFQUF1QyxJQUFJLEdBQTNDLEVBQWdELElBQUksRUFBRSxDQUF0RCxFQUF5RDtBQUN2RCx3QkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNBLG9CQUFJLEtBQUssT0FBTyxPQUFPLENBQVAsQ0FBWixLQUEwQixJQUE5QixFQUFvQztBQUNsQyx1QkFBSyxJQUFMLElBQWEsS0FBYjtBQUNEO0FBQ0Y7QUFDRixhQVBELE1BT087QUFDTCxtQkFBSyxHQUFMLElBQVksUUFBWixFQUFzQjtBQUNwQix3QkFBUSxTQUFTLEdBQVQsQ0FBUjtBQUNBLG9CQUFJLEtBQUssR0FBTCxLQUFhLElBQWpCLEVBQXVCO0FBQ3JCLHVCQUFLLEdBQUwsSUFBWSxLQUFaO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsV0F4QkQsTUF3Qk87QUFDTCxnQkFBSyxPQUFPLEtBQVAsSUFBZ0IsSUFBakIsSUFBMEIsT0FBTyxLQUFQLEtBQWlCLEVBQS9DLEVBQW1EO0FBQ2pELHNCQUFRLE9BQU8sS0FBZjtBQUNELGFBRkQsTUFFTztBQUNMLHNCQUFRLEtBQUssaUJBQUwsRUFBUjtBQUNEO0FBQ0QsZ0JBQUksS0FBSyxvQkFBTCxLQUE4QixDQUFsQztBQUNBLHFCQUFTLElBQUksTUFBSixDQUFXLENBQVgsQ0FBVDtBQUNBLG1CQUFPLElBQVAsR0FBYyxLQUFLLElBQW5CO0FBQ0EscUJBQVMsT0FBTyxLQUFQLENBQWEsS0FBYixFQUFvQixzQkFBcEIsQ0FBVDtBQUNBLGdCQUFJLFFBQU8sTUFBUCx1REFBTyxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzlCLG9CQUFNLElBQUksY0FBSixDQUFtQixnRUFBbkIsRUFBcUYsS0FBSyxvQkFBTCxLQUE4QixDQUFuSCxFQUFzSCxLQUFLLFdBQTNILENBQU47QUFDRDtBQUNELGdCQUFJLGtCQUFrQixLQUF0QixFQUE2QjtBQUMzQixtQkFBSyxJQUFJLENBQUosRUFBTyxPQUFPLE9BQU8sTUFBMUIsRUFBa0MsSUFBSSxJQUF0QyxFQUE0QyxHQUE1QyxFQUFpRDtBQUMvQyw2QkFBYSxPQUFPLENBQVAsQ0FBYjtBQUNBLG9CQUFJLFFBQU8sVUFBUCx1REFBTyxVQUFQLE9BQXNCLFFBQTFCLEVBQW9DO0FBQ2xDLHdCQUFNLElBQUksY0FBSixDQUFtQiw4QkFBbkIsRUFBbUQsS0FBSyxvQkFBTCxLQUE4QixDQUFqRixFQUFvRixVQUFwRixDQUFOO0FBQ0Q7QUFDRCxvQkFBSSxzQkFBc0IsS0FBMUIsRUFBaUM7QUFDL0IsdUJBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxPQUFPLFdBQVcsTUFBbEMsRUFBMEMsSUFBSSxJQUE5QyxFQUFvRCxJQUFJLEVBQUUsQ0FBMUQsRUFBNkQ7QUFDM0QsNEJBQVEsV0FBVyxDQUFYLENBQVI7QUFDQSx3QkFBSSxPQUFPLENBQVAsQ0FBSjtBQUNBLHdCQUFJLENBQUMsS0FBSyxjQUFMLENBQW9CLENBQXBCLENBQUwsRUFBNkI7QUFDM0IsMkJBQUssQ0FBTCxJQUFVLEtBQVY7QUFDRDtBQUNGO0FBQ0YsaUJBUkQsTUFRTztBQUNMLHVCQUFLLEdBQUwsSUFBWSxVQUFaLEVBQXdCO0FBQ3RCLDRCQUFRLFdBQVcsR0FBWCxDQUFSO0FBQ0Esd0JBQUksQ0FBQyxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsQ0FBTCxFQUErQjtBQUM3QiwyQkFBSyxHQUFMLElBQVksS0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsYUF2QkQsTUF1Qk87QUFDTCxtQkFBSyxHQUFMLElBQVksTUFBWixFQUFvQjtBQUNsQix3QkFBUSxPQUFPLEdBQVAsQ0FBUjtBQUNBLG9CQUFJLENBQUMsS0FBSyxjQUFMLENBQW9CLEdBQXBCLENBQUwsRUFBK0I7QUFDN0IsdUJBQUssR0FBTCxJQUFZLEtBQVo7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLFNBeEVELE1Bd0VPLElBQUssT0FBTyxLQUFQLElBQWdCLElBQWpCLEtBQTJCLFVBQVUsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixPQUFPLEtBQXRDLENBQXJDLENBQUosRUFBd0Y7QUFDN0Ysa0JBQVEsUUFBUSxHQUFoQjtBQUNBLGlCQUFPLEtBQVAsR0FBZSxRQUFRLEtBQXZCO0FBQ0Q7QUFDRCxZQUFJLFNBQUosRUFBZSxDQUVkLENBRkQsTUFFTyxJQUFJLEVBQUUsT0FBTyxLQUFQLElBQWdCLElBQWxCLEtBQTJCLE9BQU8sTUFBTSxJQUFOLENBQVcsT0FBTyxLQUFsQixFQUF5QixHQUF6QixDQUFsQyxJQUFtRSxNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLE9BQS9CLENBQXVDLEdBQXZDLE1BQWdELENBQXZILEVBQTBIO0FBQy9ILGNBQUksQ0FBRSxLQUFLLGtCQUFMLEVBQUYsSUFBZ0MsQ0FBRSxLQUFLLDhCQUFMLEVBQXRDLEVBQThFO0FBQzVFLGdCQUFJLGtCQUFrQixLQUFLLEdBQUwsTUFBYyxLQUFLLENBQXpDLEVBQTRDO0FBQzFDLG1CQUFLLEdBQUwsSUFBWSxJQUFaO0FBQ0Q7QUFDRixXQUpELE1BSU87QUFDTCxnQkFBSSxLQUFLLG9CQUFMLEtBQThCLENBQWxDO0FBQ0EscUJBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFUO0FBQ0EsbUJBQU8sSUFBUCxHQUFjLEtBQUssSUFBbkI7QUFDQSxrQkFBTSxPQUFPLEtBQVAsQ0FBYSxLQUFLLGlCQUFMLEVBQWIsRUFBdUMsc0JBQXZDLEVBQStELGFBQS9ELENBQU47QUFDQSxnQkFBSSxrQkFBa0IsS0FBSyxHQUFMLE1BQWMsS0FBSyxDQUF6QyxFQUE0QztBQUMxQyxtQkFBSyxHQUFMLElBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixTQWRNLE1BY0E7QUFDTCxnQkFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBTyxLQUF2QixFQUE4QixzQkFBOUIsRUFBc0QsYUFBdEQsQ0FBTjtBQUNBLGNBQUksa0JBQWtCLEtBQUssR0FBTCxNQUFjLEtBQUssQ0FBekMsRUFBNEM7QUFDMUMsaUJBQUssR0FBTCxJQUFZLEdBQVo7QUFDRDtBQUNGO0FBQ0YsT0FuSE0sTUFtSEE7QUFDTCxvQkFBWSxLQUFLLEtBQUwsQ0FBVyxNQUF2QjtBQUNBLFlBQUksTUFBTSxTQUFOLElBQW9CLE1BQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQWQsQ0FBM0MsRUFBMEU7QUFDeEUsY0FBSTtBQUNGLG9CQUFRLE9BQU8sS0FBUCxDQUFhLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBYixFQUE0QixzQkFBNUIsRUFBb0QsYUFBcEQsQ0FBUjtBQUNELFdBRkQsQ0FFRSxPQUFPLEtBQVAsRUFBYztBQUNkLGdCQUFJLEtBQUo7QUFDQSxjQUFFLFVBQUYsR0FBZSxLQUFLLG9CQUFMLEtBQThCLENBQTdDO0FBQ0EsY0FBRSxPQUFGLEdBQVksS0FBSyxXQUFqQjtBQUNBLGtCQUFNLENBQU47QUFDRDtBQUNELGNBQUksUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZ0JBQUksaUJBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLHNCQUFRLE1BQU0sQ0FBTixDQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsbUJBQUssR0FBTCxJQUFZLEtBQVosRUFBbUI7QUFDakIsd0JBQVEsTUFBTSxHQUFOLENBQVI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxnQkFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsTUFBTSxPQUFOLENBQWMsR0FBZCxNQUF1QixDQUF4RCxFQUEyRDtBQUN6RCxxQkFBTyxFQUFQO0FBQ0EsbUJBQUssSUFBSSxDQUFKLEVBQU8sT0FBTyxNQUFNLE1BQXpCLEVBQWlDLElBQUksSUFBckMsRUFBMkMsR0FBM0MsRUFBZ0Q7QUFDOUMsd0JBQVEsTUFBTSxDQUFOLENBQVI7QUFDQSxxQkFBSyxJQUFMLENBQVUsS0FBSyxJQUFMLENBQVUsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFWLENBQVY7QUFDRDtBQUNELHNCQUFRLElBQVI7QUFDRDtBQUNGO0FBQ0QsaUJBQU8sS0FBUDtBQUNELFNBNUJELE1BNEJPLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBbUIsTUFBbkIsQ0FBMEIsQ0FBMUIsQ0FBUixNQUEwQyxHQUExQyxJQUFpRCxTQUFTLEdBQTlELEVBQW1FO0FBQ3hFLGNBQUk7QUFDRixtQkFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0QsV0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsZ0JBQUksS0FBSjtBQUNBLGNBQUUsVUFBRixHQUFlLEtBQUssb0JBQUwsS0FBOEIsQ0FBN0M7QUFDQSxjQUFFLE9BQUYsR0FBWSxLQUFLLFdBQWpCO0FBQ0Esa0JBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUFDRCxjQUFNLElBQUksY0FBSixDQUFtQixrQkFBbkIsRUFBdUMsS0FBSyxvQkFBTCxLQUE4QixDQUFyRSxFQUF3RSxLQUFLLFdBQTdFLENBQU47QUFDRDtBQUNELFVBQUksS0FBSixFQUFXO0FBQ1QsWUFBSSxnQkFBZ0IsS0FBcEIsRUFBMkI7QUFDekIsZUFBSyxJQUFMLENBQVUsS0FBVixJQUFtQixLQUFLLEtBQUssTUFBTCxHQUFjLENBQW5CLENBQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsb0JBQVUsSUFBVjtBQUNBLGVBQUssR0FBTCxJQUFZLElBQVosRUFBa0I7QUFDaEIsc0JBQVUsR0FBVjtBQUNEO0FBQ0QsZUFBSyxJQUFMLENBQVUsS0FBVixJQUFtQixLQUFLLE9BQUwsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxRQUFJLE1BQU0sT0FBTixDQUFjLElBQWQsQ0FBSixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBeE9EOztBQTBPQSxTQUFPLFNBQVAsQ0FBaUIsb0JBQWpCLEdBQXdDLFlBQVc7QUFDakQsV0FBTyxLQUFLLGFBQUwsR0FBcUIsS0FBSyxNQUFqQztBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLHlCQUFqQixHQUE2QyxZQUFXO0FBQ3RELFdBQU8sS0FBSyxXQUFMLENBQWlCLE1BQWpCLEdBQTBCLE1BQU0sS0FBTixDQUFZLEtBQUssV0FBakIsRUFBOEIsR0FBOUIsRUFBbUMsTUFBcEU7QUFDRCxHQUZEOztBQUlBLFNBQU8sU0FBUCxDQUFpQixpQkFBakIsR0FBcUMsVUFBUyxXQUFULEVBQXNCLDJCQUF0QixFQUFtRDtBQUN0RixRQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLHdCQUFsQixFQUE0QyxTQUE1QyxFQUF1RCxjQUF2RCxFQUF1RSxxQkFBdkUsRUFBOEYsb0JBQTlGO0FBQ0EsUUFBSSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLG9CQUFjLElBQWQ7QUFDRDtBQUNELFFBQUksK0JBQStCLElBQW5DLEVBQXlDO0FBQ3ZDLG9DQUE4QixLQUE5QjtBQUNEO0FBQ0QsU0FBSyxjQUFMO0FBQ0EsUUFBSSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLGtCQUFZLEtBQUsseUJBQUwsRUFBWjtBQUNBLDZCQUF1QixLQUFLLGdDQUFMLENBQXNDLEtBQUssV0FBM0MsQ0FBdkI7QUFDQSxVQUFJLENBQUUsS0FBSyxrQkFBTCxFQUFGLElBQWdDLE1BQU0sU0FBdEMsSUFBbUQsQ0FBQyxvQkFBeEQsRUFBOEU7QUFDNUUsY0FBTSxJQUFJLGNBQUosQ0FBbUIsc0JBQW5CLEVBQTJDLEtBQUssb0JBQUwsS0FBOEIsQ0FBekUsRUFBNEUsS0FBSyxXQUFqRixDQUFOO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxrQkFBWSxXQUFaO0FBQ0Q7QUFDRCxXQUFPLENBQUMsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFNBQXZCLENBQUQsQ0FBUDtBQUNBLFFBQUksQ0FBQywyQkFBTCxFQUFrQztBQUNoQyxpQ0FBMkIsS0FBSyxnQ0FBTCxDQUFzQyxLQUFLLFdBQTNDLENBQTNCO0FBQ0Q7QUFDRCw0QkFBd0IsS0FBSyx5QkFBN0I7QUFDQSxxQkFBaUIsQ0FBQyxzQkFBc0IsSUFBdEIsQ0FBMkIsS0FBSyxXQUFoQyxDQUFsQjtBQUNBLFdBQU8sS0FBSyxjQUFMLEVBQVAsRUFBOEI7QUFDNUIsZUFBUyxLQUFLLHlCQUFMLEVBQVQ7QUFDQSxVQUFJLFdBQVcsU0FBZixFQUEwQjtBQUN4Qix5QkFBaUIsQ0FBQyxzQkFBc0IsSUFBdEIsQ0FBMkIsS0FBSyxXQUFoQyxDQUFsQjtBQUNEO0FBQ0QsVUFBSSxrQkFBa0IsS0FBSyxvQkFBTCxFQUF0QixFQUFtRDtBQUNqRDtBQUNEO0FBQ0QsVUFBSSxLQUFLLGtCQUFMLEVBQUosRUFBK0I7QUFDN0IsYUFBSyxJQUFMLENBQVUsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFNBQXZCLENBQVY7QUFDQTtBQUNEO0FBQ0QsVUFBSSw0QkFBNEIsQ0FBQyxLQUFLLGdDQUFMLENBQXNDLEtBQUssV0FBM0MsQ0FBN0IsSUFBd0YsV0FBVyxTQUF2RyxFQUFrSDtBQUNoSCxhQUFLLGtCQUFMO0FBQ0E7QUFDRDtBQUNELFVBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLGFBQUssSUFBTCxDQUFVLEtBQUssV0FBTCxDQUFpQixLQUFqQixDQUF1QixTQUF2QixDQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUksTUFBTSxLQUFOLENBQVksS0FBSyxXQUFqQixFQUE4QixNQUE5QixDQUFxQyxDQUFyQyxNQUE0QyxHQUFoRCxFQUFxRCxDQUUzRCxDQUZNLE1BRUEsSUFBSSxNQUFNLE1BQVYsRUFBa0I7QUFDdkIsYUFBSyxrQkFBTDtBQUNBO0FBQ0QsT0FITSxNQUdBO0FBQ0wsY0FBTSxJQUFJLGNBQUosQ0FBbUIsc0JBQW5CLEVBQTJDLEtBQUssb0JBQUwsS0FBOEIsQ0FBekUsRUFBNEUsS0FBSyxXQUFqRixDQUFOO0FBQ0Q7QUFDRjtBQUNELFdBQU8sS0FBSyxJQUFMLENBQVUsSUFBVixDQUFQO0FBQ0QsR0FwREQ7O0FBc0RBLFNBQU8sU0FBUCxDQUFpQixjQUFqQixHQUFrQyxZQUFXO0FBQzNDLFFBQUksS0FBSyxhQUFMLElBQXNCLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBOUMsRUFBaUQ7QUFDL0MsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxTQUFLLFdBQUwsR0FBbUIsS0FBSyxLQUFMLENBQVcsRUFBRSxLQUFLLGFBQWxCLENBQW5CO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsU0FBSyxXQUFMLEdBQW1CLEtBQUssS0FBTCxDQUFXLEVBQUUsS0FBSyxhQUFsQixDQUFuQjtBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLFVBQWpCLEdBQThCLFVBQVMsS0FBVCxFQUFnQixzQkFBaEIsRUFBd0MsYUFBeEMsRUFBdUQ7QUFDbkYsUUFBSSxDQUFKLEVBQU8sWUFBUCxFQUFxQixPQUFyQixFQUE4QixTQUE5QixFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxJQUFuRCxFQUF5RCxHQUF6RDtBQUNBLFFBQUksTUFBTSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQVYsRUFBOEI7QUFDNUIsWUFBTSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQU47QUFDQSxVQUFJLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsZ0JBQVEsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixNQUFNLENBQXRCLENBQVI7QUFDRCxPQUZELE1BRU87QUFDTCxnQkFBUSxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQVI7QUFDRDtBQUNELFVBQUksS0FBSyxJQUFMLENBQVUsS0FBVixNQUFxQixLQUFLLENBQTlCLEVBQWlDO0FBQy9CLGNBQU0sSUFBSSxjQUFKLENBQW1CLGdCQUFnQixLQUFoQixHQUF3QixtQkFBM0MsRUFBZ0UsS0FBSyxXQUFyRSxDQUFOO0FBQ0Q7QUFDRCxhQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsUUFBSSxVQUFVLEtBQUsseUJBQUwsQ0FBK0IsSUFBL0IsQ0FBb0MsS0FBcEMsQ0FBZCxFQUEwRDtBQUN4RCxrQkFBWSxDQUFDLE1BQU0sUUFBUSxTQUFmLEtBQTZCLElBQTdCLEdBQW9DLEdBQXBDLEdBQTBDLEVBQXREO0FBQ0EscUJBQWUsS0FBSyxHQUFMLENBQVMsU0FBUyxTQUFULENBQVQsQ0FBZjtBQUNBLFVBQUksTUFBTSxZQUFOLENBQUosRUFBeUI7QUFDdkIsdUJBQWUsQ0FBZjtBQUNEO0FBQ0QsWUFBTSxLQUFLLGlCQUFMLENBQXVCLFFBQVEsU0FBL0IsRUFBMEMsS0FBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLFNBQTdCLEVBQXdDLEVBQXhDLENBQTFDLEVBQXVGLFlBQXZGLENBQU47QUFDQSxVQUFJLFFBQVEsSUFBUixJQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPLFNBQVAsQ0FBaUIsc0JBQWpCLEVBQXlDLGFBQXpDO0FBQ0EsZUFBTyxPQUFPLFdBQVAsQ0FBbUIsUUFBUSxJQUFSLEdBQWUsR0FBZixHQUFxQixHQUF4QyxDQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZUFBTyxHQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUksQ0FBQyxPQUFPLE1BQU0sTUFBTixDQUFhLENBQWIsQ0FBUixNQUE2QixHQUE3QixJQUFvQyxTQUFTLEdBQTdDLElBQW9ELFNBQVMsR0FBN0QsSUFBb0UsU0FBUyxHQUFqRixFQUFzRjtBQUNwRixhQUFPLElBQVAsRUFBYTtBQUNYLFlBQUk7QUFDRixpQkFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0QsU0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsY0FBSSxLQUFKO0FBQ0EsY0FBSSxhQUFhLFNBQWIsSUFBMEIsS0FBSyxjQUFMLEVBQTlCLEVBQXFEO0FBQ25ELHFCQUFTLE9BQU8sTUFBTSxJQUFOLENBQVcsS0FBSyxXQUFoQixFQUE2QixHQUE3QixDQUFoQjtBQUNELFdBRkQsTUFFTztBQUNMLGNBQUUsVUFBRixHQUFlLEtBQUssb0JBQUwsS0FBOEIsQ0FBN0M7QUFDQSxjQUFFLE9BQUYsR0FBWSxLQUFLLFdBQWpCO0FBQ0Esa0JBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBZkQsTUFlTztBQUNMLFVBQUksS0FBSyxrQkFBTCxFQUFKLEVBQStCO0FBQzdCLGlCQUFTLE9BQU8sS0FBSyxpQkFBTCxFQUFoQjtBQUNEO0FBQ0QsYUFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0Q7QUFDRixHQWpERDs7QUFtREEsU0FBTyxTQUFQLENBQWlCLGlCQUFqQixHQUFxQyxVQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsV0FBL0IsRUFBNEM7QUFDL0UsUUFBSSxrQkFBSixFQUF3QixDQUF4QixFQUEyQixHQUEzQixFQUFnQyxJQUFoQyxFQUFzQyxPQUF0QyxFQUErQyxPQUEvQyxFQUF3RCxNQUF4RCxFQUFnRSxPQUFoRSxFQUF5RSxHQUF6RSxFQUE4RSxJQUE5RTtBQUNBLFFBQUksYUFBYSxJQUFqQixFQUF1QjtBQUNyQixrQkFBWSxFQUFaO0FBQ0Q7QUFDRCxRQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsb0JBQWMsQ0FBZDtBQUNEO0FBQ0QsYUFBUyxLQUFLLGNBQUwsRUFBVDtBQUNBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxhQUFPLEVBQVA7QUFDRDtBQUNELHlCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0EsV0FBTyxFQUFQO0FBQ0EsV0FBTyxVQUFVLGtCQUFqQixFQUFxQztBQUNuQyxVQUFJLFNBQVMsS0FBSyxjQUFMLEVBQWIsRUFBb0M7QUFDbEMsZ0JBQVEsSUFBUjtBQUNBLDZCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0Q7QUFDRjtBQUNELFFBQUksTUFBTSxXQUFWLEVBQXVCO0FBQ3JCLFVBQUksVUFBVSxLQUFLLHFCQUFMLENBQTJCLElBQTNCLENBQWdDLEtBQUssV0FBckMsQ0FBZCxFQUFpRTtBQUMvRCxzQkFBYyxRQUFRLENBQVIsRUFBVyxNQUF6QjtBQUNEO0FBQ0Y7QUFDRCxRQUFJLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsZ0JBQVUsS0FBSyxvQ0FBTCxDQUEwQyxXQUExQyxDQUFWO0FBQ0EsVUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsa0JBQVUsSUFBSSxPQUFKLENBQVksUUFBUSxXQUFSLEdBQXNCLFFBQWxDLENBQVY7QUFDQSxlQUFPLFNBQVAsQ0FBaUIsb0NBQWpCLENBQXNELFdBQXRELElBQXFFLE9BQXJFO0FBQ0Q7QUFDRCxhQUFPLFdBQVcsdUJBQXVCLFVBQVUsUUFBUSxJQUFSLENBQWEsS0FBSyxXQUFsQixDQUFqQyxDQUFYLENBQVAsRUFBcUY7QUFDbkYsWUFBSSxrQkFBSixFQUF3QjtBQUN0QixrQkFBUSxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBdUIsV0FBdkIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGtCQUFRLFFBQVEsQ0FBUixDQUFSO0FBQ0Q7QUFDRCxZQUFJLFNBQVMsS0FBSyxjQUFMLEVBQWIsRUFBb0M7QUFDbEMsa0JBQVEsSUFBUjtBQUNBLCtCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0Q7QUFDRjtBQUNGLEtBakJELE1BaUJPLElBQUksTUFBSixFQUFZO0FBQ2pCLGNBQVEsSUFBUjtBQUNEO0FBQ0QsUUFBSSxNQUFKLEVBQVk7QUFDVixXQUFLLGtCQUFMO0FBQ0Q7QUFDRCxRQUFJLFFBQVEsU0FBWixFQUF1QjtBQUNyQixnQkFBVSxFQUFWO0FBQ0EsWUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQU47QUFDQSxXQUFLLElBQUksQ0FBSixFQUFPLE1BQU0sSUFBSSxNQUF0QixFQUE4QixJQUFJLEdBQWxDLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLGVBQU8sSUFBSSxDQUFKLENBQVA7QUFDQSxZQUFJLEtBQUssTUFBTCxLQUFnQixDQUFoQixJQUFxQixLQUFLLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQTVDLEVBQWlEO0FBQy9DLG9CQUFVLE1BQU0sS0FBTixDQUFZLE9BQVosRUFBcUIsR0FBckIsSUFBNEIsSUFBNUIsR0FBbUMsSUFBN0M7QUFDRCxTQUZELE1BRU87QUFDTCxxQkFBVyxPQUFPLEdBQWxCO0FBQ0Q7QUFDRjtBQUNELGFBQU8sT0FBUDtBQUNEO0FBQ0QsUUFBSSxRQUFRLFNBQVosRUFBdUI7QUFDckIsYUFBTyxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQVA7QUFDRDtBQUNELFFBQUksT0FBTyxTQUFYLEVBQXNCO0FBQ3BCLGFBQU8sS0FBSyxzQkFBTCxDQUE0QixPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUksUUFBUSxTQUFaLEVBQXVCO0FBQzVCLGFBQU8sS0FBSyxzQkFBTCxDQUE0QixPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxFQUExQyxDQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHQXRFRDs7QUF3RUEsU0FBTyxTQUFQLENBQWlCLGtCQUFqQixHQUFzQyxVQUFTLGNBQVQsRUFBeUI7QUFDN0QsUUFBSSxHQUFKLEVBQVMsa0JBQVQsRUFBNkIsR0FBN0I7QUFDQSxRQUFJLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQix1QkFBaUIsSUFBakI7QUFDRDtBQUNELHlCQUFxQixLQUFLLHlCQUFMLEVBQXJCO0FBQ0EsVUFBTSxDQUFDLEtBQUssY0FBTCxFQUFQO0FBQ0EsUUFBSSxjQUFKLEVBQW9CO0FBQ2xCLGFBQU8sQ0FBQyxHQUFELElBQVEsS0FBSyxrQkFBTCxFQUFmLEVBQTBDO0FBQ3hDLGNBQU0sQ0FBQyxLQUFLLGNBQUwsRUFBUDtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0wsYUFBTyxDQUFDLEdBQUQsSUFBUSxLQUFLLGtCQUFMLEVBQWYsRUFBMEM7QUFDeEMsY0FBTSxDQUFDLEtBQUssY0FBTCxFQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUksR0FBSixFQUFTO0FBQ1AsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFNLEtBQU47QUFDQSxRQUFJLEtBQUsseUJBQUwsS0FBbUMsa0JBQXZDLEVBQTJEO0FBQ3pELFlBQU0sSUFBTjtBQUNEO0FBQ0QsU0FBSyxrQkFBTDtBQUNBLFdBQU8sR0FBUDtBQUNELEdBekJEOztBQTJCQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsUUFBSSxXQUFKO0FBQ0Esa0JBQWMsTUFBTSxJQUFOLENBQVcsS0FBSyxXQUFoQixFQUE2QixHQUE3QixDQUFkO0FBQ0EsV0FBTyxZQUFZLE1BQVosS0FBdUIsQ0FBdkIsSUFBNEIsWUFBWSxNQUFaLENBQW1CLENBQW5CLE1BQTBCLEdBQTdEO0FBQ0QsR0FKRDs7QUFNQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsV0FBTyxPQUFPLE1BQU0sSUFBTixDQUFXLEtBQUssV0FBaEIsRUFBNkIsR0FBN0IsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLG9CQUFqQixHQUF3QyxZQUFXO0FBQ2pELFFBQUksWUFBSjtBQUNBLG1CQUFlLE1BQU0sS0FBTixDQUFZLEtBQUssV0FBakIsRUFBOEIsR0FBOUIsQ0FBZjtBQUNBLFdBQU8sYUFBYSxNQUFiLENBQW9CLENBQXBCLE1BQTJCLEdBQWxDO0FBQ0QsR0FKRDs7QUFNQSxTQUFPLFNBQVAsQ0FBaUIsT0FBakIsR0FBMkIsVUFBUyxLQUFULEVBQWdCO0FBQ3pDLFFBQUksS0FBSixFQUFXLENBQVgsRUFBYyxNQUFkLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQTZDLEtBQTdDLEVBQW9ELEdBQXBELEVBQXlELElBQXpELEVBQStELElBQS9ELEVBQXFFLGNBQXJFLEVBQXFGLFlBQXJGO0FBQ0EsUUFBSSxNQUFNLE9BQU4sQ0FBYyxJQUFkLE1BQXdCLENBQUMsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBUSxNQUFNLEtBQU4sQ0FBWSxNQUFaLEVBQW9CLElBQXBCLENBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQXFDLElBQXJDLEVBQTJDLElBQTNDLENBQWdELElBQWhELENBQVI7QUFDRDtBQUNELFlBQVEsQ0FBUjtBQUNBLFVBQU0sS0FBSyxtQkFBTCxDQUF5QixVQUF6QixDQUFvQyxLQUFwQyxFQUEyQyxFQUEzQyxDQUFOLEVBQXNELFFBQVEsSUFBSSxDQUFKLENBQTlELEVBQXNFLFFBQVEsSUFBSSxDQUFKLENBQTlFO0FBQ0EsU0FBSyxNQUFMLElBQWUsS0FBZjtBQUNBLFdBQU8sS0FBSyx3QkFBTCxDQUE4QixVQUE5QixDQUF5QyxLQUF6QyxFQUFnRCxFQUFoRCxFQUFvRCxDQUFwRCxDQUFQLEVBQStELGVBQWUsS0FBSyxDQUFMLENBQTlFLEVBQXVGLFFBQVEsS0FBSyxDQUFMLENBQS9GO0FBQ0EsUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDZixXQUFLLE1BQUwsSUFBZSxNQUFNLFdBQU4sQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekIsSUFBaUMsTUFBTSxXQUFOLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQWhEO0FBQ0EsY0FBUSxZQUFSO0FBQ0Q7QUFDRCxXQUFPLEtBQUssNkJBQUwsQ0FBbUMsVUFBbkMsQ0FBOEMsS0FBOUMsRUFBcUQsRUFBckQsRUFBeUQsQ0FBekQsQ0FBUCxFQUFvRSxlQUFlLEtBQUssQ0FBTCxDQUFuRixFQUE0RixRQUFRLEtBQUssQ0FBTCxDQUFwRztBQUNBLFFBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2YsV0FBSyxNQUFMLElBQWUsTUFBTSxXQUFOLENBQWtCLEtBQWxCLEVBQXlCLElBQXpCLElBQWlDLE1BQU0sV0FBTixDQUFrQixZQUFsQixFQUFnQyxJQUFoQyxDQUFoRDtBQUNBLGNBQVEsWUFBUjtBQUNBLGNBQVEsS0FBSywyQkFBTCxDQUFpQyxPQUFqQyxDQUF5QyxLQUF6QyxFQUFnRCxFQUFoRCxDQUFSO0FBQ0Q7QUFDRCxZQUFRLE1BQU0sS0FBTixDQUFZLElBQVosQ0FBUjtBQUNBLHFCQUFpQixDQUFDLENBQWxCO0FBQ0EsU0FBSyxJQUFJLENBQUosRUFBTyxNQUFNLE1BQU0sTUFBeEIsRUFBZ0MsSUFBSSxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QztBQUM1QyxhQUFPLE1BQU0sQ0FBTixDQUFQO0FBQ0EsVUFBSSxNQUFNLElBQU4sQ0FBVyxJQUFYLEVBQWlCLEdBQWpCLEVBQXNCLE1BQXRCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDO0FBQ0Q7QUFDRCxlQUFTLEtBQUssTUFBTCxHQUFjLE1BQU0sS0FBTixDQUFZLElBQVosRUFBa0IsTUFBekM7QUFDQSxVQUFJLG1CQUFtQixDQUFDLENBQXBCLElBQXlCLFNBQVMsY0FBdEMsRUFBc0Q7QUFDcEQseUJBQWlCLE1BQWpCO0FBQ0Q7QUFDRjtBQUNELFFBQUksaUJBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFdBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxPQUFPLE1BQU0sTUFBN0IsRUFBcUMsSUFBSSxJQUF6QyxFQUErQyxJQUFJLEVBQUUsQ0FBckQsRUFBd0Q7QUFDdEQsZUFBTyxNQUFNLENBQU4sQ0FBUDtBQUNBLGNBQU0sQ0FBTixJQUFXLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBWDtBQUNEO0FBQ0QsY0FBUSxNQUFNLElBQU4sQ0FBVyxJQUFYLENBQVI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBdkNEOztBQXlDQSxTQUFPLFNBQVAsQ0FBaUIsOEJBQWpCLEdBQWtELFVBQVMsa0JBQVQsRUFBNkI7QUFDN0UsUUFBSSxNQUFKLEVBQVksR0FBWjtBQUNBLFFBQUksc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCLDJCQUFxQixJQUFyQjtBQUNEO0FBQ0QsUUFBSSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsMkJBQXFCLEtBQUsseUJBQUwsRUFBckI7QUFDRDtBQUNELGFBQVMsS0FBSyxjQUFMLEVBQVQ7QUFDQSxXQUFPLFVBQVUsS0FBSyxrQkFBTCxFQUFqQixFQUE0QztBQUMxQyxlQUFTLEtBQUssY0FBTCxFQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsTUFBZCxFQUFzQjtBQUNwQixhQUFPLEtBQVA7QUFDRDtBQUNELFVBQU0sS0FBTjtBQUNBLFFBQUksS0FBSyx5QkFBTCxPQUFxQyxrQkFBckMsSUFBMkQsS0FBSyxnQ0FBTCxDQUFzQyxLQUFLLFdBQTNDLENBQS9ELEVBQXdIO0FBQ3RILFlBQU0sSUFBTjtBQUNEO0FBQ0QsU0FBSyxrQkFBTDtBQUNBLFdBQU8sR0FBUDtBQUNELEdBckJEOztBQXVCQSxTQUFPLFNBQVAsQ0FBaUIsZ0NBQWpCLEdBQW9ELFlBQVc7QUFDN0QsV0FBTyxLQUFLLFdBQUwsS0FBcUIsR0FBckIsSUFBNEIsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLE1BQWlDLElBQXBFO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLE1BQVA7QUFFRCxDQTNrQlEsRUFBVDs7QUE2a0JBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7Ozs7QUMxbEJBO0FBQ0EsSUFBSSxPQUFKOztBQUVBLFVBQVcsWUFBVztBQUNwQixVQUFRLFNBQVIsQ0FBa0IsS0FBbEIsR0FBMEIsSUFBMUI7O0FBRUEsVUFBUSxTQUFSLENBQWtCLFFBQWxCLEdBQTZCLElBQTdCOztBQUVBLFVBQVEsU0FBUixDQUFrQixZQUFsQixHQUFpQyxJQUFqQzs7QUFFQSxVQUFRLFNBQVIsQ0FBa0IsT0FBbEIsR0FBNEIsSUFBNUI7O0FBRUEsV0FBUyxPQUFULENBQWlCLFFBQWpCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQ3BDLFFBQUksS0FBSixFQUFXLHNCQUFYLEVBQW1DLFlBQW5DLEVBQWlELENBQWpELEVBQW9ELEdBQXBELEVBQXlELE9BQXpELEVBQWtFLElBQWxFLEVBQXdFLElBQXhFLEVBQThFLE9BQTlFO0FBQ0EsUUFBSSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGtCQUFZLEVBQVo7QUFDRDtBQUNELG1CQUFlLEVBQWY7QUFDQSxVQUFNLFNBQVMsTUFBZjtBQUNBLGNBQVUsSUFBVjtBQUNBLDZCQUF5QixDQUF6QjtBQUNBLFFBQUksQ0FBSjtBQUNBLFdBQU8sSUFBSSxHQUFYLEVBQWdCO0FBQ2QsY0FBUSxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBUjtBQUNBLFVBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLHdCQUFnQixTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQUUsSUFBSSxDQUFOLElBQVcsQ0FBWCxJQUFnQixHQUFsQyxDQUFoQjtBQUNBO0FBQ0QsT0FIRCxNQUdPLElBQUksVUFBVSxHQUFkLEVBQW1CO0FBQ3hCLFlBQUksSUFBSSxNQUFNLENBQWQsRUFBaUI7QUFDZixpQkFBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQUUsSUFBSSxDQUFOLElBQVcsQ0FBWCxJQUFnQixHQUFsQyxDQUFQO0FBQ0EsY0FBSSxTQUFTLEtBQWIsRUFBb0I7QUFDbEIsaUJBQUssQ0FBTDtBQUNBLDRCQUFnQixJQUFoQjtBQUNELFdBSEQsTUFHTyxJQUFJLFNBQVMsS0FBYixFQUFvQjtBQUN6QjtBQUNBLGlCQUFLLENBQUw7QUFDQSxtQkFBTyxFQUFQO0FBQ0EsbUJBQU8sSUFBSSxDQUFKLEdBQVEsR0FBZixFQUFvQjtBQUNsQix3QkFBVSxTQUFTLE1BQVQsQ0FBZ0IsSUFBSSxDQUFwQixDQUFWO0FBQ0Esa0JBQUksWUFBWSxHQUFoQixFQUFxQjtBQUNuQixnQ0FBZ0IsR0FBaEI7QUFDQTtBQUNBLG9CQUFJLEtBQUssTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLHNCQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNuQiw4QkFBVSxFQUFWO0FBQ0Q7QUFDRCwwQkFBUSxJQUFSLElBQWdCLHNCQUFoQjtBQUNEO0FBQ0Q7QUFDRCxlQVZELE1BVU87QUFDTCx3QkFBUSxPQUFSO0FBQ0Q7QUFDRDtBQUNEO0FBQ0YsV0FyQk0sTUFxQkE7QUFDTCw0QkFBZ0IsS0FBaEI7QUFDQTtBQUNEO0FBQ0YsU0E5QkQsTUE4Qk87QUFDTCwwQkFBZ0IsS0FBaEI7QUFDRDtBQUNGLE9BbENNLE1Ba0NBO0FBQ0wsd0JBQWdCLEtBQWhCO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsSUFBSSxNQUFKLENBQVcsS0FBSyxZQUFoQixFQUE4QixNQUFNLFVBQVUsT0FBVixDQUFrQixHQUFsQixFQUF1QixFQUF2QixDQUFwQyxDQUFiO0FBQ0EsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOztBQUVELFVBQVEsU0FBUixDQUFrQixJQUFsQixHQUF5QixVQUFTLEdBQVQsRUFBYztBQUNyQyxRQUFJLEtBQUosRUFBVyxPQUFYLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCO0FBQ0EsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLGNBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixDQUFWO0FBQ0EsUUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLEtBQUssT0FBTCxJQUFnQixJQUFwQixFQUEwQjtBQUN4QixZQUFNLEtBQUssT0FBWDtBQUNBLFdBQUssSUFBTCxJQUFhLEdBQWIsRUFBa0I7QUFDaEIsZ0JBQVEsSUFBSSxJQUFKLENBQVI7QUFDQSxnQkFBUSxJQUFSLElBQWdCLFFBQVEsS0FBUixDQUFoQjtBQUNEO0FBQ0Y7QUFDRCxXQUFPLE9BQVA7QUFDRCxHQWZEOztBQWlCQSxVQUFRLFNBQVIsQ0FBa0IsSUFBbEIsR0FBeUIsVUFBUyxHQUFULEVBQWM7QUFDckMsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxVQUFRLFNBQVIsQ0FBa0IsT0FBbEIsR0FBNEIsVUFBUyxHQUFULEVBQWMsV0FBZCxFQUEyQjtBQUNyRCxTQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLENBQXZCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxLQUFLLEtBQWpCLEVBQXdCLFdBQXhCLENBQVA7QUFDRCxHQUhEOztBQUtBLFVBQVEsU0FBUixDQUFrQixVQUFsQixHQUErQixVQUFTLEdBQVQsRUFBYyxXQUFkLEVBQTJCLEtBQTNCLEVBQWtDO0FBQy9ELFFBQUksS0FBSjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGNBQVEsQ0FBUjtBQUNEO0FBQ0QsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFlBQVEsQ0FBUjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixNQUF5QixVQUFVLENBQVYsSUFBZSxRQUFRLEtBQWhELENBQVAsRUFBK0Q7QUFDN0QsV0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFlBQU0sSUFBSSxPQUFKLENBQVksS0FBSyxLQUFqQixFQUF3QixXQUF4QixDQUFOO0FBQ0E7QUFDRDtBQUNELFdBQU8sQ0FBQyxHQUFELEVBQU0sS0FBTixDQUFQO0FBQ0QsR0FiRDs7QUFlQSxTQUFPLE9BQVA7QUFFRCxDQWpIUyxFQUFWOztBQW1IQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDdEhBO0FBQ0EsSUFBSSxPQUFKLEVBQWEsU0FBYixFQUF3QixLQUF4Qjs7QUFFQSxRQUFRLFFBQVEsU0FBUixDQUFSOztBQUVBLFVBQVUsUUFBUSxXQUFSLENBQVY7O0FBRUEsWUFBYSxZQUFXO0FBQ3RCLFdBQVMsU0FBVCxHQUFxQixDQUFFOztBQUV2QixZQUFVLHlCQUFWLEdBQXNDLElBQUksT0FBSixDQUFZLGtGQUFaLENBQXRDOztBQUVBLFlBQVUsMEJBQVYsR0FBdUMsVUFBUyxLQUFULEVBQWdCO0FBQ3JELFdBQU8sTUFBTSxPQUFOLENBQWMsT0FBZCxFQUF1QixJQUF2QixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxZQUFVLDBCQUFWLEdBQXVDLFVBQVMsS0FBVCxFQUFnQjtBQUNyRCxRQUFJLEtBQUssaUJBQUwsSUFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsV0FBSyxpQkFBTCxHQUEwQixVQUFTLEtBQVQsRUFBZ0I7QUFDeEMsZUFBTyxVQUFTLEdBQVQsRUFBYztBQUNuQixpQkFBTyxNQUFNLGlCQUFOLENBQXdCLEdBQXhCLENBQVA7QUFDRCxTQUZEO0FBR0QsT0FKd0IsQ0FJdEIsSUFKc0IsQ0FBekI7QUFLRDtBQUNELFdBQU8sS0FBSyx5QkFBTCxDQUErQixPQUEvQixDQUF1QyxLQUF2QyxFQUE4QyxLQUFLLGlCQUFuRCxDQUFQO0FBQ0QsR0FURDs7QUFXQSxZQUFVLGlCQUFWLEdBQThCLFVBQVMsS0FBVCxFQUFnQjtBQUM1QyxRQUFJLEVBQUo7QUFDQSxTQUFLLE9BQU8sWUFBWjtBQUNBLFlBQVEsTUFBTSxNQUFOLENBQWEsQ0FBYixDQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLENBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxDQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsQ0FBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxJQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLEVBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxFQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsRUFBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLEVBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssSUFBTDtBQUNFLGVBQU8sSUFBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxNQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsTUFBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLE1BQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxNQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRjtBQUNFLGVBQU8sRUFBUDtBQTVDSjtBQThDRCxHQWpERDs7QUFtREEsU0FBTyxTQUFQO0FBRUQsQ0F6RVcsRUFBWjs7QUEyRUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7OztBQ2xGQTtBQUNBLElBQUksT0FBSjtBQUFBLElBQWEsS0FBYjtBQUFBLElBQ0UsVUFBVSxHQUFHLGNBRGY7O0FBR0EsVUFBVSxRQUFRLFdBQVIsQ0FBVjs7QUFFQSxRQUFTLFlBQVc7QUFDbEIsV0FBUyxLQUFULEdBQWlCLENBQUU7O0FBRW5CLFFBQU0sdUJBQU4sR0FBZ0MsRUFBaEM7O0FBRUEsUUFBTSx3QkFBTixHQUFpQyxFQUFqQzs7QUFFQSxRQUFNLFlBQU4sR0FBcUIsTUFBckI7O0FBRUEsUUFBTSxZQUFOLEdBQXFCLE9BQXJCOztBQUVBLFFBQU0sV0FBTixHQUFvQixVQUFwQjs7QUFFQSxRQUFNLGlCQUFOLEdBQTBCLGFBQTFCOztBQUVBLFFBQU0sWUFBTixHQUFxQixJQUFJLE9BQUosQ0FBWSxNQUFNLCtCQUFOLEdBQXdDLHdCQUF4QyxHQUFtRSxzQkFBbkUsR0FBNEYsb0JBQTVGLEdBQW1ILHNCQUFuSCxHQUE0SSx3QkFBNUksR0FBdUssd0JBQXZLLEdBQWtNLDRCQUFsTSxHQUFpTywwREFBak8sR0FBOFIscUNBQTlSLEdBQXNVLEdBQWxWLEVBQXVWLEdBQXZWLENBQXJCOztBQUVBLFFBQU0scUJBQU4sR0FBOEIsSUFBSSxJQUFKLEdBQVcsaUJBQVgsS0FBaUMsRUFBakMsR0FBc0MsSUFBcEU7O0FBRUEsUUFBTSxJQUFOLEdBQWEsVUFBUyxHQUFULEVBQWMsS0FBZCxFQUFxQjtBQUNoQyxRQUFJLFNBQUosRUFBZSxVQUFmO0FBQ0EsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBUSxLQUFSO0FBQ0Q7QUFDRCxnQkFBWSxLQUFLLHVCQUFMLENBQTZCLEtBQTdCLENBQVo7QUFDQSxRQUFJLGFBQWEsSUFBakIsRUFBdUI7QUFDckIsV0FBSyx1QkFBTCxDQUE2QixLQUE3QixJQUFzQyxZQUFZLElBQUksTUFBSixDQUFXLE1BQU0sS0FBTixHQUFjLEVBQWQsR0FBbUIsS0FBbkIsR0FBMkIsR0FBdEMsQ0FBbEQ7QUFDRDtBQUNELGNBQVUsU0FBVixHQUFzQixDQUF0QjtBQUNBLGlCQUFhLEtBQUssd0JBQUwsQ0FBOEIsS0FBOUIsQ0FBYjtBQUNBLFFBQUksY0FBYyxJQUFsQixFQUF3QjtBQUN0QixXQUFLLHdCQUFMLENBQThCLEtBQTlCLElBQXVDLGFBQWEsSUFBSSxNQUFKLENBQVcsUUFBUSxFQUFSLEdBQWEsS0FBYixHQUFxQixJQUFoQyxDQUFwRDtBQUNEO0FBQ0QsZUFBVyxTQUFYLEdBQXVCLENBQXZCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLEVBQTJCLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDLEVBQS9DLENBQVA7QUFDRCxHQWhCRDs7QUFrQkEsUUFBTSxLQUFOLEdBQWMsVUFBUyxHQUFULEVBQWMsS0FBZCxFQUFxQjtBQUNqQyxRQUFJLFNBQUo7QUFDQSxRQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFRLEtBQVI7QUFDRDtBQUNELGdCQUFZLEtBQUssdUJBQUwsQ0FBNkIsS0FBN0IsQ0FBWjtBQUNBLFFBQUksYUFBYSxJQUFqQixFQUF1QjtBQUNyQixXQUFLLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDLFlBQVksSUFBSSxNQUFKLENBQVcsTUFBTSxLQUFOLEdBQWMsRUFBZCxHQUFtQixLQUFuQixHQUEyQixHQUF0QyxDQUFsRDtBQUNEO0FBQ0QsY0FBVSxTQUFWLEdBQXNCLENBQXRCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLENBQVA7QUFDRCxHQVhEOztBQWFBLFFBQU0sS0FBTixHQUFjLFVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDakMsUUFBSSxVQUFKO0FBQ0EsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBUSxLQUFSO0FBQ0Q7QUFDRCxpQkFBYSxLQUFLLHdCQUFMLENBQThCLEtBQTlCLENBQWI7QUFDQSxRQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsV0FBSyx3QkFBTCxDQUE4QixLQUE5QixJQUF1QyxhQUFhLElBQUksTUFBSixDQUFXLFFBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsSUFBaEMsQ0FBcEQ7QUFDRDtBQUNELGVBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFdBQU8sSUFBSSxPQUFKLENBQVksVUFBWixFQUF3QixFQUF4QixDQUFQO0FBQ0QsR0FYRDs7QUFhQSxRQUFNLE9BQU4sR0FBZ0IsVUFBUyxLQUFULEVBQWdCO0FBQzlCLFdBQU8sQ0FBQyxLQUFELElBQVUsVUFBVSxFQUFwQixJQUEwQixVQUFVLEdBQXBDLElBQTRDLGlCQUFpQixLQUFqQixJQUEwQixNQUFNLE1BQU4sS0FBaUIsQ0FBdkYsSUFBNkYsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXBHO0FBQ0QsR0FGRDs7QUFJQSxRQUFNLGFBQU4sR0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLFFBQUksQ0FBSjtBQUNBLFdBQU8saUJBQWlCLE1BQWpCLElBQTZCLFlBQVc7QUFDN0MsVUFBSSxPQUFKO0FBQ0EsZ0JBQVUsRUFBVjtBQUNBLFdBQUssQ0FBTCxJQUFVLEtBQVYsRUFBaUI7QUFDZixZQUFJLENBQUMsUUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixDQUFwQixDQUFMLEVBQTZCO0FBQzdCLGdCQUFRLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7QUFDRCxhQUFPLE9BQVA7QUFDRCxLQVJrQyxFQUFELENBUTVCLE1BUjRCLEtBUWpCLENBUmpCO0FBU0QsR0FYRDs7QUFhQSxRQUFNLFdBQU4sR0FBb0IsVUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DLEVBQTJDO0FBQzdELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixNQUF2QjtBQUNBLFFBQUksQ0FBSjtBQUNBLGFBQVMsS0FBSyxNQUFkO0FBQ0EsZ0JBQVksS0FBSyxTQUFqQjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGVBQVMsT0FBTyxLQUFQLENBQWEsS0FBYixDQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsQ0FBVDtBQUNEO0FBQ0QsVUFBTSxPQUFPLE1BQWI7QUFDQSxhQUFTLFVBQVUsTUFBbkI7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxHQUF0QixFQUEyQixLQUFLLEdBQUwsR0FBVyxJQUFJLEdBQWYsR0FBcUIsSUFBSSxHQUFwRCxFQUF5RCxJQUFJLEtBQUssR0FBTCxHQUFXLEVBQUUsQ0FBYixHQUFpQixFQUFFLENBQWhGLEVBQW1GO0FBQ2pGLFVBQUksY0FBYyxPQUFPLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLE1BQWhCLENBQWxCLEVBQTJDO0FBQ3pDO0FBQ0EsYUFBSyxTQUFTLENBQWQ7QUFDRDtBQUNGO0FBQ0QsV0FBTyxDQUFQO0FBQ0QsR0FwQkQ7O0FBc0JBLFFBQU0sUUFBTixHQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDL0IsU0FBSyxZQUFMLENBQWtCLFNBQWxCLEdBQThCLENBQTlCO0FBQ0EsV0FBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTSxNQUFOLEdBQWUsVUFBUyxLQUFULEVBQWdCO0FBQzdCLFNBQUssV0FBTCxDQUFpQixTQUFqQixHQUE2QixDQUE3QjtBQUNBLFdBQU8sU0FBUyxDQUFDLFFBQVEsRUFBVCxFQUFhLE9BQWIsQ0FBcUIsS0FBSyxXQUExQixFQUF1QyxFQUF2QyxDQUFULEVBQXFELENBQXJELENBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU0sTUFBTixHQUFlLFVBQVMsS0FBVCxFQUFnQjtBQUM3QixTQUFLLGlCQUFMLENBQXVCLFNBQXZCLEdBQW1DLENBQW5DO0FBQ0EsWUFBUSxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQVI7QUFDQSxRQUFJLENBQUMsUUFBUSxFQUFULEVBQWEsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixNQUE2QixJQUFqQyxFQUF1QztBQUNyQyxjQUFRLENBQUMsUUFBUSxFQUFULEVBQWEsS0FBYixDQUFtQixDQUFuQixDQUFSO0FBQ0Q7QUFDRCxXQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQVQsRUFBYSxPQUFiLENBQXFCLEtBQUssaUJBQTFCLEVBQTZDLEVBQTdDLENBQVQsRUFBMkQsRUFBM0QsQ0FBUDtBQUNELEdBUEQ7O0FBU0EsUUFBTSxPQUFOLEdBQWdCLFVBQVMsQ0FBVCxFQUFZO0FBQzFCLFFBQUksRUFBSjtBQUNBLFNBQUssT0FBTyxZQUFaO0FBQ0EsUUFBSSxRQUFRLEtBQUssUUFBYixDQUFKLEVBQTRCO0FBQzFCLGFBQU8sR0FBRyxDQUFILENBQVA7QUFDRDtBQUNELFFBQUksUUFBUSxDQUFaLEVBQWU7QUFDYixhQUFPLEdBQUcsT0FBTyxLQUFLLENBQWYsSUFBb0IsR0FBRyxPQUFPLElBQUksSUFBZCxDQUEzQjtBQUNEO0FBQ0QsUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDZixhQUFPLEdBQUcsT0FBTyxLQUFLLEVBQWYsSUFBcUIsR0FBRyxPQUFPLEtBQUssQ0FBTCxHQUFTLElBQW5CLENBQXJCLEdBQWdELEdBQUcsT0FBTyxJQUFJLElBQWQsQ0FBdkQ7QUFDRDtBQUNELFdBQU8sR0FBRyxPQUFPLEtBQUssRUFBZixJQUFxQixHQUFHLE9BQU8sS0FBSyxFQUFMLEdBQVUsSUFBcEIsQ0FBckIsR0FBaUQsR0FBRyxPQUFPLEtBQUssQ0FBTCxHQUFTLElBQW5CLENBQWpELEdBQTRFLEdBQUcsT0FBTyxJQUFJLElBQWQsQ0FBbkY7QUFDRCxHQWJEOztBQWVBLFFBQU0sWUFBTixHQUFxQixVQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0I7QUFDM0MsUUFBSSxVQUFKO0FBQ0EsUUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUyxJQUFUO0FBQ0Q7QUFDRCxRQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixtQkFBYSxNQUFNLFdBQU4sRUFBYjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRCxVQUFJLGVBQWUsR0FBbkIsRUFBd0I7QUFDdEIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFJLGVBQWUsT0FBbkIsRUFBNEI7QUFDMUIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFJLGVBQWUsRUFBbkIsRUFBdUI7QUFDckIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU8sQ0FBQyxDQUFDLEtBQVQ7QUFDRCxHQXhCRDs7QUEwQkEsUUFBTSxTQUFOLEdBQWtCLFVBQVMsS0FBVCxFQUFnQjtBQUNoQyxTQUFLLFlBQUwsQ0FBa0IsU0FBbEIsR0FBOEIsQ0FBOUI7QUFDQSxXQUFPLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsQ0FBQyxNQUFNLEtBQU4sQ0FBOUIsSUFBOEMsTUFBTSxPQUFOLENBQWMsS0FBSyxZQUFuQixFQUFpQyxFQUFqQyxNQUF5QyxFQUEzSDtBQUNELEdBSEQ7O0FBS0EsUUFBTSxZQUFOLEdBQXFCLFVBQVMsR0FBVCxFQUFjO0FBQ2pDLFFBQUksSUFBSixFQUFVLEdBQVYsRUFBZSxRQUFmLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLE1BQXJDLEVBQTZDLEtBQTdDLEVBQW9ELE1BQXBELEVBQTRELE9BQTVELEVBQXFFLFNBQXJFLEVBQWdGLFNBQWhGLEVBQTJGLElBQTNGO0FBQ0EsUUFBSSxFQUFFLE9BQU8sSUFBUCxHQUFjLElBQUksTUFBbEIsR0FBMkIsS0FBSyxDQUFsQyxDQUFKLEVBQTBDO0FBQ3hDLGFBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU8sU0FBUyxLQUFLLElBQWQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBLFlBQVEsU0FBUyxLQUFLLEtBQWQsRUFBcUIsRUFBckIsSUFBMkIsQ0FBbkM7QUFDQSxVQUFNLFNBQVMsS0FBSyxHQUFkLEVBQW1CLEVBQW5CLENBQU47QUFDQSxRQUFJLEtBQUssSUFBTCxJQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGFBQU8sSUFBSSxJQUFKLENBQVMsS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FBVCxDQUFQO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPLFNBQVMsS0FBSyxJQUFkLEVBQW9CLEVBQXBCLENBQVA7QUFDQSxhQUFTLFNBQVMsS0FBSyxNQUFkLEVBQXNCLEVBQXRCLENBQVQ7QUFDQSxhQUFTLFNBQVMsS0FBSyxNQUFkLEVBQXNCLEVBQXRCLENBQVQ7QUFDQSxRQUFJLEtBQUssUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUN6QixpQkFBVyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQVg7QUFDQSxhQUFPLFNBQVMsTUFBVCxHQUFrQixDQUF6QixFQUE0QjtBQUMxQixvQkFBWSxHQUFaO0FBQ0Q7QUFDRCxpQkFBVyxTQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBWDtBQUNELEtBTkQsTUFNTztBQUNMLGlCQUFXLENBQVg7QUFDRDtBQUNELFFBQUksS0FBSyxFQUFMLElBQVcsSUFBZixFQUFxQjtBQUNuQixnQkFBVSxTQUFTLEtBQUssT0FBZCxFQUF1QixFQUF2QixDQUFWO0FBQ0EsVUFBSSxLQUFLLFNBQUwsSUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsb0JBQVksU0FBUyxLQUFLLFNBQWQsRUFBeUIsRUFBekIsQ0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLG9CQUFZLENBQVo7QUFDRDtBQUNELGtCQUFZLENBQUMsVUFBVSxFQUFWLEdBQWUsU0FBaEIsSUFBNkIsS0FBekM7QUFDQSxVQUFJLFFBQVEsS0FBSyxPQUFqQixFQUEwQjtBQUN4QixxQkFBYSxDQUFDLENBQWQ7QUFDRDtBQUNGO0FBQ0QsV0FBTyxJQUFJLElBQUosQ0FBUyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsS0FBZixFQUFzQixHQUF0QixFQUEyQixJQUEzQixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxRQUFqRCxDQUFULENBQVA7QUFDQSxRQUFJLFNBQUosRUFBZTtBQUNiLFdBQUssT0FBTCxDQUFhLEtBQUssT0FBTCxLQUFpQixTQUE5QjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0E3Q0Q7O0FBK0NBLFFBQU0sU0FBTixHQUFrQixVQUFTLEdBQVQsRUFBYyxNQUFkLEVBQXNCO0FBQ3RDLFFBQUksQ0FBSixFQUFPLEdBQVA7QUFDQSxVQUFNLEVBQU47QUFDQSxRQUFJLENBQUo7QUFDQSxXQUFPLElBQUksTUFBWCxFQUFtQjtBQUNqQixhQUFPLEdBQVA7QUFDQTtBQUNEO0FBQ0QsV0FBTyxHQUFQO0FBQ0QsR0FURDs7QUFXQSxRQUFNLGlCQUFOLEdBQTBCLFVBQVMsSUFBVCxFQUFlLFFBQWYsRUFBeUI7QUFDakQsUUFBSSxJQUFKLEVBQVUsRUFBVixFQUFjLENBQWQsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsR0FBdkM7QUFDQSxRQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsaUJBQVcsSUFBWDtBQUNEO0FBQ0QsVUFBTSxJQUFOO0FBQ0EsUUFBSSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsV0FBVyxJQUFoRCxFQUFzRDtBQUNwRCxVQUFJLE9BQU8sY0FBWCxFQUEyQjtBQUN6QixjQUFNLElBQUksY0FBSixFQUFOO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBTyxhQUFYLEVBQTBCO0FBQy9CLGNBQU0sQ0FBQyxvQkFBRCxFQUF1QixvQkFBdkIsRUFBNkMsZ0JBQTdDLEVBQStELG1CQUEvRCxDQUFOO0FBQ0EsYUFBSyxJQUFJLENBQUosRUFBTyxPQUFPLElBQUksTUFBdkIsRUFBK0IsSUFBSSxJQUFuQyxFQUF5QyxHQUF6QyxFQUE4QztBQUM1QyxpQkFBTyxJQUFJLENBQUosQ0FBUDtBQUNBLGNBQUk7QUFDRixrQkFBTSxJQUFJLGFBQUosQ0FBa0IsSUFBbEIsQ0FBTjtBQUNELFdBRkQsQ0FFRSxPQUFPLEtBQVAsRUFBYyxDQUFFO0FBQ25CO0FBQ0Y7QUFDRjtBQUNELFFBQUksT0FBTyxJQUFYLEVBQWlCO0FBQ2YsVUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUksa0JBQUosR0FBeUIsWUFBVztBQUNsQyxjQUFJLElBQUksVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixnQkFBSSxJQUFJLE1BQUosS0FBZSxHQUFmLElBQXNCLElBQUksTUFBSixLQUFlLENBQXpDLEVBQTRDO0FBQzFDLHFCQUFPLFNBQVMsSUFBSSxZQUFiLENBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTyxTQUFTLElBQVQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixTQVJEO0FBU0EsWUFBSSxJQUFKLENBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixJQUF0QjtBQUNBLGVBQU8sSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFQO0FBQ0QsT0FaRCxNQVlPO0FBQ0wsWUFBSSxJQUFKLENBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixLQUF0QjtBQUNBLFlBQUksSUFBSixDQUFTLElBQVQ7QUFDQSxZQUFJLElBQUksTUFBSixLQUFlLEdBQWYsSUFBc0IsSUFBSSxNQUFKLEtBQWUsQ0FBekMsRUFBNEM7QUFDMUMsaUJBQU8sSUFBSSxZQUFYO0FBQ0Q7QUFDRCxlQUFPLElBQVA7QUFDRDtBQUNGLEtBckJELE1BcUJPO0FBQ0wsWUFBTSxPQUFOO0FBQ0EsV0FBSyxJQUFJLElBQUosQ0FBTDtBQUNBLFVBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixlQUFPLEdBQUcsUUFBSCxDQUFZLElBQVosRUFBa0IsVUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQjtBQUMzQyxjQUFJLEdBQUosRUFBUztBQUNQLG1CQUFPLFNBQVMsSUFBVCxDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU8sU0FBUyxPQUFPLElBQVAsQ0FBVCxDQUFQO0FBQ0Q7QUFDRixTQU5NLENBQVA7QUFPRCxPQVJELE1BUU87QUFDTCxlQUFPLEdBQUcsWUFBSCxDQUFnQixJQUFoQixDQUFQO0FBQ0EsWUFBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU8sT0FBTyxJQUFQLENBQVA7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRixHQTNERDs7QUE2REEsU0FBTyxLQUFQO0FBRUQsQ0FoU08sRUFBUjs7QUFrU0EsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ3hTQTtBQUNBLElBQUksTUFBSixFQUFZLE1BQVosRUFBb0IsS0FBcEIsRUFBMkIsSUFBM0I7O0FBRUEsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVBLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUEsT0FBUSxZQUFXO0FBQ2pCLFdBQVMsSUFBVCxHQUFnQixDQUFFOztBQUVsQixPQUFLLEtBQUwsR0FBYSxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ2xFLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxXQUFPLElBQUksTUFBSixHQUFhLEtBQWIsQ0FBbUIsS0FBbkIsRUFBMEIsc0JBQTFCLEVBQWtELGFBQWxELENBQVA7QUFDRCxHQVJEOztBQVVBLE9BQUssU0FBTCxHQUFpQixVQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLHNCQUF6QixFQUFpRCxhQUFqRCxFQUFnRTtBQUMvRSxRQUFJLEtBQUo7QUFDQSxRQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsaUJBQVcsSUFBWDtBQUNEO0FBQ0QsUUFBSSwwQkFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsK0JBQXlCLEtBQXpCO0FBQ0Q7QUFDRCxRQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixzQkFBZ0IsSUFBaEI7QUFDRDtBQUNELFFBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixhQUFPLE1BQU0saUJBQU4sQ0FBd0IsSUFBeEIsRUFBK0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BELGVBQU8sVUFBUyxLQUFULEVBQWdCO0FBQ3JCLGNBQUksTUFBSjtBQUNBLG1CQUFTLElBQVQ7QUFDQSxjQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQixxQkFBUyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQW1CLHNCQUFuQixFQUEyQyxhQUEzQyxDQUFUO0FBQ0Q7QUFDRCxtQkFBUyxNQUFUO0FBQ0QsU0FQRDtBQVFELE9BVG9DLENBU2xDLElBVGtDLENBQTlCLENBQVA7QUFVRCxLQVhELE1BV087QUFDTCxjQUFRLE1BQU0saUJBQU4sQ0FBd0IsSUFBeEIsQ0FBUjtBQUNBLFVBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGVBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixzQkFBbEIsRUFBMEMsYUFBMUMsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQTdCRDs7QUErQkEsT0FBSyxJQUFMLEdBQVksVUFBUyxLQUFULEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDLHNCQUFoQyxFQUF3RCxhQUF4RCxFQUF1RTtBQUNqRixRQUFJLElBQUo7QUFDQSxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLENBQVQ7QUFDRDtBQUNELFFBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGVBQVMsQ0FBVDtBQUNEO0FBQ0QsUUFBSSwwQkFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsK0JBQXlCLEtBQXpCO0FBQ0Q7QUFDRCxRQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixzQkFBZ0IsSUFBaEI7QUFDRDtBQUNELFdBQU8sSUFBSSxNQUFKLEVBQVA7QUFDQSxTQUFLLFdBQUwsR0FBbUIsTUFBbkI7QUFDQSxXQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsQ0FBekIsRUFBNEIsc0JBQTVCLEVBQW9ELGFBQXBELENBQVA7QUFDRCxHQWpCRDs7QUFtQkEsT0FBSyxTQUFMLEdBQWlCLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQyxzQkFBaEMsRUFBd0QsYUFBeEQsRUFBdUU7QUFDdEYsV0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLHNCQUFqQyxFQUF5RCxhQUF6RCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxPQUFLLElBQUwsR0FBWSxVQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLHNCQUF6QixFQUFpRCxhQUFqRCxFQUFnRTtBQUMxRSxXQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsUUFBckIsRUFBK0Isc0JBQS9CLEVBQXVELGFBQXZELENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sSUFBUDtBQUVELENBekVNLEVBQVA7O0FBMkVBLElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDcEQsU0FBTyxJQUFQLEdBQWMsSUFBZDtBQUNEOztBQUVELElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDcEQsWUFBSyxJQUFMLEdBQVksSUFBWjtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7Ozs7Ozs7QUM1RkEsU0FBUyxnQkFBVCxDQUEwQixHQUExQixFQUErQjtBQUM3QixNQUFJLFFBQVEsa0VBQVo7QUFDQSxNQUFJLE9BQU8sTUFBTSxNQUFqQjtBQUNBLE1BQUksTUFBTSxFQUFWO0FBQUEsTUFBYyxDQUFkO0FBQ0EsU0FBTyxHQUFQLEVBQVk7QUFDUixRQUFJLE1BQU0sSUFBVjtBQUNBLFdBQU8sQ0FBUDtBQUNBLFdBQU8sSUFBUDtBQUNBLFVBQU0sTUFBTSxNQUFOLENBQWEsQ0FBYixJQUFrQixHQUF4QjtBQUNIO0FBQ0QsU0FBTyxHQUFQO0FBQ0Q7O2tCQUVjLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmY7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsSUFBTSxrQkFBa0Isc0JBQXhCOztBQUVBLFNBQVMsY0FBVCxDQUF5QixLQUF6QixFQUFnQztBQUM5QixpQkFBZSxLQUFmLHVEQUFlLEtBQWY7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLFNBQUw7QUFDRSxhQUFPLEtBQVA7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJO0FBQ0Y7QUFDQSxlQUFPLFVBQVUsSUFBVixHQUFpQixFQUFqQixHQUFzQix5QkFBZSxLQUFmLENBQTdCO0FBQ0QsT0FIRCxDQUdFLE9BQU8sU0FBUCxFQUFrQjtBQUNsQixlQUFPLE9BQVA7QUFDRDtBQUNIO0FBQ0c7QUFDQTtBQUNELGFBQU8sRUFBUDtBQWZGO0FBaUJEOztBQUVEOzs7Ozs7O0FBT0EsU0FBUyxzQkFBVCxDQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE0RDtBQUFBLE1BQWYsU0FBZSx1RUFBSCxDQUFHOztBQUMxRCxNQUFJLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWpCLElBQTZCLFVBQVUsSUFBdkMsSUFBK0MsVUFBVSxTQUE3RCxFQUF3RTtBQUN0RSxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNLFVBQVUsS0FBSyxTQUFMLENBQWhCO0FBQ0EsTUFBTSxRQUFRLE1BQU0sT0FBTixDQUFkOztBQUVBLE1BQUksY0FBYyxLQUFLLE1BQUwsR0FBYyxDQUFoQyxFQUFtQztBQUNqQztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sdUJBQXVCLEtBQXZCLEVBQThCLElBQTlCLEVBQW9DLEVBQUUsU0FBdEMsQ0FBUDtBQUNEOztBQUVELFNBQVMsZUFBVCxDQUF5QixPQUF6QixFQUFrQyxJQUFsQyxFQUF3QztBQUN0QyxTQUFPLHVCQUF1QixJQUF2QixFQUE2QixRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFNBQVMsTUFBVCxDQUFpQixRQUFqQixFQUFrRTtBQUFBLE1BQXZDLElBQXVDLHVFQUFoQyxFQUFnQztBQUFBLE1BQTVCLFFBQTRCLHVFQUFqQixlQUFpQjs7QUFDaEU7QUFDQSxNQUFJLE9BQU8sUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxXQUFPLFFBQVA7QUFDRDs7QUFFRCxTQUFPLFNBQVMsT0FBVCxDQUFpQixlQUFqQixFQUFrQyxVQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEI7QUFDakUsUUFBSTtBQUNGO0FBQ0EsYUFBTyxlQUFlLFNBQVMsT0FBVCxFQUFrQixJQUFsQixDQUFmLENBQVA7QUFDRCxLQUhELENBR0UsT0FBTyxDQUFQLEVBQVU7QUFDVjtBQUNBLGFBQU8sZUFBZSxnQkFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsQ0FBZixDQUFQO0FBQ0Q7QUFDRixHQVJNLENBQVA7QUFTRDs7a0JBRWMsTTs7Ozs7Ozs7O0FDN0ZmOzs7O0FBQ0E7Ozs7OztBQUxBOzs7O0FBT0EsTUFBTSxZQUFOLENBQW1CO0FBQ2pCLE1BQUksY0FEYTtBQUVqQixRQUFNLHlDQUZXO0FBR2pCLGVBQWEsZ0RBSEk7QUFJakIsZ0JBQWMsRUFKRztBQUtqQixpQkFBZSxFQUxFO0FBTWpCLFNBQU8sUUFOVTtBQU9qQixZQUFVLElBUE87QUFRakIsV0FBUyxJQVJROztBQVVqQixjQUFZLE1BQU0sYUFBTixDQUFvQix5QkFBcEIsQ0FBOEMsVUFWekM7QUFXakIsY0FBWSxDQUFDLE1BQU0sYUFBTixDQUFvQixRQUFwQixDQUE2QixnQkFBOUIsQ0FYSzs7QUFhakIsd0JBQXNCLENBQ3BCLEVBQUUsSUFBSSxhQUFOLEVBQXFCLE1BQU0sY0FBM0IsRUFBMkMsU0FBUyxLQUFwRCxFQUEyRCxNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsTUFBMUYsRUFEb0I7QUFFcEI7QUFDQSxJQUFFLElBQUksZUFBTixFQUF1QixNQUFNLHNDQUE3QixFQUFxRSxTQUFTLElBQTlFLEVBQW9GLE1BQU0sTUFBTSxLQUFOLENBQVksWUFBWixDQUF5QixZQUFuSCxFQUhvQixFQUtwQixFQUFFLElBQUksa0JBQU4sRUFBMEIsTUFBTSw0QkFBaEMsRUFBOEQsU0FBUyxLQUF2RSxFQUE4RSxNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsWUFBN0csRUFMb0IsRUFNcEIsRUFBRSxJQUFJLFVBQU4sRUFBa0IsTUFBTSx1Q0FBeEIsRUFBaUUsU0FBUyxZQUExRSxFQUF3RixNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsV0FBdkgsRUFOb0IsRUFRcEIsRUFBRSxJQUFJLFNBQU4sRUFBaUIsTUFBTSx3QkFBdkIsRUFBaUQsU0FBUyxLQUExRCxFQUFpRSxNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsWUFBaEcsRUFSb0IsQ0FiTDs7QUF3QmpCLFdBeEJpQixxQkF3QlAsTUF4Qk8sRUF3QkMsT0F4QkQsRUF3QlUsTUF4QlYsRUF3QmtCO0FBQ2pDLFFBQUksVUFBVSxzQkFBWSxzQkFBYyxFQUFFLGdCQUFGLEVBQWQsRUFBMkIsT0FBTyxhQUFsQyxDQUFaLENBQWQ7O0FBRUEsV0FBTyxRQUFRLG9CQUFSLEVBQVA7QUFDRCxHQTVCZ0I7OztBQThCakIsVUFBUSxnQkFBVSxNQUFWLEVBQWtCLElBQWxCLEVBQXdCLEtBQXhCLEVBQStCLE9BQS9CLEVBQXdDOztBQUU5QyxRQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBSixFQUFxQjtBQUNuQixhQUFPLG9CQUFDLEtBQUQsQ0FBTyxLQUFQLENBQWEsT0FBYixPQUFQO0FBQ0Q7O0FBRUQsUUFBSSxVQUFVLHNCQUFZLHNCQUFjLEVBQUUsZ0JBQUYsRUFBZCxFQUEyQixPQUFPLGFBQWxDLENBQVosQ0FBZDs7QUFHQSxXQUNFO0FBQ0UsY0FBUSxNQURWO0FBRUUsWUFBTSxJQUZSO0FBR0UsZUFBUyxPQUhYO0FBSUUsZUFBUztBQUpYLE1BREY7QUFRRDtBQS9DZ0IsQ0FBbkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZiAoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCRyZXBsYWNlcikgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgVGFtZXIgb24gMDYvMTEvMjAxNy5cbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBBY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnMge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBY3Rpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFxuICAgKiBAbWVtYmVyb2YgQWN0aW9uc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iobykge1xuICAgIHRoaXMudG9vbGJveCA9IG8udG9vbGJveDtcbiAgICB0aGlzLmRlcGxveW1lbnRJZCA9IG8uZGVwbG95bWVudElkO1xuICAgIHRoaXMuYmx1ZXByaW50SWQgPSBvLmJsdWVwcmludElkO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBvdXRwdXQgZGF0YVxuICAgKiBcbiAgICogQHJldHVybnMgXG4gICAqIEBtZW1iZXJvZiBBY3Rpb25zXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBkb0dldERlcGxveW1lbnQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXG4gICAgICB7XG4gICAgICAgIGlkOiAnb3MnLFxuICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICBmbGV4OiAxMDAsXG4gICAgICAgIHBvc2l0aW9uOiA1MCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdPcGVyYXRpbmcgU3lzdGVtJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBTZWxlY3QgdGhlIE9TJyxcbiAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnV2luZG93cycsIHZhbHVlOiAnd2luZG93cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0xpbnV4JywgdmFsdWU6ICdsaW51eCcgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9idXR0b24nLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgZmxleDogMTAwLFxuICAgICAgICBwb3NpdGlvbjogMTAxLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IEJ1dHRvbicsXG4gICAgICAgICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgICAgICAgIGljb246ICdmYWNlYm9vaycsIC8vIGxpc3Qgb2YgaWNvbnMgaHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaWNvbiBsYWJlbCB3aWxsIG92ZXJ3cml0ZVxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLCAvLyByZWQsIG9yYW5nZSwgeWVsbG93LCBvbGl2ZSwgZ3JlZW4sIHRlYWwsIGJsdWUsIHZpb2xldCwgcHVycGxlLCBwaW5rLCBicm93biwgZ3JleSwgYmxhY2ssXG4gICAgICAgICAgYWN0aW9uOiAnY3JlYXRlRGVwbG95bWVudCdcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfaW5wdXQnLFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IElucHV0JyxcbiAgICAgICAgICBkZWZhdWx0OiAnSGVsbG8gSW5wdXQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIEVudGVyIFlvdXIgRGF0YScsXG4gICAgICAgICAgaXNQYXNzd29yZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9jaGVja2JveCcsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgQ2hlY2tib3gnLFxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV90b2dnbGUnLFxuICAgICAgICB0eXBlOiAndG9nZ2xlJyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBUb2dnbGUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9yYWRpbycsXG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgUmFkaW8nLFxuICAgICAgICAgIGRlZmF1bHQ6ICdvcDEnLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAxJywgdmFsdWU6ICdvcDEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMicsIHZhbHVlOiAnb3AyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDMnLCB2YWx1ZTogJ29wMycgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9kcm9wZG93bicsXG4gICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgRHJvcGRvd24nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnSGVsbG8gRHJvcGRvd24nLFxuICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6IFsnb3AxJ10sXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDEnLCB2YWx1ZTogJ29wMScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAyJywgdmFsdWU6ICdvcDInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMycsIHZhbHVlOiAnb3AzJyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X3JhbmdlJyxcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBSYW5nZScsXG4gICAgICAgICAgZGVmYXVsdDogMjAsXG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0hlbGxvIGkgYW0gYSBNZXNzYWdlJyxcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X3NlbGVjdGJveCcsXG4gICAgICAgIHR5cGU6ICdzZWxlY3Rib3gnLFxuICAgICAgICBmbGV4OiAxMDAsXG4gICAgICAgIHBvc2l0aW9uOiA5NyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBTZWxlY3RCb3gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnPGgxPnt7dGV4dH19PC9oMT48cD57e3ZhbHVlfX08L3A+JyxcbiAgICAgICAgICBzdHlsZTogMSwgLy8gMSBvciAyXG4gICAgICAgICAgZGVmYXVsdDogJzJiJyxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICd4LXNtYWxsJywgdmFsdWU6ICcxbScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ3NtYWxsJywgdmFsdWU6ICcyYicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ21lZGl1bScsIHZhbHVlOiAnM20nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdsYXJnZScsIHZhbHVlOiAnNWwnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdKTtcbiAgICAvLyByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb0dldChgL2RlcGxveW1lbnRzLyR7dGhpcy5kZXBsb3ltZW50SWR9YCk7XG4gIH1cblxuICBkb0dldElucHV0RGVzY3JpcHRvcihwYXRoID0gJ2lucHV0X2Rlc2NyaXB0b3IueWFtbCcpIHtcbiAgICBjb25zb2xlLmxvZyh7cGF0aH0pXG4gICAgcmV0dXJuIHRoaXMuZG9HZXRGaWxlc1RyZWUodGhpcy5ibHVlcHJpbnRJZCkudGhlbihmaWxlcyA9PiB7XG4gICAgICBsZXQgZmlsZSA9IGZpbGVzLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSBwYXRoKTtcbiAgICAgIGlmKGZpbGUpe1xuICAgICAgICByZXR1cm4gdGhpcy5kb0dldEZpbGVDb250ZW50KGZpbGUua2V5KTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYCR7cGF0aH0gbm90IGZvdW5kLmApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBkb0dldEJsdWVwcmludElkKGRlcGxveW1lbnRJZCkge1xuICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KGAvZGVwbG95bWVudHMvJHtkZXBsb3ltZW50SWR9P19pbmNsdWRlPWlkLGJsdWVwcmludF9pZGApO1xuICB9XG5cbiAgZG9HZXRGaWxlc1RyZWUoYmx1ZXByaW50SWQpIHtcbiAgICByZXR1cm4gdGhpcy50b29sYm94LmdldEludGVybmFsKCkuZG9HZXQoYC9zb3VyY2UvYnJvd3NlLyR7Ymx1ZXByaW50SWR9L2FyY2hpdmVgKTtcbiAgfVxuXG4gIGRvR2V0RmlsZUNvbnRlbnQocGF0aCkge1xuICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0SW50ZXJuYWwoKS5kb0dldCgnL3NvdXJjZS9icm93c2UvZmlsZScsIHsgcGF0aCB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFRhbWVyIG9uIDE5LzEwLzIwMTcuXG4gKi9cbmltcG9ydCBZQU1MIGZyb20gJy4vdXRpbHMvWUFNTCc7XG5pbXBvcnQgYmFzZTEwdG82NCBmcm9tICcuL3V0aWxzL2Jhc2UxMHRvNjQnO1xuaW1wb3J0IFNlbGVjdEJveCBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0Qm94JztcblxuLyoqXG4gKiBAY2xhc3MgTGlzdFxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExpc3QuXG4gICAqIEBwYXJhbSB7YW55fSBwcm9wcyBcbiAgICogQHBhcmFtIHthbnl9IGNvbnRleHQgXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnRvb2xib3guZ2V0TWFuYWdlcigpLmdldEN1cnJlbnRVc2VybmFtZSgpO1xuICAgIGNvbnN0IGJsdWVwcmludCA9IHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb24uYmx1ZXByaW50SWQ7XG4gICAgY29uc3QgdGltZTY0ID0gYmFzZTEwdG82NChNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSk7XG4gICAgLy8gY29uc3QgdGltZTY0ID0gYnRvYShNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSk7XG4gICAgLy8gY29uc3QgdGltZTY0ID0gYnRvYShNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMTAwMDApKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIHZpc3VhbF9kYXRhOiB7fSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgZGVwbG95bWVudFRpdGxlOiBgYWRtaW4gZGVwbG95bWVudCAke3VzZXJ9XyR7Ymx1ZXByaW50fV8ke3RpbWU2NH1gLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB5YW1sRXJyb3I6IG51bGwsXG4gICAgICBkZXZlbG9wbWVudDogbnVsbFxuICAgIH07XG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV2ZWxvcG1lbnQ6IGRhdGEgfSlcbiAgICB0aGlzLnJlbmRlckpTT04yWUFNTChkYXRhKTtcbiAgfVxuXG4gIHJlbmRlckpTT04yWUFNTCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB5YW1sRXJyb3I6IG51bGwgfSlcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGEgPSBZQU1MLnBhcnNlKHZhbHVlIHx8IHRoaXMuc3RhdGUuZGV2ZWxvcG1lbnQpO1xuICAgICAgdGhpcy5wcmVwYXJlRGF0YShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgeWFtbEVycm9yOiBlLm1lc3NhZ2UgfSlcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlRGF0YShkYXRhKSB7XG5cbiAgICAvLyBleHRyYWN0IGF2YWlsYWJsZSBpbnB1dHMgdG8gdGhlIGxvb3BcbiAgICBjb25zdCB2aXN1YWxfZGF0YSA9IGRhdGEuZmlsdGVyKGUgPT4gW1xuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdjaGVja2JveCcsXG4gICAgICAndG9nZ2xlJyxcbiAgICAgICdyYWRpbycsXG4gICAgICAnZHJvcGRvd24nLFxuICAgICAgJ3JhbmdlJyxcbiAgICAgICdtZXNzYWdlJyxcbiAgICAgICdzZWxlY3Rib3gnXG4gICAgXS5pbmNsdWRlcyhlLnR5cGUpKTtcblxuICAgIGNvbnNvbGUubG9nKHsgdmlzdWFsX2RhdGEgfSlcblxuICAgIC8vIHNvcnQgaXRlbXMgYnkgcG9zaXRpb25cbiAgICB2aXN1YWxfZGF0YS5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbik7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkYXRhXG4gICAgbGV0IGZvcm0gPSB7fTtcbiAgICB2aXN1YWxfZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICBmb3JtW2l0ZW0uaWRdID0gaXRlbS5wYXJhbXMuZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtLCB2aXN1YWxfZGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChpZCwgdmFsdWUpID0+IHtcbiAgICAvLyBUT0RPOiBiZWZvcmUgc3VibWl0IGNoZWNrIGZvciBhcnJheXMgdG8gam9pbiB0aGVtXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm06IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZS5mb3JtLCB7IFtpZF06IHZhbHVlIH0pIH0pO1xuICAgIGNvbnNvbGUubG9nKCdmb3JtIHN0YXRlJywgdGhpcy5zdGF0ZS5mb3JtKTtcbiAgfVxuXG4gIF9jcmVhdGVEZXBsb3ltZW50ID0gKCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZvcm0pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAvLyBUT0RPOiBhZGQgbW9yZSB2YWxpZGF0aW9ucyBtZXRob2RzLCBieSBkZWZhdWx0IG5vdyBpcyByZXF1aXJlZFxuICAgICAgaWYgKF8uaXNOaWwodGhpcy5zdGF0ZS5mb3JtW2l0ZW1dKSB8fCB0aGlzLnN0YXRlLmZvcm1baXRlbV0gPT09ICcnKSB7XG4gICAgICAgIGVycm9yc1tpdGVtXSA9ICdyZXF1aXJlZCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlcnJvcnMuZXJyb3IgPSAnUGxlYXNlIGNoZWNrIGVycm9ycyBnaXZlbiBiZWxvdyc7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgIC8vIGxldCBzZWxlY3RlZERlcGxveW1lbnQgPSB0b29sYm94LmdldENvbnRleHQoKS5nZXRWYWx1ZSgnZGVwbG95bWVudElkJyk7XG4gICAgICAvLyB2YXIgYmx1ZXByaW50SWQgPSB0b29sYm94LmdldENvbnRleHQoKS5nZXRWYWx1ZSgnYmx1ZXByaW50SWQnKTtcblxuICAgICAgY29uc3QgYmx1ZXByaW50ID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5ibHVlcHJpbnRJZDtcbiAgICAgIC8vIGNvbnN0IGRlcGxveW1lbnQgPSB0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLmRlcGxveW1lbnRJZDtcbiAgICAgIGNvbnN0IGRlcGxveW1lbnQgPSB0aGlzLnN0YXRlLmRlcGxveW1lbnRUaXRsZTsvL25ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgIGNvbnN0IHByaXZhdGVSZXNvdXJjZSA9IGZhbHNlO1xuICAgICAgY29uc3Qgc2tpcFBsdWdpbnNWYWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICBjb25zdCBpbnB1dHMgPSB7XG4gICAgICAgICdibHVlcHJpbnRfaWQnOiAnc2VydmljZScsXG4gICAgICAgICdkZXBsb3ltZW50X2lucHV0cyc6IHRoaXMuc3RhdGUuZm9ybSxcbiAgICAgICAgJ2RlcGxveW1lbnRfaWQnOiAncmVxdWVzdF90b19hZG1pbl8nICsgZGVwbG95bWVudFxuICAgICAgfVxuICAgICAgLy8gY29uc3QgaW5wdXRzID0gdGhpcy5zdGF0ZS5mb3JtO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIHZhciBhY3Rpb25zID0gbmV3IFN0YWdlLkNvbW1vbi5CbHVlcHJpbnRBY3Rpb25zKHRoaXMucHJvcHMudG9vbGJveCk7XG4gICAgICBhY3Rpb25zLmRvRGVwbG95KHsgaWQ6IGJsdWVwcmludCB9LCBkZXBsb3ltZW50LCBpbnB1dHMsIHByaXZhdGVSZXNvdXJjZSwgc2tpcFBsdWdpbnNWYWxpZGF0aW9uKVxuICAgICAgICAudGhlbigoZGVwbG95bWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3JzOiB7fSwgc3VjY2VzczogJ1lvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGF3YWl0aW5nIGFwcHJvdmFsJyB9KTtcbiAgICAgICAgICBjb25zdCBvbkZpbmlzaFJlZGlyZWN0ID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5vbkZpbmlzaFJlZGlyZWN0O1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi50ZW1wbGF0ZTtcbiAgICAgICAgICBpZihvbkZpbmlzaFJlZGlyZWN0KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5kcmlsbERvd24odGhpcy5wcm9wcy53aWRnZXQsIHRlbXBsYXRlLCB7IGRlcGxveW1lbnRJZDogZGVwbG95bWVudC5pZCB9LCBkZXBsb3ltZW50LmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcnM6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB8IFJlYWN0IFJlbmRlcmVyXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTdGFnZS5CYXNpYy5Mb2FkaW5nIC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHtCdXR0b24sIElucHV0LCBDaGVja2JveCwgRHJvcGRvd24sIE1lc3NhZ2UsIENhcmR9ID0gU3RhZ2UuQmFzaWM7XG5cbiAgICAvKipcbiAgICAgKiBjaGFydHMgdmlzdWFsIG91dHB1dFxuICAgICAqL1xuICAgIGNvbnN0IHZpc3VhbHMgPSB0aGlzLnN0YXRlLnZpc3VhbF9kYXRhLm1hcCgoaXRlbSwgaWR4KSA9PiA8ZGl2IGNsYXNzTmFtZT0nY2hhcnQtYm94JyBrZXk9e2lkeH0gc3R5bGU9e3sgZmxleEJhc2lzOiAoaXRlbS5mbGV4IHx8IDMzKSArICclJyB9fT5cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2J1dHRvbicgJiYgPEJ1dHRvblxuICAgICAgICBmbHVpZD17IWl0ZW0ucGFyYW1zLmNpcmN1bGFyfVxuICAgICAgICBjb2xvcj17aXRlbS5wYXJhbXMuY29sb3J9XG4gICAgICAgIGNpcmN1bGFyPXtpdGVtLnBhcmFtcy5jaXJjdWxhcn1cbiAgICAgICAgaWNvbj17aXRlbS5wYXJhbXMubGFiZWwgPyBmYWxzZSA6IGl0ZW0ucGFyYW1zLmljb259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpdGVtLnBhcmFtcy5hY3Rpb24gPT09ICdjcmVhdGVEZXBsb3ltZW50JyAmJiB0aGlzLl9jcmVhdGVEZXBsb3ltZW50LmNhbGwodGhpcyk7XG4gICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgIHtpdGVtLnBhcmFtcy5sYWJlbH1cbiAgICAgIDwvQnV0dG9uPn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2lucHV0JyAmJiA8SW5wdXRcbiAgICAgICAgZmx1aWRcbiAgICAgICAgdHlwZT17aXRlbS5wYXJhbXMuaXNQYXNzd29yZCA/ICdwYXNzd29yZCcgOiAndGV4dCd9XG4gICAgICAgIGxhYmVsPXtpdGVtLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGFyYW1zLnBsYWNlaG9sZGVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdfVxuICAgICAgICBvbkNoYW5nZT17KHByb3h5LCBvcHRpb25zKSA9PiB0aGlzLmhhbmRsZUNoYW5nZS5jYWxsKHRoaXMsIGl0ZW0uaWQsIG9wdGlvbnMudmFsdWUpfVxuICAgICAgICAvPn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiA8Q2hlY2tib3hcbiAgICAgICAgbGFiZWw9e2l0ZW0ucGFyYW1zLmxhYmVsfVxuICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy5jaGVja2VkKX1cbiAgICAgICAgLz59XG5cbiAgICAgIHtpdGVtLnR5cGUgPT09ICd0b2dnbGUnICYmIDxDaGVja2JveFxuICAgICAgICB0b2dnbGVcbiAgICAgICAgbGFiZWw9e2l0ZW0ucGFyYW1zLmxhYmVsfVxuICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy5jaGVja2VkKX1cbiAgICAgICAgLz59XG5cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdyYWRpbycgJiYgPGRpdj5cbiAgICAgICAgPGI+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvYj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7aXRlbS5wYXJhbXMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIHJhZGlvXG4gICAgICAgICAgICBuYW1lPXtpdGVtLmlkfVxuICAgICAgICAgICAgbGFiZWw9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBvcHRpb25zLnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj59XG5cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdkcm9wZG93bicgJiYgPGRpdj5cbiAgICAgICAgPGI+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvYj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBmbHVpZFxuICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgIG11bHRpcGxlPXtpdGVtLnBhcmFtcy5tdWx0aXBsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wYXJhbXMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb3B0aW9ucz17aXRlbS5wYXJhbXMub3B0aW9uc31cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdfVxuICAgICAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2Pn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ3JhbmdlJyAmJiA8ZGl2PlxuICAgICAgICA8Yj57aXRlbS5wYXJhbXMubGFiZWx9PC9iPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgc3RlcD17aXRlbS5wYXJhbXMuc3RlcCB8fCAxfVxuICAgICAgICAgIG1pbj17aXRlbS5wYXJhbXMubWluIHx8IDB9XG4gICAgICAgICAgbWF4PXtpdGVtLnBhcmFtcy5tYXggfHwgMTAwfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3h5ID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgcHJveHkudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2Pn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ21lc3NhZ2UnICYmIDxNZXNzYWdlXG4gICAgICAgIGNvbG9yPXtpdGVtLnBhcmFtcy5jb2xvcn1cbiAgICAgICAgPntpdGVtLnBhcmFtcy5sYWJlbH08L01lc3NhZ2U+fVxuXG4gICAgICB7aXRlbS50eXBlID09PSAnc2VsZWN0Ym94JyAmJiA8ZGl2PlxuICAgICAgICA8Yj57aXRlbS5wYXJhbXMubGFiZWx9PC9iPlxuICAgICAgICA8YnIgLz48U2VsZWN0Qm94XG4gICAgICAgICAgc3R5bGU9e2l0ZW0ucGFyYW1zLnN0eWxlfVxuICAgICAgICAgIHRlbXBsYXRlPXtpdGVtLnBhcmFtcy50ZW1wbGF0ZX1cbiAgICAgICAgICBvcHRpb25zPXtpdGVtLnBhcmFtcy5vcHRpb25zfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgdmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj59XG5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcnNbaXRlbS5pZF0gJiZcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcnNbaXRlbS5pZF0uc3BsaXQoJywnKS5pbmNsdWRlcygncmVxdWlyZWQnKSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyJz5QbGVhc2UgRmlsbCB7aXRlbS5wYXJhbXMubGFiZWwgfHwgJ0ZpZWxkJ317JyAnfWl0cyBSZXF1aXJlZDwvZGl2PlxuICAgICAgfVxuXG4gICAgPC9kaXY+KTtcblxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuZXJyb3JzLmVycm9yICYmICg8TWVzc2FnZSBjb2xvcj1cInJlZFwiIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yczogT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmVycm9ycywgeyBlcnJvcjogbnVsbCB9KSB9KX0gPlxuICAgICAge3RoaXMuc3RhdGUuZXJyb3JzLmVycm9yfVxuICAgIDwvTWVzc2FnZT4pO1xuXG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgPE1lc3NhZ2UgY29sb3I9XCJncmVlblwiIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3M6IG51bGwgfSl9ID5cbiAgICAgIHt0aGlzLnN0YXRlLnN1Y2Nlc3N9XG4gICAgPC9NZXNzYWdlPjtcbiAgICBjb25zdCB5YW1sRXJyb3IgPSB0aGlzLnN0YXRlLnlhbWxFcnJvciAmJiA8TWVzc2FnZSBjb2xvcj1cInllbGxvd1wiIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHlhbWxFcnJvcjogbnVsbCB9KX0gPlxuICAgICAge3RoaXMuc3RhdGUueWFtbEVycm9yfVxuICAgIDwvTWVzc2FnZT47XG5cbiAgICBjb25zdCBhbGxvd05hbWVFZGl0ID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5hbGxvd05hbWVFZGl0O1xuICAgIGNvbnN0IGRldk1vZGUgPSB0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLmRldk1vZGU7XG5cbiAgICBjb25zb2xlLmxvZ1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgIHtzdWNjZXNzTWVzc2FnZX1cblxuICAgICAge2Rldk1vZGUgJiZcbiAgICAgICAgPENhcmQgZmx1aWQ+XG4gICAgICAgICAgPENhcmQuQ29udGVudCBoZWFkZXI9J0RldmVsb3BtZW50IE1vZGUgKHlvdSBjYW4gZGVhY3RpdmF0ZSBpdCBmcm9tIHdpZGdldCBzZXR0aW5ncyknIC8+XG4gICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgIHt5YW1sRXJyb3J9XG4gICAgICAgICAgICA8dGV4dEFyZWFcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZQU1MIERldmVsb3BtZW50IE1vZGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXZlbG9wbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldmVsb3BtZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzIwMHB4JywgZm9udEZhbWlseTogJ21vbm9zcGFjZSxtb25vc3BhY2UnLCBmb250U2l6ZTogJzFlbScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsdWVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbmRlckpTT04yWUFNTC5jYWxsKHRoaXMpfT5SZW5kZXI8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPC9DYXJkPn1cblxuICAgICAgeyF0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgYWxsb3dOYW1lRWRpdCAmJiA8SW5wdXRcbiAgICAgICAgZmx1aWRcbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBsYWJlbD1cIkRlcGxveW1lbnQgVGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBFbnRlciBZb3VyIERlcGxveW1lbnQgVGl0bGUsIHNob3VsZCBiZSB1bmlxdWUgbmFtZVwiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlcGxveW1lbnRUaXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlcGxveW1lbnRUaXRsZTogb3B0aW9ucy52YWx1ZSB9KX1cbiAgICAgICAgLz59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXBsb3ltZW50LXZpc3VhbC1jcmVhdGlvbic+XG4gICAgICAgIHshdGhpcy5zdGF0ZS5zdWNjZXNzICYmIHZpc3VhbHN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBUYW1lciBvbiAxOS8xMC8yMDE3LlxuICovXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4uL3V0aWxzL211c3RhY2hlJztcblxuXG4vKipcbiAqIEBjbGFzcyBMaXN0XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMaXN0LlxuICAgKiBAcGFyYW0ge2FueX0gcHJvcHMgXG4gICAqIEBwYXJhbSB7YW55fSBjb250ZXh0IFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1EYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICAvKlxuICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgfCBSZWFjdCBSZW5kZXJlclxuICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7b3B0aW9ucywgdGVtcGxhdGUsIG9uQ2hhbmdlLCB2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3NlbGVjdGJveC1zdHlsZScrKHN0eWxlIHx8IDEpfT5cbiAgICAgIHtvcHRpb25zLm1hcCgoaXRlbSwgaWR4KSA9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtbJ2l0ZW0nLCAoaXRlbS52YWx1ZSA9PT0gdmFsdWUgJiYgJ2FjdGl2ZScpXS5qb2luKCcgJyl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaXRlbS52YWx1ZSAhPT0gdmFsdWUgJiYgb25DaGFuZ2UoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBSZW5kZXIodGVtcGxhdGUsIGl0ZW0pIH19XG4gICAgICAgICAgLz4pfVxuICAgIDwvZGl2PjtcbiAgfVxufVxuIiwiXG52YXIgWWFtbCA9IHJlcXVpcmUoJy4vbGliL1lhbWwnKTtcbm1vZHVsZS5leHBvcnRzID0gWWFtbDtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgRHVtcGVyLCBJbmxpbmUsIFV0aWxzO1xuXG5VdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcblxuSW5saW5lID0gcmVxdWlyZSgnLi9JbmxpbmUnKTtcblxuRHVtcGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEdW1wZXIoKSB7fVxuXG4gIER1bXBlci5pbmRlbnRhdGlvbiA9IDQ7XG5cbiAgRHVtcGVyLnByb3RvdHlwZS5kdW1wID0gZnVuY3Rpb24oaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSB7XG4gICAgdmFyIGksIGtleSwgbGVuLCBvdXRwdXQsIHByZWZpeCwgdmFsdWUsIHdpbGxCZUlubGluZWQ7XG4gICAgaWYgKGlubGluZSA9PSBudWxsKSB7XG4gICAgICBpbmxpbmUgPSAwO1xuICAgIH1cbiAgICBpZiAoaW5kZW50ID09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IDA7XG4gICAgfVxuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdEVuY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RW5jb2RlciA9IG51bGw7XG4gICAgfVxuICAgIG91dHB1dCA9ICcnO1xuICAgIHByZWZpeCA9IChpbmRlbnQgPyBVdGlscy5zdHJSZXBlYXQoJyAnLCBpbmRlbnQpIDogJycpO1xuICAgIGlmIChpbmxpbmUgPD0gMCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnIHx8IGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fCBVdGlscy5pc0VtcHR5KGlucHV0KSkge1xuICAgICAgb3V0cHV0ICs9IHByZWZpeCArIElubGluZS5kdW1wKGlucHV0LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YWx1ZSA9IGlucHV0W2ldO1xuICAgICAgICAgIHdpbGxCZUlubGluZWQgPSBpbmxpbmUgLSAxIDw9IDAgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCBVdGlscy5pc0VtcHR5KHZhbHVlKTtcbiAgICAgICAgICBvdXRwdXQgKz0gcHJlZml4ICsgJy0nICsgKHdpbGxCZUlubGluZWQgPyAnICcgOiBcIlxcblwiKSArIHRoaXMuZHVtcCh2YWx1ZSwgaW5saW5lIC0gMSwgKHdpbGxCZUlubGluZWQgPyAwIDogaW5kZW50ICsgdGhpcy5pbmRlbnRhdGlvbiksIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpICsgKHdpbGxCZUlubGluZWQgPyBcIlxcblwiIDogJycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGtleSBpbiBpbnB1dCkge1xuICAgICAgICAgIHZhbHVlID0gaW5wdXRba2V5XTtcbiAgICAgICAgICB3aWxsQmVJbmxpbmVkID0gaW5saW5lIC0gMSA8PSAwIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgVXRpbHMuaXNFbXB0eSh2YWx1ZSk7XG4gICAgICAgICAgb3V0cHV0ICs9IHByZWZpeCArIElubGluZS5kdW1wKGtleSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2RlcikgKyAnOicgKyAod2lsbEJlSW5saW5lZCA/ICcgJyA6IFwiXFxuXCIpICsgdGhpcy5kdW1wKHZhbHVlLCBpbmxpbmUgLSAxLCAod2lsbEJlSW5saW5lZCA/IDAgOiBpbmRlbnQgKyB0aGlzLmluZGVudGF0aW9uKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2RlcikgKyAod2lsbEJlSW5saW5lZCA/IFwiXFxuXCIgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gRHVtcGVyO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1bXBlcjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgRXNjYXBlciwgUGF0dGVybjtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5Fc2NhcGVyID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY2g7XG5cbiAgZnVuY3Rpb24gRXNjYXBlcigpIHt9XG5cbiAgRXNjYXBlci5MSVNUX0VTQ0FQRUVTID0gWydcXFxcJywgJ1xcXFxcXFxcJywgJ1xcXFxcIicsICdcIicsIFwiXFx4MDBcIiwgXCJcXHgwMVwiLCBcIlxceDAyXCIsIFwiXFx4MDNcIiwgXCJcXHgwNFwiLCBcIlxceDA1XCIsIFwiXFx4MDZcIiwgXCJcXHgwN1wiLCBcIlxceDA4XCIsIFwiXFx4MDlcIiwgXCJcXHgwYVwiLCBcIlxceDBiXCIsIFwiXFx4MGNcIiwgXCJcXHgwZFwiLCBcIlxceDBlXCIsIFwiXFx4MGZcIiwgXCJcXHgxMFwiLCBcIlxceDExXCIsIFwiXFx4MTJcIiwgXCJcXHgxM1wiLCBcIlxceDE0XCIsIFwiXFx4MTVcIiwgXCJcXHgxNlwiLCBcIlxceDE3XCIsIFwiXFx4MThcIiwgXCJcXHgxOVwiLCBcIlxceDFhXCIsIFwiXFx4MWJcIiwgXCJcXHgxY1wiLCBcIlxceDFkXCIsIFwiXFx4MWVcIiwgXCJcXHgxZlwiLCAoY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKSgweDAwODUpLCBjaCgweDAwQTApLCBjaCgweDIwMjgpLCBjaCgweDIwMjkpXTtcblxuICBFc2NhcGVyLkxJU1RfRVNDQVBFRCA9IFsnXFxcXFxcXFwnLCAnXFxcXFwiJywgJ1xcXFxcIicsICdcXFxcXCInLCBcIlxcXFwwXCIsIFwiXFxcXHgwMVwiLCBcIlxcXFx4MDJcIiwgXCJcXFxceDAzXCIsIFwiXFxcXHgwNFwiLCBcIlxcXFx4MDVcIiwgXCJcXFxceDA2XCIsIFwiXFxcXGFcIiwgXCJcXFxcYlwiLCBcIlxcXFx0XCIsIFwiXFxcXG5cIiwgXCJcXFxcdlwiLCBcIlxcXFxmXCIsIFwiXFxcXHJcIiwgXCJcXFxceDBlXCIsIFwiXFxcXHgwZlwiLCBcIlxcXFx4MTBcIiwgXCJcXFxceDExXCIsIFwiXFxcXHgxMlwiLCBcIlxcXFx4MTNcIiwgXCJcXFxceDE0XCIsIFwiXFxcXHgxNVwiLCBcIlxcXFx4MTZcIiwgXCJcXFxceDE3XCIsIFwiXFxcXHgxOFwiLCBcIlxcXFx4MTlcIiwgXCJcXFxceDFhXCIsIFwiXFxcXGVcIiwgXCJcXFxceDFjXCIsIFwiXFxcXHgxZFwiLCBcIlxcXFx4MWVcIiwgXCJcXFxceDFmXCIsIFwiXFxcXE5cIiwgXCJcXFxcX1wiLCBcIlxcXFxMXCIsIFwiXFxcXFBcIl07XG5cbiAgRXNjYXBlci5NQVBQSU5HX0VTQ0FQRUVTX1RPX0VTQ0FQRUQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGosIG1hcHBpbmcsIHJlZjtcbiAgICBtYXBwaW5nID0ge307XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IEVzY2FwZXIuTElTVF9FU0NBUEVFUy5sZW5ndGg7IDAgPD0gcmVmID8gaiA8IHJlZiA6IGogPiByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgbWFwcGluZ1tFc2NhcGVyLkxJU1RfRVNDQVBFRVNbaV1dID0gRXNjYXBlci5MSVNUX0VTQ0FQRURbaV07XG4gICAgfVxuICAgIHJldHVybiBtYXBwaW5nO1xuICB9KSgpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9DSEFSQUNURVJTX1RPX0VTQ0FQRSA9IG5ldyBQYXR0ZXJuKCdbXFxcXHgwMC1cXFxceDFmXXxcXHhjMlxceDg1fFxceGMyXFx4YTB8XFx4ZTJcXHg4MFxceGE4fFxceGUyXFx4ODBcXHhhOScpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9NQVBQSU5HX0VTQ0FQRUVTID0gbmV3IFBhdHRlcm4oRXNjYXBlci5MSVNUX0VTQ0FQRUVTLmpvaW4oJ3wnKS5zcGxpdCgnXFxcXCcpLmpvaW4oJ1xcXFxcXFxcJykpO1xuXG4gIEVzY2FwZXIuUEFUVEVSTl9TSU5HTEVfUVVPVElORyA9IG5ldyBQYXR0ZXJuKCdbXFxcXHNcXCdcIjp7fVtcXFxcXSwmKiM/XXxeWy0/fDw+PSElQGBdJyk7XG5cbiAgRXNjYXBlci5yZXF1aXJlc0RvdWJsZVF1b3RpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLlBBVFRFUk5fQ0hBUkFDVEVSU19UT19FU0NBUEUudGVzdCh2YWx1ZSk7XG4gIH07XG5cbiAgRXNjYXBlci5lc2NhcGVXaXRoRG91YmxlUXVvdGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHJlc3VsdCA9IHRoaXMuUEFUVEVSTl9NQVBQSU5HX0VTQ0FQRUVTLnJlcGxhY2UodmFsdWUsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gX3RoaXMuTUFQUElOR19FU0NBUEVFU19UT19FU0NBUEVEW3N0cl07XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJ1wiJyArIHJlc3VsdCArICdcIic7XG4gIH07XG5cbiAgRXNjYXBlci5yZXF1aXJlc1NpbmdsZVF1b3RpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLlBBVFRFUk5fU0lOR0xFX1FVT1RJTkcudGVzdCh2YWx1ZSk7XG4gIH07XG5cbiAgRXNjYXBlci5lc2NhcGVXaXRoU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIikgKyBcIidcIjtcbiAgfTtcblxuICByZXR1cm4gRXNjYXBlcjtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFc2NhcGVyO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wRXhjZXB0aW9uLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuRHVtcEV4Y2VwdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEdW1wRXhjZXB0aW9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEdW1wRXhjZXB0aW9uKG1lc3NhZ2UsIHBhcnNlZExpbmUsIHNuaXBwZXQpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucGFyc2VkTGluZSA9IHBhcnNlZExpbmU7XG4gICAgdGhpcy5zbmlwcGV0ID0gc25pcHBldDtcbiAgfVxuXG4gIER1bXBFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8RHVtcEV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZSArICcgKGxpbmUgJyArIHRoaXMucGFyc2VkTGluZSArICc6IFxcJycgKyB0aGlzLnNuaXBwZXQgKyAnXFwnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPER1bXBFeGNlcHRpb24+ICcgKyB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEdW1wRXhjZXB0aW9uO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gRHVtcEV4Y2VwdGlvbjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgUGFyc2VFeGNlcHRpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5QYXJzZUV4Y2VwdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChQYXJzZUV4Y2VwdGlvbiwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gUGFyc2VFeGNlcHRpb24obWVzc2FnZSwgcGFyc2VkTGluZSwgc25pcHBldCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5wYXJzZWRMaW5lID0gcGFyc2VkTGluZTtcbiAgICB0aGlzLnNuaXBwZXQgPSBzbmlwcGV0O1xuICB9XG5cbiAgUGFyc2VFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8UGFyc2VFeGNlcHRpb24+ICcgKyB0aGlzLm1lc3NhZ2UgKyAnIChsaW5lICcgKyB0aGlzLnBhcnNlZExpbmUgKyAnOiBcXCcnICsgdGhpcy5zbmlwcGV0ICsgJ1xcJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzxQYXJzZUV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlRXhjZXB0aW9uO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VFeGNlcHRpb247XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhcnNlTW9yZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cblBhcnNlTW9yZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChQYXJzZU1vcmUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFBhcnNlTW9yZShtZXNzYWdlLCBwYXJzZWRMaW5lLCBzbmlwcGV0KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnBhcnNlZExpbmUgPSBwYXJzZWRMaW5lO1xuICAgIHRoaXMuc25pcHBldCA9IHNuaXBwZXQ7XG4gIH1cblxuICBQYXJzZU1vcmUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnBhcnNlZExpbmUgIT0gbnVsbCkgJiYgKHRoaXMuc25pcHBldCAhPSBudWxsKSkge1xuICAgICAgcmV0dXJuICc8UGFyc2VNb3JlPiAnICsgdGhpcy5tZXNzYWdlICsgJyAobGluZSAnICsgdGhpcy5wYXJzZWRMaW5lICsgJzogXFwnJyArIHRoaXMuc25pcHBldCArICdcXCcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICc8UGFyc2VNb3JlPiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGFyc2VNb3JlO1xuXG59KShFcnJvcik7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VNb3JlO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wRXhjZXB0aW9uLCBFc2NhcGVyLCBJbmxpbmUsIFBhcnNlRXhjZXB0aW9uLCBQYXJzZU1vcmUsIFBhdHRlcm4sIFVuZXNjYXBlciwgVXRpbHMsXG4gIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5VbmVzY2FwZXIgPSByZXF1aXJlKCcuL1VuZXNjYXBlcicpO1xuXG5Fc2NhcGVyID0gcmVxdWlyZSgnLi9Fc2NhcGVyJyk7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5QYXJzZUV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlRXhjZXB0aW9uJyk7XG5cblBhcnNlTW9yZSA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlTW9yZScpO1xuXG5EdW1wRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vRHVtcEV4Y2VwdGlvbicpO1xuXG5JbmxpbmUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIElubGluZSgpIHt9XG5cbiAgSW5saW5lLlJFR0VYX1FVT1RFRF9TVFJJTkcgPSAnKD86XCIoPzpbXlwiXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteXCJcXFxcXFxcXF0qKSopXCJ8XFwnKD86W15cXCddKig/OlxcJ1xcJ1teXFwnXSopKilcXCcpJztcblxuICBJbmxpbmUuUEFUVEVSTl9UUkFJTElOR19DT01NRU5UUyA9IG5ldyBQYXR0ZXJuKCdeXFxcXHMqIy4qJCcpO1xuXG4gIElubGluZS5QQVRURVJOX1FVT1RFRF9TQ0FMQVIgPSBuZXcgUGF0dGVybignXicgKyBJbmxpbmUuUkVHRVhfUVVPVEVEX1NUUklORyk7XG5cbiAgSW5saW5lLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIgPSBuZXcgUGF0dGVybignXigtfFxcXFwrKT9bMC05LF0rKFxcXFwuWzAtOV0rKT8kJyk7XG5cbiAgSW5saW5lLlBBVFRFUk5fU0NBTEFSX0JZX0RFTElNSVRFUlMgPSB7fTtcblxuICBJbmxpbmUuc2V0dGluZ3MgPSB7fTtcblxuICBJbmxpbmUuY29uZmlndXJlID0gZnVuY3Rpb24oZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAob2JqZWN0RGVjb2RlciA9PSBudWxsKSB7XG4gICAgICBvYmplY3REZWNvZGVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncy5leGNlcHRpb25PbkludmFsaWRUeXBlID0gZXhjZXB0aW9uT25JbnZhbGlkVHlwZTtcbiAgICB0aGlzLnNldHRpbmdzLm9iamVjdERlY29kZXIgPSBvYmplY3REZWNvZGVyO1xuICB9O1xuXG4gIElubGluZS5wYXJzZSA9IGZ1bmN0aW9uKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgdmFyIGNvbnRleHQsIHJlc3VsdDtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3REZWNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdERlY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBleGNlcHRpb25PbkludmFsaWRUeXBlO1xuICAgIHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlciA9IG9iamVjdERlY29kZXI7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFsdWUgPSBVdGlscy50cmltKHZhbHVlKTtcbiAgICBpZiAoMCA9PT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnRleHQgPSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlOiBleGNlcHRpb25PbkludmFsaWRUeXBlLFxuICAgICAgb2JqZWN0RGVjb2Rlcjogb2JqZWN0RGVjb2RlcixcbiAgICAgIGk6IDBcbiAgICB9O1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDApKSB7XG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVNlcXVlbmNlKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgKytjb250ZXh0Lmk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneyc6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VNYXBwaW5nKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgKytjb250ZXh0Lmk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVNjYWxhcih2YWx1ZSwgbnVsbCwgWydcIicsIFwiJ1wiXSwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLlBBVFRFUk5fVFJBSUxJTkdfQ09NTUVOVFMucmVwbGFjZSh2YWx1ZS5zbGljZShjb250ZXh0LmkpLCAnJykgIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1VuZXhwZWN0ZWQgY2hhcmFjdGVycyBuZWFyIFwiJyArIHZhbHVlLnNsaWNlKGNvbnRleHQuaSkgKyAnXCIuJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgSW5saW5lLmR1bXAgPSBmdW5jdGlvbih2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHZhciByZWYsIHJlc3VsdCwgdHlwZTtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RFbmNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdEVuY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKG9iamVjdEVuY29kZXIgIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQgPSBvYmplY3RFbmNvZGVyKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IChyZXN1bHQgIT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kdW1wT2JqZWN0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuICh2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNEaWdpdHModmFsdWUpKSB7XG4gICAgICByZXR1cm4gKHR5cGUgPT09ICdzdHJpbmcnID8gXCInXCIgKyB2YWx1ZSArIFwiJ1wiIDogU3RyaW5nKHBhcnNlSW50KHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNOdW1lcmljKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICh0eXBlID09PSAnc3RyaW5nJyA/IFwiJ1wiICsgdmFsdWUgKyBcIidcIiA6IFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAodmFsdWUgPT09IDJlMzA4ID8gJy5JbmYnIDogKHZhbHVlID09PSAtMmUzMDggPyAnLS5JbmYnIDogKGlzTmFOKHZhbHVlKSA/ICcuTmFOJyA6IHZhbHVlKSkpO1xuICAgIH1cbiAgICBpZiAoRXNjYXBlci5yZXF1aXJlc0RvdWJsZVF1b3RpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gRXNjYXBlci5lc2NhcGVXaXRoRG91YmxlUXVvdGVzKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKEVzY2FwZXIucmVxdWlyZXNTaW5nbGVRdW90aW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIEVzY2FwZXIuZXNjYXBlV2l0aFNpbmdsZVF1b3Rlcyh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICgnJyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiAnXCJcIic7XG4gICAgfVxuICAgIGlmIChVdGlscy5QQVRURVJOX0RBVEUudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfVxuICAgIGlmICgocmVmID0gdmFsdWUudG9Mb3dlckNhc2UoKSkgPT09ICdudWxsJyB8fCByZWYgPT09ICd+JyB8fCByZWYgPT09ICd0cnVlJyB8fCByZWYgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBJbmxpbmUuZHVtcE9iamVjdCA9IGZ1bmN0aW9uKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RTdXBwb3J0KSB7XG4gICAgdmFyIGosIGtleSwgbGVuMSwgb3V0cHV0LCB2YWw7XG4gICAgaWYgKG9iamVjdFN1cHBvcnQgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0U3VwcG9ydCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBvdXRwdXQgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSB2YWx1ZS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgdmFsID0gdmFsdWVbal07XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZHVtcCh2YWwpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnWycgKyBvdXRwdXQuam9pbignLCAnKSArICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gW107XG4gICAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YWwgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmR1bXAoa2V5KSArICc6ICcgKyB0aGlzLmR1bXAodmFsKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3snICsgb3V0cHV0LmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuICB9O1xuXG4gIElubGluZS5wYXJzZVNjYWxhciA9IGZ1bmN0aW9uKHNjYWxhciwgZGVsaW1pdGVycywgc3RyaW5nRGVsaW1pdGVycywgY29udGV4dCwgZXZhbHVhdGUpIHtcbiAgICB2YXIgaSwgam9pbmVkRGVsaW1pdGVycywgbWF0Y2gsIG91dHB1dCwgcGF0dGVybiwgcmVmLCByZWYxLCBzdHJwb3MsIHRtcDtcbiAgICBpZiAoZGVsaW1pdGVycyA9PSBudWxsKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHN0cmluZ0RlbGltaXRlcnMgPT0gbnVsbCkge1xuICAgICAgc3RyaW5nRGVsaW1pdGVycyA9IFsnXCInLCBcIidcIl07XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZXZhbHVhdGUgPT0gbnVsbCkge1xuICAgICAgZXZhbHVhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlOiB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsXG4gICAgICAgIG9iamVjdERlY29kZXI6IHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlcixcbiAgICAgICAgaTogMFxuICAgICAgfTtcbiAgICB9XG4gICAgaSA9IGNvbnRleHQuaTtcbiAgICBpZiAocmVmID0gc2NhbGFyLmNoYXJBdChpKSwgaW5kZXhPZi5jYWxsKHN0cmluZ0RlbGltaXRlcnMsIHJlZikgPj0gMCkge1xuICAgICAgb3V0cHV0ID0gdGhpcy5wYXJzZVF1b3RlZFNjYWxhcihzY2FsYXIsIGNvbnRleHQpO1xuICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgIGlmIChkZWxpbWl0ZXJzICE9IG51bGwpIHtcbiAgICAgICAgdG1wID0gVXRpbHMubHRyaW0oc2NhbGFyLnNsaWNlKGkpLCAnICcpO1xuICAgICAgICBpZiAoIShyZWYxID0gdG1wLmNoYXJBdCgwKSwgaW5kZXhPZi5jYWxsKGRlbGltaXRlcnMsIHJlZjEpID49IDApKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdVbmV4cGVjdGVkIGNoYXJhY3RlcnMgKCcgKyBzY2FsYXIuc2xpY2UoaSkgKyAnKS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRlbGltaXRlcnMpIHtcbiAgICAgICAgb3V0cHV0ID0gc2NhbGFyLnNsaWNlKGkpO1xuICAgICAgICBpICs9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIHN0cnBvcyA9IG91dHB1dC5pbmRleE9mKCcgIycpO1xuICAgICAgICBpZiAoc3RycG9zICE9PSAtMSkge1xuICAgICAgICAgIG91dHB1dCA9IFV0aWxzLnJ0cmltKG91dHB1dC5zbGljZSgwLCBzdHJwb3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgam9pbmVkRGVsaW1pdGVycyA9IGRlbGltaXRlcnMuam9pbignfCcpO1xuICAgICAgICBwYXR0ZXJuID0gdGhpcy5QQVRURVJOX1NDQUxBUl9CWV9ERUxJTUlURVJTW2pvaW5lZERlbGltaXRlcnNdO1xuICAgICAgICBpZiAocGF0dGVybiA9PSBudWxsKSB7XG4gICAgICAgICAgcGF0dGVybiA9IG5ldyBQYXR0ZXJuKCdeKC4rPykoJyArIGpvaW5lZERlbGltaXRlcnMgKyAnKScpO1xuICAgICAgICAgIHRoaXMuUEFUVEVSTl9TQ0FMQVJfQllfREVMSU1JVEVSU1tqb2luZWREZWxpbWl0ZXJzXSA9IHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoID0gcGF0dGVybi5leGVjKHNjYWxhci5zbGljZShpKSkpIHtcbiAgICAgICAgICBvdXRwdXQgPSBtYXRjaFsxXTtcbiAgICAgICAgICBpICs9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdNYWxmb3JtZWQgaW5saW5lIFlBTUwgc3RyaW5nICgnICsgc2NhbGFyICsgJykuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBvdXRwdXQgPSB0aGlzLmV2YWx1YXRlU2NhbGFyKG91dHB1dCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuaSA9IGk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICBJbmxpbmUucGFyc2VRdW90ZWRTY2FsYXIgPSBmdW5jdGlvbihzY2FsYXIsIGNvbnRleHQpIHtcbiAgICB2YXIgaSwgbWF0Y2gsIG91dHB1dDtcbiAgICBpID0gY29udGV4dC5pO1xuICAgIGlmICghKG1hdGNoID0gdGhpcy5QQVRURVJOX1FVT1RFRF9TQ0FMQVIuZXhlYyhzY2FsYXIuc2xpY2UoaSkpKSkge1xuICAgICAgdGhyb3cgbmV3IFBhcnNlTW9yZSgnTWFsZm9ybWVkIGlubGluZSBZQU1MIHN0cmluZyAoJyArIHNjYWxhci5zbGljZShpKSArICcpLicpO1xuICAgIH1cbiAgICBvdXRwdXQgPSBtYXRjaFswXS5zdWJzdHIoMSwgbWF0Y2hbMF0ubGVuZ3RoIC0gMik7XG4gICAgaWYgKCdcIicgPT09IHNjYWxhci5jaGFyQXQoaSkpIHtcbiAgICAgIG91dHB1dCA9IFVuZXNjYXBlci51bmVzY2FwZURvdWJsZVF1b3RlZFN0cmluZyhvdXRwdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBVbmVzY2FwZXIudW5lc2NhcGVTaW5nbGVRdW90ZWRTdHJpbmcob3V0cHV0KTtcbiAgICB9XG4gICAgaSArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgY29udGV4dC5pID0gaTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIElubGluZS5wYXJzZVNlcXVlbmNlID0gZnVuY3Rpb24oc2VxdWVuY2UsIGNvbnRleHQpIHtcbiAgICB2YXIgZSwgaSwgaXNRdW90ZWQsIGxlbiwgb3V0cHV0LCByZWYsIHZhbHVlO1xuICAgIG91dHB1dCA9IFtdO1xuICAgIGxlbiA9IHNlcXVlbmNlLmxlbmd0aDtcbiAgICBpID0gY29udGV4dC5pO1xuICAgIGkgKz0gMTtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgIHN3aXRjaCAoc2VxdWVuY2UuY2hhckF0KGkpKSB7XG4gICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMucGFyc2VTZXF1ZW5jZShzZXF1ZW5jZSwgY29udGV4dCkpO1xuICAgICAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMucGFyc2VNYXBwaW5nKHNlcXVlbmNlLCBjb250ZXh0KSk7XG4gICAgICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlIFwiXFxuXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNRdW90ZWQgPSAoKHJlZiA9IHNlcXVlbmNlLmNoYXJBdChpKSkgPT09ICdcIicgfHwgcmVmID09PSBcIidcIik7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlU2NhbGFyKHNlcXVlbmNlLCBbJywnLCAnXSddLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0KTtcbiAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgIGlmICghaXNRdW90ZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAodmFsdWUuaW5kZXhPZignOiAnKSAhPT0gLTEgfHwgdmFsdWUuaW5kZXhPZihcIjpcXG5cIikgIT09IC0xKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlTWFwcGluZygneycgKyB2YWx1ZSArICd9Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAtLWk7XG4gICAgICB9XG4gICAgICArK2k7XG4gICAgfVxuICAgIHRocm93IG5ldyBQYXJzZU1vcmUoJ01hbGZvcm1lZCBpbmxpbmUgWUFNTCBzdHJpbmcgJyArIHNlcXVlbmNlKTtcbiAgfTtcblxuICBJbmxpbmUucGFyc2VNYXBwaW5nID0gZnVuY3Rpb24obWFwcGluZywgY29udGV4dCkge1xuICAgIHZhciBkb25lLCBpLCBrZXksIGxlbiwgb3V0cHV0LCBzaG91bGRDb250aW51ZVdoaWxlTG9vcCwgdmFsdWU7XG4gICAgb3V0cHV0ID0ge307XG4gICAgbGVuID0gbWFwcGluZy5sZW5ndGg7XG4gICAgaSA9IGNvbnRleHQuaTtcbiAgICBpICs9IDE7XG4gICAgc2hvdWxkQ29udGludWVXaGlsZUxvb3AgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgIHN3aXRjaCAobWFwcGluZy5jaGFyQXQoaSkpIHtcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgIGNhc2UgJywnOlxuICAgICAgICBjYXNlIFwiXFxuXCI6XG4gICAgICAgICAgKytpO1xuICAgICAgICAgIGNvbnRleHQuaSA9IGk7XG4gICAgICAgICAgc2hvdWxkQ29udGludWVXaGlsZUxvb3AgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZENvbnRpbnVlV2hpbGVMb29wKSB7XG4gICAgICAgIHNob3VsZENvbnRpbnVlV2hpbGVMb29wID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAga2V5ID0gdGhpcy5wYXJzZVNjYWxhcihtYXBwaW5nLCBbJzonLCAnICcsIFwiXFxuXCJdLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0LCBmYWxzZSk7XG4gICAgICBpID0gY29udGV4dC5pO1xuICAgICAgZG9uZSA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgICAgc3dpdGNoIChtYXBwaW5nLmNoYXJBdChpKSkge1xuICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlU2VxdWVuY2UobWFwcGluZywgY29udGV4dCk7XG4gICAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgICAgaWYgKG91dHB1dFtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VNYXBwaW5nKG1hcHBpbmcsIGNvbnRleHQpO1xuICAgICAgICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgICAgICAgIGlmIChvdXRwdXRba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJzonOlxuICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VTY2FsYXIobWFwcGluZywgWycsJywgJ30nXSwgWydcIicsIFwiJ1wiXSwgY29udGV4dCk7XG4gICAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgICAgaWYgKG91dHB1dFtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgUGFyc2VNb3JlKCdNYWxmb3JtZWQgaW5saW5lIFlBTUwgc3RyaW5nICcgKyBtYXBwaW5nKTtcbiAgfTtcblxuICBJbmxpbmUuZXZhbHVhdGVTY2FsYXIgPSBmdW5jdGlvbihzY2FsYXIsIGNvbnRleHQpIHtcbiAgICB2YXIgY2FzdCwgZGF0ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgZmlyc3RDaGFyLCBmaXJzdFNwYWNlLCBmaXJzdFdvcmQsIG9iamVjdERlY29kZXIsIHJhdywgc2NhbGFyTG93ZXIsIHN1YlZhbHVlLCB0cmltbWVkU2NhbGFyO1xuICAgIHNjYWxhciA9IFV0aWxzLnRyaW0oc2NhbGFyKTtcbiAgICBzY2FsYXJMb3dlciA9IHNjYWxhci50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAoc2NhbGFyTG93ZXIpIHtcbiAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgY2FzZSAnJzpcbiAgICAgIGNhc2UgJ34nOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSAnLmluZic6XG4gICAgICAgIHJldHVybiAyZTMwODtcbiAgICAgIGNhc2UgJy5uYW4nOlxuICAgICAgICByZXR1cm4gMC8wO1xuICAgICAgY2FzZSAnLS5pbmYnOlxuICAgICAgICByZXR1cm4gMmUzMDg7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmaXJzdENoYXIgPSBzY2FsYXJMb3dlci5jaGFyQXQoMCk7XG4gICAgICAgIHN3aXRjaCAoZmlyc3RDaGFyKSB7XG4gICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICBmaXJzdFNwYWNlID0gc2NhbGFyLmluZGV4T2YoJyAnKTtcbiAgICAgICAgICAgIGlmIChmaXJzdFNwYWNlID09PSAtMSkge1xuICAgICAgICAgICAgICBmaXJzdFdvcmQgPSBzY2FsYXJMb3dlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpcnN0V29yZCA9IHNjYWxhckxvd2VyLnNsaWNlKDAsIGZpcnN0U3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChmaXJzdFdvcmQpIHtcbiAgICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0U3BhY2UgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wYXJzZVNjYWxhcihzY2FsYXIuc2xpY2UoMikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIGNhc2UgJyFzdHInOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlscy5sdHJpbShzY2FsYXIuc2xpY2UoNCkpO1xuICAgICAgICAgICAgICBjYXNlICchIXN0cic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmx0cmltKHNjYWxhci5zbGljZSg1KSk7XG4gICAgICAgICAgICAgIGNhc2UgJyEhaW50JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wYXJzZVNjYWxhcihzY2FsYXIuc2xpY2UoNSkpKTtcbiAgICAgICAgICAgICAgY2FzZSAnISFib29sJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHMucGFyc2VCb29sZWFuKHRoaXMucGFyc2VTY2FsYXIoc2NhbGFyLnNsaWNlKDYpKSwgZmFsc2UpO1xuICAgICAgICAgICAgICBjYXNlICchIWZsb2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLnBhcnNlU2NhbGFyKHNjYWxhci5zbGljZSg3KSkpO1xuICAgICAgICAgICAgICBjYXNlICchIXRpbWVzdGFtcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLnN0cmluZ1RvRGF0ZShVdGlscy5sdHJpbShzY2FsYXIuc2xpY2UoMTEpKSk7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZTogdGhpcy5zZXR0aW5ncy5leGNlcHRpb25PbkludmFsaWRUeXBlLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3REZWNvZGVyOiB0aGlzLnNldHRpbmdzLm9iamVjdERlY29kZXIsXG4gICAgICAgICAgICAgICAgICAgIGk6IDBcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iamVjdERlY29kZXIgPSBjb250ZXh0Lm9iamVjdERlY29kZXIsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBjb250ZXh0LmV4Y2VwdGlvbk9uSW52YWxpZFR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdERlY29kZXIpIHtcbiAgICAgICAgICAgICAgICAgIHRyaW1tZWRTY2FsYXIgPSBVdGlscy5ydHJpbShzY2FsYXIpO1xuICAgICAgICAgICAgICAgICAgZmlyc3RTcGFjZSA9IHRyaW1tZWRTY2FsYXIuaW5kZXhPZignICcpO1xuICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0U3BhY2UgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3REZWNvZGVyKHRyaW1tZWRTY2FsYXIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSBVdGlscy5sdHJpbSh0cmltbWVkU2NhbGFyLnNsaWNlKGZpcnN0U3BhY2UgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHN1YlZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3REZWNvZGVyKHRyaW1tZWRTY2FsYXIuc2xpY2UoMCwgZmlyc3RTcGFjZSksIHN1YlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignQ3VzdG9tIG9iamVjdCBzdXBwb3J0IHdoZW4gcGFyc2luZyBhIFlBTUwgZmlsZSBoYXMgYmVlbiBkaXNhYmxlZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGlmICgnMHgnID09PSBzY2FsYXIuc2xpY2UoMCwgMikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmhleERlYyhzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc0RpZ2l0cyhzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBVdGlscy5vY3REZWMoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIGlmIChVdGlscy5pc0RpZ2l0cyhzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJhdyA9IHNjYWxhcjtcbiAgICAgICAgICAgICAgY2FzdCA9IHBhcnNlSW50KHJhdyk7XG4gICAgICAgICAgICAgIGlmIChyYXcgPT09IFN0cmluZyhjYXN0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXN0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5QQVRURVJOX1RIT1VTQU5EX05VTUVSSUNfU0NBTEFSLnRlc3Qoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIucmVwbGFjZSgnLCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NhbGFyO1xuICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzRGlnaXRzKHNjYWxhci5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgICAgaWYgKCcwJyA9PT0gc2NhbGFyLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtVXRpbHMub2N0RGVjKHNjYWxhci5zbGljZSgxKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmF3ID0gc2NhbGFyLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGNhc3QgPSBwYXJzZUludChyYXcpO1xuICAgICAgICAgICAgICAgIGlmIChyYXcgPT09IFN0cmluZyhjYXN0KSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC1jYXN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLXJhdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1lcmljKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5QQVRURVJOX1RIT1VTQU5EX05VTUVSSUNfU0NBTEFSLnRlc3Qoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIucmVwbGFjZSgnLCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NhbGFyO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoZGF0ZSA9IFV0aWxzLnN0cmluZ1RvRGF0ZShzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWVyaWMoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIudGVzdChzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNjYWxhci5yZXBsYWNlKCcsJywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIElubGluZTtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmxpbmU7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIElubGluZSwgUGFyc2VFeGNlcHRpb24sIFBhcnNlTW9yZSwgUGFyc2VyLCBQYXR0ZXJuLCBVdGlscztcblxuSW5saW5lID0gcmVxdWlyZSgnLi9JbmxpbmUnKTtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5VdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcblxuUGFyc2VFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9QYXJzZUV4Y2VwdGlvbicpO1xuXG5QYXJzZU1vcmUgPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9QYXJzZU1vcmUnKTtcblxuUGFyc2VyID0gKGZ1bmN0aW9uKCkge1xuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRk9MREVEX1NDQUxBUl9BTEwgPSBuZXcgUGF0dGVybignXig/Oig/PHR5cGU+IVteXFxcXHw+XSopXFxcXHMrKT8oPzxzZXBhcmF0b3I+XFxcXHx8PikoPzxtb2RpZmllcnM+XFxcXCt8XFxcXC18XFxcXGQrfFxcXFwrXFxcXGQrfFxcXFwtXFxcXGQrfFxcXFxkK1xcXFwrfFxcXFxkK1xcXFwtKT8oPzxjb21tZW50cz4gKyMuKik/JCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9GT0xERURfU0NBTEFSX0VORCA9IG5ldyBQYXR0ZXJuKCcoPzxzZXBhcmF0b3I+XFxcXHx8PikoPzxtb2RpZmllcnM+XFxcXCt8XFxcXC18XFxcXGQrfFxcXFwrXFxcXGQrfFxcXFwtXFxcXGQrfFxcXFxkK1xcXFwrfFxcXFxkK1xcXFwtKT8oPzxjb21tZW50cz4gKyMuKik/JCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9TRVFVRU5DRV9JVEVNID0gbmV3IFBhdHRlcm4oJ15cXFxcLSgoPzxsZWFkc3BhY2VzPlxcXFxzKykoPzx2YWx1ZT4uKz8pKT9cXFxccyokJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0FOQ0hPUl9WQUxVRSA9IG5ldyBQYXR0ZXJuKCdeJig/PHJlZj5bXiBdKykgKig/PHZhbHVlPi4qKScpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9DT01QQUNUX05PVEFUSU9OID0gbmV3IFBhdHRlcm4oJ14oPzxrZXk+JyArIElubGluZS5SRUdFWF9RVU9URURfU1RSSU5HICsgJ3xbXiBcXCdcIlxcXFx7XFxcXFtdLio/KSAqXFxcXDooXFxcXHMrKD88dmFsdWU+Lis/KSk/XFxcXHMqJCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9NQVBQSU5HX0lURU0gPSBuZXcgUGF0dGVybignXig/PGtleT4nICsgSW5saW5lLlJFR0VYX1FVT1RFRF9TVFJJTkcgKyAnfFteIFxcJ1wiXFxcXFtcXFxce10uKj8pICpcXFxcOihcXFxccysoPzx2YWx1ZT4uKz8pKT9cXFxccyokJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0RFQ0lNQUwgPSBuZXcgUGF0dGVybignXFxcXGQrJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0lOREVOVF9TUEFDRVMgPSBuZXcgUGF0dGVybignXiArJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX1RSQUlMSU5HX0xJTkVTID0gbmV3IFBhdHRlcm4oJyhcXG4qKSQnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fWUFNTF9IRUFERVIgPSBuZXcgUGF0dGVybignXlxcXFwlWUFNTFs6IF1bXFxcXGRcXFxcLl0rLipcXG4nLCAnbScpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9MRUFESU5HX0NPTU1FTlRTID0gbmV3IFBhdHRlcm4oJ14oXFxcXCMuKj9cXG4pKycsICdtJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9TVEFSVCA9IG5ldyBQYXR0ZXJuKCdeXFxcXC1cXFxcLVxcXFwtLio/XFxuJywgJ20nKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRE9DVU1FTlRfTUFSS0VSX0VORCA9IG5ldyBQYXR0ZXJuKCdeXFxcXC5cXFxcLlxcXFwuXFxcXHMqJCcsICdtJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfQllfSU5ERU5UQVRJT04gPSB7fTtcblxuICBQYXJzZXIucHJvdG90eXBlLkNPTlRFWFRfTk9ORSA9IDA7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5DT05URVhUX1NFUVVFTkNFID0gMTtcblxuICBQYXJzZXIucHJvdG90eXBlLkNPTlRFWFRfTUFQUElORyA9IDI7XG5cbiAgZnVuY3Rpb24gUGFyc2VyKG9mZnNldCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0ICE9IG51bGwgPyBvZmZzZXQgOiAwO1xuICAgIHRoaXMubGluZXMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRMaW5lTmIgPSAtMTtcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gJyc7XG4gICAgdGhpcy5yZWZzID0ge307XG4gIH1cblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgYWxpYXMsIGFsbG93T3ZlcndyaXRlLCBibG9jaywgYywgY29udGV4dCwgZGF0YSwgZSwgZmlyc3QsIGksIGluZGVudCwgaXNSZWYsIGosIGssIGtleSwgbCwgbGFzdEtleSwgbGVuLCBsZW4xLCBsZW4yLCBsZW4zLCBsaW5lQ291bnQsIG0sIG1hdGNoZXMsIG1lcmdlTm9kZSwgbiwgbmFtZSwgcGFyc2VkLCBwYXJzZWRJdGVtLCBwYXJzZXIsIHJlZiwgcmVmMSwgcmVmMiwgcmVmTmFtZSwgcmVmVmFsdWUsIHZhbCwgdmFsdWVzO1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudExpbmVOYiA9IC0xO1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAnJztcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5jbGVhbnVwKHZhbHVlKS5zcGxpdChcIlxcblwiKTtcbiAgICBkYXRhID0gbnVsbDtcbiAgICBjb250ZXh0ID0gdGhpcy5DT05URVhUX05PTkU7XG4gICAgYWxsb3dPdmVyd3JpdGUgPSBmYWxzZTtcbiAgICB3aGlsZSAodGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICBpZiAodGhpcy5pc0N1cnJlbnRMaW5lRW1wdHkoKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChcIlxcdFwiID09PSB0aGlzLmN1cnJlbnRMaW5lWzBdKSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignQSBZQU1MIGZpbGUgY2Fubm90IGNvbnRhaW4gdGFicyBhcyBpbmRlbnRhdGlvbi4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlzUmVmID0gbWVyZ2VOb2RlID0gZmFsc2U7XG4gICAgICBpZiAodmFsdWVzID0gdGhpcy5QQVRURVJOX1NFUVVFTkNFX0lURU0uZXhlYyh0aGlzLmN1cnJlbnRMaW5lKSkge1xuICAgICAgICBpZiAodGhpcy5DT05URVhUX01BUFBJTkcgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1lvdSBjYW5ub3QgZGVmaW5lIGEgc2VxdWVuY2UgaXRlbSB3aGVuIGluIGEgbWFwcGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLkNPTlRFWFRfU0VRVUVOQ0U7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgJiYgKG1hdGNoZXMgPSB0aGlzLlBBVFRFUk5fQU5DSE9SX1ZBTFVFLmV4ZWModmFsdWVzLnZhbHVlKSkpIHtcbiAgICAgICAgICBpc1JlZiA9IG1hdGNoZXMucmVmO1xuICAgICAgICAgIHZhbHVlcy52YWx1ZSA9IG1hdGNoZXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodmFsdWVzLnZhbHVlICE9IG51bGwpIHx8ICcnID09PSBVdGlscy50cmltKHZhbHVlcy52YWx1ZSwgJyAnKSB8fCBVdGlscy5sdHJpbSh2YWx1ZXMudmFsdWUsICcgJykuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudExpbmVOYiA8IHRoaXMubGluZXMubGVuZ3RoIC0gMSAmJiAhdGhpcy5pc05leHRMaW5lVW5JbmRlbnRlZENvbGxlY3Rpb24oKSkge1xuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKGMpO1xuICAgICAgICAgICAgcGFyc2VyLnJlZnMgPSB0aGlzLnJlZnM7XG4gICAgICAgICAgICBkYXRhLnB1c2gocGFyc2VyLnBhcnNlKHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2sobnVsbCwgdHJ1ZSksIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5wdXNoKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKChyZWYgPSB2YWx1ZXMubGVhZHNwYWNlcykgIT0gbnVsbCA/IHJlZi5sZW5ndGggOiB2b2lkIDApICYmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0NPTVBBQ1RfTk9UQVRJT04uZXhlYyh2YWx1ZXMudmFsdWUpKSkge1xuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKTtcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoYyk7XG4gICAgICAgICAgICBwYXJzZXIucmVmcyA9IHRoaXMucmVmcztcbiAgICAgICAgICAgIGJsb2NrID0gdmFsdWVzLnZhbHVlO1xuICAgICAgICAgICAgaW5kZW50ID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05leHRMaW5lSW5kZW50ZWQoZmFsc2UpKSB7XG4gICAgICAgICAgICAgIGJsb2NrICs9IFwiXFxuXCIgKyB0aGlzLmdldE5leHRFbWJlZEJsb2NrKGluZGVudCArIHZhbHVlcy5sZWFkc3BhY2VzLmxlbmd0aCArIDEsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5wdXNoKHBhcnNlci5wYXJzZShibG9jaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2RlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhLnB1c2godGhpcy5wYXJzZVZhbHVlKHZhbHVlcy52YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2RlcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgodmFsdWVzID0gdGhpcy5QQVRURVJOX01BUFBJTkdfSVRFTS5leGVjKHRoaXMuY3VycmVudExpbmUpKSAmJiB2YWx1ZXMua2V5LmluZGV4T2YoJyAjJykgPT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLkNPTlRFWFRfU0VRVUVOQ0UgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1lvdSBjYW5ub3QgZGVmaW5lIGEgbWFwcGluZyBpdGVtIHdoZW4gaW4gYSBzZXF1ZW5jZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLkNPTlRFWFRfTUFQUElORztcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBJbmxpbmUuY29uZmlndXJlKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGtleSA9IElubGluZS5wYXJzZVNjYWxhcih2YWx1ZXMua2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgZS5wYXJzZWRMaW5lID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCc8PCcgPT09IGtleSkge1xuICAgICAgICAgIG1lcmdlTm9kZSA9IHRydWU7XG4gICAgICAgICAgYWxsb3dPdmVyd3JpdGUgPSB0cnVlO1xuICAgICAgICAgIGlmICgoKHJlZjEgPSB2YWx1ZXMudmFsdWUpICE9IG51bGwgPyByZWYxLmluZGV4T2YoJyonKSA6IHZvaWQgMCkgPT09IDApIHtcbiAgICAgICAgICAgIHJlZk5hbWUgPSB2YWx1ZXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzW3JlZk5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdSZWZlcmVuY2UgXCInICsgcmVmTmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZlZhbHVlID0gdGhpcy5yZWZzW3JlZk5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZWYWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdZQU1MIG1lcmdlIGtleXMgdXNlZCB3aXRoIGEgc2NhbGFyIHZhbHVlIGluc3RlYWQgb2YgYW4gb2JqZWN0LicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlZlZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZlZhbHVlLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbbmFtZSA9IFN0cmluZyhpKV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChrZXkgaW4gcmVmVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlZlZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgJiYgdmFsdWVzLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlcy52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXROZXh0RW1iZWRCbG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKGMpO1xuICAgICAgICAgICAgcGFyc2VyLnJlZnMgPSB0aGlzLnJlZnM7XG4gICAgICAgICAgICBwYXJzZWQgPSBwYXJzZXIucGFyc2UodmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignWUFNTCBtZXJnZSBrZXlzIHVzZWQgd2l0aCBhIHNjYWxhciB2YWx1ZSBpbnN0ZWFkIG9mIGFuIG9iamVjdC4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJzZWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcGFyc2VkLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZEl0ZW0gPSBwYXJzZWRbbF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRJdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdNZXJnZSBpdGVtcyBtdXN0IGJlIG9iamVjdHMuJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgcGFyc2VkSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRJdGVtIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IG0gPSAwLCBsZW4yID0gcGFyc2VkSXRlbS5sZW5ndGg7IG0gPCBsZW4yOyBpID0gKyttKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VkSXRlbVtpXTtcbiAgICAgICAgICAgICAgICAgICAgayA9IFN0cmluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtrXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcnNlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZWRJdGVtW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcnNlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VkW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgodmFsdWVzLnZhbHVlICE9IG51bGwpICYmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0FOQ0hPUl9WQUxVRS5leGVjKHZhbHVlcy52YWx1ZSkpKSB7XG4gICAgICAgICAgaXNSZWYgPSBtYXRjaGVzLnJlZjtcbiAgICAgICAgICB2YWx1ZXMudmFsdWUgPSBtYXRjaGVzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJnZU5vZGUpIHtcblxuICAgICAgICB9IGVsc2UgaWYgKCEodmFsdWVzLnZhbHVlICE9IG51bGwpIHx8ICcnID09PSBVdGlscy50cmltKHZhbHVlcy52YWx1ZSwgJyAnKSB8fCBVdGlscy5sdHJpbSh2YWx1ZXMudmFsdWUsICcgJykuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgaWYgKCEodGhpcy5pc05leHRMaW5lSW5kZW50ZWQoKSkgJiYgISh0aGlzLmlzTmV4dExpbmVVbkluZGVudGVkQ29sbGVjdGlvbigpKSkge1xuICAgICAgICAgICAgaWYgKGFsbG93T3ZlcndyaXRlIHx8IGRhdGFba2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGFba2V5XSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMgPSB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxO1xuICAgICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihjKTtcbiAgICAgICAgICAgIHBhcnNlci5yZWZzID0gdGhpcy5yZWZzO1xuICAgICAgICAgICAgdmFsID0gcGFyc2VyLnBhcnNlKHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2soKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgICBpZiAoYWxsb3dPdmVyd3JpdGUgfHwgZGF0YVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWVzLnZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgICBpZiAoYWxsb3dPdmVyd3JpdGUgfHwgZGF0YVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVDb3VudCA9IHRoaXMubGluZXMubGVuZ3RoO1xuICAgICAgICBpZiAoMSA9PT0gbGluZUNvdW50IHx8ICgyID09PSBsaW5lQ291bnQgJiYgVXRpbHMuaXNFbXB0eSh0aGlzLmxpbmVzWzFdKSkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBJbmxpbmUucGFyc2UodGhpcy5saW5lc1swXSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgIGUucGFyc2VkTGluZSA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgIGZpcnN0ID0gdmFsdWVbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgJiYgZmlyc3QuaW5kZXhPZignKicpID09PSAwKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChuID0gMCwgbGVuMyA9IHZhbHVlLmxlbmd0aDsgbiA8IGxlbjM7IG4rKykge1xuICAgICAgICAgICAgICAgIGFsaWFzID0gdmFsdWVbbl07XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHRoaXMucmVmc1thbGlhcy5zbGljZSgxKV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKChyZWYyID0gVXRpbHMubHRyaW0odmFsdWUpLmNoYXJBdCgwKSkgPT09ICdbJyB8fCByZWYyID09PSAneycpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIElubGluZS5wYXJzZSh2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgIGUucGFyc2VkTGluZSA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdVbmFibGUgdG8gcGFyc2UuJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNSZWYpIHtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHRoaXMucmVmc1tpc1JlZl0gPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgbGFzdEtleSA9IGtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWZzW2lzUmVmXSA9IGRhdGFbbGFzdEtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFV0aWxzLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5nZXRSZWFsQ3VycmVudExpbmVOYiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMaW5lTmIgKyB0aGlzLm9mZnNldDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TGluZS5sZW5ndGggLSBVdGlscy5sdHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpLmxlbmd0aDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldE5leHRFbWJlZEJsb2NrID0gZnVuY3Rpb24oaW5kZW50YXRpb24sIGluY2x1ZGVVbmluZGVudGVkQ29sbGVjdGlvbikge1xuICAgIHZhciBkYXRhLCBpbmRlbnQsIGlzSXRVbmluZGVudGVkQ29sbGVjdGlvbiwgbmV3SW5kZW50LCByZW1vdmVDb21tZW50cywgcmVtb3ZlQ29tbWVudHNQYXR0ZXJuLCB1bmluZGVudGVkRW1iZWRCbG9jaztcbiAgICBpZiAoaW5kZW50YXRpb24gPT0gbnVsbCkge1xuICAgICAgaW5kZW50YXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoaW5jbHVkZVVuaW5kZW50ZWRDb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVVbmluZGVudGVkQ29sbGVjdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgaWYgKGluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIG5ld0luZGVudCA9IHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpO1xuICAgICAgdW5pbmRlbnRlZEVtYmVkQmxvY2sgPSB0aGlzLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtKHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgaWYgKCEodGhpcy5pc0N1cnJlbnRMaW5lRW1wdHkoKSkgJiYgMCA9PT0gbmV3SW5kZW50ICYmICF1bmluZGVudGVkRW1iZWRCbG9jaykge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ0luZGVudGF0aW9uIHByb2JsZW0uJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0luZGVudCA9IGluZGVudGF0aW9uO1xuICAgIH1cbiAgICBkYXRhID0gW3RoaXMuY3VycmVudExpbmUuc2xpY2UobmV3SW5kZW50KV07XG4gICAgaWYgKCFpbmNsdWRlVW5pbmRlbnRlZENvbGxlY3Rpb24pIHtcbiAgICAgIGlzSXRVbmluZGVudGVkQ29sbGVjdGlvbiA9IHRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbW1lbnRzUGF0dGVybiA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0VORDtcbiAgICByZW1vdmVDb21tZW50cyA9ICFyZW1vdmVDb21tZW50c1BhdHRlcm4udGVzdCh0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICB3aGlsZSAodGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKTtcbiAgICAgIGlmIChpbmRlbnQgPT09IG5ld0luZGVudCkge1xuICAgICAgICByZW1vdmVDb21tZW50cyA9ICFyZW1vdmVDb21tZW50c1BhdHRlcm4udGVzdCh0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1vdmVDb21tZW50cyAmJiB0aGlzLmlzQ3VycmVudExpbmVDb21tZW50KCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKSkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5jdXJyZW50TGluZS5zbGljZShuZXdJbmRlbnQpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNJdFVuaW5kZW50ZWRDb2xsZWN0aW9uICYmICF0aGlzLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtKHRoaXMuY3VycmVudExpbmUpICYmIGluZGVudCA9PT0gbmV3SW5kZW50KSB7XG4gICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGluZGVudCA+PSBuZXdJbmRlbnQpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuY3VycmVudExpbmUuc2xpY2UobmV3SW5kZW50KSk7XG4gICAgICB9IGVsc2UgaWYgKFV0aWxzLmx0cmltKHRoaXMuY3VycmVudExpbmUpLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoMCA9PT0gaW5kZW50KSB7XG4gICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdJbmRlbnRhdGlvbiBwcm9ibGVtLicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKFwiXFxuXCIpO1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUubW92ZVRvTmV4dExpbmUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGluZU5iID49IHRoaXMubGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gdGhpcy5saW5lc1srK3RoaXMuY3VycmVudExpbmVOYl07XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5tb3ZlVG9QcmV2aW91c0xpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gdGhpcy5saW5lc1stLXRoaXMuY3VycmVudExpbmVOYl07XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgZSwgZm9sZGVkSW5kZW50LCBtYXRjaGVzLCBtb2RpZmllcnMsIHBvcywgcmVmLCByZWYxLCB2YWw7XG4gICAgaWYgKDAgPT09IHZhbHVlLmluZGV4T2YoJyonKSkge1xuICAgICAgcG9zID0gdmFsdWUuaW5kZXhPZignIycpO1xuICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMSwgcG9zIC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVmc1t2YWx1ZV0gPT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1JlZmVyZW5jZSBcIicgKyB2YWx1ZSArICdcIiBkb2VzIG5vdCBleGlzdC4nLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlZnNbdmFsdWVdO1xuICAgIH1cbiAgICBpZiAobWF0Y2hlcyA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0FMTC5leGVjKHZhbHVlKSkge1xuICAgICAgbW9kaWZpZXJzID0gKHJlZiA9IG1hdGNoZXMubW9kaWZpZXJzKSAhPSBudWxsID8gcmVmIDogJyc7XG4gICAgICBmb2xkZWRJbmRlbnQgPSBNYXRoLmFicyhwYXJzZUludChtb2RpZmllcnMpKTtcbiAgICAgIGlmIChpc05hTihmb2xkZWRJbmRlbnQpKSB7XG4gICAgICAgIGZvbGRlZEluZGVudCA9IDA7XG4gICAgICB9XG4gICAgICB2YWwgPSB0aGlzLnBhcnNlRm9sZGVkU2NhbGFyKG1hdGNoZXMuc2VwYXJhdG9yLCB0aGlzLlBBVFRFUk5fREVDSU1BTC5yZXBsYWNlKG1vZGlmaWVycywgJycpLCBmb2xkZWRJbmRlbnQpO1xuICAgICAgaWYgKG1hdGNoZXMudHlwZSAhPSBudWxsKSB7XG4gICAgICAgIElubGluZS5jb25maWd1cmUoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgIHJldHVybiBJbmxpbmUucGFyc2VTY2FsYXIobWF0Y2hlcy50eXBlICsgJyAnICsgdmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgocmVmMSA9IHZhbHVlLmNoYXJBdCgwKSkgPT09ICdbJyB8fCByZWYxID09PSAneycgfHwgcmVmMSA9PT0gJ1wiJyB8fCByZWYxID09PSBcIidcIikge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSW5saW5lLnBhcnNlKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQYXJzZU1vcmUgJiYgdGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBcIlxcblwiICsgVXRpbHMudHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnBhcnNlZExpbmUgPSB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxO1xuICAgICAgICAgICAgZS5zbmlwcGV0ID0gdGhpcy5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzTmV4dExpbmVJbmRlbnRlZCgpKSB7XG4gICAgICAgIHZhbHVlICs9IFwiXFxuXCIgKyB0aGlzLmdldE5leHRFbWJlZEJsb2NrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gSW5saW5lLnBhcnNlKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZvbGRlZFNjYWxhciA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgaW5kaWNhdG9yLCBpbmRlbnRhdGlvbikge1xuICAgIHZhciBpc0N1cnJlbnRMaW5lQmxhbmssIGosIGxlbiwgbGluZSwgbWF0Y2hlcywgbmV3VGV4dCwgbm90RU9GLCBwYXR0ZXJuLCByZWYsIHRleHQ7XG4gICAgaWYgKGluZGljYXRvciA9PSBudWxsKSB7XG4gICAgICBpbmRpY2F0b3IgPSAnJztcbiAgICB9XG4gICAgaWYgKGluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIGluZGVudGF0aW9uID0gMDtcbiAgICB9XG4gICAgbm90RU9GID0gdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgIGlmICghbm90RU9GKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlzQ3VycmVudExpbmVCbGFuayA9IHRoaXMuaXNDdXJyZW50TGluZUJsYW5rKCk7XG4gICAgdGV4dCA9ICcnO1xuICAgIHdoaWxlIChub3RFT0YgJiYgaXNDdXJyZW50TGluZUJsYW5rKSB7XG4gICAgICBpZiAobm90RU9GID0gdGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgaXNDdXJyZW50TGluZUJsYW5rID0gdGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IGluZGVudGF0aW9uKSB7XG4gICAgICBpZiAobWF0Y2hlcyA9IHRoaXMuUEFUVEVSTl9JTkRFTlRfU1BBQ0VTLmV4ZWModGhpcy5jdXJyZW50TGluZSkpIHtcbiAgICAgICAgaW5kZW50YXRpb24gPSBtYXRjaGVzWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZGVudGF0aW9uID4gMCkge1xuICAgICAgcGF0dGVybiA9IHRoaXMuUEFUVEVSTl9GT0xERURfU0NBTEFSX0JZX0lOREVOVEFUSU9OW2luZGVudGF0aW9uXTtcbiAgICAgIGlmIChwYXR0ZXJuID09IG51bGwpIHtcbiAgICAgICAgcGF0dGVybiA9IG5ldyBQYXR0ZXJuKCdeIHsnICsgaW5kZW50YXRpb24gKyAnfSguKikkJyk7XG4gICAgICAgIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9GT0xERURfU0NBTEFSX0JZX0lOREVOVEFUSU9OW2luZGVudGF0aW9uXSA9IHBhdHRlcm47XG4gICAgICB9XG4gICAgICB3aGlsZSAobm90RU9GICYmIChpc0N1cnJlbnRMaW5lQmxhbmsgfHwgKG1hdGNoZXMgPSBwYXR0ZXJuLmV4ZWModGhpcy5jdXJyZW50TGluZSkpKSkge1xuICAgICAgICBpZiAoaXNDdXJyZW50TGluZUJsYW5rKSB7XG4gICAgICAgICAgdGV4dCArPSB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKGluZGVudGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ICs9IG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdEVPRiA9IHRoaXMubW92ZVRvTmV4dExpbmUoKSkge1xuICAgICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgICBpc0N1cnJlbnRMaW5lQmxhbmsgPSB0aGlzLmlzQ3VycmVudExpbmVCbGFuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub3RFT0YpIHtcbiAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICB9XG4gICAgaWYgKG5vdEVPRikge1xuICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICB9XG4gICAgaWYgKCc+JyA9PT0gc2VwYXJhdG9yKSB7XG4gICAgICBuZXdUZXh0ID0gJyc7XG4gICAgICByZWYgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGxpbmUgPSByZWZbal07XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMCB8fCBsaW5lLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICAgICAgbmV3VGV4dCA9IFV0aWxzLnJ0cmltKG5ld1RleHQsICcgJykgKyBsaW5lICsgXCJcXG5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IGxpbmUgKyAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRleHQgPSBuZXdUZXh0O1xuICAgIH1cbiAgICBpZiAoJysnICE9PSBpbmRpY2F0b3IpIHtcbiAgICAgIHRleHQgPSBVdGlscy5ydHJpbSh0ZXh0KTtcbiAgICB9XG4gICAgaWYgKCcnID09PSBpbmRpY2F0b3IpIHtcbiAgICAgIHRleHQgPSB0aGlzLlBBVFRFUk5fVFJBSUxJTkdfTElORVMucmVwbGFjZSh0ZXh0LCBcIlxcblwiKTtcbiAgICB9IGVsc2UgaWYgKCctJyA9PT0gaW5kaWNhdG9yKSB7XG4gICAgICB0ZXh0ID0gdGhpcy5QQVRURVJOX1RSQUlMSU5HX0xJTkVTLnJlcGxhY2UodGV4dCwgJycpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzTmV4dExpbmVJbmRlbnRlZCA9IGZ1bmN0aW9uKGlnbm9yZUNvbW1lbnRzKSB7XG4gICAgdmFyIEVPRiwgY3VycmVudEluZGVudGF0aW9uLCByZXQ7XG4gICAgaWYgKGlnbm9yZUNvbW1lbnRzID09IG51bGwpIHtcbiAgICAgIGlnbm9yZUNvbW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY3VycmVudEluZGVudGF0aW9uID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgRU9GID0gIXRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICBpZiAoaWdub3JlQ29tbWVudHMpIHtcbiAgICAgIHdoaWxlICghRU9GICYmIHRoaXMuaXNDdXJyZW50TGluZUVtcHR5KCkpIHtcbiAgICAgICAgRU9GID0gIXRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCFFT0YgJiYgdGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKSkge1xuICAgICAgICBFT0YgPSAhdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoRU9GKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKSA+IGN1cnJlbnRJbmRlbnRhdGlvbikge1xuICAgICAgcmV0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNDdXJyZW50TGluZUVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRyaW1tZWRMaW5lO1xuICAgIHRyaW1tZWRMaW5lID0gVXRpbHMudHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgIHJldHVybiB0cmltbWVkTGluZS5sZW5ndGggPT09IDAgfHwgdHJpbW1lZExpbmUuY2hhckF0KDApID09PSAnIyc7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5pc0N1cnJlbnRMaW5lQmxhbmsgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJycgPT09IFV0aWxzLnRyaW0odGhpcy5jdXJyZW50TGluZSwgJyAnKTtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzQ3VycmVudExpbmVDb21tZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGx0cmltbWVkTGluZTtcbiAgICBsdHJpbW1lZExpbmUgPSBVdGlscy5sdHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICAgIHJldHVybiBsdHJpbW1lZExpbmUuY2hhckF0KDApID09PSAnIyc7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgY291bnQsIGksIGluZGVudCwgaiwgbCwgbGVuLCBsZW4xLCBsaW5lLCBsaW5lcywgcmVmLCByZWYxLCByZWYyLCBzbWFsbGVzdEluZGVudCwgdHJpbW1lZFZhbHVlO1xuICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiXFxyXCIpICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIlxcclxcblwiKS5qb2luKFwiXFxuXCIpLnNwbGl0KFwiXFxyXCIpLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIGNvdW50ID0gMDtcbiAgICByZWYgPSB0aGlzLlBBVFRFUk5fWUFNTF9IRUFERVIucmVwbGFjZUFsbCh2YWx1ZSwgJycpLCB2YWx1ZSA9IHJlZlswXSwgY291bnQgPSByZWZbMV07XG4gICAgdGhpcy5vZmZzZXQgKz0gY291bnQ7XG4gICAgcmVmMSA9IHRoaXMuUEFUVEVSTl9MRUFESU5HX0NPTU1FTlRTLnJlcGxhY2VBbGwodmFsdWUsICcnLCAxKSwgdHJpbW1lZFZhbHVlID0gcmVmMVswXSwgY291bnQgPSByZWYxWzFdO1xuICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vZmZzZXQgKz0gVXRpbHMuc3ViU3RyQ291bnQodmFsdWUsIFwiXFxuXCIpIC0gVXRpbHMuc3ViU3RyQ291bnQodHJpbW1lZFZhbHVlLCBcIlxcblwiKTtcbiAgICAgIHZhbHVlID0gdHJpbW1lZFZhbHVlO1xuICAgIH1cbiAgICByZWYyID0gdGhpcy5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9TVEFSVC5yZXBsYWNlQWxsKHZhbHVlLCAnJywgMSksIHRyaW1tZWRWYWx1ZSA9IHJlZjJbMF0sIGNvdW50ID0gcmVmMlsxXTtcbiAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMub2Zmc2V0ICs9IFV0aWxzLnN1YlN0ckNvdW50KHZhbHVlLCBcIlxcblwiKSAtIFV0aWxzLnN1YlN0ckNvdW50KHRyaW1tZWRWYWx1ZSwgXCJcXG5cIik7XG4gICAgICB2YWx1ZSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgIHZhbHVlID0gdGhpcy5QQVRURVJOX0RPQ1VNRU5UX01BUktFUl9FTkQucmVwbGFjZSh2YWx1ZSwgJycpO1xuICAgIH1cbiAgICBsaW5lcyA9IHZhbHVlLnNwbGl0KFwiXFxuXCIpO1xuICAgIHNtYWxsZXN0SW5kZW50ID0gLTE7XG4gICAgZm9yIChqID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxpbmUgPSBsaW5lc1tqXTtcbiAgICAgIGlmIChVdGlscy50cmltKGxpbmUsICcgJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZW50ID0gbGluZS5sZW5ndGggLSBVdGlscy5sdHJpbShsaW5lKS5sZW5ndGg7XG4gICAgICBpZiAoc21hbGxlc3RJbmRlbnQgPT09IC0xIHx8IGluZGVudCA8IHNtYWxsZXN0SW5kZW50KSB7XG4gICAgICAgIHNtYWxsZXN0SW5kZW50ID0gaW5kZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc21hbGxlc3RJbmRlbnQgPiAwKSB7XG4gICAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGxpbmVzLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBsaW5lc1tpXSA9IGxpbmUuc2xpY2Uoc21hbGxlc3RJbmRlbnQpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5pc05leHRMaW5lVW5JbmRlbnRlZENvbGxlY3Rpb24gPSBmdW5jdGlvbihjdXJyZW50SW5kZW50YXRpb24pIHtcbiAgICB2YXIgbm90RU9GLCByZXQ7XG4gICAgaWYgKGN1cnJlbnRJbmRlbnRhdGlvbiA9PSBudWxsKSB7XG4gICAgICBjdXJyZW50SW5kZW50YXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRJbmRlbnRhdGlvbiA9IHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpO1xuICAgIH1cbiAgICBub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgd2hpbGUgKG5vdEVPRiAmJiB0aGlzLmlzQ3VycmVudExpbmVFbXB0eSgpKSB7XG4gICAgICBub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgfVxuICAgIGlmIChmYWxzZSA9PT0gbm90RU9GKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKSA9PT0gY3VycmVudEluZGVudGF0aW9uICYmIHRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSkpIHtcbiAgICAgIHJldCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubW92ZVRvUHJldmlvdXNMaW5lKCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzU3RyaW5nVW5JbmRlbnRlZENvbGxlY3Rpb25JdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExpbmUgPT09ICctJyB8fCB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKDAsIDIpID09PSAnLSAnO1xuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBQYXR0ZXJuO1xuXG5QYXR0ZXJuID0gKGZ1bmN0aW9uKCkge1xuICBQYXR0ZXJuLnByb3RvdHlwZS5yZWdleCA9IG51bGw7XG5cbiAgUGF0dGVybi5wcm90b3R5cGUucmF3UmVnZXggPSBudWxsO1xuXG4gIFBhdHRlcm4ucHJvdG90eXBlLmNsZWFuZWRSZWdleCA9IG51bGw7XG5cbiAgUGF0dGVybi5wcm90b3R5cGUubWFwcGluZyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gUGF0dGVybihyYXdSZWdleCwgbW9kaWZpZXJzKSB7XG4gICAgdmFyIF9jaGFyLCBjYXB0dXJpbmdCcmFja2V0TnVtYmVyLCBjbGVhbmVkUmVnZXgsIGksIGxlbiwgbWFwcGluZywgbmFtZSwgcGFydCwgc3ViQ2hhcjtcbiAgICBpZiAobW9kaWZpZXJzID09IG51bGwpIHtcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuICAgIH1cbiAgICBjbGVhbmVkUmVnZXggPSAnJztcbiAgICBsZW4gPSByYXdSZWdleC5sZW5ndGg7XG4gICAgbWFwcGluZyA9IG51bGw7XG4gICAgY2FwdHVyaW5nQnJhY2tldE51bWJlciA9IDA7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIF9jaGFyID0gcmF3UmVnZXguY2hhckF0KGkpO1xuICAgICAgaWYgKF9jaGFyID09PSAnXFxcXCcpIHtcbiAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IHJhd1JlZ2V4LnNsaWNlKGksICsoaSArIDEpICsgMSB8fCA5ZTkpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnKCcpIHtcbiAgICAgICAgaWYgKGkgPCBsZW4gLSAyKSB7XG4gICAgICAgICAgcGFydCA9IHJhd1JlZ2V4LnNsaWNlKGksICsoaSArIDIpICsgMSB8fCA5ZTkpO1xuICAgICAgICAgIGlmIChwYXJ0ID09PSAnKD86Jykge1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IHBhcnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnKD88Jykge1xuICAgICAgICAgICAgY2FwdHVyaW5nQnJhY2tldE51bWJlcisrO1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgbmFtZSA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKGkgKyAxIDwgbGVuKSB7XG4gICAgICAgICAgICAgIHN1YkNoYXIgPSByYXdSZWdleC5jaGFyQXQoaSArIDEpO1xuICAgICAgICAgICAgICBpZiAoc3ViQ2hhciA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9ICcoJztcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hcHBpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nID0ge307XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtYXBwaW5nW25hbWVdID0gY2FwdHVyaW5nQnJhY2tldE51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSBzdWJDaGFyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IF9jaGFyO1xuICAgICAgICAgICAgY2FwdHVyaW5nQnJhY2tldE51bWJlcisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhbmVkUmVnZXggKz0gX2NoYXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFuZWRSZWdleCArPSBfY2hhcjtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgdGhpcy5yYXdSZWdleCA9IHJhd1JlZ2V4O1xuICAgIHRoaXMuY2xlYW5lZFJlZ2V4ID0gY2xlYW5lZFJlZ2V4O1xuICAgIHRoaXMucmVnZXggPSBuZXcgUmVnRXhwKHRoaXMuY2xlYW5lZFJlZ2V4LCAnZycgKyBtb2RpZmllcnMucmVwbGFjZSgnZycsICcnKSk7XG4gICAgdGhpcy5tYXBwaW5nID0gbWFwcGluZztcbiAgfVxuXG4gIFBhdHRlcm4ucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgaW5kZXgsIG1hdGNoZXMsIG5hbWUsIHJlZjtcbiAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgbWF0Y2hlcyA9IHRoaXMucmVnZXguZXhlYyhzdHIpO1xuICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBwaW5nICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IHRoaXMubWFwcGluZztcbiAgICAgIGZvciAobmFtZSBpbiByZWYpIHtcbiAgICAgICAgaW5kZXggPSByZWZbbmFtZV07XG4gICAgICAgIG1hdGNoZXNbbmFtZV0gPSBtYXRjaGVzW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH07XG5cbiAgUGF0dGVybi5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHRoaXMucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5yZWdleC50ZXN0KHN0cik7XG4gIH07XG5cbiAgUGF0dGVybi5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKHN0ciwgcmVwbGFjZW1lbnQpIHtcbiAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHRoaXMucmVnZXgsIHJlcGxhY2VtZW50KTtcbiAgfTtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oc3RyLCByZXBsYWNlbWVudCwgbGltaXQpIHtcbiAgICB2YXIgY291bnQ7XG4gICAgaWYgKGxpbWl0ID09IG51bGwpIHtcbiAgICAgIGxpbWl0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIGNvdW50ID0gMDtcbiAgICB3aGlsZSAodGhpcy5yZWdleC50ZXN0KHN0cikgJiYgKGxpbWl0ID09PSAwIHx8IGNvdW50IDwgbGltaXQpKSB7XG4gICAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh0aGlzLnJlZ2V4LCByZXBsYWNlbWVudCk7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gW3N0ciwgY291bnRdO1xuICB9O1xuXG4gIHJldHVybiBQYXR0ZXJuO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdHRlcm47XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhdHRlcm4sIFVuZXNjYXBlciwgVXRpbHM7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5QYXR0ZXJuID0gcmVxdWlyZSgnLi9QYXR0ZXJuJyk7XG5cblVuZXNjYXBlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVW5lc2NhcGVyKCkge31cblxuICBVbmVzY2FwZXIuUEFUVEVSTl9FU0NBUEVEX0NIQVJBQ1RFUiA9IG5ldyBQYXR0ZXJuKCdcXFxcXFxcXChbMGFidFxcdG52ZnJlIFwiXFxcXC9cXFxcXFxcXE5fTFBdfHhbMC05YS1mQS1GXXsyfXx1WzAtOWEtZkEtRl17NH18VVswLTlhLWZBLUZdezh9KScpO1xuXG4gIFVuZXNjYXBlci51bmVzY2FwZVNpbmdsZVF1b3RlZFN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcJ1xcJy9nLCAnXFwnJyk7XG4gIH07XG5cbiAgVW5lc2NhcGVyLnVuZXNjYXBlRG91YmxlUXVvdGVkU3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5fdW5lc2NhcGVDYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bmVzY2FwZUNhbGxiYWNrID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMudW5lc2NhcGVDaGFyYWN0ZXIoc3RyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5QQVRURVJOX0VTQ0FQRURfQ0hBUkFDVEVSLnJlcGxhY2UodmFsdWUsIHRoaXMuX3VuZXNjYXBlQ2FsbGJhY2spO1xuICB9O1xuXG4gIFVuZXNjYXBlci51bmVzY2FwZUNoYXJhY3RlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGNoO1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgICBzd2l0Y2ggKHZhbHVlLmNoYXJBdCgxKSkge1xuICAgICAgY2FzZSAnMCc6XG4gICAgICAgIHJldHVybiBjaCgwKTtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICByZXR1cm4gY2goNyk7XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgcmV0dXJuIGNoKDgpO1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHJldHVybiBcIlxcdFwiO1xuICAgICAgY2FzZSBcIlxcdFwiOlxuICAgICAgICByZXR1cm4gXCJcXHRcIjtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICByZXR1cm4gXCJcXG5cIjtcbiAgICAgIGNhc2UgJ3YnOlxuICAgICAgICByZXR1cm4gY2goMTEpO1xuICAgICAgY2FzZSAnZic6XG4gICAgICAgIHJldHVybiBjaCgxMik7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgcmV0dXJuIGNoKDEzKTtcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gY2goMjcpO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHJldHVybiAnICc7XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiAnXCInO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHJldHVybiAnLyc7XG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgcmV0dXJuICdcXFxcJztcbiAgICAgIGNhc2UgJ04nOlxuICAgICAgICByZXR1cm4gY2goMHgwMDg1KTtcbiAgICAgIGNhc2UgJ18nOlxuICAgICAgICByZXR1cm4gY2goMHgwMEEwKTtcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gY2goMHgyMDI4KTtcbiAgICAgIGNhc2UgJ1AnOlxuICAgICAgICByZXR1cm4gY2goMHgyMDI5KTtcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gVXRpbHMudXRmOGNocihVdGlscy5oZXhEZWModmFsdWUuc3Vic3RyKDIsIDIpKSk7XG4gICAgICBjYXNlICd1JzpcbiAgICAgICAgcmV0dXJuIFV0aWxzLnV0ZjhjaHIoVXRpbHMuaGV4RGVjKHZhbHVlLnN1YnN0cigyLCA0KSkpO1xuICAgICAgY2FzZSAnVSc6XG4gICAgICAgIHJldHVybiBVdGlscy51dGY4Y2hyKFV0aWxzLmhleERlYyh2YWx1ZS5zdWJzdHIoMiwgOCkpKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFVuZXNjYXBlcjtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbmVzY2FwZXI7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhdHRlcm4sIFV0aWxzLFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cblBhdHRlcm4gPSByZXF1aXJlKCcuL1BhdHRlcm4nKTtcblxuVXRpbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge31cblxuICBVdGlscy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUiA9IHt9O1xuXG4gIFV0aWxzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUiA9IHt9O1xuXG4gIFV0aWxzLlJFR0VYX1NQQUNFUyA9IC9cXHMrL2c7XG5cbiAgVXRpbHMuUkVHRVhfRElHSVRTID0gL15cXGQrJC87XG5cbiAgVXRpbHMuUkVHRVhfT0NUQUwgPSAvW14wLTddL2dpO1xuXG4gIFV0aWxzLlJFR0VYX0hFWEFERUNJTUFMID0gL1teYS1mMC05XS9naTtcblxuICBVdGlscy5QQVRURVJOX0RBVEUgPSBuZXcgUGF0dGVybignXicgKyAnKD88eWVhcj5bMC05XVswLTldWzAtOV1bMC05XSknICsgJy0oPzxtb250aD5bMC05XVswLTldPyknICsgJy0oPzxkYXk+WzAtOV1bMC05XT8pJyArICcoPzooPzpbVHRdfFsgXFx0XSspJyArICcoPzxob3VyPlswLTldWzAtOV0/KScgKyAnOig/PG1pbnV0ZT5bMC05XVswLTldKScgKyAnOig/PHNlY29uZD5bMC05XVswLTldKScgKyAnKD86XFwuKD88ZnJhY3Rpb24+WzAtOV0qKSk/JyArICcoPzpbIFxcdF0qKD88dHo+WnwoPzx0el9zaWduPlstK10pKD88dHpfaG91cj5bMC05XVswLTldPyknICsgJyg/OjooPzx0el9taW51dGU+WzAtOV1bMC05XSkpPykpPyk/JyArICckJywgJ2knKTtcblxuICBVdGlscy5MT0NBTF9USU1FWk9ORV9PRkZTRVQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG5cbiAgVXRpbHMudHJpbSA9IGZ1bmN0aW9uKHN0ciwgX2NoYXIpIHtcbiAgICB2YXIgcmVnZXhMZWZ0LCByZWdleFJpZ2h0O1xuICAgIGlmIChfY2hhciA9PSBudWxsKSB7XG4gICAgICBfY2hhciA9ICdcXFxccyc7XG4gICAgfVxuICAgIHJlZ2V4TGVmdCA9IHRoaXMuUkVHRVhfTEVGVF9UUklNX0JZX0NIQVJbX2NoYXJdO1xuICAgIGlmIChyZWdleExlZnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleExlZnQgPSBuZXcgUmVnRXhwKCdeJyArIF9jaGFyICsgJycgKyBfY2hhciArICcqJyk7XG4gICAgfVxuICAgIHJlZ2V4TGVmdC5sYXN0SW5kZXggPSAwO1xuICAgIHJlZ2V4UmlnaHQgPSB0aGlzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUltfY2hhcl07XG4gICAgaWYgKHJlZ2V4UmlnaHQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5SRUdFWF9SSUdIVF9UUklNX0JZX0NIQVJbX2NoYXJdID0gcmVnZXhSaWdodCA9IG5ldyBSZWdFeHAoX2NoYXIgKyAnJyArIF9jaGFyICsgJyokJyk7XG4gICAgfVxuICAgIHJlZ2V4UmlnaHQubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhMZWZ0LCAnJykucmVwbGFjZShyZWdleFJpZ2h0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMubHRyaW0gPSBmdW5jdGlvbihzdHIsIF9jaGFyKSB7XG4gICAgdmFyIHJlZ2V4TGVmdDtcbiAgICBpZiAoX2NoYXIgPT0gbnVsbCkge1xuICAgICAgX2NoYXIgPSAnXFxcXHMnO1xuICAgIH1cbiAgICByZWdleExlZnQgPSB0aGlzLlJFR0VYX0xFRlRfVFJJTV9CWV9DSEFSW19jaGFyXTtcbiAgICBpZiAocmVnZXhMZWZ0ID09IG51bGwpIHtcbiAgICAgIHRoaXMuUkVHRVhfTEVGVF9UUklNX0JZX0NIQVJbX2NoYXJdID0gcmVnZXhMZWZ0ID0gbmV3IFJlZ0V4cCgnXicgKyBfY2hhciArICcnICsgX2NoYXIgKyAnKicpO1xuICAgIH1cbiAgICByZWdleExlZnQubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhMZWZ0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMucnRyaW0gPSBmdW5jdGlvbihzdHIsIF9jaGFyKSB7XG4gICAgdmFyIHJlZ2V4UmlnaHQ7XG4gICAgaWYgKF9jaGFyID09IG51bGwpIHtcbiAgICAgIF9jaGFyID0gJ1xcXFxzJztcbiAgICB9XG4gICAgcmVnZXhSaWdodCA9IHRoaXMuUkVHRVhfUklHSFRfVFJJTV9CWV9DSEFSW19jaGFyXTtcbiAgICBpZiAocmVnZXhSaWdodCA9PSBudWxsKSB7XG4gICAgICB0aGlzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleFJpZ2h0ID0gbmV3IFJlZ0V4cChfY2hhciArICcnICsgX2NoYXIgKyAnKiQnKTtcbiAgICB9XG4gICAgcmVnZXhSaWdodC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleFJpZ2h0LCAnJyk7XG4gIH07XG5cbiAgVXRpbHMuaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICcwJyB8fCAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHx8IHRoaXMuaXNFbXB0eU9iamVjdCh2YWx1ZSk7XG4gIH07XG5cbiAgVXRpbHMuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGs7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICgoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbCh2YWx1ZSwgaykpIGNvbnRpbnVlO1xuICAgICAgICByZXN1bHRzLnB1c2goayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KSgpKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgVXRpbHMuc3ViU3RyQ291bnQgPSBmdW5jdGlvbihzdHJpbmcsIHN1YlN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICAgIHZhciBjLCBpLCBqLCBsZW4sIHJlZiwgc3VibGVuO1xuICAgIGMgPSAwO1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICAgIHN1YlN0cmluZyA9ICcnICsgc3ViU3RyaW5nO1xuICAgIGlmIChzdGFydCAhPSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2Uoc3RhcnQpO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBsZW5ndGgpO1xuICAgIH1cbiAgICBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuICAgIHN1YmxlbiA9IHN1YlN0cmluZy5sZW5ndGg7XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGxlbjsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICBpZiAoc3ViU3RyaW5nID09PSBzdHJpbmcuc2xpY2UoaSwgc3VibGVuKSkge1xuICAgICAgICBjKys7XG4gICAgICAgIGkgKz0gc3VibGVuIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH07XG5cbiAgVXRpbHMuaXNEaWdpdHMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuUkVHRVhfRElHSVRTLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHRoaXMuUkVHRVhfRElHSVRTLnRlc3QoaW5wdXQpO1xuICB9O1xuXG4gIFV0aWxzLm9jdERlYyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9PQ1RBTC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBwYXJzZUludCgoaW5wdXQgKyAnJykucmVwbGFjZSh0aGlzLlJFR0VYX09DVEFMLCAnJyksIDgpO1xuICB9O1xuXG4gIFV0aWxzLmhleERlYyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9IRVhBREVDSU1BTC5sYXN0SW5kZXggPSAwO1xuICAgIGlucHV0ID0gdGhpcy50cmltKGlucHV0KTtcbiAgICBpZiAoKGlucHV0ICsgJycpLnNsaWNlKDAsIDIpID09PSAnMHgnKSB7XG4gICAgICBpbnB1dCA9IChpbnB1dCArICcnKS5zbGljZSgyKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KChpbnB1dCArICcnKS5yZXBsYWNlKHRoaXMuUkVHRVhfSEVYQURFQ0lNQUwsICcnKSwgMTYpO1xuICB9O1xuXG4gIFV0aWxzLnV0ZjhjaHIgPSBmdW5jdGlvbihjKSB7XG4gICAgdmFyIGNoO1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgICBpZiAoMHg4MCA+IChjICU9IDB4MjAwMDAwKSkge1xuICAgICAgcmV0dXJuIGNoKGMpO1xuICAgIH1cbiAgICBpZiAoMHg4MDAgPiBjKSB7XG4gICAgICByZXR1cm4gY2goMHhDMCB8IGMgPj4gNikgKyBjaCgweDgwIHwgYyAmIDB4M0YpO1xuICAgIH1cbiAgICBpZiAoMHgxMDAwMCA+IGMpIHtcbiAgICAgIHJldHVybiBjaCgweEUwIHwgYyA+PiAxMikgKyBjaCgweDgwIHwgYyA+PiA2ICYgMHgzRikgKyBjaCgweDgwIHwgYyAmIDB4M0YpO1xuICAgIH1cbiAgICByZXR1cm4gY2goMHhGMCB8IGMgPj4gMTgpICsgY2goMHg4MCB8IGMgPj4gMTIgJiAweDNGKSArIGNoKDB4ODAgfCBjID4+IDYgJiAweDNGKSArIGNoKDB4ODAgfCBjICYgMHgzRik7XG4gIH07XG5cbiAgVXRpbHMucGFyc2VCb29sZWFuID0gZnVuY3Rpb24oaW5wdXQsIHN0cmljdCkge1xuICAgIHZhciBsb3dlcklucHV0O1xuICAgIGlmIChzdHJpY3QgPT0gbnVsbCkge1xuICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxvd2VySW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICdubycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChsb3dlcklucHV0ID09PSAnMCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gISFpbnB1dDtcbiAgfTtcblxuICBVdGlscy5pc051bWVyaWMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuUkVHRVhfU1BBQ0VTLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oaW5wdXQpICYmIGlucHV0LnJlcGxhY2UodGhpcy5SRUdFWF9TUEFDRVMsICcnKSAhPT0gJyc7XG4gIH07XG5cbiAgVXRpbHMuc3RyaW5nVG9EYXRlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIGRhdGUsIGRheSwgZnJhY3Rpb24sIGhvdXIsIGluZm8sIG1pbnV0ZSwgbW9udGgsIHNlY29uZCwgdHpfaG91ciwgdHpfbWludXRlLCB0el9vZmZzZXQsIHllYXI7XG4gICAgaWYgKCEoc3RyICE9IG51bGwgPyBzdHIubGVuZ3RoIDogdm9pZCAwKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGluZm8gPSB0aGlzLlBBVFRFUk5fREFURS5leGVjKHN0cik7XG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgeWVhciA9IHBhcnNlSW50KGluZm8ueWVhciwgMTApO1xuICAgIG1vbnRoID0gcGFyc2VJbnQoaW5mby5tb250aCwgMTApIC0gMTtcbiAgICBkYXkgPSBwYXJzZUludChpbmZvLmRheSwgMTApO1xuICAgIGlmIChpbmZvLmhvdXIgPT0gbnVsbCkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICBob3VyID0gcGFyc2VJbnQoaW5mby5ob3VyLCAxMCk7XG4gICAgbWludXRlID0gcGFyc2VJbnQoaW5mby5taW51dGUsIDEwKTtcbiAgICBzZWNvbmQgPSBwYXJzZUludChpbmZvLnNlY29uZCwgMTApO1xuICAgIGlmIChpbmZvLmZyYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIGZyYWN0aW9uID0gaW5mby5mcmFjdGlvbi5zbGljZSgwLCAzKTtcbiAgICAgIHdoaWxlIChmcmFjdGlvbi5sZW5ndGggPCAzKSB7XG4gICAgICAgIGZyYWN0aW9uICs9ICcwJztcbiAgICAgIH1cbiAgICAgIGZyYWN0aW9uID0gcGFyc2VJbnQoZnJhY3Rpb24sIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhY3Rpb24gPSAwO1xuICAgIH1cbiAgICBpZiAoaW5mby50eiAhPSBudWxsKSB7XG4gICAgICB0el9ob3VyID0gcGFyc2VJbnQoaW5mby50el9ob3VyLCAxMCk7XG4gICAgICBpZiAoaW5mby50el9taW51dGUgIT0gbnVsbCkge1xuICAgICAgICB0el9taW51dGUgPSBwYXJzZUludChpbmZvLnR6X21pbnV0ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHpfbWludXRlID0gMDtcbiAgICAgIH1cbiAgICAgIHR6X29mZnNldCA9ICh0el9ob3VyICogNjAgKyB0el9taW51dGUpICogNjAwMDA7XG4gICAgICBpZiAoJy0nID09PSBpbmZvLnR6X3NpZ24pIHtcbiAgICAgICAgdHpfb2Zmc2V0ICo9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uKSk7XG4gICAgaWYgKHR6X29mZnNldCkge1xuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gdHpfb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG4gIH07XG5cbiAgVXRpbHMuc3RyUmVwZWF0ID0gZnVuY3Rpb24oc3RyLCBudW1iZXIpIHtcbiAgICB2YXIgaSwgcmVzO1xuICAgIHJlcyA9ICcnO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbnVtYmVyKSB7XG4gICAgICByZXMgKz0gc3RyO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFV0aWxzLmdldFN0cmluZ0Zyb21GaWxlID0gZnVuY3Rpb24ocGF0aCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSwgZnMsIGosIGxlbjEsIG5hbWUsIHJlZiwgcmVxLCB4aHI7XG4gICAgaWYgKGNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgeGhyID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgIT09IG51bGwpIHtcbiAgICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgICAgIHJlZiA9IFtcIk1zeG1sMi5YTUxIVFRQLjYuMFwiLCBcIk1zeG1sMi5YTUxIVFRQLjMuMFwiLCBcIk1zeG1sMi5YTUxIVFRQXCIsIFwiTWljcm9zb2Z0LlhNTEhUVFBcIl07XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgbmFtZSA9IHJlZltqXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgeGhyID0gbmV3IEFjdGl2ZVhPYmplY3QobmFtZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHhociAhPSBudWxsKSB7XG4gICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgICAgICByZXR1cm4geGhyLnNlbmQobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcSA9IHJlcXVpcmU7XG4gICAgICBmcyA9IHJlcSgnZnMnKTtcbiAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmcy5yZWFkRmlsZShwYXRoLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhTdHJpbmcoZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFV0aWxzO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wZXIsIFBhcnNlciwgVXRpbHMsIFlhbWw7XG5cblBhcnNlciA9IHJlcXVpcmUoJy4vUGFyc2VyJyk7XG5cbkR1bXBlciA9IHJlcXVpcmUoJy4vRHVtcGVyJyk7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5ZYW1sID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBZYW1sKCkge31cblxuICBZYW1sLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3REZWNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdERlY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlcigpLnBhcnNlKGlucHV0LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgfTtcblxuICBZYW1sLnBhcnNlRmlsZSA9IGZ1bmN0aW9uKHBhdGgsIGNhbGxiYWNrLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgdmFyIGlucHV0O1xuICAgIGlmIChjYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gX3RoaXMucGFyc2UoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dCA9IFV0aWxzLmdldFN0cmluZ0Zyb21GaWxlKHBhdGgpO1xuICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFlhbWwuZHVtcCA9IGZ1bmN0aW9uKGlucHV0LCBpbmxpbmUsIGluZGVudCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHZhciB5YW1sO1xuICAgIGlmIChpbmxpbmUgPT0gbnVsbCkge1xuICAgICAgaW5saW5lID0gMjtcbiAgICB9XG4gICAgaWYgKGluZGVudCA9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSA0O1xuICAgIH1cbiAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9PSBudWxsKSB7XG4gICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RFbmNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdEVuY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICB5YW1sID0gbmV3IER1bXBlcigpO1xuICAgIHlhbWwuaW5kZW50YXRpb24gPSBpbmRlbnQ7XG4gICAgcmV0dXJuIHlhbWwuZHVtcChpbnB1dCwgaW5saW5lLCAwLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgfTtcblxuICBZYW1sLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGlucHV0LCBpbmxpbmUsIGluZGVudCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2Rlcikge1xuICAgIHJldHVybiB0aGlzLmR1bXAoaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKTtcbiAgfTtcblxuICBZYW1sLmxvYWQgPSBmdW5jdGlvbihwYXRoLCBjYWxsYmFjaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRmlsZShwYXRoLCBjYWxsYmFjaywgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gIH07XG5cbiAgcmV0dXJuIFlhbWw7XG5cbn0pKCk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkge1xuICB3aW5kb3cuWUFNTCA9IFlhbWw7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuICB0aGlzLllBTUwgPSBZYW1sO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFlhbWw7XG4iLCJmdW5jdGlvbiBiYXNlMTBfdG9fYmFzZTY0KG51bSkge1xuICB2YXIgb3JkZXIgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG4gIHZhciBiYXNlID0gb3JkZXIubGVuZ3RoO1xuICB2YXIgc3RyID0gJycsIHI7XG4gIHdoaWxlIChudW0pIHtcbiAgICAgIHIgPSBudW0gJSBiYXNlXG4gICAgICBudW0gLT0gcjtcbiAgICAgIG51bSAvPSBiYXNlO1xuICAgICAgc3RyID0gb3JkZXIuY2hhckF0KHIpICsgc3RyO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2UxMF90b19iYXNlNjQ7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3VzZXJwaXhlbC9taWNyb211c3RhY2hlL2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXIuanNcblxuLyoqXG4gKiBAY2FsbGJhY2sgUmVzb2x2ZXJGblxuICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWUgLSB2YXJpYWJsZSBuYW1lIGJlZm9yZSBiZWluZyBwYXJzZWQuXG4gKiAgICAgICAgRm9yIGV4YW1wbGU6IHthLmIuY30gLT4gICdhLmIuYycsIHsgIHggIH0gLT4gJ3gnXG4gKiBAcGFyYW0ge09iamVjdH0gdmlldyAtIHRoZSB2aWV3IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgdG8gLnJlbmRlcigpIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxib29sZWFufE9iamVjdHx1bmRlZmluZWR9IHRoZSB2YWx1ZSB0byBiZVxuICogICAgICAgIGludGVycG9sYXRlZC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdW5kZWZpbmVkLCB0aGUgdmFsdWUgcmVzb2x1dGlvblxuICogICAgICAgIGFsZ29yaXRobSB3aWxsIGdvIGFoZWFkIHdpdGggdGhlIGRlZmF1bHQgYmVoYXZpb3VyIChyZXNvbHZpbmcgdGhlXG4gKiAgICAgICAgdmFyaWFibGUgbmFtZSBmcm9tIHRoZSBwcm92aWRlZCBvYmplY3QpLlxuICovXG5cbmNvbnN0IFZBUl9NQVRDSF9SRUdFWCA9IC9cXHtcXHtcXHMqKC4qPylcXHMqXFx9XFx9L2c7XG5cbmZ1bmN0aW9uIF92YWx1ZVRvU3RyaW5nICh2YWx1ZSkge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICBjYXNlICdudW1iZXInOlxuICBjYXNlICdib29sZWFuJzpcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNhc2UgJ29iamVjdCc6XG4gICAgdHJ5IHtcbiAgICAgIC8vIG51bGwgaXMgYW4gb2JqZWN0IGJ1dCBpcyBmYWxzeS4gU3dhbGxvdyBpdC5cbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgcmV0dXJuICd7Li4ufSc7XG4gICAgfVxuICBkZWZhdWx0OlxuICAgICAvLyBBbnl0aGluZyBlbHNlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgLy8gRm9yIGV4YW1wbGU6IHVuZGVmaW5lZCwgU3ltYm9sLCBldGMuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgZ29lcyB0aHJvdWdoIGFuIG9iamVjdCB0cnlpbmcgdG8gcmVzb2x2ZSBhIHBhdGguXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlIC0gVGhlIG9iamVjdCB0byB0cmF2ZXJzZSAoaW4gZWFjaCByZWN1cnNpdmUgY2FsbCB3ZSBkaWcgaW50byB0aGlzIG9iamVjdClcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGggLSBBbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0cmF2ZXJzZSBvbmUtYnktb25lXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhdGhJbmRleD0wXSAtIFRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBwYXRoIGFycmF5XG4gKi9cbmZ1bmN0aW9uIF9yZWN1cnNpdmVQYXRoUmVzb2x2ZXIoc2NvcGUsIHBhdGgsIHBhdGhJbmRleCA9IDApIHtcbiAgaWYgKHR5cGVvZiBzY29wZSAhPT0gJ29iamVjdCcgfHwgc2NvcGUgPT09IG51bGwgfHwgc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHZhck5hbWUgPSBwYXRoW3BhdGhJbmRleF07XG4gIGNvbnN0IHZhbHVlID0gc2NvcGVbdmFyTmFtZV07XG5cbiAgaWYgKHBhdGhJbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgLy8gSXQncyBhIGxlYWYsIHJldHVybiB3aGF0ZXZlciBpdCBpc1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBfcmVjdXJzaXZlUGF0aFJlc29sdmVyKHZhbHVlLCBwYXRoLCArK3BhdGhJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZXNvbHZlcih2YXJOYW1lLCB2aWV3KSB7XG4gIHJldHVybiBfcmVjdXJzaXZlUGF0aFJlc29sdmVyKHZpZXcsIHZhck5hbWUuc3BsaXQoJy4nKSk7XG59XG5cbi8qKlxuICogUmVwbGFjZXMgZXZlcnkge3t2YXJpYWJsZX19IGluc2lkZSB0aGUgdGVtcGxhdGUgd2l0aCB2YWx1ZXMgcHJvdmlkZWQgYnkgdmlldy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgY29udGFpbmluZyBvbmUgb3IgbW9yZSB7e3ZhcmlhYmxlTmFtZXN9fSBldmVyeSB2YXJpYWJsZVxuICogICAgICAgIG5hbWVzIHRoYXQgaXMgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIElmIGl0J3Mgb21pdHRlZCwgaXQnbGwgYmUgYXNzdW1lZCBhbiBlbXB0eSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3ZpZXc9e31dIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIGZvciBldmVyeSB2YXJpYWJsZSBuYW1lcyB0aGF0IGlzIHVzZWQgaW5cbiAqICAgICAgICB0aGUgdGVtcGxhdGUuIElmIGl0J3Mgb21pdHRlZCwgaXQnbGwgYmUgc2V0IHRvIGFuIGVtcHR5IG9iamVjdCBlc3NlbnRpYWxseSByZW1vdmluZyBhbGxcbiAqICAgICAgICB7e3Zhck5hbWV9fXMgaW4gdGhlIHRlbXBsYXRlLlxuICogQHBhcmFtIHtSZXNvbHZlckZufSBbcmVzb2x2ZXJdIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXG4gKiAgICAgICAgY2FsbGVkIGZvciBldmVyeSB7e3Zhck5hbWV9fSB0byBnZW5lcmF0ZSBhIHZhbHVlLiBJZiB0aGUgcmVzb2x2ZXIgdGhyb3dzIGFuIGVycm9yXG4gKiAgICAgICAgd2UnbGwgcHJvY2VlZCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlIHJlc29sdXRpb24gYWxnb3JpdGhtIChmaW5kIHRoZSB2YWx1ZSBmcm9tIHRoZSB2aWV3XG4gKiAgICAgICAgb2JqZWN0KS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGVtcGxhdGUgd2hlcmUgaXRzIHZhcmlhYmxlIG5hbWVzIHJlcGxhY2VkIHdpdGhcbiAqICAgICAgICBjb3JyZXNwb25kaW5nIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3QgZm91bmQgb3IgaXMgaW52YWxpZCwgaXQgd2lsbFxuICogICAgICAgIGJlIGFzc3VtZWQgZW1wdHkgc3RyaW5nICcnLiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0c2VsZiwgaXQnbGxcbiAqICAgICAgICBiZSBzdHJpbmdpZmllZCBieSBKU09OLlxuICogICAgICAgIEluIGNhc2Ugb2YgYSBKU09OIHN0cmluZ2lmeSBlcnJvciB0aGUgcmVzdWx0IHdpbGwgbG9vayBsaWtlIFwiey4uLn1cIi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldyA9IHt9LCByZXNvbHZlciA9IGRlZmF1bHRSZXNvbHZlcikge1xuICAvLyBkb24ndCB0b3VjaCB0aGUgdGVtcGxhdGUgaWYgaXQgaXMgbm90IGEgc3RyaW5nXG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoVkFSX01BVENIX1JFR0VYLCBmdW5jdGlvbiAobWF0Y2gsIHZhck5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gZGVmYXVsdFJlc29sdmVyIG5ldmVyIHRocm93c1xuICAgICAgcmV0dXJuIF92YWx1ZVRvU3RyaW5nKHJlc29sdmVyKHZhck5hbWUsIHZpZXcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB5b3VyIHJlc29sdmVyIHRocm93cywgd2UgcHJvY2VlZCB3aXRoIHRoZSBkZWZhdWx0IHJlc29sdmVyXG4gICAgICByZXR1cm4gX3ZhbHVlVG9TdHJpbmcoZGVmYXVsdFJlc29sdmVyKHZhck5hbWUsIHZpZXcpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFRhbWVyIG9uIDE5LzEwLzIwMTcuXG4gKi9cblxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0J1xuXG5TdGFnZS5kZWZpbmVXaWRnZXQoe1xuICBpZDogJ3Zpc3VhbC1pbnB1dCcsXG4gIG5hbWU6ICdWaXN1YWxpemF0aW9uIERlcGxveW1lbnQgQ3JlYXRpb24gSW5wdXQnLFxuICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6YXRpb24gRGVwbG95bWVudCBDcmVhdGlvbiBJbnB1dCBXaWRnZXQnLFxuICBpbml0aWFsV2lkdGg6IDEyLFxuICBpbml0aWFsSGVpZ2h0OiAxNixcbiAgY29sb3I6ICdwdXJwbGUnLFxuICBoYXNTdHlsZTogdHJ1ZSxcbiAgaXNSZWFjdDogdHJ1ZSxcblxuICBwZXJtaXNzaW9uOiBTdGFnZS5HZW5lcmljQ29uZmlnLkNVU1RPTV9XSURHRVRfUEVSTUlTU0lPTlMuQ1VTVE9NX0FMTCxcbiAgY2F0ZWdvcmllczogW1N0YWdlLkdlbmVyaWNDb25maWcuQ0FURUdPUlkuU1lTVEVNX1JFU09VUkNFU10sXG5cbiAgaW5pdGlhbENvbmZpZ3VyYXRpb246IFtcbiAgICB7IGlkOiAnYmx1ZXByaW50SWQnLCBuYW1lOiAnQmx1ZXByaW50IElkJywgZGVmYXVsdDogJ0NPVicsIHR5cGU6IFN0YWdlLkJhc2ljLkdlbmVyaWNGaWVsZC5TVFJJTkcgfSxcbiAgICAvLyB7IGlkOiAnZGVwbG95bWVudElkJywgbmFtZTogJ0RlcGxveW1lbnQgSWQnLCBkZWZhdWx0OiAnY2xvdWRpZnktZGVwbG95bWVudC12aXN1YWxpemF0aW9uLXdpZGdldC1zYW1wbGUnLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuU1RSSU5HIH0sXG4gICAgeyBpZDogJ2FsbG93TmFtZUVkaXQnLCBuYW1lOiAnQWxsb3cgVXNlciB0byBjaGFuZ2UgRGVwbG95bWVudCBOYW1lJywgZGVmYXVsdDogdHJ1ZSwgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLkJPT0xFQU5fVFlQRSB9LFxuXG4gICAgeyBpZDogJ29uRmluaXNoUmVkaXJlY3QnLCBuYW1lOiAnUmVkaXJlY3QgdG8gUGFnZSBvbiBmaW5pc2gnLCBkZWZhdWx0OiBmYWxzZSwgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLkJPT0xFQU5fVFlQRSB9LFxuICAgIHsgaWQ6ICd0ZW1wbGF0ZScsIG5hbWU6ICdUZW1wbGF0ZSB0byBSZWRpcmVjdCB0bywgYWZ0ZXIgZmluaXNoJywgZGVmYXVsdDogJ2RlcGxveW1lbnQnLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuU1RSSU5HX1RZUEUgfSxcblxuICAgIHsgaWQ6ICdkZXZNb2RlJywgbmFtZTogJ0VuYWJsZSBEZXZlbG9wZXJzIE1vZGUnLCBkZWZhdWx0OiBmYWxzZSwgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLkJPT0xFQU5fVFlQRSB9LFxuICBdLFxuXG4gIGZldGNoRGF0YSh3aWRnZXQsIHRvb2xib3gsIHBhcmFtcykge1xuICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnMoT2JqZWN0LmFzc2lnbih7IHRvb2xib3ggfSwgd2lkZ2V0LmNvbmZpZ3VyYXRpb24pKTtcblxuICAgIHJldHVybiBhY3Rpb25zLmRvR2V0SW5wdXREZXNjcmlwdG9yKCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAod2lkZ2V0LCBkYXRhLCBlcnJvciwgdG9vbGJveCkge1xuXG4gICAgaWYgKF8uaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIDxTdGFnZS5CYXNpYy5Mb2FkaW5nIC8+O1xuICAgIH1cblxuICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnMoT2JqZWN0LmFzc2lnbih7IHRvb2xib3ggfSwgd2lkZ2V0LmNvbmZpZ3VyYXRpb24pKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0XG4gICAgICAgIHdpZGdldD17d2lkZ2V0fVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICB0b29sYm94PXt0b29sYm94fVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cbn0pOyJdfQ==
