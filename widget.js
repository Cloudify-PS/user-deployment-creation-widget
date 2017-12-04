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

    _this.state = {
      form: {},
      visual_data: {},
      errors: {},
      success: null,
      deploymentTitle: 'admin deployment ' + user + '_' + blueprint + '_' + time64,
      loading: false,
      yamlError: null
    };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var data = this.props.data;
      this.props.toolbox.getEventBus().on('devmode:render', function (res) {
        return res.widgetId === _this2.props.widget.id && _this2.renderJSON2YAML(res.data);
      }, this);
      this.props.toolbox.getEventBus().trigger('devmode:update', data, this.props.widget);

      this.renderJSON2YAML(data);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.toolbox.getEventBus().off('devmode:render', this._devmode, this);
    }
  }, {
    key: 'renderJSON2YAML',
    value: function renderJSON2YAML(value) {
      this.setState({ yamlError: null });
      try {
        var data = _YAML2.default.parse(value);
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
      var _this3 = this;

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
                item.params.action === 'createDeployment' && _this3._createDeployment.call(_this3);
              }
            },
            item.params.label
          ),
          item.type === 'input' && React.createElement(Input, {
            fluid: true,
            type: item.params.isPassword ? 'password' : 'text',
            label: item.params.label,
            placeholder: item.params.placeholder,
            value: _this3.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this3.handleChange.call(_this3, item.id, options.value);
            }
          }),
          item.type === 'checkbox' && React.createElement(Checkbox, {
            label: item.params.label,
            checked: _this3.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this3.handleChange.call(_this3, item.id, options.checked);
            }
          }),
          item.type === 'toggle' && React.createElement(Checkbox, {
            toggle: true,
            label: item.params.label,
            checked: _this3.state.form[item.id],
            onChange: function onChange(proxy, options) {
              return _this3.handleChange.call(_this3, item.id, options.checked);
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
                  checked: _this3.state.form[item.id] === option.value,
                  onChange: function onChange(proxy, options) {
                    return _this3.handleChange.call(_this3, item.id, options.value);
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
              value: _this3.state.form[item.id],
              onChange: function onChange(proxy, options) {
                return _this3.handleChange.call(_this3, item.id, options.value);
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
              value: _this3.state.form[item.id],
              onChange: function onChange(proxy) {
                return _this3.handleChange.call(_this3, item.id, proxy.target.value);
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
              value: _this3.state.form[item.id],
              onChange: function onChange(value) {
                return _this3.handleChange.call(_this3, item.id, value);
              }
            })
          ),
          _this3.state.errors[item.id] && _this3.state.errors[item.id].split(',').includes('required') && React.createElement(
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
            return _this3.setState({ errors: (0, _assign2.default)(_this3.state.errors, { error: null }) });
          } },
        this.state.errors.error
      );

      var successMessage = this.state.success && React.createElement(
        Message,
        { color: 'green', onDismiss: function onDismiss() {
            return _this3.setState({ success: null });
          } },
        this.state.success
      );
      var yamlError = this.state.yamlError && React.createElement(
        Message,
        { color: 'yellow', onDismiss: function onDismiss() {
            return _this3.setState({ yamlError: null });
          } },
        this.state.yamlError
      );

      var allowNameEdit = this.props.widget.configuration.allowNameEdit;

      return React.createElement(
        'div',
        null,
        errorMessage,
        successMessage,
        yamlError,
        !this.state.success && allowNameEdit && React.createElement(Input, {
          fluid: true,
          type: 'text',
          label: 'Deployment Title',
          placeholder: 'Please Enter Your Deployment Title, should be unique name',
          value: this.state.deploymentTitle,
          onChange: function onChange(proxy, options) {
            return _this3.setState({ deploymentTitle: options.value });
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
  var _this4 = this;

  this.handleChange = function (id, value) {
    // TODO: before submit check for arrays to join them
    _this4.setState({ form: (0, _assign2.default)(_this4.state.form, (0, _defineProperty3.default)({}, id, value)) });
    console.log('form state', _this4.state.form);
  };

  this._createDeployment = function () {
    var errors = {};
    (0, _keys2.default)(_this4.state.form).forEach(function (item) {
      // TODO: add more validations methods, by default now is required
      if (_.isNil(_this4.state.form[item]) || _this4.state.form[item] === '') {
        errors[item] = 'required';
      }
    });
    if ((0, _keys2.default)(errors).length !== 0) {
      errors.error = 'Please check errors given below';
    }
    _this4.setState({ errors: errors });
    if ((0, _keys2.default)(errors).length === 0) {

      var blueprint = _this4.props.widget.configuration.blueprintId;
      var deployment = _this4.state.deploymentTitle;
      var privateResource = false;
      var skipPluginsValidation = false;

      var deployment_inputs = (0, _assign2.default)({}, _this4.state.form, { deployment_id: 'request_to_admin_' + deployment });

      var inputs = {
        'blueprint_id': 'service',
        'deployment_inputs': deployment_inputs
      };

      _this4.setState({ loading: true });
      var actions = new Stage.Common.BlueprintActions(_this4.props.toolbox);
      actions.doDeploy({ id: blueprint }, deployment, inputs, privateResource, skipPluginsValidation).then(function (deployment) {
        _this4.setState({ loading: false, errors: {}, success: 'Your request has been submitted and awaiting approval' });
        var onFinishRedirect = _this4.props.widget.configuration.onFinishRedirect;
        var template = _this4.props.widget.configuration.template;
        if (onFinishRedirect) {
          _this4.props.toolbox.drillDown(_this4.props.widget, template, { deploymentId: deployment.id }, deployment.id);
        }
      }).catch(function (err) {
        _this4.setState({ loading: false, errors: { error: err.message } });
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

  initialConfiguration: [{ id: 'blueprintId', name: 'Blueprint Id', default: 'COV', type: Stage.Basic.GenericField.STRING }, { id: 'allowNameEdit', name: 'Allow User to change Deployment Name', default: true, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: 'onFinishRedirect', name: 'Redirect to Page on finish', default: false, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: 'template', name: 'Template to Redirect to, after finish', default: 'deployment', type: Stage.Basic.GenericField.STRING_TYPE }],

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy9BY3Rpb25zLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvTGlzdC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL2NvbXBvbmVudHMvU2VsZWN0Qm94LmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9pbmRleC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0R1bXBlci5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0VzY2FwZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9FeGNlcHRpb24vRHVtcEV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZUV4Y2VwdGlvbi5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL1lBTUwvbGliL0V4Y2VwdGlvbi9QYXJzZU1vcmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9JbmxpbmUuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXJzZXIuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9QYXR0ZXJuLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVW5lc2NhcGVyLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvWUFNTC9saWIvVXRpbHMuanMiLCJ3aWRnZXRzL3Zpc3VhbElucHV0L3NyYy91dGlscy9ZQU1ML2xpYi9ZYW1sLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvdXRpbHMvYmFzZTEwdG82NC5qcyIsIndpZGdldHMvdmlzdWFsSW5wdXQvc3JjL3V0aWxzL211c3RhY2hlLmpzIiwid2lkZ2V0cy92aXN1YWxJbnB1dC9zcmMvd2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7O0FBSUE7OztJQUdxQixPO0FBQ25COzs7Ozs7O0FBT0EsbUJBQVksQ0FBWixFQUFlO0FBQUE7O0FBQ2IsU0FBSyxPQUFMLEdBQWUsRUFBRSxPQUFqQjtBQUNBLFNBQUssWUFBTCxHQUFvQixFQUFFLFlBQXRCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEVBQUUsV0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7c0NBT2tCO0FBQ2hCLGFBQU8sa0JBQVEsT0FBUixDQUFnQixDQUNyQjtBQUNFLFlBQUksSUFETjtBQUVFLGNBQU0sVUFGUjtBQUdFLGNBQU0sR0FIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLGtCQUREO0FBRU4sdUJBQWEsc0JBRlA7QUFHTixvQkFBVSxLQUhKO0FBSU4sbUJBQVMsQ0FDUCxFQUFFLE1BQU0sU0FBUixFQUFtQixPQUFPLFNBQTFCLEVBRE8sRUFFUCxFQUFFLE1BQU0sT0FBUixFQUFpQixPQUFPLE9BQXhCLEVBRk87QUFKSDtBQUxWLE9BRHFCLEVBZ0JyQjtBQUNFLFlBQUksV0FETjtBQUVFLGNBQU0sUUFGUjtBQUdFLGNBQU0sR0FIUjtBQUlFLGtCQUFVLEdBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFdBREQ7QUFFTixvQkFBVSxLQUZKO0FBR04sZ0JBQU0sVUFIQSxFQUdZO0FBQ2xCLGlCQUFPLE9BSkQsRUFJVTtBQUNoQixrQkFBUTtBQUxGO0FBTFYsT0FoQnFCLEVBNkJyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxhQUZIO0FBR04sdUJBQWEsd0JBSFA7QUFJTixzQkFBWTtBQUpOO0FBTFYsT0E3QnFCLEVBeUNyQjtBQUNFLFlBQUksYUFETjtBQUVFLGNBQU0sVUFGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLGFBREQ7QUFFTixtQkFBUztBQUZIO0FBTFYsT0F6Q3FCLEVBbURyQjtBQUNFLFlBQUksV0FETjtBQUVFLGNBQU0sUUFGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFdBREQ7QUFFTixtQkFBUztBQUZIO0FBTFYsT0FuRHFCLEVBNkRyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxLQUZIO0FBR04sbUJBQVMsQ0FDUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBRE8sRUFFUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBRk8sRUFHUCxFQUFFLE1BQU0sVUFBUixFQUFvQixPQUFPLEtBQTNCLEVBSE87QUFISDtBQUxWLE9BN0RxQixFQTRFckI7QUFDRSxZQUFJLGFBRE47QUFFRSxjQUFNLFVBRlI7QUFHRSxjQUFNLEVBSFI7QUFJRSxrQkFBVSxFQUpaO0FBS0UsZ0JBQVE7QUFDTixpQkFBTyxhQUREO0FBRU4sdUJBQWEsZ0JBRlA7QUFHTixvQkFBVSxJQUhKO0FBSU4sbUJBQVMsQ0FBQyxLQUFELENBSkg7QUFLTixtQkFBUyxDQUNQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFETyxFQUVQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFGTyxFQUdQLEVBQUUsTUFBTSxVQUFSLEVBQW9CLE9BQU8sS0FBM0IsRUFITztBQUxIO0FBTFYsT0E1RXFCLEVBNkZyQjtBQUNFLFlBQUksVUFETjtBQUVFLGNBQU0sT0FGUjtBQUdFLGNBQU0sRUFIUjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxnQkFBUTtBQUNOLGlCQUFPLFVBREQ7QUFFTixtQkFBUyxFQUZIO0FBR04sZ0JBQU0sQ0FIQTtBQUlOLGVBQUssQ0FKQztBQUtOLGVBQUs7QUFMQztBQUxWLE9BN0ZxQixFQTBHckI7QUFDRSxjQUFNLFNBRFI7QUFFRSxjQUFNLEVBRlI7QUFHRSxrQkFBVSxFQUhaO0FBSUUsZ0JBQVE7QUFDTixpQkFBTyxzQkFERDtBQUVOLGlCQUFPO0FBRkQ7QUFKVixPQTFHcUIsRUFtSHJCO0FBQ0UsWUFBSSxjQUROO0FBRUUsY0FBTSxXQUZSO0FBR0UsY0FBTSxHQUhSO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGdCQUFRO0FBQ04saUJBQU8sY0FERDtBQUVOLG9CQUFVLG1DQUZKO0FBR04saUJBQU8sQ0FIRCxFQUdJO0FBQ1YsbUJBQVMsSUFKSDtBQUtOLG1CQUFTLENBQ1AsRUFBRSxNQUFNLFNBQVIsRUFBbUIsT0FBTyxJQUExQixFQURPLEVBRVAsRUFBRSxNQUFNLE9BQVIsRUFBaUIsT0FBTyxJQUF4QixFQUZPLEVBR1AsRUFBRSxNQUFNLFFBQVIsRUFBa0IsT0FBTyxJQUF6QixFQUhPLEVBSVAsRUFBRSxNQUFNLE9BQVIsRUFBaUIsT0FBTyxJQUF4QixFQUpPO0FBTEg7QUFMVixPQW5IcUIsQ0FBaEIsQ0FBUDtBQXNJQTtBQUNEOzs7MkNBRW9EO0FBQUE7O0FBQUEsVUFBaEMsSUFBZ0MsdUVBQXpCLHVCQUF5Qjs7QUFDbkQsY0FBUSxHQUFSLENBQVksRUFBQyxVQUFELEVBQVo7QUFDQSxhQUFPLEtBQUssY0FBTCxDQUFvQixLQUFLLFdBQXpCLEVBQXNDLElBQXRDLENBQTJDLGlCQUFTO0FBQ3pELFlBQUksT0FBTyxNQUFNLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLElBQTNCLENBQWdDO0FBQUEsaUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFBQSxTQUFoQyxDQUFYO0FBQ0EsWUFBRyxJQUFILEVBQVE7QUFDTixpQkFBTyxNQUFLLGdCQUFMLENBQXNCLEtBQUssR0FBM0IsQ0FBUDtBQUNELFNBRkQsTUFFSztBQUNILGlCQUFPLGtCQUFRLE1BQVIsQ0FBa0IsSUFBbEIsaUJBQVA7QUFDRDtBQUNGLE9BUE0sQ0FBUDtBQVFEOzs7cUNBRWdCLFksRUFBYztBQUM3QixhQUFPLEtBQUssT0FBTCxDQUFhLFVBQWIsR0FBMEIsS0FBMUIsbUJBQWdELFlBQWhELCtCQUFQO0FBQ0Q7OzttQ0FFYyxXLEVBQWE7QUFDMUIsYUFBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLEtBQTNCLHFCQUFtRCxXQUFuRCxjQUFQO0FBQ0Q7OztxQ0FFZ0IsSSxFQUFNO0FBQ3JCLGFBQU8sS0FBSyxPQUFMLENBQWEsV0FBYixHQUEyQixLQUEzQixDQUFpQyxxQkFBakMsRUFBd0QsRUFBRSxVQUFGLEVBQXhELENBQVA7QUFDRDs7Ozs7a0JBckxrQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7O0lBSXFCLEk7OztBQUNuQjs7Ozs7QUFLQSxnQkFBWSxLQUFaLEVBQW1CLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUEsa0lBQ3BCLEtBRG9CLEVBQ2IsT0FEYTs7QUFBQTs7QUFHMUIsUUFBTSxPQUFPLE1BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsVUFBbkIsR0FBZ0Msa0JBQWhDLEVBQWI7QUFDQSxRQUFNLFlBQVksTUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxXQUFsRDtBQUNBLFFBQU0sU0FBUyx3QkFBVyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEdBQUwsS0FBYSxJQUF4QixDQUFYLENBQWY7O0FBRUEsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLEVBREs7QUFFWCxtQkFBYSxFQUZGO0FBR1gsY0FBUSxFQUhHO0FBSVgsZUFBUyxJQUpFO0FBS1gsNkNBQXFDLElBQXJDLFNBQTZDLFNBQTdDLFNBQTBELE1BTC9DO0FBTVgsZUFBUyxLQU5FO0FBT1gsaUJBQVc7QUFQQSxLQUFiO0FBUDBCO0FBZ0IzQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQXRCO0FBQ0EsV0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixXQUFuQixHQUFpQyxFQUFqQyxDQUFvQyxnQkFBcEMsRUFBc0Q7QUFBQSxlQUFPLElBQUksUUFBSixLQUFpQixPQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEVBQW5DLElBQXlDLE9BQUssZUFBTCxDQUFxQixJQUFJLElBQXpCLENBQWhEO0FBQUEsT0FBdEQsRUFBc0ksSUFBdEk7QUFDQSxXQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFdBQW5CLEdBQWlDLE9BQWpDLENBQXlDLGdCQUF6QyxFQUEyRCxJQUEzRCxFQUFpRSxLQUFLLEtBQUwsQ0FBVyxNQUE1RTs7QUFFQSxXQUFLLGVBQUwsQ0FBcUIsSUFBckI7QUFDRDs7OzJDQUNzQjtBQUNyQixXQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFdBQW5CLEdBQWlDLEdBQWpDLENBQXFDLGdCQUFyQyxFQUF1RCxLQUFLLFFBQTVELEVBQXNFLElBQXRFO0FBQ0Q7OztvQ0FFZSxLLEVBQU87QUFDckIsV0FBSyxRQUFMLENBQWMsRUFBRSxXQUFXLElBQWIsRUFBZDtBQUNBLFVBQUk7QUFDRixZQUFJLE9BQU8sZUFBSyxLQUFMLENBQVcsS0FBWCxDQUFYO0FBQ0EsYUFBSyxXQUFMLENBQWlCLElBQWpCO0FBQ0QsT0FIRCxDQUdFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsYUFBSyxRQUFMLENBQWMsRUFBRSxXQUFXLEVBQUUsT0FBZixFQUFkO0FBQ0Q7QUFDRjs7O2dDQUVXLEksRUFBTTs7QUFFaEI7QUFDQSxVQUFNLGNBQWMsS0FBSyxNQUFMLENBQVk7QUFBQSxlQUFLLENBQ25DLFFBRG1DLEVBRW5DLE9BRm1DLEVBR25DLFVBSG1DLEVBSW5DLFVBSm1DLEVBS25DLFFBTG1DLEVBTW5DLE9BTm1DLEVBT25DLFVBUG1DLEVBUW5DLE9BUm1DLEVBU25DLFNBVG1DLEVBVW5DLFdBVm1DLEVBV25DLFFBWG1DLENBVzFCLEVBQUUsSUFYd0IsQ0FBTDtBQUFBLE9BQVosQ0FBcEI7O0FBYUEsY0FBUSxHQUFSLENBQVksRUFBRSx3QkFBRixFQUFaOztBQUVBO0FBQ0Esa0JBQVksSUFBWixDQUFpQixVQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsZUFBVSxFQUFFLFFBQUYsR0FBYSxFQUFFLFFBQXpCO0FBQUEsT0FBakI7O0FBRUE7QUFDQSxVQUFJLE9BQU8sRUFBWDtBQUNBLGtCQUFZLE9BQVosQ0FBb0IsZ0JBQVE7QUFDMUIsWUFBSSxLQUFLLEVBQUwsSUFBVyxLQUFLLElBQUwsS0FBYyxRQUE3QixFQUF1QztBQUNyQyxlQUFLLEtBQUssRUFBVixJQUFnQixLQUFLLE1BQUwsQ0FBWSxPQUE1QjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFdBQUssUUFBTCxDQUFjLEVBQUUsVUFBRixFQUFRLHdCQUFSLEVBQWQ7QUFDRDs7Ozs7QUFvREQ7Ozs7OzZCQUtTO0FBQUE7O0FBQ1AsVUFBSSxLQUFLLEtBQUwsQ0FBVyxPQUFmLEVBQXdCO0FBQ3RCLGVBQU8sb0JBQUMsS0FBRCxDQUFPLEtBQVAsQ0FBYSxPQUFiLE9BQVA7QUFDRDs7QUFITSx5QkFLb0QsTUFBTSxLQUwxRDtBQUFBLFVBS0EsTUFMQSxnQkFLQSxNQUxBO0FBQUEsVUFLUSxLQUxSLGdCQUtRLEtBTFI7QUFBQSxVQUtlLFFBTGYsZ0JBS2UsUUFMZjtBQUFBLFVBS3lCLFFBTHpCLGdCQUt5QixRQUx6QjtBQUFBLFVBS21DLE9BTG5DLGdCQUttQyxPQUxuQztBQUFBLFVBSzRDLElBTDVDLGdCQUs0QyxJQUw1Qzs7QUFPUDs7OztBQUdBLFVBQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEdBQXZCLENBQTJCLFVBQUMsSUFBRCxFQUFPLEdBQVA7QUFBQSxlQUFlO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZixFQUEyQixLQUFLLEdBQWhDLEVBQXFDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxJQUFMLElBQWEsRUFBZCxJQUFvQixHQUFqQyxFQUE1QztBQUV2RCxlQUFLLElBQUwsS0FBYyxRQUFkLElBQTBCO0FBQUMsa0JBQUQ7QUFBQTtBQUN6QixxQkFBTyxDQUFDLEtBQUssTUFBTCxDQUFZLFFBREs7QUFFekIscUJBQU8sS0FBSyxNQUFMLENBQVksS0FGTTtBQUd6Qix3QkFBVSxLQUFLLE1BQUwsQ0FBWSxRQUhHO0FBSXpCLG9CQUFNLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEIsR0FBNEIsS0FBSyxNQUFMLENBQVksSUFKckI7QUFLekIsdUJBQVMsbUJBQU07QUFDYixxQkFBSyxNQUFMLENBQVksTUFBWixLQUF1QixrQkFBdkIsSUFBNkMsT0FBSyxpQkFBTCxDQUF1QixJQUF2QixRQUE3QztBQUNEO0FBUHdCO0FBU3hCLGlCQUFLLE1BQUwsQ0FBWTtBQVRZLFdBRjZCO0FBY3ZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUIsb0JBQUMsS0FBRDtBQUN4Qix1QkFEd0I7QUFFeEIsa0JBQU0sS0FBSyxNQUFMLENBQVksVUFBWixHQUF5QixVQUF6QixHQUFzQyxNQUZwQjtBQUd4QixtQkFBTyxLQUFLLE1BQUwsQ0FBWSxLQUhLO0FBSXhCLHlCQUFhLEtBQUssTUFBTCxDQUFZLFdBSkQ7QUFLeEIsbUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBTGlCO0FBTXhCLHNCQUFVLGtCQUFDLEtBQUQsRUFBUSxPQUFSO0FBQUEscUJBQW9CLE9BQUssWUFBTCxDQUFrQixJQUFsQixTQUE2QixLQUFLLEVBQWxDLEVBQXNDLFFBQVEsS0FBOUMsQ0FBcEI7QUFBQTtBQU5jLFlBZDhCO0FBdUJ2RCxlQUFLLElBQUwsS0FBYyxVQUFkLElBQTRCLG9CQUFDLFFBQUQ7QUFDM0IsbUJBQU8sS0FBSyxNQUFMLENBQVksS0FEUTtBQUUzQixxQkFBUyxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQUssRUFBckIsQ0FGa0I7QUFHM0Isc0JBQVUsa0JBQUMsS0FBRCxFQUFRLE9BQVI7QUFBQSxxQkFBb0IsT0FBSyxZQUFMLENBQWtCLElBQWxCLFNBQTZCLEtBQUssRUFBbEMsRUFBc0MsUUFBUSxPQUE5QyxDQUFwQjtBQUFBO0FBSGlCLFlBdkIyQjtBQTZCdkQsZUFBSyxJQUFMLEtBQWMsUUFBZCxJQUEwQixvQkFBQyxRQUFEO0FBQ3pCLHdCQUR5QjtBQUV6QixtQkFBTyxLQUFLLE1BQUwsQ0FBWSxLQUZNO0FBR3pCLHFCQUFTLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixDQUhnQjtBQUl6QixzQkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLHFCQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxRQUFRLE9BQTlDLENBQXBCO0FBQUE7QUFKZSxZQTdCNkI7QUFvQ3ZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUI7QUFBQTtBQUFBO0FBQ3hCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUR3QjtBQUV4QiwyQ0FGd0I7QUFHeEIsMkNBSHdCO0FBSXZCLGlCQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsTUFBRCxFQUFTLEdBQVQ7QUFBQSxxQkFBaUI7QUFBQTtBQUFBLGtCQUFLLEtBQUssR0FBVjtBQUN4QyxvQ0FBQyxRQUFEO0FBQ0UsNkJBREY7QUFFRSx3QkFBTSxLQUFLLEVBRmI7QUFHRSx5QkFBTyxPQUFPLElBSGhCO0FBSUUseUJBQU8sT0FBTyxLQUpoQjtBQUtFLDJCQUFTLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixNQUE2QixPQUFPLEtBTC9DO0FBTUUsNEJBQVUsa0JBQUMsS0FBRCxFQUFRLE9BQVI7QUFBQSwyQkFBb0IsT0FBSyxZQUFMLENBQWtCLElBQWxCLFNBQTZCLEtBQUssRUFBbEMsRUFBc0MsUUFBUSxLQUE5QyxDQUFwQjtBQUFBO0FBTlo7QUFEd0MsZUFBakI7QUFBQSxhQUF4QjtBQUp1QixXQXBDOEI7QUFvRHZELGVBQUssSUFBTCxLQUFjLFVBQWQsSUFBNEI7QUFBQTtBQUFBO0FBQzNCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUQyQjtBQUUzQiwyQ0FGMkI7QUFHM0IsMkNBSDJCO0FBSTNCLGdDQUFDLFFBQUQ7QUFDRSx5QkFERjtBQUVFLDZCQUZGO0FBR0Usd0JBQVUsS0FBSyxNQUFMLENBQVksUUFIeEI7QUFJRSwyQkFBYSxLQUFLLE1BQUwsQ0FBWSxXQUozQjtBQUtFLHVCQUFTLEtBQUssTUFBTCxDQUFZLE9BTHZCO0FBTUUscUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBTlQ7QUFPRSx3QkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLHVCQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxRQUFRLEtBQTlDLENBQXBCO0FBQUE7QUFQWjtBQUoyQixXQXBEMkI7QUFtRXZELGVBQUssSUFBTCxLQUFjLE9BQWQsSUFBeUI7QUFBQTtBQUFBO0FBQ3hCO0FBQUE7QUFBQTtBQUFJLG1CQUFLLE1BQUwsQ0FBWTtBQUFoQixhQUR3QjtBQUV4QiwyQ0FGd0I7QUFHeEIsMkNBSHdCO0FBSXhCO0FBQ0Usb0JBQUssT0FEUDtBQUVFLG9CQUFNLEtBQUssTUFBTCxDQUFZLElBQVosSUFBb0IsQ0FGNUI7QUFHRSxtQkFBSyxLQUFLLE1BQUwsQ0FBWSxHQUFaLElBQW1CLENBSDFCO0FBSUUsbUJBQUssS0FBSyxNQUFMLENBQVksR0FBWixJQUFtQixHQUoxQjtBQUtFLHFCQUFPLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxFQUFyQixDQUxUO0FBTUUsd0JBQVU7QUFBQSx1QkFBUyxPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsU0FBNkIsS0FBSyxFQUFsQyxFQUFzQyxNQUFNLE1BQU4sQ0FBYSxLQUFuRCxDQUFUO0FBQUEsZUFOWjtBQU9FLHFCQUFPLEVBQUUsT0FBTyxNQUFUO0FBUFQ7QUFKd0IsV0FuRThCO0FBa0Z2RCxlQUFLLElBQUwsS0FBYyxTQUFkLElBQTJCO0FBQUMsbUJBQUQ7QUFBQTtBQUMxQixxQkFBTyxLQUFLLE1BQUwsQ0FBWTtBQURPO0FBRXhCLGlCQUFLLE1BQUwsQ0FBWTtBQUZZLFdBbEY0QjtBQXNGdkQsZUFBSyxJQUFMLEtBQWMsV0FBZCxJQUE2QjtBQUFBO0FBQUE7QUFDNUI7QUFBQTtBQUFBO0FBQUksbUJBQUssTUFBTCxDQUFZO0FBQWhCLGFBRDRCO0FBRTVCLDJDQUY0QjtBQUV0QjtBQUNKLHFCQUFPLEtBQUssTUFBTCxDQUFZLEtBRGY7QUFFSix3QkFBVSxLQUFLLE1BQUwsQ0FBWSxRQUZsQjtBQUdKLHVCQUFTLEtBQUssTUFBTCxDQUFZLE9BSGpCO0FBSUoscUJBQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFLLEVBQXJCLENBSkg7QUFLSix3QkFBVTtBQUFBLHVCQUFTLE9BQUssWUFBTCxDQUFrQixJQUFsQixTQUE2QixLQUFLLEVBQWxDLEVBQXNDLEtBQXRDLENBQVQ7QUFBQTtBQUxOO0FBRnNCLFdBdEYwQjtBQWtHdEQsaUJBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBSyxFQUF2QixLQUNBLE9BQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBSyxFQUF2QixFQUEyQixLQUEzQixDQUFpQyxHQUFqQyxFQUFzQyxRQUF0QyxDQUErQyxVQUEvQyxDQURBLElBRUE7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQUE7QUFBa0MsaUJBQUssTUFBTCxDQUFZLEtBQVosSUFBcUIsT0FBdkQ7QUFBZ0UsZUFBaEU7QUFBQTtBQUFBO0FBcEdzRCxTQUFmO0FBQUEsT0FBM0IsQ0FBaEI7O0FBeUdBLFVBQU0sZUFBZSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEtBQWxCLElBQTRCO0FBQUMsZUFBRDtBQUFBLFVBQVMsT0FBTSxLQUFmLEVBQXFCLFdBQVc7QUFBQSxtQkFBTSxPQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsc0JBQWMsT0FBSyxLQUFMLENBQVcsTUFBekIsRUFBaUMsRUFBRSxPQUFPLElBQVQsRUFBakMsQ0FBVixFQUFkLENBQU47QUFBQSxXQUFoQztBQUM5QyxhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCO0FBRDRCLE9BQWpEOztBQUlBLFVBQU0saUJBQWlCLEtBQUssS0FBTCxDQUFXLE9BQVgsSUFBc0I7QUFBQyxlQUFEO0FBQUEsVUFBUyxPQUFNLE9BQWYsRUFBdUIsV0FBVztBQUFBLG1CQUFNLE9BQUssUUFBTCxDQUFjLEVBQUUsU0FBUyxJQUFYLEVBQWQsQ0FBTjtBQUFBLFdBQWxDO0FBQzFDLGFBQUssS0FBTCxDQUFXO0FBRCtCLE9BQTdDO0FBR0EsVUFBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0I7QUFBQyxlQUFEO0FBQUEsVUFBUyxPQUFNLFFBQWYsRUFBd0IsV0FBVztBQUFBLG1CQUFNLE9BQUssUUFBTCxDQUFjLEVBQUUsV0FBVyxJQUFiLEVBQWQsQ0FBTjtBQUFBLFdBQW5DO0FBQ3ZDLGFBQUssS0FBTCxDQUFXO0FBRDRCLE9BQTFDOztBQUlBLFVBQU0sZ0JBQWdCLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsYUFBbEIsQ0FBZ0MsYUFBdEQ7O0FBRUEsYUFBTztBQUFBO0FBQUE7QUFDSixvQkFESTtBQUVKLHNCQUZJO0FBR0osaUJBSEk7QUFLSixTQUFDLEtBQUssS0FBTCxDQUFXLE9BQVosSUFBdUIsYUFBdkIsSUFBd0Msb0JBQUMsS0FBRDtBQUN2QyxxQkFEdUM7QUFFdkMsZ0JBQU0sTUFGaUM7QUFHdkMsaUJBQU0sa0JBSGlDO0FBSXZDLHVCQUFZLDJEQUoyQjtBQUt2QyxpQkFBTyxLQUFLLEtBQUwsQ0FBVyxlQUxxQjtBQU12QyxvQkFBVSxrQkFBQyxLQUFELEVBQVEsT0FBUjtBQUFBLG1CQUFvQixPQUFLLFFBQUwsQ0FBYyxFQUFFLGlCQUFpQixRQUFRLEtBQTNCLEVBQWQsQ0FBcEI7QUFBQTtBQU42QixVQUxwQztBQWNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsNEJBQWY7QUFDRyxXQUFDLEtBQUssS0FBTCxDQUFXLE9BQVosSUFBdUI7QUFEMUI7QUFkSyxPQUFQO0FBa0JEOzs7RUFyUitCLE1BQU0sUyxHQVh4Qzs7Ozs7Ozs7T0F1RkUsWSxHQUFlLFVBQUMsRUFBRCxFQUFLLEtBQUwsRUFBZTtBQUM1QjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUUsTUFBTSxzQkFBYyxPQUFLLEtBQUwsQ0FBVyxJQUF6QixvQ0FBa0MsRUFBbEMsRUFBdUMsS0FBdkMsRUFBUixFQUFkO0FBQ0EsWUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixPQUFLLEtBQUwsQ0FBVyxJQUFyQztBQUNELEc7O09BRUQsaUIsR0FBb0IsWUFBTTtBQUN4QixRQUFJLFNBQVMsRUFBYjtBQUNBLHdCQUFZLE9BQUssS0FBTCxDQUFXLElBQXZCLEVBQTZCLE9BQTdCLENBQXFDLGdCQUFRO0FBQzNDO0FBQ0EsVUFBSSxFQUFFLEtBQUYsQ0FBUSxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQVIsS0FBa0MsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixNQUEwQixFQUFoRSxFQUFvRTtBQUNsRSxlQUFPLElBQVAsSUFBZSxVQUFmO0FBQ0Q7QUFDRixLQUxEO0FBTUEsUUFBSSxvQkFBWSxNQUFaLEVBQW9CLE1BQXBCLEtBQStCLENBQW5DLEVBQXNDO0FBQ3BDLGFBQU8sS0FBUCxHQUFlLGlDQUFmO0FBQ0Q7QUFDRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLGNBQUYsRUFBZDtBQUNBLFFBQUksb0JBQVksTUFBWixFQUFvQixNQUFwQixLQUErQixDQUFuQyxFQUFzQzs7QUFFcEMsVUFBTSxZQUFZLE9BQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsYUFBbEIsQ0FBZ0MsV0FBbEQ7QUFDQSxVQUFNLGFBQWEsT0FBSyxLQUFMLENBQVcsZUFBOUI7QUFDQSxVQUFNLGtCQUFrQixLQUF4QjtBQUNBLFVBQU0sd0JBQXdCLEtBQTlCOztBQUVBLFVBQU0sb0JBQW9CLHNCQUFjLEVBQWQsRUFBa0IsT0FBSyxLQUFMLENBQVcsSUFBN0IsRUFBbUMsRUFBQyxlQUFlLHNCQUFzQixVQUF0QyxFQUFuQyxDQUExQjs7QUFFQSxVQUFNLFNBQVM7QUFDYix3QkFBZ0IsU0FESDtBQUViLDZCQUFxQjtBQUZSLE9BQWY7O0FBTUEsYUFBSyxRQUFMLENBQWMsRUFBRSxTQUFTLElBQVgsRUFBZDtBQUNBLFVBQUksVUFBVSxJQUFJLE1BQU0sTUFBTixDQUFhLGdCQUFqQixDQUFrQyxPQUFLLEtBQUwsQ0FBVyxPQUE3QyxDQUFkO0FBQ0EsY0FBUSxRQUFSLENBQWlCLEVBQUUsSUFBSSxTQUFOLEVBQWpCLEVBQW9DLFVBQXBDLEVBQWdELE1BQWhELEVBQXdELGVBQXhELEVBQXlFLHFCQUF6RSxFQUNHLElBREgsQ0FDUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsZUFBSyxRQUFMLENBQWMsRUFBRSxTQUFTLEtBQVgsRUFBa0IsUUFBUSxFQUExQixFQUE4QixTQUFTLHVEQUF2QyxFQUFkO0FBQ0EsWUFBTSxtQkFBbUIsT0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxnQkFBekQ7QUFDQSxZQUFNLFdBQVcsT0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixhQUFsQixDQUFnQyxRQUFqRDtBQUNBLFlBQUksZ0JBQUosRUFBc0I7QUFDcEIsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBNkIsT0FBSyxLQUFMLENBQVcsTUFBeEMsRUFBZ0QsUUFBaEQsRUFBMEQsRUFBRSxjQUFjLFdBQVcsRUFBM0IsRUFBMUQsRUFBMkYsV0FBVyxFQUF0RztBQUNEO0FBQ0YsT0FSSCxFQVNHLEtBVEgsQ0FTUyxVQUFDLEdBQUQsRUFBUztBQUNkLGVBQUssUUFBTCxDQUFjLEVBQUUsU0FBUyxLQUFYLEVBQWtCLFFBQVEsRUFBRSxPQUFPLElBQUksT0FBYixFQUExQixFQUFkO0FBQ0QsT0FYSDtBQVlEO0FBQ0YsRzs7O2tCQTVIa0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7OztBQUdBOzs7O0lBSXFCLFM7OztBQUNuQjs7Ozs7QUFLQSxxQkFBWSxLQUFaLEVBQW1CLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUEsNElBQ3BCLEtBRG9CLEVBQ2IsT0FEYTs7QUFFMUIsVUFBSyxLQUFMLEdBQWE7QUFDWCxnQkFBVTtBQURDLEtBQWI7QUFGMEI7QUFLM0I7O0FBRUQ7Ozs7Ozs7Ozs2QkFLUztBQUFBLG1CQUMyQyxLQUFLLEtBRGhEO0FBQUEsVUFDRixPQURFLFVBQ0YsT0FERTtBQUFBLFVBQ08sUUFEUCxVQUNPLFFBRFA7QUFBQSxVQUNpQixRQURqQixVQUNpQixRQURqQjtBQUFBLFVBQzJCLEtBRDNCLFVBQzJCLEtBRDNCO0FBQUEsVUFDa0MsS0FEbEMsVUFDa0MsS0FEbEM7OztBQUdQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVyxxQkFBbUIsU0FBUyxDQUE1QixDQUFoQjtBQUNKLGdCQUFRLEdBQVIsQ0FBWSxVQUFDLElBQUQsRUFBTyxHQUFQO0FBQUEsaUJBQ1g7QUFDRSxpQkFBSyxHQURQO0FBRUUsdUJBQVcsQ0FBQyxNQUFELEVBQVUsS0FBSyxLQUFMLEtBQWUsS0FBZixJQUF3QixRQUFsQyxFQUE2QyxJQUE3QyxDQUFrRCxHQUFsRCxDQUZiO0FBR0UscUJBQVM7QUFBQSxxQkFBTSxLQUFLLEtBQUwsS0FBZSxLQUFmLElBQXdCLFNBQVMsS0FBSyxLQUFkLENBQTlCO0FBQUEsYUFIWDtBQUlFLHFDQUF5QixFQUFFLFFBQVEsd0JBQU8sUUFBUCxFQUFpQixJQUFqQixDQUFWO0FBSjNCLFlBRFc7QUFBQSxTQUFaO0FBREksT0FBUDtBQVNEOzs7RUE5Qm9DLE1BQU0sUyxHQVY3Qzs7Ozs7a0JBVXFCLFM7Ozs7O0FDVHJCLElBQUksT0FBTyxRQUFRLFlBQVIsQ0FBWDtBQUNBLE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLElBQUksTUFBSixFQUFZLE1BQVosRUFBb0IsS0FBcEI7O0FBRUEsUUFBUSxRQUFRLFNBQVIsQ0FBUjs7QUFFQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVBLFNBQVUsWUFBVztBQUNuQixXQUFTLE1BQVQsR0FBa0IsQ0FBRTs7QUFFcEIsU0FBTyxXQUFQLEdBQXFCLENBQXJCOztBQUVBLFNBQU8sU0FBUCxDQUFpQixJQUFqQixHQUF3QixVQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0Msc0JBQWhDLEVBQXdELGFBQXhELEVBQXVFO0FBQzdGLFFBQUksQ0FBSixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLGFBQXhDO0FBQ0EsUUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUyxDQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLENBQVQ7QUFDRDtBQUNELFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxhQUFTLEVBQVQ7QUFDQSxhQUFVLFNBQVMsTUFBTSxTQUFOLENBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLENBQVQsR0FBd0MsRUFBbEQ7QUFDQSxRQUFJLFVBQVUsQ0FBVixJQUFlLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWhDLElBQTRDLGlCQUFpQixJQUE3RCxJQUFxRSxNQUFNLE9BQU4sQ0FBYyxLQUFkLENBQXpFLEVBQStGO0FBQzdGLGdCQUFVLFNBQVMsT0FBTyxJQUFQLENBQVksS0FBWixFQUFtQixzQkFBbkIsRUFBMkMsYUFBM0MsQ0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixhQUFLLElBQUksQ0FBSixFQUFPLE1BQU0sTUFBTSxNQUF4QixFQUFnQyxJQUFJLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDO0FBQzVDLGtCQUFRLE1BQU0sQ0FBTixDQUFSO0FBQ0EsMEJBQWdCLFNBQVMsQ0FBVCxJQUFjLENBQWQsSUFBbUIsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBcEMsSUFBZ0QsTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFoRTtBQUNBLG9CQUFVLFNBQVMsR0FBVCxJQUFnQixnQkFBZ0IsR0FBaEIsR0FBc0IsSUFBdEMsSUFBOEMsS0FBSyxJQUFMLENBQVUsS0FBVixFQUFpQixTQUFTLENBQTFCLEVBQThCLGdCQUFnQixDQUFoQixHQUFvQixTQUFTLEtBQUssV0FBaEUsRUFBOEUsc0JBQTlFLEVBQXNHLGFBQXRHLENBQTlDLElBQXNLLGdCQUFnQixJQUFoQixHQUF1QixFQUE3TCxDQUFWO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTCxhQUFLLEdBQUwsSUFBWSxLQUFaLEVBQW1CO0FBQ2pCLGtCQUFRLE1BQU0sR0FBTixDQUFSO0FBQ0EsMEJBQWdCLFNBQVMsQ0FBVCxJQUFjLENBQWQsSUFBbUIsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBcEMsSUFBZ0QsTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFoRTtBQUNBLG9CQUFVLFNBQVMsT0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixzQkFBakIsRUFBeUMsYUFBekMsQ0FBVCxHQUFtRSxHQUFuRSxJQUEwRSxnQkFBZ0IsR0FBaEIsR0FBc0IsSUFBaEcsSUFBd0csS0FBSyxJQUFMLENBQVUsS0FBVixFQUFpQixTQUFTLENBQTFCLEVBQThCLGdCQUFnQixDQUFoQixHQUFvQixTQUFTLEtBQUssV0FBaEUsRUFBOEUsc0JBQTlFLEVBQXNHLGFBQXRHLENBQXhHLElBQWdPLGdCQUFnQixJQUFoQixHQUF1QixFQUF2UCxDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBTyxNQUFQO0FBQ0QsR0FsQ0Q7O0FBb0NBLFNBQU8sTUFBUDtBQUVELENBM0NRLEVBQVQ7O0FBNkNBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7Ozs7QUNwREE7QUFDQSxJQUFJLE9BQUosRUFBYSxPQUFiOztBQUVBLFVBQVUsUUFBUSxXQUFSLENBQVY7O0FBRUEsVUFBVyxZQUFXO0FBQ3BCLE1BQUksRUFBSjs7QUFFQSxXQUFTLE9BQVQsR0FBbUIsQ0FBRTs7QUFFckIsVUFBUSxhQUFSLEdBQXdCLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DLE1BQW5DLEVBQTJDLE1BQTNDLEVBQW1ELE1BQW5ELEVBQTJELE1BQTNELEVBQW1FLE1BQW5FLEVBQTJFLE1BQTNFLEVBQW1GLE1BQW5GLEVBQTJGLE1BQTNGLEVBQW1HLE1BQW5HLEVBQTJHLE1BQTNHLEVBQW1ILE1BQW5ILEVBQTJILE1BQTNILEVBQW1JLE1BQW5JLEVBQTJJLE1BQTNJLEVBQW1KLE1BQW5KLEVBQTJKLE1BQTNKLEVBQW1LLE1BQW5LLEVBQTJLLE1BQTNLLEVBQW1MLE1BQW5MLEVBQTJMLE1BQTNMLEVBQW1NLE1BQW5NLEVBQTJNLE1BQTNNLEVBQW1OLE1BQW5OLEVBQTJOLE1BQTNOLEVBQW1PLE1BQW5PLEVBQTJPLE1BQTNPLEVBQW1QLE1BQW5QLEVBQTJQLE1BQTNQLEVBQW1RLE1BQW5RLEVBQTJRLE1BQTNRLEVBQW1SLE1BQW5SLEVBQTJSLENBQUMsS0FBSyxPQUFPLFlBQWIsRUFBMkIsTUFBM0IsQ0FBM1IsRUFBK1QsR0FBRyxNQUFILENBQS9ULEVBQTJVLEdBQUcsTUFBSCxDQUEzVSxFQUF1VixHQUFHLE1BQUgsQ0FBdlYsQ0FBeEI7O0FBRUEsVUFBUSxZQUFSLEdBQXVCLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsT0FBckMsRUFBOEMsT0FBOUMsRUFBdUQsT0FBdkQsRUFBZ0UsT0FBaEUsRUFBeUUsT0FBekUsRUFBa0YsT0FBbEYsRUFBMkYsS0FBM0YsRUFBa0csS0FBbEcsRUFBeUcsS0FBekcsRUFBZ0gsS0FBaEgsRUFBdUgsS0FBdkgsRUFBOEgsS0FBOUgsRUFBcUksS0FBckksRUFBNEksT0FBNUksRUFBcUosT0FBckosRUFBOEosT0FBOUosRUFBdUssT0FBdkssRUFBZ0wsT0FBaEwsRUFBeUwsT0FBekwsRUFBa00sT0FBbE0sRUFBMk0sT0FBM00sRUFBb04sT0FBcE4sRUFBNk4sT0FBN04sRUFBc08sT0FBdE8sRUFBK08sT0FBL08sRUFBd1AsT0FBeFAsRUFBaVEsS0FBalEsRUFBd1EsT0FBeFEsRUFBaVIsT0FBalIsRUFBMFIsT0FBMVIsRUFBbVMsT0FBblMsRUFBNFMsS0FBNVMsRUFBbVQsS0FBblQsRUFBMFQsS0FBMVQsRUFBaVUsS0FBalUsQ0FBdkI7O0FBRUEsVUFBUSwyQkFBUixHQUF1QyxZQUFXO0FBQ2hELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxPQUFWLEVBQW1CLEdBQW5CO0FBQ0EsY0FBVSxFQUFWO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sUUFBUSxhQUFSLENBQXNCLE1BQTVDLEVBQW9ELEtBQUssR0FBTCxHQUFXLElBQUksR0FBZixHQUFxQixJQUFJLEdBQTdFLEVBQWtGLElBQUksS0FBSyxHQUFMLEdBQVcsRUFBRSxDQUFiLEdBQWlCLEVBQUUsQ0FBekcsRUFBNEc7QUFDMUcsY0FBUSxRQUFRLGFBQVIsQ0FBc0IsQ0FBdEIsQ0FBUixJQUFvQyxRQUFRLFlBQVIsQ0FBcUIsQ0FBckIsQ0FBcEM7QUFDRDtBQUNELFdBQU8sT0FBUDtBQUNELEdBUHFDLEVBQXRDOztBQVNBLFVBQVEsNEJBQVIsR0FBdUMsSUFBSSxPQUFKLENBQVksMkRBQVosQ0FBdkM7O0FBRUEsVUFBUSx3QkFBUixHQUFtQyxJQUFJLE9BQUosQ0FBWSxRQUFRLGFBQVIsQ0FBc0IsSUFBdEIsQ0FBMkIsR0FBM0IsRUFBZ0MsS0FBaEMsQ0FBc0MsSUFBdEMsRUFBNEMsSUFBNUMsQ0FBaUQsTUFBakQsQ0FBWixDQUFuQzs7QUFFQSxVQUFRLHNCQUFSLEdBQWlDLElBQUksT0FBSixDQUFZLG9DQUFaLENBQWpDOztBQUVBLFVBQVEscUJBQVIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCO0FBQzlDLFdBQU8sS0FBSyw0QkFBTCxDQUFrQyxJQUFsQyxDQUF1QyxLQUF2QyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLHNCQUFSLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjtBQUMvQyxRQUFJLE1BQUo7QUFDQSxhQUFTLEtBQUssd0JBQUwsQ0FBOEIsT0FBOUIsQ0FBc0MsS0FBdEMsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQ3JFLGFBQU8sVUFBUyxHQUFULEVBQWM7QUFDbkIsZUFBTyxNQUFNLDJCQUFOLENBQWtDLEdBQWxDLENBQVA7QUFDRCxPQUZEO0FBR0QsS0FKcUQsQ0FJbkQsSUFKbUQsQ0FBN0MsQ0FBVDtBQUtBLFdBQU8sTUFBTSxNQUFOLEdBQWUsR0FBdEI7QUFDRCxHQVJEOztBQVVBLFVBQVEscUJBQVIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCO0FBQzlDLFdBQU8sS0FBSyxzQkFBTCxDQUE0QixJQUE1QixDQUFpQyxLQUFqQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLHNCQUFSLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjtBQUMvQyxXQUFPLE1BQU0sTUFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFOLEdBQWtDLEdBQXpDO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLE9BQVA7QUFFRCxDQWhEUyxFQUFWOztBQWtEQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDdkRBO0FBQ0EsSUFBSSxhQUFKO0FBQUEsSUFDRSxTQUFTLFNBQVQsTUFBUyxDQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxPQUFLLElBQUksR0FBVCxJQUFnQixNQUFoQixFQUF3QjtBQUFFLFFBQUksUUFBUSxJQUFSLENBQWEsTUFBYixFQUFxQixHQUFyQixDQUFKLEVBQStCLE1BQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQTJCLEdBQUMsU0FBUyxJQUFULEdBQWdCO0FBQUUsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQTJCLEdBQUMsS0FBSyxTQUFMLEdBQWlCLE9BQU8sU0FBeEIsQ0FBbUMsTUFBTSxTQUFOLEdBQWtCLElBQUksSUFBSixFQUFsQixDQUE4QixNQUFNLFNBQU4sR0FBa0IsT0FBTyxTQUF6QixDQUFvQyxPQUFPLEtBQVA7QUFBZSxDQUQ1UjtBQUFBLElBRUUsVUFBVSxHQUFHLGNBRmY7O0FBSUEsZ0JBQWlCLFVBQVMsVUFBVCxFQUFxQjtBQUNwQyxTQUFPLGFBQVAsRUFBc0IsVUFBdEI7O0FBRUEsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFVBQWhDLEVBQTRDLE9BQTVDLEVBQXFEO0FBQ25ELFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Q7O0FBRUQsZ0JBQWMsU0FBZCxDQUF3QixRQUF4QixHQUFtQyxZQUFXO0FBQzVDLFFBQUssS0FBSyxVQUFMLElBQW1CLElBQXBCLElBQThCLEtBQUssT0FBTCxJQUFnQixJQUFsRCxFQUF5RDtBQUN2RCxhQUFPLHFCQUFxQixLQUFLLE9BQTFCLEdBQW9DLFNBQXBDLEdBQWdELEtBQUssVUFBckQsR0FBa0UsTUFBbEUsR0FBMkUsS0FBSyxPQUFoRixHQUEwRixLQUFqRztBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8scUJBQXFCLEtBQUssT0FBakM7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsU0FBTyxhQUFQO0FBRUQsQ0FuQmUsQ0FtQmIsS0FuQmEsQ0FBaEI7O0FBcUJBLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7QUMxQkE7QUFDQSxJQUFJLGNBQUo7QUFBQSxJQUNFLFNBQVMsU0FBVCxNQUFTLENBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUFFLE9BQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsUUFBSSxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLENBQUosRUFBK0IsTUFBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFBMkIsR0FBQyxTQUFTLElBQVQsR0FBZ0I7QUFBRSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFBMkIsR0FBQyxLQUFLLFNBQUwsR0FBaUIsT0FBTyxTQUF4QixDQUFtQyxNQUFNLFNBQU4sR0FBa0IsSUFBSSxJQUFKLEVBQWxCLENBQThCLE1BQU0sU0FBTixHQUFrQixPQUFPLFNBQXpCLENBQW9DLE9BQU8sS0FBUDtBQUFlLENBRDVSO0FBQUEsSUFFRSxVQUFVLEdBQUcsY0FGZjs7QUFJQSxpQkFBa0IsVUFBUyxVQUFULEVBQXFCO0FBQ3JDLFNBQU8sY0FBUCxFQUF1QixVQUF2Qjs7QUFFQSxXQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakMsRUFBNkMsT0FBN0MsRUFBc0Q7QUFDcEQsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRDs7QUFFRCxpQkFBZSxTQUFmLENBQXlCLFFBQXpCLEdBQW9DLFlBQVc7QUFDN0MsUUFBSyxLQUFLLFVBQUwsSUFBbUIsSUFBcEIsSUFBOEIsS0FBSyxPQUFMLElBQWdCLElBQWxELEVBQXlEO0FBQ3ZELGFBQU8sc0JBQXNCLEtBQUssT0FBM0IsR0FBcUMsU0FBckMsR0FBaUQsS0FBSyxVQUF0RCxHQUFtRSxNQUFuRSxHQUE0RSxLQUFLLE9BQWpGLEdBQTJGLEtBQWxHO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxzQkFBc0IsS0FBSyxPQUFsQztBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPLGNBQVA7QUFFRCxDQW5CZ0IsQ0FtQmQsS0FuQmMsQ0FBakI7O0FBcUJBLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7Ozs7QUMxQkE7QUFDQSxJQUFJLFNBQUo7QUFBQSxJQUNFLFNBQVMsU0FBVCxNQUFTLENBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUFFLE9BQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsUUFBSSxRQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLENBQUosRUFBK0IsTUFBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFBMkIsR0FBQyxTQUFTLElBQVQsR0FBZ0I7QUFBRSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFBMkIsR0FBQyxLQUFLLFNBQUwsR0FBaUIsT0FBTyxTQUF4QixDQUFtQyxNQUFNLFNBQU4sR0FBa0IsSUFBSSxJQUFKLEVBQWxCLENBQThCLE1BQU0sU0FBTixHQUFrQixPQUFPLFNBQXpCLENBQW9DLE9BQU8sS0FBUDtBQUFlLENBRDVSO0FBQUEsSUFFRSxVQUFVLEdBQUcsY0FGZjs7QUFJQSxZQUFhLFVBQVMsVUFBVCxFQUFxQjtBQUNoQyxTQUFPLFNBQVAsRUFBa0IsVUFBbEI7O0FBRUEsV0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLFVBQTVCLEVBQXdDLE9BQXhDLEVBQWlEO0FBQy9DLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Q7O0FBRUQsWUFBVSxTQUFWLENBQW9CLFFBQXBCLEdBQStCLFlBQVc7QUFDeEMsUUFBSyxLQUFLLFVBQUwsSUFBbUIsSUFBcEIsSUFBOEIsS0FBSyxPQUFMLElBQWdCLElBQWxELEVBQXlEO0FBQ3ZELGFBQU8saUJBQWlCLEtBQUssT0FBdEIsR0FBZ0MsU0FBaEMsR0FBNEMsS0FBSyxVQUFqRCxHQUE4RCxNQUE5RCxHQUF1RSxLQUFLLE9BQTVFLEdBQXNGLEtBQTdGO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxpQkFBaUIsS0FBSyxPQUE3QjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPLFNBQVA7QUFFRCxDQW5CVyxDQW1CVCxLQW5CUyxDQUFaOztBQXFCQSxPQUFPLE9BQVAsR0FBaUIsU0FBakI7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0EsSUFBSSxhQUFKO0FBQUEsSUFBbUIsT0FBbkI7QUFBQSxJQUE0QixNQUE1QjtBQUFBLElBQW9DLGNBQXBDO0FBQUEsSUFBb0QsU0FBcEQ7QUFBQSxJQUErRCxPQUEvRDtBQUFBLElBQXdFLFNBQXhFO0FBQUEsSUFBbUYsS0FBbkY7QUFBQSxJQUNFLFVBQVUsR0FBRyxPQUFILElBQWMsVUFBUyxJQUFULEVBQWU7QUFBRSxPQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsSUFBSSxLQUFLLE1BQXpCLEVBQWlDLElBQUksQ0FBckMsRUFBd0MsR0FBeEMsRUFBNkM7QUFBRSxRQUFJLEtBQUssSUFBTCxJQUFhLEtBQUssQ0FBTCxNQUFZLElBQTdCLEVBQW1DLE9BQU8sQ0FBUDtBQUFXLEdBQUMsT0FBTyxDQUFDLENBQVI7QUFBWSxDQURySjs7QUFHQSxVQUFVLFFBQVEsV0FBUixDQUFWOztBQUVBLFlBQVksUUFBUSxhQUFSLENBQVo7O0FBRUEsVUFBVSxRQUFRLFdBQVIsQ0FBVjs7QUFFQSxRQUFRLFFBQVEsU0FBUixDQUFSOztBQUVBLGlCQUFpQixRQUFRLDRCQUFSLENBQWpCOztBQUVBLFlBQVksUUFBUSx1QkFBUixDQUFaOztBQUVBLGdCQUFnQixRQUFRLDJCQUFSLENBQWhCOztBQUVBLFNBQVUsWUFBVztBQUNuQixXQUFTLE1BQVQsR0FBa0IsQ0FBRTs7QUFFcEIsU0FBTyxtQkFBUCxHQUE2QixzRUFBN0I7O0FBRUEsU0FBTyx5QkFBUCxHQUFtQyxJQUFJLE9BQUosQ0FBWSxXQUFaLENBQW5DOztBQUVBLFNBQU8scUJBQVAsR0FBK0IsSUFBSSxPQUFKLENBQVksTUFBTSxPQUFPLG1CQUF6QixDQUEvQjs7QUFFQSxTQUFPLCtCQUFQLEdBQXlDLElBQUksT0FBSixDQUFZLCtCQUFaLENBQXpDOztBQUVBLFNBQU8sNEJBQVAsR0FBc0MsRUFBdEM7O0FBRUEsU0FBTyxRQUFQLEdBQWtCLEVBQWxCOztBQUVBLFNBQU8sU0FBUCxHQUFtQixVQUFTLHNCQUFULEVBQWlDLGFBQWpDLEVBQWdEO0FBQ2pFLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixJQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxTQUFLLFFBQUwsQ0FBYyxzQkFBZCxHQUF1QyxzQkFBdkM7QUFDQSxTQUFLLFFBQUwsQ0FBYyxhQUFkLEdBQThCLGFBQTlCO0FBQ0QsR0FURDs7QUFXQSxTQUFPLEtBQVAsR0FBZSxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ3BFLFFBQUksT0FBSixFQUFhLE1BQWI7QUFDQSxRQUFJLDBCQUEwQixJQUE5QixFQUFvQztBQUNsQywrQkFBeUIsS0FBekI7QUFDRDtBQUNELFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsU0FBSyxRQUFMLENBQWMsc0JBQWQsR0FBdUMsc0JBQXZDO0FBQ0EsU0FBSyxRQUFMLENBQWMsYUFBZCxHQUE4QixhQUE5QjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGFBQU8sRUFBUDtBQUNEO0FBQ0QsWUFBUSxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQVI7QUFDQSxRQUFJLE1BQU0sTUFBTSxNQUFoQixFQUF3QjtBQUN0QixhQUFPLEVBQVA7QUFDRDtBQUNELGNBQVU7QUFDUiw4QkFBd0Isc0JBRGhCO0FBRVIscUJBQWUsYUFGUDtBQUdSLFNBQUc7QUFISyxLQUFWO0FBS0EsWUFBUSxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQVI7QUFDRSxXQUFLLEdBQUw7QUFDRSxpQkFBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsQ0FBVDtBQUNBLFVBQUUsUUFBUSxDQUFWO0FBQ0E7QUFDRixXQUFLLEdBQUw7QUFDRSxpQkFBUyxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIsT0FBekIsQ0FBVDtBQUNBLFVBQUUsUUFBUSxDQUFWO0FBQ0E7QUFDRjtBQUNFLGlCQUFTLEtBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixJQUF4QixFQUE4QixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTlCLEVBQTBDLE9BQTFDLENBQVQ7QUFWSjtBQVlBLFFBQUksS0FBSyx5QkFBTCxDQUErQixPQUEvQixDQUF1QyxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQXBCLENBQXZDLEVBQStELEVBQS9ELE1BQXVFLEVBQTNFLEVBQStFO0FBQzdFLFlBQU0sSUFBSSxjQUFKLENBQW1CLGlDQUFpQyxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQXBCLENBQWpDLEdBQTBELElBQTdFLENBQU47QUFDRDtBQUNELFdBQU8sTUFBUDtBQUNELEdBdENEOztBQXdDQSxTQUFPLElBQVAsR0FBYyxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ25FLFFBQUksR0FBSixFQUFTLE1BQVQsRUFBaUIsSUFBakI7QUFDQSxRQUFJLDBCQUEwQixJQUE5QixFQUFvQztBQUNsQywrQkFBeUIsS0FBekI7QUFDRDtBQUNELFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsYUFBTyxNQUFQO0FBQ0Q7QUFDRCxrQkFBYyxLQUFkLHVEQUFjLEtBQWQ7QUFDQSxRQUFJLFNBQVMsUUFBYixFQUF1QjtBQUNyQixVQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixlQUFPLE1BQU0sV0FBTixFQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ2hDLGlCQUFTLGNBQWMsS0FBZCxDQUFUO0FBQ0EsWUFBSSxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsSUFBK0IsVUFBVSxJQUE3QyxFQUFvRDtBQUNsRCxpQkFBTyxNQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQVA7QUFDRDtBQUNELFFBQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3RCLGFBQVEsUUFBUSxNQUFSLEdBQWlCLE9BQXpCO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sUUFBTixDQUFlLEtBQWYsQ0FBSixFQUEyQjtBQUN6QixhQUFRLFNBQVMsUUFBVCxHQUFvQixNQUFNLEtBQU4sR0FBYyxHQUFsQyxHQUF3QyxPQUFPLFNBQVMsS0FBVCxDQUFQLENBQWhEO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFKLEVBQTRCO0FBQzFCLGFBQVEsU0FBUyxRQUFULEdBQW9CLE1BQU0sS0FBTixHQUFjLEdBQWxDLEdBQXdDLE9BQU8sV0FBVyxLQUFYLENBQVAsQ0FBaEQ7QUFDRDtBQUNELFFBQUksU0FBUyxRQUFiLEVBQXVCO0FBQ3JCLGFBQVEsVUFBVSxLQUFWLEdBQWtCLE1BQWxCLEdBQTRCLFVBQVUsQ0FBQyxLQUFYLEdBQW1CLE9BQW5CLEdBQThCLE1BQU0sS0FBTixJQUFlLE1BQWYsR0FBd0IsS0FBMUY7QUFDRDtBQUNELFFBQUksUUFBUSxxQkFBUixDQUE4QixLQUE5QixDQUFKLEVBQTBDO0FBQ3hDLGFBQU8sUUFBUSxzQkFBUixDQUErQixLQUEvQixDQUFQO0FBQ0Q7QUFDRCxRQUFJLFFBQVEscUJBQVIsQ0FBOEIsS0FBOUIsQ0FBSixFQUEwQztBQUN4QyxhQUFPLFFBQVEsc0JBQVIsQ0FBK0IsS0FBL0IsQ0FBUDtBQUNEO0FBQ0QsUUFBSSxPQUFPLEtBQVgsRUFBa0I7QUFDaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLE1BQU0sWUFBTixDQUFtQixJQUFuQixDQUF3QixLQUF4QixDQUFKLEVBQW9DO0FBQ2xDLGFBQU8sTUFBTSxLQUFOLEdBQWMsR0FBckI7QUFDRDtBQUNELFFBQUksQ0FBQyxNQUFNLE1BQU0sV0FBTixFQUFQLE1BQWdDLE1BQWhDLElBQTBDLFFBQVEsR0FBbEQsSUFBeUQsUUFBUSxNQUFqRSxJQUEyRSxRQUFRLE9BQXZGLEVBQWdHO0FBQzlGLGFBQU8sTUFBTSxLQUFOLEdBQWMsR0FBckI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBbkREOztBQXFEQSxTQUFPLFVBQVAsR0FBb0IsVUFBUyxLQUFULEVBQWdCLHNCQUFoQixFQUF3QyxhQUF4QyxFQUF1RDtBQUN6RSxRQUFJLENBQUosRUFBTyxHQUFQLEVBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixHQUExQjtBQUNBLFFBQUksaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHNCQUFnQixJQUFoQjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsZUFBUyxFQUFUO0FBQ0EsV0FBSyxJQUFJLENBQUosRUFBTyxPQUFPLE1BQU0sTUFBekIsRUFBaUMsSUFBSSxJQUFyQyxFQUEyQyxHQUEzQyxFQUFnRDtBQUM5QyxjQUFNLE1BQU0sQ0FBTixDQUFOO0FBQ0EsZUFBTyxJQUFQLENBQVksS0FBSyxJQUFMLENBQVUsR0FBVixDQUFaO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sT0FBTyxJQUFQLENBQVksSUFBWixDQUFOLEdBQTBCLEdBQWpDO0FBQ0QsS0FQRCxNQU9PO0FBQ0wsZUFBUyxFQUFUO0FBQ0EsV0FBSyxHQUFMLElBQVksS0FBWixFQUFtQjtBQUNqQixjQUFNLE1BQU0sR0FBTixDQUFOO0FBQ0EsZUFBTyxJQUFQLENBQVksS0FBSyxJQUFMLENBQVUsR0FBVixJQUFpQixJQUFqQixHQUF3QixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQXBDO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sT0FBTyxJQUFQLENBQVksSUFBWixDQUFOLEdBQTBCLEdBQWpDO0FBQ0Q7QUFDRixHQXBCRDs7QUFzQkEsU0FBTyxXQUFQLEdBQXFCLFVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixnQkFBN0IsRUFBK0MsT0FBL0MsRUFBd0QsUUFBeEQsRUFBa0U7QUFDckYsUUFBSSxDQUFKLEVBQU8sZ0JBQVAsRUFBeUIsS0FBekIsRUFBZ0MsTUFBaEMsRUFBd0MsT0FBeEMsRUFBaUQsR0FBakQsRUFBc0QsSUFBdEQsRUFBNEQsTUFBNUQsRUFBb0UsR0FBcEU7QUFDQSxRQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsbUJBQWEsSUFBYjtBQUNEO0FBQ0QsUUFBSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUIseUJBQW1CLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbkI7QUFDRDtBQUNELFFBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ25CLGdCQUFVLElBQVY7QUFDRDtBQUNELFFBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixpQkFBVyxJQUFYO0FBQ0Q7QUFDRCxRQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNuQixnQkFBVTtBQUNSLGdDQUF3QixLQUFLLFFBQUwsQ0FBYyxzQkFEOUI7QUFFUix1QkFBZSxLQUFLLFFBQUwsQ0FBYyxhQUZyQjtBQUdSLFdBQUc7QUFISyxPQUFWO0FBS0Q7QUFDRCxRQUFJLFFBQVEsQ0FBWjtBQUNBLFFBQUksTUFBTSxPQUFPLE1BQVAsQ0FBYyxDQUFkLENBQU4sRUFBd0IsUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBK0IsR0FBL0IsS0FBdUMsQ0FBbkUsRUFBc0U7QUFDcEUsZUFBUyxLQUFLLGlCQUFMLENBQXVCLE1BQXZCLEVBQStCLE9BQS9CLENBQVQ7QUFDQSxVQUFJLFFBQVEsQ0FBWjtBQUNBLFVBQUksY0FBYyxJQUFsQixFQUF3QjtBQUN0QixjQUFNLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixFQUE2QixHQUE3QixDQUFOO0FBQ0EsWUFBSSxFQUFFLE9BQU8sSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFQLEVBQXNCLFFBQVEsSUFBUixDQUFhLFVBQWIsRUFBeUIsSUFBekIsS0FBa0MsQ0FBMUQsQ0FBSixFQUFrRTtBQUNoRSxnQkFBTSxJQUFJLGNBQUosQ0FBbUIsNEJBQTRCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBNUIsR0FBOEMsSUFBakUsQ0FBTjtBQUNEO0FBQ0Y7QUFDRixLQVRELE1BU087QUFDTCxVQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLGlCQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBVDtBQUNBLGFBQUssT0FBTyxNQUFaO0FBQ0EsaUJBQVMsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFUO0FBQ0EsWUFBSSxXQUFXLENBQUMsQ0FBaEIsRUFBbUI7QUFDakIsbUJBQVMsTUFBTSxLQUFOLENBQVksT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixNQUFoQixDQUFaLENBQVQ7QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMLDJCQUFtQixXQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBbkI7QUFDQSxrQkFBVSxLQUFLLDRCQUFMLENBQWtDLGdCQUFsQyxDQUFWO0FBQ0EsWUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsb0JBQVUsSUFBSSxPQUFKLENBQVksWUFBWSxnQkFBWixHQUErQixHQUEzQyxDQUFWO0FBQ0EsZUFBSyw0QkFBTCxDQUFrQyxnQkFBbEMsSUFBc0QsT0FBdEQ7QUFDRDtBQUNELFlBQUksUUFBUSxRQUFRLElBQVIsQ0FBYSxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWIsQ0FBWixFQUEyQztBQUN6QyxtQkFBUyxNQUFNLENBQU4sQ0FBVDtBQUNBLGVBQUssT0FBTyxNQUFaO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZ0JBQU0sSUFBSSxjQUFKLENBQW1CLG1DQUFtQyxNQUFuQyxHQUE0QyxJQUEvRCxDQUFOO0FBQ0Q7QUFDRjtBQUNELFVBQUksUUFBSixFQUFjO0FBQ1osaUJBQVMsS0FBSyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCLE9BQTVCLENBQVQ7QUFDRDtBQUNGO0FBQ0QsWUFBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLFdBQU8sTUFBUDtBQUNELEdBM0REOztBQTZEQSxTQUFPLGlCQUFQLEdBQTJCLFVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQjtBQUNuRCxRQUFJLENBQUosRUFBTyxLQUFQLEVBQWMsTUFBZDtBQUNBLFFBQUksUUFBUSxDQUFaO0FBQ0EsUUFBSSxFQUFFLFFBQVEsS0FBSyxxQkFBTCxDQUEyQixJQUEzQixDQUFnQyxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWhDLENBQVYsQ0FBSixFQUFpRTtBQUMvRCxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFtQyxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQW5DLEdBQXFELElBQW5FLENBQU47QUFDRDtBQUNELGFBQVMsTUFBTSxDQUFOLEVBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixNQUFNLENBQU4sRUFBUyxNQUFULEdBQWtCLENBQXJDLENBQVQ7QUFDQSxRQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsQ0FBZCxDQUFaLEVBQThCO0FBQzVCLGVBQVMsVUFBVSwwQkFBVixDQUFxQyxNQUFyQyxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsZUFBUyxVQUFVLDBCQUFWLENBQXFDLE1BQXJDLENBQVQ7QUFDRDtBQUNELFNBQUssTUFBTSxDQUFOLEVBQVMsTUFBZDtBQUNBLFlBQVEsQ0FBUixHQUFZLENBQVo7QUFDQSxXQUFPLE1BQVA7QUFDRCxHQWZEOztBQWlCQSxTQUFPLGFBQVAsR0FBdUIsVUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCO0FBQ2pELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxRQUFWLEVBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLEVBQWlDLEdBQWpDLEVBQXNDLEtBQXRDO0FBQ0EsYUFBUyxFQUFUO0FBQ0EsVUFBTSxTQUFTLE1BQWY7QUFDQSxRQUFJLFFBQVEsQ0FBWjtBQUNBLFNBQUssQ0FBTDtBQUNBLFdBQU8sSUFBSSxHQUFYLEVBQWdCO0FBQ2QsY0FBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLGNBQVEsU0FBUyxNQUFULENBQWdCLENBQWhCLENBQVI7QUFDRSxhQUFLLEdBQUw7QUFDRSxpQkFBTyxJQUFQLENBQVksS0FBSyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCLE9BQTdCLENBQVo7QUFDQSxjQUFJLFFBQVEsQ0FBWjtBQUNBO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sSUFBUCxDQUFZLEtBQUssWUFBTCxDQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFaO0FBQ0EsY0FBSSxRQUFRLENBQVo7QUFDQTtBQUNGLGFBQUssR0FBTDtBQUNFLGlCQUFPLE1BQVA7QUFDRixhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDQSxhQUFLLElBQUw7QUFDRTtBQUNGO0FBQ0UscUJBQVksQ0FBQyxNQUFNLFNBQVMsTUFBVCxDQUFnQixDQUFoQixDQUFQLE1BQStCLEdBQS9CLElBQXNDLFFBQVEsR0FBMUQ7QUFDQSxrQkFBUSxLQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUEzQixFQUF1QyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXZDLEVBQW1ELE9BQW5ELENBQVI7QUFDQSxjQUFJLFFBQVEsQ0FBWjtBQUNBLGNBQUksQ0FBQyxRQUFELElBQWEsT0FBTyxLQUFQLEtBQWlCLFFBQTlCLEtBQTJDLE1BQU0sT0FBTixDQUFjLElBQWQsTUFBd0IsQ0FBQyxDQUF6QixJQUE4QixNQUFNLE9BQU4sQ0FBYyxLQUFkLE1BQXlCLENBQUMsQ0FBbkcsQ0FBSixFQUEyRztBQUN6RyxnQkFBSTtBQUNGLHNCQUFRLEtBQUssWUFBTCxDQUFrQixNQUFNLEtBQU4sR0FBYyxHQUFoQyxDQUFSO0FBQ0QsYUFGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2Qsa0JBQUksS0FBSjtBQUNEO0FBQ0Y7QUFDRCxpQkFBTyxJQUFQLENBQVksS0FBWjtBQUNBLFlBQUUsQ0FBRjtBQTNCSjtBQTZCQSxRQUFFLENBQUY7QUFDRDtBQUNELFVBQU0sSUFBSSxTQUFKLENBQWMsa0NBQWtDLFFBQWhELENBQU47QUFDRCxHQXhDRDs7QUEwQ0EsU0FBTyxZQUFQLEdBQXNCLFVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQjtBQUMvQyxRQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixNQUF2QixFQUErQix1QkFBL0IsRUFBd0QsS0FBeEQ7QUFDQSxhQUFTLEVBQVQ7QUFDQSxVQUFNLFFBQVEsTUFBZDtBQUNBLFFBQUksUUFBUSxDQUFaO0FBQ0EsU0FBSyxDQUFMO0FBQ0EsOEJBQTBCLEtBQTFCO0FBQ0EsV0FBTyxJQUFJLEdBQVgsRUFBZ0I7QUFDZCxjQUFRLENBQVIsR0FBWSxDQUFaO0FBQ0EsY0FBUSxRQUFRLE1BQVIsQ0FBZSxDQUFmLENBQVI7QUFDRSxhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDQSxhQUFLLElBQUw7QUFDRSxZQUFFLENBQUY7QUFDQSxrQkFBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLG9DQUEwQixJQUExQjtBQUNBO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sTUFBUDtBQVRKO0FBV0EsVUFBSSx1QkFBSixFQUE2QjtBQUMzQixrQ0FBMEIsS0FBMUI7QUFDQTtBQUNEO0FBQ0QsWUFBTSxLQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsQ0FBMUIsRUFBNEMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUE1QyxFQUF3RCxPQUF4RCxFQUFpRSxLQUFqRSxDQUFOO0FBQ0EsVUFBSSxRQUFRLENBQVo7QUFDQSxhQUFPLEtBQVA7QUFDQSxhQUFPLElBQUksR0FBWCxFQUFnQjtBQUNkLGdCQUFRLENBQVIsR0FBWSxDQUFaO0FBQ0EsZ0JBQVEsUUFBUSxNQUFSLENBQWUsQ0FBZixDQUFSO0FBQ0UsZUFBSyxHQUFMO0FBQ0Usb0JBQVEsS0FBSyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQVI7QUFDQSxnQkFBSSxRQUFRLENBQVo7QUFDQSxnQkFBSSxPQUFPLEdBQVAsTUFBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMxQixxQkFBTyxHQUFQLElBQWMsS0FBZDtBQUNEO0FBQ0QsbUJBQU8sSUFBUDtBQUNBO0FBQ0YsZUFBSyxHQUFMO0FBQ0Usb0JBQVEsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLENBQVI7QUFDQSxnQkFBSSxRQUFRLENBQVo7QUFDQSxnQkFBSSxPQUFPLEdBQVAsTUFBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMxQixxQkFBTyxHQUFQLElBQWMsS0FBZDtBQUNEO0FBQ0QsbUJBQU8sSUFBUDtBQUNBO0FBQ0YsZUFBSyxHQUFMO0FBQ0EsZUFBSyxHQUFMO0FBQ0EsZUFBSyxJQUFMO0FBQ0U7QUFDRjtBQUNFLG9CQUFRLEtBQUssV0FBTCxDQUFpQixPQUFqQixFQUEwQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQTFCLEVBQXNDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBdEMsRUFBa0QsT0FBbEQsQ0FBUjtBQUNBLGdCQUFJLFFBQVEsQ0FBWjtBQUNBLGdCQUFJLE9BQU8sR0FBUCxNQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzFCLHFCQUFPLEdBQVAsSUFBYyxLQUFkO0FBQ0Q7QUFDRCxtQkFBTyxJQUFQO0FBQ0EsY0FBRSxDQUFGO0FBNUJKO0FBOEJBLFVBQUUsQ0FBRjtBQUNBLFlBQUksSUFBSixFQUFVO0FBQ1I7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxVQUFNLElBQUksU0FBSixDQUFjLGtDQUFrQyxPQUFoRCxDQUFOO0FBQ0QsR0FsRUQ7O0FBb0VBLFNBQU8sY0FBUCxHQUF3QixVQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEI7QUFDaEQsUUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixzQkFBaEIsRUFBd0MsU0FBeEMsRUFBbUQsVUFBbkQsRUFBK0QsU0FBL0QsRUFBMEUsYUFBMUUsRUFBeUYsR0FBekYsRUFBOEYsV0FBOUYsRUFBMkcsUUFBM0csRUFBcUgsYUFBckg7QUFDQSxhQUFTLE1BQU0sSUFBTixDQUFXLE1BQVgsQ0FBVDtBQUNBLGtCQUFjLE9BQU8sV0FBUCxFQUFkO0FBQ0EsWUFBUSxXQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxPQUFMO0FBQ0UsZUFBTyxLQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxLQUFQO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBTyxJQUFFLENBQVQ7QUFDRixXQUFLLE9BQUw7QUFDRSxlQUFPLEtBQVA7QUFDRjtBQUNFLG9CQUFZLFlBQVksTUFBWixDQUFtQixDQUFuQixDQUFaO0FBQ0EsZ0JBQVEsU0FBUjtBQUNFLGVBQUssR0FBTDtBQUNFLHlCQUFhLE9BQU8sT0FBUCxDQUFlLEdBQWYsQ0FBYjtBQUNBLGdCQUFJLGVBQWUsQ0FBQyxDQUFwQixFQUF1QjtBQUNyQiwwQkFBWSxXQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsMEJBQVksWUFBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLFVBQXJCLENBQVo7QUFDRDtBQUNELG9CQUFRLFNBQVI7QUFDRSxtQkFBSyxHQUFMO0FBQ0Usb0JBQUksZUFBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ3JCLHlCQUFPLFNBQVMsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBVCxDQUFQO0FBQ0Q7QUFDRCx1QkFBTyxJQUFQO0FBQ0YsbUJBQUssTUFBTDtBQUNFLHVCQUFPLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixDQUFQO0FBQ0YsbUJBQUssT0FBTDtBQUNFLHVCQUFPLE1BQU0sS0FBTixDQUFZLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBWixDQUFQO0FBQ0YsbUJBQUssT0FBTDtBQUNFLHVCQUFPLFNBQVMsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBVCxDQUFQO0FBQ0YsbUJBQUssUUFBTDtBQUNFLHVCQUFPLE1BQU0sWUFBTixDQUFtQixLQUFLLFdBQUwsQ0FBaUIsT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFqQixDQUFuQixFQUFzRCxLQUF0RCxDQUFQO0FBQ0YsbUJBQUssU0FBTDtBQUNFLHVCQUFPLFdBQVcsS0FBSyxXQUFMLENBQWlCLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBakIsQ0FBWCxDQUFQO0FBQ0YsbUJBQUssYUFBTDtBQUNFLHVCQUFPLE1BQU0sWUFBTixDQUFtQixNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQVAsQ0FBYSxFQUFiLENBQVosQ0FBbkIsQ0FBUDtBQUNGO0FBQ0Usb0JBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ25CLDRCQUFVO0FBQ1IsNENBQXdCLEtBQUssUUFBTCxDQUFjLHNCQUQ5QjtBQUVSLG1DQUFlLEtBQUssUUFBTCxDQUFjLGFBRnJCO0FBR1IsdUJBQUc7QUFISyxtQkFBVjtBQUtEO0FBQ0QsZ0NBQWdCLFFBQVEsYUFBeEIsRUFBdUMseUJBQXlCLFFBQVEsc0JBQXhFO0FBQ0Esb0JBQUksYUFBSixFQUFtQjtBQUNqQixrQ0FBZ0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFoQjtBQUNBLCtCQUFhLGNBQWMsT0FBZCxDQUFzQixHQUF0QixDQUFiO0FBQ0Esc0JBQUksZUFBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ3JCLDJCQUFPLGNBQWMsYUFBZCxFQUE2QixJQUE3QixDQUFQO0FBQ0QsbUJBRkQsTUFFTztBQUNMLCtCQUFXLE1BQU0sS0FBTixDQUFZLGNBQWMsS0FBZCxDQUFvQixhQUFhLENBQWpDLENBQVosQ0FBWDtBQUNBLHdCQUFJLEVBQUUsU0FBUyxNQUFULEdBQWtCLENBQXBCLENBQUosRUFBNEI7QUFDMUIsaUNBQVcsSUFBWDtBQUNEO0FBQ0QsMkJBQU8sY0FBYyxjQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsVUFBdkIsQ0FBZCxFQUFrRCxRQUFsRCxDQUFQO0FBQ0Q7QUFDRjtBQUNELG9CQUFJLHNCQUFKLEVBQTRCO0FBQzFCLHdCQUFNLElBQUksY0FBSixDQUFtQixtRUFBbkIsQ0FBTjtBQUNEO0FBQ0QsdUJBQU8sSUFBUDtBQTNDSjtBQTZDQTtBQUNGLGVBQUssR0FBTDtBQUNFLGdCQUFJLFNBQVMsT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFiLEVBQWlDO0FBQy9CLHFCQUFPLE1BQU0sTUFBTixDQUFhLE1BQWIsQ0FBUDtBQUNELGFBRkQsTUFFTyxJQUFJLE1BQU0sUUFBTixDQUFlLE1BQWYsQ0FBSixFQUE0QjtBQUNqQyxxQkFBTyxNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBSixFQUE2QjtBQUNsQyxxQkFBTyxXQUFXLE1BQVgsQ0FBUDtBQUNELGFBRk0sTUFFQTtBQUNMLHFCQUFPLE1BQVA7QUFDRDtBQUNEO0FBQ0YsZUFBSyxHQUFMO0FBQ0UsZ0JBQUksTUFBTSxRQUFOLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQzFCLG9CQUFNLE1BQU47QUFDQSxxQkFBTyxTQUFTLEdBQVQsQ0FBUDtBQUNBLGtCQUFJLFFBQVEsT0FBTyxJQUFQLENBQVosRUFBMEI7QUFDeEIsdUJBQU8sSUFBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPLEdBQVA7QUFDRDtBQUNGLGFBUkQsTUFRTyxJQUFJLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUFKLEVBQTZCO0FBQ2xDLHFCQUFPLFdBQVcsTUFBWCxDQUFQO0FBQ0QsYUFGTSxNQUVBLElBQUksS0FBSywrQkFBTCxDQUFxQyxJQUFyQyxDQUEwQyxNQUExQyxDQUFKLEVBQXVEO0FBQzVELHFCQUFPLFdBQVcsT0FBTyxPQUFQLENBQWUsR0FBZixFQUFvQixFQUFwQixDQUFYLENBQVA7QUFDRDtBQUNELG1CQUFPLE1BQVA7QUFDRixlQUFLLEdBQUw7QUFDRSxnQkFBSSxNQUFNLFFBQU4sQ0FBZSxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWYsQ0FBSixFQUFxQztBQUNuQyxrQkFBSSxRQUFRLE9BQU8sTUFBUCxDQUFjLENBQWQsQ0FBWixFQUE4QjtBQUM1Qix1QkFBTyxDQUFDLE1BQU0sTUFBTixDQUFhLE9BQU8sS0FBUCxDQUFhLENBQWIsQ0FBYixDQUFSO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsc0JBQU0sT0FBTyxLQUFQLENBQWEsQ0FBYixDQUFOO0FBQ0EsdUJBQU8sU0FBUyxHQUFULENBQVA7QUFDQSxvQkFBSSxRQUFRLE9BQU8sSUFBUCxDQUFaLEVBQTBCO0FBQ3hCLHlCQUFPLENBQUMsSUFBUjtBQUNELGlCQUZELE1BRU87QUFDTCx5QkFBTyxDQUFDLEdBQVI7QUFDRDtBQUNGO0FBQ0YsYUFaRCxNQVlPLElBQUksTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDbEMscUJBQU8sV0FBVyxNQUFYLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxLQUFLLCtCQUFMLENBQXFDLElBQXJDLENBQTBDLE1BQTFDLENBQUosRUFBdUQ7QUFDNUQscUJBQU8sV0FBVyxPQUFPLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCLENBQVgsQ0FBUDtBQUNEO0FBQ0QsbUJBQU8sTUFBUDtBQUNGO0FBQ0UsZ0JBQUksT0FBTyxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsQ0FBWCxFQUF1QztBQUNyQyxxQkFBTyxJQUFQO0FBQ0QsYUFGRCxNQUVPLElBQUksTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQUosRUFBNkI7QUFDbEMscUJBQU8sV0FBVyxNQUFYLENBQVA7QUFDRCxhQUZNLE1BRUEsSUFBSSxLQUFLLCtCQUFMLENBQXFDLElBQXJDLENBQTBDLE1BQTFDLENBQUosRUFBdUQ7QUFDNUQscUJBQU8sV0FBVyxPQUFPLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCLENBQVgsQ0FBUDtBQUNEO0FBQ0QsbUJBQU8sTUFBUDtBQTNHSjtBQWpCSjtBQStIRCxHQW5JRDs7QUFxSUEsU0FBTyxNQUFQO0FBRUQsQ0FoZFEsRUFBVDs7QUFrZEEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7Ozs7Ozs7OztBQ3BlQTtBQUNBLElBQUksTUFBSixFQUFZLGNBQVosRUFBNEIsU0FBNUIsRUFBdUMsTUFBdkMsRUFBK0MsT0FBL0MsRUFBd0QsS0FBeEQ7O0FBRUEsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFQSxVQUFVLFFBQVEsV0FBUixDQUFWOztBQUVBLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUEsaUJBQWlCLFFBQVEsNEJBQVIsQ0FBakI7O0FBRUEsWUFBWSxRQUFRLHVCQUFSLENBQVo7O0FBRUEsU0FBVSxZQUFXO0FBQ25CLFNBQU8sU0FBUCxDQUFpQix5QkFBakIsR0FBNkMsSUFBSSxPQUFKLENBQVksZ0lBQVosQ0FBN0M7O0FBRUEsU0FBTyxTQUFQLENBQWlCLHlCQUFqQixHQUE2QyxJQUFJLE9BQUosQ0FBWSxvR0FBWixDQUE3Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIscUJBQWpCLEdBQXlDLElBQUksT0FBSixDQUFZLDhDQUFaLENBQXpDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixvQkFBakIsR0FBd0MsSUFBSSxPQUFKLENBQVksK0JBQVosQ0FBeEM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLHdCQUFqQixHQUE0QyxJQUFJLE9BQUosQ0FBWSxhQUFhLE9BQU8sbUJBQXBCLEdBQTBDLGtEQUF0RCxDQUE1Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsb0JBQWpCLEdBQXdDLElBQUksT0FBSixDQUFZLGFBQWEsT0FBTyxtQkFBcEIsR0FBMEMsa0RBQXRELENBQXhDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixlQUFqQixHQUFtQyxJQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5DOztBQUVBLFNBQU8sU0FBUCxDQUFpQixxQkFBakIsR0FBeUMsSUFBSSxPQUFKLENBQVksS0FBWixDQUF6Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsc0JBQWpCLEdBQTBDLElBQUksT0FBSixDQUFZLFFBQVosQ0FBMUM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLG1CQUFqQixHQUF1QyxJQUFJLE9BQUosQ0FBWSwyQkFBWixFQUF5QyxHQUF6QyxDQUF2Qzs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsd0JBQWpCLEdBQTRDLElBQUksT0FBSixDQUFZLGNBQVosRUFBNEIsR0FBNUIsQ0FBNUM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLDZCQUFqQixHQUFpRCxJQUFJLE9BQUosQ0FBWSxpQkFBWixFQUErQixHQUEvQixDQUFqRDs7QUFFQSxTQUFPLFNBQVAsQ0FBaUIsMkJBQWpCLEdBQStDLElBQUksT0FBSixDQUFZLGlCQUFaLEVBQStCLEdBQS9CLENBQS9DOztBQUVBLFNBQU8sU0FBUCxDQUFpQixvQ0FBakIsR0FBd0QsRUFBeEQ7O0FBRUEsU0FBTyxTQUFQLENBQWlCLFlBQWpCLEdBQWdDLENBQWhDOztBQUVBLFNBQU8sU0FBUCxDQUFpQixnQkFBakIsR0FBb0MsQ0FBcEM7O0FBRUEsU0FBTyxTQUFQLENBQWlCLGVBQWpCLEdBQW1DLENBQW5DOztBQUVBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixTQUFLLE1BQUwsR0FBYyxVQUFVLElBQVYsR0FBaUIsTUFBakIsR0FBMEIsQ0FBeEM7QUFDQSxTQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0Q7O0FBRUQsU0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFVBQVMsS0FBVCxFQUFnQixzQkFBaEIsRUFBd0MsYUFBeEMsRUFBdUQ7QUFDOUUsUUFBSSxLQUFKLEVBQVcsY0FBWCxFQUEyQixLQUEzQixFQUFrQyxDQUFsQyxFQUFxQyxPQUFyQyxFQUE4QyxJQUE5QyxFQUFvRCxDQUFwRCxFQUF1RCxLQUF2RCxFQUE4RCxDQUE5RCxFQUFpRSxNQUFqRSxFQUF5RSxLQUF6RSxFQUFnRixDQUFoRixFQUFtRixDQUFuRixFQUFzRixHQUF0RixFQUEyRixDQUEzRixFQUE4RixPQUE5RixFQUF1RyxHQUF2RyxFQUE0RyxJQUE1RyxFQUFrSCxJQUFsSCxFQUF3SCxJQUF4SCxFQUE4SCxTQUE5SCxFQUF5SSxDQUF6SSxFQUE0SSxPQUE1SSxFQUFxSixTQUFySixFQUFnSyxDQUFoSyxFQUFtSyxJQUFuSyxFQUF5SyxNQUF6SyxFQUFpTCxVQUFqTCxFQUE2TCxNQUE3TCxFQUFxTSxHQUFyTSxFQUEwTSxJQUExTSxFQUFnTixJQUFoTixFQUFzTixPQUF0TixFQUErTixRQUEvTixFQUF5TyxHQUF6TyxFQUE4TyxNQUE5TztBQUNBLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxTQUFLLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQUssT0FBTCxDQUFhLEtBQWIsRUFBb0IsS0FBcEIsQ0FBMEIsSUFBMUIsQ0FBYjtBQUNBLFdBQU8sSUFBUDtBQUNBLGNBQVUsS0FBSyxZQUFmO0FBQ0EscUJBQWlCLEtBQWpCO0FBQ0EsV0FBTyxLQUFLLGNBQUwsRUFBUCxFQUE4QjtBQUM1QixVQUFJLEtBQUssa0JBQUwsRUFBSixFQUErQjtBQUM3QjtBQUNEO0FBQ0QsVUFBSSxTQUFTLEtBQUssV0FBTCxDQUFpQixDQUFqQixDQUFiLEVBQWtDO0FBQ2hDLGNBQU0sSUFBSSxjQUFKLENBQW1CLGlEQUFuQixFQUFzRSxLQUFLLG9CQUFMLEtBQThCLENBQXBHLEVBQXVHLEtBQUssV0FBNUcsQ0FBTjtBQUNEO0FBQ0QsY0FBUSxZQUFZLEtBQXBCO0FBQ0EsVUFBSSxTQUFTLEtBQUsscUJBQUwsQ0FBMkIsSUFBM0IsQ0FBZ0MsS0FBSyxXQUFyQyxDQUFiLEVBQWdFO0FBQzlELFlBQUksS0FBSyxlQUFMLEtBQXlCLE9BQTdCLEVBQXNDO0FBQ3BDLGdCQUFNLElBQUksY0FBSixDQUFtQixxREFBbkIsQ0FBTjtBQUNEO0FBQ0Qsa0JBQVUsS0FBSyxnQkFBZjtBQUNBLFlBQUksUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLGlCQUFPLEVBQVA7QUFDRDtBQUNELFlBQUssT0FBTyxLQUFQLElBQWdCLElBQWpCLEtBQTJCLFVBQVUsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixPQUFPLEtBQXRDLENBQXJDLENBQUosRUFBd0Y7QUFDdEYsa0JBQVEsUUFBUSxHQUFoQjtBQUNBLGlCQUFPLEtBQVAsR0FBZSxRQUFRLEtBQXZCO0FBQ0Q7QUFDRCxZQUFJLEVBQUUsT0FBTyxLQUFQLElBQWdCLElBQWxCLEtBQTJCLE9BQU8sTUFBTSxJQUFOLENBQVcsT0FBTyxLQUFsQixFQUF5QixHQUF6QixDQUFsQyxJQUFtRSxNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLE9BQS9CLENBQXVDLEdBQXZDLE1BQWdELENBQXZILEVBQTBIO0FBQ3hILGNBQUksS0FBSyxhQUFMLEdBQXFCLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBekMsSUFBOEMsQ0FBQyxLQUFLLDhCQUFMLEVBQW5ELEVBQTBGO0FBQ3hGLGdCQUFJLEtBQUssb0JBQUwsS0FBOEIsQ0FBbEM7QUFDQSxxQkFBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLENBQVQ7QUFDQSxtQkFBTyxJQUFQLEdBQWMsS0FBSyxJQUFuQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxPQUFPLEtBQVAsQ0FBYSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLEVBQTZCLElBQTdCLENBQWIsRUFBaUQsc0JBQWpELEVBQXlFLGFBQXpFLENBQVY7QUFDRCxXQUxELE1BS087QUFDTCxpQkFBSyxJQUFMLENBQVUsSUFBVjtBQUNEO0FBQ0YsU0FURCxNQVNPO0FBQ0wsY0FBSSxDQUFDLENBQUMsTUFBTSxPQUFPLFVBQWQsS0FBNkIsSUFBN0IsR0FBb0MsSUFBSSxNQUF4QyxHQUFpRCxLQUFLLENBQXZELE1BQThELFVBQVUsS0FBSyx3QkFBTCxDQUE4QixJQUE5QixDQUFtQyxPQUFPLEtBQTFDLENBQXhFLENBQUosRUFBK0g7QUFDN0gsZ0JBQUksS0FBSyxvQkFBTCxFQUFKO0FBQ0EscUJBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFUO0FBQ0EsbUJBQU8sSUFBUCxHQUFjLEtBQUssSUFBbkI7QUFDQSxvQkFBUSxPQUFPLEtBQWY7QUFDQSxxQkFBUyxLQUFLLHlCQUFMLEVBQVQ7QUFDQSxnQkFBSSxLQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQUosRUFBb0M7QUFDbEMsdUJBQVMsT0FBTyxLQUFLLGlCQUFMLENBQXVCLFNBQVMsT0FBTyxVQUFQLENBQWtCLE1BQTNCLEdBQW9DLENBQTNELEVBQThELElBQTlELENBQWhCO0FBQ0Q7QUFDRCxpQkFBSyxJQUFMLENBQVUsT0FBTyxLQUFQLENBQWEsS0FBYixFQUFvQixzQkFBcEIsRUFBNEMsYUFBNUMsQ0FBVjtBQUNELFdBVkQsTUFVTztBQUNMLGlCQUFLLElBQUwsQ0FBVSxLQUFLLFVBQUwsQ0FBZ0IsT0FBTyxLQUF2QixFQUE4QixzQkFBOUIsRUFBc0QsYUFBdEQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRixPQXBDRCxNQW9DTyxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFMLENBQTBCLElBQTFCLENBQStCLEtBQUssV0FBcEMsQ0FBVixLQUErRCxPQUFPLEdBQVAsQ0FBVyxPQUFYLENBQW1CLElBQW5CLE1BQTZCLENBQUMsQ0FBakcsRUFBb0c7QUFDekcsWUFBSSxLQUFLLGdCQUFMLEtBQTBCLE9BQTlCLEVBQXVDO0FBQ3JDLGdCQUFNLElBQUksY0FBSixDQUFtQixxREFBbkIsQ0FBTjtBQUNEO0FBQ0Qsa0JBQVUsS0FBSyxlQUFmO0FBQ0EsWUFBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU8sRUFBUDtBQUNEO0FBQ0QsZUFBTyxTQUFQLENBQWlCLHNCQUFqQixFQUF5QyxhQUF6QztBQUNBLFlBQUk7QUFDRixnQkFBTSxPQUFPLFdBQVAsQ0FBbUIsT0FBTyxHQUExQixDQUFOO0FBQ0QsU0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsY0FBSSxLQUFKO0FBQ0EsWUFBRSxVQUFGLEdBQWUsS0FBSyxvQkFBTCxLQUE4QixDQUE3QztBQUNBLFlBQUUsT0FBRixHQUFZLEtBQUssV0FBakI7QUFDQSxnQkFBTSxDQUFOO0FBQ0Q7QUFDRCxZQUFJLFNBQVMsR0FBYixFQUFrQjtBQUNoQixzQkFBWSxJQUFaO0FBQ0EsMkJBQWlCLElBQWpCO0FBQ0EsY0FBSSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQWYsS0FBeUIsSUFBekIsR0FBZ0MsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFoQyxHQUFvRCxLQUFLLENBQTFELE1BQWlFLENBQXJFLEVBQXdFO0FBQ3RFLHNCQUFVLE9BQU8sS0FBUCxDQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBVjtBQUNBLGdCQUFJLEtBQUssSUFBTCxDQUFVLE9BQVYsS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsb0JBQU0sSUFBSSxjQUFKLENBQW1CLGdCQUFnQixPQUFoQixHQUEwQixtQkFBN0MsRUFBa0UsS0FBSyxvQkFBTCxLQUE4QixDQUFoRyxFQUFtRyxLQUFLLFdBQXhHLENBQU47QUFDRDtBQUNELHVCQUFXLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBWDtBQUNBLGdCQUFJLFFBQU8sUUFBUCx1REFBTyxRQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLG9CQUFNLElBQUksY0FBSixDQUFtQixnRUFBbkIsRUFBcUYsS0FBSyxvQkFBTCxLQUE4QixDQUFuSCxFQUFzSCxLQUFLLFdBQTNILENBQU47QUFDRDtBQUNELGdCQUFJLG9CQUFvQixLQUF4QixFQUErQjtBQUM3QixtQkFBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sU0FBUyxNQUEvQixFQUF1QyxJQUFJLEdBQTNDLEVBQWdELElBQUksRUFBRSxDQUF0RCxFQUF5RDtBQUN2RCx3QkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNBLG9CQUFJLEtBQUssT0FBTyxPQUFPLENBQVAsQ0FBWixLQUEwQixJQUE5QixFQUFvQztBQUNsQyx1QkFBSyxJQUFMLElBQWEsS0FBYjtBQUNEO0FBQ0Y7QUFDRixhQVBELE1BT087QUFDTCxtQkFBSyxHQUFMLElBQVksUUFBWixFQUFzQjtBQUNwQix3QkFBUSxTQUFTLEdBQVQsQ0FBUjtBQUNBLG9CQUFJLEtBQUssR0FBTCxLQUFhLElBQWpCLEVBQXVCO0FBQ3JCLHVCQUFLLEdBQUwsSUFBWSxLQUFaO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsV0F4QkQsTUF3Qk87QUFDTCxnQkFBSyxPQUFPLEtBQVAsSUFBZ0IsSUFBakIsSUFBMEIsT0FBTyxLQUFQLEtBQWlCLEVBQS9DLEVBQW1EO0FBQ2pELHNCQUFRLE9BQU8sS0FBZjtBQUNELGFBRkQsTUFFTztBQUNMLHNCQUFRLEtBQUssaUJBQUwsRUFBUjtBQUNEO0FBQ0QsZ0JBQUksS0FBSyxvQkFBTCxLQUE4QixDQUFsQztBQUNBLHFCQUFTLElBQUksTUFBSixDQUFXLENBQVgsQ0FBVDtBQUNBLG1CQUFPLElBQVAsR0FBYyxLQUFLLElBQW5CO0FBQ0EscUJBQVMsT0FBTyxLQUFQLENBQWEsS0FBYixFQUFvQixzQkFBcEIsQ0FBVDtBQUNBLGdCQUFJLFFBQU8sTUFBUCx1REFBTyxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzlCLG9CQUFNLElBQUksY0FBSixDQUFtQixnRUFBbkIsRUFBcUYsS0FBSyxvQkFBTCxLQUE4QixDQUFuSCxFQUFzSCxLQUFLLFdBQTNILENBQU47QUFDRDtBQUNELGdCQUFJLGtCQUFrQixLQUF0QixFQUE2QjtBQUMzQixtQkFBSyxJQUFJLENBQUosRUFBTyxPQUFPLE9BQU8sTUFBMUIsRUFBa0MsSUFBSSxJQUF0QyxFQUE0QyxHQUE1QyxFQUFpRDtBQUMvQyw2QkFBYSxPQUFPLENBQVAsQ0FBYjtBQUNBLG9CQUFJLFFBQU8sVUFBUCx1REFBTyxVQUFQLE9BQXNCLFFBQTFCLEVBQW9DO0FBQ2xDLHdCQUFNLElBQUksY0FBSixDQUFtQiw4QkFBbkIsRUFBbUQsS0FBSyxvQkFBTCxLQUE4QixDQUFqRixFQUFvRixVQUFwRixDQUFOO0FBQ0Q7QUFDRCxvQkFBSSxzQkFBc0IsS0FBMUIsRUFBaUM7QUFDL0IsdUJBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxPQUFPLFdBQVcsTUFBbEMsRUFBMEMsSUFBSSxJQUE5QyxFQUFvRCxJQUFJLEVBQUUsQ0FBMUQsRUFBNkQ7QUFDM0QsNEJBQVEsV0FBVyxDQUFYLENBQVI7QUFDQSx3QkFBSSxPQUFPLENBQVAsQ0FBSjtBQUNBLHdCQUFJLENBQUMsS0FBSyxjQUFMLENBQW9CLENBQXBCLENBQUwsRUFBNkI7QUFDM0IsMkJBQUssQ0FBTCxJQUFVLEtBQVY7QUFDRDtBQUNGO0FBQ0YsaUJBUkQsTUFRTztBQUNMLHVCQUFLLEdBQUwsSUFBWSxVQUFaLEVBQXdCO0FBQ3RCLDRCQUFRLFdBQVcsR0FBWCxDQUFSO0FBQ0Esd0JBQUksQ0FBQyxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsQ0FBTCxFQUErQjtBQUM3QiwyQkFBSyxHQUFMLElBQVksS0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsYUF2QkQsTUF1Qk87QUFDTCxtQkFBSyxHQUFMLElBQVksTUFBWixFQUFvQjtBQUNsQix3QkFBUSxPQUFPLEdBQVAsQ0FBUjtBQUNBLG9CQUFJLENBQUMsS0FBSyxjQUFMLENBQW9CLEdBQXBCLENBQUwsRUFBK0I7QUFDN0IsdUJBQUssR0FBTCxJQUFZLEtBQVo7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLFNBeEVELE1Bd0VPLElBQUssT0FBTyxLQUFQLElBQWdCLElBQWpCLEtBQTJCLFVBQVUsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixPQUFPLEtBQXRDLENBQXJDLENBQUosRUFBd0Y7QUFDN0Ysa0JBQVEsUUFBUSxHQUFoQjtBQUNBLGlCQUFPLEtBQVAsR0FBZSxRQUFRLEtBQXZCO0FBQ0Q7QUFDRCxZQUFJLFNBQUosRUFBZSxDQUVkLENBRkQsTUFFTyxJQUFJLEVBQUUsT0FBTyxLQUFQLElBQWdCLElBQWxCLEtBQTJCLE9BQU8sTUFBTSxJQUFOLENBQVcsT0FBTyxLQUFsQixFQUF5QixHQUF6QixDQUFsQyxJQUFtRSxNQUFNLEtBQU4sQ0FBWSxPQUFPLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLE9BQS9CLENBQXVDLEdBQXZDLE1BQWdELENBQXZILEVBQTBIO0FBQy9ILGNBQUksQ0FBRSxLQUFLLGtCQUFMLEVBQUYsSUFBZ0MsQ0FBRSxLQUFLLDhCQUFMLEVBQXRDLEVBQThFO0FBQzVFLGdCQUFJLGtCQUFrQixLQUFLLEdBQUwsTUFBYyxLQUFLLENBQXpDLEVBQTRDO0FBQzFDLG1CQUFLLEdBQUwsSUFBWSxJQUFaO0FBQ0Q7QUFDRixXQUpELE1BSU87QUFDTCxnQkFBSSxLQUFLLG9CQUFMLEtBQThCLENBQWxDO0FBQ0EscUJBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFUO0FBQ0EsbUJBQU8sSUFBUCxHQUFjLEtBQUssSUFBbkI7QUFDQSxrQkFBTSxPQUFPLEtBQVAsQ0FBYSxLQUFLLGlCQUFMLEVBQWIsRUFBdUMsc0JBQXZDLEVBQStELGFBQS9ELENBQU47QUFDQSxnQkFBSSxrQkFBa0IsS0FBSyxHQUFMLE1BQWMsS0FBSyxDQUF6QyxFQUE0QztBQUMxQyxtQkFBSyxHQUFMLElBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixTQWRNLE1BY0E7QUFDTCxnQkFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBTyxLQUF2QixFQUE4QixzQkFBOUIsRUFBc0QsYUFBdEQsQ0FBTjtBQUNBLGNBQUksa0JBQWtCLEtBQUssR0FBTCxNQUFjLEtBQUssQ0FBekMsRUFBNEM7QUFDMUMsaUJBQUssR0FBTCxJQUFZLEdBQVo7QUFDRDtBQUNGO0FBQ0YsT0FuSE0sTUFtSEE7QUFDTCxvQkFBWSxLQUFLLEtBQUwsQ0FBVyxNQUF2QjtBQUNBLFlBQUksTUFBTSxTQUFOLElBQW9CLE1BQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQWQsQ0FBM0MsRUFBMEU7QUFDeEUsY0FBSTtBQUNGLG9CQUFRLE9BQU8sS0FBUCxDQUFhLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBYixFQUE0QixzQkFBNUIsRUFBb0QsYUFBcEQsQ0FBUjtBQUNELFdBRkQsQ0FFRSxPQUFPLEtBQVAsRUFBYztBQUNkLGdCQUFJLEtBQUo7QUFDQSxjQUFFLFVBQUYsR0FBZSxLQUFLLG9CQUFMLEtBQThCLENBQTdDO0FBQ0EsY0FBRSxPQUFGLEdBQVksS0FBSyxXQUFqQjtBQUNBLGtCQUFNLENBQU47QUFDRDtBQUNELGNBQUksUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZ0JBQUksaUJBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLHNCQUFRLE1BQU0sQ0FBTixDQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsbUJBQUssR0FBTCxJQUFZLEtBQVosRUFBbUI7QUFDakIsd0JBQVEsTUFBTSxHQUFOLENBQVI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxnQkFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsTUFBTSxPQUFOLENBQWMsR0FBZCxNQUF1QixDQUF4RCxFQUEyRDtBQUN6RCxxQkFBTyxFQUFQO0FBQ0EsbUJBQUssSUFBSSxDQUFKLEVBQU8sT0FBTyxNQUFNLE1BQXpCLEVBQWlDLElBQUksSUFBckMsRUFBMkMsR0FBM0MsRUFBZ0Q7QUFDOUMsd0JBQVEsTUFBTSxDQUFOLENBQVI7QUFDQSxxQkFBSyxJQUFMLENBQVUsS0FBSyxJQUFMLENBQVUsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFWLENBQVY7QUFDRDtBQUNELHNCQUFRLElBQVI7QUFDRDtBQUNGO0FBQ0QsaUJBQU8sS0FBUDtBQUNELFNBNUJELE1BNEJPLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBbUIsTUFBbkIsQ0FBMEIsQ0FBMUIsQ0FBUixNQUEwQyxHQUExQyxJQUFpRCxTQUFTLEdBQTlELEVBQW1FO0FBQ3hFLGNBQUk7QUFDRixtQkFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0QsV0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsZ0JBQUksS0FBSjtBQUNBLGNBQUUsVUFBRixHQUFlLEtBQUssb0JBQUwsS0FBOEIsQ0FBN0M7QUFDQSxjQUFFLE9BQUYsR0FBWSxLQUFLLFdBQWpCO0FBQ0Esa0JBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUFDRCxjQUFNLElBQUksY0FBSixDQUFtQixrQkFBbkIsRUFBdUMsS0FBSyxvQkFBTCxLQUE4QixDQUFyRSxFQUF3RSxLQUFLLFdBQTdFLENBQU47QUFDRDtBQUNELFVBQUksS0FBSixFQUFXO0FBQ1QsWUFBSSxnQkFBZ0IsS0FBcEIsRUFBMkI7QUFDekIsZUFBSyxJQUFMLENBQVUsS0FBVixJQUFtQixLQUFLLEtBQUssTUFBTCxHQUFjLENBQW5CLENBQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsb0JBQVUsSUFBVjtBQUNBLGVBQUssR0FBTCxJQUFZLElBQVosRUFBa0I7QUFDaEIsc0JBQVUsR0FBVjtBQUNEO0FBQ0QsZUFBSyxJQUFMLENBQVUsS0FBVixJQUFtQixLQUFLLE9BQUwsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxRQUFJLE1BQU0sT0FBTixDQUFjLElBQWQsQ0FBSixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBeE9EOztBQTBPQSxTQUFPLFNBQVAsQ0FBaUIsb0JBQWpCLEdBQXdDLFlBQVc7QUFDakQsV0FBTyxLQUFLLGFBQUwsR0FBcUIsS0FBSyxNQUFqQztBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLHlCQUFqQixHQUE2QyxZQUFXO0FBQ3RELFdBQU8sS0FBSyxXQUFMLENBQWlCLE1BQWpCLEdBQTBCLE1BQU0sS0FBTixDQUFZLEtBQUssV0FBakIsRUFBOEIsR0FBOUIsRUFBbUMsTUFBcEU7QUFDRCxHQUZEOztBQUlBLFNBQU8sU0FBUCxDQUFpQixpQkFBakIsR0FBcUMsVUFBUyxXQUFULEVBQXNCLDJCQUF0QixFQUFtRDtBQUN0RixRQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLHdCQUFsQixFQUE0QyxTQUE1QyxFQUF1RCxjQUF2RCxFQUF1RSxxQkFBdkUsRUFBOEYsb0JBQTlGO0FBQ0EsUUFBSSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLG9CQUFjLElBQWQ7QUFDRDtBQUNELFFBQUksK0JBQStCLElBQW5DLEVBQXlDO0FBQ3ZDLG9DQUE4QixLQUE5QjtBQUNEO0FBQ0QsU0FBSyxjQUFMO0FBQ0EsUUFBSSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLGtCQUFZLEtBQUsseUJBQUwsRUFBWjtBQUNBLDZCQUF1QixLQUFLLGdDQUFMLENBQXNDLEtBQUssV0FBM0MsQ0FBdkI7QUFDQSxVQUFJLENBQUUsS0FBSyxrQkFBTCxFQUFGLElBQWdDLE1BQU0sU0FBdEMsSUFBbUQsQ0FBQyxvQkFBeEQsRUFBOEU7QUFDNUUsY0FBTSxJQUFJLGNBQUosQ0FBbUIsc0JBQW5CLEVBQTJDLEtBQUssb0JBQUwsS0FBOEIsQ0FBekUsRUFBNEUsS0FBSyxXQUFqRixDQUFOO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxrQkFBWSxXQUFaO0FBQ0Q7QUFDRCxXQUFPLENBQUMsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFNBQXZCLENBQUQsQ0FBUDtBQUNBLFFBQUksQ0FBQywyQkFBTCxFQUFrQztBQUNoQyxpQ0FBMkIsS0FBSyxnQ0FBTCxDQUFzQyxLQUFLLFdBQTNDLENBQTNCO0FBQ0Q7QUFDRCw0QkFBd0IsS0FBSyx5QkFBN0I7QUFDQSxxQkFBaUIsQ0FBQyxzQkFBc0IsSUFBdEIsQ0FBMkIsS0FBSyxXQUFoQyxDQUFsQjtBQUNBLFdBQU8sS0FBSyxjQUFMLEVBQVAsRUFBOEI7QUFDNUIsZUFBUyxLQUFLLHlCQUFMLEVBQVQ7QUFDQSxVQUFJLFdBQVcsU0FBZixFQUEwQjtBQUN4Qix5QkFBaUIsQ0FBQyxzQkFBc0IsSUFBdEIsQ0FBMkIsS0FBSyxXQUFoQyxDQUFsQjtBQUNEO0FBQ0QsVUFBSSxrQkFBa0IsS0FBSyxvQkFBTCxFQUF0QixFQUFtRDtBQUNqRDtBQUNEO0FBQ0QsVUFBSSxLQUFLLGtCQUFMLEVBQUosRUFBK0I7QUFDN0IsYUFBSyxJQUFMLENBQVUsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFNBQXZCLENBQVY7QUFDQTtBQUNEO0FBQ0QsVUFBSSw0QkFBNEIsQ0FBQyxLQUFLLGdDQUFMLENBQXNDLEtBQUssV0FBM0MsQ0FBN0IsSUFBd0YsV0FBVyxTQUF2RyxFQUFrSDtBQUNoSCxhQUFLLGtCQUFMO0FBQ0E7QUFDRDtBQUNELFVBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLGFBQUssSUFBTCxDQUFVLEtBQUssV0FBTCxDQUFpQixLQUFqQixDQUF1QixTQUF2QixDQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUksTUFBTSxLQUFOLENBQVksS0FBSyxXQUFqQixFQUE4QixNQUE5QixDQUFxQyxDQUFyQyxNQUE0QyxHQUFoRCxFQUFxRCxDQUUzRCxDQUZNLE1BRUEsSUFBSSxNQUFNLE1BQVYsRUFBa0I7QUFDdkIsYUFBSyxrQkFBTDtBQUNBO0FBQ0QsT0FITSxNQUdBO0FBQ0wsY0FBTSxJQUFJLGNBQUosQ0FBbUIsc0JBQW5CLEVBQTJDLEtBQUssb0JBQUwsS0FBOEIsQ0FBekUsRUFBNEUsS0FBSyxXQUFqRixDQUFOO0FBQ0Q7QUFDRjtBQUNELFdBQU8sS0FBSyxJQUFMLENBQVUsSUFBVixDQUFQO0FBQ0QsR0FwREQ7O0FBc0RBLFNBQU8sU0FBUCxDQUFpQixjQUFqQixHQUFrQyxZQUFXO0FBQzNDLFFBQUksS0FBSyxhQUFMLElBQXNCLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBOUMsRUFBaUQ7QUFDL0MsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxTQUFLLFdBQUwsR0FBbUIsS0FBSyxLQUFMLENBQVcsRUFBRSxLQUFLLGFBQWxCLENBQW5CO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsU0FBSyxXQUFMLEdBQW1CLEtBQUssS0FBTCxDQUFXLEVBQUUsS0FBSyxhQUFsQixDQUFuQjtBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLFVBQWpCLEdBQThCLFVBQVMsS0FBVCxFQUFnQixzQkFBaEIsRUFBd0MsYUFBeEMsRUFBdUQ7QUFDbkYsUUFBSSxDQUFKLEVBQU8sWUFBUCxFQUFxQixPQUFyQixFQUE4QixTQUE5QixFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxJQUFuRCxFQUF5RCxHQUF6RDtBQUNBLFFBQUksTUFBTSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQVYsRUFBOEI7QUFDNUIsWUFBTSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQU47QUFDQSxVQUFJLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsZ0JBQVEsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixNQUFNLENBQXRCLENBQVI7QUFDRCxPQUZELE1BRU87QUFDTCxnQkFBUSxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQVI7QUFDRDtBQUNELFVBQUksS0FBSyxJQUFMLENBQVUsS0FBVixNQUFxQixLQUFLLENBQTlCLEVBQWlDO0FBQy9CLGNBQU0sSUFBSSxjQUFKLENBQW1CLGdCQUFnQixLQUFoQixHQUF3QixtQkFBM0MsRUFBZ0UsS0FBSyxXQUFyRSxDQUFOO0FBQ0Q7QUFDRCxhQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsUUFBSSxVQUFVLEtBQUsseUJBQUwsQ0FBK0IsSUFBL0IsQ0FBb0MsS0FBcEMsQ0FBZCxFQUEwRDtBQUN4RCxrQkFBWSxDQUFDLE1BQU0sUUFBUSxTQUFmLEtBQTZCLElBQTdCLEdBQW9DLEdBQXBDLEdBQTBDLEVBQXREO0FBQ0EscUJBQWUsS0FBSyxHQUFMLENBQVMsU0FBUyxTQUFULENBQVQsQ0FBZjtBQUNBLFVBQUksTUFBTSxZQUFOLENBQUosRUFBeUI7QUFDdkIsdUJBQWUsQ0FBZjtBQUNEO0FBQ0QsWUFBTSxLQUFLLGlCQUFMLENBQXVCLFFBQVEsU0FBL0IsRUFBMEMsS0FBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLFNBQTdCLEVBQXdDLEVBQXhDLENBQTFDLEVBQXVGLFlBQXZGLENBQU47QUFDQSxVQUFJLFFBQVEsSUFBUixJQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPLFNBQVAsQ0FBaUIsc0JBQWpCLEVBQXlDLGFBQXpDO0FBQ0EsZUFBTyxPQUFPLFdBQVAsQ0FBbUIsUUFBUSxJQUFSLEdBQWUsR0FBZixHQUFxQixHQUF4QyxDQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZUFBTyxHQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUksQ0FBQyxPQUFPLE1BQU0sTUFBTixDQUFhLENBQWIsQ0FBUixNQUE2QixHQUE3QixJQUFvQyxTQUFTLEdBQTdDLElBQW9ELFNBQVMsR0FBN0QsSUFBb0UsU0FBUyxHQUFqRixFQUFzRjtBQUNwRixhQUFPLElBQVAsRUFBYTtBQUNYLFlBQUk7QUFDRixpQkFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0QsU0FGRCxDQUVFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsY0FBSSxLQUFKO0FBQ0EsY0FBSSxhQUFhLFNBQWIsSUFBMEIsS0FBSyxjQUFMLEVBQTlCLEVBQXFEO0FBQ25ELHFCQUFTLE9BQU8sTUFBTSxJQUFOLENBQVcsS0FBSyxXQUFoQixFQUE2QixHQUE3QixDQUFoQjtBQUNELFdBRkQsTUFFTztBQUNMLGNBQUUsVUFBRixHQUFlLEtBQUssb0JBQUwsS0FBOEIsQ0FBN0M7QUFDQSxjQUFFLE9BQUYsR0FBWSxLQUFLLFdBQWpCO0FBQ0Esa0JBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBZkQsTUFlTztBQUNMLFVBQUksS0FBSyxrQkFBTCxFQUFKLEVBQStCO0FBQzdCLGlCQUFTLE9BQU8sS0FBSyxpQkFBTCxFQUFoQjtBQUNEO0FBQ0QsYUFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFiLEVBQW9CLHNCQUFwQixFQUE0QyxhQUE1QyxDQUFQO0FBQ0Q7QUFDRixHQWpERDs7QUFtREEsU0FBTyxTQUFQLENBQWlCLGlCQUFqQixHQUFxQyxVQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsV0FBL0IsRUFBNEM7QUFDL0UsUUFBSSxrQkFBSixFQUF3QixDQUF4QixFQUEyQixHQUEzQixFQUFnQyxJQUFoQyxFQUFzQyxPQUF0QyxFQUErQyxPQUEvQyxFQUF3RCxNQUF4RCxFQUFnRSxPQUFoRSxFQUF5RSxHQUF6RSxFQUE4RSxJQUE5RTtBQUNBLFFBQUksYUFBYSxJQUFqQixFQUF1QjtBQUNyQixrQkFBWSxFQUFaO0FBQ0Q7QUFDRCxRQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsb0JBQWMsQ0FBZDtBQUNEO0FBQ0QsYUFBUyxLQUFLLGNBQUwsRUFBVDtBQUNBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxhQUFPLEVBQVA7QUFDRDtBQUNELHlCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0EsV0FBTyxFQUFQO0FBQ0EsV0FBTyxVQUFVLGtCQUFqQixFQUFxQztBQUNuQyxVQUFJLFNBQVMsS0FBSyxjQUFMLEVBQWIsRUFBb0M7QUFDbEMsZ0JBQVEsSUFBUjtBQUNBLDZCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0Q7QUFDRjtBQUNELFFBQUksTUFBTSxXQUFWLEVBQXVCO0FBQ3JCLFVBQUksVUFBVSxLQUFLLHFCQUFMLENBQTJCLElBQTNCLENBQWdDLEtBQUssV0FBckMsQ0FBZCxFQUFpRTtBQUMvRCxzQkFBYyxRQUFRLENBQVIsRUFBVyxNQUF6QjtBQUNEO0FBQ0Y7QUFDRCxRQUFJLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsZ0JBQVUsS0FBSyxvQ0FBTCxDQUEwQyxXQUExQyxDQUFWO0FBQ0EsVUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsa0JBQVUsSUFBSSxPQUFKLENBQVksUUFBUSxXQUFSLEdBQXNCLFFBQWxDLENBQVY7QUFDQSxlQUFPLFNBQVAsQ0FBaUIsb0NBQWpCLENBQXNELFdBQXRELElBQXFFLE9BQXJFO0FBQ0Q7QUFDRCxhQUFPLFdBQVcsdUJBQXVCLFVBQVUsUUFBUSxJQUFSLENBQWEsS0FBSyxXQUFsQixDQUFqQyxDQUFYLENBQVAsRUFBcUY7QUFDbkYsWUFBSSxrQkFBSixFQUF3QjtBQUN0QixrQkFBUSxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBdUIsV0FBdkIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGtCQUFRLFFBQVEsQ0FBUixDQUFSO0FBQ0Q7QUFDRCxZQUFJLFNBQVMsS0FBSyxjQUFMLEVBQWIsRUFBb0M7QUFDbEMsa0JBQVEsSUFBUjtBQUNBLCtCQUFxQixLQUFLLGtCQUFMLEVBQXJCO0FBQ0Q7QUFDRjtBQUNGLEtBakJELE1BaUJPLElBQUksTUFBSixFQUFZO0FBQ2pCLGNBQVEsSUFBUjtBQUNEO0FBQ0QsUUFBSSxNQUFKLEVBQVk7QUFDVixXQUFLLGtCQUFMO0FBQ0Q7QUFDRCxRQUFJLFFBQVEsU0FBWixFQUF1QjtBQUNyQixnQkFBVSxFQUFWO0FBQ0EsWUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQU47QUFDQSxXQUFLLElBQUksQ0FBSixFQUFPLE1BQU0sSUFBSSxNQUF0QixFQUE4QixJQUFJLEdBQWxDLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLGVBQU8sSUFBSSxDQUFKLENBQVA7QUFDQSxZQUFJLEtBQUssTUFBTCxLQUFnQixDQUFoQixJQUFxQixLQUFLLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQTVDLEVBQWlEO0FBQy9DLG9CQUFVLE1BQU0sS0FBTixDQUFZLE9BQVosRUFBcUIsR0FBckIsSUFBNEIsSUFBNUIsR0FBbUMsSUFBN0M7QUFDRCxTQUZELE1BRU87QUFDTCxxQkFBVyxPQUFPLEdBQWxCO0FBQ0Q7QUFDRjtBQUNELGFBQU8sT0FBUDtBQUNEO0FBQ0QsUUFBSSxRQUFRLFNBQVosRUFBdUI7QUFDckIsYUFBTyxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQVA7QUFDRDtBQUNELFFBQUksT0FBTyxTQUFYLEVBQXNCO0FBQ3BCLGFBQU8sS0FBSyxzQkFBTCxDQUE0QixPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUksUUFBUSxTQUFaLEVBQXVCO0FBQzVCLGFBQU8sS0FBSyxzQkFBTCxDQUE0QixPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxFQUExQyxDQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHQXRFRDs7QUF3RUEsU0FBTyxTQUFQLENBQWlCLGtCQUFqQixHQUFzQyxVQUFTLGNBQVQsRUFBeUI7QUFDN0QsUUFBSSxHQUFKLEVBQVMsa0JBQVQsRUFBNkIsR0FBN0I7QUFDQSxRQUFJLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQix1QkFBaUIsSUFBakI7QUFDRDtBQUNELHlCQUFxQixLQUFLLHlCQUFMLEVBQXJCO0FBQ0EsVUFBTSxDQUFDLEtBQUssY0FBTCxFQUFQO0FBQ0EsUUFBSSxjQUFKLEVBQW9CO0FBQ2xCLGFBQU8sQ0FBQyxHQUFELElBQVEsS0FBSyxrQkFBTCxFQUFmLEVBQTBDO0FBQ3hDLGNBQU0sQ0FBQyxLQUFLLGNBQUwsRUFBUDtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0wsYUFBTyxDQUFDLEdBQUQsSUFBUSxLQUFLLGtCQUFMLEVBQWYsRUFBMEM7QUFDeEMsY0FBTSxDQUFDLEtBQUssY0FBTCxFQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUksR0FBSixFQUFTO0FBQ1AsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFNLEtBQU47QUFDQSxRQUFJLEtBQUsseUJBQUwsS0FBbUMsa0JBQXZDLEVBQTJEO0FBQ3pELFlBQU0sSUFBTjtBQUNEO0FBQ0QsU0FBSyxrQkFBTDtBQUNBLFdBQU8sR0FBUDtBQUNELEdBekJEOztBQTJCQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsUUFBSSxXQUFKO0FBQ0Esa0JBQWMsTUFBTSxJQUFOLENBQVcsS0FBSyxXQUFoQixFQUE2QixHQUE3QixDQUFkO0FBQ0EsV0FBTyxZQUFZLE1BQVosS0FBdUIsQ0FBdkIsSUFBNEIsWUFBWSxNQUFaLENBQW1CLENBQW5CLE1BQTBCLEdBQTdEO0FBQ0QsR0FKRDs7QUFNQSxTQUFPLFNBQVAsQ0FBaUIsa0JBQWpCLEdBQXNDLFlBQVc7QUFDL0MsV0FBTyxPQUFPLE1BQU0sSUFBTixDQUFXLEtBQUssV0FBaEIsRUFBNkIsR0FBN0IsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxTQUFQLENBQWlCLG9CQUFqQixHQUF3QyxZQUFXO0FBQ2pELFFBQUksWUFBSjtBQUNBLG1CQUFlLE1BQU0sS0FBTixDQUFZLEtBQUssV0FBakIsRUFBOEIsR0FBOUIsQ0FBZjtBQUNBLFdBQU8sYUFBYSxNQUFiLENBQW9CLENBQXBCLE1BQTJCLEdBQWxDO0FBQ0QsR0FKRDs7QUFNQSxTQUFPLFNBQVAsQ0FBaUIsT0FBakIsR0FBMkIsVUFBUyxLQUFULEVBQWdCO0FBQ3pDLFFBQUksS0FBSixFQUFXLENBQVgsRUFBYyxNQUFkLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQTZDLEtBQTdDLEVBQW9ELEdBQXBELEVBQXlELElBQXpELEVBQStELElBQS9ELEVBQXFFLGNBQXJFLEVBQXFGLFlBQXJGO0FBQ0EsUUFBSSxNQUFNLE9BQU4sQ0FBYyxJQUFkLE1BQXdCLENBQUMsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBUSxNQUFNLEtBQU4sQ0FBWSxNQUFaLEVBQW9CLElBQXBCLENBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQXFDLElBQXJDLEVBQTJDLElBQTNDLENBQWdELElBQWhELENBQVI7QUFDRDtBQUNELFlBQVEsQ0FBUjtBQUNBLFVBQU0sS0FBSyxtQkFBTCxDQUF5QixVQUF6QixDQUFvQyxLQUFwQyxFQUEyQyxFQUEzQyxDQUFOLEVBQXNELFFBQVEsSUFBSSxDQUFKLENBQTlELEVBQXNFLFFBQVEsSUFBSSxDQUFKLENBQTlFO0FBQ0EsU0FBSyxNQUFMLElBQWUsS0FBZjtBQUNBLFdBQU8sS0FBSyx3QkFBTCxDQUE4QixVQUE5QixDQUF5QyxLQUF6QyxFQUFnRCxFQUFoRCxFQUFvRCxDQUFwRCxDQUFQLEVBQStELGVBQWUsS0FBSyxDQUFMLENBQTlFLEVBQXVGLFFBQVEsS0FBSyxDQUFMLENBQS9GO0FBQ0EsUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDZixXQUFLLE1BQUwsSUFBZSxNQUFNLFdBQU4sQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekIsSUFBaUMsTUFBTSxXQUFOLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQWhEO0FBQ0EsY0FBUSxZQUFSO0FBQ0Q7QUFDRCxXQUFPLEtBQUssNkJBQUwsQ0FBbUMsVUFBbkMsQ0FBOEMsS0FBOUMsRUFBcUQsRUFBckQsRUFBeUQsQ0FBekQsQ0FBUCxFQUFvRSxlQUFlLEtBQUssQ0FBTCxDQUFuRixFQUE0RixRQUFRLEtBQUssQ0FBTCxDQUFwRztBQUNBLFFBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2YsV0FBSyxNQUFMLElBQWUsTUFBTSxXQUFOLENBQWtCLEtBQWxCLEVBQXlCLElBQXpCLElBQWlDLE1BQU0sV0FBTixDQUFrQixZQUFsQixFQUFnQyxJQUFoQyxDQUFoRDtBQUNBLGNBQVEsWUFBUjtBQUNBLGNBQVEsS0FBSywyQkFBTCxDQUFpQyxPQUFqQyxDQUF5QyxLQUF6QyxFQUFnRCxFQUFoRCxDQUFSO0FBQ0Q7QUFDRCxZQUFRLE1BQU0sS0FBTixDQUFZLElBQVosQ0FBUjtBQUNBLHFCQUFpQixDQUFDLENBQWxCO0FBQ0EsU0FBSyxJQUFJLENBQUosRUFBTyxNQUFNLE1BQU0sTUFBeEIsRUFBZ0MsSUFBSSxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QztBQUM1QyxhQUFPLE1BQU0sQ0FBTixDQUFQO0FBQ0EsVUFBSSxNQUFNLElBQU4sQ0FBVyxJQUFYLEVBQWlCLEdBQWpCLEVBQXNCLE1BQXRCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDO0FBQ0Q7QUFDRCxlQUFTLEtBQUssTUFBTCxHQUFjLE1BQU0sS0FBTixDQUFZLElBQVosRUFBa0IsTUFBekM7QUFDQSxVQUFJLG1CQUFtQixDQUFDLENBQXBCLElBQXlCLFNBQVMsY0FBdEMsRUFBc0Q7QUFDcEQseUJBQWlCLE1BQWpCO0FBQ0Q7QUFDRjtBQUNELFFBQUksaUJBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFdBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxPQUFPLE1BQU0sTUFBN0IsRUFBcUMsSUFBSSxJQUF6QyxFQUErQyxJQUFJLEVBQUUsQ0FBckQsRUFBd0Q7QUFDdEQsZUFBTyxNQUFNLENBQU4sQ0FBUDtBQUNBLGNBQU0sQ0FBTixJQUFXLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBWDtBQUNEO0FBQ0QsY0FBUSxNQUFNLElBQU4sQ0FBVyxJQUFYLENBQVI7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNELEdBdkNEOztBQXlDQSxTQUFPLFNBQVAsQ0FBaUIsOEJBQWpCLEdBQWtELFVBQVMsa0JBQVQsRUFBNkI7QUFDN0UsUUFBSSxNQUFKLEVBQVksR0FBWjtBQUNBLFFBQUksc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCLDJCQUFxQixJQUFyQjtBQUNEO0FBQ0QsUUFBSSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsMkJBQXFCLEtBQUsseUJBQUwsRUFBckI7QUFDRDtBQUNELGFBQVMsS0FBSyxjQUFMLEVBQVQ7QUFDQSxXQUFPLFVBQVUsS0FBSyxrQkFBTCxFQUFqQixFQUE0QztBQUMxQyxlQUFTLEtBQUssY0FBTCxFQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsTUFBZCxFQUFzQjtBQUNwQixhQUFPLEtBQVA7QUFDRDtBQUNELFVBQU0sS0FBTjtBQUNBLFFBQUksS0FBSyx5QkFBTCxPQUFxQyxrQkFBckMsSUFBMkQsS0FBSyxnQ0FBTCxDQUFzQyxLQUFLLFdBQTNDLENBQS9ELEVBQXdIO0FBQ3RILFlBQU0sSUFBTjtBQUNEO0FBQ0QsU0FBSyxrQkFBTDtBQUNBLFdBQU8sR0FBUDtBQUNELEdBckJEOztBQXVCQSxTQUFPLFNBQVAsQ0FBaUIsZ0NBQWpCLEdBQW9ELFlBQVc7QUFDN0QsV0FBTyxLQUFLLFdBQUwsS0FBcUIsR0FBckIsSUFBNEIsS0FBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLE1BQWlDLElBQXBFO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLE1BQVA7QUFFRCxDQTNrQlEsRUFBVDs7QUE2a0JBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7Ozs7QUMxbEJBO0FBQ0EsSUFBSSxPQUFKOztBQUVBLFVBQVcsWUFBVztBQUNwQixVQUFRLFNBQVIsQ0FBa0IsS0FBbEIsR0FBMEIsSUFBMUI7O0FBRUEsVUFBUSxTQUFSLENBQWtCLFFBQWxCLEdBQTZCLElBQTdCOztBQUVBLFVBQVEsU0FBUixDQUFrQixZQUFsQixHQUFpQyxJQUFqQzs7QUFFQSxVQUFRLFNBQVIsQ0FBa0IsT0FBbEIsR0FBNEIsSUFBNUI7O0FBRUEsV0FBUyxPQUFULENBQWlCLFFBQWpCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQ3BDLFFBQUksS0FBSixFQUFXLHNCQUFYLEVBQW1DLFlBQW5DLEVBQWlELENBQWpELEVBQW9ELEdBQXBELEVBQXlELE9BQXpELEVBQWtFLElBQWxFLEVBQXdFLElBQXhFLEVBQThFLE9BQTlFO0FBQ0EsUUFBSSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGtCQUFZLEVBQVo7QUFDRDtBQUNELG1CQUFlLEVBQWY7QUFDQSxVQUFNLFNBQVMsTUFBZjtBQUNBLGNBQVUsSUFBVjtBQUNBLDZCQUF5QixDQUF6QjtBQUNBLFFBQUksQ0FBSjtBQUNBLFdBQU8sSUFBSSxHQUFYLEVBQWdCO0FBQ2QsY0FBUSxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBUjtBQUNBLFVBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLHdCQUFnQixTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQUUsSUFBSSxDQUFOLElBQVcsQ0FBWCxJQUFnQixHQUFsQyxDQUFoQjtBQUNBO0FBQ0QsT0FIRCxNQUdPLElBQUksVUFBVSxHQUFkLEVBQW1CO0FBQ3hCLFlBQUksSUFBSSxNQUFNLENBQWQsRUFBaUI7QUFDZixpQkFBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQUUsSUFBSSxDQUFOLElBQVcsQ0FBWCxJQUFnQixHQUFsQyxDQUFQO0FBQ0EsY0FBSSxTQUFTLEtBQWIsRUFBb0I7QUFDbEIsaUJBQUssQ0FBTDtBQUNBLDRCQUFnQixJQUFoQjtBQUNELFdBSEQsTUFHTyxJQUFJLFNBQVMsS0FBYixFQUFvQjtBQUN6QjtBQUNBLGlCQUFLLENBQUw7QUFDQSxtQkFBTyxFQUFQO0FBQ0EsbUJBQU8sSUFBSSxDQUFKLEdBQVEsR0FBZixFQUFvQjtBQUNsQix3QkFBVSxTQUFTLE1BQVQsQ0FBZ0IsSUFBSSxDQUFwQixDQUFWO0FBQ0Esa0JBQUksWUFBWSxHQUFoQixFQUFxQjtBQUNuQixnQ0FBZ0IsR0FBaEI7QUFDQTtBQUNBLG9CQUFJLEtBQUssTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLHNCQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNuQiw4QkFBVSxFQUFWO0FBQ0Q7QUFDRCwwQkFBUSxJQUFSLElBQWdCLHNCQUFoQjtBQUNEO0FBQ0Q7QUFDRCxlQVZELE1BVU87QUFDTCx3QkFBUSxPQUFSO0FBQ0Q7QUFDRDtBQUNEO0FBQ0YsV0FyQk0sTUFxQkE7QUFDTCw0QkFBZ0IsS0FBaEI7QUFDQTtBQUNEO0FBQ0YsU0E5QkQsTUE4Qk87QUFDTCwwQkFBZ0IsS0FBaEI7QUFDRDtBQUNGLE9BbENNLE1Ba0NBO0FBQ0wsd0JBQWdCLEtBQWhCO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsSUFBSSxNQUFKLENBQVcsS0FBSyxZQUFoQixFQUE4QixNQUFNLFVBQVUsT0FBVixDQUFrQixHQUFsQixFQUF1QixFQUF2QixDQUFwQyxDQUFiO0FBQ0EsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOztBQUVELFVBQVEsU0FBUixDQUFrQixJQUFsQixHQUF5QixVQUFTLEdBQVQsRUFBYztBQUNyQyxRQUFJLEtBQUosRUFBVyxPQUFYLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCO0FBQ0EsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLGNBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixDQUFWO0FBQ0EsUUFBSSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLEtBQUssT0FBTCxJQUFnQixJQUFwQixFQUEwQjtBQUN4QixZQUFNLEtBQUssT0FBWDtBQUNBLFdBQUssSUFBTCxJQUFhLEdBQWIsRUFBa0I7QUFDaEIsZ0JBQVEsSUFBSSxJQUFKLENBQVI7QUFDQSxnQkFBUSxJQUFSLElBQWdCLFFBQVEsS0FBUixDQUFoQjtBQUNEO0FBQ0Y7QUFDRCxXQUFPLE9BQVA7QUFDRCxHQWZEOztBQWlCQSxVQUFRLFNBQVIsQ0FBa0IsSUFBbEIsR0FBeUIsVUFBUyxHQUFULEVBQWM7QUFDckMsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxVQUFRLFNBQVIsQ0FBa0IsT0FBbEIsR0FBNEIsVUFBUyxHQUFULEVBQWMsV0FBZCxFQUEyQjtBQUNyRCxTQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLENBQXZCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxLQUFLLEtBQWpCLEVBQXdCLFdBQXhCLENBQVA7QUFDRCxHQUhEOztBQUtBLFVBQVEsU0FBUixDQUFrQixVQUFsQixHQUErQixVQUFTLEdBQVQsRUFBYyxXQUFkLEVBQTJCLEtBQTNCLEVBQWtDO0FBQy9ELFFBQUksS0FBSjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGNBQVEsQ0FBUjtBQUNEO0FBQ0QsU0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFlBQVEsQ0FBUjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQixNQUF5QixVQUFVLENBQVYsSUFBZSxRQUFRLEtBQWhELENBQVAsRUFBK0Q7QUFDN0QsV0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFlBQU0sSUFBSSxPQUFKLENBQVksS0FBSyxLQUFqQixFQUF3QixXQUF4QixDQUFOO0FBQ0E7QUFDRDtBQUNELFdBQU8sQ0FBQyxHQUFELEVBQU0sS0FBTixDQUFQO0FBQ0QsR0FiRDs7QUFlQSxTQUFPLE9BQVA7QUFFRCxDQWpIUyxFQUFWOztBQW1IQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDdEhBO0FBQ0EsSUFBSSxPQUFKLEVBQWEsU0FBYixFQUF3QixLQUF4Qjs7QUFFQSxRQUFRLFFBQVEsU0FBUixDQUFSOztBQUVBLFVBQVUsUUFBUSxXQUFSLENBQVY7O0FBRUEsWUFBYSxZQUFXO0FBQ3RCLFdBQVMsU0FBVCxHQUFxQixDQUFFOztBQUV2QixZQUFVLHlCQUFWLEdBQXNDLElBQUksT0FBSixDQUFZLGtGQUFaLENBQXRDOztBQUVBLFlBQVUsMEJBQVYsR0FBdUMsVUFBUyxLQUFULEVBQWdCO0FBQ3JELFdBQU8sTUFBTSxPQUFOLENBQWMsT0FBZCxFQUF1QixJQUF2QixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxZQUFVLDBCQUFWLEdBQXVDLFVBQVMsS0FBVCxFQUFnQjtBQUNyRCxRQUFJLEtBQUssaUJBQUwsSUFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsV0FBSyxpQkFBTCxHQUEwQixVQUFTLEtBQVQsRUFBZ0I7QUFDeEMsZUFBTyxVQUFTLEdBQVQsRUFBYztBQUNuQixpQkFBTyxNQUFNLGlCQUFOLENBQXdCLEdBQXhCLENBQVA7QUFDRCxTQUZEO0FBR0QsT0FKd0IsQ0FJdEIsSUFKc0IsQ0FBekI7QUFLRDtBQUNELFdBQU8sS0FBSyx5QkFBTCxDQUErQixPQUEvQixDQUF1QyxLQUF2QyxFQUE4QyxLQUFLLGlCQUFuRCxDQUFQO0FBQ0QsR0FURDs7QUFXQSxZQUFVLGlCQUFWLEdBQThCLFVBQVMsS0FBVCxFQUFnQjtBQUM1QyxRQUFJLEVBQUo7QUFDQSxTQUFLLE9BQU8sWUFBWjtBQUNBLFlBQVEsTUFBTSxNQUFOLENBQWEsQ0FBYixDQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLENBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxDQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsQ0FBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxJQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxJQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLEVBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxFQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsRUFBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLEVBQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBUDtBQUNGLFdBQUssSUFBTDtBQUNFLGVBQU8sSUFBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxNQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLEdBQUcsTUFBSCxDQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxHQUFHLE1BQUgsQ0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sR0FBRyxNQUFILENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLE1BQU0sT0FBTixDQUFjLE1BQU0sTUFBTixDQUFhLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixDQUFkLENBQVA7QUFDRjtBQUNFLGVBQU8sRUFBUDtBQTVDSjtBQThDRCxHQWpERDs7QUFtREEsU0FBTyxTQUFQO0FBRUQsQ0F6RVcsRUFBWjs7QUEyRUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7OztBQ2xGQTtBQUNBLElBQUksT0FBSjtBQUFBLElBQWEsS0FBYjtBQUFBLElBQ0UsVUFBVSxHQUFHLGNBRGY7O0FBR0EsVUFBVSxRQUFRLFdBQVIsQ0FBVjs7QUFFQSxRQUFTLFlBQVc7QUFDbEIsV0FBUyxLQUFULEdBQWlCLENBQUU7O0FBRW5CLFFBQU0sdUJBQU4sR0FBZ0MsRUFBaEM7O0FBRUEsUUFBTSx3QkFBTixHQUFpQyxFQUFqQzs7QUFFQSxRQUFNLFlBQU4sR0FBcUIsTUFBckI7O0FBRUEsUUFBTSxZQUFOLEdBQXFCLE9BQXJCOztBQUVBLFFBQU0sV0FBTixHQUFvQixVQUFwQjs7QUFFQSxRQUFNLGlCQUFOLEdBQTBCLGFBQTFCOztBQUVBLFFBQU0sWUFBTixHQUFxQixJQUFJLE9BQUosQ0FBWSxNQUFNLCtCQUFOLEdBQXdDLHdCQUF4QyxHQUFtRSxzQkFBbkUsR0FBNEYsb0JBQTVGLEdBQW1ILHNCQUFuSCxHQUE0SSx3QkFBNUksR0FBdUssd0JBQXZLLEdBQWtNLDRCQUFsTSxHQUFpTywwREFBak8sR0FBOFIscUNBQTlSLEdBQXNVLEdBQWxWLEVBQXVWLEdBQXZWLENBQXJCOztBQUVBLFFBQU0scUJBQU4sR0FBOEIsSUFBSSxJQUFKLEdBQVcsaUJBQVgsS0FBaUMsRUFBakMsR0FBc0MsSUFBcEU7O0FBRUEsUUFBTSxJQUFOLEdBQWEsVUFBUyxHQUFULEVBQWMsS0FBZCxFQUFxQjtBQUNoQyxRQUFJLFNBQUosRUFBZSxVQUFmO0FBQ0EsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBUSxLQUFSO0FBQ0Q7QUFDRCxnQkFBWSxLQUFLLHVCQUFMLENBQTZCLEtBQTdCLENBQVo7QUFDQSxRQUFJLGFBQWEsSUFBakIsRUFBdUI7QUFDckIsV0FBSyx1QkFBTCxDQUE2QixLQUE3QixJQUFzQyxZQUFZLElBQUksTUFBSixDQUFXLE1BQU0sS0FBTixHQUFjLEVBQWQsR0FBbUIsS0FBbkIsR0FBMkIsR0FBdEMsQ0FBbEQ7QUFDRDtBQUNELGNBQVUsU0FBVixHQUFzQixDQUF0QjtBQUNBLGlCQUFhLEtBQUssd0JBQUwsQ0FBOEIsS0FBOUIsQ0FBYjtBQUNBLFFBQUksY0FBYyxJQUFsQixFQUF3QjtBQUN0QixXQUFLLHdCQUFMLENBQThCLEtBQTlCLElBQXVDLGFBQWEsSUFBSSxNQUFKLENBQVcsUUFBUSxFQUFSLEdBQWEsS0FBYixHQUFxQixJQUFoQyxDQUFwRDtBQUNEO0FBQ0QsZUFBVyxTQUFYLEdBQXVCLENBQXZCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLEVBQTJCLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDLEVBQS9DLENBQVA7QUFDRCxHQWhCRDs7QUFrQkEsUUFBTSxLQUFOLEdBQWMsVUFBUyxHQUFULEVBQWMsS0FBZCxFQUFxQjtBQUNqQyxRQUFJLFNBQUo7QUFDQSxRQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFRLEtBQVI7QUFDRDtBQUNELGdCQUFZLEtBQUssdUJBQUwsQ0FBNkIsS0FBN0IsQ0FBWjtBQUNBLFFBQUksYUFBYSxJQUFqQixFQUF1QjtBQUNyQixXQUFLLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDLFlBQVksSUFBSSxNQUFKLENBQVcsTUFBTSxLQUFOLEdBQWMsRUFBZCxHQUFtQixLQUFuQixHQUEyQixHQUF0QyxDQUFsRDtBQUNEO0FBQ0QsY0FBVSxTQUFWLEdBQXNCLENBQXRCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLENBQVA7QUFDRCxHQVhEOztBQWFBLFFBQU0sS0FBTixHQUFjLFVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDakMsUUFBSSxVQUFKO0FBQ0EsUUFBSSxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBUSxLQUFSO0FBQ0Q7QUFDRCxpQkFBYSxLQUFLLHdCQUFMLENBQThCLEtBQTlCLENBQWI7QUFDQSxRQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsV0FBSyx3QkFBTCxDQUE4QixLQUE5QixJQUF1QyxhQUFhLElBQUksTUFBSixDQUFXLFFBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsSUFBaEMsQ0FBcEQ7QUFDRDtBQUNELGVBQVcsU0FBWCxHQUF1QixDQUF2QjtBQUNBLFdBQU8sSUFBSSxPQUFKLENBQVksVUFBWixFQUF3QixFQUF4QixDQUFQO0FBQ0QsR0FYRDs7QUFhQSxRQUFNLE9BQU4sR0FBZ0IsVUFBUyxLQUFULEVBQWdCO0FBQzlCLFdBQU8sQ0FBQyxLQUFELElBQVUsVUFBVSxFQUFwQixJQUEwQixVQUFVLEdBQXBDLElBQTRDLGlCQUFpQixLQUFqQixJQUEwQixNQUFNLE1BQU4sS0FBaUIsQ0FBdkYsSUFBNkYsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXBHO0FBQ0QsR0FGRDs7QUFJQSxRQUFNLGFBQU4sR0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLFFBQUksQ0FBSjtBQUNBLFdBQU8saUJBQWlCLE1BQWpCLElBQTZCLFlBQVc7QUFDN0MsVUFBSSxPQUFKO0FBQ0EsZ0JBQVUsRUFBVjtBQUNBLFdBQUssQ0FBTCxJQUFVLEtBQVYsRUFBaUI7QUFDZixZQUFJLENBQUMsUUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixDQUFwQixDQUFMLEVBQTZCO0FBQzdCLGdCQUFRLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7QUFDRCxhQUFPLE9BQVA7QUFDRCxLQVJrQyxFQUFELENBUTVCLE1BUjRCLEtBUWpCLENBUmpCO0FBU0QsR0FYRDs7QUFhQSxRQUFNLFdBQU4sR0FBb0IsVUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DLEVBQTJDO0FBQzdELFFBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixNQUF2QjtBQUNBLFFBQUksQ0FBSjtBQUNBLGFBQVMsS0FBSyxNQUFkO0FBQ0EsZ0JBQVksS0FBSyxTQUFqQjtBQUNBLFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGVBQVMsT0FBTyxLQUFQLENBQWEsS0FBYixDQUFUO0FBQ0Q7QUFDRCxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsQ0FBVDtBQUNEO0FBQ0QsVUFBTSxPQUFPLE1BQWI7QUFDQSxhQUFTLFVBQVUsTUFBbkI7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxHQUF0QixFQUEyQixLQUFLLEdBQUwsR0FBVyxJQUFJLEdBQWYsR0FBcUIsSUFBSSxHQUFwRCxFQUF5RCxJQUFJLEtBQUssR0FBTCxHQUFXLEVBQUUsQ0FBYixHQUFpQixFQUFFLENBQWhGLEVBQW1GO0FBQ2pGLFVBQUksY0FBYyxPQUFPLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLE1BQWhCLENBQWxCLEVBQTJDO0FBQ3pDO0FBQ0EsYUFBSyxTQUFTLENBQWQ7QUFDRDtBQUNGO0FBQ0QsV0FBTyxDQUFQO0FBQ0QsR0FwQkQ7O0FBc0JBLFFBQU0sUUFBTixHQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDL0IsU0FBSyxZQUFMLENBQWtCLFNBQWxCLEdBQThCLENBQTlCO0FBQ0EsV0FBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTSxNQUFOLEdBQWUsVUFBUyxLQUFULEVBQWdCO0FBQzdCLFNBQUssV0FBTCxDQUFpQixTQUFqQixHQUE2QixDQUE3QjtBQUNBLFdBQU8sU0FBUyxDQUFDLFFBQVEsRUFBVCxFQUFhLE9BQWIsQ0FBcUIsS0FBSyxXQUExQixFQUF1QyxFQUF2QyxDQUFULEVBQXFELENBQXJELENBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU0sTUFBTixHQUFlLFVBQVMsS0FBVCxFQUFnQjtBQUM3QixTQUFLLGlCQUFMLENBQXVCLFNBQXZCLEdBQW1DLENBQW5DO0FBQ0EsWUFBUSxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQVI7QUFDQSxRQUFJLENBQUMsUUFBUSxFQUFULEVBQWEsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixNQUE2QixJQUFqQyxFQUF1QztBQUNyQyxjQUFRLENBQUMsUUFBUSxFQUFULEVBQWEsS0FBYixDQUFtQixDQUFuQixDQUFSO0FBQ0Q7QUFDRCxXQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQVQsRUFBYSxPQUFiLENBQXFCLEtBQUssaUJBQTFCLEVBQTZDLEVBQTdDLENBQVQsRUFBMkQsRUFBM0QsQ0FBUDtBQUNELEdBUEQ7O0FBU0EsUUFBTSxPQUFOLEdBQWdCLFVBQVMsQ0FBVCxFQUFZO0FBQzFCLFFBQUksRUFBSjtBQUNBLFNBQUssT0FBTyxZQUFaO0FBQ0EsUUFBSSxRQUFRLEtBQUssUUFBYixDQUFKLEVBQTRCO0FBQzFCLGFBQU8sR0FBRyxDQUFILENBQVA7QUFDRDtBQUNELFFBQUksUUFBUSxDQUFaLEVBQWU7QUFDYixhQUFPLEdBQUcsT0FBTyxLQUFLLENBQWYsSUFBb0IsR0FBRyxPQUFPLElBQUksSUFBZCxDQUEzQjtBQUNEO0FBQ0QsUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDZixhQUFPLEdBQUcsT0FBTyxLQUFLLEVBQWYsSUFBcUIsR0FBRyxPQUFPLEtBQUssQ0FBTCxHQUFTLElBQW5CLENBQXJCLEdBQWdELEdBQUcsT0FBTyxJQUFJLElBQWQsQ0FBdkQ7QUFDRDtBQUNELFdBQU8sR0FBRyxPQUFPLEtBQUssRUFBZixJQUFxQixHQUFHLE9BQU8sS0FBSyxFQUFMLEdBQVUsSUFBcEIsQ0FBckIsR0FBaUQsR0FBRyxPQUFPLEtBQUssQ0FBTCxHQUFTLElBQW5CLENBQWpELEdBQTRFLEdBQUcsT0FBTyxJQUFJLElBQWQsQ0FBbkY7QUFDRCxHQWJEOztBQWVBLFFBQU0sWUFBTixHQUFxQixVQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0I7QUFDM0MsUUFBSSxVQUFKO0FBQ0EsUUFBSSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUyxJQUFUO0FBQ0Q7QUFDRCxRQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixtQkFBYSxNQUFNLFdBQU4sRUFBYjtBQUNBLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRCxVQUFJLGVBQWUsR0FBbkIsRUFBd0I7QUFDdEIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFJLGVBQWUsT0FBbkIsRUFBNEI7QUFDMUIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFJLGVBQWUsRUFBbkIsRUFBdUI7QUFDckIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU8sQ0FBQyxDQUFDLEtBQVQ7QUFDRCxHQXhCRDs7QUEwQkEsUUFBTSxTQUFOLEdBQWtCLFVBQVMsS0FBVCxFQUFnQjtBQUNoQyxTQUFLLFlBQUwsQ0FBa0IsU0FBbEIsR0FBOEIsQ0FBOUI7QUFDQSxXQUFPLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsQ0FBQyxNQUFNLEtBQU4sQ0FBOUIsSUFBOEMsTUFBTSxPQUFOLENBQWMsS0FBSyxZQUFuQixFQUFpQyxFQUFqQyxNQUF5QyxFQUEzSDtBQUNELEdBSEQ7O0FBS0EsUUFBTSxZQUFOLEdBQXFCLFVBQVMsR0FBVCxFQUFjO0FBQ2pDLFFBQUksSUFBSixFQUFVLEdBQVYsRUFBZSxRQUFmLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLE1BQXJDLEVBQTZDLEtBQTdDLEVBQW9ELE1BQXBELEVBQTRELE9BQTVELEVBQXFFLFNBQXJFLEVBQWdGLFNBQWhGLEVBQTJGLElBQTNGO0FBQ0EsUUFBSSxFQUFFLE9BQU8sSUFBUCxHQUFjLElBQUksTUFBbEIsR0FBMkIsS0FBSyxDQUFsQyxDQUFKLEVBQTBDO0FBQ3hDLGFBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBUDtBQUNBLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU8sU0FBUyxLQUFLLElBQWQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBLFlBQVEsU0FBUyxLQUFLLEtBQWQsRUFBcUIsRUFBckIsSUFBMkIsQ0FBbkM7QUFDQSxVQUFNLFNBQVMsS0FBSyxHQUFkLEVBQW1CLEVBQW5CLENBQU47QUFDQSxRQUFJLEtBQUssSUFBTCxJQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGFBQU8sSUFBSSxJQUFKLENBQVMsS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FBVCxDQUFQO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPLFNBQVMsS0FBSyxJQUFkLEVBQW9CLEVBQXBCLENBQVA7QUFDQSxhQUFTLFNBQVMsS0FBSyxNQUFkLEVBQXNCLEVBQXRCLENBQVQ7QUFDQSxhQUFTLFNBQVMsS0FBSyxNQUFkLEVBQXNCLEVBQXRCLENBQVQ7QUFDQSxRQUFJLEtBQUssUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUN6QixpQkFBVyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQVg7QUFDQSxhQUFPLFNBQVMsTUFBVCxHQUFrQixDQUF6QixFQUE0QjtBQUMxQixvQkFBWSxHQUFaO0FBQ0Q7QUFDRCxpQkFBVyxTQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBWDtBQUNELEtBTkQsTUFNTztBQUNMLGlCQUFXLENBQVg7QUFDRDtBQUNELFFBQUksS0FBSyxFQUFMLElBQVcsSUFBZixFQUFxQjtBQUNuQixnQkFBVSxTQUFTLEtBQUssT0FBZCxFQUF1QixFQUF2QixDQUFWO0FBQ0EsVUFBSSxLQUFLLFNBQUwsSUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsb0JBQVksU0FBUyxLQUFLLFNBQWQsRUFBeUIsRUFBekIsQ0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLG9CQUFZLENBQVo7QUFDRDtBQUNELGtCQUFZLENBQUMsVUFBVSxFQUFWLEdBQWUsU0FBaEIsSUFBNkIsS0FBekM7QUFDQSxVQUFJLFFBQVEsS0FBSyxPQUFqQixFQUEwQjtBQUN4QixxQkFBYSxDQUFDLENBQWQ7QUFDRDtBQUNGO0FBQ0QsV0FBTyxJQUFJLElBQUosQ0FBUyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsS0FBZixFQUFzQixHQUF0QixFQUEyQixJQUEzQixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxRQUFqRCxDQUFULENBQVA7QUFDQSxRQUFJLFNBQUosRUFBZTtBQUNiLFdBQUssT0FBTCxDQUFhLEtBQUssT0FBTCxLQUFpQixTQUE5QjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0E3Q0Q7O0FBK0NBLFFBQU0sU0FBTixHQUFrQixVQUFTLEdBQVQsRUFBYyxNQUFkLEVBQXNCO0FBQ3RDLFFBQUksQ0FBSixFQUFPLEdBQVA7QUFDQSxVQUFNLEVBQU47QUFDQSxRQUFJLENBQUo7QUFDQSxXQUFPLElBQUksTUFBWCxFQUFtQjtBQUNqQixhQUFPLEdBQVA7QUFDQTtBQUNEO0FBQ0QsV0FBTyxHQUFQO0FBQ0QsR0FURDs7QUFXQSxRQUFNLGlCQUFOLEdBQTBCLFVBQVMsSUFBVCxFQUFlLFFBQWYsRUFBeUI7QUFDakQsUUFBSSxJQUFKLEVBQVUsRUFBVixFQUFjLENBQWQsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsR0FBdkM7QUFDQSxRQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsaUJBQVcsSUFBWDtBQUNEO0FBQ0QsVUFBTSxJQUFOO0FBQ0EsUUFBSSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsV0FBVyxJQUFoRCxFQUFzRDtBQUNwRCxVQUFJLE9BQU8sY0FBWCxFQUEyQjtBQUN6QixjQUFNLElBQUksY0FBSixFQUFOO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBTyxhQUFYLEVBQTBCO0FBQy9CLGNBQU0sQ0FBQyxvQkFBRCxFQUF1QixvQkFBdkIsRUFBNkMsZ0JBQTdDLEVBQStELG1CQUEvRCxDQUFOO0FBQ0EsYUFBSyxJQUFJLENBQUosRUFBTyxPQUFPLElBQUksTUFBdkIsRUFBK0IsSUFBSSxJQUFuQyxFQUF5QyxHQUF6QyxFQUE4QztBQUM1QyxpQkFBTyxJQUFJLENBQUosQ0FBUDtBQUNBLGNBQUk7QUFDRixrQkFBTSxJQUFJLGFBQUosQ0FBa0IsSUFBbEIsQ0FBTjtBQUNELFdBRkQsQ0FFRSxPQUFPLEtBQVAsRUFBYyxDQUFFO0FBQ25CO0FBQ0Y7QUFDRjtBQUNELFFBQUksT0FBTyxJQUFYLEVBQWlCO0FBQ2YsVUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUksa0JBQUosR0FBeUIsWUFBVztBQUNsQyxjQUFJLElBQUksVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixnQkFBSSxJQUFJLE1BQUosS0FBZSxHQUFmLElBQXNCLElBQUksTUFBSixLQUFlLENBQXpDLEVBQTRDO0FBQzFDLHFCQUFPLFNBQVMsSUFBSSxZQUFiLENBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTyxTQUFTLElBQVQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixTQVJEO0FBU0EsWUFBSSxJQUFKLENBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixJQUF0QjtBQUNBLGVBQU8sSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFQO0FBQ0QsT0FaRCxNQVlPO0FBQ0wsWUFBSSxJQUFKLENBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixLQUF0QjtBQUNBLFlBQUksSUFBSixDQUFTLElBQVQ7QUFDQSxZQUFJLElBQUksTUFBSixLQUFlLEdBQWYsSUFBc0IsSUFBSSxNQUFKLEtBQWUsQ0FBekMsRUFBNEM7QUFDMUMsaUJBQU8sSUFBSSxZQUFYO0FBQ0Q7QUFDRCxlQUFPLElBQVA7QUFDRDtBQUNGLEtBckJELE1BcUJPO0FBQ0wsWUFBTSxPQUFOO0FBQ0EsV0FBSyxJQUFJLElBQUosQ0FBTDtBQUNBLFVBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixlQUFPLEdBQUcsUUFBSCxDQUFZLElBQVosRUFBa0IsVUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQjtBQUMzQyxjQUFJLEdBQUosRUFBUztBQUNQLG1CQUFPLFNBQVMsSUFBVCxDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU8sU0FBUyxPQUFPLElBQVAsQ0FBVCxDQUFQO0FBQ0Q7QUFDRixTQU5NLENBQVA7QUFPRCxPQVJELE1BUU87QUFDTCxlQUFPLEdBQUcsWUFBSCxDQUFnQixJQUFoQixDQUFQO0FBQ0EsWUFBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsaUJBQU8sT0FBTyxJQUFQLENBQVA7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRixHQTNERDs7QUE2REEsU0FBTyxLQUFQO0FBRUQsQ0FoU08sRUFBUjs7QUFrU0EsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ3hTQTtBQUNBLElBQUksTUFBSixFQUFZLE1BQVosRUFBb0IsS0FBcEIsRUFBMkIsSUFBM0I7O0FBRUEsU0FBUyxRQUFRLFVBQVIsQ0FBVDs7QUFFQSxTQUFTLFFBQVEsVUFBUixDQUFUOztBQUVBLFFBQVEsUUFBUSxTQUFSLENBQVI7O0FBRUEsT0FBUSxZQUFXO0FBQ2pCLFdBQVMsSUFBVCxHQUFnQixDQUFFOztBQUVsQixPQUFLLEtBQUwsR0FBYSxVQUFTLEtBQVQsRUFBZ0Isc0JBQWhCLEVBQXdDLGFBQXhDLEVBQXVEO0FBQ2xFLFFBQUksMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLCtCQUF5QixLQUF6QjtBQUNEO0FBQ0QsUUFBSSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRCxXQUFPLElBQUksTUFBSixHQUFhLEtBQWIsQ0FBbUIsS0FBbkIsRUFBMEIsc0JBQTFCLEVBQWtELGFBQWxELENBQVA7QUFDRCxHQVJEOztBQVVBLE9BQUssU0FBTCxHQUFpQixVQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLHNCQUF6QixFQUFpRCxhQUFqRCxFQUFnRTtBQUMvRSxRQUFJLEtBQUo7QUFDQSxRQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsaUJBQVcsSUFBWDtBQUNEO0FBQ0QsUUFBSSwwQkFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsK0JBQXlCLEtBQXpCO0FBQ0Q7QUFDRCxRQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixzQkFBZ0IsSUFBaEI7QUFDRDtBQUNELFFBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixhQUFPLE1BQU0saUJBQU4sQ0FBd0IsSUFBeEIsRUFBK0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BELGVBQU8sVUFBUyxLQUFULEVBQWdCO0FBQ3JCLGNBQUksTUFBSjtBQUNBLG1CQUFTLElBQVQ7QUFDQSxjQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQixxQkFBUyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQW1CLHNCQUFuQixFQUEyQyxhQUEzQyxDQUFUO0FBQ0Q7QUFDRCxtQkFBUyxNQUFUO0FBQ0QsU0FQRDtBQVFELE9BVG9DLENBU2xDLElBVGtDLENBQTlCLENBQVA7QUFVRCxLQVhELE1BV087QUFDTCxjQUFRLE1BQU0saUJBQU4sQ0FBd0IsSUFBeEIsQ0FBUjtBQUNBLFVBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGVBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixzQkFBbEIsRUFBMEMsYUFBMUMsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQTdCRDs7QUErQkEsT0FBSyxJQUFMLEdBQVksVUFBUyxLQUFULEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDLHNCQUFoQyxFQUF3RCxhQUF4RCxFQUF1RTtBQUNqRixRQUFJLElBQUo7QUFDQSxRQUFJLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixlQUFTLENBQVQ7QUFDRDtBQUNELFFBQUksVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGVBQVMsQ0FBVDtBQUNEO0FBQ0QsUUFBSSwwQkFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsK0JBQXlCLEtBQXpCO0FBQ0Q7QUFDRCxRQUFJLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixzQkFBZ0IsSUFBaEI7QUFDRDtBQUNELFdBQU8sSUFBSSxNQUFKLEVBQVA7QUFDQSxTQUFLLFdBQUwsR0FBbUIsTUFBbkI7QUFDQSxXQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsQ0FBekIsRUFBNEIsc0JBQTVCLEVBQW9ELGFBQXBELENBQVA7QUFDRCxHQWpCRDs7QUFtQkEsT0FBSyxTQUFMLEdBQWlCLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQyxzQkFBaEMsRUFBd0QsYUFBeEQsRUFBdUU7QUFDdEYsV0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLHNCQUFqQyxFQUF5RCxhQUF6RCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxPQUFLLElBQUwsR0FBWSxVQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLHNCQUF6QixFQUFpRCxhQUFqRCxFQUFnRTtBQUMxRSxXQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsUUFBckIsRUFBK0Isc0JBQS9CLEVBQXVELGFBQXZELENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sSUFBUDtBQUVELENBekVNLEVBQVA7O0FBMkVBLElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDcEQsU0FBTyxJQUFQLEdBQWMsSUFBZDtBQUNEOztBQUVELElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDcEQsWUFBSyxJQUFMLEdBQVksSUFBWjtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7Ozs7Ozs7QUM1RkEsU0FBUyxnQkFBVCxDQUEwQixHQUExQixFQUErQjtBQUM3QixNQUFJLFFBQVEsa0VBQVo7QUFDQSxNQUFJLE9BQU8sTUFBTSxNQUFqQjtBQUNBLE1BQUksTUFBTSxFQUFWO0FBQUEsTUFBYyxDQUFkO0FBQ0EsU0FBTyxHQUFQLEVBQVk7QUFDUixRQUFJLE1BQU0sSUFBVjtBQUNBLFdBQU8sQ0FBUDtBQUNBLFdBQU8sSUFBUDtBQUNBLFVBQU0sTUFBTSxNQUFOLENBQWEsQ0FBYixJQUFrQixHQUF4QjtBQUNIO0FBQ0QsU0FBTyxHQUFQO0FBQ0Q7O2tCQUVjLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmY7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsSUFBTSxrQkFBa0Isc0JBQXhCOztBQUVBLFNBQVMsY0FBVCxDQUF5QixLQUF6QixFQUFnQztBQUM5QixpQkFBZSxLQUFmLHVEQUFlLEtBQWY7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLFFBQUw7QUFDQSxTQUFLLFNBQUw7QUFDRSxhQUFPLEtBQVA7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJO0FBQ0Y7QUFDQSxlQUFPLFVBQVUsSUFBVixHQUFpQixFQUFqQixHQUFzQix5QkFBZSxLQUFmLENBQTdCO0FBQ0QsT0FIRCxDQUdFLE9BQU8sU0FBUCxFQUFrQjtBQUNsQixlQUFPLE9BQVA7QUFDRDtBQUNIO0FBQ0c7QUFDQTtBQUNELGFBQU8sRUFBUDtBQWZGO0FBaUJEOztBQUVEOzs7Ozs7O0FBT0EsU0FBUyxzQkFBVCxDQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE0RDtBQUFBLE1BQWYsU0FBZSx1RUFBSCxDQUFHOztBQUMxRCxNQUFJLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWpCLElBQTZCLFVBQVUsSUFBdkMsSUFBK0MsVUFBVSxTQUE3RCxFQUF3RTtBQUN0RSxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNLFVBQVUsS0FBSyxTQUFMLENBQWhCO0FBQ0EsTUFBTSxRQUFRLE1BQU0sT0FBTixDQUFkOztBQUVBLE1BQUksY0FBYyxLQUFLLE1BQUwsR0FBYyxDQUFoQyxFQUFtQztBQUNqQztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sdUJBQXVCLEtBQXZCLEVBQThCLElBQTlCLEVBQW9DLEVBQUUsU0FBdEMsQ0FBUDtBQUNEOztBQUVELFNBQVMsZUFBVCxDQUF5QixPQUF6QixFQUFrQyxJQUFsQyxFQUF3QztBQUN0QyxTQUFPLHVCQUF1QixJQUF2QixFQUE2QixRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFNBQVMsTUFBVCxDQUFpQixRQUFqQixFQUFrRTtBQUFBLE1BQXZDLElBQXVDLHVFQUFoQyxFQUFnQztBQUFBLE1BQTVCLFFBQTRCLHVFQUFqQixlQUFpQjs7QUFDaEU7QUFDQSxNQUFJLE9BQU8sUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxXQUFPLFFBQVA7QUFDRDs7QUFFRCxTQUFPLFNBQVMsT0FBVCxDQUFpQixlQUFqQixFQUFrQyxVQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEI7QUFDakUsUUFBSTtBQUNGO0FBQ0EsYUFBTyxlQUFlLFNBQVMsT0FBVCxFQUFrQixJQUFsQixDQUFmLENBQVA7QUFDRCxLQUhELENBR0UsT0FBTyxDQUFQLEVBQVU7QUFDVjtBQUNBLGFBQU8sZUFBZSxnQkFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsQ0FBZixDQUFQO0FBQ0Q7QUFDRixHQVJNLENBQVA7QUFTRDs7a0JBRWMsTTs7Ozs7Ozs7O0FDN0ZmOzs7O0FBQ0E7Ozs7OztBQUxBOzs7O0FBT0EsTUFBTSxZQUFOLENBQW1CO0FBQ2pCLE1BQUksY0FEYTtBQUVqQixRQUFNLHlDQUZXO0FBR2pCLGVBQWEsZ0RBSEk7QUFJakIsZ0JBQWMsRUFKRztBQUtqQixpQkFBZSxFQUxFO0FBTWpCLFNBQU8sUUFOVTtBQU9qQixZQUFVLElBUE87QUFRakIsV0FBUyxJQVJROztBQVVqQixjQUFZLE1BQU0sYUFBTixDQUFvQix5QkFBcEIsQ0FBOEMsVUFWekM7QUFXakIsY0FBWSxDQUFDLE1BQU0sYUFBTixDQUFvQixRQUFwQixDQUE2QixnQkFBOUIsQ0FYSzs7QUFhakIsd0JBQXNCLENBQ3BCLEVBQUUsSUFBSSxhQUFOLEVBQXFCLE1BQU0sY0FBM0IsRUFBMkMsU0FBUyxLQUFwRCxFQUEyRCxNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsTUFBMUYsRUFEb0IsRUFFcEIsRUFBRSxJQUFJLGVBQU4sRUFBdUIsTUFBTSxzQ0FBN0IsRUFBcUUsU0FBUyxJQUE5RSxFQUFvRixNQUFNLE1BQU0sS0FBTixDQUFZLFlBQVosQ0FBeUIsWUFBbkgsRUFGb0IsRUFJcEIsRUFBRSxJQUFJLGtCQUFOLEVBQTBCLE1BQU0sNEJBQWhDLEVBQThELFNBQVMsS0FBdkUsRUFBOEUsTUFBTSxNQUFNLEtBQU4sQ0FBWSxZQUFaLENBQXlCLFlBQTdHLEVBSm9CLEVBS3BCLEVBQUUsSUFBSSxVQUFOLEVBQWtCLE1BQU0sdUNBQXhCLEVBQWlFLFNBQVMsWUFBMUUsRUFBd0YsTUFBTSxNQUFNLEtBQU4sQ0FBWSxZQUFaLENBQXlCLFdBQXZILEVBTG9CLENBYkw7O0FBcUJqQixXQXJCaUIscUJBcUJQLE1BckJPLEVBcUJDLE9BckJELEVBcUJVLE1BckJWLEVBcUJrQjtBQUNqQyxRQUFJLFVBQVUsc0JBQVksc0JBQWMsRUFBRSxnQkFBRixFQUFkLEVBQTJCLE9BQU8sYUFBbEMsQ0FBWixDQUFkOztBQUVBLFdBQU8sUUFBUSxvQkFBUixFQUFQO0FBQ0QsR0F6QmdCOzs7QUEyQmpCLFVBQVEsZ0JBQVUsTUFBVixFQUFrQixJQUFsQixFQUF3QixLQUF4QixFQUErQixPQUEvQixFQUF3Qzs7QUFFOUMsUUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLENBQUosRUFBcUI7QUFDbkIsYUFBTyxvQkFBQyxLQUFELENBQU8sS0FBUCxDQUFhLE9BQWIsT0FBUDtBQUNEOztBQUVELFFBQUksVUFBVSxzQkFBWSxzQkFBYyxFQUFFLGdCQUFGLEVBQWQsRUFBMkIsT0FBTyxhQUFsQyxDQUFaLENBQWQ7O0FBR0EsV0FDRTtBQUNFLGNBQVEsTUFEVjtBQUVFLFlBQU0sSUFGUjtBQUdFLGVBQVMsT0FIWDtBQUlFLGVBQVM7QUFKWCxNQURGO0FBUUQ7QUE1Q2dCLENBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcbiIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG4iLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFRhbWVyIG9uIDA2LzExLzIwMTcuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgQWN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25zIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQWN0aW9ucy5cbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBcbiAgICogQG1lbWJlcm9mIEFjdGlvbnNcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG8pIHtcbiAgICB0aGlzLnRvb2xib3ggPSBvLnRvb2xib3g7XG4gICAgdGhpcy5kZXBsb3ltZW50SWQgPSBvLmRlcGxveW1lbnRJZDtcbiAgICB0aGlzLmJsdWVwcmludElkID0gby5ibHVlcHJpbnRJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgb3V0cHV0IGRhdGFcbiAgICogXG4gICAqIEByZXR1cm5zIFxuICAgKiBAbWVtYmVyb2YgQWN0aW9uc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZG9HZXREZXBsb3ltZW50KCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAge1xuICAgICAgICBpZDogJ29zJyxcbiAgICAgICAgdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgZmxleDogMTAwLFxuICAgICAgICBwb3NpdGlvbjogNTAsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnT3BlcmF0aW5nIFN5c3RlbScsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgU2VsZWN0IHRoZSBPUycsXG4gICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1dpbmRvd3MnLCB2YWx1ZTogJ3dpbmRvd3MnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdMaW51eCcsIHZhbHVlOiAnbGludXgnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfYnV0dG9uJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGZsZXg6IDEwMCxcbiAgICAgICAgcG9zaXRpb246IDEwMSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBCdXR0b24nLFxuICAgICAgICAgIGNpcmN1bGFyOiBmYWxzZSxcbiAgICAgICAgICBpY29uOiAnZmFjZWJvb2snLCAvLyBsaXN0IG9mIGljb25zIGh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24gbGFiZWwgd2lsbCBvdmVyd3JpdGVcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJywgLy8gcmVkLCBvcmFuZ2UsIHllbGxvdywgb2xpdmUsIGdyZWVuLCB0ZWFsLCBibHVlLCB2aW9sZXQsIHB1cnBsZSwgcGluaywgYnJvd24sIGdyZXksIGJsYWNrLFxuICAgICAgICAgIGFjdGlvbjogJ2NyZWF0ZURlcGxveW1lbnQnXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ215X2lucHV0JyxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdNeSBJbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdDogJ0hlbGxvIElucHV0JyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBFbnRlciBZb3VyIERhdGEnLFxuICAgICAgICAgIGlzUGFzc3dvcmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfY2hlY2tib3gnLFxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IENoZWNrYm94JyxcbiAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfdG9nZ2xlJyxcbiAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgVG9nZ2xlJyxcbiAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfcmFkaW8nLFxuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IFJhZGlvJyxcbiAgICAgICAgICBkZWZhdWx0OiAnb3AxJyxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMScsIHZhbHVlOiAnb3AxJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDInLCB2YWx1ZTogJ29wMicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAzJywgdmFsdWU6ICdvcDMnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbXlfZHJvcGRvd24nLFxuICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICBmbGV4OiAzMyxcbiAgICAgICAgcG9zaXRpb246IDk5LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsYWJlbDogJ015IERyb3Bkb3duJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0hlbGxvIERyb3Bkb3duJyxcbiAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0OiBbJ29wMSddLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ09wdGlvbiAxJywgdmFsdWU6ICdvcDEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPcHRpb24gMicsIHZhbHVlOiAnb3AyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT3B0aW9uIDMnLCB2YWx1ZTogJ29wMycgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9yYW5nZScsXG4gICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgIGZsZXg6IDMzLFxuICAgICAgICBwb3NpdGlvbjogOTksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgUmFuZ2UnLFxuICAgICAgICAgIGRlZmF1bHQ6IDIwLFxuICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgZmxleDogMzMsXG4gICAgICAgIHBvc2l0aW9uOiA5OSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbGFiZWw6ICdIZWxsbyBpIGFtIGEgTWVzc2FnZScsXG4gICAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdteV9zZWxlY3Rib3gnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0Ym94JyxcbiAgICAgICAgZmxleDogMTAwLFxuICAgICAgICBwb3NpdGlvbjogOTcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxhYmVsOiAnTXkgU2VsZWN0Qm94JyxcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxoMT57e3RleHR9fTwvaDE+PHA+e3t2YWx1ZX19PC9wPicsXG4gICAgICAgICAgc3R5bGU6IDEsIC8vIDEgb3IgMlxuICAgICAgICAgIGRlZmF1bHQ6ICcyYicsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAneC1zbWFsbCcsIHZhbHVlOiAnMW0nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdzbWFsbCcsIHZhbHVlOiAnMmInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdtZWRpdW0nLCB2YWx1ZTogJzNtJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnbGFyZ2UnLCB2YWx1ZTogJzVsJyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSk7XG4gICAgLy8gcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9HZXQoYC9kZXBsb3ltZW50cy8ke3RoaXMuZGVwbG95bWVudElkfWApO1xuICB9XG5cbiAgZG9HZXRJbnB1dERlc2NyaXB0b3IocGF0aCA9ICdpbnB1dF9kZXNjcmlwdG9yLnlhbWwnKSB7XG4gICAgY29uc29sZS5sb2coe3BhdGh9KVxuICAgIHJldHVybiB0aGlzLmRvR2V0RmlsZXNUcmVlKHRoaXMuYmx1ZXByaW50SWQpLnRoZW4oZmlsZXMgPT4ge1xuICAgICAgbGV0IGZpbGUgPSBmaWxlcy5jaGlsZHJlblswXS5jaGlsZHJlbi5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gcGF0aCk7XG4gICAgICBpZihmaWxlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9HZXRGaWxlQ29udGVudChmaWxlLmtleSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGAke3BhdGh9IG5vdCBmb3VuZC5gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZG9HZXRCbHVlcHJpbnRJZChkZXBsb3ltZW50SWQpIHtcbiAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb0dldChgL2RlcGxveW1lbnRzLyR7ZGVwbG95bWVudElkfT9faW5jbHVkZT1pZCxibHVlcHJpbnRfaWRgKTtcbiAgfVxuXG4gIGRvR2V0RmlsZXNUcmVlKGJsdWVwcmludElkKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRJbnRlcm5hbCgpLmRvR2V0KGAvc291cmNlL2Jyb3dzZS8ke2JsdWVwcmludElkfS9hcmNoaXZlYCk7XG4gIH1cblxuICBkb0dldEZpbGVDb250ZW50KHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy50b29sYm94LmdldEludGVybmFsKCkuZG9HZXQoJy9zb3VyY2UvYnJvd3NlL2ZpbGUnLCB7IHBhdGggfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBUYW1lciBvbiAxOS8xMC8yMDE3LlxuICovXG5pbXBvcnQgWUFNTCBmcm9tICcuL3V0aWxzL1lBTUwnO1xuaW1wb3J0IGJhc2UxMHRvNjQgZnJvbSAnLi91dGlscy9iYXNlMTB0bzY0JztcbmltcG9ydCBTZWxlY3RCb3ggZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdEJveCc7XG5cbi8qKlxuICogQGNsYXNzIExpc3RcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMaXN0LlxuICAgKiBAcGFyYW0ge2FueX0gcHJvcHMgXG4gICAqIEBwYXJhbSB7YW55fSBjb250ZXh0IFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy50b29sYm94LmdldE1hbmFnZXIoKS5nZXRDdXJyZW50VXNlcm5hbWUoKTtcbiAgICBjb25zdCBibHVlcHJpbnQgPSB0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLmJsdWVwcmludElkO1xuICAgIGNvbnN0IHRpbWU2NCA9IGJhc2UxMHRvNjQoTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmlzdWFsX2RhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBkZXBsb3ltZW50VGl0bGU6IGBhZG1pbiBkZXBsb3ltZW50ICR7dXNlcn1fJHtibHVlcHJpbnR9XyR7dGltZTY0fWAsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHlhbWxFcnJvcjogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkub24oJ2Rldm1vZGU6cmVuZGVyJywgcmVzID0+IHJlcy53aWRnZXRJZCA9PT0gdGhpcy5wcm9wcy53aWRnZXQuaWQgJiYgdGhpcy5yZW5kZXJKU09OMllBTUwocmVzLmRhdGEpLCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLnRvb2xib3guZ2V0RXZlbnRCdXMoKS50cmlnZ2VyKCdkZXZtb2RlOnVwZGF0ZScsIGRhdGEsIHRoaXMucHJvcHMud2lkZ2V0KTtcblxuICAgIHRoaXMucmVuZGVySlNPTjJZQU1MKGRhdGEpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudG9vbGJveC5nZXRFdmVudEJ1cygpLm9mZignZGV2bW9kZTpyZW5kZXInLCB0aGlzLl9kZXZtb2RlLCB0aGlzKTtcbiAgfVxuXG4gIHJlbmRlckpTT04yWUFNTCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB5YW1sRXJyb3I6IG51bGwgfSlcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGEgPSBZQU1MLnBhcnNlKHZhbHVlKTtcbiAgICAgIHRoaXMucHJlcGFyZURhdGEoZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHlhbWxFcnJvcjogZS5tZXNzYWdlIH0pXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZURhdGEoZGF0YSkge1xuXG4gICAgLy8gZXh0cmFjdCBhdmFpbGFibGUgaW5wdXRzIHRvIHRoZSBsb29wXG4gICAgY29uc3QgdmlzdWFsX2RhdGEgPSBkYXRhLmZpbHRlcihlID0+IFtcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnY2hlY2tib3gnLFxuICAgICAgJ3RvZ2dsZScsXG4gICAgICAncmFkaW8nLFxuICAgICAgJ2Ryb3Bkb3duJyxcbiAgICAgICdyYW5nZScsXG4gICAgICAnbWVzc2FnZScsXG4gICAgICAnc2VsZWN0Ym94J1xuICAgIF0uaW5jbHVkZXMoZS50eXBlKSk7XG5cbiAgICBjb25zb2xlLmxvZyh7IHZpc3VhbF9kYXRhIH0pXG5cbiAgICAvLyBzb3J0IGl0ZW1zIGJ5IHBvc2l0aW9uXG4gICAgdmlzdWFsX2RhdGEuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGF0YVxuICAgIGxldCBmb3JtID0ge307XG4gICAgdmlzdWFsX2RhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgZm9ybVtpdGVtLmlkXSA9IGl0ZW0ucGFyYW1zLmRlZmF1bHQ7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSwgdmlzdWFsX2RhdGEgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoaWQsIHZhbHVlKSA9PiB7XG4gICAgLy8gVE9ETzogYmVmb3JlIHN1Ym1pdCBjaGVjayBmb3IgYXJyYXlzIHRvIGpvaW4gdGhlbVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtOiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZm9ybSwgeyBbaWRdOiB2YWx1ZSB9KSB9KTtcbiAgICBjb25zb2xlLmxvZygnZm9ybSBzdGF0ZScsIHRoaXMuc3RhdGUuZm9ybSk7XG4gIH1cblxuICBfY3JlYXRlRGVwbG95bWVudCA9ICgpID0+IHtcbiAgICBsZXQgZXJyb3JzID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5mb3JtKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIG1vcmUgdmFsaWRhdGlvbnMgbWV0aG9kcywgYnkgZGVmYXVsdCBub3cgaXMgcmVxdWlyZWRcbiAgICAgIGlmIChfLmlzTmlsKHRoaXMuc3RhdGUuZm9ybVtpdGVtXSkgfHwgdGhpcy5zdGF0ZS5mb3JtW2l0ZW1dID09PSAnJykge1xuICAgICAgICBlcnJvcnNbaXRlbV0gPSAncmVxdWlyZWQnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZXJyb3JzLmVycm9yID0gJ1BsZWFzZSBjaGVjayBlcnJvcnMgZ2l2ZW4gYmVsb3cnO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICBjb25zdCBibHVlcHJpbnQgPSB0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLmJsdWVwcmludElkO1xuICAgICAgY29uc3QgZGVwbG95bWVudCA9IHRoaXMuc3RhdGUuZGVwbG95bWVudFRpdGxlO1xuICAgICAgY29uc3QgcHJpdmF0ZVJlc291cmNlID0gZmFsc2U7XG4gICAgICBjb25zdCBza2lwUGx1Z2luc1ZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICAgIFxuICAgICAgY29uc3QgZGVwbG95bWVudF9pbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmZvcm0sIHtkZXBsb3ltZW50X2lkOiAncmVxdWVzdF90b19hZG1pbl8nICsgZGVwbG95bWVudH0pXG5cbiAgICAgIGNvbnN0IGlucHV0cyA9IHtcbiAgICAgICAgJ2JsdWVwcmludF9pZCc6ICdzZXJ2aWNlJyxcbiAgICAgICAgJ2RlcGxveW1lbnRfaW5wdXRzJzogZGVwbG95bWVudF9pbnB1dHNcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIHZhciBhY3Rpb25zID0gbmV3IFN0YWdlLkNvbW1vbi5CbHVlcHJpbnRBY3Rpb25zKHRoaXMucHJvcHMudG9vbGJveCk7XG4gICAgICBhY3Rpb25zLmRvRGVwbG95KHsgaWQ6IGJsdWVwcmludCB9LCBkZXBsb3ltZW50LCBpbnB1dHMsIHByaXZhdGVSZXNvdXJjZSwgc2tpcFBsdWdpbnNWYWxpZGF0aW9uKVxuICAgICAgICAudGhlbigoZGVwbG95bWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3JzOiB7fSwgc3VjY2VzczogJ1lvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGF3YWl0aW5nIGFwcHJvdmFsJyB9KTtcbiAgICAgICAgICBjb25zdCBvbkZpbmlzaFJlZGlyZWN0ID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5vbkZpbmlzaFJlZGlyZWN0O1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi50ZW1wbGF0ZTtcbiAgICAgICAgICBpZiAob25GaW5pc2hSZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmRyaWxsRG93bih0aGlzLnByb3BzLndpZGdldCwgdGVtcGxhdGUsIHsgZGVwbG95bWVudElkOiBkZXBsb3ltZW50LmlkIH0sIGRlcGxveW1lbnQuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yczogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHwgUmVhY3QgUmVuZGVyZXJcbiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFN0YWdlLkJhc2ljLkxvYWRpbmcgLz47XG4gICAgfVxuXG4gICAgY29uc3Qge0J1dHRvbiwgSW5wdXQsIENoZWNrYm94LCBEcm9wZG93biwgTWVzc2FnZSwgQ2FyZH0gPSBTdGFnZS5CYXNpYztcblxuICAgIC8qKlxuICAgICAqIGNoYXJ0cyB2aXN1YWwgb3V0cHV0XG4gICAgICovXG4gICAgY29uc3QgdmlzdWFscyA9IHRoaXMuc3RhdGUudmlzdWFsX2RhdGEubWFwKChpdGVtLCBpZHgpID0+IDxkaXYgY2xhc3NOYW1lPSdjaGFydC1ib3gnIGtleT17aWR4fSBzdHlsZT17eyBmbGV4QmFzaXM6IChpdGVtLmZsZXggfHwgMzMpICsgJyUnIH19PlxuXG4gICAgICB7aXRlbS50eXBlID09PSAnYnV0dG9uJyAmJiA8QnV0dG9uXG4gICAgICAgIGZsdWlkPXshaXRlbS5wYXJhbXMuY2lyY3VsYXJ9XG4gICAgICAgIGNvbG9yPXtpdGVtLnBhcmFtcy5jb2xvcn1cbiAgICAgICAgY2lyY3VsYXI9e2l0ZW0ucGFyYW1zLmNpcmN1bGFyfVxuICAgICAgICBpY29uPXtpdGVtLnBhcmFtcy5sYWJlbCA/IGZhbHNlIDogaXRlbS5wYXJhbXMuaWNvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGl0ZW0ucGFyYW1zLmFjdGlvbiA9PT0gJ2NyZWF0ZURlcGxveW1lbnQnICYmIHRoaXMuX2NyZWF0ZURlcGxveW1lbnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAge2l0ZW0ucGFyYW1zLmxhYmVsfVxuICAgICAgPC9CdXR0b24+fVxuXG4gICAgICB7aXRlbS50eXBlID09PSAnaW5wdXQnICYmIDxJbnB1dFxuICAgICAgICBmbHVpZFxuICAgICAgICB0eXBlPXtpdGVtLnBhcmFtcy5pc1Bhc3N3b3JkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J31cbiAgICAgICAgbGFiZWw9e2l0ZW0ucGFyYW1zLmxhYmVsfVxuICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wYXJhbXMucGxhY2Vob2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgIG9uQ2hhbmdlPXsocHJveHksIG9wdGlvbnMpID0+IHRoaXMuaGFuZGxlQ2hhbmdlLmNhbGwodGhpcywgaXRlbS5pZCwgb3B0aW9ucy52YWx1ZSl9XG4gICAgICAgIC8+fVxuXG4gICAgICB7aXRlbS50eXBlID09PSAnY2hlY2tib3gnICYmIDxDaGVja2JveFxuICAgICAgICBsYWJlbD17aXRlbS5wYXJhbXMubGFiZWx9XG4gICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBvcHRpb25zLmNoZWNrZWQpfVxuICAgICAgICAvPn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ3RvZ2dsZScgJiYgPENoZWNrYm94XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICBsYWJlbD17aXRlbS5wYXJhbXMubGFiZWx9XG4gICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBvcHRpb25zLmNoZWNrZWQpfVxuICAgICAgICAvPn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ3JhZGlvJyAmJiA8ZGl2PlxuICAgICAgICA8Yj57aXRlbS5wYXJhbXMubGFiZWx9PC9iPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtpdGVtLnBhcmFtcy5vcHRpb25zLm1hcCgob3B0aW9uLCBpZHgpID0+IDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgIG5hbWU9e2l0ZW0uaWR9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb3JtW2l0ZW0uaWRdID09PSBvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHByb3h5LCBvcHRpb25zKSA9PiB0aGlzLmhhbmRsZUNoYW5nZS5jYWxsKHRoaXMsIGl0ZW0uaWQsIG9wdGlvbnMudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgIDwvZGl2Pn1cblxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJyAmJiA8ZGl2PlxuICAgICAgICA8Yj57aXRlbS5wYXJhbXMubGFiZWx9PC9iPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgbXVsdGlwbGU9e2l0ZW0ucGFyYW1zLm11bHRpcGxlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBhcmFtcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICBvcHRpb25zPXtpdGVtLnBhcmFtcy5vcHRpb25zfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1baXRlbS5pZF19XG4gICAgICAgICAgb25DaGFuZ2U9eyhwcm94eSwgb3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBvcHRpb25zLnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+fVxuXG4gICAgICB7aXRlbS50eXBlID09PSAncmFuZ2UnICYmIDxkaXY+XG4gICAgICAgIDxiPntpdGVtLnBhcmFtcy5sYWJlbH08L2I+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICBzdGVwPXtpdGVtLnBhcmFtcy5zdGVwIHx8IDF9XG4gICAgICAgICAgbWluPXtpdGVtLnBhcmFtcy5taW4gfHwgMH1cbiAgICAgICAgICBtYXg9e2l0ZW0ucGFyYW1zLm1heCB8fCAxMDB9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJveHkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCBwcm94eS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+fVxuXG4gICAgICB7aXRlbS50eXBlID09PSAnbWVzc2FnZScgJiYgPE1lc3NhZ2VcbiAgICAgICAgY29sb3I9e2l0ZW0ucGFyYW1zLmNvbG9yfVxuICAgICAgICA+e2l0ZW0ucGFyYW1zLmxhYmVsfTwvTWVzc2FnZT59XG5cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdzZWxlY3Rib3gnICYmIDxkaXY+XG4gICAgICAgIDxiPntpdGVtLnBhcmFtcy5sYWJlbH08L2I+XG4gICAgICAgIDxiciAvPjxTZWxlY3RCb3hcbiAgICAgICAgICBzdHlsZT17aXRlbS5wYXJhbXMuc3R5bGV9XG4gICAgICAgICAgdGVtcGxhdGU9e2l0ZW0ucGFyYW1zLnRlbXBsYXRlfVxuICAgICAgICAgIG9wdGlvbnM9e2l0ZW0ucGFyYW1zLm9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybVtpdGVtLmlkXX1cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UuY2FsbCh0aGlzLCBpdGVtLmlkLCB2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2Pn1cblxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLmVycm9yc1tpdGVtLmlkXSAmJlxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yc1tpdGVtLmlkXS5zcGxpdCgnLCcpLmluY2x1ZGVzKCdyZXF1aXJlZCcpICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnInPlBsZWFzZSBGaWxsIHtpdGVtLnBhcmFtcy5sYWJlbCB8fCAnRmllbGQnfXsnICd9aXRzIFJlcXVpcmVkPC9kaXY+XG4gICAgICB9XG5cbiAgICA8L2Rpdj4pO1xuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5zdGF0ZS5lcnJvcnMuZXJyb3IgJiYgKDxNZXNzYWdlIGNvbG9yPVwicmVkXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZXJyb3JzLCB7IGVycm9yOiBudWxsIH0pIH0pfSA+XG4gICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZXJyb3J9XG4gICAgPC9NZXNzYWdlPik7XG5cbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IHRoaXMuc3RhdGUuc3VjY2VzcyAmJiA8TWVzc2FnZSBjb2xvcj1cImdyZWVuXCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc3VjY2VzczogbnVsbCB9KX0gPlxuICAgICAge3RoaXMuc3RhdGUuc3VjY2Vzc31cbiAgICA8L01lc3NhZ2U+O1xuICAgIGNvbnN0IHlhbWxFcnJvciA9IHRoaXMuc3RhdGUueWFtbEVycm9yICYmIDxNZXNzYWdlIGNvbG9yPVwieWVsbG93XCIgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgeWFtbEVycm9yOiBudWxsIH0pfSA+XG4gICAgICB7dGhpcy5zdGF0ZS55YW1sRXJyb3J9XG4gICAgPC9NZXNzYWdlPjtcblxuICAgIGNvbnN0IGFsbG93TmFtZUVkaXQgPSB0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLmFsbG93TmFtZUVkaXQ7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICB7c3VjY2Vzc01lc3NhZ2V9XG4gICAgICB7eWFtbEVycm9yfVxuXG4gICAgICB7IXRoaXMuc3RhdGUuc3VjY2VzcyAmJiBhbGxvd05hbWVFZGl0ICYmIDxJbnB1dFxuICAgICAgICBmbHVpZFxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGxhYmVsPVwiRGVwbG95bWVudCBUaXRsZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIEVudGVyIFlvdXIgRGVwbG95bWVudCBUaXRsZSwgc2hvdWxkIGJlIHVuaXF1ZSBuYW1lXCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVwbG95bWVudFRpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KHByb3h5LCBvcHRpb25zKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVwbG95bWVudFRpdGxlOiBvcHRpb25zLnZhbHVlIH0pfVxuICAgICAgICAvPn1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlcGxveW1lbnQtdmlzdWFsLWNyZWF0aW9uJz5cbiAgICAgICAgeyF0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgdmlzdWFsc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFRhbWVyIG9uIDE5LzEwLzIwMTcuXG4gKi9cbmltcG9ydCBSZW5kZXIgZnJvbSAnLi4vdXRpbHMvbXVzdGFjaGUnO1xuXG5cbi8qKlxuICogQGNsYXNzIExpc3RcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExpc3QuXG4gICAqIEBwYXJhbSB7YW55fSBwcm9wcyBcbiAgICogQHBhcmFtIHthbnl9IGNvbnRleHQgXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybURhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB8IFJlYWN0IFJlbmRlcmVyXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHtvcHRpb25zLCB0ZW1wbGF0ZSwgb25DaGFuZ2UsIHZhbHVlLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsnc2VsZWN0Ym94LXN0eWxlJysoc3R5bGUgfHwgMSl9PlxuICAgICAge29wdGlvbnMubWFwKChpdGVtLCBpZHgpID0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBjbGFzc05hbWU9e1snaXRlbScsIChpdGVtLnZhbHVlID09PSB2YWx1ZSAmJiAnYWN0aXZlJyldLmpvaW4oJyAnKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpdGVtLnZhbHVlICE9PSB2YWx1ZSAmJiBvbkNoYW5nZShpdGVtLnZhbHVlKX1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFJlbmRlcih0ZW1wbGF0ZSwgaXRlbSkgfX1cbiAgICAgICAgICAvPil9XG4gICAgPC9kaXY+O1xuICB9XG59XG4iLCJcbnZhciBZYW1sID0gcmVxdWlyZSgnLi9saWIvWWFtbCcpO1xubW9kdWxlLmV4cG9ydHMgPSBZYW1sO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBEdW1wZXIsIElubGluZSwgVXRpbHM7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5JbmxpbmUgPSByZXF1aXJlKCcuL0lubGluZScpO1xuXG5EdW1wZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIER1bXBlcigpIHt9XG5cbiAgRHVtcGVyLmluZGVudGF0aW9uID0gNDtcblxuICBEdW1wZXIucHJvdG90eXBlLmR1bXAgPSBmdW5jdGlvbihpbnB1dCwgaW5saW5lLCBpbmRlbnQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpIHtcbiAgICB2YXIgaSwga2V5LCBsZW4sIG91dHB1dCwgcHJlZml4LCB2YWx1ZSwgd2lsbEJlSW5saW5lZDtcbiAgICBpZiAoaW5saW5lID09IG51bGwpIHtcbiAgICAgIGlubGluZSA9IDA7XG4gICAgfVxuICAgIGlmIChpbmRlbnQgPT0gbnVsbCkge1xuICAgICAgaW5kZW50ID0gMDtcbiAgICB9XG4gICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPT0gbnVsbCkge1xuICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0RW5jb2RlciA9PSBudWxsKSB7XG4gICAgICBvYmplY3RFbmNvZGVyID0gbnVsbDtcbiAgICB9XG4gICAgb3V0cHV0ID0gJyc7XG4gICAgcHJlZml4ID0gKGluZGVudCA/IFV0aWxzLnN0clJlcGVhdCgnICcsIGluZGVudCkgOiAnJyk7XG4gICAgaWYgKGlubGluZSA8PSAwIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ29iamVjdCcgfHwgaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8IFV0aWxzLmlzRW1wdHkoaW5wdXQpKSB7XG4gICAgICBvdXRwdXQgKz0gcHJlZml4ICsgSW5saW5lLmR1bXAoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBpbnB1dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICAgICAgd2lsbEJlSW5saW5lZCA9IGlubGluZSAtIDEgPD0gMCB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IFV0aWxzLmlzRW1wdHkodmFsdWUpO1xuICAgICAgICAgIG91dHB1dCArPSBwcmVmaXggKyAnLScgKyAod2lsbEJlSW5saW5lZCA/ICcgJyA6IFwiXFxuXCIpICsgdGhpcy5kdW1wKHZhbHVlLCBpbmxpbmUgLSAxLCAod2lsbEJlSW5saW5lZCA/IDAgOiBpbmRlbnQgKyB0aGlzLmluZGVudGF0aW9uKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RW5jb2RlcikgKyAod2lsbEJlSW5saW5lZCA/IFwiXFxuXCIgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoa2V5IGluIGlucHV0KSB7XG4gICAgICAgICAgdmFsdWUgPSBpbnB1dFtrZXldO1xuICAgICAgICAgIHdpbGxCZUlubGluZWQgPSBpbmxpbmUgLSAxIDw9IDAgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCBVdGlscy5pc0VtcHR5KHZhbHVlKTtcbiAgICAgICAgICBvdXRwdXQgKz0gcHJlZml4ICsgSW5saW5lLmR1bXAoa2V5LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSArICc6JyArICh3aWxsQmVJbmxpbmVkID8gJyAnIDogXCJcXG5cIikgKyB0aGlzLmR1bXAodmFsdWUsIGlubGluZSAtIDEsICh3aWxsQmVJbmxpbmVkID8gMCA6IGluZGVudCArIHRoaXMuaW5kZW50YXRpb24pLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSArICh3aWxsQmVJbmxpbmVkID8gXCJcXG5cIiA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIHJldHVybiBEdW1wZXI7XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRHVtcGVyO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBFc2NhcGVyLCBQYXR0ZXJuO1xuXG5QYXR0ZXJuID0gcmVxdWlyZSgnLi9QYXR0ZXJuJyk7XG5cbkVzY2FwZXIgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBjaDtcblxuICBmdW5jdGlvbiBFc2NhcGVyKCkge31cblxuICBFc2NhcGVyLkxJU1RfRVNDQVBFRVMgPSBbJ1xcXFwnLCAnXFxcXFxcXFwnLCAnXFxcXFwiJywgJ1wiJywgXCJcXHgwMFwiLCBcIlxceDAxXCIsIFwiXFx4MDJcIiwgXCJcXHgwM1wiLCBcIlxceDA0XCIsIFwiXFx4MDVcIiwgXCJcXHgwNlwiLCBcIlxceDA3XCIsIFwiXFx4MDhcIiwgXCJcXHgwOVwiLCBcIlxceDBhXCIsIFwiXFx4MGJcIiwgXCJcXHgwY1wiLCBcIlxceDBkXCIsIFwiXFx4MGVcIiwgXCJcXHgwZlwiLCBcIlxceDEwXCIsIFwiXFx4MTFcIiwgXCJcXHgxMlwiLCBcIlxceDEzXCIsIFwiXFx4MTRcIiwgXCJcXHgxNVwiLCBcIlxceDE2XCIsIFwiXFx4MTdcIiwgXCJcXHgxOFwiLCBcIlxceDE5XCIsIFwiXFx4MWFcIiwgXCJcXHgxYlwiLCBcIlxceDFjXCIsIFwiXFx4MWRcIiwgXCJcXHgxZVwiLCBcIlxceDFmXCIsIChjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUpKDB4MDA4NSksIGNoKDB4MDBBMCksIGNoKDB4MjAyOCksIGNoKDB4MjAyOSldO1xuXG4gIEVzY2FwZXIuTElTVF9FU0NBUEVEID0gWydcXFxcXFxcXCcsICdcXFxcXCInLCAnXFxcXFwiJywgJ1xcXFxcIicsIFwiXFxcXDBcIiwgXCJcXFxceDAxXCIsIFwiXFxcXHgwMlwiLCBcIlxcXFx4MDNcIiwgXCJcXFxceDA0XCIsIFwiXFxcXHgwNVwiLCBcIlxcXFx4MDZcIiwgXCJcXFxcYVwiLCBcIlxcXFxiXCIsIFwiXFxcXHRcIiwgXCJcXFxcblwiLCBcIlxcXFx2XCIsIFwiXFxcXGZcIiwgXCJcXFxcclwiLCBcIlxcXFx4MGVcIiwgXCJcXFxceDBmXCIsIFwiXFxcXHgxMFwiLCBcIlxcXFx4MTFcIiwgXCJcXFxceDEyXCIsIFwiXFxcXHgxM1wiLCBcIlxcXFx4MTRcIiwgXCJcXFxceDE1XCIsIFwiXFxcXHgxNlwiLCBcIlxcXFx4MTdcIiwgXCJcXFxceDE4XCIsIFwiXFxcXHgxOVwiLCBcIlxcXFx4MWFcIiwgXCJcXFxcZVwiLCBcIlxcXFx4MWNcIiwgXCJcXFxceDFkXCIsIFwiXFxcXHgxZVwiLCBcIlxcXFx4MWZcIiwgXCJcXFxcTlwiLCBcIlxcXFxfXCIsIFwiXFxcXExcIiwgXCJcXFxcUFwiXTtcblxuICBFc2NhcGVyLk1BUFBJTkdfRVNDQVBFRVNfVE9fRVNDQVBFRCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgaiwgbWFwcGluZywgcmVmO1xuICAgIG1hcHBpbmcgPSB7fTtcbiAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gRXNjYXBlci5MSVNUX0VTQ0FQRUVTLmxlbmd0aDsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICBtYXBwaW5nW0VzY2FwZXIuTElTVF9FU0NBUEVFU1tpXV0gPSBFc2NhcGVyLkxJU1RfRVNDQVBFRFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH0pKCk7XG5cbiAgRXNjYXBlci5QQVRURVJOX0NIQVJBQ1RFUlNfVE9fRVNDQVBFID0gbmV3IFBhdHRlcm4oJ1tcXFxceDAwLVxcXFx4MWZdfFxceGMyXFx4ODV8XFx4YzJcXHhhMHxcXHhlMlxceDgwXFx4YTh8XFx4ZTJcXHg4MFxceGE5Jyk7XG5cbiAgRXNjYXBlci5QQVRURVJOX01BUFBJTkdfRVNDQVBFRVMgPSBuZXcgUGF0dGVybihFc2NhcGVyLkxJU1RfRVNDQVBFRVMuam9pbignfCcpLnNwbGl0KCdcXFxcJykuam9pbignXFxcXFxcXFwnKSk7XG5cbiAgRXNjYXBlci5QQVRURVJOX1NJTkdMRV9RVU9USU5HID0gbmV3IFBhdHRlcm4oJ1tcXFxcc1xcJ1wiOnt9W1xcXFxdLCYqIz9dfF5bLT98PD49ISVAYF0nKTtcblxuICBFc2NhcGVyLnJlcXVpcmVzRG91YmxlUXVvdGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuUEFUVEVSTl9DSEFSQUNURVJTX1RPX0VTQ0FQRS50ZXN0KHZhbHVlKTtcbiAgfTtcblxuICBFc2NhcGVyLmVzY2FwZVdpdGhEb3VibGVRdW90ZXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgcmVzdWx0ID0gdGhpcy5QQVRURVJOX01BUFBJTkdfRVNDQVBFRVMucmVwbGFjZSh2YWx1ZSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5NQVBQSU5HX0VTQ0FQRUVTX1RPX0VTQ0FQRURbc3RyXTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAnXCInICsgcmVzdWx0ICsgJ1wiJztcbiAgfTtcblxuICBFc2NhcGVyLnJlcXVpcmVzU2luZ2xlUXVvdGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuUEFUVEVSTl9TSU5HTEVfUVVPVElORy50ZXN0KHZhbHVlKTtcbiAgfTtcblxuICBFc2NhcGVyLmVzY2FwZVdpdGhTaW5nbGVRdW90ZXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBcIidcIiArIHZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICB9O1xuXG4gIHJldHVybiBFc2NhcGVyO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVzY2FwZXI7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIER1bXBFeGNlcHRpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5EdW1wRXhjZXB0aW9uID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKER1bXBFeGNlcHRpb24sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIER1bXBFeGNlcHRpb24obWVzc2FnZSwgcGFyc2VkTGluZSwgc25pcHBldCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5wYXJzZWRMaW5lID0gcGFyc2VkTGluZTtcbiAgICB0aGlzLnNuaXBwZXQgPSBzbmlwcGV0O1xuICB9XG5cbiAgRHVtcEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRoaXMucGFyc2VkTGluZSAhPSBudWxsKSAmJiAodGhpcy5zbmlwcGV0ICE9IG51bGwpKSB7XG4gICAgICByZXR1cm4gJzxEdW1wRXhjZXB0aW9uPiAnICsgdGhpcy5tZXNzYWdlICsgJyAobGluZSAnICsgdGhpcy5wYXJzZWRMaW5lICsgJzogXFwnJyArIHRoaXMuc25pcHBldCArICdcXCcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICc8RHVtcEV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIER1bXBFeGNlcHRpb247XG5cbn0pKEVycm9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEdW1wRXhjZXB0aW9uO1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjRcbnZhciBQYXJzZUV4Y2VwdGlvbixcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cblBhcnNlRXhjZXB0aW9uID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFBhcnNlRXhjZXB0aW9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBQYXJzZUV4Y2VwdGlvbihtZXNzYWdlLCBwYXJzZWRMaW5lLCBzbmlwcGV0KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnBhcnNlZExpbmUgPSBwYXJzZWRMaW5lO1xuICAgIHRoaXMuc25pcHBldCA9IHNuaXBwZXQ7XG4gIH1cblxuICBQYXJzZUV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRoaXMucGFyc2VkTGluZSAhPSBudWxsKSAmJiAodGhpcy5zbmlwcGV0ICE9IG51bGwpKSB7XG4gICAgICByZXR1cm4gJzxQYXJzZUV4Y2VwdGlvbj4gJyArIHRoaXMubWVzc2FnZSArICcgKGxpbmUgJyArIHRoaXMucGFyc2VkTGluZSArICc6IFxcJycgKyB0aGlzLnNuaXBwZXQgKyAnXFwnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPFBhcnNlRXhjZXB0aW9uPiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGFyc2VFeGNlcHRpb247XG5cbn0pKEVycm9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZUV4Y2VwdGlvbjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgUGFyc2VNb3JlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuUGFyc2VNb3JlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFBhcnNlTW9yZSwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gUGFyc2VNb3JlKG1lc3NhZ2UsIHBhcnNlZExpbmUsIHNuaXBwZXQpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucGFyc2VkTGluZSA9IHBhcnNlZExpbmU7XG4gICAgdGhpcy5zbmlwcGV0ID0gc25pcHBldDtcbiAgfVxuXG4gIFBhcnNlTW9yZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRoaXMucGFyc2VkTGluZSAhPSBudWxsKSAmJiAodGhpcy5zbmlwcGV0ICE9IG51bGwpKSB7XG4gICAgICByZXR1cm4gJzxQYXJzZU1vcmU+ICcgKyB0aGlzLm1lc3NhZ2UgKyAnIChsaW5lICcgKyB0aGlzLnBhcnNlZExpbmUgKyAnOiBcXCcnICsgdGhpcy5zbmlwcGV0ICsgJ1xcJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzxQYXJzZU1vcmU+ICcgKyB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQYXJzZU1vcmU7XG5cbn0pKEVycm9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZU1vcmU7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIER1bXBFeGNlcHRpb24sIEVzY2FwZXIsIElubGluZSwgUGFyc2VFeGNlcHRpb24sIFBhcnNlTW9yZSwgUGF0dGVybiwgVW5lc2NhcGVyLCBVdGlscyxcbiAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG5QYXR0ZXJuID0gcmVxdWlyZSgnLi9QYXR0ZXJuJyk7XG5cblVuZXNjYXBlciA9IHJlcXVpcmUoJy4vVW5lc2NhcGVyJyk7XG5cbkVzY2FwZXIgPSByZXF1aXJlKCcuL0VzY2FwZXInKTtcblxuVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XG5cblBhcnNlRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vUGFyc2VFeGNlcHRpb24nKTtcblxuUGFyc2VNb3JlID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vUGFyc2VNb3JlJyk7XG5cbkR1bXBFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9EdW1wRXhjZXB0aW9uJyk7XG5cbklubGluZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gSW5saW5lKCkge31cblxuICBJbmxpbmUuUkVHRVhfUVVPVEVEX1NUUklORyA9ICcoPzpcIig/OlteXCJcXFxcXFxcXF0qKD86XFxcXFxcXFwuW15cIlxcXFxcXFxcXSopKilcInxcXCcoPzpbXlxcJ10qKD86XFwnXFwnW15cXCddKikqKVxcJyknO1xuXG4gIElubGluZS5QQVRURVJOX1RSQUlMSU5HX0NPTU1FTlRTID0gbmV3IFBhdHRlcm4oJ15cXFxccyojLiokJyk7XG5cbiAgSW5saW5lLlBBVFRFUk5fUVVPVEVEX1NDQUxBUiA9IG5ldyBQYXR0ZXJuKCdeJyArIElubGluZS5SRUdFWF9RVU9URURfU1RSSU5HKTtcblxuICBJbmxpbmUuUEFUVEVSTl9USE9VU0FORF9OVU1FUklDX1NDQUxBUiA9IG5ldyBQYXR0ZXJuKCdeKC18XFxcXCspP1swLTksXSsoXFxcXC5bMC05XSspPyQnKTtcblxuICBJbmxpbmUuUEFUVEVSTl9TQ0FMQVJfQllfREVMSU1JVEVSUyA9IHt9O1xuXG4gIElubGluZS5zZXR0aW5ncyA9IHt9O1xuXG4gIElubGluZS5jb25maWd1cmUgPSBmdW5jdGlvbihleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPT0gbnVsbCkge1xuICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChvYmplY3REZWNvZGVyID09IG51bGwpIHtcbiAgICAgIG9iamVjdERlY29kZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBleGNlcHRpb25PbkludmFsaWRUeXBlO1xuICAgIHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlciA9IG9iamVjdERlY29kZXI7XG4gIH07XG5cbiAgSW5saW5lLnBhcnNlID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgY29udGV4dCwgcmVzdWx0O1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MuZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IGV4Y2VwdGlvbk9uSW52YWxpZFR5cGU7XG4gICAgdGhpcy5zZXR0aW5ncy5vYmplY3REZWNvZGVyID0gb2JqZWN0RGVjb2RlcjtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YWx1ZSA9IFV0aWxzLnRyaW0odmFsdWUpO1xuICAgIGlmICgwID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29udGV4dCA9IHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGU6IGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsXG4gICAgICBvYmplY3REZWNvZGVyOiBvYmplY3REZWNvZGVyLFxuICAgICAgaTogMFxuICAgIH07XG4gICAgc3dpdGNoICh2YWx1ZS5jaGFyQXQoMCkpIHtcbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlU2VxdWVuY2UodmFsdWUsIGNvbnRleHQpO1xuICAgICAgICArK2NvbnRleHQuaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd7JzpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZU1hcHBpbmcodmFsdWUsIGNvbnRleHQpO1xuICAgICAgICArK2NvbnRleHQuaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlU2NhbGFyKHZhbHVlLCBudWxsLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuUEFUVEVSTl9UUkFJTElOR19DT01NRU5UUy5yZXBsYWNlKHZhbHVlLnNsaWNlKGNvbnRleHQuaSksICcnKSAhPT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignVW5leHBlY3RlZCBjaGFyYWN0ZXJzIG5lYXIgXCInICsgdmFsdWUuc2xpY2UoY29udGV4dC5pKSArICdcIi4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBJbmxpbmUuZHVtcCA9IGZ1bmN0aW9uKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSB7XG4gICAgdmFyIHJlZiwgcmVzdWx0LCB0eXBlO1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdEVuY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RW5jb2RlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0RW5jb2RlciAhPSBudWxsKSB7XG4gICAgICAgIHJlc3VsdCA9IG9iamVjdEVuY29kZXIodmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgKHJlc3VsdCAhPSBudWxsKSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmR1bXBPYmplY3QodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gKHZhbHVlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfVxuICAgIGlmIChVdGlscy5pc0RpZ2l0cyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAodHlwZSA9PT0gJ3N0cmluZycgPyBcIidcIiArIHZhbHVlICsgXCInXCIgOiBTdHJpbmcocGFyc2VJbnQodmFsdWUpKSk7XG4gICAgfVxuICAgIGlmIChVdGlscy5pc051bWVyaWModmFsdWUpKSB7XG4gICAgICByZXR1cm4gKHR5cGUgPT09ICdzdHJpbmcnID8gXCInXCIgKyB2YWx1ZSArIFwiJ1wiIDogU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gMmUzMDggPyAnLkluZicgOiAodmFsdWUgPT09IC0yZTMwOCA/ICctLkluZicgOiAoaXNOYU4odmFsdWUpID8gJy5OYU4nIDogdmFsdWUpKSk7XG4gICAgfVxuICAgIGlmIChFc2NhcGVyLnJlcXVpcmVzRG91YmxlUXVvdGluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBFc2NhcGVyLmVzY2FwZVdpdGhEb3VibGVRdW90ZXModmFsdWUpO1xuICAgIH1cbiAgICBpZiAoRXNjYXBlci5yZXF1aXJlc1NpbmdsZVF1b3RpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gRXNjYXBlci5lc2NhcGVXaXRoU2luZ2xlUXVvdGVzKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCcnID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuICdcIlwiJztcbiAgICB9XG4gICAgaWYgKFV0aWxzLlBBVFRFUk5fREFURS50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFwiJ1wiICsgdmFsdWUgKyBcIidcIjtcbiAgICB9XG4gICAgaWYgKChyZWYgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSA9PT0gJ251bGwnIHx8IHJlZiA9PT0gJ34nIHx8IHJlZiA9PT0gJ3RydWUnIHx8IHJlZiA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIFwiJ1wiICsgdmFsdWUgKyBcIidcIjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIElubGluZS5kdW1wT2JqZWN0ID0gZnVuY3Rpb24odmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdFN1cHBvcnQpIHtcbiAgICB2YXIgaiwga2V5LCBsZW4xLCBvdXRwdXQsIHZhbDtcbiAgICBpZiAob2JqZWN0U3VwcG9ydCA9PSBudWxsKSB7XG4gICAgICBvYmplY3RTdXBwb3J0ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIG91dHB1dCA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHZhbHVlLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICB2YWwgPSB2YWx1ZVtqXTtcbiAgICAgICAgb3V0cHV0LnB1c2godGhpcy5kdW1wKHZhbCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdbJyArIG91dHB1dC5qb2luKCcsICcpICsgJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBbXTtcbiAgICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlW2tleV07XG4gICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZHVtcChrZXkpICsgJzogJyArIHRoaXMuZHVtcCh2YWwpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAneycgKyBvdXRwdXQuam9pbignLCAnKSArICd9JztcbiAgICB9XG4gIH07XG5cbiAgSW5saW5lLnBhcnNlU2NhbGFyID0gZnVuY3Rpb24oc2NhbGFyLCBkZWxpbWl0ZXJzLCBzdHJpbmdEZWxpbWl0ZXJzLCBjb250ZXh0LCBldmFsdWF0ZSkge1xuICAgIHZhciBpLCBqb2luZWREZWxpbWl0ZXJzLCBtYXRjaCwgb3V0cHV0LCBwYXR0ZXJuLCByZWYsIHJlZjEsIHN0cnBvcywgdG1wO1xuICAgIGlmIChkZWxpbWl0ZXJzID09IG51bGwpIHtcbiAgICAgIGRlbGltaXRlcnMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoc3RyaW5nRGVsaW1pdGVycyA9PSBudWxsKSB7XG4gICAgICBzdHJpbmdEZWxpbWl0ZXJzID0gWydcIicsIFwiJ1wiXTtcbiAgICB9XG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChldmFsdWF0ZSA9PSBudWxsKSB7XG4gICAgICBldmFsdWF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGU6IHRoaXMuc2V0dGluZ3MuZXhjZXB0aW9uT25JbnZhbGlkVHlwZSxcbiAgICAgICAgb2JqZWN0RGVjb2RlcjogdGhpcy5zZXR0aW5ncy5vYmplY3REZWNvZGVyLFxuICAgICAgICBpOiAwXG4gICAgICB9O1xuICAgIH1cbiAgICBpID0gY29udGV4dC5pO1xuICAgIGlmIChyZWYgPSBzY2FsYXIuY2hhckF0KGkpLCBpbmRleE9mLmNhbGwoc3RyaW5nRGVsaW1pdGVycywgcmVmKSA+PSAwKSB7XG4gICAgICBvdXRwdXQgPSB0aGlzLnBhcnNlUXVvdGVkU2NhbGFyKHNjYWxhciwgY29udGV4dCk7XG4gICAgICBpID0gY29udGV4dC5pO1xuICAgICAgaWYgKGRlbGltaXRlcnMgIT0gbnVsbCkge1xuICAgICAgICB0bXAgPSBVdGlscy5sdHJpbShzY2FsYXIuc2xpY2UoaSksICcgJyk7XG4gICAgICAgIGlmICghKHJlZjEgPSB0bXAuY2hhckF0KDApLCBpbmRleE9mLmNhbGwoZGVsaW1pdGVycywgcmVmMSkgPj0gMCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1VuZXhwZWN0ZWQgY2hhcmFjdGVycyAoJyArIHNjYWxhci5zbGljZShpKSArICcpLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGVsaW1pdGVycykge1xuICAgICAgICBvdXRwdXQgPSBzY2FsYXIuc2xpY2UoaSk7XG4gICAgICAgIGkgKz0gb3V0cHV0Lmxlbmd0aDtcbiAgICAgICAgc3RycG9zID0gb3V0cHV0LmluZGV4T2YoJyAjJyk7XG4gICAgICAgIGlmIChzdHJwb3MgIT09IC0xKSB7XG4gICAgICAgICAgb3V0cHV0ID0gVXRpbHMucnRyaW0ob3V0cHV0LnNsaWNlKDAsIHN0cnBvcykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqb2luZWREZWxpbWl0ZXJzID0gZGVsaW1pdGVycy5qb2luKCd8Jyk7XG4gICAgICAgIHBhdHRlcm4gPSB0aGlzLlBBVFRFUk5fU0NBTEFSX0JZX0RFTElNSVRFUlNbam9pbmVkRGVsaW1pdGVyc107XG4gICAgICAgIGlmIChwYXR0ZXJuID09IG51bGwpIHtcbiAgICAgICAgICBwYXR0ZXJuID0gbmV3IFBhdHRlcm4oJ14oLis/KSgnICsgam9pbmVkRGVsaW1pdGVycyArICcpJyk7XG4gICAgICAgICAgdGhpcy5QQVRURVJOX1NDQUxBUl9CWV9ERUxJTUlURVJTW2pvaW5lZERlbGltaXRlcnNdID0gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoc2NhbGFyLnNsaWNlKGkpKSkge1xuICAgICAgICAgIG91dHB1dCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGkgKz0gb3V0cHV0Lmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ01hbGZvcm1lZCBpbmxpbmUgWUFNTCBzdHJpbmcgKCcgKyBzY2FsYXIgKyAnKS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIG91dHB1dCA9IHRoaXMuZXZhbHVhdGVTY2FsYXIob3V0cHV0LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5pID0gaTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIElubGluZS5wYXJzZVF1b3RlZFNjYWxhciA9IGZ1bmN0aW9uKHNjYWxhciwgY29udGV4dCkge1xuICAgIHZhciBpLCBtYXRjaCwgb3V0cHV0O1xuICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgaWYgKCEobWF0Y2ggPSB0aGlzLlBBVFRFUk5fUVVPVEVEX1NDQUxBUi5leGVjKHNjYWxhci5zbGljZShpKSkpKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VNb3JlKCdNYWxmb3JtZWQgaW5saW5lIFlBTUwgc3RyaW5nICgnICsgc2NhbGFyLnNsaWNlKGkpICsgJykuJyk7XG4gICAgfVxuICAgIG91dHB1dCA9IG1hdGNoWzBdLnN1YnN0cigxLCBtYXRjaFswXS5sZW5ndGggLSAyKTtcbiAgICBpZiAoJ1wiJyA9PT0gc2NhbGFyLmNoYXJBdChpKSkge1xuICAgICAgb3V0cHV0ID0gVW5lc2NhcGVyLnVuZXNjYXBlRG91YmxlUXVvdGVkU3RyaW5nKG91dHB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IFVuZXNjYXBlci51bmVzY2FwZVNpbmdsZVF1b3RlZFN0cmluZyhvdXRwdXQpO1xuICAgIH1cbiAgICBpICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICBjb250ZXh0LmkgPSBpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgSW5saW5lLnBhcnNlU2VxdWVuY2UgPSBmdW5jdGlvbihzZXF1ZW5jZSwgY29udGV4dCkge1xuICAgIHZhciBlLCBpLCBpc1F1b3RlZCwgbGVuLCBvdXRwdXQsIHJlZiwgdmFsdWU7XG4gICAgb3V0cHV0ID0gW107XG4gICAgbGVuID0gc2VxdWVuY2UubGVuZ3RoO1xuICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgaSArPSAxO1xuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb250ZXh0LmkgPSBpO1xuICAgICAgc3dpdGNoIChzZXF1ZW5jZS5jaGFyQXQoaSkpIHtcbiAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5wYXJzZVNlcXVlbmNlKHNlcXVlbmNlLCBjb250ZXh0KSk7XG4gICAgICAgICAgaSA9IGNvbnRleHQuaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5wYXJzZU1hcHBpbmcoc2VxdWVuY2UsIGNvbnRleHQpKTtcbiAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpc1F1b3RlZCA9ICgocmVmID0gc2VxdWVuY2UuY2hhckF0KGkpKSA9PT0gJ1wiJyB8fCByZWYgPT09IFwiJ1wiKTtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VTY2FsYXIoc2VxdWVuY2UsIFsnLCcsICddJ10sIFsnXCInLCBcIidcIl0sIGNvbnRleHQpO1xuICAgICAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICAgICAgaWYgKCFpc1F1b3RlZCAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICh2YWx1ZS5pbmRleE9mKCc6ICcpICE9PSAtMSB8fCB2YWx1ZS5pbmRleE9mKFwiOlxcblwiKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VNYXBwaW5nKCd7JyArIHZhbHVlICsgJ30nKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgICAgIC0taTtcbiAgICAgIH1cbiAgICAgICsraTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFBhcnNlTW9yZSgnTWFsZm9ybWVkIGlubGluZSBZQU1MIHN0cmluZyAnICsgc2VxdWVuY2UpO1xuICB9O1xuXG4gIElubGluZS5wYXJzZU1hcHBpbmcgPSBmdW5jdGlvbihtYXBwaW5nLCBjb250ZXh0KSB7XG4gICAgdmFyIGRvbmUsIGksIGtleSwgbGVuLCBvdXRwdXQsIHNob3VsZENvbnRpbnVlV2hpbGVMb29wLCB2YWx1ZTtcbiAgICBvdXRwdXQgPSB7fTtcbiAgICBsZW4gPSBtYXBwaW5nLmxlbmd0aDtcbiAgICBpID0gY29udGV4dC5pO1xuICAgIGkgKz0gMTtcbiAgICBzaG91bGRDb250aW51ZVdoaWxlTG9vcCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb250ZXh0LmkgPSBpO1xuICAgICAgc3dpdGNoIChtYXBwaW5nLmNoYXJBdChpKSkge1xuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgY29udGV4dC5pID0gaTtcbiAgICAgICAgICBzaG91bGRDb250aW51ZVdoaWxlTG9vcCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkQ29udGludWVXaGlsZUxvb3ApIHtcbiAgICAgICAgc2hvdWxkQ29udGludWVXaGlsZUxvb3AgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBrZXkgPSB0aGlzLnBhcnNlU2NhbGFyKG1hcHBpbmcsIFsnOicsICcgJywgXCJcXG5cIl0sIFsnXCInLCBcIidcIl0sIGNvbnRleHQsIGZhbHNlKTtcbiAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICBkb25lID0gZmFsc2U7XG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBjb250ZXh0LmkgPSBpO1xuICAgICAgICBzd2l0Y2ggKG1hcHBpbmcuY2hhckF0KGkpKSB7XG4gICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucGFyc2VTZXF1ZW5jZShtYXBwaW5nLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICAgICAgICBpZiAob3V0cHV0W2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5wYXJzZU1hcHBpbmcobWFwcGluZywgY29udGV4dCk7XG4gICAgICAgICAgICBpID0gY29udGV4dC5pO1xuICAgICAgICAgICAgaWYgKG91dHB1dFtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgY2FzZSBcIlxcblwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5wYXJzZVNjYWxhcihtYXBwaW5nLCBbJywnLCAnfSddLCBbJ1wiJywgXCInXCJdLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGkgPSBjb250ZXh0Lmk7XG4gICAgICAgICAgICBpZiAob3V0cHV0W2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cbiAgICAgICAgKytpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBQYXJzZU1vcmUoJ01hbGZvcm1lZCBpbmxpbmUgWUFNTCBzdHJpbmcgJyArIG1hcHBpbmcpO1xuICB9O1xuXG4gIElubGluZS5ldmFsdWF0ZVNjYWxhciA9IGZ1bmN0aW9uKHNjYWxhciwgY29udGV4dCkge1xuICAgIHZhciBjYXN0LCBkYXRlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBmaXJzdENoYXIsIGZpcnN0U3BhY2UsIGZpcnN0V29yZCwgb2JqZWN0RGVjb2RlciwgcmF3LCBzY2FsYXJMb3dlciwgc3ViVmFsdWUsIHRyaW1tZWRTY2FsYXI7XG4gICAgc2NhbGFyID0gVXRpbHMudHJpbShzY2FsYXIpO1xuICAgIHNjYWxhckxvd2VyID0gc2NhbGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChzY2FsYXJMb3dlcikge1xuICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICBjYXNlICcnOlxuICAgICAgY2FzZSAnfic6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSAndHJ1ZSc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlICcuaW5mJzpcbiAgICAgICAgcmV0dXJuIDJlMzA4O1xuICAgICAgY2FzZSAnLm5hbic6XG4gICAgICAgIHJldHVybiAwLzA7XG4gICAgICBjYXNlICctLmluZic6XG4gICAgICAgIHJldHVybiAyZTMwODtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZpcnN0Q2hhciA9IHNjYWxhckxvd2VyLmNoYXJBdCgwKTtcbiAgICAgICAgc3dpdGNoIChmaXJzdENoYXIpIHtcbiAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgIGZpcnN0U3BhY2UgPSBzY2FsYXIuaW5kZXhPZignICcpO1xuICAgICAgICAgICAgaWYgKGZpcnN0U3BhY2UgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGZpcnN0V29yZCA9IHNjYWxhckxvd2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlyc3RXb3JkID0gc2NhbGFyTG93ZXIuc2xpY2UoMCwgZmlyc3RTcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGZpcnN0V29yZCkge1xuICAgICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RTcGFjZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnBhcnNlU2NhbGFyKHNjYWxhci5zbGljZSgyKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgY2FzZSAnIXN0cic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmx0cmltKHNjYWxhci5zbGljZSg0KSk7XG4gICAgICAgICAgICAgIGNhc2UgJyEhc3RyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHMubHRyaW0oc2NhbGFyLnNsaWNlKDUpKTtcbiAgICAgICAgICAgICAgY2FzZSAnISFpbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnBhcnNlU2NhbGFyKHNjYWxhci5zbGljZSg1KSkpO1xuICAgICAgICAgICAgICBjYXNlICchIWJvb2wnOlxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlscy5wYXJzZUJvb2xlYW4odGhpcy5wYXJzZVNjYWxhcihzY2FsYXIuc2xpY2UoNikpLCBmYWxzZSk7XG4gICAgICAgICAgICAgIGNhc2UgJyEhZmxvYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMucGFyc2VTY2FsYXIoc2NhbGFyLnNsaWNlKDcpKSk7XG4gICAgICAgICAgICAgIGNhc2UgJyEhdGltZXN0YW1wJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHMuc3RyaW5nVG9EYXRlKFV0aWxzLmx0cmltKHNjYWxhci5zbGljZSgxMSkpKTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb25PbkludmFsaWRUeXBlOiB0aGlzLnNldHRpbmdzLmV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdERlY29kZXI6IHRoaXMuc2V0dGluZ3Mub2JqZWN0RGVjb2RlcixcbiAgICAgICAgICAgICAgICAgICAgaTogMFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0RGVjb2RlciA9IGNvbnRleHQub2JqZWN0RGVjb2RlciwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IGNvbnRleHQuZXhjZXB0aW9uT25JbnZhbGlkVHlwZTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0RGVjb2Rlcikge1xuICAgICAgICAgICAgICAgICAgdHJpbW1lZFNjYWxhciA9IFV0aWxzLnJ0cmltKHNjYWxhcik7XG4gICAgICAgICAgICAgICAgICBmaXJzdFNwYWNlID0gdHJpbW1lZFNjYWxhci5pbmRleE9mKCcgJyk7XG4gICAgICAgICAgICAgICAgICBpZiAoZmlyc3RTcGFjZSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdERlY29kZXIodHJpbW1lZFNjYWxhciwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IFV0aWxzLmx0cmltKHRyaW1tZWRTY2FsYXIuc2xpY2UoZmlyc3RTcGFjZSArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoc3ViVmFsdWUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdERlY29kZXIodHJpbW1lZFNjYWxhci5zbGljZSgwLCBmaXJzdFNwYWNlKSwgc3ViVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdDdXN0b20gb2JqZWN0IHN1cHBvcnQgd2hlbiBwYXJzaW5nIGEgWUFNTCBmaWxlIGhhcyBiZWVuIGRpc2FibGVkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgaWYgKCcweCcgPT09IHNjYWxhci5zbGljZSgwLCAyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gVXRpbHMuaGV4RGVjKHNjYWxhcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzRGlnaXRzKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLm9jdERlYyhzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWVyaWMoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjYWxhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzRGlnaXRzKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmF3ID0gc2NhbGFyO1xuICAgICAgICAgICAgICBjYXN0ID0gcGFyc2VJbnQocmF3KTtcbiAgICAgICAgICAgICAgaWYgKHJhdyA9PT0gU3RyaW5nKGNhc3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhc3Q7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWVyaWMoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIudGVzdChzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNjYWxhci5yZXBsYWNlKCcsJywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBpZiAoVXRpbHMuaXNEaWdpdHMoc2NhbGFyLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgICBpZiAoJzAnID09PSBzY2FsYXIuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC1VdGlscy5vY3REZWMoc2NhbGFyLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYXcgPSBzY2FsYXIuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgY2FzdCA9IHBhcnNlSW50KHJhdyk7XG4gICAgICAgICAgICAgICAgaWYgKHJhdyA9PT0gU3RyaW5nKGNhc3QpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLWNhc3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAtcmF3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWVyaWMoc2NhbGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsYXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBBVFRFUk5fVEhPVVNBTkRfTlVNRVJJQ19TQ0FMQVIudGVzdChzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNjYWxhci5yZXBsYWNlKCcsJywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzY2FsYXI7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChkYXRlID0gVXRpbHMuc3RyaW5nVG9EYXRlKHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzTnVtZXJpYyhzY2FsYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNjYWxhcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuUEFUVEVSTl9USE9VU0FORF9OVU1FUklDX1NDQUxBUi50ZXN0KHNjYWxhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2NhbGFyLnJlcGxhY2UoJywnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNjYWxhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSW5saW5lO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgSW5saW5lLCBQYXJzZUV4Y2VwdGlvbiwgUGFyc2VNb3JlLCBQYXJzZXIsIFBhdHRlcm4sIFV0aWxzO1xuXG5JbmxpbmUgPSByZXF1aXJlKCcuL0lubGluZScpO1xuXG5QYXR0ZXJuID0gcmVxdWlyZSgnLi9QYXR0ZXJuJyk7XG5cblV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5QYXJzZUV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlRXhjZXB0aW9uJyk7XG5cblBhcnNlTW9yZSA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1BhcnNlTW9yZScpO1xuXG5QYXJzZXIgPSAoZnVuY3Rpb24oKSB7XG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9GT0xERURfU0NBTEFSX0FMTCA9IG5ldyBQYXR0ZXJuKCdeKD86KD88dHlwZT4hW15cXFxcfD5dKilcXFxccyspPyg/PHNlcGFyYXRvcj5cXFxcfHw+KSg/PG1vZGlmaWVycz5cXFxcK3xcXFxcLXxcXFxcZCt8XFxcXCtcXFxcZCt8XFxcXC1cXFxcZCt8XFxcXGQrXFxcXCt8XFxcXGQrXFxcXC0pPyg/PGNvbW1lbnRzPiArIy4qKT8kJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfRU5EID0gbmV3IFBhdHRlcm4oJyg/PHNlcGFyYXRvcj5cXFxcfHw+KSg/PG1vZGlmaWVycz5cXFxcK3xcXFxcLXxcXFxcZCt8XFxcXCtcXFxcZCt8XFxcXC1cXFxcZCt8XFxcXGQrXFxcXCt8XFxcXGQrXFxcXC0pPyg/PGNvbW1lbnRzPiArIy4qKT8kJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX1NFUVVFTkNFX0lURU0gPSBuZXcgUGF0dGVybignXlxcXFwtKCg/PGxlYWRzcGFjZXM+XFxcXHMrKSg/PHZhbHVlPi4rPykpP1xcXFxzKiQnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fQU5DSE9SX1ZBTFVFID0gbmV3IFBhdHRlcm4oJ14mKD88cmVmPlteIF0rKSAqKD88dmFsdWU+LiopJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0NPTVBBQ1RfTk9UQVRJT04gPSBuZXcgUGF0dGVybignXig/PGtleT4nICsgSW5saW5lLlJFR0VYX1FVT1RFRF9TVFJJTkcgKyAnfFteIFxcJ1wiXFxcXHtcXFxcW10uKj8pICpcXFxcOihcXFxccysoPzx2YWx1ZT4uKz8pKT9cXFxccyokJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX01BUFBJTkdfSVRFTSA9IG5ldyBQYXR0ZXJuKCdeKD88a2V5PicgKyBJbmxpbmUuUkVHRVhfUVVPVEVEX1NUUklORyArICd8W14gXFwnXCJcXFxcW1xcXFx7XS4qPykgKlxcXFw6KFxcXFxzKyg/PHZhbHVlPi4rPykpP1xcXFxzKiQnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fREVDSU1BTCA9IG5ldyBQYXR0ZXJuKCdcXFxcZCsnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fSU5ERU5UX1NQQUNFUyA9IG5ldyBQYXR0ZXJuKCdeICsnKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fVFJBSUxJTkdfTElORVMgPSBuZXcgUGF0dGVybignKFxcbiopJCcpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9ZQU1MX0hFQURFUiA9IG5ldyBQYXR0ZXJuKCdeXFxcXCVZQU1MWzogXVtcXFxcZFxcXFwuXSsuKlxcbicsICdtJyk7XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0xFQURJTkdfQ09NTUVOVFMgPSBuZXcgUGF0dGVybignXihcXFxcIy4qP1xcbikrJywgJ20nKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRE9DVU1FTlRfTUFSS0VSX1NUQVJUID0gbmV3IFBhdHRlcm4oJ15cXFxcLVxcXFwtXFxcXC0uKj9cXG4nLCAnbScpO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuUEFUVEVSTl9ET0NVTUVOVF9NQVJLRVJfRU5EID0gbmV3IFBhdHRlcm4oJ15cXFxcLlxcXFwuXFxcXC5cXFxccyokJywgJ20nKTtcblxuICBQYXJzZXIucHJvdG90eXBlLlBBVFRFUk5fRk9MREVEX1NDQUxBUl9CWV9JTkRFTlRBVElPTiA9IHt9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuQ09OVEVYVF9OT05FID0gMDtcblxuICBQYXJzZXIucHJvdG90eXBlLkNPTlRFWFRfU0VRVUVOQ0UgPSAxO1xuXG4gIFBhcnNlci5wcm90b3R5cGUuQ09OVEVYVF9NQVBQSU5HID0gMjtcblxuICBmdW5jdGlvbiBQYXJzZXIob2Zmc2V0KSB7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQgIT0gbnVsbCA/IG9mZnNldCA6IDA7XG4gICAgdGhpcy5saW5lcyA9IFtdO1xuICAgIHRoaXMuY3VycmVudExpbmVOYiA9IC0xO1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAnJztcbiAgICB0aGlzLnJlZnMgPSB7fTtcbiAgfVxuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbih2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIHZhciBhbGlhcywgYWxsb3dPdmVyd3JpdGUsIGJsb2NrLCBjLCBjb250ZXh0LCBkYXRhLCBlLCBmaXJzdCwgaSwgaW5kZW50LCBpc1JlZiwgaiwgaywga2V5LCBsLCBsYXN0S2V5LCBsZW4sIGxlbjEsIGxlbjIsIGxlbjMsIGxpbmVDb3VudCwgbSwgbWF0Y2hlcywgbWVyZ2VOb2RlLCBuLCBuYW1lLCBwYXJzZWQsIHBhcnNlZEl0ZW0sIHBhcnNlciwgcmVmLCByZWYxLCByZWYyLCByZWZOYW1lLCByZWZWYWx1ZSwgdmFsLCB2YWx1ZXM7XG4gICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPT0gbnVsbCkge1xuICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0RGVjb2RlciA9PSBudWxsKSB7XG4gICAgICBvYmplY3REZWNvZGVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50TGluZU5iID0gLTE7XG4gICAgdGhpcy5jdXJyZW50TGluZSA9ICcnO1xuICAgIHRoaXMubGluZXMgPSB0aGlzLmNsZWFudXAodmFsdWUpLnNwbGl0KFwiXFxuXCIpO1xuICAgIGRhdGEgPSBudWxsO1xuICAgIGNvbnRleHQgPSB0aGlzLkNPTlRFWFRfTk9ORTtcbiAgICBhbGxvd092ZXJ3cml0ZSA9IGZhbHNlO1xuICAgIHdoaWxlICh0aGlzLm1vdmVUb05leHRMaW5lKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzQ3VycmVudExpbmVFbXB0eSgpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKFwiXFx0XCIgPT09IHRoaXMuY3VycmVudExpbmVbMF0pIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdBIFlBTUwgZmlsZSBjYW5ub3QgY29udGFpbiB0YWJzIGFzIGluZGVudGF0aW9uLicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgfVxuICAgICAgaXNSZWYgPSBtZXJnZU5vZGUgPSBmYWxzZTtcbiAgICAgIGlmICh2YWx1ZXMgPSB0aGlzLlBBVFRFUk5fU0VRVUVOQ0VfSVRFTS5leGVjKHRoaXMuY3VycmVudExpbmUpKSB7XG4gICAgICAgIGlmICh0aGlzLkNPTlRFWFRfTUFQUElORyA9PT0gY29udGV4dCkge1xuICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignWW91IGNhbm5vdCBkZWZpbmUgYSBzZXF1ZW5jZSBpdGVtIHdoZW4gaW4gYSBtYXBwaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dCA9IHRoaXMuQ09OVEVYVF9TRVFVRU5DRTtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlcy52YWx1ZSAhPSBudWxsKSAmJiAobWF0Y2hlcyA9IHRoaXMuUEFUVEVSTl9BTkNIT1JfVkFMVUUuZXhlYyh2YWx1ZXMudmFsdWUpKSkge1xuICAgICAgICAgIGlzUmVmID0gbWF0Y2hlcy5yZWY7XG4gICAgICAgICAgdmFsdWVzLnZhbHVlID0gbWF0Y2hlcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgfHwgJycgPT09IFV0aWxzLnRyaW0odmFsdWVzLnZhbHVlLCAnICcpIHx8IFV0aWxzLmx0cmltKHZhbHVlcy52YWx1ZSwgJyAnKS5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGluZU5iIDwgdGhpcy5saW5lcy5sZW5ndGggLSAxICYmICF0aGlzLmlzTmV4dExpbmVVbkluZGVudGVkQ29sbGVjdGlvbigpKSB7XG4gICAgICAgICAgICBjID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoYyk7XG4gICAgICAgICAgICBwYXJzZXIucmVmcyA9IHRoaXMucmVmcztcbiAgICAgICAgICAgIGRhdGEucHVzaChwYXJzZXIucGFyc2UodGhpcy5nZXROZXh0RW1iZWRCbG9jayhudWxsLCB0cnVlKSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2RlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhLnB1c2gobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgoKHJlZiA9IHZhbHVlcy5sZWFkc3BhY2VzKSAhPSBudWxsID8gcmVmLmxlbmd0aCA6IHZvaWQgMCkgJiYgKG1hdGNoZXMgPSB0aGlzLlBBVFRFUk5fQ09NUEFDVF9OT1RBVElPTi5leGVjKHZhbHVlcy52YWx1ZSkpKSB7XG4gICAgICAgICAgICBjID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpO1xuICAgICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihjKTtcbiAgICAgICAgICAgIHBhcnNlci5yZWZzID0gdGhpcy5yZWZzO1xuICAgICAgICAgICAgYmxvY2sgPSB2YWx1ZXMudmFsdWU7XG4gICAgICAgICAgICBpbmRlbnQgPSB0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmV4dExpbmVJbmRlbnRlZChmYWxzZSkpIHtcbiAgICAgICAgICAgICAgYmxvY2sgKz0gXCJcXG5cIiArIHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2soaW5kZW50ICsgdmFsdWVzLmxlYWRzcGFjZXMubGVuZ3RoICsgMSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnB1c2gocGFyc2VyLnBhcnNlKGJsb2NrLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCh0aGlzLnBhcnNlVmFsdWUodmFsdWVzLnZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCh2YWx1ZXMgPSB0aGlzLlBBVFRFUk5fTUFQUElOR19JVEVNLmV4ZWModGhpcy5jdXJyZW50TGluZSkpICYmIHZhbHVlcy5rZXkuaW5kZXhPZignICMnKSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuQ09OVEVYVF9TRVFVRU5DRSA9PT0gY29udGV4dCkge1xuICAgICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignWW91IGNhbm5vdCBkZWZpbmUgYSBtYXBwaW5nIGl0ZW0gd2hlbiBpbiBhIHNlcXVlbmNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dCA9IHRoaXMuQ09OVEVYVF9NQVBQSU5HO1xuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIElubGluZS5jb25maWd1cmUoZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAga2V5ID0gSW5saW5lLnBhcnNlU2NhbGFyKHZhbHVlcy5rZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICBlLnBhcnNlZExpbmUgPSB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxO1xuICAgICAgICAgIGUuc25pcHBldCA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJzw8JyA9PT0ga2V5KSB7XG4gICAgICAgICAgbWVyZ2VOb2RlID0gdHJ1ZTtcbiAgICAgICAgICBhbGxvd092ZXJ3cml0ZSA9IHRydWU7XG4gICAgICAgICAgaWYgKCgocmVmMSA9IHZhbHVlcy52YWx1ZSkgIT0gbnVsbCA/IHJlZjEuaW5kZXhPZignKicpIDogdm9pZCAwKSA9PT0gMCkge1xuICAgICAgICAgICAgcmVmTmFtZSA9IHZhbHVlcy52YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnNbcmVmTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1JlZmVyZW5jZSBcIicgKyByZWZOYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0LicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmVmFsdWUgPSB0aGlzLnJlZnNbcmVmTmFtZV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZlZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1lBTUwgbWVyZ2Uga2V5cyB1c2VkIHdpdGggYSBzY2FsYXIgdmFsdWUgaW5zdGVhZCBvZiBhbiBvYmplY3QuJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVmVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmVmFsdWUubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSByZWZWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtuYW1lID0gU3RyaW5nKGkpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiByZWZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmVmVmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoKHZhbHVlcy52YWx1ZSAhPSBudWxsKSAmJiB2YWx1ZXMudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldE5leHRFbWJlZEJsb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoYyk7XG4gICAgICAgICAgICBwYXJzZXIucmVmcyA9IHRoaXMucmVmcztcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlci5wYXJzZSh2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXhjZXB0aW9uKCdZQU1MIG1lcmdlIGtleXMgdXNlZCB3aXRoIGEgc2NhbGFyIHZhbHVlIGluc3RlYWQgb2YgYW4gb2JqZWN0LicsIHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDEsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnNlZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBwYXJzZWQubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkSXRlbSA9IHBhcnNlZFtsXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZEl0ZW0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ01lcmdlIGl0ZW1zIG11c3QgYmUgb2JqZWN0cy4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCBwYXJzZWRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZEl0ZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChpID0gbSA9IDAsIGxlbjIgPSBwYXJzZWRJdGVtLmxlbmd0aDsgbSA8IGxlbjI7IGkgPSArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZWRJdGVtW2ldO1xuICAgICAgICAgICAgICAgICAgICBrID0gU3RyaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gcGFyc2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlZEl0ZW1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChrZXkgaW4gcGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZWRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgJiYgKG1hdGNoZXMgPSB0aGlzLlBBVFRFUk5fQU5DSE9SX1ZBTFVFLmV4ZWModmFsdWVzLnZhbHVlKSkpIHtcbiAgICAgICAgICBpc1JlZiA9IG1hdGNoZXMucmVmO1xuICAgICAgICAgIHZhbHVlcy52YWx1ZSA9IG1hdGNoZXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlTm9kZSkge1xuXG4gICAgICAgIH0gZWxzZSBpZiAoISh2YWx1ZXMudmFsdWUgIT0gbnVsbCkgfHwgJycgPT09IFV0aWxzLnRyaW0odmFsdWVzLnZhbHVlLCAnICcpIHx8IFV0aWxzLmx0cmltKHZhbHVlcy52YWx1ZSwgJyAnKS5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgICBpZiAoISh0aGlzLmlzTmV4dExpbmVJbmRlbnRlZCgpKSAmJiAhKHRoaXMuaXNOZXh0TGluZVVuSW5kZW50ZWRDb2xsZWN0aW9uKCkpKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dPdmVyd3JpdGUgfHwgZGF0YVtrZXldID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YVtrZXldID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKGMpO1xuICAgICAgICAgICAgcGFyc2VyLnJlZnMgPSB0aGlzLnJlZnM7XG4gICAgICAgICAgICB2YWwgPSBwYXJzZXIucGFyc2UodGhpcy5nZXROZXh0RW1iZWRCbG9jaygpLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgICAgIGlmIChhbGxvd092ZXJ3cml0ZSB8fCBkYXRhW2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZXMudmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICAgIGlmIChhbGxvd092ZXJ3cml0ZSB8fCBkYXRhW2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZUNvdW50ID0gdGhpcy5saW5lcy5sZW5ndGg7XG4gICAgICAgIGlmICgxID09PSBsaW5lQ291bnQgfHwgKDIgPT09IGxpbmVDb3VudCAmJiBVdGlscy5pc0VtcHR5KHRoaXMubGluZXNbMV0pKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IElubGluZS5wYXJzZSh0aGlzLmxpbmVzWzBdLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICAgICAgZS5wYXJzZWRMaW5lID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICAgIGUuc25pcHBldCA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgZmlyc3QgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyAmJiBmaXJzdC5pbmRleE9mKCcqJykgPT09IDApIHtcbiAgICAgICAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKG4gPSAwLCBsZW4zID0gdmFsdWUubGVuZ3RoOyBuIDwgbGVuMzsgbisrKSB7XG4gICAgICAgICAgICAgICAgYWxpYXMgPSB2YWx1ZVtuXTtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2godGhpcy5yZWZzW2FsaWFzLnNsaWNlKDEpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHJlZjIgPSBVdGlscy5sdHJpbSh2YWx1ZSkuY2hhckF0KDApKSA9PT0gJ1snIHx8IHJlZjIgPT09ICd7Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSW5saW5lLnBhcnNlKHZhbHVlLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICAgICAgZS5wYXJzZWRMaW5lID0gdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMTtcbiAgICAgICAgICAgIGUuc25pcHBldCA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ1VuYWJsZSB0byBwYXJzZS4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1JlZikge1xuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgdGhpcy5yZWZzW2lzUmVmXSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0S2V5ID0gbnVsbDtcbiAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBsYXN0S2V5ID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZnNbaXNSZWZdID0gZGF0YVtsYXN0S2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldFJlYWxDdXJyZW50TGluZU5iID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExpbmVOYiArIHRoaXMub2Zmc2V0O1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMaW5lLmxlbmd0aCAtIFV0aWxzLmx0cmltKHRoaXMuY3VycmVudExpbmUsICcgJykubGVuZ3RoO1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuZ2V0TmV4dEVtYmVkQmxvY2sgPSBmdW5jdGlvbihpbmRlbnRhdGlvbiwgaW5jbHVkZVVuaW5kZW50ZWRDb2xsZWN0aW9uKSB7XG4gICAgdmFyIGRhdGEsIGluZGVudCwgaXNJdFVuaW5kZW50ZWRDb2xsZWN0aW9uLCBuZXdJbmRlbnQsIHJlbW92ZUNvbW1lbnRzLCByZW1vdmVDb21tZW50c1BhdHRlcm4sIHVuaW5kZW50ZWRFbWJlZEJsb2NrO1xuICAgIGlmIChpbmRlbnRhdGlvbiA9PSBudWxsKSB7XG4gICAgICBpbmRlbnRhdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChpbmNsdWRlVW5pbmRlbnRlZENvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgaW5jbHVkZVVuaW5kZW50ZWRDb2xsZWN0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICBpZiAoaW5kZW50YXRpb24gPT0gbnVsbCkge1xuICAgICAgbmV3SW5kZW50ID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgICB1bmluZGVudGVkRW1iZWRCbG9jayA9IHRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSk7XG4gICAgICBpZiAoISh0aGlzLmlzQ3VycmVudExpbmVFbXB0eSgpKSAmJiAwID09PSBuZXdJbmRlbnQgJiYgIXVuaW5kZW50ZWRFbWJlZEJsb2NrKSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignSW5kZW50YXRpb24gcHJvYmxlbS4nLCB0aGlzLmdldFJlYWxDdXJyZW50TGluZU5iKCkgKyAxLCB0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3SW5kZW50ID0gaW5kZW50YXRpb247XG4gICAgfVxuICAgIGRhdGEgPSBbdGhpcy5jdXJyZW50TGluZS5zbGljZShuZXdJbmRlbnQpXTtcbiAgICBpZiAoIWluY2x1ZGVVbmluZGVudGVkQ29sbGVjdGlvbikge1xuICAgICAgaXNJdFVuaW5kZW50ZWRDb2xsZWN0aW9uID0gdGhpcy5pc1N0cmluZ1VuSW5kZW50ZWRDb2xsZWN0aW9uSXRlbSh0aGlzLmN1cnJlbnRMaW5lKTtcbiAgICB9XG4gICAgcmVtb3ZlQ29tbWVudHNQYXR0ZXJuID0gdGhpcy5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfRU5EO1xuICAgIHJlbW92ZUNvbW1lbnRzID0gIXJlbW92ZUNvbW1lbnRzUGF0dGVybi50ZXN0KHRoaXMuY3VycmVudExpbmUpO1xuICAgIHdoaWxlICh0aGlzLm1vdmVUb05leHRMaW5lKCkpIHtcbiAgICAgIGluZGVudCA9IHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpO1xuICAgICAgaWYgKGluZGVudCA9PT0gbmV3SW5kZW50KSB7XG4gICAgICAgIHJlbW92ZUNvbW1lbnRzID0gIXJlbW92ZUNvbW1lbnRzUGF0dGVybi50ZXN0KHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlbW92ZUNvbW1lbnRzICYmIHRoaXMuaXNDdXJyZW50TGluZUNvbW1lbnQoKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ3VycmVudExpbmVCbGFuaygpKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKG5ld0luZGVudCkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0l0VW5pbmRlbnRlZENvbGxlY3Rpb24gJiYgIXRoaXMuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0odGhpcy5jdXJyZW50TGluZSkgJiYgaW5kZW50ID09PSBuZXdJbmRlbnQpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZW50ID49IG5ld0luZGVudCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5jdXJyZW50TGluZS5zbGljZShuZXdJbmRlbnQpKTtcbiAgICAgIH0gZWxzZSBpZiAoVXRpbHMubHRyaW0odGhpcy5jdXJyZW50TGluZSkuY2hhckF0KDApID09PSAnIycpIHtcblxuICAgICAgfSBlbHNlIGlmICgwID09PSBpbmRlbnQpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFeGNlcHRpb24oJ0luZGVudGF0aW9uIHByb2JsZW0uJywgdGhpcy5nZXRSZWFsQ3VycmVudExpbmVOYigpICsgMSwgdGhpcy5jdXJyZW50TGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmpvaW4oXCJcXG5cIik7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5tb3ZlVG9OZXh0TGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMaW5lTmIgPj0gdGhpcy5saW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudExpbmUgPSB0aGlzLmxpbmVzWysrdGhpcy5jdXJyZW50TGluZU5iXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLm1vdmVUb1ByZXZpb3VzTGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudExpbmUgPSB0aGlzLmxpbmVzWy0tdGhpcy5jdXJyZW50TGluZU5iXTtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIHZhciBlLCBmb2xkZWRJbmRlbnQsIG1hdGNoZXMsIG1vZGlmaWVycywgcG9zLCByZWYsIHJlZjEsIHZhbDtcbiAgICBpZiAoMCA9PT0gdmFsdWUuaW5kZXhPZignKicpKSB7XG4gICAgICBwb3MgPSB2YWx1ZS5pbmRleE9mKCcjJyk7XG4gICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigxLCBwb3MgLSAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZWZzW3ZhbHVlXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUV4Y2VwdGlvbignUmVmZXJlbmNlIFwiJyArIHZhbHVlICsgJ1wiIGRvZXMgbm90IGV4aXN0LicsIHRoaXMuY3VycmVudExpbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVmc1t2YWx1ZV07XG4gICAgfVxuICAgIGlmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfQUxMLmV4ZWModmFsdWUpKSB7XG4gICAgICBtb2RpZmllcnMgPSAocmVmID0gbWF0Y2hlcy5tb2RpZmllcnMpICE9IG51bGwgPyByZWYgOiAnJztcbiAgICAgIGZvbGRlZEluZGVudCA9IE1hdGguYWJzKHBhcnNlSW50KG1vZGlmaWVycykpO1xuICAgICAgaWYgKGlzTmFOKGZvbGRlZEluZGVudCkpIHtcbiAgICAgICAgZm9sZGVkSW5kZW50ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhbCA9IHRoaXMucGFyc2VGb2xkZWRTY2FsYXIobWF0Y2hlcy5zZXBhcmF0b3IsIHRoaXMuUEFUVEVSTl9ERUNJTUFMLnJlcGxhY2UobW9kaWZpZXJzLCAnJyksIGZvbGRlZEluZGVudCk7XG4gICAgICBpZiAobWF0Y2hlcy50eXBlICE9IG51bGwpIHtcbiAgICAgICAgSW5saW5lLmNvbmZpZ3VyZShleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgICAgICAgcmV0dXJuIElubGluZS5wYXJzZVNjYWxhcihtYXRjaGVzLnR5cGUgKyAnICcgKyB2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKChyZWYxID0gdmFsdWUuY2hhckF0KDApKSA9PT0gJ1snIHx8IHJlZjEgPT09ICd7JyB8fCByZWYxID09PSAnXCInIHx8IHJlZjEgPT09IFwiJ1wiKSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBJbmxpbmUucGFyc2UodmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFBhcnNlTW9yZSAmJiB0aGlzLm1vdmVUb05leHRMaW5lKCkpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IFwiXFxuXCIgKyBVdGlscy50cmltKHRoaXMuY3VycmVudExpbmUsICcgJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucGFyc2VkTGluZSA9IHRoaXMuZ2V0UmVhbEN1cnJlbnRMaW5lTmIoKSArIDE7XG4gICAgICAgICAgICBlLnNuaXBwZXQgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNOZXh0TGluZUluZGVudGVkKCkpIHtcbiAgICAgICAgdmFsdWUgKz0gXCJcXG5cIiArIHRoaXMuZ2V0TmV4dEVtYmVkQmxvY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBJbmxpbmUucGFyc2UodmFsdWUsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlRm9sZGVkU2NhbGFyID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBpbmRpY2F0b3IsIGluZGVudGF0aW9uKSB7XG4gICAgdmFyIGlzQ3VycmVudExpbmVCbGFuaywgaiwgbGVuLCBsaW5lLCBtYXRjaGVzLCBuZXdUZXh0LCBub3RFT0YsIHBhdHRlcm4sIHJlZiwgdGV4dDtcbiAgICBpZiAoaW5kaWNhdG9yID09IG51bGwpIHtcbiAgICAgIGluZGljYXRvciA9ICcnO1xuICAgIH1cbiAgICBpZiAoaW5kZW50YXRpb24gPT0gbnVsbCkge1xuICAgICAgaW5kZW50YXRpb24gPSAwO1xuICAgIH1cbiAgICBub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgaWYgKCFub3RFT0YpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaXNDdXJyZW50TGluZUJsYW5rID0gdGhpcy5pc0N1cnJlbnRMaW5lQmxhbmsoKTtcbiAgICB0ZXh0ID0gJyc7XG4gICAgd2hpbGUgKG5vdEVPRiAmJiBpc0N1cnJlbnRMaW5lQmxhbmspIHtcbiAgICAgIGlmIChub3RFT0YgPSB0aGlzLm1vdmVUb05leHRMaW5lKCkpIHtcbiAgICAgICAgdGV4dCArPSBcIlxcblwiO1xuICAgICAgICBpc0N1cnJlbnRMaW5lQmxhbmsgPSB0aGlzLmlzQ3VycmVudExpbmVCbGFuaygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gaW5kZW50YXRpb24pIHtcbiAgICAgIGlmIChtYXRjaGVzID0gdGhpcy5QQVRURVJOX0lOREVOVF9TUEFDRVMuZXhlYyh0aGlzLmN1cnJlbnRMaW5lKSkge1xuICAgICAgICBpbmRlbnRhdGlvbiA9IG1hdGNoZXNbMF0ubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5kZW50YXRpb24gPiAwKSB7XG4gICAgICBwYXR0ZXJuID0gdGhpcy5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfQllfSU5ERU5UQVRJT05baW5kZW50YXRpb25dO1xuICAgICAgaWYgKHBhdHRlcm4gPT0gbnVsbCkge1xuICAgICAgICBwYXR0ZXJuID0gbmV3IFBhdHRlcm4oJ14geycgKyBpbmRlbnRhdGlvbiArICd9KC4qKSQnKTtcbiAgICAgICAgUGFyc2VyLnByb3RvdHlwZS5QQVRURVJOX0ZPTERFRF9TQ0FMQVJfQllfSU5ERU5UQVRJT05baW5kZW50YXRpb25dID0gcGF0dGVybjtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChub3RFT0YgJiYgKGlzQ3VycmVudExpbmVCbGFuayB8fCAobWF0Y2hlcyA9IHBhdHRlcm4uZXhlYyh0aGlzLmN1cnJlbnRMaW5lKSkpKSB7XG4gICAgICAgIGlmIChpc0N1cnJlbnRMaW5lQmxhbmspIHtcbiAgICAgICAgICB0ZXh0ICs9IHRoaXMuY3VycmVudExpbmUuc2xpY2UoaW5kZW50YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHQgKz0gbWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm90RU9GID0gdGhpcy5tb3ZlVG9OZXh0TGluZSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBcIlxcblwiO1xuICAgICAgICAgIGlzQ3VycmVudExpbmVCbGFuayA9IHRoaXMuaXNDdXJyZW50TGluZUJsYW5rKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vdEVPRikge1xuICAgICAgdGV4dCArPSBcIlxcblwiO1xuICAgIH1cbiAgICBpZiAobm90RU9GKSB7XG4gICAgICB0aGlzLm1vdmVUb1ByZXZpb3VzTGluZSgpO1xuICAgIH1cbiAgICBpZiAoJz4nID09PSBzZXBhcmF0b3IpIHtcbiAgICAgIG5ld1RleHQgPSAnJztcbiAgICAgIHJlZiA9IHRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgbGluZSA9IHJlZltqXTtcbiAgICAgICAgaWYgKGxpbmUubGVuZ3RoID09PSAwIHx8IGxpbmUuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgICBuZXdUZXh0ID0gVXRpbHMucnRyaW0obmV3VGV4dCwgJyAnKSArIGxpbmUgKyBcIlxcblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1RleHQgKz0gbGluZSArICcgJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGV4dCA9IG5ld1RleHQ7XG4gICAgfVxuICAgIGlmICgnKycgIT09IGluZGljYXRvcikge1xuICAgICAgdGV4dCA9IFV0aWxzLnJ0cmltKHRleHQpO1xuICAgIH1cbiAgICBpZiAoJycgPT09IGluZGljYXRvcikge1xuICAgICAgdGV4dCA9IHRoaXMuUEFUVEVSTl9UUkFJTElOR19MSU5FUy5yZXBsYWNlKHRleHQsIFwiXFxuXCIpO1xuICAgIH0gZWxzZSBpZiAoJy0nID09PSBpbmRpY2F0b3IpIHtcbiAgICAgIHRleHQgPSB0aGlzLlBBVFRFUk5fVFJBSUxJTkdfTElORVMucmVwbGFjZSh0ZXh0LCAnJyk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNOZXh0TGluZUluZGVudGVkID0gZnVuY3Rpb24oaWdub3JlQ29tbWVudHMpIHtcbiAgICB2YXIgRU9GLCBjdXJyZW50SW5kZW50YXRpb24sIHJldDtcbiAgICBpZiAoaWdub3JlQ29tbWVudHMgPT0gbnVsbCkge1xuICAgICAgaWdub3JlQ29tbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjdXJyZW50SW5kZW50YXRpb24gPSB0aGlzLmdldEN1cnJlbnRMaW5lSW5kZW50YXRpb24oKTtcbiAgICBFT0YgPSAhdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgIGlmIChpZ25vcmVDb21tZW50cykge1xuICAgICAgd2hpbGUgKCFFT0YgJiYgdGhpcy5pc0N1cnJlbnRMaW5lRW1wdHkoKSkge1xuICAgICAgICBFT0YgPSAhdGhpcy5tb3ZlVG9OZXh0TGluZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoIUVPRiAmJiB0aGlzLmlzQ3VycmVudExpbmVCbGFuaygpKSB7XG4gICAgICAgIEVPRiA9ICF0aGlzLm1vdmVUb05leHRMaW5lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChFT0YpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpID4gY3VycmVudEluZGVudGF0aW9uKSB7XG4gICAgICByZXQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm1vdmVUb1ByZXZpb3VzTGluZSgpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5pc0N1cnJlbnRMaW5lRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHJpbW1lZExpbmU7XG4gICAgdHJpbW1lZExpbmUgPSBVdGlscy50cmltKHRoaXMuY3VycmVudExpbmUsICcgJyk7XG4gICAgcmV0dXJuIHRyaW1tZWRMaW5lLmxlbmd0aCA9PT0gMCB8fCB0cmltbWVkTGluZS5jaGFyQXQoMCkgPT09ICcjJztcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzQ3VycmVudExpbmVCbGFuayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnJyA9PT0gVXRpbHMudHJpbSh0aGlzLmN1cnJlbnRMaW5lLCAnICcpO1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNDdXJyZW50TGluZUNvbW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbHRyaW1tZWRMaW5lO1xuICAgIGx0cmltbWVkTGluZSA9IFV0aWxzLmx0cmltKHRoaXMuY3VycmVudExpbmUsICcgJyk7XG4gICAgcmV0dXJuIGx0cmltbWVkTGluZS5jaGFyQXQoMCkgPT09ICcjJztcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBjb3VudCwgaSwgaW5kZW50LCBqLCBsLCBsZW4sIGxlbjEsIGxpbmUsIGxpbmVzLCByZWYsIHJlZjEsIHJlZjIsIHNtYWxsZXN0SW5kZW50LCB0cmltbWVkVmFsdWU7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoXCJcXHJcIikgIT09IC0xKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiXFxyXFxuXCIpLmpvaW4oXCJcXG5cIikuc3BsaXQoXCJcXHJcIikuam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgY291bnQgPSAwO1xuICAgIHJlZiA9IHRoaXMuUEFUVEVSTl9ZQU1MX0hFQURFUi5yZXBsYWNlQWxsKHZhbHVlLCAnJyksIHZhbHVlID0gcmVmWzBdLCBjb3VudCA9IHJlZlsxXTtcbiAgICB0aGlzLm9mZnNldCArPSBjb3VudDtcbiAgICByZWYxID0gdGhpcy5QQVRURVJOX0xFQURJTkdfQ09NTUVOVFMucmVwbGFjZUFsbCh2YWx1ZSwgJycsIDEpLCB0cmltbWVkVmFsdWUgPSByZWYxWzBdLCBjb3VudCA9IHJlZjFbMV07XG4gICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9mZnNldCArPSBVdGlscy5zdWJTdHJDb3VudCh2YWx1ZSwgXCJcXG5cIikgLSBVdGlscy5zdWJTdHJDb3VudCh0cmltbWVkVmFsdWUsIFwiXFxuXCIpO1xuICAgICAgdmFsdWUgPSB0cmltbWVkVmFsdWU7XG4gICAgfVxuICAgIHJlZjIgPSB0aGlzLlBBVFRFUk5fRE9DVU1FTlRfTUFSS0VSX1NUQVJULnJlcGxhY2VBbGwodmFsdWUsICcnLCAxKSwgdHJpbW1lZFZhbHVlID0gcmVmMlswXSwgY291bnQgPSByZWYyWzFdO1xuICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vZmZzZXQgKz0gVXRpbHMuc3ViU3RyQ291bnQodmFsdWUsIFwiXFxuXCIpIC0gVXRpbHMuc3ViU3RyQ291bnQodHJpbW1lZFZhbHVlLCBcIlxcblwiKTtcbiAgICAgIHZhbHVlID0gdHJpbW1lZFZhbHVlO1xuICAgICAgdmFsdWUgPSB0aGlzLlBBVFRFUk5fRE9DVU1FTlRfTUFSS0VSX0VORC5yZXBsYWNlKHZhbHVlLCAnJyk7XG4gICAgfVxuICAgIGxpbmVzID0gdmFsdWUuc3BsaXQoXCJcXG5cIik7XG4gICAgc21hbGxlc3RJbmRlbnQgPSAtMTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGluZSA9IGxpbmVzW2pdO1xuICAgICAgaWYgKFV0aWxzLnRyaW0obGluZSwgJyAnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpbmRlbnQgPSBsaW5lLmxlbmd0aCAtIFV0aWxzLmx0cmltKGxpbmUpLmxlbmd0aDtcbiAgICAgIGlmIChzbWFsbGVzdEluZGVudCA9PT0gLTEgfHwgaW5kZW50IDwgc21hbGxlc3RJbmRlbnQpIHtcbiAgICAgICAgc21hbGxlc3RJbmRlbnQgPSBpbmRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbWFsbGVzdEluZGVudCA+IDApIHtcbiAgICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gbGluZXMubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGxpbmVzW2ldID0gbGluZS5zbGljZShzbWFsbGVzdEluZGVudCk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzTmV4dExpbmVVbkluZGVudGVkQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKGN1cnJlbnRJbmRlbnRhdGlvbikge1xuICAgIHZhciBub3RFT0YsIHJldDtcbiAgICBpZiAoY3VycmVudEluZGVudGF0aW9uID09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRJbmRlbnRhdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZW50YXRpb24gPT0gbnVsbCkge1xuICAgICAgY3VycmVudEluZGVudGF0aW9uID0gdGhpcy5nZXRDdXJyZW50TGluZUluZGVudGF0aW9uKCk7XG4gICAgfVxuICAgIG5vdEVPRiA9IHRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICB3aGlsZSAobm90RU9GICYmIHRoaXMuaXNDdXJyZW50TGluZUVtcHR5KCkpIHtcbiAgICAgIG5vdEVPRiA9IHRoaXMubW92ZVRvTmV4dExpbmUoKTtcbiAgICB9XG4gICAgaWYgKGZhbHNlID09PSBub3RFT0YpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudExpbmVJbmRlbnRhdGlvbigpID09PSBjdXJyZW50SW5kZW50YXRpb24gJiYgdGhpcy5pc1N0cmluZ1VuSW5kZW50ZWRDb2xsZWN0aW9uSXRlbSh0aGlzLmN1cnJlbnRMaW5lKSkge1xuICAgICAgcmV0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlVG9QcmV2aW91c0xpbmUoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNTdHJpbmdVbkluZGVudGVkQ29sbGVjdGlvbkl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TGluZSA9PT0gJy0nIHx8IHRoaXMuY3VycmVudExpbmUuc2xpY2UoMCwgMikgPT09ICctICc7XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIFBhdHRlcm47XG5cblBhdHRlcm4gPSAoZnVuY3Rpb24oKSB7XG4gIFBhdHRlcm4ucHJvdG90eXBlLnJlZ2V4ID0gbnVsbDtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS5yYXdSZWdleCA9IG51bGw7XG5cbiAgUGF0dGVybi5wcm90b3R5cGUuY2xlYW5lZFJlZ2V4ID0gbnVsbDtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS5tYXBwaW5nID0gbnVsbDtcblxuICBmdW5jdGlvbiBQYXR0ZXJuKHJhd1JlZ2V4LCBtb2RpZmllcnMpIHtcbiAgICB2YXIgX2NoYXIsIGNhcHR1cmluZ0JyYWNrZXROdW1iZXIsIGNsZWFuZWRSZWdleCwgaSwgbGVuLCBtYXBwaW5nLCBuYW1lLCBwYXJ0LCBzdWJDaGFyO1xuICAgIGlmIChtb2RpZmllcnMgPT0gbnVsbCkge1xuICAgICAgbW9kaWZpZXJzID0gJyc7XG4gICAgfVxuICAgIGNsZWFuZWRSZWdleCA9ICcnO1xuICAgIGxlbiA9IHJhd1JlZ2V4Lmxlbmd0aDtcbiAgICBtYXBwaW5nID0gbnVsbDtcbiAgICBjYXB0dXJpbmdCcmFja2V0TnVtYmVyID0gMDtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgX2NoYXIgPSByYXdSZWdleC5jaGFyQXQoaSk7XG4gICAgICBpZiAoX2NoYXIgPT09ICdcXFxcJykge1xuICAgICAgICBjbGVhbmVkUmVnZXggKz0gcmF3UmVnZXguc2xpY2UoaSwgKyhpICsgMSkgKyAxIHx8IDllOSk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcoJykge1xuICAgICAgICBpZiAoaSA8IGxlbiAtIDIpIHtcbiAgICAgICAgICBwYXJ0ID0gcmF3UmVnZXguc2xpY2UoaSwgKyhpICsgMikgKyAxIHx8IDllOSk7XG4gICAgICAgICAgaWYgKHBhcnQgPT09ICcoPzonKSB7XG4gICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICBjbGVhbmVkUmVnZXggKz0gcGFydDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcoPzwnKSB7XG4gICAgICAgICAgICBjYXB0dXJpbmdCcmFja2V0TnVtYmVyKys7XG4gICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICBuYW1lID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAoaSArIDEgPCBsZW4pIHtcbiAgICAgICAgICAgICAgc3ViQ2hhciA9IHJhd1JlZ2V4LmNoYXJBdChpICsgMSk7XG4gICAgICAgICAgICAgIGlmIChzdWJDaGFyID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICBjbGVhbmVkUmVnZXggKz0gJygnO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWFwcGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmcgPSB7fTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG1hcHBpbmdbbmFtZV0gPSBjYXB0dXJpbmdCcmFja2V0TnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lICs9IHN1YkNoYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhbmVkUmVnZXggKz0gX2NoYXI7XG4gICAgICAgICAgICBjYXB0dXJpbmdCcmFja2V0TnVtYmVyKys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFuZWRSZWdleCArPSBfY2hhcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYW5lZFJlZ2V4ICs9IF9jaGFyO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICB0aGlzLnJhd1JlZ2V4ID0gcmF3UmVnZXg7XG4gICAgdGhpcy5jbGVhbmVkUmVnZXggPSBjbGVhbmVkUmVnZXg7XG4gICAgdGhpcy5yZWdleCA9IG5ldyBSZWdFeHAodGhpcy5jbGVhbmVkUmVnZXgsICdnJyArIG1vZGlmaWVycy5yZXBsYWNlKCdnJywgJycpKTtcbiAgICB0aGlzLm1hcHBpbmcgPSBtYXBwaW5nO1xuICB9XG5cbiAgUGF0dGVybi5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBpbmRleCwgbWF0Y2hlcywgbmFtZSwgcmVmO1xuICAgIHRoaXMucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICBtYXRjaGVzID0gdGhpcy5yZWdleC5leGVjKHN0cik7XG4gICAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcHBpbmcgIT0gbnVsbCkge1xuICAgICAgcmVmID0gdGhpcy5tYXBwaW5nO1xuICAgICAgZm9yIChuYW1lIGluIHJlZikge1xuICAgICAgICBpbmRleCA9IHJlZltuYW1lXTtcbiAgICAgICAgbWF0Y2hlc1tuYW1lXSA9IG1hdGNoZXNbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfTtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdGhpcy5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiB0aGlzLnJlZ2V4LnRlc3Qoc3RyKTtcbiAgfTtcblxuICBQYXR0ZXJuLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oc3RyLCByZXBsYWNlbWVudCkge1xuICAgIHRoaXMucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodGhpcy5yZWdleCwgcmVwbGFjZW1lbnQpO1xuICB9O1xuXG4gIFBhdHRlcm4ucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihzdHIsIHJlcGxhY2VtZW50LCBsaW1pdCkge1xuICAgIHZhciBjb3VudDtcbiAgICBpZiAobGltaXQgPT0gbnVsbCkge1xuICAgICAgbGltaXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgY291bnQgPSAwO1xuICAgIHdoaWxlICh0aGlzLnJlZ2V4LnRlc3Qoc3RyKSAmJiAobGltaXQgPT09IDAgfHwgY291bnQgPCBsaW1pdCkpIHtcbiAgICAgIHRoaXMucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHRoaXMucmVnZXgsIHJlcGxhY2VtZW50KTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBbc3RyLCBjb3VudF07XG4gIH07XG5cbiAgcmV0dXJuIFBhdHRlcm47XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGF0dGVybjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgUGF0dGVybiwgVW5lc2NhcGVyLCBVdGlscztcblxuVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XG5cblBhdHRlcm4gPSByZXF1aXJlKCcuL1BhdHRlcm4nKTtcblxuVW5lc2NhcGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBVbmVzY2FwZXIoKSB7fVxuXG4gIFVuZXNjYXBlci5QQVRURVJOX0VTQ0FQRURfQ0hBUkFDVEVSID0gbmV3IFBhdHRlcm4oJ1xcXFxcXFxcKFswYWJ0XFx0bnZmcmUgXCJcXFxcL1xcXFxcXFxcTl9MUF18eFswLTlhLWZBLUZdezJ9fHVbMC05YS1mQS1GXXs0fXxVWzAtOWEtZkEtRl17OH0pJyk7XG5cbiAgVW5lc2NhcGVyLnVuZXNjYXBlU2luZ2xlUXVvdGVkU3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFwnXFwnL2csICdcXCcnKTtcbiAgfTtcblxuICBVbmVzY2FwZXIudW5lc2NhcGVEb3VibGVRdW90ZWRTdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLl91bmVzY2FwZUNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3VuZXNjYXBlQ2FsbGJhY2sgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgIHJldHVybiBfdGhpcy51bmVzY2FwZUNoYXJhY3RlcihzdHIpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLlBBVFRFUk5fRVNDQVBFRF9DSEFSQUNURVIucmVwbGFjZSh2YWx1ZSwgdGhpcy5fdW5lc2NhcGVDYWxsYmFjayk7XG4gIH07XG5cbiAgVW5lc2NhcGVyLnVuZXNjYXBlQ2hhcmFjdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgY2g7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDEpKSB7XG4gICAgICBjYXNlICcwJzpcbiAgICAgICAgcmV0dXJuIGNoKDApO1xuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIHJldHVybiBjaCg3KTtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICByZXR1cm4gY2goOCk7XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgcmV0dXJuIFwiXFx0XCI7XG4gICAgICBjYXNlIFwiXFx0XCI6XG4gICAgICAgIHJldHVybiBcIlxcdFwiO1xuICAgICAgY2FzZSAnbic6XG4gICAgICAgIHJldHVybiBcIlxcblwiO1xuICAgICAgY2FzZSAndic6XG4gICAgICAgIHJldHVybiBjaCgxMSk7XG4gICAgICBjYXNlICdmJzpcbiAgICAgICAgcmV0dXJuIGNoKDEyKTtcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgICByZXR1cm4gY2goMTMpO1xuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBjaCgyNyk7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgcmV0dXJuICcgJztcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuICdcIic7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgcmV0dXJuICcvJztcbiAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICByZXR1cm4gJ1xcXFwnO1xuICAgICAgY2FzZSAnTic6XG4gICAgICAgIHJldHVybiBjaCgweDAwODUpO1xuICAgICAgY2FzZSAnXyc6XG4gICAgICAgIHJldHVybiBjaCgweDAwQTApO1xuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBjaCgweDIwMjgpO1xuICAgICAgY2FzZSAnUCc6XG4gICAgICAgIHJldHVybiBjaCgweDIwMjkpO1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBVdGlscy51dGY4Y2hyKFV0aWxzLmhleERlYyh2YWx1ZS5zdWJzdHIoMiwgMikpKTtcbiAgICAgIGNhc2UgJ3UnOlxuICAgICAgICByZXR1cm4gVXRpbHMudXRmOGNocihVdGlscy5oZXhEZWModmFsdWUuc3Vic3RyKDIsIDQpKSk7XG4gICAgICBjYXNlICdVJzpcbiAgICAgICAgcmV0dXJuIFV0aWxzLnV0ZjhjaHIoVXRpbHMuaGV4RGVjKHZhbHVlLnN1YnN0cigyLCA4KSkpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVW5lc2NhcGVyO1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVuZXNjYXBlcjtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi40XG52YXIgUGF0dGVybiwgVXRpbHMsXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuUGF0dGVybiA9IHJlcXVpcmUoJy4vUGF0dGVybicpO1xuXG5VdGlscyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVXRpbHMoKSB7fVxuXG4gIFV0aWxzLlJFR0VYX0xFRlRfVFJJTV9CWV9DSEFSID0ge307XG5cbiAgVXRpbHMuUkVHRVhfUklHSFRfVFJJTV9CWV9DSEFSID0ge307XG5cbiAgVXRpbHMuUkVHRVhfU1BBQ0VTID0gL1xccysvZztcblxuICBVdGlscy5SRUdFWF9ESUdJVFMgPSAvXlxcZCskLztcblxuICBVdGlscy5SRUdFWF9PQ1RBTCA9IC9bXjAtN10vZ2k7XG5cbiAgVXRpbHMuUkVHRVhfSEVYQURFQ0lNQUwgPSAvW15hLWYwLTldL2dpO1xuXG4gIFV0aWxzLlBBVFRFUk5fREFURSA9IG5ldyBQYXR0ZXJuKCdeJyArICcoPzx5ZWFyPlswLTldWzAtOV1bMC05XVswLTldKScgKyAnLSg/PG1vbnRoPlswLTldWzAtOV0/KScgKyAnLSg/PGRheT5bMC05XVswLTldPyknICsgJyg/Oig/OltUdF18WyBcXHRdKyknICsgJyg/PGhvdXI+WzAtOV1bMC05XT8pJyArICc6KD88bWludXRlPlswLTldWzAtOV0pJyArICc6KD88c2Vjb25kPlswLTldWzAtOV0pJyArICcoPzpcXC4oPzxmcmFjdGlvbj5bMC05XSopKT8nICsgJyg/OlsgXFx0XSooPzx0ej5afCg/PHR6X3NpZ24+Wy0rXSkoPzx0el9ob3VyPlswLTldWzAtOV0/KScgKyAnKD86Oig/PHR6X21pbnV0ZT5bMC05XVswLTldKSk/KSk/KT8nICsgJyQnLCAnaScpO1xuXG4gIFV0aWxzLkxPQ0FMX1RJTUVaT05FX09GRlNFVCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcblxuICBVdGlscy50cmltID0gZnVuY3Rpb24oc3RyLCBfY2hhcikge1xuICAgIHZhciByZWdleExlZnQsIHJlZ2V4UmlnaHQ7XG4gICAgaWYgKF9jaGFyID09IG51bGwpIHtcbiAgICAgIF9jaGFyID0gJ1xcXFxzJztcbiAgICB9XG4gICAgcmVnZXhMZWZ0ID0gdGhpcy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUltfY2hhcl07XG4gICAgaWYgKHJlZ2V4TGVmdCA9PSBudWxsKSB7XG4gICAgICB0aGlzLlJFR0VYX0xFRlRfVFJJTV9CWV9DSEFSW19jaGFyXSA9IHJlZ2V4TGVmdCA9IG5ldyBSZWdFeHAoJ14nICsgX2NoYXIgKyAnJyArIF9jaGFyICsgJyonKTtcbiAgICB9XG4gICAgcmVnZXhMZWZ0Lmxhc3RJbmRleCA9IDA7XG4gICAgcmVnZXhSaWdodCA9IHRoaXMuUkVHRVhfUklHSFRfVFJJTV9CWV9DSEFSW19jaGFyXTtcbiAgICBpZiAocmVnZXhSaWdodCA9PSBudWxsKSB7XG4gICAgICB0aGlzLlJFR0VYX1JJR0hUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleFJpZ2h0ID0gbmV3IFJlZ0V4cChfY2hhciArICcnICsgX2NoYXIgKyAnKiQnKTtcbiAgICB9XG4gICAgcmVnZXhSaWdodC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleExlZnQsICcnKS5yZXBsYWNlKHJlZ2V4UmlnaHQsICcnKTtcbiAgfTtcblxuICBVdGlscy5sdHJpbSA9IGZ1bmN0aW9uKHN0ciwgX2NoYXIpIHtcbiAgICB2YXIgcmVnZXhMZWZ0O1xuICAgIGlmIChfY2hhciA9PSBudWxsKSB7XG4gICAgICBfY2hhciA9ICdcXFxccyc7XG4gICAgfVxuICAgIHJlZ2V4TGVmdCA9IHRoaXMuUkVHRVhfTEVGVF9UUklNX0JZX0NIQVJbX2NoYXJdO1xuICAgIGlmIChyZWdleExlZnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5SRUdFWF9MRUZUX1RSSU1fQllfQ0hBUltfY2hhcl0gPSByZWdleExlZnQgPSBuZXcgUmVnRXhwKCdeJyArIF9jaGFyICsgJycgKyBfY2hhciArICcqJyk7XG4gICAgfVxuICAgIHJlZ2V4TGVmdC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleExlZnQsICcnKTtcbiAgfTtcblxuICBVdGlscy5ydHJpbSA9IGZ1bmN0aW9uKHN0ciwgX2NoYXIpIHtcbiAgICB2YXIgcmVnZXhSaWdodDtcbiAgICBpZiAoX2NoYXIgPT0gbnVsbCkge1xuICAgICAgX2NoYXIgPSAnXFxcXHMnO1xuICAgIH1cbiAgICByZWdleFJpZ2h0ID0gdGhpcy5SRUdFWF9SSUdIVF9UUklNX0JZX0NIQVJbX2NoYXJdO1xuICAgIGlmIChyZWdleFJpZ2h0ID09IG51bGwpIHtcbiAgICAgIHRoaXMuUkVHRVhfUklHSFRfVFJJTV9CWV9DSEFSW19jaGFyXSA9IHJlZ2V4UmlnaHQgPSBuZXcgUmVnRXhwKF9jaGFyICsgJycgKyBfY2hhciArICcqJCcpO1xuICAgIH1cbiAgICByZWdleFJpZ2h0Lmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4UmlnaHQsICcnKTtcbiAgfTtcblxuICBVdGlscy5pc0VtcHR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJzAnIHx8ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkgfHwgdGhpcy5pc0VtcHR5T2JqZWN0KHZhbHVlKTtcbiAgfTtcblxuICBVdGlscy5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaztcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgKChmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHZhbHVlLCBrKSkgY29udGludWU7XG4gICAgICAgIHJlc3VsdHMucHVzaChrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pKCkpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBVdGlscy5zdWJTdHJDb3VudCA9IGZ1bmN0aW9uKHN0cmluZywgc3ViU3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIGMsIGksIGosIGxlbiwgcmVmLCBzdWJsZW47XG4gICAgYyA9IDA7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gICAgc3ViU3RyaW5nID0gJycgKyBzdWJTdHJpbmc7XG4gICAgaWYgKHN0YXJ0ICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShzdGFydCk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggIT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgfVxuICAgIGxlbiA9IHN0cmluZy5sZW5ndGg7XG4gICAgc3VibGVuID0gc3ViU3RyaW5nLmxlbmd0aDtcbiAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gbGVuOyAwIDw9IHJlZiA/IGogPCByZWYgOiBqID4gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgIGlmIChzdWJTdHJpbmcgPT09IHN0cmluZy5zbGljZShpLCBzdWJsZW4pKSB7XG4gICAgICAgIGMrKztcbiAgICAgICAgaSArPSBzdWJsZW4gLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYztcbiAgfTtcblxuICBVdGlscy5pc0RpZ2l0cyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9ESUdJVFMubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5SRUdFWF9ESUdJVFMudGVzdChpbnB1dCk7XG4gIH07XG5cbiAgVXRpbHMub2N0RGVjID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB0aGlzLlJFR0VYX09DVEFMLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHBhcnNlSW50KChpbnB1dCArICcnKS5yZXBsYWNlKHRoaXMuUkVHRVhfT0NUQUwsICcnKSwgOCk7XG4gIH07XG5cbiAgVXRpbHMuaGV4RGVjID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB0aGlzLlJFR0VYX0hFWEFERUNJTUFMLmxhc3RJbmRleCA9IDA7XG4gICAgaW5wdXQgPSB0aGlzLnRyaW0oaW5wdXQpO1xuICAgIGlmICgoaW5wdXQgKyAnJykuc2xpY2UoMCwgMikgPT09ICcweCcpIHtcbiAgICAgIGlucHV0ID0gKGlucHV0ICsgJycpLnNsaWNlKDIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoKGlucHV0ICsgJycpLnJlcGxhY2UodGhpcy5SRUdFWF9IRVhBREVDSU1BTCwgJycpLCAxNik7XG4gIH07XG5cbiAgVXRpbHMudXRmOGNociA9IGZ1bmN0aW9uKGMpIHtcbiAgICB2YXIgY2g7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIGlmICgweDgwID4gKGMgJT0gMHgyMDAwMDApKSB7XG4gICAgICByZXR1cm4gY2goYyk7XG4gICAgfVxuICAgIGlmICgweDgwMCA+IGMpIHtcbiAgICAgIHJldHVybiBjaCgweEMwIHwgYyA+PiA2KSArIGNoKDB4ODAgfCBjICYgMHgzRik7XG4gICAgfVxuICAgIGlmICgweDEwMDAwID4gYykge1xuICAgICAgcmV0dXJuIGNoKDB4RTAgfCBjID4+IDEyKSArIGNoKDB4ODAgfCBjID4+IDYgJiAweDNGKSArIGNoKDB4ODAgfCBjICYgMHgzRik7XG4gICAgfVxuICAgIHJldHVybiBjaCgweEYwIHwgYyA+PiAxOCkgKyBjaCgweDgwIHwgYyA+PiAxMiAmIDB4M0YpICsgY2goMHg4MCB8IGMgPj4gNiAmIDB4M0YpICsgY2goMHg4MCB8IGMgJiAweDNGKTtcbiAgfTtcblxuICBVdGlscy5wYXJzZUJvb2xlYW4gPSBmdW5jdGlvbihpbnB1dCwgc3RyaWN0KSB7XG4gICAgdmFyIGxvd2VySW5wdXQ7XG4gICAgaWYgKHN0cmljdCA9PSBudWxsKSB7XG4gICAgICBzdHJpY3QgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgbG93ZXJJbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICBpZiAobG93ZXJJbnB1dCA9PT0gJ25vJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICcwJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobG93ZXJJbnB1dCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobG93ZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhIWlucHV0O1xuICB9O1xuXG4gIFV0aWxzLmlzTnVtZXJpYyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5SRUdFWF9TUEFDRVMubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnICYmICFpc05hTihpbnB1dCkgJiYgaW5wdXQucmVwbGFjZSh0aGlzLlJFR0VYX1NQQUNFUywgJycpICE9PSAnJztcbiAgfTtcblxuICBVdGlscy5zdHJpbmdUb0RhdGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgZGF0ZSwgZGF5LCBmcmFjdGlvbiwgaG91ciwgaW5mbywgbWludXRlLCBtb250aCwgc2Vjb25kLCB0el9ob3VyLCB0el9taW51dGUsIHR6X29mZnNldCwgeWVhcjtcbiAgICBpZiAoIShzdHIgIT0gbnVsbCA/IHN0ci5sZW5ndGggOiB2b2lkIDApKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaW5mbyA9IHRoaXMuUEFUVEVSTl9EQVRFLmV4ZWMoc3RyKTtcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB5ZWFyID0gcGFyc2VJbnQoaW5mby55ZWFyLCAxMCk7XG4gICAgbW9udGggPSBwYXJzZUludChpbmZvLm1vbnRoLCAxMCkgLSAxO1xuICAgIGRheSA9IHBhcnNlSW50KGluZm8uZGF5LCAxMCk7XG4gICAgaWYgKGluZm8uaG91ciA9PSBudWxsKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSkpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGhvdXIgPSBwYXJzZUludChpbmZvLmhvdXIsIDEwKTtcbiAgICBtaW51dGUgPSBwYXJzZUludChpbmZvLm1pbnV0ZSwgMTApO1xuICAgIHNlY29uZCA9IHBhcnNlSW50KGluZm8uc2Vjb25kLCAxMCk7XG4gICAgaWYgKGluZm8uZnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgZnJhY3Rpb24gPSBpbmZvLmZyYWN0aW9uLnNsaWNlKDAsIDMpO1xuICAgICAgd2hpbGUgKGZyYWN0aW9uLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgZnJhY3Rpb24gKz0gJzAnO1xuICAgICAgfVxuICAgICAgZnJhY3Rpb24gPSBwYXJzZUludChmcmFjdGlvbiwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFjdGlvbiA9IDA7XG4gICAgfVxuICAgIGlmIChpbmZvLnR6ICE9IG51bGwpIHtcbiAgICAgIHR6X2hvdXIgPSBwYXJzZUludChpbmZvLnR6X2hvdXIsIDEwKTtcbiAgICAgIGlmIChpbmZvLnR6X21pbnV0ZSAhPSBudWxsKSB7XG4gICAgICAgIHR6X21pbnV0ZSA9IHBhcnNlSW50KGluZm8udHpfbWludXRlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0el9taW51dGUgPSAwO1xuICAgICAgfVxuICAgICAgdHpfb2Zmc2V0ID0gKHR6X2hvdXIgKiA2MCArIHR6X21pbnV0ZSkgKiA2MDAwMDtcbiAgICAgIGlmICgnLScgPT09IGluZm8udHpfc2lnbikge1xuICAgICAgICB0el9vZmZzZXQgKj0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24pKTtcbiAgICBpZiAodHpfb2Zmc2V0KSB7XG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgLSB0el9vZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbiAgfTtcblxuICBVdGlscy5zdHJSZXBlYXQgPSBmdW5jdGlvbihzdHIsIG51bWJlcikge1xuICAgIHZhciBpLCByZXM7XG4gICAgcmVzID0gJyc7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBudW1iZXIpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUgPSBmdW5jdGlvbihwYXRoLCBjYWxsYmFjaykge1xuICAgIHZhciBkYXRhLCBmcywgaiwgbGVuMSwgbmFtZSwgcmVmLCByZXEsIHhocjtcbiAgICBpZiAoY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgICB4aHIgPSBudWxsO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkge1xuICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LkFjdGl2ZVhPYmplY3QpIHtcbiAgICAgICAgcmVmID0gW1wiTXN4bWwyLlhNTEhUVFAuNi4wXCIsIFwiTXN4bWwyLlhNTEhUVFAuMy4wXCIsIFwiTXN4bWwyLlhNTEhUVFBcIiwgXCJNaWNyb3NvZnQuWE1MSFRUUFwiXTtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgICBuYW1lID0gcmVmW2pdO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgQWN0aXZlWE9iamVjdChuYW1lKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoeGhyICE9IG51bGwpIHtcbiAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB4aHIuc2VuZChudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoLCBmYWxzZSk7XG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVxID0gcmVxdWlyZTtcbiAgICAgIGZzID0gcmVxKCdmcycpO1xuICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZzLnJlYWRGaWxlKHBhdGgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKFN0cmluZyhkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCk7XG4gICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVXRpbHM7XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuNFxudmFyIER1bXBlciwgUGFyc2VyLCBVdGlscywgWWFtbDtcblxuUGFyc2VyID0gcmVxdWlyZSgnLi9QYXJzZXInKTtcblxuRHVtcGVyID0gcmVxdWlyZSgnLi9EdW1wZXInKTtcblxuVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XG5cbllhbWwgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFlhbWwoKSB7fVxuXG4gIFlhbWwucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcikge1xuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdERlY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RGVjb2RlciA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VyKCkucGFyc2UoaW5wdXQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpO1xuICB9O1xuXG4gIFlhbWwucGFyc2VGaWxlID0gZnVuY3Rpb24ocGF0aCwgY2FsbGJhY2ssIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdERlY29kZXIpIHtcbiAgICB2YXIgaW5wdXQ7XG4gICAgaWYgKGNhbGxiYWNrID09IG51bGwpIHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPT0gbnVsbCkge1xuICAgICAgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0RGVjb2RlciA9PSBudWxsKSB7XG4gICAgICBvYmplY3REZWNvZGVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShwYXRoLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfdGhpcy5wYXJzZShpbnB1dCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0ID0gVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCk7XG4gICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShpbnB1dCwgZXhjZXB0aW9uT25JbnZhbGlkVHlwZSwgb2JqZWN0RGVjb2Rlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgWWFtbC5kdW1wID0gZnVuY3Rpb24oaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSB7XG4gICAgdmFyIHlhbWw7XG4gICAgaWYgKGlubGluZSA9PSBudWxsKSB7XG4gICAgICBpbmxpbmUgPSAyO1xuICAgIH1cbiAgICBpZiAoaW5kZW50ID09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IDQ7XG4gICAgfVxuICAgIGlmIChleGNlcHRpb25PbkludmFsaWRUeXBlID09IG51bGwpIHtcbiAgICAgIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdEVuY29kZXIgPT0gbnVsbCkge1xuICAgICAgb2JqZWN0RW5jb2RlciA9IG51bGw7XG4gICAgfVxuICAgIHlhbWwgPSBuZXcgRHVtcGVyKCk7XG4gICAgeWFtbC5pbmRlbnRhdGlvbiA9IGluZGVudDtcbiAgICByZXR1cm4geWFtbC5kdW1wKGlucHV0LCBpbmxpbmUsIDAsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpO1xuICB9O1xuXG4gIFlhbWwuc3RyaW5naWZ5ID0gZnVuY3Rpb24oaW5wdXQsIGlubGluZSwgaW5kZW50LCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3RFbmNvZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVtcChpbnB1dCwgaW5saW5lLCBpbmRlbnQsIGV4Y2VwdGlvbk9uSW52YWxpZFR5cGUsIG9iamVjdEVuY29kZXIpO1xuICB9O1xuXG4gIFlhbWwubG9hZCA9IGZ1bmN0aW9uKHBhdGgsIGNhbGxiYWNrLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VGaWxlKHBhdGgsIGNhbGxiYWNrLCBleGNlcHRpb25PbkludmFsaWRUeXBlLCBvYmplY3REZWNvZGVyKTtcbiAgfTtcblxuICByZXR1cm4gWWFtbDtcblxufSkoKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSB7XG4gIHdpbmRvdy5ZQU1MID0gWWFtbDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgd2luZG93ID09PSBudWxsKSB7XG4gIHRoaXMuWUFNTCA9IFlhbWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWWFtbDtcbiIsImZ1bmN0aW9uIGJhc2UxMF90b19iYXNlNjQobnVtKSB7XG4gIHZhciBvcmRlciA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbiAgdmFyIGJhc2UgPSBvcmRlci5sZW5ndGg7XG4gIHZhciBzdHIgPSAnJywgcjtcbiAgd2hpbGUgKG51bSkge1xuICAgICAgciA9IG51bSAlIGJhc2VcbiAgICAgIG51bSAtPSByO1xuICAgICAgbnVtIC89IGJhc2U7XG4gICAgICBzdHIgPSBvcmRlci5jaGFyQXQocikgKyBzdHI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZTEwX3RvX2Jhc2U2NDsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdXNlcnBpeGVsL21pY3JvbXVzdGFjaGUvYmxvYi9tYXN0ZXIvbGliL3JlbmRlci5qc1xuXG4vKipcbiAqIEBjYWxsYmFjayBSZXNvbHZlckZuXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZSAtIHZhcmlhYmxlIG5hbWUgYmVmb3JlIGJlaW5nIHBhcnNlZC5cbiAqICAgICAgICBGb3IgZXhhbXBsZToge2EuYi5jfSAtPiAgJ2EuYi5jJywgeyAgeCAgfSAtPiAneCdcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3IC0gdGhlIHZpZXcgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCB0byAucmVuZGVyKCkgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW58T2JqZWN0fHVuZGVmaW5lZH0gdGhlIHZhbHVlIHRvIGJlXG4gKiAgICAgICAgaW50ZXJwb2xhdGVkLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB1bmRlZmluZWQsIHRoZSB2YWx1ZSByZXNvbHV0aW9uXG4gKiAgICAgICAgYWxnb3JpdGhtIHdpbGwgZ28gYWhlYWQgd2l0aCB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgKHJlc29sdmluZyB0aGVcbiAqICAgICAgICB2YXJpYWJsZSBuYW1lIGZyb20gdGhlIHByb3ZpZGVkIG9iamVjdCkuXG4gKi9cblxuY29uc3QgVkFSX01BVENIX1JFR0VYID0gL1xce1xce1xccyooLio/KVxccypcXH1cXH0vZztcblxuZnVuY3Rpb24gX3ZhbHVlVG9TdHJpbmcgKHZhbHVlKSB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gIGNhc2UgJ3N0cmluZyc6XG4gIGNhc2UgJ251bWJlcic6XG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiB2YWx1ZTtcbiAgY2FzZSAnb2JqZWN0JzpcbiAgICB0cnkge1xuICAgICAgLy8gbnVsbCBpcyBhbiBvYmplY3QgYnV0IGlzIGZhbHN5LiBTd2FsbG93IGl0LlxuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gJycgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XG4gICAgICByZXR1cm4gJ3suLi59JztcbiAgICB9XG4gIGRlZmF1bHQ6XG4gICAgIC8vIEFueXRoaW5nIGVsc2Ugd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuICAgICAvLyBGb3IgZXhhbXBsZTogdW5kZWZpbmVkLCBTeW1ib2wsIGV0Yy5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBnb2VzIHRocm91Z2ggYW4gb2JqZWN0IHRyeWluZyB0byByZXNvbHZlIGEgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGUgLSBUaGUgb2JqZWN0IHRvIHRyYXZlcnNlIChpbiBlYWNoIHJlY3Vyc2l2ZSBjYWxsIHdlIGRpZyBpbnRvIHRoaXMgb2JqZWN0KVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aCAtIEFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIHRvIHRyYXZlcnNlIG9uZS1ieS1vbmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGF0aEluZGV4PTBdIC0gVGhlIGN1cnJlbnQgaW5kZXggaW4gdGhlIHBhdGggYXJyYXlcbiAqL1xuZnVuY3Rpb24gX3JlY3Vyc2l2ZVBhdGhSZXNvbHZlcihzY29wZSwgcGF0aCwgcGF0aEluZGV4ID0gMCkge1xuICBpZiAodHlwZW9mIHNjb3BlICE9PSAnb2JqZWN0JyB8fCBzY29wZSA9PT0gbnVsbCB8fCBzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgdmFyTmFtZSA9IHBhdGhbcGF0aEluZGV4XTtcbiAgY29uc3QgdmFsdWUgPSBzY29wZVt2YXJOYW1lXTtcblxuICBpZiAocGF0aEluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAvLyBJdCdzIGEgbGVhZiwgcmV0dXJuIHdoYXRldmVyIGl0IGlzXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIF9yZWN1cnNpdmVQYXRoUmVzb2x2ZXIodmFsdWUsIHBhdGgsICsrcGF0aEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFJlc29sdmVyKHZhck5hbWUsIHZpZXcpIHtcbiAgcmV0dXJuIF9yZWN1cnNpdmVQYXRoUmVzb2x2ZXIodmlldywgdmFyTmFtZS5zcGxpdCgnLicpKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSB7e3ZhcmlhYmxlfX0gaW5zaWRlIHRoZSB0ZW1wbGF0ZSB3aXRoIHZhbHVlcyBwcm92aWRlZCBieSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBjb250YWluaW5nIG9uZSBvciBtb3JlIHt7dmFyaWFibGVOYW1lc319IGV2ZXJ5IHZhcmlhYmxlXG4gKiAgICAgICAgbmFtZXMgdGhhdCBpcyB1c2VkIGluIHRoZSB0ZW1wbGF0ZS4gSWYgaXQncyBvbWl0dGVkLCBpdCdsbCBiZSBhc3N1bWVkIGFuIGVtcHR5IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdmlldz17fV0gLSBBbiBvYmplY3QgY29udGFpbmluZyB2YWx1ZXMgZm9yIGV2ZXJ5IHZhcmlhYmxlIG5hbWVzIHRoYXQgaXMgdXNlZCBpblxuICogICAgICAgIHRoZSB0ZW1wbGF0ZS4gSWYgaXQncyBvbWl0dGVkLCBpdCdsbCBiZSBzZXQgdG8gYW4gZW1wdHkgb2JqZWN0IGVzc2VudGlhbGx5IHJlbW92aW5nIGFsbFxuICogICAgICAgIHt7dmFyTmFtZX19cyBpbiB0aGUgdGVtcGxhdGUuXG4gKiBAcGFyYW0ge1Jlc29sdmVyRm59IFtyZXNvbHZlcl0gLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmVcbiAqICAgICAgICBjYWxsZWQgZm9yIGV2ZXJ5IHt7dmFyTmFtZX19IHRvIGdlbmVyYXRlIGEgdmFsdWUuIElmIHRoZSByZXNvbHZlciB0aHJvd3MgYW4gZXJyb3JcbiAqICAgICAgICB3ZSdsbCBwcm9jZWVkIHdpdGggdGhlIGRlZmF1bHQgdmFsdWUgcmVzb2x1dGlvbiBhbGdvcml0aG0gKGZpbmQgdGhlIHZhbHVlIGZyb20gdGhlIHZpZXdcbiAqICAgICAgICBvYmplY3QpLlxuICogQHJldHVybnMge3N0cmluZ30gLSBUZW1wbGF0ZSB3aGVyZSBpdHMgdmFyaWFibGUgbmFtZXMgcmVwbGFjZWQgd2l0aFxuICogICAgICAgIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdCBmb3VuZCBvciBpcyBpbnZhbGlkLCBpdCB3aWxsXG4gKiAgICAgICAgYmUgYXNzdW1lZCBlbXB0eSBzdHJpbmcgJycuIElmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgaXRzZWxmLCBpdCdsbFxuICogICAgICAgIGJlIHN0cmluZ2lmaWVkIGJ5IEpTT04uXG4gKiAgICAgICAgSW4gY2FzZSBvZiBhIEpTT04gc3RyaW5naWZ5IGVycm9yIHRoZSByZXN1bHQgd2lsbCBsb29rIGxpa2UgXCJ7Li4ufVwiLlxuICovXG5mdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3ID0ge30sIHJlc29sdmVyID0gZGVmYXVsdFJlc29sdmVyKSB7XG4gIC8vIGRvbid0IHRvdWNoIHRoZSB0ZW1wbGF0ZSBpZiBpdCBpcyBub3QgYSBzdHJpbmdcbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShWQVJfTUFUQ0hfUkVHRVgsIGZ1bmN0aW9uIChtYXRjaCwgdmFyTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBkZWZhdWx0UmVzb2x2ZXIgbmV2ZXIgdGhyb3dzXG4gICAgICByZXR1cm4gX3ZhbHVlVG9TdHJpbmcocmVzb2x2ZXIodmFyTmFtZSwgdmlldykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHlvdXIgcmVzb2x2ZXIgdGhyb3dzLCB3ZSBwcm9jZWVkIHdpdGggdGhlIGRlZmF1bHQgcmVzb2x2ZXJcbiAgICAgIHJldHVybiBfdmFsdWVUb1N0cmluZyhkZWZhdWx0UmVzb2x2ZXIodmFyTmFtZSwgdmlldykpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCIvKipcbiAqIENyZWF0ZWQgYnkgVGFtZXIgb24gMTkvMTAvMjAxNy5cbiAqL1xuXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnXG5cblN0YWdlLmRlZmluZVdpZGdldCh7XG4gIGlkOiAndmlzdWFsLWlucHV0JyxcbiAgbmFtZTogJ1Zpc3VhbGl6YXRpb24gRGVwbG95bWVudCBDcmVhdGlvbiBJbnB1dCcsXG4gIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXphdGlvbiBEZXBsb3ltZW50IENyZWF0aW9uIElucHV0IFdpZGdldCcsXG4gIGluaXRpYWxXaWR0aDogMTIsXG4gIGluaXRpYWxIZWlnaHQ6IDE2LFxuICBjb2xvcjogJ3B1cnBsZScsXG4gIGhhc1N0eWxlOiB0cnVlLFxuICBpc1JlYWN0OiB0cnVlLFxuXG4gIHBlcm1pc3Npb246IFN0YWdlLkdlbmVyaWNDb25maWcuQ1VTVE9NX1dJREdFVF9QRVJNSVNTSU9OUy5DVVNUT01fQUxMLFxuICBjYXRlZ29yaWVzOiBbU3RhZ2UuR2VuZXJpY0NvbmZpZy5DQVRFR09SWS5TWVNURU1fUkVTT1VSQ0VTXSxcblxuICBpbml0aWFsQ29uZmlndXJhdGlvbjogW1xuICAgIHsgaWQ6ICdibHVlcHJpbnRJZCcsIG5hbWU6ICdCbHVlcHJpbnQgSWQnLCBkZWZhdWx0OiAnQ09WJywgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLlNUUklORyB9LFxuICAgIHsgaWQ6ICdhbGxvd05hbWVFZGl0JywgbmFtZTogJ0FsbG93IFVzZXIgdG8gY2hhbmdlIERlcGxveW1lbnQgTmFtZScsIGRlZmF1bHQ6IHRydWUsIHR5cGU6IFN0YWdlLkJhc2ljLkdlbmVyaWNGaWVsZC5CT09MRUFOX1RZUEUgfSxcblxuICAgIHsgaWQ6ICdvbkZpbmlzaFJlZGlyZWN0JywgbmFtZTogJ1JlZGlyZWN0IHRvIFBhZ2Ugb24gZmluaXNoJywgZGVmYXVsdDogZmFsc2UsIHR5cGU6IFN0YWdlLkJhc2ljLkdlbmVyaWNGaWVsZC5CT09MRUFOX1RZUEUgfSxcbiAgICB7IGlkOiAndGVtcGxhdGUnLCBuYW1lOiAnVGVtcGxhdGUgdG8gUmVkaXJlY3QgdG8sIGFmdGVyIGZpbmlzaCcsIGRlZmF1bHQ6ICdkZXBsb3ltZW50JywgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLlNUUklOR19UWVBFIH1cbiAgXSxcblxuICBmZXRjaERhdGEod2lkZ2V0LCB0b29sYm94LCBwYXJhbXMpIHtcbiAgICBsZXQgYWN0aW9ucyA9IG5ldyBBY3Rpb25zKE9iamVjdC5hc3NpZ24oeyB0b29sYm94IH0sIHdpZGdldC5jb25maWd1cmF0aW9uKSk7XG5cbiAgICByZXR1cm4gYWN0aW9ucy5kb0dldElucHV0RGVzY3JpcHRvcigpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKHdpZGdldCwgZGF0YSwgZXJyb3IsIHRvb2xib3gpIHtcblxuICAgIGlmIChfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiA8U3RhZ2UuQmFzaWMuTG9hZGluZyAvPjtcbiAgICB9XG5cbiAgICBsZXQgYWN0aW9ucyA9IG5ldyBBY3Rpb25zKE9iamVjdC5hc3NpZ24oeyB0b29sYm94IH0sIHdpZGdldC5jb25maWd1cmF0aW9uKSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdFxuICAgICAgICB3aWRnZXQ9e3dpZGdldH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgdG9vbGJveD17dG9vbGJveH1cbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG59KTsiXX0=
