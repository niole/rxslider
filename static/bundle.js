/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Counter = __webpack_require__(2);
	var Slider = __webpack_require__(6);
	var $ = __webpack_require__(3);
	var Rx = __webpack_require__(5);
	var React = __webpack_require__(4);
	var ReactDOM = undefined;
	try {
	  ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	} catch (e) {
	  ReactDOM = React;
	}

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
	    this.state = { currPosHandle: 0 };
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(Slider, {
	        marginleft: 0,
	        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	        width: 600,
	        height: 5
	      });
	    }
	  }]);

	  return App;
	})(React.Component);

	App.defaultProps = { init: 0 };

	ReactDOM.render(React.createElement(App, null), document.body);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $ = __webpack_require__(3);
	var React = __webpack_require__(4);
	var Rx = __webpack_require__(5);

	var Counter = (function (_React$Component) {
	  _inherits(Counter, _React$Component);

	  function Counter(props) {
	    _classCallCheck(this, Counter);

	    _get(Object.getPrototypeOf(Counter.prototype), 'constructor', this).call(this, props);
	    this.state = { count: props.init };
	  }

	  _createClass(Counter, [{
	    key: 'tick',
	    value: function tick() {
	      this.setState({ count: this.state.count + 1 });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;

	      var counter = document.getElementById('counter');
	      var source = Rx.Observable.fromEvent(counter, 'click');
	      source.subscribe(function (e) {
	        _this.tick();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'counter' },
	        'Clicks: ',
	        this.state.count
	      );
	    }
	  }]);

	  return Counter;
	})(React.Component);

	Counter.propTypes = { init: React.PropTypes.number };

	module.exports = Counter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * React v0.14.0-rc1
	 *
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";var r=e(35),o=e(45),a=e(61),i=e(23),u=e(103),s={};i(s,a),i(s,{findDOMNode:u("findDOMNode","ReactDOM","react-dom",r,r.findDOMNode),render:u("render","ReactDOM","react-dom",r,r.render),unmountComponentAtNode:u("unmountComponentAtNode","ReactDOM","react-dom",r,r.unmountComponentAtNode),renderToString:u("renderToString","ReactDOMServer","react-dom/server",o,o.renderToString),renderToStaticMarkup:u("renderToStaticMarkup","ReactDOMServer","react-dom/server",o,o.renderToStaticMarkup)}),s.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r,t.exports=s},{103:103,23:23,35:35,45:45,61:61}],2:[function(e,t,n){"use strict";var r=e(63),o=e(105),a=e(136),i={componentDidMount:function(){this.props.autoFocus&&a(o(this))}},u={Mixin:i,focusDOMComponent:function(){a(r.getNode(this._rootNodeID))}};t.exports=u},{105:105,136:136,63:63}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function a(e){switch(e){case w.topCompositionStart:return I.compositionStart;case w.topCompositionEnd:return I.compositionEnd;case w.topCompositionUpdate:return I.compositionUpdate}}function i(e,t){return e===w.topKeyDown&&t.keyCode===_}function u(e,t){switch(e){case w.topKeyUp:return-1!==b.indexOf(t.keyCode);case w.topKeyDown:return t.keyCode!==_;case w.topKeyPress:case w.topMouseDown:case w.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r,o){var l,c;if(E?l=a(e):S?u(e,r)&&(l=I.compositionEnd):i(e,r)&&(l=I.compositionStart),!l)return null;N&&(S||l!==I.compositionStart?l===I.compositionEnd&&S&&(c=S.getData()):S=m.getPooled(t));var p=g.getPooled(l,n,r,o);if(c)p.data=c;else{var d=s(r);null!==d&&(p.data=d)}return h.accumulateTwoPhaseDispatches(p),p}function c(e,t){switch(e){case w.topCompositionEnd:return s(t);case w.topKeyPress:var n=t.which;return n!==M?null:(R=!0,P);case w.topTextInput:var r=t.data;return r===P&&R?null:r;default:return null}}function p(e,t){if(S){if(e===w.topCompositionEnd||u(e,t)){var n=S.getData();return m.release(S),S=null,n}return null}switch(e){case w.topPaste:return null;case w.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case w.topCompositionEnd:return N?null:t.data;default:return null}}function d(e,t,n,r,o){var a;if(a=D?c(e,r):p(e,r),!a)return null;var i=y.getPooled(I.beforeInput,n,r,o);return i.data=a,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(19),v=e(128),m=e(20),g=e(88),y=e(92),C=e(146),b=[9,13,27,32],_=229,E=v.canUseDOM&&"CompositionEvent"in window,x=null;v.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=v.canUseDOM&&"TextEvent"in window&&!x&&!r(),N=v.canUseDOM&&(!E||x&&x>8&&11>=x),M=32,P=String.fromCharCode(M),w=f.topLevelTypes,I={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[w.topCompositionEnd,w.topKeyPress,w.topTextInput,w.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[w.topBlur,w.topCompositionEnd,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[w.topBlur,w.topCompositionStart,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[w.topBlur,w.topCompositionUpdate,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]}},R=!1,S=null,T={eventTypes:I,extractEvents:function(e,t,n,r,o){return[l(e,t,n,r,o),d(e,t,n,r,o)]}};t.exports=T},{128:128,146:146,15:15,19:19,20:20,88:88,92:92}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},a=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){a.forEach(function(t){o[r(t,e)]=o[e]})});var i={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:i};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(128),a=(e(130),e(102)),i=e(141),u=e(118),s=(e(150),u(function(e){return i(e)})),l=!1,c="cssFloat";if(o.canUseDOM){var p=document.createElement("div").style;try{p.font=""}catch(d){l=!0}void 0===document.documentElement.style.cssFloat&&(c="styleFloat")}var f={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=a(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var i=a(o,t[o]);if("float"===o&&(o=c),i)n[o]=i;else{var u=l&&r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};t.exports=f},{102:102,118:118,128:128,130:130,141:141,150:150,4:4}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(24),a=e(23),i=e(142);a(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){e.length!==t.length?i(!1):void 0,this._callbacks=null,this._contexts=null;for(var n=0;n<e.length;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{142:142,23:23,24:24}],7:[function(e,t,n){"use strict";function r(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function o(e){var t=x.getPooled(I.change,S,e,D(e));b.accumulateTwoPhaseDispatches(t),E.batchedUpdates(a,t)}function a(e){C.enqueueEvents(e),C.processEventQueue()}function i(e,t){R=e,S=t,R.attachEvent("onchange",o)}function u(){R&&(R.detachEvent("onchange",o),R=null,S=null)}function s(e,t,n){return e===w.topChange?n:void 0}function l(e,t,n){e===w.topFocus?(u(),i(t,n)):e===w.topBlur&&u()}function c(e,t){R=e,S=t,T=e.value,k=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(R,"value",L),R.attachEvent("onpropertychange",d)}function p(){R&&(delete R.value,R.detachEvent("onpropertychange",d),R=null,S=null,T=null,k=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==T&&(T=t,o(e))}}function f(e,t,n){return e===w.topInput?n:void 0}function h(e,t,n){e===w.topFocus?(p(),c(t,n)):e===w.topBlur&&p()}function v(e,t,n){return e!==w.topSelectionChange&&e!==w.topKeyUp&&e!==w.topKeyDown||!R||R.value===T?void 0:(T=R.value,S)}function m(e){return e.nodeName&&"input"===e.nodeName.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===w.topClick?n:void 0}var y=e(15),C=e(16),b=e(19),_=e(128),E=e(81),x=e(90),D=e(111),N=e(116),M=e(117),P=e(146),w=y.topLevelTypes,I={change:{phasedRegistrationNames:{bubbled:P({onChange:null}),captured:P({onChangeCapture:null})},dependencies:[w.topBlur,w.topChange,w.topClick,w.topFocus,w.topInput,w.topKeyDown,w.topKeyUp,w.topSelectionChange]}},R=null,S=null,T=null,k=null,O=!1;_.canUseDOM&&(O=N("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;_.canUseDOM&&(A=N("input")&&(!("documentMode"in document)||document.documentMode>9));var L={get:function(){return k.get.call(this)},set:function(e){T=""+e,k.set.call(this,e)}},U={eventTypes:I,extractEvents:function(e,t,n,o,a){var i,u;if(r(t)?O?i=s:u=l:M(t)?A?i=f:(i=v,u=h):m(t)&&(i=g),i){var c=i(e,t,n);if(c){var p=x.getPooled(I.change,c,o,a);return p.type="change",b.accumulateTwoPhaseDispatches(p),p}}u&&u(e,t,n)}};t.exports=U},{111:111,116:116,117:117,128:128,146:146,15:15,16:16,19:19,81:81,90:90}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){var r=n>=e.childNodes.length?null:e.childNodes.item(n);e.insertBefore(t,r)}var o=e(12),a=e(65),i=e(122),u=e(123),s=e(142),l={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:u,processUpdates:function(e,t){for(var n,l=null,c=null,p=0;p<e.length;p++)if(n=e[p],n.type===a.MOVE_EXISTING||n.type===a.REMOVE_NODE){var d=n.fromIndex,f=n.parentNode.childNodes[d],h=n.parentID;f?void 0:s(!1),l=l||{},l[h]=l[h]||[],l[h][d]=f,c=c||[],c.push(f)}var v;if(v=t.length&&"string"==typeof t[0]?o.dangerouslyRenderMarkup(t):t,c)for(var m=0;m<c.length;m++)c[m].parentNode.removeChild(c[m]);for(var g=0;g<e.length;g++)switch(n=e[g],n.type){case a.INSERT_MARKUP:r(n.parentNode,v[n.markupIndex],n.toIndex);break;case a.MOVE_EXISTING:r(n.parentNode,l[n.parentID][n.fromIndex],n.toIndex);break;case a.SET_MARKUP:i(n.parentNode,n.content);break;case a.TEXT_CONTENT:u(n.parentNode,n.content);break;case a.REMOVE_NODE:}}};t.exports=l},{12:12,122:122,123:123,142:142,65:65}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(142),a={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=a,n=e.Properties||{},i=e.DOMAttributeNamespaces||{},s=e.DOMAttributeNames||{},l=e.DOMPropertyNames||{},c=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var p in n){u.properties.hasOwnProperty(p)?o(!1):void 0;var d=p.toLowerCase(),f=n[p],h={attributeName:d,attributeNamespace:null,propertyName:p,mutationMethod:null,mustUseAttribute:r(f,t.MUST_USE_ATTRIBUTE),mustUseProperty:r(f,t.MUST_USE_PROPERTY),hasSideEffects:r(f,t.HAS_SIDE_EFFECTS),hasBooleanValue:r(f,t.HAS_BOOLEAN_VALUE),hasNumericValue:r(f,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:r(f,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:r(f,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(h.mustUseAttribute&&h.mustUseProperty?o(!1):void 0,!h.mustUseProperty&&h.hasSideEffects?o(!1):void 0,h.hasBooleanValue+h.hasNumericValue+h.hasOverloadedBooleanValue<=1?void 0:o(!1),s.hasOwnProperty(p)){var v=s[p];h.attributeName=v}i.hasOwnProperty(p)&&(h.attributeNamespace=i[p]),l.hasOwnProperty(p)&&(h.propertyName=l[p]),c.hasOwnProperty(p)&&(h.mutationMethod=c[p]),u.properties[p]=h}}},i={},u={ID_ATTRIBUTE_NAME:"data-reactid",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:a};t.exports=u},{142:142}],11:[function(e,t,n){"use strict";function r(e){return l.hasOwnProperty(e)?!0:s.hasOwnProperty(e)?!1:u.test(e)?(l[e]=!0,!0):(s[e]=!0,!1)}function o(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&1>t||e.hasOverloadedBooleanValue&&t===!1}var a=e(10),i=e(120),u=(e(150),/^[a-zA-Z_][\w\.\-]*$/),s={},l={},c={createMarkupForID:function(e){return a.ID_ATTRIBUTE_NAME+"="+i(e)},setAttributeForID:function(e,t){e.setAttribute(a.ID_ATTRIBUTE_NAME,t)},createMarkupForProperty:function(e,t){var n=a.properties.hasOwnProperty(e)?a.properties[e]:null;if(n){if(o(n,t))return"";var r=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&t===!0?r+'=""':r+"="+i(t)}return a.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},createMarkupForCustomAttribute:function(e,t){return r(e)&&null!=t?e+"="+i(t):""},setValueForProperty:function(e,t,n){var r=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(r){var i=r.mutationMethod;if(i)i(e,n);else if(o(r,n))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute){var u=r.attributeName,s=r.attributeNamespace;s?e.setAttributeNS(s,u,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&n===!0?e.setAttribute(u,""):e.setAttribute(u,""+n)}else{var l=r.propertyName;r.hasSideEffects&&""+e[l]==""+n||(e[l]=n)}}else a.isCustomAttribute(t)&&c.setValueForAttribute(e,t,n)},setValueForAttribute:function(e,t,n){r(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){var n=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(n){var r=n.mutationMethod;if(r)r(e,void 0);else if(n.mustUseAttribute)e.removeAttribute(n.attributeName);else{var o=n.propertyName,i=a.getDefaultValueForProperty(e.nodeName,o);n.hasSideEffects&&""+e[o]===i||(e[o]=i)}}else a.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=c},{10:10,120:120,150:150}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(128),a=e(133),i=e(134),u=e(138),s=e(142),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){o.canUseDOM?void 0:s(!1);for(var t,n={},p=0;p<e.length;p++)e[p]?void 0:s(!1),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,v=n[t];for(h in v)if(v.hasOwnProperty(h)){var m=v[h];v[h]=m.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=a(v.join(""),i),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),d.hasOwnProperty(h)?s(!1):void 0,d[h]=C,f+=1)}}return f!==d.length?s(!1):void 0,d.length!==e.length?s(!1):void 0,d},dangerouslyReplaceNodeWithMarkup:function(e,t){o.canUseDOM?void 0:s(!1),t?void 0:s(!1),"html"===e.tagName.toLowerCase()?s(!1):void 0;var n;n="string"==typeof t?a(t,i)[0]:t,e.parentNode.replaceChild(n,e)}};t.exports=p},{128:128,133:133,134:134,138:138,142:142}],13:[function(e,t,n){"use strict";var r=e(146),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null})];t.exports=o},{146:146}],14:[function(e,t,n){"use strict";var r=e(15),o=e(19),a=e(94),i=e(63),u=e(146),s=r.topLevelTypes,l=i.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r,u){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var d;if(t.window===t)d=t;else{var f=t.ownerDocument;d=f?f.defaultView||f.parentWindow:window}var h,v,m="",g="";if(e===s.topMouseOut?(h=t,m=n,v=l(r.relatedTarget||r.toElement),v?g=i.getID(v):v=d,v=v||d):(h=d,v=t,g=n),h===v)return null;var y=a.getPooled(c.mouseLeave,m,r,u);y.type="mouseleave",y.target=h,y.relatedTarget=v;var C=a.getPooled(c.mouseEnter,g,r,u);return C.type="mouseenter",C.target=v,C.relatedTarget=h,o.accumulateEnterLeaveDispatches(y,C,m,g),p[0]=y,p[1]=C,p}};t.exports=d},{146:146,15:15,19:19,63:63,94:94}],15:[function(e,t,n){"use strict";var r=e(145),o=r({bubbled:null,captured:null}),a=r({topAbort:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topVolumeChange:null,topWaiting:null,topWheel:null}),i={topLevelTypes:a,PropagationPhases:o};t.exports=i},{145:145}],16:[function(e,t,n){"use strict";var r=e(17),o=e(18),a=e(54),i=e(100),u=e(107),s=e(142),l=(e(150),{}),c=null,p=function(e){e&&(o.executeDispatchesInOrder(e),e.isPersistent()||e.constructor.release(e))},d=null,f={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){d=e},getInstanceHandle:function(){return d},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){"function"!=typeof n?s(!1):void 0;var o=l[t]||(l[t]={});o[e]=n;var a=r.registrationNameModules[t];a&&a.didPutListener&&a.didPutListener(e,t,n)},getListener:function(e,t){var n=l[t];return n&&n[e]},deleteListener:function(e,t){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=l[t];o&&delete o[e]},deleteAllListeners:function(e){for(var t in l)if(l[t][e]){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t),delete l[t][e]}},extractEvents:function(e,t,n,o,a){for(var u,s=r.plugins,l=0;l<s.length;l++){var c=s[l];if(c){var p=c.extractEvents(e,t,n,o,a);p&&(u=i(u,p))}}return u},enqueueEvents:function(e){e&&(c=i(c,e))},processEventQueue:function(){var e=c;c=null,u(e,p),c?s(!1):void 0,a.rethrowCaughtError()},__purge:function(){l={}},__getListenerBank:function(){return l}};t.exports=f},{100:100,107:107,142:142,150:150,17:17,18:18,54:54}],17:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(n>-1?void 0:i(!1),!l.plugins[n]){t.extractEvents?void 0:i(!1),l.plugins[n]=t;var r=t.eventTypes;for(var a in r)o(r[a],t,a)?void 0:i(!1)}}}function o(e,t,n){l.eventNameDispatchConfigs.hasOwnProperty(n)?i(!1):void 0,l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];a(u,t,n)}return!0}return e.registrationName?(a(e.registrationName,t,n),!0):!1}function a(e,t,n){l.registrationNameModules[e]?i(!1):void 0,l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e(142),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){u?i(!1):void 0,u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(s[n]?i(!1):void 0,s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{142:142}],18:[function(e,t,n){"use strict";function r(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function o(e){return e===m.topMouseMove||e===m.topTouchMove}function a(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t,n){var r=e.type||"unknown-event";e.currentTarget=v.Mount.getNode(n),f.invokeGuardedCallback(r,t,e,n),e.currentTarget=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)i(e,t[r],n[r]);else t&&i(e,t,n);e._dispatchListeners=null,e._dispatchIDs=null}function s(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=s(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;Array.isArray(t)?h(!1):void 0;var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e(15),f=e(54),h=e(142),v=(e(150),{Mount:null,injectMount:function(e){v.Mount=e}}),m=d.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:a,executeDirectDispatch:c,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,getNode:function(e){return v.Mount.getNode(e)},getID:function(e){return v.Mount.getID(e)},injection:v};t.exports=g},{142:142,15:15,150:150,54:54}],19:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return y(e,r)}function o(e,t,n){var o=t?g.bubbled:g.captured,a=r(e,n,o);a&&(n._dispatchListeners=v(n._dispatchListeners,a),n._dispatchIDs=v(n._dispatchIDs,e))}function a(e){e&&e.dispatchConfig.phasedRegistrationNames&&h.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&h.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker,o,e)}function u(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=y(e,r);o&&(n._dispatchListeners=v(n._dispatchListeners,o),n._dispatchIDs=v(n._dispatchIDs,e))}}function s(e){e&&e.dispatchConfig.registrationName&&u(e.dispatchMarker,null,e)}function l(e){m(e,a)}function c(e){m(e,i)}function p(e,t,n,r){h.injection.getInstanceHandle().traverseEnterLeave(n,r,u,e,t)}function d(e){m(e,s)}var f=e(15),h=e(16),v=(e(150),e(100)),m=e(107),g=f.PropagationPhases,y=h.getListener,C={accumulateTwoPhaseDispatches:l,accumulateTwoPhaseDispatchesSkipTarget:c,accumulateDirectDispatches:d,accumulateEnterLeaveDispatches:p};t.exports=C},{100:100,107:107,15:15,150:150,16:16}],20:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(24),a=e(23),i=e(114);a(r.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),a=o.length;for(e=0;r>e&&n[e]===o[e];e++);var i=r-e;for(t=1;i>=t&&n[r-t]===o[a-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{114:114,23:23,24:24}],21:[function(e,t,n){"use strict";var r,o=e(10),a=e(128),i=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(a.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|s,allowTransparency:i,alt:null,async:s,autoComplete:null,autoPlay:s,capture:i|s,cellPadding:null,cellSpacing:null,charSet:i,challenge:i,checked:u|s,classID:i,className:r?i:u,cols:i|p,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:i,defer:s,dir:null,disabled:i|s,download:d,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:s,formTarget:i,frameBorder:i,headers:null,height:i,hidden:i|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,inputMode:i,is:i,keyParams:i,keyType:i,label:null,lang:null,list:i,loop:u|s,low:null,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,minLength:i,multiple:u|s,muted:u|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,role:i,rows:i|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:i|s,selected:u|s,shape:null,size:i|p,sizes:i,span:p,spellCheck:null,src:null,srcDoc:u,srcSet:i,start:c,step:null,style:null,summary:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:i,wmode:i,wrap:null,autoCapitalize:null,autoCorrect:null,autoSave:null,itemProp:i,itemScope:i|s,itemType:i,itemID:i,itemRef:i,property:null,results:null,security:i,unselectable:i},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",autoSave:"autosave",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,128:128}],22:[function(e,t,n){"use strict";function r(e){null!=e.checkedLink&&null!=e.valueLink?l(!1):void 0}function o(e){r(e),null!=e.value||null!=e.onChange?l(!1):void 0}function a(e){r(e),null!=e.checked||null!=e.onChange?l(!1):void 0}function i(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}var u=e(72),s=e(71),l=e(142),c=(e(150),{button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0}),p={value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func},d={},f={checkPropTypes:function(e,t,n){for(var r in p){if(p.hasOwnProperty(r))var o=p[r](t,r,e,s.prop);o instanceof Error&&!(o.message in d)&&(d[o.message]=!0,i(n))}},getValue:function(e){return e.valueLink?(o(e),e.valueLink.value):e.value},getChecked:function(e){return e.checkedLink?(a(e),e.checkedLink.value):e.checked},executeOnChange:function(e,t){return e.valueLink?(o(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(a(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(void 0,t):void 0}};t.exports=f},{142:142,150:150,71:71,72:72}],23:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var a=arguments[o];if(null!=a){var i=Object(a);for(var u in i)r.call(i,u)&&(n[u]=i[u])}}return n}t.exports=r},{}],24:[function(e,t,n){"use strict";var r=e(142),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},a=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var a=o.instancePool.pop();return o.call(a,e,t,n,r),a}return new o(e,t,n,r)},s=function(e,t,n,r,o){var a=this;if(a.instancePool.length){var i=a.instancePool.pop();return a.call(i,e,t,n,r,o),i}return new a(e,t,n,r,o)},l=function(e){var t=this;e instanceof t?void 0:r(!1),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=10,p=o,d=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||p,n.poolSize||(n.poolSize=c),n.release=l,n},f={addPoolingTo:d,oneArgumentPooler:o,twoArgumentPooler:a,threeArgumentPooler:i,fourArgumentPooler:u,fiveArgumentPooler:s};t.exports=f},{142:142}],25:[function(e,t,n){"use strict";var r=(e(60),e(105)),o=(e(150),"_getDOMNodeDidWarn"),a={getDOMNode:function(){return this.constructor[o]=!0,r(this)}};t.exports=a},{105:105,150:150,60:60}],26:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,v)||(e[v]=f++,p[e[v]]={}),p[e[v]]}var o=e(15),a=e(16),i=e(17),u=e(55),s=e(99),l=e(23),c=e(116),p={},d=!1,f=0,h={topAbort:"abort",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},v="_reactListenersID"+String(Math.random()).slice(2),m=l({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e);
	},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,a=r(n),u=i.registrationNameDependencies[e],s=o.topLevelTypes,l=0;l<u.length;l++){var p=u[l];a.hasOwnProperty(p)&&a[p]||(p===s.topWheel?c("wheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):c("mousewheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):m.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):p===s.topScroll?c("scroll",!0)?m.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):m.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):p===s.topFocus||p===s.topBlur?(c("focus",!0)?(m.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),m.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):c("focusin")&&(m.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),m.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),a[s.topBlur]=!0,a[s.topFocus]=!0):h.hasOwnProperty(p)&&m.ReactEventListener.trapBubbledEvent(p,h[p],n),a[p]=!0)}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues;m.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:a.eventNameDispatchConfigs,registrationNameModules:a.registrationNameModules,putListener:a.putListener,getListener:a.getListener,deleteListener:a.deleteListener,deleteAllListeners:a.deleteAllListeners});t.exports=m},{116:116,15:15,16:16,17:17,23:23,55:55,99:99}],27:[function(e,t,n){"use strict";function r(e,t,n){var r=void 0===e[n];null!=t&&r&&(e[n]=a(t,null))}var o=e(74),a=e(115),i=e(124),u=e(125),s=(e(150),{instantiateChildren:function(e,t,n){if(null==e)return null;var o={};return u(e,r,o),o},updateChildren:function(e,t,n,r){if(!t&&!e)return null;var u;for(u in t)if(t.hasOwnProperty(u)){var s=e&&e[u],l=s&&s._currentElement,c=t[u];if(null!=s&&i(l,c))o.receiveComponent(s,c,n,r),t[u]=s;else{s&&o.unmountComponent(s,u);var p=a(c,null);t[u]=p}}for(u in e)!e.hasOwnProperty(u)||t&&t.hasOwnProperty(u)||o.unmountComponent(e[u]);return t},unmountChildren:function(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];o.unmountComponent(n)}}});t.exports=s},{115:115,124:124,125:125,150:150,74:74}],28:[function(e,t,n){"use strict";function r(e){return(""+e).replace(b,"//")}function o(e,t){this.func=e,this.context=t,this.count=0}function a(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function i(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);g(e,a,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,a=e.keyPrefix,i=e.func,u=e.context,s=i.call(u,t,e.count++);Array.isArray(s)?l(s,o,n,m.thatReturnsArgument):null!=s&&(v.isValidElement(s)&&(s=v.cloneAndReplaceKey(s,a+(s!==t?r(s.key||"")+"/":"")+n)),o.push(s))}function l(e,t,n,o,a){var i="";null!=n&&(i=r(n)+"/");var l=u.getPooled(t,i,o,a);g(e,s,l),u.release(l)}function c(e,t,n){if(null==e)return e;var r=[];return l(e,r,null,t,n),r}function p(e,t,n){return null}function d(e,t){return g(e,p,null)}function f(e){var t=[];return l(e,t,null,m.thatReturnsArgument),t}var h=e(24),v=e(50),m=e(134),g=e(125),y=h.twoArgumentPooler,C=h.fourArgumentPooler,b=/\/(?!\/)/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},h.addPoolingTo(o,y),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},h.addPoolingTo(u,C);var _={forEach:i,map:c,mapIntoWithKeyPrefixInternal:l,count:d,toArray:f};t.exports=_},{125:125,134:134,24:24,50:50}],29:[function(e,t,n){"use strict";function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;D.hasOwnProperty(t)&&(n!==b.OVERRIDE_BASE?m(!1):void 0),e.hasOwnProperty(t)&&(n!==b.DEFINE_MANY&&n!==b.DEFINE_MANY_MERGED?m(!1):void 0)}function o(e,t){if(t){"function"==typeof t?m(!1):void 0,d.isValidElement(t)?m(!1):void 0;var n=e.prototype;t.hasOwnProperty(C)&&x.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==C){var a=t[o];if(r(n,o),x.hasOwnProperty(o))x[o](e,a);else{var i=E.hasOwnProperty(o),l=n.hasOwnProperty(o),c="function"==typeof a,p=c&&!i&&!l&&t.autobind!==!1;if(p)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=a,n[o]=a;else if(l){var f=E[o];!i||f!==b.DEFINE_MANY_MERGED&&f!==b.DEFINE_MANY?m(!1):void 0,f===b.DEFINE_MANY_MERGED?n[o]=u(n[o],a):f===b.DEFINE_MANY&&(n[o]=s(n[o],a))}else n[o]=a}}}}function a(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in x;o?m(!1):void 0;var a=n in e;a?m(!1):void 0,e[n]=r}}}function i(e,t){e&&t&&"object"==typeof e&&"object"==typeof t?void 0:m(!1);for(var n in t)t.hasOwnProperty(n)&&(void 0!==e[n]?m(!1):void 0,e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,n)}}var p=e(30),d=e(50),f=(e(71),e(70),e(67)),h=e(23),v=e(135),m=e(142),g=e(145),y=e(146),C=(e(150),y({mixins:null})),b=g({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],E={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},x={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=h({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=h({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=h({},e.propTypes,t)},statics:function(e,t){a(e,t)},autobind:function(){}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t)},isMounted:function(){return this.updater.isMounted(this)},setProps:function(e,t){this.updater.enqueueSetProps(this,e),t&&this.updater.enqueueCallback(this,t)},replaceProps:function(e,t){this.updater.enqueueReplaceProps(this,e),t&&this.updater.enqueueCallback(this,t)}},N=function(){};h(N.prototype,p.prototype,D);var M={createClass:function(e){var t=function(e,t,n){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.refs=v,this.updater=n||f,this.state=null;var r=this.getInitialState?this.getInitialState():null;"object"!=typeof r||Array.isArray(r)?m(!1):void 0,this.state=r};t.prototype=new N,t.prototype.constructor=t,t.isReactClass={},_.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.prototype.render?void 0:m(!1);for(var n in E)t.prototype[n]||(t.prototype[n]=null);return t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=M},{135:135,142:142,145:145,146:146,150:150,23:23,30:30,50:50,67:67,70:70,71:71}],30:[function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||o}var o=e(67),a=e(135),i=e(142);e(150);r.isReactClass={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?i(!1):void 0,this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e)};t.exports=r},{135:135,142:142,150:150,67:67}],31:[function(e,t,n){"use strict";var r=e(40),o=e(63),a={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=a},{40:40,63:63}],32:[function(e,t,n){"use strict";var r=e(142),o=!1,a={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){o?r(!1):void 0,a.unmountIDFromEnvironment=e.unmountIDFromEnvironment,a.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,a.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=a},{142:142}],33:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}function o(e){}var a=e(32),i=e(34),u=e(50),s=e(60),l=e(69),c=e(71),p=(e(70),e(74)),d=e(80),f=e(23),h=e(135),v=e(142),m=e(124);e(150);o.prototype.render=function(){var e=s.get(this)._currentElement.type;return new e(this.props,this.context,this.updater)};var g=1,y={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._topLevelWrapper=null,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=g++,this._rootNodeID=e;var r,a,i=this._processProps(this._currentElement.props),l=this._processContext(n),c=this._currentElement.type;r=new c(i,l,d),(null===r||r===!1||u.isValidElement(r))&&(a=r,r=new o(c)),r.props=i,r.context=l,r.refs=h,r.updater=d,this._instance=r,s.set(r,this);var f=r.state;void 0===f&&(r.state=f=null),"object"!=typeof f||Array.isArray(f)?v(!1):void 0,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,r.componentWillMount&&(r.componentWillMount(),this._pendingStateQueue&&(r.state=this._processPendingState(r.props,r.context))),void 0===a&&(a=this._renderValidatedComponent()),this._renderedComponent=this._instantiateReactComponent(a);var m=p.mountComponent(this._renderedComponent,e,t,this._processChildContext(n));return r.componentDidMount&&t.getReactMountReady().enqueue(r.componentDidMount,r),m},unmountComponent:function(){var e=this._instance;e.componentWillUnmount&&e.componentWillUnmount(),p.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._instance=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,this._topLevelWrapper=null,s.remove(e)},_maskContext:function(e){var t=null,n=this._currentElement.type,r=n.contextTypes;if(!r)return h;t={};for(var o in r)t[o]=e[o];return t},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._currentElement.type,n=this._instance,r=n.getChildContext&&n.getChildContext();if(r){"object"!=typeof t.childContextTypes?v(!1):void 0;for(var o in r)o in t.childContextTypes?void 0:v(!1);return f({},e,r)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var a in e)if(e.hasOwnProperty(a)){var i;try{"function"!=typeof e[a]?v(!1):void 0,i=e[a](t,a,o,n)}catch(u){i=u}i instanceof Error&&(r(this),n===c.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&p.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},updateComponent:function(e,t,n,r,o){var a,i=this._instance,u=this._context===o?i.context:this._processContext(o);t===n?a=n.props:(a=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(a,u));var s=this._processPendingState(a,u),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(a,s,u);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,a,s,u,e,o)):(this._currentElement=n,this._context=o,i.props=a,i.state=s,i.context=u)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var a=f({},o?r[0]:n.state),i=o?1:0;i<r.length;i++){var u=r[i];f(a,"function"==typeof u?u.call(n,a,e,t):u)}return a},_performComponentUpdate:function(e,t,n,r,o,a){var i,u,s,l=this._instance,c=Boolean(l.componentDidUpdate);c&&(i=l.props,u=l.state,s=l.context),l.componentWillUpdate&&l.componentWillUpdate(t,n,r),this._currentElement=e,this._context=a,l.props=t,l.state=n,l.context=r,this._updateRenderedComponent(o,a),c&&o.getReactMountReady().enqueue(l.componentDidUpdate.bind(l,i,u,s),l)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(m(r,o))p.receiveComponent(n,o,e,this._processChildContext(t));else{var a=this._rootNodeID,i=n._rootNodeID;p.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(o);var u=p.mountComponent(this._renderedComponent,a,e,this._processChildContext(t));this._replaceNodeWithMarkupByID(i,u)}},_replaceNodeWithMarkupByID:function(e,t){a.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e;i.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=null}return null===e||e===!1||u.isValidElement(e)?void 0:v(!1),e},attachRef:function(e,t){var n=this.getPublicInstance();null==n?v(!1):void 0;var r=n.refs===h?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){var e=this._instance;return e instanceof o?null:e},_instantiateReactComponent:null};l.measureMethods(y,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var C={Mixin:y};t.exports=C},{124:124,135:135,142:142,150:150,23:23,32:32,34:34,50:50,60:60,69:69,70:70,71:71,74:74,80:80}],34:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],35:[function(e,t,n){"use strict";var r=e(34),o=e(46),a=e(49),i=e(59),u=e(63),s=e(69),l=e(74),c=e(81),p=e(82),d=e(105),f=e(121);e(150);a.inject();var h=s.measure("React","render",u.render),v={findDOMNode:d,render:h,unmountComponentAtNode:u.unmountComponentAtNode,version:p,unstable_batchedUpdates:c.batchedUpdates,unstable_renderSubtreeIntoContainer:f};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:r,InstanceHandles:i,Mount:u,Reconciler:l,TextComponent:o});t.exports=v},{105:105,121:121,150:150,34:34,46:46,49:49,59:59,63:63,69:69,74:74,81:81,82:82}],36:[function(e,t,n){"use strict";var r={onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0},o={getNativeProps:function(e,t,n){if(!t.disabled)return t;var o={};for(var a in t)t.hasOwnProperty(a)&&!r[a]&&(o[a]=t[a]);return o}};t.exports=o},{}],37:[function(e,t,n){"use strict";function r(){return this}function o(){var e=this._reactInternalComponent;return!!e}function a(){}function i(e,t){var n=this._reactInternalComponent;n&&(T.enqueueSetPropsInternal(n,e),t&&T.enqueueCallbackInternal(n,t))}function u(e,t){var n=this._reactInternalComponent;n&&(T.enqueueReplacePropsInternal(n,e),t&&T.enqueueCallbackInternal(n,t))}function s(e,t){t&&(null!=t.dangerouslySetInnerHTML&&(null!=t.children?A(!1):void 0,"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML?void 0:A(!1)),null!=t.style&&"object"!=typeof t.style?A(!1):void 0)}function l(e,t,n,r){var o=I.findReactContainerForID(e);if(o){var a=o.nodeType===H?o.ownerDocument:o;V(t,a)}r.getReactMountReady().enqueue(c,{id:e,registrationName:t,listener:n})}function c(){var e=this;E.putListener(e.id,e.registrationName,e.listener)}function p(){var e=this;e._rootNodeID?void 0:A(!1);var t=I.getNode(e._rootNodeID);switch(t?void 0:A(!1),e._tag){case"iframe":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];for(var n in z)z.hasOwnProperty(n)&&e._wrapperState.listeners.push(E.trapBubbledEvent(_.topLevelTypes[n],z[n],t));break;case"img":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topError,"error",t),E.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"form":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topReset,"reset",t),E.trapBubbledEvent(_.topLevelTypes.topSubmit,"submit",t)]}}function d(){P.postUpdateWrapper(this)}function f(e){Z.call($,e)||(Q.test(e)?void 0:A(!1),$[e]=!0)}function h(e,t){return e}function v(e,t){return e.indexOf("-")>=0||null!=t.is}function m(e){f(e),this._tag=e.toLowerCase(),this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._rootNodeID=null,this._wrapperState=null,this._topLevelWrapper=null,this._nodeWithLegacyProperties=null}var g=e(2),y=e(5),C=e(10),b=e(11),_=e(15),E=e(26),x=e(31),D=e(36),N=e(41),M=e(42),P=e(43),w=e(47),I=e(63),R=e(64),S=e(69),T=e(80),k=e(23),O=e(104),A=e(142),L=(e(116),e(146)),U=e(122),F=e(123),B=(e(148),e(126),e(150),E.deleteListener),V=E.listenTo,j=E.registrationNameModules,W={string:!0,number:!0},K=L({style:null}),H=1,q=!1;try{Object.defineProperty({},"test",{get:function(){}}),q=!0}catch(Y){}var z={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},G={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},X={listing:!0,pre:!0,textarea:!0},Q=(k({menuitem:!0},G),/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),$={},Z={}.hasOwnProperty;m.displayName="ReactDOMComponent",m.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e;var r=this._currentElement.props;switch(this._tag){case"iframe":case"img":case"form":case"video":case"audio":this._wrapperState={listeners:null},t.getReactMountReady().enqueue(p,this);break;case"button":r=D.getNativeProps(this,r,n);break;case"input":N.mountWrapper(this,r,n),r=N.getNativeProps(this,r,n);break;case"option":M.mountWrapper(this,r,n),r=M.getNativeProps(this,r,n);break;case"select":P.mountWrapper(this,r,n),r=P.getNativeProps(this,r,n),n=P.processChildContext(this,r,n);break;case"textarea":w.mountWrapper(this,r,n),r=w.getNativeProps(this,r,n)}s(this,r);var o;if(t.useCreateElement){var a=n[I.ownerDocumentContextKey],i=a.createElement(this._currentElement.type);b.setAttributeForID(i,this._rootNodeID),I.getID(i),this._updateDOMProperties({},r,t,i),this._createInitialChildren(t,r,n,i),o=i}else{var u=this._createOpenTagMarkupAndPutListeners(t,r),l=this._createContentMarkup(t,r,n);o=!l&&G[this._tag]?u+"/>":u+">"+l+"</"+this._currentElement.type+">"}switch(this._tag){case"button":case"input":case"select":case"textarea":r.autoFocus&&t.getReactMountReady().enqueue(g.focusDOMComponent,this)}return o},_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if(null!=o)if(j.hasOwnProperty(r))l(this._rootNodeID,r,o,e);else{r===K&&(o&&(o=this._previousStyleCopy=k({},t.style)),o=y.createMarkupForStyles(o));var a=null;a=null!=this._tag&&v(this._tag,t)?b.createMarkupForCustomAttribute(r,o):b.createMarkupForProperty(r,o),a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n;var i=b.createMarkupForID(this._rootNodeID);return n+" "+i},_createContentMarkup:function(e,t,n){var r="",o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&(r=o.__html);else{var a=W[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)r=O(a);else if(null!=i){var u=this.mountChildren(i,e,h(n,this));r=u.join("")}}return X[this._tag]&&"\n"===r.charAt(0)?"\n"+r:r},_createInitialChildren:function(e,t,n,r){var o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&U(r,o.__html);else{var a=W[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)F(r,a);else if(null!=i)for(var u=this.mountChildren(i,e,h(n,this)),s=0;s<u.length;s++)r.appendChild(u[s])}},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,r){var o=t.props,a=this._currentElement.props;switch(this._tag){case"button":o=D.getNativeProps(this,o),a=D.getNativeProps(this,a);break;case"input":N.updateWrapper(this),o=N.getNativeProps(this,o),a=N.getNativeProps(this,a);break;case"option":o=M.getNativeProps(this,o),a=M.getNativeProps(this,a);break;case"select":o=P.getNativeProps(this,o),a=P.getNativeProps(this,a);break;case"textarea":w.updateWrapper(this),o=w.getNativeProps(this,o),a=w.getNativeProps(this,a)}s(this,a),this._updateDOMProperties(o,a,e,null),this._updateDOMChildren(o,a,e,h(r,this)),!q&&this._nodeWithLegacyProperties&&(this._nodeWithLegacyProperties.props=a),"select"===this._tag&&e.getReactMountReady().enqueue(d,this)},_updateDOMProperties:function(e,t,n,r){var o,a,i;for(o in e)if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o))if(o===K){var u=this._previousStyleCopy;for(a in u)u.hasOwnProperty(a)&&(i=i||{},i[a]="");this._previousStyleCopy=null}else j.hasOwnProperty(o)?e[o]&&B(this._rootNodeID,o):(C.properties[o]||C.isCustomAttribute(o))&&(r||(r=I.getNode(this._rootNodeID)),b.deleteValueForProperty(r,o));for(o in t){var s=t[o],c=o===K?this._previousStyleCopy:e[o];if(t.hasOwnProperty(o)&&s!==c)if(o===K)if(s?s=this._previousStyleCopy=k({},s):this._previousStyleCopy=null,c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(i=i||{},i[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(i=i||{},i[a]=s[a])}else i=s;else j.hasOwnProperty(o)?s?l(this._rootNodeID,o,s,n):c&&B(this._rootNodeID,o):v(this._tag,t)?(r||(r=I.getNode(this._rootNodeID)),b.setValueForAttribute(r,o,s)):(C.properties[o]||C.isCustomAttribute(o))&&(r||(r=I.getNode(this._rootNodeID)),null!=s?b.setValueForProperty(r,o,s):b.deleteValueForProperty(r,o))}i&&(r||(r=I.getNode(this._rootNodeID)),y.setValueForStyles(r,i))},_updateDOMChildren:function(e,t,n,r){var o=W[typeof e.children]?e.children:null,a=W[typeof t.children]?t.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=a?null:t.children,c=null!=o||null!=i,p=null!=a||null!=u;null!=s&&null==l?this.updateChildren(null,n,r):c&&!p&&this.updateTextContent(""),null!=a?o!==a&&this.updateTextContent(""+a):null!=u?i!==u&&this.updateMarkup(""+u):null!=l&&this.updateChildren(l,n,r)},unmountComponent:function(){switch(this._tag){case"iframe":case"img":case"form":case"video":case"audio":var e=this._wrapperState.listeners;if(e)for(var t=0;t<e.length;t++)e[t].remove();break;case"input":N.unmountWrapper(this);break;case"html":case"head":case"body":A(!1)}if(this.unmountChildren(),E.deleteAllListeners(this._rootNodeID),x.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._wrapperState=null,this._nodeWithLegacyProperties){var n=this._nodeWithLegacyProperties;n._reactInternalComponent=null,this._nodeWithLegacyProperties=null}},getPublicInstance:function(){if(!this._nodeWithLegacyProperties){var e=I.getNode(this._rootNodeID);e._reactInternalComponent=this,e.getDOMNode=r,e.isMounted=o,e.setState=a,e.replaceState=a,e.forceUpdate=a,e.setProps=i,e.replaceProps=u,e.props=this._currentElement.props,this._nodeWithLegacyProperties=e}return this._nodeWithLegacyProperties}},S.measureMethods(m,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),k(m.prototype,m.Mixin,R.Mixin),t.exports=m},{10:10,104:104,11:11,116:116,122:122,123:123,126:126,142:142,146:146,148:148,15:15,150:150,2:2,23:23,26:26,31:31,36:36,41:41,42:42,43:43,47:47,5:5,63:63,64:64,69:69,80:80}],38:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(50),a=(e(51),e(147)),i=a({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=i},{147:147,50:50,51:51}],39:[function(e,t,n){"use strict";var r={useCreateElement:!1};t.exports=r},{}],40:[function(e,t,n){"use strict";var r=e(9),o=e(11),a=e(63),i=e(69),u=e(142),s={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},l={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s.hasOwnProperty(t)?u(!1):void 0,null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);r.processUpdates(e,t)}};i.measureMethods(l,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=l},{11:11,142:142,63:63,69:69,9:9}],41:[function(e,t,n){"use strict";function r(){this._rootNodeID&&d.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=i.executeOnChange(t,e);s.asap(r,this);var o=t.name;if("radio"===t.type&&null!=o){for(var a=u.getNode(this._rootNodeID),l=a;l.parentNode;)l=l.parentNode;for(var d=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),f=0;f<d.length;f++){var h=d[f];if(h!==a&&h.form===a.form){var v=u.getID(h);v?void 0:c(!1);var m=p[v];m?void 0:c(!1),s.asap(r,m)}}}return n}var a=e(40),i=e(22),u=e(63),s=e(81),l=e(23),c=e(142),p={},d={getNativeProps:function(e,t,n){var r=i.getValue(t),o=i.getChecked(t),a=l({},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=r?r:e._wrapperState.initialValue,checked:null!=o?o:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange});return a},mountWrapper:function(e,t){i.checkPropTypes("input",t,e._currentElement._owner);var n=t.defaultValue;e._wrapperState={initialChecked:t.defaultChecked||!1,initialValue:null!=n?n:null,onChange:o.bind(e)},p[e._rootNodeID]=e},unmountWrapper:function(e){delete p[e._rootNodeID]},updateWrapper:function(e){var t=e._currentElement.props,n=t.checked;null!=n&&a.updatePropertyByID(e._rootNodeID,"checked",n||!1);var r=i.getValue(t);null!=r&&a.updatePropertyByID(e._rootNodeID,"value",""+r)}};t.exports=d},{142:142,22:22,23:23,40:40,63:63,81:81}],42:[function(e,t,n){"use strict";var r=e(28),o=e(43),a=e(23),i=(e(150),o.valueContextKey),u={mountWrapper:function(e,t,n){var r=n[i],o=null;if(null!=r)if(o=!1,Array.isArray(r)){for(var a=0;a<r.length;a++)if(""+r[a]==""+t.value){o=!0;break}}else o=""+r==""+t.value;e._wrapperState={selected:o}},getNativeProps:function(e,t,n){var o=a({selected:void 0,children:void 0},t);null!=e._wrapperState.selected&&(o.selected=e._wrapperState.selected);var i="";return r.forEach(t.children,function(e){null!=e&&("string"==typeof e||"number"==typeof e)&&(i+=e)}),o.children=i,o}};t.exports=u},{150:150,23:23,28:28,43:43}],43:[function(e,t,n){"use strict";function r(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=i.getValue(e);null!=t&&o(this,e,t)}}function o(e,t,n){var r,o,a=u.getNode(e._rootNodeID).options;if(t){for(r={},o=0;o<n.length;o++)r[""+n[o]]=!0;for(o=0;o<a.length;o++){var i=r.hasOwnProperty(a[o].value);a[o].selected!==i&&(a[o].selected=i)}}else{for(r=""+n,o=0;o<a.length;o++)if(a[o].value===r)return void(a[o].selected=!0);a.length&&(a[0].selected=!0)}}function a(e){var t=this._currentElement.props,n=i.executeOnChange(t,e);return this._wrapperState.pendingUpdate=!0,s.asap(r,this),n}var i=e(22),u=e(63),s=e(81),l=e(23),c=(e(150),"__ReactDOMSelect_value$"+Math.random().toString(36).slice(2)),p={valueContextKey:c,getNativeProps:function(e,t,n){return l({},t,{onChange:e._wrapperState.onChange,value:void 0})},mountWrapper:function(e,t){var n=i.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,onChange:a.bind(e),wasMultiple:Boolean(t.multiple)}},processChildContext:function(e,t,n){var r=l({},n);return r[c]=e._wrapperState.initialValue,r},postUpdateWrapper:function(e){var t=e._currentElement.props;e._wrapperState.initialValue=void 0;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var r=i.getValue(t);null!=r?(e._wrapperState.pendingUpdate=!1,o(e,Boolean(t.multiple),r)):n!==Boolean(t.multiple)&&(null!=t.defaultValue?o(e,Boolean(t.multiple),t.defaultValue):o(e,Boolean(t.multiple),t.multiple?[]:""))}};t.exports=p},{150:150,22:22,23:23,63:63,81:81}],44:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var a=o.text.length,i=a+r;return{start:a,end:i}}function a(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,a=t.focusNode,i=t.focusOffset,u=t.getRangeAt(0),s=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();
	c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(a,i);var v=h.collapsed;return{start:v?f:d,end:v?d:f}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),a="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>a){var i=a;a=o,o=i}var u=l(e,o),s=l(e,a);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>a?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(128),l=e(113),c=e(114),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:a,setOffsets:p?i:u};t.exports=d},{113:113,114:114,128:128}],45:[function(e,t,n){"use strict";var r=e(49),o=e(78),a=e(82);r.inject();var i={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:a};t.exports=i},{49:49,78:78,82:82}],46:[function(e,t,n){"use strict";var r=e(9),o=e(11),a=e(31),i=e(63),u=e(23),s=e(104),l=e(123),c=(e(126),function(e){});u(c.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){if(this._rootNodeID=e,t.useCreateElement){var r=n[i.ownerDocumentContextKey],a=r.createElement("span");return o.setAttributeForID(a,e),i.getID(a),l(a,this._stringText),a}var u=s(this._stringText);return t.renderToStaticMarkup?u:"<span "+o.createMarkupForID(e)+">"+u+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;if(n!==this._stringText){this._stringText=n;var o=i.getNode(this._rootNodeID);r.updateTextContent(o,n)}}},unmountComponent:function(){a.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=c},{104:104,11:11,123:123,126:126,23:23,31:31,63:63,9:9}],47:[function(e,t,n){"use strict";function r(){this._rootNodeID&&c.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=a.executeOnChange(t,e);return u.asap(r,this),n}var a=e(22),i=e(40),u=e(81),s=e(23),l=e(142),c=(e(150),{getNativeProps:function(e,t,n){null!=t.dangerouslySetInnerHTML?l(!1):void 0;var r=s({},t,{defaultValue:void 0,value:void 0,children:e._wrapperState.initialValue,onChange:e._wrapperState.onChange});return r},mountWrapper:function(e,t){a.checkPropTypes("textarea",t,e._currentElement._owner);var n=t.defaultValue,r=t.children;null!=r&&(null!=n?l(!1):void 0,Array.isArray(r)&&(r.length<=1?void 0:l(!1),r=r[0]),n=""+r),null==n&&(n="");var i=a.getValue(t);e._wrapperState={initialValue:""+(null!=i?i:n),onChange:o.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=a.getValue(t);null!=n&&i.updatePropertyByID(e._rootNodeID,"value",""+n)}});t.exports=c},{142:142,150:150,22:22,23:23,40:40,81:81}],48:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(81),a=e(98),i=e(23),u=e(134),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];i(r.prototype,a.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o,a){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o,a):p.perform(e,null,t,n,r,o,a)}};t.exports=d},{134:134,23:23,81:81,98:98}],49:[function(e,t,n){"use strict";function r(){N||(N=!0,g.EventEmitter.injectReactEventListener(m),g.EventPluginHub.injectEventPluginOrder(u),g.EventPluginHub.injectInstanceHandle(y),g.EventPluginHub.injectMount(C),g.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:x,EnterLeaveEventPlugin:s,ChangeEventPlugin:a,SelectEventPlugin:_,BeforeInputEventPlugin:o}),g.NativeComponent.injectGenericComponentClass(h),g.NativeComponent.injectTextComponentClass(v),g.Class.injectMixin(p),g.DOMProperty.injectDOMPropertyConfig(c),g.DOMProperty.injectDOMPropertyConfig(D),g.EmptyComponent.injectEmptyComponent("noscript"),g.Updates.injectReconcileTransaction(b),g.Updates.injectBatchingStrategy(f),g.RootIndex.injectCreateReactRootIndex(l.canUseDOM?i.createReactRootIndex:E.createReactRootIndex),g.Component.injectEnvironment(d))}var o=e(3),a=e(7),i=e(8),u=e(13),s=e(14),l=e(128),c=e(21),p=e(25),d=e(31),f=e(48),h=e(37),v=e(46),m=e(56),g=e(57),y=e(59),C=e(63),b=e(73),_=e(84),E=e(85),x=e(86),D=e(83),N=!1;t.exports={inject:r}},{128:128,13:13,14:14,21:21,25:25,3:3,31:31,37:37,46:46,48:48,56:56,57:57,59:59,63:63,7:7,73:73,8:8,83:83,84:84,85:85,86:86}],50:[function(e,t,n){"use strict";var r=e(34),o=e(23),a="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,i={key:!0,ref:!0,__self:!0,__source:!0},u=function(e,t,n,r,o,i,u){var s={$$typeof:a,type:e,key:t,ref:n,props:u,_owner:i};return s};u.createElement=function(e,t,n){var o,a={},s=null,l=null,c=null,p=null;if(null!=t){l=void 0===t.ref?null:t.ref,s=void 0===t.key?null:""+t.key,c=void 0===t.__self?null:t.__self,p=void 0===t.__source?null:t.__source;for(o in t)t.hasOwnProperty(o)&&!i.hasOwnProperty(o)&&(a[o]=t[o])}var d=arguments.length-2;if(1===d)a.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];a.children=f}if(e&&e.defaultProps){var v=e.defaultProps;for(o in v)"undefined"==typeof a[o]&&(a[o]=v[o])}return u(e,s,l,c,p,r.current,a)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceKey=function(e,t){var n=u(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},u.cloneAndReplaceProps=function(e,t){var n=u(e.type,e.key,e.ref,e._self,e._source,e._owner,t);return n},u.cloneElement=function(e,t,n){var a,s=o({},e.props),l=e.key,c=e.ref,p=e._self,d=e._source,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=r.current),void 0!==t.key&&(l=""+t.key);for(a in t)t.hasOwnProperty(a)&&!i.hasOwnProperty(a)&&(s[a]=t[a])}var h=arguments.length-2;if(1===h)s.children=n;else if(h>1){for(var v=Array(h),m=0;h>m;m++)v[m]=arguments[m+2];s.children=v}return u(e.type,l,c,p,d,f,s)},u.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.exports=u},{23:23,34:34}],51:[function(e,t,n){"use strict";function r(){if(p.current){var e=p.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,a("uniqueKey",e,t))}function a(e,t,n){var o=r();if(!o){var a="string"==typeof n?n:n.displayName||n.name;a&&(o=" Check the top-level render call using <"+a+">.")}var i=h[e]||(h[e]={});if(i[o])return null;i[o]=!0;var u={parentOrOwner:o,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==p.current&&(u.childOwner=" It was passed a child from "+t._owner.getName()+"."),u}function i(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];l.isValidElement(r)&&o(r,t)}else if(l.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var a=d(e);if(a&&a!==e.entries)for(var i,u=a.call(e);!(i=u.next()).done;)l.isValidElement(i.value)&&o(i.value,t)}}function u(e,t,n,o){for(var a in t)if(t.hasOwnProperty(a)){var i;try{"function"!=typeof t[a]?f(!1):void 0,i=t[a](n,a,e,o)}catch(u){i=u}i instanceof Error&&!(i.message in v)&&(v[i.message]=!0,r())}}function s(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&u(n,t.propTypes,e.props,c.prop),"function"==typeof t.getDefaultProps}}var l=e(50),c=e(71),p=(e(70),e(34)),d=e(112),f=e(142),h=(e(150),{}),v={},m={createElement:function(e,t,n){var r=l.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)i(arguments[o],e);return s(r),r},createFactory:function(e){var t=m.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=l.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)i(arguments[o],r.type);return s(r),r}};t.exports=m},{112:112,142:142,150:150,34:34,50:50,70:70,71:71}],52:[function(e,t,n){"use strict";var r,o=e(50),a=e(53),i=e(74),u=e(23),s={injectEmptyComponent:function(e){r=o.createElement(e)}},l=function(e){this._currentElement=null,this._rootNodeID=null,this._renderedComponent=e(r)};u(l.prototype,{construct:function(e){},mountComponent:function(e,t,n){return a.registerNullComponentID(e),this._rootNodeID=e,i.mountComponent(this._renderedComponent,e,t,n)},receiveComponent:function(){},unmountComponent:function(e,t,n){i.unmountComponent(this._renderedComponent),a.deregisterNullComponentID(this._rootNodeID),this._rootNodeID=null,this._renderedComponent=null}}),l.injection=s,t.exports=l},{23:23,50:50,53:53,74:74}],53:[function(e,t,n){"use strict";function r(e){return!!i[e]}function o(e){i[e]=!0}function a(e){delete i[e]}var i={},u={isNullComponentID:r,registerNullComponentID:o,deregisterNullComponentID:a};t.exports=u},{}],54:[function(e,t,n){"use strict";var r=null,o={invokeGuardedCallback:function(e,t,n,o){try{return t(n,o)}catch(a){return void(null===r&&(r=a))}},rethrowCaughtError:function(){if(r){var e=r;throw r=null,e}}};t.exports=o},{}],55:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(16),a={handleTopLevel:function(e,t,n,a,i){var u=o.extractEvents(e,t,n,a,i);r(u)}};t.exports=a},{16:16}],56:[function(e,t,n){"use strict";function r(e){var t=d.getID(e),n=p.getReactRootIDFromNodeID(t),r=d.findReactContainerForID(n),o=d.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function a(e){i(e)}function i(e){for(var t=d.getFirstReactDOM(v(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0;o<e.ancestors.length;o++){t=e.ancestors[o];var a=d.getID(t)||"";g._handleTopLevel(e.topLevelType,t,a,e.nativeEvent,v(e.nativeEvent))}}function u(e){var t=m(window);e(t)}var s=e(127),l=e(128),c=e(24),p=e(59),d=e(63),f=e(81),h=e(23),v=e(111),m=e(139);h(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),c.addPoolingTo(o,c.twoArgumentPooler);var g={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:l.canUseDOM?window:null,setHandleTopLevel:function(e){g._handleTopLevel=e},setEnabled:function(e){g._enabled=!!e},isEnabled:function(){return g._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?s.listen(r,t,g.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?s.capture(r,t,g.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=u.bind(null,e);s.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(g._enabled){var n=o.getPooled(e,t);try{f.batchedUpdates(a,n)}finally{o.release(n)}}}};t.exports=g},{111:111,127:127,128:128,139:139,23:23,24:24,59:59,63:63,81:81}],57:[function(e,t,n){"use strict";var r=e(10),o=e(16),a=e(32),i=e(29),u=e(52),s=e(26),l=e(66),c=e(69),p=e(76),d=e(81),f={Component:a.injection,Class:i.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{10:10,16:16,26:26,29:29,32:32,52:52,66:66,69:69,76:76,81:81}],58:[function(e,t,n){"use strict";function r(e){return a(document.documentElement,e)}var o=e(44),a=e(131),i=e(136),u=e(137),s={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),i(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",r-n),a.select()}else o.setOffsets(e,t)}};t.exports=s},{131:131,136:136,137:137,44:44}],59:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function a(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function i(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(a(e)&&a(t)?void 0:d(!1),i(e,t)?void 0:d(!1),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,i=0;n>=i;i++)if(o(e,i)&&o(t,i))r=i;else if(e.charAt(i)!==t.charAt(i))break;var u=e.substr(0,r);return a(u)?void 0:d(!1),u}function c(e,t,n,r,o,a){e=e||"",t=t||"",e===t?d(!1):void 0;var l=i(t,e);l||i(e,t)?void 0:d(!1);for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||a&&f===t||(h=n(f,l,r)),h===!1||f===t)break;c++<v?void 0:d(!1)}}var p=e(76),d=e(142),f=".",h=f.length,v=1e4,m={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var a=l(e,t);a!==e&&c(e,a,n,r,!1,!0),a!==t&&c(a,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseTwoPhaseSkipTarget:function(e,t,n){e&&(c("",e,t,n,!0,!0),c(e,"",t,n,!0,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:f};t.exports=m},{142:142,76:76}],60:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],61:[function(e,t,n){"use strict";var r=e(28),o=e(30),a=e(29),i=e(38),u=e(50),s=(e(51),e(72)),l=e(82),c=e(23),p=e(119),d=u.createElement,f=u.createFactory,h=u.cloneElement,v={Children:{map:r.map,forEach:r.forEach,count:r.count,toArray:r.toArray,only:p},Component:o,createElement:d,cloneElement:h,isValidElement:u.isValidElement,PropTypes:s,createClass:a.createClass,createFactory:f,createMixin:function(e){return e},DOM:i,version:l,__spread:c};t.exports=v},{119:119,23:23,28:28,29:29,30:30,38:38,50:50,51:51,72:72,82:82}],62:[function(e,t,n){"use strict";var r=e(101),o=/\/?>/,a={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(o," "+a.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},canReuseMarkup:function(e,t){var n=t.getAttribute(a.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var o=r(e);return o===n}};t.exports=a},{101:101}],63:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){return e?e.nodeType===W?e.documentElement:e.firstChild:null}function a(e){var t=o(e);return t&&Q.getID(t)}function i(e){var t=u(e);if(t)if(V.hasOwnProperty(t)){var n=V[t];n!==e&&(p(n,t)?L(!1):void 0,V[t]=e)}else V[t]=e;return t}function u(e){return e&&e.getAttribute&&e.getAttribute(B)||""}function s(e,t){var n=u(e);n!==t&&delete V[n],e.setAttribute(B,t),V[t]=e}function l(e){return V.hasOwnProperty(e)&&p(V[e],e)||(V[e]=Q.findReactNodeByID(e)),V[e]}function c(e){var t=M.get(e)._rootNodeID;return D.isNullComponentID(t)?null:(V.hasOwnProperty(t)&&p(V[t],t)||(V[t]=Q.findReactNodeByID(t)),V[t])}function p(e,t){if(e){u(e)!==t?L(!1):void 0;var n=Q.findReactContainerForID(t);if(n&&O(n,e))return!0}return!1}function d(e){delete V[e]}function f(e){var t=V[e];return t&&p(t,e)?void(G=t):!1}function h(e){G=null,N.traverseAncestors(e,f);var t=G;return G=null,t}function v(e,t,n,r,o,a){E.useCreateElement&&(a=T({},a),n.nodeType===W?a[H]=n:a[H]=n.ownerDocument);var i=I.mountComponent(e,t,r,a);e._renderedComponent._topLevelWrapper=e,Q._mountImageIntoNode(i,n,o,r)}function m(e,t,n,r,o){var a=S.ReactReconcileTransaction.getPooled(r);a.perform(v,null,e,t,n,a,r,o),S.ReactReconcileTransaction.release(a)}function g(e,t){for(I.unmountComponent(e),t.nodeType===W&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}function y(e){var t=a(e);return t?t!==N.getReactRootIDFromNodeID(t):!1}function C(e){for(;e&&e.parentNode!==e;e=e.parentNode)if(1===e.nodeType){var t=u(e);if(t){var n,r=N.getReactRootIDFromNodeID(t),o=e;do n=u(o),o=o.parentNode,null==o?L(!1):void 0;while(n!==r);if(o===Y[r])return e}}return null}var b=e(10),_=e(26),E=(e(34),e(39)),x=e(50),D=e(53),N=e(59),M=e(60),P=e(62),w=e(69),I=e(74),R=e(80),S=e(81),T=e(23),k=e(135),O=e(131),A=e(115),L=e(142),U=e(122),F=e(124),B=(e(126),e(150),b.ID_ATTRIBUTE_NAME),V={},j=1,W=9,K=11,H="__ReactMount_ownerDocument$"+Math.random().toString(36).slice(2),q={},Y={},z=[],G=null,X=function(){};X.isReactClass={},X.prototype.render=function(){return this.props};var Q={_instancesByReactRootID:q,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return Q.scrollMonitor(n,function(){R.enqueueElementInternal(e,t),r&&R.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){!t||t.nodeType!==j&&t.nodeType!==W&&t.nodeType!==K?L(!1):void 0,_.ensureScrollValueMonitoring();var n=Q.registerContainer(t);return q[n]=e,n},_renderNewRootComponent:function(e,t,n,r){var o=A(e,null),a=Q._registerComponent(o,t);return S.batchedUpdates(m,o,a,t,n,r),o},renderSubtreeIntoContainer:function(e,t,n,r){return null==e||null==e._reactInternalInstance?L(!1):void 0,Q._renderSubtreeIntoContainer(e,t,n,r)},_renderSubtreeIntoContainer:function(e,t,n,r){x.isValidElement(t)?void 0:L(!1);var i=new x(X,null,null,null,null,null,t),s=q[a(n)];if(s){var l=s._currentElement,c=l.props;if(F(c,t))return Q._updateRootComponent(s,i,n,r)._renderedComponent.getPublicInstance();Q.unmountComponentAtNode(n)}var p=o(n),d=p&&!!u(p),f=y(n),h=d&&!s&&!f,v=Q._renderNewRootComponent(i,n,h,null!=e?e._reactInternalInstance._processChildContext(e._reactInternalInstance._context):k)._renderedComponent.getPublicInstance();return r&&r.call(v),v},render:function(e,t,n){return Q._renderSubtreeIntoContainer(null,e,t,n)},registerContainer:function(e){var t=a(e);return t&&(t=N.getReactRootIDFromNodeID(t)),t||(t=N.createReactRootID()),Y[t]=e,t},unmountComponentAtNode:function(e){!e||e.nodeType!==j&&e.nodeType!==W&&e.nodeType!==K?L(!1):void 0;var t=a(e),n=q[t];if(!n){var r=(y(e),u(e));return r&&r===N.getReactRootIDFromNodeID(r),!1}return S.batchedUpdates(g,n,e),delete q[t],delete Y[t],!0},findReactContainerForID:function(e){var t=N.getReactRootIDFromNodeID(e),n=Y[t];return n},findReactNodeByID:function(e){var t=Q.findReactContainerForID(e);return Q.findComponentRoot(t,e)},getFirstReactDOM:function(e){return C(e)},findComponentRoot:function(e,t){var n=z,r=0,o=h(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var a,i=n[r++];i;){var u=Q.getID(i);u?t===u?a=i:N.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(i.firstChild)):n.push(i.firstChild),i=i.nextSibling}if(a)return n.length=0,a}n.length=0,L(!1)},_mountImageIntoNode:function(e,t,n,a){if(!t||t.nodeType!==j&&t.nodeType!==W&&t.nodeType!==K?L(!1):void 0,n){var i=o(t);if(P.canReuseMarkup(e,i))return;var u=i.getAttribute(P.CHECKSUM_ATTR_NAME);i.removeAttribute(P.CHECKSUM_ATTR_NAME);var s=i.outerHTML;i.setAttribute(P.CHECKSUM_ATTR_NAME,u);var l=e,c=r(l,s);" (client) "+l.substring(c-20,c+20)+"\n (server) "+s.substring(c-20,c+20),t.nodeType===W?L(!1):void 0}if(t.nodeType===W?L(!1):void 0,a.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);t.appendChild(e)}else U(t,e)},ownerDocumentContextKey:H,getReactRootID:a,getID:i,setID:s,getNode:l,getNodeFromInstance:c,isValid:p,purgeID:d};w.measureMethods(Q,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=Q},{10:10,115:115,122:122,124:124,126:126,131:131,135:135,142:142,150:150,23:23,26:26,34:34,39:39,50:50,53:53,59:59,60:60,62:62,69:69,74:74,80:80,81:81}],64:[function(e,t,n){"use strict";function r(e,t,n){m.push({parentID:e,parentNode:null,type:p.INSERT_MARKUP,markupIndex:g.push(t)-1,content:null,fromIndex:null,toIndex:n})}function o(e,t,n){m.push({parentID:e,parentNode:null,type:p.MOVE_EXISTING,markupIndex:null,content:null,fromIndex:t,toIndex:n})}function a(e,t){m.push({parentID:e,parentNode:null,type:p.REMOVE_NODE,markupIndex:null,content:null,fromIndex:t,toIndex:null})}function i(e,t){m.push({parentID:e,parentNode:null,type:p.SET_MARKUP,markupIndex:null,content:t,fromIndex:null,toIndex:null})}function u(e,t){m.push({parentID:e,parentNode:null,type:p.TEXT_CONTENT,markupIndex:null,content:t,fromIndex:null,toIndex:null})}function s(){m.length&&(c.processChildrenUpdates(m,g),l())}function l(){m.length=0,g.length=0}var c=e(32),p=e(65),d=(e(34),e(74)),f=e(27),h=e(106),v=0,m=[],g=[],y={Mixin:{_reconcilerInstantiateChildren:function(e,t,n){return f.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,r){var o;return o=h(t),f.updateChildren(e,o,n,r)},mountChildren:function(e,t,n){var r=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=r;var o=[],a=0;for(var i in r)if(r.hasOwnProperty(i)){var u=r[i],s=this._rootNodeID+i,l=d.mountComponent(u,s,t,n);u._mountIndex=a++,o.push(l)}return o},updateTextContent:function(e){v++;var t=!0;try{var n=this._renderedChildren;f.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChild(n[r]);this.setTextContent(e),t=!1}finally{v--,v||(t?l():s())}},updateMarkup:function(e){v++;var t=!0;try{var n=this._renderedChildren;f.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setMarkup(e),t=!1}finally{v--,v||(t?l():s())}},updateChildren:function(e,t,n){v++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{v--,v||(r?l():s())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=this._reconcilerUpdateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var a,i=0,u=0;for(a in o)if(o.hasOwnProperty(a)){var s=r&&r[a],l=o[a];s===l?(this.moveChild(s,u,i),i=Math.max(s._mountIndex,i),s._mountIndex=u):(s&&(i=Math.max(s._mountIndex,i),this._unmountChild(s)),this._mountChildByNameAtIndex(l,a,u,t,n)),u++}for(a in r)!r.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||this._unmountChild(r[a])}},unmountChildren:function(){var e=this._renderedChildren;f.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){a(this._rootNodeID,e._mountIndex)},setTextContent:function(e){u(this._rootNodeID,e)},setMarkup:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var a=this._rootNodeID+t,i=d.mountComponent(e,a,r,o);e._mountIndex=n,this.createChild(e,i)},_unmountChild:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=y},{106:106,27:27,32:32,34:34,65:65,74:74}],65:[function(e,t,n){"use strict";var r=e(145),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});t.exports=o},{145:145}],66:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return c?void 0:s(!1),new c(e.type,e.props)}function a(e){return new d(e)}function i(e){return e instanceof d}var u=e(23),s=e(142),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:a,isTextComponent:i,injection:f};t.exports=h},{142:142,23:23}],67:[function(e,t,n){"use strict";function r(e,t){}var o=(e(150),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){r(e,"forceUpdate")},enqueueReplaceState:function(e,t){r(e,"replaceState")},enqueueSetState:function(e,t){r(e,"setState")},enqueueSetProps:function(e,t){r(e,"setProps")},enqueueReplaceProps:function(e,t){r(e,"replaceProps")}});t.exports=o},{150:150}],68:[function(e,t,n){"use strict";var r=e(142),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o.isValidOwner(n)?void 0:r(!1),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o.isValidOwner(n)?void 0:r(!1),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{142:142}],69:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],70:[function(e,t,n){"use strict";var r={};t.exports=r},{}],71:[function(e,t,n){"use strict";var r=e(145),o=r({prop:null,context:null,childContext:null});t.exports=o},{145:145}],72:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,a,i){if(o=o||E,i=i||r,null==n[r]){var u=C[a];return t?new Error("Required "+u+" `"+i+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,a,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if(u!==e){var s=C[o],l=m(i);return new Error("Invalid "+s+" `"+a+"` of type "+("`"+l+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function a(){return r(b.thatReturns(null))}function i(e){function t(t,n,r,o,a){var i=t[n];if(!Array.isArray(i)){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<i.length;l++){var c=e(i,l,r,o,a+"["+l+"]");if(c instanceof Error)return c}return null}return r(t)}function u(){function e(e,t,n,r,o){if(!y.isValidElement(e[t])){var a=C[r];return new Error("Invalid "+a+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=C[o],u=e.name||E,s=g(t[n]);return new Error("Invalid "+i+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(i===e[u])return null;var s=C[o],l=JSON.stringify(e);return new Error("Invalid "+s+" `"+a+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+l+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function c(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if("object"!==u){var s=C[o];return new Error("Invalid "+s+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an object."))}for(var l in i)if(i.hasOwnProperty(l)){var c=e(i,l,r,o,a+"."+l);if(c instanceof Error)return c}return null}return r(t)}function p(e){function t(t,n,r,o,a){for(var i=0;i<e.length;i++){var u=e[i];if(null==u(t,n,r,o,a))return null}var s=C[o];return new Error("Invalid "+s+" `"+a+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function d(){function e(e,t,n,r,o){if(!h(e[t])){var a=C[r];return new Error("Invalid "+a+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if("object"!==u){var s=C[o];return new Error("Invalid "+s+" `"+a+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var c=e[l];if(c){var p=c(i,l,r,o,a+"."+l);if(p)return p}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||y.isValidElement(e))return!0;var t=_(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!h(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){return e.constructor&&e.constructor.name?e.constructor.name:"<<anonymous>>"}var y=e(50),C=e(70),b=e(134),_=e(112),E="<<anonymous>>",x={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:a(),arrayOf:i,element:u(),instanceOf:s,node:d(),objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=x},{112:112,134:134,50:50,70:70}],73:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.useCreateElement=!e&&u.useCreateElement}var o=e(6),a=e(24),i=e(26),u=e(39),s=e(58),l=e(98),c=e(23),p={initialize:s.getSelectionInformation,close:s.restoreSelection},d={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h=[p,d,f],v={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null}};c(r.prototype,l.Mixin,v),a.addPoolingTo(r),t.exports=r},{23:23,24:24,26:26,39:39,58:58,6:6,98:98}],74:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(75),a={mountComponent:function(e,t,n,o){var a=e.mountComponent(t,n,o);return e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(r,e),a},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,a){var i=e._currentElement;if(t!==i||a!==e._context){var u=o.shouldUpdateRefs(i,t);u&&o.detachRefs(e,i),e.receiveComponent(t,n,a),u&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}};t.exports=a},{75:75}],75:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):a.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):a.removeComponentAsRefFrom(t,e,n)}var a=e(68),i={};i.attachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&r(n,e,t._owner)}},i.shouldUpdateRefs=function(e,t){var n=null===e||e===!1,r=null===t||t===!1;return n||r||t._owner!==e._owner||t.ref!==e.ref},i.detachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&o(n,e,t._owner)}},t.exports=i},{68:68}],76:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],77:[function(e,t,n){"use strict";var r={isBatchingUpdates:!1,batchedUpdates:function(e){}};t.exports=r},{}],78:[function(e,t,n){"use strict";function r(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var n=u.createReactRootID();return t=c.getPooled(!1),t.perform(function(){var r=f(e,null),o=r.mountComponent(n,t,d);
	return s.addChecksumToMarkup(o)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}function o(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var n=u.createReactRootID();return t=c.getPooled(!0),t.perform(function(){var r=f(e,null);return r.mountComponent(n,t,d)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}var a=e(48),i=e(50),u=e(59),s=e(62),l=e(77),c=e(79),p=e(81),d=e(135),f=e(115),h=e(142);t.exports={renderToString:r,renderToStaticMarkup:o}},{115:115,135:135,142:142,48:48,50:50,59:59,62:62,77:77,79:79,81:81}],79:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=a.getPooled(null),this.useCreateElement=!1}var o=e(24),a=e(6),i=e(98),u=e(23),s=e(134),l={initialize:function(){this.reactMountReady.reset()},close:s},c=[l],p={getTransactionWrappers:function(){return c},getReactMountReady:function(){return this.reactMountReady},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null}};u(r.prototype,i.Mixin,p),o.addPoolingTo(r),t.exports=r},{134:134,23:23,24:24,6:6,98:98}],80:[function(e,t,n){"use strict";function r(e){u.enqueueUpdate(e)}function o(e,t){var n=i.get(e);return n?n:null}var a=(e(34),e(50)),i=e(60),u=e(81),s=e(23),l=e(142),c=(e(150),{isMounted:function(e){var t=i.get(e);return t?!!t._renderedComponent:!1},enqueueCallback:function(e,t){"function"!=typeof t?l(!1):void 0;var n=o(e);return n?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){"function"!=typeof t?l(!1):void 0,e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var a=n._pendingStateQueue||(n._pendingStateQueue=[]);a.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");n&&c.enqueueSetPropsInternal(n,t)},enqueueSetPropsInternal:function(e,t){var n=e._topLevelWrapper;n?void 0:l(!1);var o=n._pendingElement||n._currentElement,i=o.props,u=s({},i.props,t);n._pendingElement=a.cloneAndReplaceProps(o,a.cloneAndReplaceProps(i,u)),r(n)},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");n&&c.enqueueReplacePropsInternal(n,t)},enqueueReplacePropsInternal:function(e,t){var n=e._topLevelWrapper;n?void 0:l(!1);var o=n._pendingElement||n._currentElement,i=o.props;n._pendingElement=a.cloneAndReplaceProps(o,a.cloneAndReplaceProps(i,t)),r(n)},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=c},{142:142,150:150,23:23,34:34,50:50,60:60,81:81}],81:[function(e,t,n){"use strict";function r(){M.ReactReconcileTransaction&&b?void 0:m(!1)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=M.ReactReconcileTransaction.getPooled(!1)}function a(e,t,n,o,a,i){r(),b.batchedUpdates(e,t,n,o,a,i)}function i(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;t!==g.length?m(!1):void 0,g.sort(i);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r.getPublicInstance())}}function s(e){return r(),b.isBatchingUpdates?void g.push(e):void b.batchedUpdates(s,e)}function l(e,t){b.isBatchingUpdates?void 0:m(!1),y.enqueue(e,t),C=!0}var c=e(6),p=e(24),d=e(69),f=e(74),h=e(98),v=e(23),m=e(142),g=[],y=c.getPooled(),C=!1,b=null,_={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},E={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[_,E];v(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,M.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var N={injectReconcileTransaction:function(e){e?void 0:m(!1),M.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e?void 0:m(!1),"function"!=typeof e.batchedUpdates?m(!1):void 0,"boolean"!=typeof e.isBatchingUpdates?m(!1):void 0,b=e}},M={ReactReconcileTransaction:null,batchedUpdates:a,enqueueUpdate:s,flushBatchedUpdates:D,injection:N,asap:l};t.exports=M},{142:142,23:23,24:24,6:6,69:69,74:74,98:98}],82:[function(e,t,n){"use strict";t.exports="0.14.0-rc1"},{}],83:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,a={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,xlinkActuate:o,xlinkArcrole:o,xlinkHref:o,xlinkRole:o,xlinkShow:o,xlinkTitle:o,xlinkType:o,xmlBase:o,xmlLang:o,xmlSpace:o,y1:o,y2:o,y:o},DOMAttributeNamespaces:{xlinkActuate:a.xlink,xlinkArcrole:a.xlink,xlinkHref:a.xlink,xlinkRole:a.xlink,xlinkShow:a.xlink,xlinkTitle:a.xlink,xlinkType:a.xlink,xmlBase:a.xml,xmlLang:a.xml,xmlSpace:a.xml},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlLang:"xml:lang",xmlSpace:"xml:space"}};t.exports=i},{10:10}],84:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&s.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e,t){if(b||null==g||g!==c())return null;var n=r(g);if(!C||!f(C,n)){C=n;var o=l.getPooled(m.select,y,e,t);return o.type="select",o.target=g,i.accumulateTwoPhaseDispatches(o),o}return null}var a=e(15),i=e(19),u=e(128),s=e(58),l=e(90),c=e(137),p=e(117),d=e(146),f=e(148),h=a.topLevelTypes,v=u.canUseDOM&&"documentMode"in document&&document.documentMode<=11,m={select:{phasedRegistrationNames:{bubbled:d({onSelect:null}),captured:d({onSelectCapture:null})},dependencies:[h.topBlur,h.topContextMenu,h.topFocus,h.topKeyDown,h.topMouseDown,h.topMouseUp,h.topSelectionChange]}},g=null,y=null,C=null,b=!1,_=!1,E=d({onSelect:null}),x={eventTypes:m,extractEvents:function(e,t,n,r,a){if(!_)return null;switch(e){case h.topFocus:(p(t)||"true"===t.contentEditable)&&(g=t,y=n,C=null);break;case h.topBlur:g=null,y=null,C=null;break;case h.topMouseDown:b=!0;break;case h.topContextMenu:case h.topMouseUp:return b=!1,o(r,a);case h.topSelectionChange:if(v)break;case h.topKeyDown:case h.topKeyUp:return o(r,a)}return null},didPutListener:function(e,t,n){t===E&&(_=!0)}};t.exports=x},{117:117,128:128,137:137,146:146,148:148,15:15,19:19,58:58,90:90}],85:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],86:[function(e,t,n){"use strict";var r=e(15),o=e(127),a=e(19),i=e(63),u=e(87),s=e(90),l=e(91),c=e(93),p=e(94),d=e(89),f=e(95),h=e(96),v=e(97),m=e(134),g=e(108),y=e(142),C=e(146),b=r.topLevelTypes,_={abort:{phasedRegistrationNames:{bubbled:C({onAbort:!0}),captured:C({onAbortCapture:!0})}},blur:{phasedRegistrationNames:{bubbled:C({onBlur:!0}),captured:C({onBlurCapture:!0})}},canPlay:{phasedRegistrationNames:{bubbled:C({onCanPlay:!0}),captured:C({onCanPlayCapture:!0})}},canPlayThrough:{phasedRegistrationNames:{bubbled:C({onCanPlayThrough:!0}),captured:C({onCanPlayThroughCapture:!0})}},click:{phasedRegistrationNames:{bubbled:C({onClick:!0}),captured:C({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:C({onContextMenu:!0}),captured:C({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:C({onCopy:!0}),captured:C({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:C({onCut:!0}),captured:C({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:C({onDoubleClick:!0}),captured:C({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:C({onDrag:!0}),captured:C({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:C({onDragEnd:!0}),captured:C({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:C({onDragEnter:!0}),captured:C({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:C({onDragExit:!0}),captured:C({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:C({onDragLeave:!0}),captured:C({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:C({onDragOver:!0}),captured:C({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:C({onDragStart:!0}),captured:C({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:C({onDrop:!0}),captured:C({onDropCapture:!0})}},durationChange:{phasedRegistrationNames:{bubbled:C({onDurationChange:!0}),captured:C({onDurationChangeCapture:!0})}},emptied:{phasedRegistrationNames:{bubbled:C({onEmptied:!0}),captured:C({onEmptiedCapture:!0})}},encrypted:{phasedRegistrationNames:{bubbled:C({onEncrypted:!0}),captured:C({onEncryptedCapture:!0})}},ended:{phasedRegistrationNames:{bubbled:C({onEnded:!0}),captured:C({onEndedCapture:!0})}},error:{phasedRegistrationNames:{bubbled:C({onError:!0}),captured:C({onErrorCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:C({onFocus:!0}),captured:C({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:C({onInput:!0}),captured:C({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:C({onKeyDown:!0}),captured:C({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:C({onKeyPress:!0}),captured:C({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:C({onKeyUp:!0}),captured:C({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:C({onLoad:!0}),captured:C({onLoadCapture:!0})}},loadedData:{phasedRegistrationNames:{bubbled:C({onLoadedData:!0}),captured:C({onLoadedDataCapture:!0})}},loadedMetadata:{phasedRegistrationNames:{bubbled:C({onLoadedMetadata:!0}),captured:C({onLoadedMetadataCapture:!0})}},loadStart:{phasedRegistrationNames:{bubbled:C({onLoadStart:!0}),captured:C({onLoadStartCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:C({onMouseDown:!0}),captured:C({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:C({onMouseMove:!0}),captured:C({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:C({onMouseOut:!0}),captured:C({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:C({onMouseOver:!0}),captured:C({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:C({onMouseUp:!0}),captured:C({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:C({onPaste:!0}),captured:C({onPasteCapture:!0})}},pause:{phasedRegistrationNames:{bubbled:C({onPause:!0}),captured:C({onPauseCapture:!0})}},play:{phasedRegistrationNames:{bubbled:C({onPlay:!0}),captured:C({onPlayCapture:!0})}},playing:{phasedRegistrationNames:{bubbled:C({onPlaying:!0}),captured:C({onPlayingCapture:!0})}},progress:{phasedRegistrationNames:{bubbled:C({onProgress:!0}),captured:C({onProgressCapture:!0})}},rateChange:{phasedRegistrationNames:{bubbled:C({onRateChange:!0}),captured:C({onRateChangeCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:C({onReset:!0}),captured:C({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:C({onScroll:!0}),captured:C({onScrollCapture:!0})}},seeked:{phasedRegistrationNames:{bubbled:C({onSeeked:!0}),captured:C({onSeekedCapture:!0})}},seeking:{phasedRegistrationNames:{bubbled:C({onSeeking:!0}),captured:C({onSeekingCapture:!0})}},stalled:{phasedRegistrationNames:{bubbled:C({onStalled:!0}),captured:C({onStalledCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:C({onSubmit:!0}),captured:C({onSubmitCapture:!0})}},suspend:{phasedRegistrationNames:{bubbled:C({onSuspend:!0}),captured:C({onSuspendCapture:!0})}},timeUpdate:{phasedRegistrationNames:{bubbled:C({onTimeUpdate:!0}),captured:C({onTimeUpdateCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:C({onTouchCancel:!0}),captured:C({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:C({onTouchEnd:!0}),captured:C({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:C({onTouchMove:!0}),captured:C({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:C({onTouchStart:!0}),captured:C({onTouchStartCapture:!0})}},volumeChange:{phasedRegistrationNames:{bubbled:C({onVolumeChange:!0}),captured:C({onVolumeChangeCapture:!0})}},waiting:{phasedRegistrationNames:{bubbled:C({onWaiting:!0}),captured:C({onWaitingCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:C({onWheel:!0}),captured:C({onWheelCapture:!0})}}},E={topAbort:_.abort,topBlur:_.blur,topCanPlay:_.canPlay,topCanPlayThrough:_.canPlayThrough,topClick:_.click,topContextMenu:_.contextMenu,topCopy:_.copy,topCut:_.cut,topDoubleClick:_.doubleClick,topDrag:_.drag,topDragEnd:_.dragEnd,topDragEnter:_.dragEnter,topDragExit:_.dragExit,topDragLeave:_.dragLeave,topDragOver:_.dragOver,topDragStart:_.dragStart,topDrop:_.drop,topDurationChange:_.durationChange,topEmptied:_.emptied,topEncrypted:_.encrypted,topEnded:_.ended,topError:_.error,topFocus:_.focus,topInput:_.input,topKeyDown:_.keyDown,topKeyPress:_.keyPress,topKeyUp:_.keyUp,topLoad:_.load,topLoadedData:_.loadedData,topLoadedMetadata:_.loadedMetadata,topLoadStart:_.loadStart,topMouseDown:_.mouseDown,topMouseMove:_.mouseMove,topMouseOut:_.mouseOut,topMouseOver:_.mouseOver,topMouseUp:_.mouseUp,topPaste:_.paste,topPause:_.pause,topPlay:_.play,topPlaying:_.playing,topProgress:_.progress,topRateChange:_.rateChange,topReset:_.reset,topScroll:_.scroll,topSeeked:_.seeked,topSeeking:_.seeking,topStalled:_.stalled,topSubmit:_.submit,topSuspend:_.suspend,topTimeUpdate:_.timeUpdate,topTouchCancel:_.touchCancel,topTouchEnd:_.touchEnd,topTouchMove:_.touchMove,topTouchStart:_.touchStart,topVolumeChange:_.volumeChange,topWaiting:_.waiting,topWheel:_.wheel};for(var x in E)E[x].dependencies=[x];var D=C({onClick:null}),N={},M={eventTypes:_,extractEvents:function(e,t,n,r,o){var i=E[e];if(!i)return null;var m;switch(e){case b.topAbort:case b.topCanPlay:case b.topCanPlayThrough:case b.topDurationChange:case b.topEmptied:case b.topEncrypted:case b.topEnded:case b.topError:case b.topInput:case b.topLoad:case b.topLoadedData:case b.topLoadedMetadata:case b.topLoadStart:case b.topPause:case b.topPlay:case b.topPlaying:case b.topProgress:case b.topRateChange:case b.topReset:case b.topSeeked:case b.topSeeking:case b.topStalled:case b.topSubmit:case b.topSuspend:case b.topTimeUpdate:case b.topVolumeChange:case b.topWaiting:m=s;break;case b.topKeyPress:if(0===g(r))return null;case b.topKeyDown:case b.topKeyUp:m=c;break;case b.topBlur:case b.topFocus:m=l;break;case b.topClick:if(2===r.button)return null;case b.topContextMenu:case b.topDoubleClick:case b.topMouseDown:case b.topMouseMove:case b.topMouseOut:case b.topMouseOver:case b.topMouseUp:m=p;break;case b.topDrag:case b.topDragEnd:case b.topDragEnter:case b.topDragExit:case b.topDragLeave:case b.topDragOver:case b.topDragStart:case b.topDrop:m=d;break;case b.topTouchCancel:case b.topTouchEnd:case b.topTouchMove:case b.topTouchStart:m=f;break;case b.topScroll:m=h;break;case b.topWheel:m=v;break;case b.topCopy:case b.topCut:case b.topPaste:m=u}m?void 0:y(!1);var C=m.getPooled(i,n,r,o);return a.accumulateTwoPhaseDispatches(C),C},didPutListener:function(e,t,n){if(t===D){var r=i.getNode(e);N[e]||(N[e]=o.listen(r,"click",m))}},willDeleteListener:function(e,t){t===D&&(N[e].remove(),delete N[e])}};t.exports=M},{108:108,127:127,134:134,142:142,146:146,15:15,19:19,63:63,87:87,89:89,90:90,91:91,93:93,94:94,95:95,96:96,97:97}],87:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,a),t.exports=r},{90:90}],88:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={data:null};o.augmentClass(r,a),t.exports=r},{90:90}],89:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(94),a={dataTransfer:null};o.augmentClass(r,a),t.exports=r},{94:94}],90:[function(e,t,n){"use strict";function r(e,t,n,r){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n,this.target=r,this.currentTarget=r;var o=this.constructor.Interface;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];u?this[a]=u(n):this[a]=n[a]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;s?this.isDefaultPrevented=i.thatReturnsTrue:this.isDefaultPrevented=i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var o=e(24),a=e(23),i=e(134),u=(e(150),{path:null,type:null,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null});a(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue)},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=u,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);a(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=a({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.fourArgumentPooler)},o.addPoolingTo(r,o.fourArgumentPooler),t.exports=r},{134:134,150:150,23:23,24:24}],91:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a={relatedTarget:null};o.augmentClass(r,a),t.exports=r},{96:96}],92:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={data:null};o.augmentClass(r,a),t.exports=r},{90:90}],93:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(108),i=e(109),u=e(110),s={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?a(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?a(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{108:108,109:109,110:110,96:96}],94:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(99),i=e(110),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+a.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+a.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{110:110,96:96,99:99}],95:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(110),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:a};o.augmentClass(r,i),t.exports=r},{110:110,96:96}],96:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a=e(111),i={view:function(e){if(e.view)return e.view;var t=a(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,i),t.exports=r},{111:111,90:90}],97:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(94),a={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,a),t.exports=r},{94:94}],98:[function(e,t,n){"use strict";var r=e(142),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,a,i,u,s){this.isInTransaction()?r(!1):void 0;var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,a,i,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=a.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===a.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){this.isInTransaction()?void 0:r(!1);for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,i=t[n],u=this.wrapperInitData[n];try{o=!0,u!==a.OBSERVED_ERROR&&i.close&&i.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},a={Mixin:o,OBSERVED_ERROR:{}};t.exports=a},{142:142}],99:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],100:[function(e,t,n){"use strict";function r(e,t){if(null==t?o(!1):void 0,null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(142);t.exports=r},{142:142}],101:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0,a=e.length,i=-4&a;i>r;){for(;r<Math.min(r+4096,i);r+=4)n+=(t+=e.charCodeAt(r))+(t+=e.charCodeAt(r+1))+(t+=e.charCodeAt(r+2))+(t+=e.charCodeAt(r+3));t%=o,n%=o}for(;a>r;r++)n+=t+=e.charCodeAt(r);return t%=o,n%=o,t|n<<16}var o=65521;t.exports=r},{}],102:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||a.hasOwnProperty(e)&&a[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),a=o.isUnitlessNumber;t.exports=r},{4:4}],103:[function(e,t,n){"use strict";function r(e,t,n,r,o){return o}e(23),e(150);t.exports=r},{150:150,23:23}],104:[function(e,t,n){"use strict";function r(e){return a[e]}function o(e){return(""+e).replace(i,r)}var a={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=o},{}],105:[function(e,t,n){"use strict";function r(e){return null==e?null:1===e.nodeType?e:o.has(e)?a.getNodeFromInstance(e):(null!=e.render&&"function"==typeof e.render?i(!1):void 0,void i(!1))}var o=(e(34),e(60)),a=e(63),i=e(142);e(150);t.exports=r},{142:142,150:150,34:34,60:60,63:63}],106:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=void 0===r[n];o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return a(e,r,t),t}var a=e(125);e(150);t.exports=o},{125:125,150:150}],107:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],108:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],109:[function(e,t,n){"use strict";function r(e){if(e.key){var t=a[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var o=e(108),a={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{108:108}],110:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=a[e];return r?!!n[r]:!1}function o(e){return r}var a={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],111:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],112:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[a]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,a="@@iterator";t.exports=r},{}],113:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function a(e,t){for(var n=r(e),a=0,i=0;n;){if(3===n.nodeType){if(i=a+n.textContent.length,t>=a&&i>=t)return{node:n,offset:t-a};a=i}n=r(o(n))}}t.exports=a},{}],114:[function(e,t,n){"use strict";function r(){return!a&&o.canUseDOM&&(a="textContent"in document.documentElement?"textContent":"innerText"),a}var o=e(128),a=null;t.exports=r},{128:128}],115:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e){var t;if(null===e||e===!1)t=new i(o);else if("object"==typeof e){var n=e;!n||"function"!=typeof n.type&&"string"!=typeof n.type?l(!1):void 0,t="string"==typeof n.type?u.createInternalComponent(n):r(n.type)?new n.type(n):new c}else"string"==typeof e||"number"==typeof e?t=u.createInstanceForText(e):l(!1);return t.construct(e),t._mountIndex=0,t._mountImage=null,t}var a=e(33),i=e(52),u=e(66),s=e(23),l=e(142),c=(e(150),function(){});s(c.prototype,a.Mixin,{_instantiateReactComponent:o}),t.exports=o},{142:142,150:150,23:23,33:33,52:52,66:66}],116:[function(e,t,n){"use strict";function r(e,t){if(!a.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r="function"==typeof i[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,a=e(128);a.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{128:128}],117:[function(e,t,n){"use strict";function r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&o[e.type]||"textarea"===t)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],118:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],119:[function(e,t,n){"use strict";function r(e){return o.isValidElement(e)?void 0:a(!1),e}var o=e(50),a=e(142);t.exports=r},{142:142,50:50}],120:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(104);t.exports=r},{104:104}],121:[function(e,t,n){"use strict";var r=e(63);t.exports=r.renderSubtreeIntoContainer},{63:63}],122:[function(e,t,n){"use strict";var r=e(128),o=/^[ \r\n\t\f]/,a=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(i=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&a.test(t)){e.innerHTML=String.fromCharCode(65279)+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{128:128}],123:[function(e,t,n){"use strict";var r=e(128),o=e(104),a=e(122),i=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(i=function(e,t){a(e,o(t))})),t.exports=i},{104:104,122:122,128:128}],124:[function(e,t,n){"use strict";function r(e,t){var n=null===e||e===!1,r=null===t||t===!1;if(n||r)return n===r;var o=typeof e,a=typeof t;return"string"===o||"number"===o?"string"===a||"number"===a:"object"===a&&e.type===t.type&&e.key===t.key}t.exports=r},{}],125:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function a(e){return(""+e).replace(m,r)}function i(e){return"$"+a(e)}function u(e,t,n,r){var a=typeof e;if(("undefined"===a||"boolean"===a)&&(e=null),null===e||"string"===a||"number"===a||l.isValidElement(e))return n(r,e,""===t?f+o(e,0):t),1;var s,c,v=0,m=""===t?f:t+h;if(Array.isArray(e))for(var g=0;g<e.length;g++)s=e[g],c=m+o(s,g),v+=u(s,c,n,r);else{var y=p(e);if(y){var C,b=y.call(e);if(y!==e.entries)for(var _=0;!(C=b.next()).done;)s=C.value,c=m+o(s,_++),v+=u(s,c,n,r);else for(;!(C=b.next()).done;){var E=C.value;E&&(s=E[1],c=m+i(E[0])+h+o(s,0),v+=u(s,c,n,r))}}else"object"===a&&d(!1)}return v}function s(e,t,n){return null==e?0:u(e,"",t,n)}var l=(e(34),e(50)),c=e(59),p=e(112),d=e(142),f=(e(150),c.SEPARATOR),h=":",v={"=":"=0",".":"=1",":":"=2"},m=/[=.:]/g;t.exports=s},{112:112,142:142,150:150,34:34,50:50,59:59}],126:[function(e,t,n){"use strict";var r=(e(23),e(134)),o=(e(150),r);t.exports=o},{134:134,150:150,23:23}],127:[function(e,t,n){"use strict";var r=e(134),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{
	remove:r}},registerDefault:function(){}};t.exports=o},{134:134}],128:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],129:[function(e,t,n){"use strict";function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],130:[function(e,t,n){"use strict";function r(e){return o(e.replace(a,"ms-"))}var o=e(129),a=/^-ms-/;t.exports=r},{129:129}],131:[function(e,t,n){"use strict";function r(e,t){var n=!0;e:for(;n;){var r=e,a=t;if(n=!1,r&&a){if(r===a)return!0;if(o(r))return!1;if(o(a)){e=r,t=a.parentNode,n=!0;continue e}return r.contains?r.contains(a):r.compareDocumentPosition?!!(16&r.compareDocumentPosition(a)):!1}return!1}}var o=e(144);t.exports=r},{144:144}],132:[function(e,t,n){"use strict";function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():a(e):[e]}var a=e(149);t.exports=o},{149:149}],133:[function(e,t,n){"use strict";function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;l?void 0:s(!1);var o=r(e),a=o&&u(o);if(a){n.innerHTML=a[1]+e+a[2];for(var c=a[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(t?void 0:s(!1),i(p).forEach(t));for(var d=i(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var a=e(128),i=e(132),u=e(138),s=e(142),l=a.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{128:128,132:132,138:138,142:142}],134:[function(e,t,n){"use strict";function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],135:[function(e,t,n){"use strict";var r={};t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],137:[function(e,t,n){"use strict";function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],138:[function(e,t,n){"use strict";function r(e){return i?void 0:a(!1),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?i.innerHTML="<link />":i.innerHTML="<"+e+"></"+e+">",u[e]=!i.firstChild),u[e]?d[e]:null}var o=e(128),a=e(142),i=o.canUseDOM?document.createElement("div"):null,u={},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c},f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(e){d[e]=p,u[e]=!0}),t.exports=r},{128:128,142:142}],139:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){return o(e).replace(a,"-ms-")}var o=e(140),a=/^ms-/;t.exports=r},{140:140}],142:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,a,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],143:[function(e,t,n){"use strict";function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],144:[function(e,t,n){"use strict";function r(e){return o(e)&&3==e.nodeType}var o=e(143);t.exports=r},{143:143}],145:[function(e,t,n){"use strict";var r=e(142),o=function(e){var t,n={};e instanceof Object&&!Array.isArray(e)?void 0:r(!1);for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{142:142}],146:[function(e,t,n){"use strict";var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var a in e)o.call(e,a)&&(r[a]=t.call(n,e[a],a,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],148:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=o.bind(t),i=0;i<n.length;i++)if(!a(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],149:[function(e,t,n){"use strict";function r(e){var t=e.length;if(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e?o(!1):void 0,"number"!=typeof t?o(!1):void 0,0===t||t-1 in e?void 0:o(!1),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),a=0;t>a;a++)r[a]=e[a];return r}var o=e(142);t.exports=r},{142:142}],150:[function(e,t,n){"use strict";var r=e(134),o=r;t.exports=o},{134:134}]},{},[1])(1)});

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
	(function(a){function b(a){return a&&a.Object===Object?a:null}function c(a){for(var b=[],c=0,d=a.length;d>c;c++)b.push(a[c]);return b}function d(a){return function(){try{return a.apply(this,arguments)}catch(b){return Za.e=b,Za}}}function e(a){throw a}function f(a,b){if(_a&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(db)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var e=c.join("\n"+db+"\n");a.stack=g(e)}}function g(a){for(var b=a.split("\n"),c=[],d=0,e=b.length;e>d;d++){var f=b[d];h(f)||i(f)||!f||c.push(f)}return c.join("\n")}function h(a){var b=k(a);if(!b)return!1;var c=b[0],d=b[1];return c===bb&&d>=cb&&rg>=d}function i(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function j(){if(_a)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=k(c);if(!d)return;return bb=d[0],d[1]}}function k(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function l(a){var b=[];if(!aa(a))return b;Lb.nonEnumArgs&&a.length&&Mb(a)&&(a=Ob.call(a));var c=Lb.enumPrototypes&&"function"==typeof a,d=Lb.enumErrorProps&&(a===Fb||a instanceof Error);for(var e in a)c&&"prototype"==e||d&&("message"==e||"name"==e)||b.push(e);if(Lb.nonEnumShadows&&a!==Gb){var f=a.constructor,g=-1,h=rb;if(a===(f&&f.prototype))var i=a===Hb?Bb:a===Fb?wb:Cb.call(a),j=Kb[i];for(;++g<h;)e=qb[g],j&&j[e]||!Db.call(a,e)||b.push(e)}return b}function m(a,b,c){for(var d=-1,e=c(a),f=e.length;++d<f;){var g=e[d];if(b(a[g],g,a)===!1)break}return a}function n(a,b){return m(a,b,l)}function o(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function p(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;var e=typeof a,f=typeof b;if(a===a&&(null==a||null==b||"function"!=e&&"object"!=e&&"function"!=f&&"object"!=f))return!1;var g=Cb.call(a),h=Cb.call(b);if(g==sb&&(g=zb),h==sb&&(h=zb),g!=h)return!1;switch(g){case ub:case vb:return+a==+b;case yb:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case Ab:case Bb:return a==String(b)}var i=g==tb;if(!i){if(g!=zb||!Lb.nodeClass&&(o(a)||o(b)))return!1;var j=!Lb.argsObject&&Mb(a)?Object:a.constructor,k=!Lb.argsObject&&Mb(b)?Object:b.constructor;if(!(j==k||Db.call(a,"constructor")&&Db.call(b,"constructor")||Ya(j)&&j instanceof j&&Ya(k)&&k instanceof k||!("constructor"in a&&"constructor"in b)))return!1}c||(c=[]),d||(d=[]);for(var l=c.length;l--;)if(c[l]==a)return d[l]==b;var m=0,q=!0;if(c.push(a),d.push(b),i){if(l=a.length,m=b.length,q=m==l)for(;m--;){var r=b[m];if(!(q=p(a[m],r,c,d)))break}}else n(b,function(b,e,f){return Db.call(f,e)?(m++,q=Db.call(a,e)&&p(a[e],b,c,d)):void 0}),q&&n(a,function(a,b,c){return Db.call(c,b)?q=--m>-1:void 0});return c.pop(),d.pop(),q}function r(a,b){for(var c=new Array(a),d=0;a>d;d++)c[d]=b();return c}function s(a,b){this.id=a,this.value=b}function t(a,b){this.scheduler=a,this.disposable=b,this.isDisposed=!1}function u(a,b){b.isDisposed||(b.isDisposed=!0,b.disposable.dispose())}function v(a){this._s=a,this.isDisposed=!1}function w(a){this._s=a}function x(a){this._s=a,this._l=a.length,this._i=0}function y(a){this._a=a}function z(a){this._a=a,this._l=D(a),this._i=0}function A(a){return"number"==typeof a&&Pa.isFinite(a)}function B(b){var c,d=b[kb];if(!d&&"string"==typeof b)return c=new w(b),c[kb]();if(!d&&b.length!==a)return c=new y(b),c[kb]();if(!d)throw new TypeError("Object is not iterable");return b[kb]()}function C(a){var b=+a;return 0===b?b:isNaN(b)?b:0>b?-1:1}function D(a){var b=+a.length;return isNaN(b)?0:0!==b&&A(b)?(b=C(b)*Math.floor(Math.abs(b)),0>=b?0:b>fd?fd:b):b}function E(a,b){this.observer=a,this.parent=b}function F(a,b){var c=a.length;return function(d,e){c>d?(b.onNext(a[d]),e(d+1)):b.onCompleted()}}function G(a,b){return ic(a)||(a=pc),new hd(b,a)}function H(a,b){this.observer=a,this.parent=b}function I(a,b){this.observer=a,this.parent=b}function J(a,b){return a.amb(b)}function K(){return!1}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function K(){return!1}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function K(){return!1}function M(){return[]}function K(){return!1}function M(){return[]}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function N(a){return function(b){return a.subscribe(b)}}function O(a){return a.toArray()}function P(a){return a.length>0}function Q(a,b,c){var d=pb(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return Xa(e)&&(e=Yc(e)),(nb(e)||mb(e))&&(e=gd(e)),e}).concatAll()}function R(a,b,c){for(var d=0,e=a.length;e>d;d++)if(c(a[d],b))return d;return-1}function S(a){this.comparer=a,this.set=[]}function T(b,c){return function(d){for(var e=d,f=0;c>f;f++){var g=e[b[f]];if("undefined"==typeof g)return a;e=g}return e}}function U(a){if(0===a.length)throw new eb;return a[0]}function V(a,b,c,d){var e=pb(b,c,3);return new ig(function(b){return a.subscribe(new We(b,a,e,d))},a)}function W(a){return a?Lc.isObservable(a)?a:Xa(a)?Lc.fromPromise(a):_(a)||$(a)?df.call(this,a):Ya(a)?Z.call(this,a):nb(a)||mb(a)?X.call(this,a):aa(a)?Y.call(this,a):a:a}function X(a){return Lc.from(a).concatMap(function(a){return Lc.isObservable(a)||aa(a)?W.call(null,a):Qa.Observable.just(a)}).toArray()}function Y(b){function c(b,c){d[c]=a,f.push(b.map(function(a){d[c]=a}))}for(var d=new b.constructor,e=Object.keys(b),f=[],g=0,h=e.length;h>g;g++){var i=e[g],j=W.call(this,b[i]);j&&Lc.isObservable(j)?c(j,i):d[i]=b[i]}return Lc.forkJoin.apply(Lc,f).map(function(){return d})}function Z(a){var b=this;return new ig(function(c){a.call(b,function(){var a=arguments[0],b=arguments[1];if(a)return c.onError(a);if(arguments.length>2){for(var d=[],e=1,f=arguments.length;f>e;e++)d.push(arguments[e]);b=d}c.onNext(b),c.onCompleted()})})}function $(a){return Ya(a.next)&&Ya(a["throw"])}function _(a){var b=a.constructor;return b?"GeneratorFunction"===b.name||"GeneratorFunction"===b.displayName?!0:$(b.prototype):!1}function aa(a){return Object==a.constructor}function ba(a,b,c,d){var e=new ng;return d.push(ca(e,b,c)),a.apply(b,d),e.asObservable()}function ca(a,b,c){return function(){for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];if(Ya(c)){if(e=$a(c).apply(b,e),e===Za)return a.onError(e.e);a.onNext(e)}else e.length<=1?a.onNext(e[0]):a.onNext(e);a.onCompleted()}}function da(a,b,c,d){var e=new ng;return d.push(ea(e,b,c)),a.apply(b,d),e.asObservable()}function ea(a,b,c){return function(){var d=arguments[0];if(d)return a.onError(d);for(var e=arguments.length,f=[],g=1;e>g;g++)f[g-1]=arguments[g];if(Ya(c)){var f=$a(c).apply(b,f);if(f===Za)return a.onError(f.e);a.onNext(f)}else f.length<=1?a.onNext(f[0]):a.onNext(f);a.onCompleted()}}function fa(a){return Pa.StaticNodeList?a instanceof Pa.StaticNodeList||a instanceof Pa.NodeList:"[object NodeList]"===Object.prototype.toString.call(a)}function ga(a,b,c){this._e=a,this._n=b,this._fn=c,this._e.addEventListener(this._n,this._fn,!1),this.isDisposed=!1}function ha(a,b,c){var d=new Ub,e=Object.prototype.toString.call(a);if(fa(a)||"[object HTMLCollection]"===e)for(var f=0,g=a.length;g>f;f++)d.add(ha(a.item(f),b,c));else a&&d.add(new ga(a,b,c));return d}function ia(a,b,c){return new ig(function(d){function e(a,b){if(j[b]=a,g[b]=!0,h||(h=g.every(Sa))){if(f)return d.onError(f);var e=$a(c).apply(null,j);if(e===Za)return d.onError(e.e);d.onNext(e)}i&&j[1]&&d.onCompleted()}var f,g=[!1,!1],h=!1,i=!1,j=new Array(2);return new cc(a.subscribe(function(a){e(a,0)},function(a){j[1]?d.onError(a):f=a},function(){i=!0,j[1]&&d.onCompleted()}),b.subscribe(function(a){e(a,1)},function(a){d.onError(a)},function(){i=!0,e(!0,1)}))},a)}function O(a){return a.toArray()}function ja(a,b){return a.groupJoin(this,b,cd,function(a,b){return b})}function ka(a){var b=this;return new ig(function(c){var d=new mg,e=new Ub,f=new ec(e);return c.onNext(Rb(d,f)),e.add(b.subscribe(function(a){d.onNext(a)},function(a){d.onError(a),c.onError(a)},function(){d.onCompleted(),c.onCompleted()})),Xa(a)&&(a=Yc(a)),e.add(a.subscribe(function(a){d.onCompleted(),d=new mg,c.onNext(Rb(d,f))},function(a){d.onError(a),c.onError(a)},function(){d.onCompleted(),c.onCompleted()})),f},b)}function la(a){var b=this;return new ig(function(c){function d(){var b;try{b=a()}catch(f){return void c.onError(f)}Xa(b)&&(b=Yc(b));var i=new ac;e.setDisposable(i),i.setDisposable(b.take(1).subscribe(Ra,function(a){h.onError(a),c.onError(a)},function(){h.onCompleted(),h=new mg,c.onNext(Rb(h,g)),d()}))}var e=new bc,f=new Ub(e),g=new ec(f),h=new mg;return c.onNext(Rb(h,g)),f.add(b.subscribe(function(a){h.onNext(a)},function(a){h.onError(a),c.onError(a)},function(){h.onCompleted(),c.onCompleted()})),d(),g},b)}function ma(a,b){return new vf(a,b)}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function na(a){this.patterns=a}function oa(a,b){this.expression=a,this.selector=b}function pa(a){return function(b){a.onError(b)}}function qa(a,b){return function(){var c=$a(a.selector).apply(a,arguments);return c===Za?b.onError(c.e):void b.onNext(c)}}function ra(a,b,c){var d=a.get(b);if(!d){var e=new Df(b,c);return a.set(b,e),e}return d}function sa(a,b,c){this.joinObserverArray=a,this.onNext=b,this.onCompleted=c,this.joinObservers=new Cf;for(var d=0,e=this.joinObserverArray.length;e>d;d++){var f=this.joinObserverArray[d];this.joinObservers.set(f,f)}}function ta(a,b){return new Ef(a,b)}function ua(a,b,c){return new ig(function(d){var e=a,f=hc(b);return c.scheduleRecursiveFuture(0,e,function(a,b){if(f>0){var g=c.now();e=new Date(e.getTime()+f),e.getTime()<=g&&(e=new Date(g+f))}d.onNext(a),b(a+1,new Date(e))})})}function va(a,b,c){return a===b?new ig(function(a){return c.schedulePeriodic(0,b,function(b){return a.onNext(b),b+1})}):_c(function(){return ua(new Date(c.now()+a),b,c)})}function wa(a,b,c){return new ig(function(d){var e,f=!1,g=new bc,h=null,i=[],j=!1;return e=a.materialize().timestamp(c).subscribe(function(a){var e,k;"E"===a.value.kind?(i=[],i.push(a),h=a.value.error,k=!j):(i.push({value:a.value,timestamp:a.timestamp+b}),k=!f,f=!0),k&&(null!==h?d.onError(h):(e=new ac,g.setDisposable(e),e.setDisposable(c.scheduleRecursiveFuture(null,b,function(a,b){var e,g,k,l;if(null===h){j=!0;do k=null,i.length>0&&i[0].timestamp-c.now()<=0&&(k=i.shift().value),null!==k&&k.accept(d);while(null!==k);l=!1,g=0,i.length>0?(l=!0,g=Math.max(0,i[0].timestamp-c.now())):f=!1,e=h,j=!1,null!==e?d.onError(e):l&&b(null,g)}}))))}),new cc(e,g)},a)}function xa(a,b,c){return _c(function(){return wa(a,b-c.now(),c)})}function ya(a,b,c){var d,e;return Ya(b)?e=b:(d=b,e=c),new ig(function(b){function c(){i.setDisposable(a.subscribe(function(a){var c=$a(e)(a);if(c===Za)return b.onError(c.e);var d=new ac;g.add(d),d.setDisposable(c.subscribe(function(){b.onNext(a),g.remove(d),f()},function(a){b.onError(a)},function(){b.onNext(a),g.remove(d),f()}))},function(a){b.onError(a)},function(){h=!0,i.dispose(),f()}))}function f(){h&&0===g.length&&b.onCompleted()}var g=new Ub,h=!1,i=new bc;return d?i.setDisposable(d.subscribe(c,function(a){b.onError(a)},c)):c(),new cc(i,g)},this)}function za(a,b){return new ig(function(c){var d,e=!1,f=new bc,g=0,h=a.subscribe(function(a){var h=$a(b)(a);if(h===Za)return c.onError(h.e);Xa(h)&&(h=Yc(h)),e=!0,d=a,g++;var i=g,j=new ac;f.setDisposable(j),j.setDisposable(h.subscribe(function(){e&&g===i&&c.onNext(d),e=!1,j.dispose()},function(a){c.onError(a)},function(){e&&g===i&&c.onNext(d),e=!1,j.dispose()}))},function(a){f.dispose(),c.onError(a),e=!1,g++},function(){f.dispose(),e&&c.onNext(d),c.onCompleted(),e=!1,g++});return new cc(h,f)},a)}function O(a){return a.toArray()}function O(a){return a.toArray()}function Aa(a,b){return new ig(function(c){function d(){g&&(g=!1,c.onNext(e)),f&&c.onCompleted()}var e,f=!1,g=!1,h=new ac;return h.setDisposable(a.subscribe(function(a){g=!0,e=a},function(a){c.onError(a)},function(){f=!0,h.dispose()})),new cc(h,b.subscribe(d,function(a){c.onError(a)},d))},a)}function Ba(a,b,c,d){return Ya(b)&&(d=c,c=b,b=md()),Lc.isObservable(d)||(d=td(new Mf)),new ig(function(e){function f(a){function b(){return l=c===k}var c=k,f=new ac;i.setDisposable(f),f.setDisposable(a.subscribe(function(){b()&&h.setDisposable(d.subscribe(e)),f.dispose()},function(a){b()&&e.onError(a)},function(){b()&&h.setDisposable(d.subscribe(e))}))}function g(){var a=!l;return a&&k++,a}var h=new bc,i=new bc,j=new ac;h.setDisposable(j);var k=0,l=!1;return f(b),j.setDisposable(a.subscribe(function(a){if(g()){e.onNext(a);var b=$a(c)(a);if(b===Za)return e.onError(b.e);f(Xa(b)?Yc(b):b)}},function(a){g()&&e.onError(a)},function(){g()&&e.onCompleted()})),new cc(h,i)},a)}function Ca(a,b,c,d){return ic(c)&&(d=c,c=td(new Mf)),c instanceof Error&&(c=td(c)),ic(d)||(d=uc),Lc.isObservable(c)||(c=td(new Mf)),new ig(function(e){function f(){var a=g;k.setDisposable(d.scheduleFuture(null,b,function(){j=g===a,j&&(Xa(c)&&(c=Yc(c)),i.setDisposable(c.subscribe(e)))}))}var g=0,h=new ac,i=new bc,j=!1,k=new bc;return i.setDisposable(h),f(),h.setDisposable(a.subscribe(function(a){j||(g++,e.onNext(a),f())},function(a){j||(g++,e.onError(a))},function(){j||(g++,e.onCompleted())})),new cc(i,k)},a)}function Da(a){return{"@@transducer/init":function(){return a},"@@transducer/step":function(a,b){return a.onNext(b)},"@@transducer/result":function(a){return a.onCompleted()}}}function Ea(a){this.predicate=a}function Fa(a){this.predicate=a}function Ga(a,b){var c=this;this.scheduler=a,this.messages=b,this.subscriptions=[],this.observers=[];for(var d=0,e=this.messages.length;e>d;d++){var f=this.messages[d],g=f.value;!function(b){a.scheduleAbsolute(null,f.time,function(){for(var a=c.observers.slice(0),d=0,e=a.length;e>d;d++)b.accept(a[d]);return Yb})}(g)}}var Ha={"function":!0,object:!0},Ia=Ha[typeof exports]&&exports&&!exports.nodeType?exports:null,Ja=Ha[typeof module]&&module&&!module.nodeType?module:null,Ka=b(Ia&&Ja&&"object"==typeof global&&global),La=b(Ha[typeof self]&&self),Ma=b(Ha[typeof window]&&window),Na=Ja&&Ja.exports===Ia?Ia:null,Oa=b(Ha[typeof this]&&this),Pa=Ka||Ma!==(Oa&&Oa.window)&&Ma||La||Oa||Function("return this")(),Qa={internals:{},config:{Promise:Pa.Promise},helpers:{}},Ra=Qa.helpers.noop=function(){},Sa=Qa.helpers.identity=function(a){return a},Ta=Qa.helpers.defaultNow=Date.now,Ua=Qa.helpers.defaultComparer=function(a,b){return Nb(a,b)},Va=Qa.helpers.defaultSubComparer=function(a,b){return a>b?1:b>a?-1:0},Wa=(Qa.helpers.defaultKeySerializer=function(a){return a.toString()},Qa.helpers.defaultError=function(a){throw a}),Xa=Qa.helpers.isPromise=function(a){return!!a&&"function"!=typeof a.subscribe&&"function"==typeof a.then},Ya=Qa.helpers.isFunction=function(){var a=function(a){return"function"==typeof a||!1};return a(/x/)&&(a=function(a){return"function"==typeof a&&"[object Function]"==Cb.call(a)}),a}(),Za={e:{}},$a=Qa.internals.tryCatch=function(a){if(!Ya(a))throw new TypeError("fn must be a function");return d(a)};Qa.config.longStackSupport=!1;var _a=!1,ab=$a(function(){throw new Error})();_a=!!ab.e&&!!ab.e.stack;var bb,cb=j(),db="From previous event:",eb=Qa.EmptyError=function(){this.message="Sequence contains no elements.",Error.call(this)};eb.prototype=Object.create(Error.prototype),eb.prototype.name="EmptyError";var fb=Qa.ObjectDisposedError=function(){this.message="Object has been disposed",Error.call(this)};fb.prototype=Object.create(Error.prototype),fb.prototype.name="ObjectDisposedError";var gb=Qa.ArgumentOutOfRangeError=function(){this.message="Argument out of range",Error.call(this)};gb.prototype=Object.create(Error.prototype),gb.prototype.name="ArgumentOutOfRangeError";var hb=Qa.NotSupportedError=function(a){this.message=a||"This operation is not supported",Error.call(this)};hb.prototype=Object.create(Error.prototype),hb.prototype.name="NotSupportedError";var ib=Qa.NotImplementedError=function(a){this.message=a||"This operation is not implemented",Error.call(this)};ib.prototype=Object.create(Error.prototype),ib.prototype.name="NotImplementedError";var jb=Qa.helpers.notImplemented=function(){throw new ib},kb=(Qa.helpers.notSupported=function(){throw new hb},"function"==typeof Symbol&&Symbol.iterator||"_es6shim_iterator_");Pa.Set&&"function"==typeof(new Pa.Set)["@@iterator"]&&(kb="@@iterator");var lb=Qa.doneEnumerator={done:!0,value:a},mb=Qa.helpers.isIterable=function(b){return b&&b[kb]!==a},nb=Qa.helpers.isArrayLike=function(b){return b&&b.length!==a};Qa.helpers.iterator=kb;var ob,pb=Qa.internals.bindCallback=function(a,b,c){if("undefined"==typeof b)return a;switch(c){case 0:return function(){return a.call(b)};case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},qb=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],rb=qb.length,sb="[object Arguments]",tb="[object Array]",ub="[object Boolean]",vb="[object Date]",wb="[object Error]",xb="[object Function]",yb="[object Number]",zb="[object Object]",Ab="[object RegExp]",Bb="[object String]",Cb=Object.prototype.toString,Db=Object.prototype.hasOwnProperty,Eb=Cb.call(arguments)==sb,Fb=Error.prototype,Gb=Object.prototype,Hb=String.prototype,Ib=Gb.propertyIsEnumerable;try{ob=!(Cb.call(document)==zb&&!({toString:0}+""))}catch(Jb){ob=!0}var Kb={};Kb[tb]=Kb[vb]=Kb[yb]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Kb[ub]=Kb[Bb]={constructor:!0,toString:!0,valueOf:!0},Kb[wb]=Kb[xb]=Kb[Ab]={constructor:!0,toString:!0},Kb[zb]={constructor:!0};var Lb={};!function(){var a=function(){this.x=1},b=[];a.prototype={valueOf:1,y:1};for(var c in new a)b.push(c);for(c in arguments);Lb.enumErrorProps=Ib.call(Fb,"message")||Ib.call(Fb,"name"),Lb.enumPrototypes=Ib.call(a,"prototype"),Lb.nonEnumArgs=0!=c,Lb.nonEnumShadows=!/valueOf/.test(b)}(1);var aa=Qa.internals.isObject=function(a){var b=typeof a;return a&&("function"==b||"object"==b)||!1},Mb=function(a){return a&&"object"==typeof a?Cb.call(a)==sb:!1};Eb||(Mb=function(a){return a&&"object"==typeof a?Db.call(a,"callee"):!1});var Nb=Qa.internals.isEqual=function(a,b){return p(a,b,[],[])},Ob=({}.hasOwnProperty,Array.prototype.slice),Pb=Qa.internals.inherits=function(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c},Qb=Qa.internals.addProperties=function(a){for(var b=[],c=1,d=arguments.length;d>c;c++)b.push(arguments[c]);for(var e=0,f=b.length;f>e;e++){var g=b[e];for(var h in g)a[h]=g[h]}},Rb=Qa.internals.addRef=function(a,b){return new ig(function(c){return new cc(b.getDisposable(),a.subscribe(c))})};s.prototype.compareTo=function(a){var b=this.value.compareTo(a.value);return 0===b&&(b=this.id-a.id),b};var Sb=Qa.internals.PriorityQueue=function(a){this.items=new Array(a),this.length=0},Tb=Sb.prototype;Tb.isHigherPriority=function(a,b){return this.items[a].compareTo(this.items[b])<0},Tb.percolate=function(a){if(!(a>=this.length||0>a)){var b=a-1>>1;if(!(0>b||b===a)&&this.isHigherPriority(a,b)){var c=this.items[a];this.items[a]=this.items[b],this.items[b]=c,this.percolate(b)}}},Tb.heapify=function(a){if(+a||(a=0),!(a>=this.length||0>a)){var b=2*a+1,c=2*a+2,d=a;if(b<this.length&&this.isHigherPriority(b,d)&&(d=b),c<this.length&&this.isHigherPriority(c,d)&&(d=c),d!==a){var e=this.items[a];this.items[a]=this.items[d],this.items[d]=e,this.heapify(d)}}},Tb.peek=function(){return this.items[0].value},Tb.removeAt=function(b){this.items[b]=this.items[--this.length],this.items[this.length]=a,this.heapify()},Tb.dequeue=function(){var a=this.peek();return this.removeAt(0),a},Tb.enqueue=function(a){var b=this.length++;this.items[b]=new s(Sb.count++,a),this.percolate(b)},Tb.remove=function(a){for(var b=0;b<this.length;b++)if(this.items[b].value===a)return this.removeAt(b),!0;return!1},Sb.count=0;var Ub=Qa.CompositeDisposable=function(){var a,b,c=[];if(Array.isArray(arguments[0]))c=arguments[0],b=c.length;else for(b=arguments.length,c=new Array(b),a=0;b>a;a++)c[a]=arguments[a];this.disposables=c,this.isDisposed=!1,this.length=c.length},Vb=Ub.prototype;Vb.add=function(a){this.isDisposed?a.dispose():(this.disposables.push(a),this.length++)},Vb.remove=function(a){var b=!1;if(!this.isDisposed){var c=this.disposables.indexOf(a);-1!==c&&(b=!0,this.disposables.splice(c,1),this.length--,a.dispose())}return b},Vb.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=this.disposables.length,b=new Array(a),c=0;a>c;c++)b[c]=this.disposables[c];for(this.disposables=[],this.length=0,c=0;a>c;c++)b[c].dispose()}};var Wb=Qa.Disposable=function(a){this.isDisposed=!1,this.action=a||Ra};Wb.prototype.dispose=function(){this.isDisposed||(this.action(),this.isDisposed=!0)};var Xb=Wb.create=function(a){return new Wb(a)},Yb=Wb.empty={dispose:Ra},Zb=Wb.isDisposable=function(a){return a&&Ya(a.dispose)},$b=Wb.checkDisposed=function(a){if(a.isDisposed)throw new fb},_b=Wb._fixup=function(a){return Zb(a)?a:Yb},ac=Qa.SingleAssignmentDisposable=function(){this.isDisposed=!1,this.current=null};ac.prototype.getDisposable=function(){return this.current},ac.prototype.setDisposable=function(a){if(this.current)throw new Error("Disposable has already been assigned");var b=this.isDisposed;!b&&(this.current=a),b&&a&&a.dispose()},ac.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null,a&&a.dispose()}};var bc=Qa.SerialDisposable=function(){this.isDisposed=!1,this.current=null};bc.prototype.getDisposable=function(){return this.current},bc.prototype.setDisposable=function(a){var b=this.isDisposed;if(!b){var c=this.current;this.current=a}c&&c.dispose(),b&&a&&a.dispose()},bc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null}a&&a.dispose()};var cc=Qa.BinaryDisposable=function(a,b){this._first=a,this._second=b,this.isDisposed=!1};cc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this._first;this._first=null,a&&a.dispose();var b=this._second;this._second=null,b&&b.dispose()}};var dc=Qa.NAryDisposable=function(a){this._disposables=a,this.isDisposed=!1};dc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=0,b=this._disposables.length;b>a;a++)this._disposables[a].dispose();this._disposables.length=0}};var ec=Qa.RefCountDisposable=function(){function a(a){this.disposable=a,this.disposable.count++,this.isInnerDisposed=!1}function b(a){this.underlyingDisposable=a,this.isDisposed=!1,this.isPrimaryDisposed=!1,this.count=0}return a.prototype.dispose=function(){this.disposable.isDisposed||this.isInnerDisposed||(this.isInnerDisposed=!0,this.disposable.count--,0===this.disposable.count&&this.disposable.isPrimaryDisposed&&(this.disposable.isDisposed=!0,this.disposable.underlyingDisposable.dispose()))},b.prototype.dispose=function(){this.isDisposed||this.isPrimaryDisposed||(this.isPrimaryDisposed=!0,0===this.count&&(this.isDisposed=!0,this.underlyingDisposable.dispose()))},b.prototype.getDisposable=function(){return this.isDisposed?Yb:new a(this)},b}();t.prototype.dispose=function(){this.scheduler.schedule(this,u)};var fc=Qa.internals.ScheduledItem=function(a,b,c,d,e){this.scheduler=a,this.state=b,this.action=c,this.dueTime=d,this.comparer=e||Va,this.disposable=new ac};fc.prototype.invoke=function(){this.disposable.setDisposable(this.invokeCore())},fc.prototype.compareTo=function(a){return this.comparer(this.dueTime,a.dueTime)},fc.prototype.isCancelled=function(){return this.disposable.isDisposed},fc.prototype.invokeCore=function(){return _b(this.action(this.scheduler,this.state))};var gc=Qa.Scheduler=function(){function a(){}a.isScheduler=function(b){return b instanceof a};var b=a.prototype;return b.schedule=function(a,b){throw new ib},b.scheduleFuture=function(b,c,d){var e=c;return e instanceof Date&&(e-=this.now()),e=a.normalize(e),0===e?this.schedule(b,d):this._scheduleFuture(b,e,d)},b._scheduleFuture=function(a,b,c){throw new ib},a.now=Ta,a.prototype.now=Ta,a.normalize=function(a){return 0>a&&(a=0),a},a}(),hc=gc.normalize,ic=gc.isScheduler;!function(a){function b(a,b){function c(b){function d(a,b){return g?f.remove(i):h=!0,e(b,c),Yb}var g=!1,h=!1,i=a.schedule(b,d);h||(f.add(i),g=!0)}var d=b[0],e=b[1],f=new Ub;return e(d,c),f}function c(a,b){function c(b,d){function g(a,b){return h?f.remove(j):i=!0,e(b,c),Yb}var h=!1,i=!1,j=a.scheduleFuture(b,d,g);i||(f.add(j),h=!0)}var d=b[0],e=b[1],f=new Ub;return e(d,c),f}a.scheduleRecursive=function(a,c){return this.schedule([a,c],b)},a.scheduleRecursiveFuture=function(a,b,d){return this.scheduleFuture([a,d],b,c)}}(gc.prototype),function(a){gc.prototype.schedulePeriodic=function(a,b,c){if("undefined"==typeof Pa.setInterval)throw new hb;b=hc(b);var d=a,e=Pa.setInterval(function(){d=c(d)},b);return Xb(function(){Pa.clearInterval(e)})}}(gc.prototype),function(a){a.catchError=a["catch"]=function(a){return new vc(this,a)}}(gc.prototype);var jc,kc,lc=Qa.internals.SchedulePeriodicRecursive=function(){function a(a){return function(b,c){c(0,a._period);var d=$a(a._action)(a._state);d===Za&&(a._cancel.dispose(),e(d.e)),a._state=d}}function b(a,b,c,d){this._scheduler=a,this._state=b,this._period=c,this._action=d}return b.prototype.start=function(){var b=new ac;return this._cancel=b,b.setDisposable(this._scheduler.scheduleRecursiveFuture(0,this._period,a(this))),b},b}(),mc=function(a){function b(){a.call(this)}return Pb(b,a),b.prototype.schedule=function(a,b){return _b(b(this,a))},b}(gc),nc=gc.immediate=new mc,oc=function(a){function b(){for(;d.length>0;){var a=d.dequeue();!a.isCancelled()&&a.invoke()}}function c(){a.call(this)}var d;return Pb(c,a),c.prototype.schedule=function(a,c){var f=new fc(this,a,c,this.now());if(d)d.enqueue(f);else{d=new Sb(4),d.enqueue(f);var g=$a(b)();d=null,g===Za&&e(g.e)}return f.disposable},c.prototype.scheduleRequired=function(){return!d},c}(gc),pc=gc.currentThread=new oc,qc=function(){var a,b=Ra;if(Pa.setTimeout)a=Pa.setTimeout,b=Pa.clearTimeout;else{if(!Pa.WScript)throw new hb;a=function(a,b){Pa.WScript.Sleep(b),a()}}return{setTimeout:a,clearTimeout:b}}(),rc=qc.setTimeout,sc=qc.clearTimeout;!function(){function a(b){if(f)rc(function(){a(b)},0);else{var c=d[b];if(c){f=!0;var g=$a(c)();kc(b),f=!1,g===Za&&e(g.e)}}}function b(){if(!Pa.postMessage||Pa.importScripts)return!1;var a=!1,b=Pa.onmessage;return Pa.onmessage=function(){a=!0},Pa.postMessage("","*"),Pa.onmessage=b,a}var c=1,d={},f=!1;kc=function(a){delete d[a]};var g=new RegExp("^"+String(Cb).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),h="function"==typeof(h=Ka&&Na&&Ka.setImmediate)&&!g.test(h)&&h;if(Ya(h))jc=function(b){var e=c++;return d[e]=b,h(function(){a(e)}),e};else if("undefined"!=typeof process&&"[object process]"==={}.toString.call(process))jc=function(b){var e=c++;return d[e]=b,process.nextTick(function(){a(e)}),e};else if(b()){var i="ms.rx.schedule"+Math.random(),j=function(b){"string"==typeof b.data&&b.data.substring(0,i.length)===i&&a(b.data.substring(i.length))};Pa.addEventListener("message",j,!1),jc=function(a){var b=c++;return d[b]=a,Pa.postMessage(i+currentId,"*"),b}}else if(Pa.MessageChannel){var k=new Pa.MessageChannel;k.port1.onmessage=function(b){a(b.data)},jc=function(a){var b=c++;return d[b]=a,k.port2.postMessage(b),b}}else jc="document"in Pa&&"onreadystatechange"in Pa.document.createElement("script")?function(b){var e=Pa.document.createElement("script"),f=c++;return d[f]=b,e.onreadystatechange=function(){a(f),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},Pa.document.documentElement.appendChild(e),f}:function(b){var e=c++;return d[e]=b,rc(function(){a(e)},0),e}}();var tc=function(a){function b(){a.call(this)}function c(a,b,c,d){return function(){!a.isDisposed&&a.setDisposable(Wb._fixup(b(c,d)))}}function d(a,b){this._id=b,this._method=a,this.isDisposed=!1}return Pb(b,a),d.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._method.call(null,this._id))},b.prototype.schedule=function(a,b){var e=new ac,f=jc(c(e,b,this,a));return new cc(e,new d(kc,f))},b.prototype._scheduleFuture=function(a,b,e){if(0===b)return this.schedule(a,e);var f=new ac,g=rc(c(f,e,this,a),b);return new cc(f,new d(sc,g))},b}(gc),uc=gc["default"]=gc.async=new tc,vc=function(a){function b(b,c){this._scheduler=b,this._handler=c,this._recursiveOriginal=null,this._recursiveWrapper=null,a.call(this)}return Pb(b,a),b.prototype.schedule=function(a,b){return this._scheduler.schedule(a,this._wrap(b))},b.prototype._scheduleFuture=function(a,b,c){return this._scheduler.schedule(a,b,this._wrap(c))},b.prototype.now=function(){return this._scheduler.now()},b.prototype._clone=function(a){return new b(a,this._handler)},b.prototype._wrap=function(a){var b=this;return function(c,d){var f=$a(a)(b._getRecursiveWrapper(c),d);return f===Za?(b._handler(f.e)||e(f.e),Yb):_b(ret)}},b.prototype._getRecursiveWrapper=function(a){if(this._recursiveOriginal!==a){this._recursiveOriginal=a;var b=this._clone(a);b._recursiveOriginal=a,b._recursiveWrapper=b,this._recursiveWrapper=b}return this._recursiveWrapper},b.prototype.schedulePeriodic=function(a,b,c){var d=this,f=!1,g=new ac;return g.setDisposable(this._scheduler.schedulePeriodic(a,b,function(a){if(f)return null;var b=$a(c)(a);return b===Za?(f=!0,d._handler(b.e)||e(b.e),g.dispose(),null):ret})),g},b}(gc),wc=Qa.Notification=function(){function a(){}return a.prototype._accept=function(a,b,c){throw new ib},a.prototype._acceptObservable=function(a,b,c){throw new ib},a.prototype.accept=function(a,b,c){return a&&"object"==typeof a?this._acceptObservable(a):this._accept(a,b,c)},a.prototype.toObservable=function(a){var b=this;return ic(a)||(a=nc),new ig(function(c){return a.schedule(b,function(a,b){b._acceptObservable(c),"N"===b.kind&&c.onCompleted()})})},a}(),xc=function(a){function b(a){this.value=a,this.kind="N"}return Pb(b,a),b.prototype._accept=function(a){return a(this.value)},b.prototype._acceptObservable=function(a){return a.onNext(this.value)},b.prototype.toString=function(){return"OnNext("+this.value+")"},b}(wc),yc=function(a){function b(a){this.error=a,this.kind="E"}return Pb(b,a),b.prototype._accept=function(a,b){return b(this.error)},b.prototype._acceptObservable=function(a){return a.onError(this.error)},b.prototype.toString=function(){return"OnError("+this.error+")"},b}(wc),zc=function(a){function b(){this.kind="C"}return Pb(b,a),b.prototype._accept=function(a,b,c){return c()},b.prototype._acceptObservable=function(a){return a.onCompleted()},b.prototype.toString=function(){return"OnCompleted()"},b}(wc),Ac=wc.createOnNext=function(a){return new xc(a)},Bc=wc.createOnError=function(a){return new yc(a)},Cc=wc.createOnCompleted=function(){return new zc},Dc=Qa.Observer=function(){};Dc.prototype.toNotifier=function(){var a=this;return function(b){return b.accept(a)}},Dc.prototype.asObserver=function(){var a=this;return new Hc(function(b){a.onNext(b)},function(b){a.onError(b)},function(){a.onCompleted()})},Dc.prototype.checked=function(){return new Ic(this)};var Ec=Dc.create=function(a,b,c){return a||(a=Ra),b||(b=Wa),c||(c=Ra),new Hc(a,b,c)};Dc.fromNotifier=function(a,b){var c=pb(a,b,1);return new Hc(function(a){return c(Ac(a))},function(a){return c(Bc(a))},function(){return c(Cc())})},Dc.prototype.notifyOn=function(a){return new Kc(a,this)},Dc.prototype.makeSafe=function(a){return new AnonymousSafeObserver(this._onNext,this._onError,this._onCompleted,a)};var Fc,Gc=Qa.internals.AbstractObserver=function(a){function b(){this.isStopped=!1}return Pb(b,a),b.prototype.next=jb,b.prototype.error=jb,b.prototype.completed=jb,b.prototype.onNext=function(a){!this.isStopped&&this.next(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.error(a))},b.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.completed())},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){
	return this.isStopped?!1:(this.isStopped=!0,this.error(a),!0)},b}(Dc),Hc=Qa.AnonymousObserver=function(a){function b(b,c,d){a.call(this),this._onNext=b,this._onError=c,this._onCompleted=d}return Pb(b,a),b.prototype.next=function(a){this._onNext(a)},b.prototype.error=function(a){this._onError(a)},b.prototype.completed=function(){this._onCompleted()},b}(Gc),Ic=function(a){function b(b){a.call(this),this._observer=b,this._state=0}Pb(b,a);var c=b.prototype;return c.onNext=function(a){this.checkAccess();var b=$a(this._observer.onNext).call(this._observer,a);this._state=0,b===Za&&e(b.e)},c.onError=function(a){this.checkAccess();var b=$a(this._observer.onError).call(this._observer,a);this._state=2,b===Za&&e(b.e)},c.onCompleted=function(){this.checkAccess();var a=$a(this._observer.onCompleted).call(this._observer);this._state=2,a===Za&&e(a.e)},c.checkAccess=function(){if(1===this._state)throw new Error("Re-entrancy detected");if(2===this._state)throw new Error("Observer completed");0===this._state&&(this._state=1)},b}(Dc),Jc=Qa.internals.ScheduledObserver=function(a){function b(b,c){a.call(this),this.scheduler=b,this.observer=c,this.isAcquired=!1,this.hasFaulted=!1,this.queue=[],this.disposable=new bc}return Pb(b,a),b.prototype.next=function(a){var b=this;this.queue.push(function(){b.observer.onNext(a)})},b.prototype.error=function(a){var b=this;this.queue.push(function(){b.observer.onError(a)})},b.prototype.completed=function(){var a=this;this.queue.push(function(){a.observer.onCompleted()})},b.prototype.ensureActive=function(){var a=!1;!this.hasFaulted&&this.queue.length>0&&(a=!this.isAcquired,this.isAcquired=!0),a&&this.disposable.setDisposable(this.scheduler.scheduleRecursive(this,function(a,b){var c;if(!(a.queue.length>0))return void(a.isAcquired=!1);c=a.queue.shift();var d=$a(c)();return d===Za?(a.queue=[],a.hasFaulted=!0,e(d.e)):void b(a)}))},b.prototype.dispose=function(){a.prototype.dispose.call(this),this.disposable.dispose()},b}(Gc),Kc=function(a){function b(b,c,d){a.call(this,b,c),this._cancel=d}return Pb(b,a),b.prototype.next=function(b){a.prototype.next.call(this,b),this.ensureActive()},b.prototype.error=function(b){a.prototype.error.call(this,b),this.ensureActive()},b.prototype.completed=function(){a.prototype.completed.call(this),this.ensureActive()},b.prototype.dispose=function(){a.prototype.dispose.call(this),this._cancel&&this._cancel.dispose(),this._cancel=null},b}(Jc),Lc=Qa.Observable=function(){function a(a,b){return function(c){var d=c.onError;return c.onError=function(b){f(b,a),d.call(c,b)},b.call(a,c)}}function b(){if(Qa.config.longStackSupport&&_a){var b=this._subscribe,c=$a(e)(new Error).e;this.stack=c.stack.substring(c.stack.indexOf("\n")+1),this._subscribe=a(this,b)}}return Fc=b.prototype,b.isObservable=function(a){return a&&Ya(a.subscribe)},Fc.subscribe=Fc.forEach=function(a,b,c){return this._subscribe("object"==typeof a?a:Ec(a,b,c))},Fc.subscribeOnNext=function(a,b){return this._subscribe(Ec("undefined"!=typeof b?function(c){a.call(b,c)}:a))},Fc.subscribeOnError=function(a,b){return this._subscribe(Ec(null,"undefined"!=typeof b?function(c){a.call(b,c)}:a))},Fc.subscribeOnCompleted=function(a,b){return this._subscribe(Ec(null,null,"undefined"!=typeof b?function(){a.call(b)}:a))},b}(),Mc=Qa.ObservableBase=function(a){function b(a){return a&&Ya(a.dispose)?a:Ya(a)?Xb(a):Yb}function c(a,c){var d=c[0],f=c[1],g=$a(f.subscribeCore).call(f,d);g!==Za||d.fail(Za.e)||e(Za.e),d.setDisposable(b(g))}function d(){a.call(this)}return Pb(d,a),d.prototype._subscribe=function(a){var b=new jg(a),d=[b,this];return pc.scheduleRequired()?pc.schedule(d,c):c(null,d),b},d.prototype.subscribeCore=jb,d}(Lc),Nc=Qa.FlatMapObservable=function(a){function b(b,c,d,e){this.resultSelector=Ya(d)?d:null,this.selector=pb(Ya(c)?c:function(){return c},e,3),this.source=b,a.call(this)}function c(a,b,c,d){this.i=0,this.selector=b,this.resultSelector=c,this.source=d,this.o=a,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this.selector,this.resultSelector,this))},Pb(c,Gc),c.prototype._wrapResult=function(a,b,c){return this.resultSelector?a.map(function(a,d){return this.resultSelector(b,a,c,d)},this):a},c.prototype.next=function(a){var b=this.i++,c=$a(this.selector)(a,b,this.source);return c===Za?this.o.onError(c.e):(Xa(c)&&(c=Yc(c)),(nb(c)||mb(c))&&(c=Lc.from(c)),void this.o.onNext(this._wrapResult(c,a,b)))},c.prototype.error=function(a){this.o.onError(a)},c.prototype.onCompleted=function(){this.o.onCompleted()},b}(Mc),Oc=Qa.internals.Enumerable=function(){};v.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._s.isDisposed=!0)};var Pc=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b,c){this._o=a,this._s=b,this._e=c,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b={isDisposed:!1},d=new bc,e=pc.scheduleRecursive(this.sources[kb](),function(e,f){if(!b.isDisposed){var g=$a(e.next).call(e);if(g===Za)return a.onError(g.e);if(g.done)return a.onCompleted();var h=g.value;Xa(h)&&(h=Yc(h));var i=new ac;d.setDisposable(i),i.setDisposable(h.subscribe(new c(a,f,e)))}});return new dc([d,e,new v(b)])},Pb(c,Gc),c.prototype.onNext=function(a){this._o.onNext(a)},c.prototype.onError=function(a){this._o.onError(a)},c.prototype.onCompleted=function(){this._s(this._e)},b}(Mc);Oc.prototype.concat=function(){return new Pc(this)};var Qc=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){this._o=a,this._recurse=b,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=this.sources[kb](),d={isDisposed:!1},e=new bc,f=pc.scheduleRecursive(null,function(f,g){if(!d.isDisposed){var h=$a(b.next).call(b);if(h===Za)return a.onError(h.e);if(h.done)return null!==f?a.onError(f):a.onCompleted();var i=h.value;Xa(i)&&(i=Yc(i));var j=new ac;e.setDisposable(j),j.setDisposable(i.subscribe(new c(a,g)))}});return new dc([e,f,new v(d)])},Pb(c,Gc),c.prototype.next=function(a){this._o.onNext(a)},c.prototype.error=function(a){this._recurse(a)},c.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Oc.prototype.catchError=function(){return new Qc(this)},Oc.prototype.catchErrorWhen=function(a){var b=this;return new ig(function(c){var d,e=new mg,f=new mg,g=a(e),h=g.subscribe(f),i=b[kb](),j={isDisposed:!1},k=new bc,l=pc.scheduleRecursive(null,function(a,b){if(!j.isDisposed){var g=$a(i.next).call(i);if(g===Za)return c.onError(g.e);if(g.done)return void(d?c.onError(d):c.onCompleted());var h=g.value;Xa(h)&&(h=Yc(h));var l=new ac,m=new ac;k.setDisposable(new cc(m,l)),l.setDisposable(h.subscribe(function(a){c.onNext(a)},function(a){m.setDisposable(f.subscribe(b,function(a){c.onError(a)},function(){c.onCompleted()})),e.onNext(a)},function(){c.onCompleted()}))}});return new dc([h,k,l,new v(j)])})};var Rc=function(a){function b(a,b){this.v=a,this.c=null==b?-1:b}function c(a){this.v=a.v,this.l=a.c}return Pb(b,a),b.prototype[kb]=function(){return new c(this)},c.prototype.next=function(){return 0===this.l?lb:(this.l>0&&this.l--,{done:!1,value:this.v})},b}(Oc),Sc=Oc.repeat=function(a,b){return new Rc(a,b)},Tc=function(a){function b(a,b,c){this.s=a,this.fn=b?pb(b,c,3):null}function c(a){this.i=-1,this.s=a.s,this.l=this.s.length,this.fn=a.fn}return Pb(b,a),b.prototype[kb]=function(){return new c(this)},c.prototype.next=function(){return++this.i<this.l?{done:!1,value:this.fn?this.fn(this.s[this.i],this.i,this.s):this.s[this.i]}:lb},b}(Oc),Uc=Oc.of=function(a,b,c){return new Tc(a,b,c)},Vc=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Kc(this._s,a))},b}(Mc);Fc.observeOn=function(a){return new Vc(this,a)};var Wc=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}function c(a,b){var c=b[0],d=b[1],e=b[2];d.setDisposable(new t(a,c.subscribe(e)))}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ac,d=new bc;return d.setDisposable(b),b.setDisposable(this._s.schedule([this.source,d,a],c)),d},b}(Mc);Fc.subscribeOn=function(a){return new Wc(this,a)};var Xc=function(a){function b(b,c){this._p=b,this._s=c,a.call(this)}function c(a,b){var c=b[0],d=b[1];c.onNext(d),c.onCompleted()}function d(a,b){var c=b[0],d=b[1];c.onError(d)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ac,e=this;return this._p.then(function(d){b.setDisposable(e._s.schedule([a,d],c))},function(c){b.setDisposable(e._s.schedule([a,c],d))}),b},b}(Mc),Yc=Lc.fromPromise=function(a,b){return b||(b=uc),new Xc(a,b)};Fc.toPromise=function(a){if(a||(a=Qa.config.Promise),!a)throw new hb("Promise type not provided nor in Rx.config.Promise");var b=this;return new a(function(a,c){var d;b.subscribe(function(a){d=a},c,function(){a(d)})})};var Zc=function(a){function b(b){this.source=b,a.call(this)}function c(a){this.o=a,this.a=[],Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a))},Pb(c,Gc),c.prototype.next=function(a){this.a.push(a)},c.prototype.error=function(a){this.o.onError(a)},c.prototype.completed=function(){this.o.onNext(this.a),this.o.onCompleted()},b}(Mc);Fc.toArray=function(){return new Zc(this)},Lc.create=function(a,b){return new ig(a,b)};var $c=function(a){function b(b){this._f=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=$a(this._f)();return b===Za?td(b.e).subscribe(a):(Xa(b)&&(b=Yc(b)),b.subscribe(a))},b}(Mc),_c=Lc.defer=function(a){return new $c(a)},ad=function(a){function b(b){this.scheduler=b,a.call(this)}function c(a,b){this.observer=a,this.scheduler=b}function d(a,b){return b.onCompleted(),Yb}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this.scheduler);return b.run()},c.prototype.run=function(){var a=this.observer;return this.scheduler===nc?d(null,a):this.scheduler.schedule(a,d)},b}(Mc),bd=new ad(nc),cd=Lc.empty=function(a){return ic(a)||(a=nc),a===nc?bd:new ad(a)},dd=function(a){function b(b,c,d){this.iterable=b,this.mapper=c,this.scheduler=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ed(a,this);return b.run()},b}(Mc),ed=function(){function a(a,b){this.o=a,this.parent=b}return a.prototype.run=function(){function a(a,b){var f=$a(c.next).call(c);if(f===Za)return d.onError(f.e);if(f.done)return d.onCompleted();var g=f.value;return Ya(e)&&(g=$a(e)(g,a),g===Za)?d.onError(g.e):(d.onNext(g),void b(a+1))}var b=Object(this.parent.iterable),c=B(b),d=this.o,e=this.parent.mapper;return this.parent.scheduler.scheduleRecursive(0,a)},a}(),fd=Math.pow(2,53)-1;w.prototype[kb]=function(){return new x(this._s)},x.prototype[kb]=function(){return this},x.prototype.next=function(){return this._i<this._l?{done:!1,value:this._s.charAt(this._i++)}:lb},y.prototype[kb]=function(){return new z(this._a)},z.prototype[kb]=function(){return this},z.prototype.next=function(){return this._i<this._l?{done:!1,value:this._a[this._i++]}:lb};var gd=Lc.from=function(a,b,c,d){if(null==a)throw new Error("iterable cannot be null.");if(b&&!Ya(b))throw new Error("mapFn when provided must be a function");if(b)var e=pb(b,c,2);return ic(d)||(d=pc),new dd(a,e,d)},hd=function(a){function b(b,c){this.args=b,this.scheduler=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new E(a,this);return b.run()},b}(Mc);E.prototype.run=function(){return this.parent.scheduler.scheduleRecursive(0,F(this.parent.args,this.observer))};var id=Lc.fromArray=function(a,b){return ic(b)||(b=pc),new hd(a,b)},jd=function(a){function b(b,c,d,e,f){this._state=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._s=f,this._first=!0,a.call(this)}function c(a,b){if(a._first)a._first=!1;else if(a._state=$a(a._itrFn)(a._state),a._state===Za)return a._o.onError(a._state.e);var c=$a(a._cndFn)(a._state);if(c===Za)return a._o.onError(c.e);if(c){var d=$a(a._resFn)(a._state);if(d===Za)return a._o.onError(d.e);a._o.onNext(d),b(a)}else a._o.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._o=a,this._s.scheduleRecursive(this,c)},b}(Mc);Lc.generate=function(a,b,c,d,e){return ic(e)||(e=pc),new jd(a,b,c,d,e)},Lc.of=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return new hd(b,pc)},Lc.ofWithScheduler=function(a){for(var b=arguments.length,c=new Array(b-1),d=1;b>d;d++)c[d-1]=arguments[d];return new hd(c,a)},Lc.ofArrayChanges=function(a){if(!Array.isArray(a))throw new TypeError("Array.observe only accepts arrays.");if("function"!=typeof Array.observe&&"function"!=typeof Array.unobserve)throw new TypeError("Array.observe is not supported on your platform");return new ig(function(b){function c(a){for(var c=0,d=a.length;d>c;c++)b.onNext(a[c])}return Array.observe(a,c),function(){Array.unobserve(a,c)}})},Lc.ofObjectChanges=function(a){if(null==a)throw new TypeError("object must not be null or undefined.");if("function"!=typeof Object.observe&&"function"!=typeof Object.unobserve)throw new TypeError("Object.observe is not supported on your platform");return new ig(function(b){function c(a){for(var c=0,d=a.length;d>c;c++)b.onNext(a[c])}return Object.observe(a,c),function(){Object.unobserve(a,c)}})};var kd=function(a){function b(){a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return Yb},b}(Mc),ld=new kd,md=Lc.never=function(){return ld},nd=function(a){function b(b,c){this.obj=b,this.keys=Object.keys(b),this.scheduler=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new H(a,this);return b.run()},b}(Mc);H.prototype.run=function(){function a(a,f){if(e>a){var g=d[a];b.onNext([g,c[g]]),f(a+1)}else b.onCompleted()}var b=this.observer,c=this.parent.obj,d=this.parent.keys,e=d.length;return this.parent.scheduler.scheduleRecursive(0,a)},Lc.pairs=function(a,b){return b||(b=pc),new nd(a,b)};var od=function(a){function b(b,c,d){this.start=b,this.rangeCount=c,this.scheduler=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new pd(a,this);return b.run()},b}(Mc),pd=function(){function a(a,b){this.observer=a,this.parent=b}function b(a,b,c){return function(d,e){b>d?(c.onNext(a+d),e(d+1)):c.onCompleted()}}return a.prototype.run=function(){return this.parent.scheduler.scheduleRecursive(0,b(this.parent.start,this.parent.rangeCount,this.observer))},a}();Lc.range=function(a,b,c){return ic(c)||(c=pc),new od(a,b,c)};var qd=function(a){function b(b,c,d){this.value=b,this.repeatCount=null==c?-1:c,this.scheduler=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new I(a,this);return b.run()},b}(Mc);I.prototype.run=function(){function a(a,d){return(-1===a||a>0)&&(b.onNext(c),a>0&&a--),0===a?b.onCompleted():void d(a)}var b=this.observer,c=this.parent.value;return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount,a)},Lc.repeat=function(a,b,c){return ic(c)||(c=pc),new qd(a,b,c)};var rd=function(a){function b(b,c){this.value=b,this.scheduler=c,a.call(this)}function c(a,b,c){this.observer=a,this.value=b,this.scheduler=c}function d(a,b){var c=b[0],d=b[1];return d.onNext(c),d.onCompleted(),Yb}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this.value,this.scheduler);return b.run()},c.prototype.run=function(){var a=[this.value,this.observer];return this.scheduler===nc?d(null,a):this.scheduler.schedule(a,d)},b}(Mc),sd=(Lc["return"]=Lc.just=function(a,b){return ic(b)||(b=nc),new rd(a,b)},function(a){function b(b,c){this.error=b,this.scheduler=c,a.call(this)}function c(a,b){this.o=a,this.p=b}function d(a,b){var c=b[0],d=b[1];d.onError(c)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this);return b.run()},c.prototype.run=function(){return this.p.scheduler.schedule([this.p.error,this.o],d)},b}(Mc)),td=Lc["throw"]=function(a,b){return ic(b)||(b=nc),new sd(a,b)},ud=function(a){function b(b,c){this._resFn=b,this._obsFn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=Yb,c=$a(this._resFn)();if(c===Za)return new cc(td(c.e).subscribe(a),b);c&&(b=c);var d=$a(this._obsFn)(c);return d===Za?new cc(td(d.e).subscribe(a),b):new cc(d.subscribe(a),b)},b}(Mc);Lc.using=function(a,b){return new ud(a,b)},Fc.amb=function(a){var b=this;return new ig(function(c){function d(){f||(f=g,j.dispose())}function e(){f||(f=h,i.dispose())}var f,g="L",h="R",i=new ac,j=new ac;Xa(a)&&(a=Yc(a));var k=Ec(function(a){d(),f===g&&c.onNext(a)},function(a){d(),f===g&&c.onError(a)},function(){d(),f===g&&c.onCompleted()}),l=Ec(function(a){e(),f===h&&c.onNext(a)},function(a){e(),f===h&&c.onError(a)},function(){e(),f===h&&c.onCompleted()});return i.setDisposable(b.subscribe(k)),j.setDisposable(a.subscribe(l)),new cc(i,j)})},Lc.amb=function(){var a,b=md();if(Array.isArray(arguments[0]))a=arguments[0];else{var c=arguments.length;a=new Array(a);for(var d=0;c>d;d++)a[d]=arguments[d]}for(var d=0,c=a.length;c>d;d++)b=J(b,a[d]);return b};var vd=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ac,c=new bc;return c.setDisposable(b),b.setDisposable(this.source.subscribe(new wd(a,c,this._fn))),c},b}(Mc),wd=function(a){function b(b,c,d){this._o=b,this._s=c,this._fn=d,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._o.onNext(a)},b.prototype.completed=function(){return this._o.onCompleted()},b.prototype.error=function(a){var b=$a(this._fn)(a);if(b===Za)return this._o.onError(b.e);Xa(b)&&(b=Yc(b));var c=new ac;this._s.setDisposable(c),c.setDisposable(b.subscribe(this._o))},b}(Gc);Fc["catch"]=function(a){return Ya(a)?new vd(this,a):xd([this,a])};var xd=Lc["catch"]=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return Uc(a).catchError()};Fc.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return Array.isArray(b[0])?b[0].unshift(this):b.unshift(this),Ad.apply(this,b)};var yd=function(a){function b(b,c){this._params=b,this._cb=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){for(var b=this._params.length,c=new Array(b),d={hasValue:r(b,K),hasValueAll:!1,isDone:r(b,K),values:new Array(b)},e=0;b>e;e++){var f=this._params[e],g=new ac;c[e]=g,Xa(f)&&(f=Yc(f)),g.setDisposable(f.subscribe(new zd(a,e,this._cb,d)))}return new dc(c)},b}(Mc),zd=function(a){function b(b,c,d,e){this._o=b,this._i=c,this._cb=d,this._state=e,a.call(this)}function c(a){return function(b,c){return c!==a}}return Pb(b,a),b.prototype.next=function(a){if(this._state.values[this._i]=a,this._state.hasValue[this._i]=!0,this._state.hasValueAll||(this._state.hasValueAll=this._state.hasValue.every(Sa))){var b=$a(this._cb).apply(null,this._state.values);if(b===Za)return this._o.onError(b.e);this._o.onNext(b)}else this._state.isDone.filter(c(this._i)).every(Sa)&&this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._state.isDone[this._i]=!0,this._state.isDone.every(Sa)&&this._o.onCompleted()},b}(Gc),Ad=Lc.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Ya(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new yd(b,d)};Fc.concat=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return a.unshift(this),Cd.apply(null,a)};var Bd=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){this.sources=a,this.o=b}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new c(this.sources,a);return b.run()},c.prototype.run=function(){var a,b=new bc,c=this.sources,d=c.length,e=this.o,f=nc.scheduleRecursive(0,function(f,g){if(!a){if(f===d)return e.onCompleted();var h=c[f];Xa(h)&&(h=Yc(h));var i=new ac;b.setDisposable(i),i.setDisposable(h.subscribe(function(a){e.onNext(a)},function(a){e.onError(a)},function(){g(f+1)}))}});return new Ub(b,f,Xb(function(){a=!0}))},b}(Mc),Cd=Lc.concat=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(arguments.length);for(var b=0,c=arguments.length;c>b;b++)a[b]=arguments[b]}return new Bd(a)};Fc.concatAll=function(){return this.merge(1)};var Dd=function(a){function b(b,c){this.source=b,this.maxConcurrent=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new Ub;return b.add(this.source.subscribe(new Ed(a,this.maxConcurrent,b))),b},b}(Mc),Ed=function(){function a(a,b,c){this.o=a,this.max=b,this.g=c,this.done=!1,this.q=[],this.activeCount=0,this.isStopped=!1}function b(a,b){this.parent=a,this.sad=b,this.isStopped=!1}return a.prototype.handleSubscribe=function(a){var c=new ac;this.g.add(c),Xa(a)&&(a=Yc(a)),c.setDisposable(a.subscribe(new b(this,c)))},a.prototype.onNext=function(a){this.isStopped||(this.activeCount<this.max?(this.activeCount++,this.handleSubscribe(a)):this.q.push(a))},a.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},a.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.done=!0,0===this.activeCount&&this.o.onCompleted())},a.prototype.dispose=function(){this.isStopped=!0},a.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)},b.prototype.onNext=function(a){this.isStopped||this.parent.o.onNext(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.parent.o.onError(a))},b.prototype.onCompleted=function(){if(!this.isStopped){this.isStopped=!0;var a=this.parent;a.g.remove(this.sad),a.q.length>0?a.handleSubscribe(a.q.shift()):(a.activeCount--,a.done&&0===a.activeCount&&a.o.onCompleted())}},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.parent.o.onError(a),!0)},a}();Fc.merge=function(a){return"number"!=typeof a?Fd(this,a):new Dd(this,a)};var Fd=Lc.merge=function(){var a,b,c=[],d=arguments.length;if(arguments[0])if(ic(arguments[0]))for(a=arguments[0],b=1;d>b;b++)c.push(arguments[b]);else for(a=nc,b=0;d>b;b++)c.push(arguments[b]);else for(a=nc,b=1;d>b;b++)c.push(arguments[b]);return Array.isArray(c[0])&&(c=c[0]),G(a,c).mergeAll()},Gd=function(a){function b(b){this.source=b,a.call(this)}function c(a,b){this.o=a,this.g=b,this.isStopped=!1,this.done=!1}function d(a,b){this.parent=a,this.sad=b,this.isStopped=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new Ub,d=new ac;return b.add(d),d.setDisposable(this.source.subscribe(new c(a,b))),b},c.prototype.onNext=function(a){if(!this.isStopped){var b=new ac;this.g.add(b),Xa(a)&&(a=Yc(a)),b.setDisposable(a.subscribe(new d(this,b)))}},c.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},c.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.done=!0,1===this.g.length&&this.o.onCompleted())},c.prototype.dispose=function(){this.isStopped=!0},c.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)},d.prototype.onNext=function(a){this.isStopped||this.parent.o.onNext(a)},d.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.parent.o.onError(a))},d.prototype.onCompleted=function(){if(!this.isStopped){var a=this.parent;this.isStopped=!0,a.g.remove(this.sad),a.done&&1===a.g.length&&a.o.onCompleted()}},d.prototype.dispose=function(){this.isStopped=!0},d.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.parent.o.onError(a),!0)},b}(Mc);Fc.mergeAll=function(){return new Gd(this)};var Hd=Qa.CompositeError=function(a){this.innerErrors=a,this.message="This contains multiple errors. Check the innerErrors",Error.call(this)};Hd.prototype=Object.create(Error.prototype),Hd.prototype.name="CompositeError";var Id=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new Ub,c=new ac,d={isStopped:!1,errors:[],o:a};return b.add(c),c.setDisposable(this.source.subscribe(new Jd(b,d))),b},b}(Mc),Jd=function(a){function b(b,c){this._group=b,this._state=c,a.call(this)}function c(a,b){0===b.length?a.onCompleted():1===b.length?a.onError(b[0]):a.onError(new Hd(b))}function d(b,c,d){this._inner=b,this._group=c,this._state=d,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=new ac;this._group.add(b),Xa(a)&&(a=Yc(a)),b.setDisposable(a.subscribe(new d(b,this._group,this._state)))},b.prototype.error=function(a){this._state.errors.push(a),this._state.isStopped=!0,1===this._group.length&&c(this._state.o,this._state.errors)},b.prototype.completed=function(){this._state.isStopped=!0,1===this._group.length&&c(this._state.o,this._state.errors)},Pb(d,a),d.prototype.next=function(a){this._state.o.onNext(a)},d.prototype.error=function(a){this._state.errors.push(a),this._group.remove(this._inner),this._state.isStopped&&1===this._group.length&&c(this._state.o,this._state.errors)},d.prototype.completed=function(){this._group.remove(this._inner),this._state.isStopped&&1===this._group.length&&c(this._state.o,this._state.errors)},b}(Gc);Lc.mergeDelayError=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}var d=G(null,a);return new Id(d)},Fc.onErrorResumeNext=function(a){if(!a)throw new Error("Second observable is required");return Md([this,a])};var Kd=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){if(a.pos<a.sources.length){var c=a.sources[a.pos++];Xa(c)&&(c=Yc(c));var d=new ac;a.subscription.setDisposable(d),d.setDisposable(c.subscribe(new Ld(a,b)))}else a.o.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new bc,d={pos:0,subscription:b,o:a,sources:this.sources},e=nc.scheduleRecursive(d,c);return new cc(b,e)},b}(Mc),Ld=function(a){function b(b,c){this._state=b,this._recurse=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._state.o.onNext(a)},b.prototype.error=function(){this._recurse(this._state)},b.prototype.completed=function(){this._recurse(this._state)},b}(Gc),Md=Lc.onErrorResumeNext=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new Kd(a)},Nd=function(a){function b(b,c){this._s=b,this._o=Xa(c)?Yc(c):c,this._open=!1,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ac;b.setDisposable(this._s.subscribe(new Od(a,this))),Xa(this._o)&&(this._o=Yc(this._o));var c=new ac;return c.setDisposable(this._o.subscribe(new Pd(a,this,c))),new cc(b,c)},b}(Mc),Od=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=function(){this._p._open&&this._o.onCompleted()},b}(Gc),Pd=function(a){function b(b,c,d){this._o=b,this._p=c,this._r=d,a.call(this)}return Pb(b,a),b.prototype.next=function(){this._p._open=!0,this._r.dispose()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=function(){this._r.dispose()},b}(Gc);Fc.skipUntil=function(a){return new Nd(this,a)};var Qd=function(a){function b(b){this.source=b,a.call(this)}function c(a,b){this.o=a,this.inner=b,this.stopped=!1,this.latest=0,this.hasLatest=!1,Gc.call(this)}function d(a,b){this.parent=a,this.id=b,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new bc,d=this.source.subscribe(new c(a,b));return new cc(d,b)},Pb(c,Gc),c.prototype.next=function(a){var b=new ac,c=++this.latest;this.hasLatest=!0,this.inner.setDisposable(b),Xa(a)&&(a=Yc(a)),b.setDisposable(a.subscribe(new d(this,c)))},c.prototype.error=function(a){this.o.onError(a)},c.prototype.completed=function(){this.stopped=!0,!this.hasLatest&&this.o.onCompleted()},Pb(d,Gc),d.prototype.next=function(a){this.parent.latest===this.id&&this.parent.o.onNext(a)},d.prototype.error=function(a){this.parent.latest===this.id&&this.parent.o.onError(a)},d.prototype.completed=function(){this.parent.latest===this.id&&(this.parent.hasLatest=!1,this.parent.isStopped&&this.parent.o.onCompleted())},b}(Mc);Fc["switch"]=Fc.switchLatest=function(){return new Qd(this)};var Rd=function(a){function b(b,c){this.source=b,this.other=Xa(c)?Yc(c):c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return new cc(this.source.subscribe(a),this.other.subscribe(new Sd(a)))},b}(Mc),Sd=function(a){function b(b){this._o=b,a.call(this)}return Pb(b,a),b.prototype.next=function(){this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=Ra,b}(Gc);Fc.takeUntil=function(a){return new Rd(this,a)};var Td=function(a){function b(b,c,d){this._s=b,this._ss=c,this._cb=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){for(var b=this._ss.length,c={hasValue:r(b,K),hasValueAll:!1,values:new Array(b)},d=this._ss.length,e=new Array(d+1),f=0;d>f;f++){var g=this._ss[f],h=new ac;Xa(g)&&(g=Yc(g)),h.setDisposable(g.subscribe(new Ud(a,f,c))),e[f]=h}var h=new ac;return h.setDisposable(this._s.subscribe(new Vd(a,this._cb,c))),e[d]=h,new dc(e)},b}(Mc),Ud=function(a){function b(b,c,d){this._o=b,this._i=c,this._state=d,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._state.values[this._i]=a,this._state.hasValue[this._i]=!0,this._state.hasValueAll=this._state.hasValue.every(Sa)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=Ra,b}(Gc),Vd=function(a){function b(b,c,d){this._o=b,this._cb=c,this._state=d,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=[a].concat(this._state.values);if(this._state.hasValueAll){var c=$a(this._cb).apply(null,b);return c===Za?this._o.onError(c.e):void this._o.onNext(c)}},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.withLatestFrom=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Ya(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new Td(this,b,d)};var Wd=function(a){function b(b,c){this._s=b,this._cb=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=this._s.length,c=new Array(b);done=r(b,K),q=r(b,M);for(var d=0;b>d;d++){var e=this._s[d],f=new ac;c[d]=f,Xa(e)&&(e=Yc(e)),f.setDisposable(e.subscribe(new Xd(a,d,this,q,done)))}return new dc(c)},b}(Mc),Xd=function(a){function b(b,c,d,e,f){this._o=b,this._i=c,this._p=d,this._q=e,this._d=f,a.call(this)}function c(a){return a.length>0}function d(a){return a.shift()}function e(a){return function(b,c){return c!==a}}return Pb(b,a),b.prototype.next=function(a){if(this._q[this._i].push(a),this._q.every(c)){var b=this._q.map(d),f=$a(this._p._cb).apply(null,b);if(f===Za)return this._o.onError(f.e);this._o.onNext(f)}else this._d.filter(e(this._i)).every(Sa)&&this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._d[this._i]=!0,this._d.every(Sa)&&this._o.onCompleted()},b}(Gc);Fc.zip=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Ya(b[a-1])?b.pop():L;Array.isArray(b[0])&&(b=b[0]);var e=this;return b.unshift(e),new Wd(b,d)},Lc.zip=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];Array.isArray(b[0])&&(b=Ya(b[1])?b[0].concat(b[1]):b[0]);var d=b.shift();return d.zip.apply(d,b)},Fc.zipIterable=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Ya(b[a-1])?b.pop():L,e=this;return b.unshift(e),new ig(function(a){for(var c=b.length,f=r(c,M),g=r(c,K),h=new Array(c),i=0;c>i;i++)!function(c){var i=b[c],j=new ac;(nb(i)||mb(i))&&(i=gd(i)),j.setDisposable(i.subscribe(function(b){if(f[c].push(b),f.every(function(a){return a.length>0})){var h=f.map(function(a){return a.shift()}),i=$a(d).apply(e,h);if(i===Za)return a.onError(i.e);a.onNext(i)}else g.filter(function(a,b){return b!==c}).every(Sa)&&a.onCompleted()},function(b){a.onError(b);
	},function(){g[c]=!0,g.every(Sa)&&a.onCompleted()})),h[c]=j}(i);return new Ub(h)},e)},Fc.asObservable=function(){return new ig(N(this),this)},Fc.bufferWithCount=function(a,b){return"number"!=typeof b&&(b=a),this.windowWithCount(a,b).flatMap(O).filter(P)};var Yd=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Zd(a))},b}(Mc),Zd=function(a){function b(b){this._o=b,a.call(this)}return Pb(b,a),b.prototype.next=function(a){a.accept(this._o)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.dematerialize=function(){return new Yd(this)};var $d=function(a){function b(b,c,d){this.source=b,this.keyFn=c,this.comparer=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new _d(a,this.keyFn,this.comparer))},b}(Mc),_d=function(a){function b(b,c,d){this.o=b,this.keyFn=c,this.comparer=d,this.hasCurrentKey=!1,this.currentKey=null,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b,c=a;return Ya(this.keyFn)&&(c=$a(this.keyFn)(a),c===Za)?this.o.onError(c.e):this.hasCurrentKey&&(b=$a(this.comparer)(this.currentKey,c),b===Za)?this.o.onError(b.e):void(this.hasCurrentKey&&b||(this.hasCurrentKey=!0,this.currentKey=c,this.o.onNext(a)))},b.prototype.error=function(a){this.o.onError(a)},b.prototype.completed=function(){this.o.onCompleted()},b}(Gc);Fc.distinctUntilChanged=function(a,b){return b||(b=Ua),new $d(this,a,b)};var ae=function(a){function b(b,c,d,e){this.source=b,this._oN=c,this._oE=d,this._oC=e,a.call(this)}function c(a,b){this.o=a,this.t=!b._oN||Ya(b._oN)?Ec(b._oN||Ra,b._oE||Ra,b._oC||Ra):b._oN,this.isStopped=!1,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this))},Pb(c,Gc),c.prototype.next=function(a){var b=$a(this.t.onNext).call(this.t,a);b===Za&&this.o.onError(b.e),this.o.onNext(a)},c.prototype.error=function(a){var b=$a(this.t.onError).call(this.t,a);return b===Za?this.o.onError(b.e):void this.o.onError(a)},c.prototype.completed=function(){var a=$a(this.t.onCompleted).call(this.t);return a===Za?this.o.onError(a.e):void this.o.onCompleted()},b}(Mc);Fc["do"]=Fc.tap=Fc.doAction=function(a,b,c){return new ae(this,a,b,c)},Fc.doOnNext=Fc.tapOnNext=function(a,b){return this.tap("undefined"!=typeof b?function(c){a.call(b,c)}:a)},Fc.doOnError=Fc.tapOnError=function(a,b){return this.tap(Ra,"undefined"!=typeof b?function(c){a.call(b,c)}:a)},Fc.doOnCompleted=Fc.tapOnCompleted=function(a,b){return this.tap(Ra,null,"undefined"!=typeof b?function(){a.call(b)}:a)},Fc["finally"]=function(a){var b=this;return new ig(function(c){var d=$a(b.subscribe).call(b,c);return d===Za?(a(),e(d.e)):Xb(function(){var b=$a(d.dispose).call(d);a(),b===Za&&e(b.e)})},this)};var be=function(a){function b(b){this.source=b,a.call(this)}function c(a){this.o=a,this.isStopped=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a))},c.prototype.onNext=Ra,c.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},c.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.o.onCompleted())},c.prototype.dispose=function(){this.isStopped=!0},c.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},b}(Mc);Fc.ignoreElements=function(){return new be(this)};var ce=function(a){function b(b,c){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new de(a))},b}(Mc),de=function(a){function b(b){this._o=b,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._o.onNext(Ac(a))},b.prototype.error=function(a){this._o.onNext(Bc(a)),this._o.onCompleted()},b.prototype.completed=function(){this._o.onNext(Cc()),this._o.onCompleted()},b}(Gc);Fc.materialize=function(){return new ce(this)},Fc.repeat=function(a){return Sc(this,a).concat()},Fc.retry=function(a){return Sc(this,a).catchError()},Fc.retryWhen=function(a){return Sc(this).catchErrorWhen(a)};var ee=function(a){function b(b,c,d,e){this.source=b,this.accumulator=c,this.hasSeed=d,this.seed=e,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new fe(a,this))},b}(Mc),fe=function(a){function b(b,c){this._o=b,this._p=c,this._fn=c.accumulator,this._hs=c.hasSeed,this._s=c.seed,this._ha=!1,this._a=null,this._hv=!1,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){return!this._hv&&(this._hv=!0),this._ha?this._a=$a(this._fn)(this._a,a,this._i,this._p):(this._a=this._hs?$a(this._fn)(this._s,a,this._i,this._p):a,this._ha=!0),this._a===Za?this._o.onError(this._a.e):(this._o.onNext(this._a),void this._i++)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){!this._hv&&this._hs&&this._o.onNext(this._s),this._o.onCompleted()},b}(Gc);Fc.scan=function(){var a,b=!1,c=arguments[0];return 2===arguments.length&&(b=!0,a=arguments[1]),new ee(this,c,b,a)};var ge=function(a){function b(b,c){this.source=b,this._c=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new he(a,this._c))},b}(Mc),he=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._o.onNext(this._q.shift())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.skipLast=function(a){if(0>a)throw new gb;return new ge(this,a)},Fc.startWith=function(){var a,b=0;arguments.length&&ic(arguments[0])?(a=arguments[0],b=1):a=nc;for(var c=[],d=b,e=arguments.length;e>d;d++)c.push(arguments[d]);return Uc([id(c,a),this]).concat()};var ie=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(;this._q.length>0;)this._o.onNext(this._q.shift());this._o.onCompleted()},b}(Gc);Fc.takeLast=function(a){if(0>a)throw new gb;var b=this;return new ig(function(c){return b.subscribe(new ie(c,a))},b)};var je=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._q),this._o.onCompleted()},b}(Gc);Fc.takeLastBuffer=function(a){if(0>a)throw new gb;var b=this;return new ig(function(c){return b.subscribe(new je(c,a))},b)},Fc.windowWithCount=function(a,b){var c=this;if(+a||(a=0),Math.abs(a)===1/0&&(a=0),0>=a)throw new gb;if(null==b&&(b=a),+b||(b=0),Math.abs(b)===1/0&&(b=0),0>=b)throw new gb;return new ig(function(d){function e(){var a=new mg;i.push(a),d.onNext(Rb(a,g))}var f=new ac,g=new ec(f),h=0,i=[];return e(),f.setDisposable(c.subscribe(function(c){for(var d=0,f=i.length;f>d;d++)i[d].onNext(c);var g=h-a+1;g>=0&&g%b===0&&i.shift().onCompleted(),++h%b===0&&e()},function(a){for(;i.length>0;)i.shift().onError(a);d.onError(a)},function(){for(;i.length>0;)i.shift().onCompleted();d.onCompleted()})),g},c)},Fc.selectConcat=Fc.concatMap=function(a,b,c){return Ya(a)&&Ya(b)?this.concatMap(function(c,d){var e=a(c,d);return Xa(e)&&(e=Yc(e)),(nb(e)||mb(e))&&(e=gd(e)),e.map(function(a,e){return b(c,a,d,e)})}):Ya(a)?Q(this,a,c):Q(this,function(){return a})},Fc.concatMapObserver=Fc.selectConcatObserver=function(a,b,c,d){var e=this,f=pb(a,d,2),g=pb(b,d,1),h=pb(c,d,0);return new ig(function(a){var b=0;return e.subscribe(function(c){var d;try{d=f(c,b++)}catch(e){return void a.onError(e)}Xa(d)&&(d=Yc(d)),a.onNext(d)},function(b){var c;try{c=g(b)}catch(d){return void a.onError(d)}Xa(c)&&(c=Yc(c)),a.onNext(c),a.onCompleted()},function(){var b;try{b=h()}catch(c){return void a.onError(c)}Xa(b)&&(b=Yc(b)),a.onNext(b),a.onCompleted()})},this).concatAll()};var ke=function(a){function b(b,c){this._o=b,this._d=c,this._f=!1,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._f=!0,this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){!this._f&&this._o.onNext(this._d),this._o.onCompleted()},b}(Gc);Fc.defaultIfEmpty=function(b){var c=this;return b===a&&(b=null),new ig(function(a){return c.subscribe(new ke(a,b))},c)},S.prototype.push=function(a){var b=-1===R(this.set,a,this.comparer);return b&&this.set.push(a),b};var le=function(a){function b(b,c,d){this.source=b,this._keyFn=c,this._cmpFn=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new me(a,this._keyFn,this._cmpFn))},b}(Mc),me=function(a){function b(b,c,d){this._o=b,this._keyFn=c,this._h=new S(d),a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=a;return Ya(this._keyFn)&&(b=$a(this._keyFn)(a),b===Za)?this._o.onError(b.e):void(this._h.push(b)&&this._o.onNext(a))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.distinct=function(a,b){return b||(b=Ua),new le(this,a,b)},Fc.groupBy=function(a,b){return this.groupByUntil(a,b,md)},Fc.groupByUntil=function(b,c,d){var e=this;return new ig(function(f){var g=new Cf,h=new Ub,i=new ec(h),j=function(a){return function(b){b.onError(a)}};return h.add(e.subscribe(function(e){var k=$a(b)(e);if(k===Za)return g.forEach(j(k.e)),f.onError(k.e);var l=!1,m=g.get(k);if(m===a&&(m=new mg,g.set(k,m),l=!0),l){var n=new lg(k,m,i),o=new lg(k,m),p=$a(d)(o);if(p===Za)return g.forEach(j(p.e)),f.onError(p.e);f.onNext(n);var q=new ac;h.add(q),q.setDisposable(p.take(1).subscribe(Ra,function(a){g.forEach(j(a)),f.onError(a)},function(){g["delete"](k)&&m.onCompleted(),h.remove(q)}))}var r=e;return Ya(c)&&(r=$a(c)(e),r===Za)?(g.forEach(j(r.e)),f.onError(r.e)):void m.onNext(r)},function(a){g.forEach(j(a)),f.onError(a)},function(){g.forEach(function(a){a.onCompleted()}),f.onCompleted()})),i},e)};var ne=function(a){function b(b,c,d){this.source=b,this.selector=pb(c,d,3),a.call(this)}function c(a,b){return function(c,d,e){return a.call(this,b.selector(c,d,e),d,e)}}function d(a,b,c){this.o=a,this.selector=b,this.source=c,this.i=0,Gc.call(this)}return Pb(b,a),b.prototype.internalMap=function(a,d){return new b(this.source,c(a,this),d)},b.prototype.subscribeCore=function(a){return this.source.subscribe(new d(a,this.selector,this))},Pb(d,Gc),d.prototype.next=function(a){var b=$a(this.selector)(a,this.i++,this.source);return b===Za?this.o.onError(b.e):void this.o.onNext(b)},d.prototype.error=function(a){this.o.onError(a)},d.prototype.completed=function(){this.o.onCompleted()},b}(Mc);Fc.map=Fc.select=function(a,b){var c="function"==typeof a?a:function(){return a};return this instanceof ne?this.internalMap(c,b):new ne(this,c,b)},Fc.pluck=function(){var a=arguments.length,b=new Array(a);if(0===a)throw new Error("List of properties cannot be empty.");for(var c=0;a>c;c++)b[c]=arguments[c];return this.map(T(b,a))},Fc.flatMap=Fc.selectMany=function(a,b,c){return new Nc(this,a,b,c).mergeAll()},Fc.flatMapObserver=Fc.selectManyObserver=function(a,b,c,d){var e=this;return new ig(function(f){var g=0;return e.subscribe(function(b){var c;try{c=a.call(d,b,g++)}catch(e){return void f.onError(e)}Xa(c)&&(c=Yc(c)),f.onNext(c)},function(a){var c;try{c=b.call(d,a)}catch(e){return void f.onError(e)}Xa(c)&&(c=Yc(c)),f.onNext(c),f.onCompleted()},function(){var a;try{a=c.call(d)}catch(b){return void f.onError(b)}Xa(a)&&(a=Yc(a)),f.onNext(a),f.onCompleted()})},e).mergeAll()},Qa.Observable.prototype.flatMapLatest=function(a,b,c){return new Nc(this,a,b,c).switchLatest()};var oe=function(a){function b(b,c){this.source=b,this.skipCount=c,a.call(this)}function c(a,b){this.c=b,this.r=b,this.o=a,this.isStopped=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this.skipCount))},c.prototype.onNext=function(a){this.isStopped||(this.r<=0?this.o.onNext(a):this.r--)},c.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},c.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.o.onCompleted())},c.prototype.dispose=function(){this.isStopped=!0},c.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)},b}(Mc);Fc.skip=function(a){if(0>a)throw new gb;return new oe(this,a)};var pe=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new qe(a,this))},b}(Mc),qe=function(a){function b(b,c){this._o=b,this._p=c,this._i=0,this._r=!1,a.call(this)}return Pb(b,a),b.prototype.next=function(a){if(!this._r){var b=$a(this._p._fn)(a,this._i++,this._p);if(b===Za)return this._o.onError(b.e);this._r=!b}this._r&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.skipWhile=function(a,b){var c=pb(a,b,3);return new pe(this,c)};var re=function(a){function b(b,c){this.source=b,this.takeCount=c,a.call(this)}function c(a,b){this.o=a,this.c=b,this.r=b,this.isStopped=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this.takeCount))},c.prototype={onNext:function(a){this.isStopped||this.r-->0&&(this.o.onNext(a),this.r<=0&&this.o.onCompleted())},onError:function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},onCompleted:function(){this.isStopped||(this.isStopped=!0,this.o.onCompleted())},dispose:function(){this.isStopped=!0},fail:function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)}},b}(Mc);Fc.take=function(a,b){if(0>a)throw new gb;return 0===a?cd(b):new re(this,a)};var se=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new te(a,this))},b}(Mc),te=function(a){function b(b,c){this._o=b,this._p=c,this._i=0,this._r=!0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){return this._r&&(this._r=$a(this._p._fn)(a,this._i++,this._p),this._r===Za)?this._o.onError(this._r.e):void(this._r?this._o.onNext(a):this._o.onCompleted())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.takeWhile=function(a,b){var c=pb(a,b,3);return new se(this,c)};var ue=function(a){function b(b,c,d){this.source=b,this.predicate=pb(c,d,3),a.call(this)}function c(a,b){return function(c,d,e){return b.predicate(c,d,e)&&a.call(this,c,d,e)}}function d(a,b,c){this.o=a,this.predicate=b,this.source=c,this.i=0,Gc.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new d(a,this.predicate,this))},b.prototype.internalFilter=function(a,d){return new b(this.source,c(a,this),d)},Pb(d,Gc),d.prototype.next=function(a){var b=$a(this.predicate)(a,this.i++,this.source);return b===Za?this.o.onError(b.e):void(b&&this.o.onNext(a))},d.prototype.error=function(a){this.o.onError(a)},d.prototype.completed=function(){this.o.onCompleted()},b}(Mc);Fc.filter=Fc.where=function(a,b){return this instanceof ue?this.internalFilter(a,b):new ue(this,a,b)};var ve=function(a){function b(b,c,d){this.source=b,this._k=c,this._c=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new we(a,this._k,this._c))},b}(Mc),we=function(a){function b(b,c,d){this._o=b,this._k=c,this._c=d,this._v=null,this._hv=!1,this._l=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._k)(a);if(b===Za)return this._o.onError(b.e);var c=0;if(this._hv){if(c=$a(this._c)(b,this._v),c===Za)return this._o.onError(c.e)}else this._hv=!0,this._v=b;c>0&&(this._v=b,this._l=[]),c>=0&&this._l.push(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._l),this._o.onCompleted()},b}(Gc),xe=function(a){function b(b,c,d,e){this.source=b,this.accumulator=c,this.hasSeed=d,this.seed=e,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new ye(a,this))},b}(Mc),ye=function(a){function b(b,c){this._o=b,this._p=c,this._fn=c.accumulator,this._hs=c.hasSeed,this._s=c.seed,this._ha=!1,this._a=null,this._hv=!1,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){return!this._hv&&(this._hv=!0),this._ha?this._a=$a(this._fn)(this._a,a,this._i,this._p):(this._a=this._hs?$a(this._fn)(this._s,a,this._i,this._p):a,this._ha=!0),this._a===Za?this._o.onError(this._a.e):void this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._hv&&this._o.onNext(this._a),!this._hv&&this._hs&&this._o.onNext(this._s),!this._hv&&!this._hs&&this._o.onError(new eb),this._o.onCompleted()},b}(Gc);Fc.reduce=function(){var a,b=!1,c=arguments[0];return 2===arguments.length&&(b=!0,a=arguments[1]),new xe(this,c,b,a)};var ze=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ae(a,this._fn,this.source))},b}(Mc),Ae=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._fn)(a,this._i++,this._s);return b===Za?this._o.onError(b.e):void(Boolean(b)&&(this._o.onNext(!0),this._o.onCompleted()))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!1),this._o.onCompleted()},b}(Gc);Fc.some=function(a,b){var c=pb(a,b,3);return new ze(this,c)};var Be=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ce(a))},b}(Mc),Ce=function(a){function b(b){this._o=b,a.call(this)}return Pb(b,a),b.prototype.next=function(){this._o.onNext(!1),this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!0),this._o.onCompleted()},b}(Gc);Fc.isEmpty=function(){return new Be(this)};var De=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ee(a,this._fn,this.source))},b}(Mc),Ee=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._fn)(a,this._i++,this._s);return b===Za?this._o.onError(b.e):void(Boolean(b)||(this._o.onNext(!1),this._o.onCompleted()))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!0),this._o.onCompleted()},b}(Gc);Fc.every=function(a,b){var c=pb(a,b,3);return new De(this,c)};var Fe=function(a){function b(b,c,d){var e=+d||0;Math.abs(e)===1/0&&(e=0),this.source=b,this._elem=c,this._n=e,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(!1),a.onCompleted(),Yb):this.source.subscribe(new Ge(a,this._elem,this._n))},b}(Mc),Ge=function(a){function b(b,c,d){this._o=b,this._elem=c,this._n=d,this._i=0,a.call(this)}function c(a,b){return 0===a&&0===b||a===b||isNaN(a)&&isNaN(b)}return Pb(b,a),b.prototype.next=function(a){this._i++>=this._n&&c(a,this._elem)&&(this._o.onNext(!0),this._o.onCompleted())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!1),this._o.onCompleted()},b}(Gc);Fc.includes=function(a,b){return new Fe(this,a,b)};var He=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ie(a,this._fn,this.source))},b}(Mc),Ie=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,this._c=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){if(this._fn){var b=$a(this._fn)(a,this._i++,this._s);if(b===Za)return this._o.onError(b.e);Boolean(b)&&this._c++}else this._c++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._c),this._o.onCompleted()},b}(Gc);Fc.count=function(a,b){var c=pb(a,b,3);return new He(this,c)};var Je=function(a){function b(b,c,d){this.source=b,this._e=c,this._n=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(-1),a.onCompleted(),Yb):this.source.subscribe(new Ke(a,this._e,this._n))},b}(Mc),Ke=function(a){function b(b,c,d){this._o=b,this._e=c,this._n=d,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._i>=this._n&&a===this._e&&(this._o.onNext(this._i),this._o.onCompleted()),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(-1),this._o.onCompleted()},b}(Gc);Fc.indexOf=function(a,b){var c=+b||0;return Math.abs(c)===1/0&&(c=0),new Je(this,a,c)};var Le=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Me(a,this._fn,this.source))},b}(Mc),Me=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,this._c=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){if(this._fn){var b=$a(this._fn)(a,this._i++,this._s);if(b===Za)return this._o.onError(b.e);this._c+=b}else this._c+=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._c),this._o.onCompleted()},b}(Gc);Fc.sum=function(a,b){var c=pb(a,b,3);return new Le(this,c)},Fc.minBy=function(a,b){return b||(b=Va),new ve(this,a,function(a,c){return-1*b(a,c)})},Fc.min=function(a){return this.minBy(Sa,a).map(function(a){return U(a)})},Fc.maxBy=function(a,b){return b||(b=Va),new ve(this,a,b)},Fc.max=function(a){return this.maxBy(Sa,a).map(function(a){return U(a)})};var Ne=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Oe(a,this._fn,this.source))},b}(Mc),Oe=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._c=0,this._t=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){if(this._fn){var b=$a(this._fn)(a,this._c++,this._s);if(b===Za)return this._o.onError(b.e);this._t+=b}else this._c++,this._t+=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){return 0===this._c?this._o.onError(new eb):(this._o.onNext(this._t/this._c),void this._o.onCompleted())},b}(Gc);Fc.average=function(a,b){var c,d=this;return Ya(a)&&(c=pb(a,b,3)),new Ne(d,c)},Fc.sequenceEqual=function(a,b){var c=this;return b||(b=Ua),new ig(function(d){var e=!1,f=!1,g=[],h=[],i=c.subscribe(function(a){if(h.length>0){var c=h.shift(),e=$a(b)(c,a);if(e===Za)return d.onError(e.e);e||(d.onNext(!1),d.onCompleted())}else f?(d.onNext(!1),d.onCompleted()):g.push(a)},function(a){d.onError(a)},function(){e=!0,0===g.length&&(h.length>0?(d.onNext(!1),d.onCompleted()):f&&(d.onNext(!0),d.onCompleted()))});(nb(a)||mb(a))&&(a=gd(a)),Xa(a)&&(a=Yc(a));var j=a.subscribe(function(a){if(g.length>0){var c=g.shift(),f=$a(b)(c,a);if(f===Za)return d.onError(f.e);f||(d.onNext(!1),d.onCompleted())}else e?(d.onNext(!1),d.onCompleted()):h.push(a)},function(a){d.onError(a)},function(){f=!0,0===h.length&&(g.length>0?(d.onNext(!1),d.onCompleted()):e&&(d.onNext(!0),d.onCompleted()))});return new cc(i,j)},c)};var Pe=function(a){function b(b,c,d){this.source=b,this._i=c,this._d=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Qe(a,this._i,this._d))},b}(Mc),Qe=function(b){function c(a,c,d){this._o=a,this._i=c,this._d=d,b.call(this)}return Pb(c,b),c.prototype.next=function(a){0===this._i--&&(this._o.onNext(a),this._o.onCompleted())},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._d===a?this._o.onError(new gb):(this._o.onNext(this._d),this._o.onCompleted())},c}(Gc);Fc.elementAt=function(a,b){if(0>a)throw new gb;return new Pe(this,a,b)};var Re=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,this._hv=!1,this._v=null,b.call(this)}return Pb(c,b),c.prototype.next=function(a){var b=!1;if(this._obj.predicate){var c=$a(this._obj.predicate)(a,this._i++,this._s);if(c===Za)return this._o.onError(c.e);Boolean(c)&&(b=!0)}else this._obj.predicate||(b=!0);if(b){if(this._hv)return this._o.onError(new Error("Sequence contains more than one matching element"));this._hv=!0,this._v=a}},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._hv?(this._o.onNext(this._v),this._o.onCompleted()):this._obj.defaultValue===a?this._o.onError(new eb):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Gc);Fc.single=function(a,b){var c={},d=this;if(c="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Ya(c.predicate)){var e=c.predicate;c.predicate=pb(e,c.thisArg,3)}return new ig(function(a){return d.subscribe(new Re(a,c,d))},d)};var Se=function(a){function b(b,c){this.source=b,this._obj=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Te(a,this._obj,this.source))},b}(Mc),Te=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,b.call(this)}return Pb(c,b),c.prototype.next=function(a){if(this._obj.predicate){var b=$a(this._obj.predicate)(a,this._i++,this._s);if(b===Za)return this._o.onError(b.e);Boolean(b)&&(this._o.onNext(a),this._o.onCompleted())}else this._obj.predicate||(this._o.onNext(a),this._o.onCompleted())},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._obj.defaultValue===a?this._o.onError(new eb):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Gc);Fc.first=function(){var a={};if(a="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Ya(a.predicate)){var b=a.predicate;a.predicate=pb(b,a.thisArg,3)}return new Se(this,a)};var Ue=function(a){function b(b,c){this.source=b,this._obj=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ve(a,this._obj,this.source))},b}(Mc),Ve=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,this._hv=!1,this._v=null,b.call(this)}return Pb(c,b),c.prototype.next=function(a){var b=!1;if(this._obj.predicate){var c=$a(this._obj.predicate)(a,this._i++,this._s);if(c===Za)return this._o.onError(c.e);Boolean(c)&&(b=!0)}else this._obj.predicate||(b=!0);b&&(this._hv=!0,this._v=a)},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._hv?(this._o.onNext(this._v),this._o.onCompleted()):this._obj.defaultValue===a?this._o.onError(new eb):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Gc);Fc.last=function(){var a={};if(a="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Ya(a.predicate)){var b=a.predicate;a.predicate=pb(b,a.thisArg,3)}return new Ue(this,a)};var We=function(a){function b(b,c,d,e){this._o=b,this._s=c,this._cb=d,this._y=e,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._cb)(a,this._i,this._s);return b===Za?this._o.onError(b.e):void(b?(this._o.onNext(this._y?this._i:a),this._o.onCompleted()):this._i++)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._y&&this._o.onNext(-1),this._o.onCompleted()},b}(Gc);Fc.find=function(a,b){return V(this,a,b,!1)},Fc.findIndex=function(a,b){return V(this,a,b,!0)};var Xe=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ye(a))},b}(Mc),Ye=function(a){function b(b){this._o=b,this._s=new Pa.Set,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._s.add(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._s),this._o.onCompleted()},b}(Gc);Fc.toSet=function(){if("undefined"==typeof Pa.Set)throw new TypeError;return new Xe(this)};var Ze=function(a){function b(b,c,d){this.source=b,this._k=c,this._e=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new $e(a,this._k,this._e))},b}(Mc),$e=function(a){function b(b,c,d){this._o=b,this._k=c,this._e=d,this._m=new Pa.Map,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._k)(a);if(b===Za)return this._o.onError(b.e);var c=a;return this._e&&(c=$a(this._e)(a),c===Za)?this._o.onError(c.e):void this._m.set(b,c)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._m),this._o.onCompleted()},b}(Gc);Fc.toMap=function(a,b){if("undefined"==typeof Pa.Map)throw new TypeError;return new Ze(this,a,b)};var _e=function(a){function b(b,c,d){this.source=b,this._b=c,this._e=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new af(a,this._b,this._e))},b}(Mc),af=function(a){function b(b,c,d){this._o=b,this._b=c,this._e=d,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._i>=this._b&&(this._e===this._i?this._o.onCompleted():this._o.onNext(a)),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.slice=function(a,b){var c=a||0;if(0>c)throw new Qa.ArgumentOutOfRangeError;if("number"==typeof b&&c>b)throw new Qa.ArgumentOutOfRangeError;return new _e(this,c,b)};var bf=function(a){function b(b,c,d){this.source=b,this._e=c,this._n=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(-1),a.onCompleted(),Yb):this.source.subscribe(new cf(a,this._e,this._n))},b}(Mc),cf=function(a){function b(b,c,d){this._o=b,this._e=c,this._n=d,this._v=0,this._hv=!1,this._i=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._i>=this._n&&a===this._e&&(this._hv=!0,this._v=this._i),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._hv?this._o.onNext(this._v):this._o.onNext(-1),this._o.onCompleted()},b}(Gc);Fc.lastIndexOf=function(a,b){var c=+b||0;return Math.abs(c)===1/0&&(c=0),new bf(this,a,c)},Lc.wrap=function(a){function b(){return Lc.spawn.call(this,a.apply(this,arguments))}return b.__generatorFunction__=a,b};var df=Lc.spawn=function(){for(var a=arguments[0],b=this,c=[],d=1,e=arguments.length;e>d;d++)c.push(arguments[d]);return new ig(function(d){function e(b){var c=$a(a.next).call(a,b);return c===Za?d.onError(c.e):void g(c)}function f(b){var c=$a(a.next).call(a,b);return c===Za?d.onError(c.e):void g(c)}function g(a){if(a.done)return d.onNext(a.value),void d.onCompleted();var c=W.call(b,a.value),g=null,i=!1;Lc.isObservable(c)?h.add(c.subscribe(function(a){i=!0,g=a},f,function(){i&&e(g)})):f(new TypeError("type not supported"))}var h=new Ub;return Ya(a)&&(a=a.apply(b,c)),a&&Ya(a.next)?(e(),h):(d.onNext(a),d.onCompleted())})};Lc.start=function(a,b,c){return ef(a,b,c)()};var ef=Lc.toAsync=function(a,b,c){return ic(c)||(c=uc),function(){var d=arguments,e=new ng;return c.schedule(null,function(){var c;try{c=a.apply(b,d)}catch(f){return void e.onError(f)}e.onNext(c),e.onCompleted()}),e.asObservable()}};Lc.fromCallback=function(a,b,c){return function(){"undefined"==typeof b&&(b=this);for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];return ba(a,b,c,e)}},Lc.fromNodeCallback=function(a,b,c){return function(){"undefined"==typeof b&&(b=this);for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];return da(a,b,c,e)}},ga.prototype.dispose=function(){this.isDisposed||(this._e.removeEventListener(this._n,this._fn,!1),this.isDisposed=!0)},Qa.config.useNativeEvents=!1;var ff=function(a){function b(b,c,d){this._el=b,this._n=c,this._fn=d,a.call(this)}function c(a,b){return function(){var c=arguments[0];return Ya(b)&&(c=$a(b).apply(null,arguments),c===Za)?a.onError(c.e):void a.onNext(c);
	}}return Pb(b,a),b.prototype.subscribeCore=function(a){return ha(this._el,this._n,c(a,this._fn))},b}(Mc);Lc.fromEvent=function(a,b,c){return a.addListener?hf(function(c){a.addListener(b,c)},function(c){a.removeListener(b,c)},c):Qa.config.useNativeEvents||"function"!=typeof a.on||"function"!=typeof a.off?new ff(a,b,c).publish().refCount():hf(function(c){a.on(b,c)},function(c){a.off(b,c)},c)};var gf=function(a){function b(b,c,d){this._add=b,this._del=c,this._fn=d,a.call(this)}function c(a,b){return function(){var c=arguments[0];return Ya(b)&&(c=$a(b).apply(null,arguments),c===Za)?a.onError(c.e):void a.onNext(c)}}function d(a,b,c){this._del=a,this._fn=b,this._ret=c,this.isDisposed=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=c(a,this._fn),e=this._add(b);return new d(this._del,b,e)},d.prototype.dispose=function(){this.isDisposed||Ya(this._del)&&this._del(this._fn,this._ret)},b}(Mc),hf=Lc.fromEventPattern=function(a,b,c){return new gf(a,b,c).publish().refCount()};Lc.startAsync=function(a){var b=$a(a)();return b===Za?td(b.e):Yc(b)};var jf=function(a){function b(b,c){this.source=b,this.controller=new mg,c&&c.subscribe?this.pauser=this.controller.merge(c):this.pauser=this.controller,a.call(this)}return Pb(b,a),b.prototype._subscribe=function(a){var b=this.source.publish(),c=b.subscribe(a),d=Yb,e=this.pauser.distinctUntilChanged().subscribe(function(a){a?d=b.connect():(d.dispose(),d=Yb)});return new dc([c,d,e])},b.prototype.pause=function(){this.controller.onNext(!1)},b.prototype.resume=function(){this.controller.onNext(!0)},b}(Lc);Fc.pausable=function(a){return new jf(this,a)};var kf=function(b){function c(a,c){this.source=a,this.controller=new mg,c&&c.subscribe?this.pauser=this.controller.merge(c):this.pauser=this.controller,b.call(this)}return Pb(c,b),c.prototype._subscribe=function(b){function c(){for(;e.length>0;)b.onNext(e.shift())}var d,e=[],f=ia(this.source,this.pauser.startWith(!1).distinctUntilChanged(),function(a,b){return{data:a,shouldFire:b}}).subscribe(function(f){d!==a&&f.shouldFire!==d?(d=f.shouldFire,f.shouldFire&&c()):(d=f.shouldFire,f.shouldFire?b.onNext(f.data):e.push(f.data))},function(a){c(),b.onError(a)},function(){c(),b.onCompleted()});return f},c.prototype.pause=function(){this.controller.onNext(!1)},c.prototype.resume=function(){this.controller.onNext(!0)},c}(Lc);Fc.pausableBuffered=function(a){return new kf(this,a)};var lf=function(a){function b(b,c,d){a.call(this),this.subject=new mf(c,d),this.source=b.multicast(this.subject).refCount()}return Pb(b,a),b.prototype._subscribe=function(a){return this.source.subscribe(a)},b.prototype.request=function(a){return this.subject.request(null==a?-1:a)},b}(Lc),mf=function(a){function b(b,c){null==b&&(b=!0),a.call(this),this.subject=new mg,this.enableQueue=b,this.queue=b?[]:null,this.requestedCount=0,this.requestedDisposable=null,this.error=null,this.hasFailed=!1,this.hasCompleted=!1,this.scheduler=c||pc}return Pb(b,a),Qb(b.prototype,Dc,{_subscribe:function(a){return this.subject.subscribe(a)},onCompleted:function(){this.hasCompleted=!0,this.enableQueue&&0!==this.queue.length?this.queue.push(wc.createOnCompleted()):(this.subject.onCompleted(),this.disposeCurrentRequest())},onError:function(a){this.hasFailed=!0,this.error=a,this.enableQueue&&0!==this.queue.length?this.queue.push(wc.createOnError(a)):(this.subject.onError(a),this.disposeCurrentRequest())},onNext:function(a){this.requestedCount<=0?this.enableQueue&&this.queue.push(wc.createOnNext(a)):(0===this.requestedCount--&&this.disposeCurrentRequest(),this.subject.onNext(a))},_processRequest:function(a){if(this.enableQueue)for(;this.queue.length>0&&(a>0||"N"!==this.queue[0].kind);){var b=this.queue.shift();b.accept(this.subject),"N"===b.kind?a--:(this.disposeCurrentRequest(),this.queue=[])}return a},request:function(a){this.disposeCurrentRequest();var b=this;return this.requestedDisposable=this.scheduler.schedule(a,function(a,c){var d=b._processRequest(c),e=b.hasCompleted||b.hasFailed;return!e&&d>0?(b.requestedCount=d,Xb(function(){b.requestedCount=0})):void 0}),this.requestedDisposable},disposeCurrentRequest:function(){this.requestedDisposable&&(this.requestedDisposable.dispose(),this.requestedDisposable=null)}}),b}(Lc);Fc.controlled=function(a,b){return a&&ic(a)&&(b=a,a=!0),null==a&&(a=!0),new lf(this,a,b)};var nf=function(a){function b(b){a.call(this),this.source=b}function c(a,b){b.source.request(1)}Pb(b,a),b.prototype._subscribe=function(a){return this.subscription=this.source.subscribe(new d(a,this,this.subscription)),new cc(this.subscription,uc.schedule(this,c))};var d=function(a){function c(b,c,d){a.call(this),this.observer=b,this.observable=c,this.cancel=d,this.scheduleDisposable=null}function d(a,b){b.observable.source.request(1)}return Pb(c,a),c.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},c.prototype.error=function(a){this.observer.onError(a),this.dispose()},c.prototype.next=function(a){this.observer.onNext(a),this.scheduleDisposable=uc.schedule(this,d)},b.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),a.prototype.dispose.call(this)},c}(Gc);return b}(Lc);lf.prototype.stopAndWait=function(){return new nf(this)};var of=function(a){function b(b,c){a.call(this),this.source=b,this.windowSize=c}function c(a,b){b.source.request(b.windowSize)}Pb(b,a),b.prototype._subscribe=function(a){return this.subscription=this.source.subscribe(new d(a,this,this.subscription)),new cc(this.subscription,uc.schedule(this,c))};var d=function(a){function b(b,c,d){this.observer=b,this.observable=c,this.cancel=d,this.received=0,this.scheduleDisposable=null,a.call(this)}function c(a,b){b.observable.source.request(b.observable.windowSize)}return Pb(b,a),b.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},b.prototype.error=function(a){this.observer.onError(a),this.dispose()},b.prototype.next=function(a){this.observer.onNext(a),this.received=++this.received%this.observable.windowSize,0===this.received&&(this.scheduleDisposable=uc.schedule(this,c))},b.prototype.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),a.prototype.dispose.call(this)},b}(Gc);return b}(Lc);lf.prototype.windowed=function(a){return new of(this,a)},Fc.pipe=function(a){function b(){c.resume()}var c=this.pausableBuffered();return a.addListener("drain",b),c.subscribe(function(b){!a.write(String(b))&&c.pause()},function(b){a.emit("error",b)},function(){!a._isStdio&&a.end(),a.removeListener("drain",b)}),c.resume(),a};var pf=function(a){function b(b,c,d){this.source=b,this._fn1=c,this._fn2=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=this.source.multicast(this._fn1());return new cc(this._fn2(b).subscribe(a),b.connect())},b}(Mc);Fc.multicast=function(a,b){return Ya(a)?new pf(this,a,b):new sf(this,a)},Fc.publish=function(a){return a&&Ya(a)?this.multicast(function(){return new mg},a):this.multicast(new mg)},Fc.share=function(){return this.publish().refCount()},Fc.publishLast=function(a){return a&&Ya(a)?this.multicast(function(){return new ng},a):this.multicast(new ng)},Fc.publishValue=function(a,b){return 2===arguments.length?this.multicast(function(){return new og(b)},a):this.multicast(new og(a))},Fc.shareValue=function(a){return this.publishValue(a).refCount()},Fc.replay=function(a,b,c,d){return a&&Ya(a)?this.multicast(function(){return new pg(b,c,d)},a):this.multicast(new pg(b,c,d))},Fc.shareReplay=function(a,b,c){return this.replay(null,a,b,c).refCount()};var qf=function(a,b){this._s=a,this._o=b};qf.prototype.dispose=function(){if(!this._s.isDisposed&&null!==this._o){var a=this._s.observers.indexOf(this._o);this._s.observers.splice(a,1),this._o=null}};var rf=function(a){function b(b){this.source=b,this._count=0,this._connectableSubscription=null,a.call(this)}function c(a,b){this._p=a,this._s=b,this.isDisposed=!1}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=1===++this._count,d=this.source.subscribe(a);return b&&(this._connectableSubscription=this.source.connect()),new c(this,d)},c.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._s.dispose(),0===--this._p._count&&this._p._connectableSubscription.dispose())},b}(Mc),sf=Qa.ConnectableObservable=function(a){function b(b,c){this.source=b,this._hasSubscription=!1,this._subscription=null,this._sourceObservable=b.asObservable(),this._subject=c,a.call(this)}function c(a){this._p=a,this.isDisposed=!1}return Pb(b,a),c.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._p._hasSubscription=!1)},b.prototype.connect=function(){return this._hasSubscription||(this._hasSubscription=!0,this._subscription=new cc(this._sourceObservable.subscribe(this._subject),new c(this))),this._subscription},b.prototype._subscribe=function(a){return this._subject.subscribe(a)},b.prototype.refCount=function(){return new rf(this)},b}(Lc);Fc.singleInstance=function(){function a(){return d||(d=!0,b=c["finally"](function(){d=!1}).publish().refCount()),b}var b,c=this,d=!1;return new ig(function(b){return a().subscribe(b)})},Fc.join=function(a,b,c,d){var e=this;return new ig(function(f){var g=new Ub,h=!1,i=!1,j=0,k=0,l=new Cf,m=new Cf,n=function(a){f.onError(a)};return g.add(e.subscribe(function(a){var c=j++,e=new ac;l.set(c,a),g.add(e);var i=$a(b)(a);return i===Za?f.onError(i.e):(e.setDisposable(i.take(1).subscribe(Ra,n,function(){l["delete"](c)&&0===l.size&&h&&f.onCompleted(),g.remove(e)})),void m.forEach(function(b){var c=$a(d)(a,b);return c===Za?f.onError(c.e):void f.onNext(c)}))},n,function(){h=!0,(i||0===l.size)&&f.onCompleted()})),g.add(a.subscribe(function(a){var b=k++,e=new ac;m.set(b,a),g.add(e);var h=$a(c)(a);return h===Za?f.onError(h.e):(e.setDisposable(h.take(1).subscribe(Ra,n,function(){m["delete"](b)&&0===m.size&&i&&f.onCompleted(),g.remove(e)})),void l.forEach(function(b){var c=$a(d)(b,a);return c===Za?f.onError(c.e):void f.onNext(c)}))},n,function(){i=!0,(h||0===m.size)&&f.onCompleted()})),g},e)},Fc.groupJoin=function(a,b,c,d){var e=this;return new ig(function(f){function g(a){}var h=new Ub,i=new ec(h),j=new Cf,k=new Cf,l=0,m=0,g=function(a){return function(b){b.onError(a)}};return h.add(e.subscribe(function(a){var c=new mg,e=l++;j.set(e,c);var m=$a(d)(a,Rb(c,i));if(m===Za)return j.forEach(g(m.e)),f.onError(m.e);f.onNext(m),k.forEach(function(a){c.onNext(a)});var n=new ac;h.add(n);var o=$a(b)(a);return o===Za?(j.forEach(g(o.e)),f.onError(o.e)):void n.setDisposable(o.take(1).subscribe(Ra,function(a){j.forEach(g(a)),f.onError(a)},function(){j["delete"](e)&&c.onCompleted(),h.remove(n)}))},function(a){j.forEach(g(a)),f.onError(a)},function(){f.onCompleted()})),h.add(a.subscribe(function(a){var b=m++;k.set(b,a);var d=new ac;h.add(d);var e=$a(c)(a);return e===Za?(j.forEach(g(e.e)),f.onError(e.e)):(d.setDisposable(e.take(1).subscribe(Ra,function(a){j.forEach(g(a)),f.onError(a)},function(){k["delete"](b),h.remove(d)})),void j.forEach(function(b){b.onNext(a)}))},function(a){j.forEach(g(a)),f.onError(a)})),i},e)},Fc.buffer=function(){return this.window.apply(this,arguments).flatMap(O)},Fc.window=function(a,b){return 1===arguments.length&&"function"!=typeof arguments[0]?ka.call(this,a):"function"==typeof a?la.call(this,a):ja.call(this,a,b)};var tf=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new uf(a))},b}(Mc),uf=function(a){function b(a){this._o=a,this._p=null,this._hp=!1}return Pb(b,a),b.prototype.next=function(a){this._hp?this._o.onNext([this._p,a]):this._hp=!0,this._p=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.pairwise=function(){return new tf(this)},Fc.partition=function(a,b){var c=pb(a,b,3);return[this.filter(a,b),this.filter(function(a,b,d){return!c(a,b,d)})]};var vf=function(a){function b(a,b){this.c=a,this.s=b}return Pb(b,a),b.prototype[kb]=function(){var a=this;return{next:function(){return a.c()?{done:!1,value:a.s}:{done:!0,value:void 0}}}},b}(Oc);Fc.letBind=Fc.let=function(a){return a(this)},Lc["if"]=function(a,b,c){return _c(function(){return c||(c=cd()),Xa(b)&&(b=Yc(b)),Xa(c)&&(c=Yc(c)),"function"==typeof c.now&&(c=cd(c)),a()?b:c})},Lc["for"]=Lc.forIn=function(a,b,c){return Uc(a,b,c).concat()};var wf=Lc["while"]=Lc.whileDo=function(a,b){return Xa(b)&&(b=Yc(b)),ma(a,b).concat()};Fc.doWhile=function(a){return Cd([this,wf(a,this)])},Lc["case"]=function(a,b,c){return _c(function(){Xa(c)&&(c=Yc(c)),c||(c=cd()),ic(c)&&(c=cd(c));var d=b[a()];return Xa(d)&&(d=Yc(d)),d||c})};var xf=function(a){function b(b,c,d){this.source=b,this._fn=c,this._scheduler=d,a.call(this)}function c(a,b){var c,d=a[0],e=a[1];if(!(d.q.length>0))return void(d.isAcquired=!1);c=d.q.shift();var f=new ac;d.d.add(f),f.setDisposable(c.subscribe(new yf(d,e,f))),b([d,e])}return Pb(b,a),b.prototype._ensureActive=function(a){var b=!1;a.q.length>0&&(b=!a.isAcquired,a.isAcquired=!0),b&&a.m.setDisposable(this._scheduler.scheduleRecursive([a,this],c))},b.prototype.subscribeCore=function(a){var b=new bc,c=new Ub(b),d={q:[],m:b,d:c,activeCount:0,isAcquired:!1,o:a};return d.q.push(this.source),d.activeCount++,this._ensureActive(d),c},b}(Mc),yf=function(a){function b(b,c,d){this._s=b,this._p=c,this._m1=d,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._s.o.onNext(a);var b=$a(this._p._fn)(a);return b===Za?this._s.o.onError(b.e):(this._s.q.push(b),this._s.activeCount++,void this._p._ensureActive(this._s))},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.d.remove(this._m1),this._s.activeCount--,0===this._s.activeCount&&this._s.o.onCompleted()},b}(Gc);Fc.expand=function(a,b){return ic(b)||(b=pc),new xf(this,a,b)};var zf=function(a){function b(b,c){this._sources=b,this._cb=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){if(0===this._sources.length)return a.onCompleted(),Yb;for(var b=this._sources.length,c={finished:!1,hasResults:new Array(b),hasCompleted:new Array(b),results:new Array(b)},d=new Ub,e=0,f=this._sources.length;f>e;e++){var g=this._sources[e];Xa(g)&&(g=Yc(g)),d.add(g.subscribe(new Af(a,c,e,this._cb,d)))}return d},b}(Mc),Af=function(a){function b(b,c,d,e,f){this._o=b,this._s=c,this._i=d,this._cb=e,this._subs=f,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._s.finished||(this._s.hasResults[this._i]=!0,this._s.results[this._i]=a)},b.prototype.error=function(a){this._s.finished=!0,this._o.onError(a),this._subs.dispose()},b.prototype.completed=function(){if(!this._s.finished){if(!this._s.hasResults[this._i])return this._o.onCompleted();this._s.hasCompleted[this._i]=!0;for(var a=0;a<this._s.results.length;a++)if(!this._s.hasCompleted[a])return;this._s.finished=!0;var b=$a(this._cb).apply(null,this._s.results);if(b===Za)return this._o.onError(b.e);this._o.onNext(b),this._o.onCompleted()}},b}(Gc);Lc.forkJoin=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Ya(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new zf(b,d)},Fc.forkJoin=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return Array.isArray(b[0])?b[0].unshift(this):b.unshift(this),Lc.forkJoin.apply(null,b)},Fc.manySelect=Fc.extend=function(a,b){ic(b)||(b=Qa.Scheduler.immediate);var c=this;return _c(function(){var d;return c.map(function(a){var b=new Bf(a);return d&&d.onNext(a),d=b,b}).tap(Ra,function(a){d&&d.onError(a)},function(){d&&d.onCompleted()}).observeOn(b).map(a)},c)};var Bf=function(a){function b(b){a.call(this),this.head=b,this.tail=new ng}return Pb(b,a),Qb(b.prototype,Dc,{_subscribe:function(a){var b=new Ub;return b.add(pc.schedule(this,function(c,d){a.onNext(d.head),b.add(d.tail.mergeAll().subscribe(a))})),b},onCompleted:function(){this.onNext(Lc.empty())},onError:function(a){this.onNext(Lc["throw"](a))},onNext:function(a){this.tail.onNext(a),this.tail.onCompleted()}}),b}(Lc),Cf=Pa.Map||function(){function b(){this.size=0,this._values=[],this._keys=[]}return b.prototype["delete"]=function(a){var b=this._keys.indexOf(a);return-1===b?!1:(this._values.splice(b,1),this._keys.splice(b,1),this.size--,!0)},b.prototype.get=function(b){var c=this._keys.indexOf(b);return-1===c?a:this._values[c]},b.prototype.set=function(a,b){var c=this._keys.indexOf(a);return-1===c?(this._keys.push(a),this._values.push(b),this.size++):this._values[c]=b,this},b.prototype.forEach=function(a,b){for(var c=0;c<this.size;c++)a.call(b,this._values[c],this._keys[c])},b}();na.prototype.and=function(a){return new na(this.patterns.concat(a))},na.prototype.thenDo=function(a){return new oa(this,a)},oa.prototype.activate=function(a,b,c){for(var d=[],e=pa(b),f=0,g=this.expression.patterns.length;g>f;f++)d.push(ra(a,this.expression.patterns[f],e));var h=new sa(d,qa(this,b),function(){for(var a=0,b=d.length;b>a;a++)d[a].removeActivePlan(h);c(h)});for(f=0,g=d.length;g>f;f++)d[f].addActivePlan(h);return h},sa.prototype.dequeue=function(){this.joinObservers.forEach(function(a){a.queue.shift()})},sa.prototype.match=function(){var a,b,c=!0;for(a=0,b=this.joinObserverArray.length;b>a;a++)if(0===this.joinObserverArray[a].queue.length){c=!1;break}if(c){var d=[],e=!1;for(a=0,b=this.joinObserverArray.length;b>a;a++)d.push(this.joinObserverArray[a].queue[0]),"C"===this.joinObserverArray[a].queue[0].kind&&(e=!0);if(e)this.onCompleted();else{this.dequeue();var f=[];for(a=0,b=d.length;a<d.length;a++)f.push(d[a].value);this.onNext.apply(this,f)}}};var Df=function(a){function b(b,c){a.call(this),this.source=b,this.onError=c,this.queue=[],this.activePlans=[],this.subscription=new ac,this.isDisposed=!1}Pb(b,a);var c=b.prototype;return c.next=function(a){if(!this.isDisposed){if("E"===a.kind)return this.onError(a.error);this.queue.push(a);for(var b=this.activePlans.slice(0),c=0,d=b.length;d>c;c++)b[c].match()}},c.error=Ra,c.completed=Ra,c.addActivePlan=function(a){this.activePlans.push(a)},c.subscribe=function(){this.subscription.setDisposable(this.source.materialize().subscribe(this))},c.removeActivePlan=function(a){this.activePlans.splice(this.activePlans.indexOf(a),1),0===this.activePlans.length&&this.dispose()},c.dispose=function(){a.prototype.dispose.call(this),this.isDisposed||(this.isDisposed=!0,this.subscription.dispose())},b}(Gc);Fc.and=function(a){return new na([this,a])},Fc.thenDo=function(a){return new na([this]).thenDo(a)},Lc.when=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new ig(function(b){var c=[],d=new Cf,e=Ec(function(a){b.onNext(a)},function(a){d.forEach(function(b){b.onError(a)}),b.onError(a)},function(a){b.onCompleted()});try{for(var f=0,g=a.length;g>f;f++)c.push(a[f].activate(d,e,function(a){var d=c.indexOf(a);c.splice(d,1),0===c.length&&b.onCompleted()}))}catch(h){td(h).subscribe(b)}var i=new Ub;return d.forEach(function(a){a.subscribe(),i.add(a)}),i})};var Ef=function(a){function b(b,c){this._dt=b,this._s=c,a.call(this)}function c(a,b){b.onNext(0),b.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._s.scheduleFuture(a,this._dt,c)},b}(Mc),Ff=Lc.interval=function(a,b){return va(a,a,ic(b)?b:uc)};Lc.timer=function(b,c,d){var e;return ic(d)||(d=uc),null!=c&&"number"==typeof c?e=c:ic(c)&&(d=c),(b instanceof Date||"number"==typeof b)&&e===a?ta(b,d):b instanceof Date&&e!==a?ua(b.getTime(),c,d):va(b,e,d)};Fc.delay=function(){var a=arguments[0];if("number"==typeof a||a instanceof Date){var b=a,c=arguments[1];return ic(c)||(c=uc),b instanceof Date?xa(this,b,c):wa(this,b,c)}if(Lc.isObservable(a)||Ya(a))return ya(this,a,arguments[1]);throw new Error("Invalid arguments")};var Gf=function(a){function b(b,c,d){ic(d)||(d=uc),this.source=b,this._dt=c,this._s=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new bc;return new cc(this.source.subscribe(new Hf(a,this.source,this._dt,this._s,b)),b)},b}(Mc),Hf=function(a){function b(b,c,d,e,f){this._o=b,this._s=c,this._d=d,this._scheduler=e,this._c=f,this._v=null,this._hv=!1,this._id=0,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._hv=!0,this._v=a;var b=++this._id,c=new ac;this._c.setDisposable(c),c.setDisposable(this._scheduler.scheduleFuture(this,this._d,function(c,d){d._hv&&d._id===b&&d._o.onNext(a),d._hv=!1}))},b.prototype.error=function(a){this._c.dispose(),this._o.onError(a),this._hv=!1,this._id++},b.prototype.completed=function(){this._c.dispose(),this._hv&&this._o.onNext(this._v),this._o.onCompleted(),this._hv=!1,this._id++},b}(Gc);Fc.debounce=function(){if(Ya(arguments[0]))return za(this,arguments[0]);if("number"==typeof arguments[0])return new Gf(this,arguments[0],arguments[1]);throw new Error("Invalid arguments")},Fc.windowWithTime=function(a,b,c){var d,e=this;return null==b&&(d=a),ic(c)||(c=uc),"number"==typeof b?d=b:ic(b)&&(d=a,c=b),new ig(function(b){function f(){var a=new ac,e=!1,g=!1;l.setDisposable(a),j===i?(e=!0,g=!0):i>j?e=!0:g=!0;var n=e?j:i,o=n-m;m=n,e&&(j+=d),g&&(i+=d),a.setDisposable(c.scheduleFuture(null,o,function(){if(g){var a=new mg;k.push(a),b.onNext(Rb(a,h))}e&&k.shift().onCompleted(),f()}))}var g,h,i=d,j=a,k=[],l=new bc,m=0;return g=new Ub(l),h=new ec(g),k.push(new mg),b.onNext(Rb(k[0],h)),f(),g.add(e.subscribe(function(a){for(var b=0,c=k.length;c>b;b++)k[b].onNext(a)},function(a){for(var c=0,d=k.length;d>c;c++)k[c].onError(a);b.onError(a)},function(){for(var a=0,c=k.length;c>a;a++)k[a].onCompleted();b.onCompleted()})),h},e)},Fc.windowWithTimeOrCount=function(a,b,c){var d=this;return ic(c)||(c=uc),new ig(function(e){function f(b){var d=new ac;g.setDisposable(d),d.setDisposable(c.scheduleFuture(null,a,function(){if(b===k){j=0;var a=++k;l.onCompleted(),l=new mg,e.onNext(Rb(l,i)),f(a)}}))}var g=new bc,h=new Ub(g),i=new ec(h),j=0,k=0,l=new mg;return e.onNext(Rb(l,i)),f(0),h.add(d.subscribe(function(a){var c=0,d=!1;l.onNext(a),++j===b&&(d=!0,j=0,c=++k,l.onCompleted(),l=new mg,e.onNext(Rb(l,i))),d&&f(c)},function(a){l.onError(a),e.onError(a)},function(){l.onCompleted(),e.onCompleted()})),i},d)},Fc.bufferWithTime=function(a,b,c){return this.windowWithTime(a,b,c).flatMap(O)},Fc.bufferWithTimeOrCount=function(a,b,c){return this.windowWithTimeOrCount(a,b,c).flatMap(O)};var If=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Jf(a,this._s))},b}(Mc),Jf=function(a){function b(b,c){this._o=b,this._s=c,this._l=c.now(),a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=this._s.now(),c=b-this._l;this._l=b,this._o.onNext({value:a,interval:c})},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.timeInterval=function(a){return ic(a)||(a=uc),new If(this,a)};var Kf=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Lf(a,this._s))},b}(Mc),Lf=function(a){function b(b,c){this._o=b,this._s=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._o.onNext({value:a,timestamp:this._s.now()})},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.timestamp=function(a){return ic(a)||(a=uc),new Kf(this,a)},Fc.sample=Fc.throttleLatest=function(a,b){return ic(b)||(b=uc),"number"==typeof a?Aa(this,Ff(a,b)):Aa(this,a)};var Mf=Qa.TimeoutError=function(a){this.message=a||"Timeout has occurred",this.name="TimeoutError",Error.call(this)};Mf.prototype=Object.create(Error.prototype),Fc.timeout=function(){var a=arguments[0];if(a instanceof Date||"number"==typeof a)return Ca(this,a,arguments[1],arguments[2]);if(Lc.isObservable(a)||Ya(a))return Ba(this,a,arguments[1],arguments[2]);throw new Error("Invalid arguments")};var Nf=function(a){function b(b,c,d,e,f,g){this._state=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._timeFn=f,this._s=g,this._first=!0,this._hasResult=!1,a.call(this)}function c(a,b){if(a._hasResult&&a._o.onNext(a._state),a._first)a._first=!1;else if(a._state=$a(a._itrFn)(a._state),a._state===Za)return a._o.onError(a._state.e);if(a._hasResult=$a(a._cndFn)(a._state),a._hasResult===Za)return a._o.onError(a._hasResult.e);if(a._hasResult){var c=$a(a._resFn)(a._state);if(c===Za)return a._o.onError(c.e);var d=$a(a._timeFn)(a._state);if(d===Za)return a._o.onError(d.e);b(a,d)}else a._o.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._o=a,this._s.scheduleRecursiveFuture(this,new Date(this._s.now()),c)},b}(Mc);Lc.generateWithAbsoluteTime=function(a,b,c,d,e,f){return ic(f)||(f=uc),new Nf(a,b,c,d,e,f)};var Of=function(a){function b(b,c,d,e,f,g){this._state=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._timeFn=f,this._s=g,this._first=!0,this._hasResult=!1,a.call(this)}function c(a,b){if(a._hasResult&&a._o.onNext(a._state),a._first)a._first=!1;else if(a._state=$a(a._itrFn)(a._state),a._state===Za)return a._o.onError(a._state.e);if(a._hasResult=$a(a._cndFn)(a._state),a._hasResult===Za)return a._o.onError(a._hasResult.e);if(a._hasResult){var c=$a(a._resFn)(a._state);if(c===Za)return a._o.onError(c.e);var d=$a(a._timeFn)(a._state);if(d===Za)return a._o.onError(d.e);b(a,d)}else a._o.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._o=a,this._s.scheduleRecursiveFuture(this,0,c)},b}(Mc);Lc.generateWithRelativeTime=function(a,b,c,d,e,f){return ic(f)||(f=uc),new Of(a,b,c,d,e,f)};var Pf=function(a){function b(b,c,d){this.source=b,this._dt=c,this._s=d,a.call(this)}function c(a,b){var c=b[0],d=b[1],e=b[2];e.setDisposable(c.subscribe(d))}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new bc;return b.setDisposable(this._s.scheduleFuture([this.source,a,b],this._dt,c)),b},b}(Mc);Fc.delaySubscription=function(a,b){return ic(b)||(b=uc),new Pf(this,a,b)};var Qf=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Rf(a,this))},b}(Mc),Rf=function(a){function b(b,c){this._o=b,this._s=c._s,this._d=c._d,this._q=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=this._s.now();for(this._q.push({interval:b,value:a});this._q.length>0&&b-this._q[0].interval>=this._d;)this._o.onNext(this._q.shift().value)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(var a=this._s.now();this._q.length>0&&a-this._q[0].interval>=this._d;)this._o.onNext(this._q.shift().value);this._o.onCompleted()},b}(Gc);Fc.skipLastWithTime=function(a,b){return ic(b)||(b=uc),new Qf(this,a,b)};var Sf=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Tf(a,this._d,this._s))},b}(Mc),Tf=function(a){function b(b,c,d){this._o=b,this._d=c,this._s=d,this._q=[],a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=this._s.now();for(this._q.push({interval:b,value:a});this._q.length>0&&b-this._q[0].interval>=this._d;)this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(var a=this._s.now();this._q.length>0;){var b=this._q.shift();a-b.interval<=this._d&&this._o.onNext(b.value)}this._o.onCompleted()},b}(Gc);Fc.takeLastWithTime=function(a,b){return ic(b)||(b=uc),new Sf(this,a,b)},Fc.takeLastBufferWithTime=function(a,b){var c=this;return ic(b)||(b=uc),new ig(function(d){var e=[];return c.subscribe(function(c){var d=b.now();for(e.push({interval:d,value:c});e.length>0&&d-e[0].interval>=a;)e.shift()},function(a){d.onError(a)},function(){for(var c=b.now(),f=[];e.length>0;){var g=e.shift();c-g.interval<=a&&f.push(g.value)}d.onNext(f),d.onCompleted()})},c)};var Uf=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}function c(a,b){b.onCompleted()}return Pb(b,a),b.prototype.subscribeCore=function(a){return new cc(this._s.scheduleFuture(a,this._d,c),this.source.subscribe(a))},b}(Mc);Fc.takeWithTime=function(a,b){return ic(b)||(b=uc),new Uf(this,a,b)};var Vf=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,this._open=!1,a.call(this)}function c(a,b){b._open=!0}return Pb(b,a),b.prototype.subscribeCore=function(a){return new cc(this._s.scheduleFuture(this,this._d,c),this.source.subscribe(new Wf(a,this)))},b}(Mc),Wf=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.skipWithTime=function(a,b){return ic(b)||(b=uc),new Vf(this,a,b)};var Xf=function(a){function b(b,c,d){this.source=b,this._st=c,this._s=d,a.call(this)}function c(a,b){b._open=!0}return Pb(b,a),b.prototype.subscribeCore=function(a){return this._open=!1,new cc(this._s.scheduleFuture(this,this._st,c),this.source.subscribe(new Yf(a,this)))},b}(Mc),Yf=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Gc);Fc.skipUntilWithTime=function(a,b){return ic(b)||(b=uc),new Xf(this,a,b)},Fc.takeUntilWithTime=function(a,b){ic(b)||(b=uc);var c=this;return new ig(function(d){return new cc(b.scheduleFuture(d,a,function(a,b){b.onCompleted()}),c.subscribe(d))},c)},Fc.throttle=function(a,b){ic(b)||(b=uc);var c=+a||0;if(0>=c)throw new RangeError("windowDuration cannot be less or equal zero.");var d=this;return new ig(function(a){var e=0;return d.subscribe(function(d){var f=b.now();(0===e||f-e>=c)&&(e=f,a.onNext(d))},function(b){a.onError(b)},function(){a.onCompleted()})},d)};var Zf=function(a){function b(b,c){this._o=b,this._xform=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){var b=$a(this._xform["@@transducer/step"]).call(this._xform,this._o,a);b===Za&&this._o.onError(b.e)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._xform["@@transducer/result"](this._o)},b}(Gc);Fc.transduce=function(a){var b=this;return new ig(function(c){var d=a(Da(c));return b.subscribe(new Zf(c,d))},b)};var $f=function(a){function b(b){this.source=b,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){var b=new ac,c=new Ub,d={hasCurrent:!1,isStopped:!1,o:a,g:c};return c.add(b),b.setDisposable(this.source.subscribe(new _f(d))),c},b}(Mc),_f=function(a){function b(b){this._s=b,a.call(this)}function c(b,c){this._s=b,this._i=c,a.call(this)}return Pb(b,a),b.prototype.next=function(a){if(!this._s.hasCurrent){this._s.hasCurrent=!0,Xa(a)&&(a=Yc(a));var b=new ac;this._s.g.add(b),b.setDisposable(a.subscribe(new c(this._s,b)))}},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.isStopped=!0,!this._s.hasCurrent&&1===this._s.g.length&&this._s.o.onCompleted()},Pb(c,a),c.prototype.next=function(a){this._s.o.onNext(a)},c.prototype.error=function(a){this._s.o.onError(a)},c.prototype.completed=function(){this._s.g.remove(this._i),this._s.hasCurrent=!1,this._s.isStopped&&1===this._s.g.length&&this._s.o.onCompleted()},b}(Gc);Fc.switchFirst=function(){return new $f(this)},Fc.flatMapFirst=Fc.selectManyFirst=function(a,b,c){return new Nc(this,a,b,c).switchFirst()},Qa.Observable.prototype.flatMapWithMaxConcurrent=function(a,b,c,d){return new Nc(this,b,c,d).merge(a)};var ag=Qa.VirtualTimeScheduler=function(a){function b(b,c){this.clock=b,this.comparer=c,this.isEnabled=!1,this.queue=new Sb(1024),a.call(this)}Pb(b,a);var c=b.prototype;return c.now=function(){return this.toAbsoluteTime(this.clock)},c.schedule=function(a,b){return this.scheduleAbsolute(a,this.clock,b)},c.scheduleFuture=function(a,b,c){var d=b instanceof Date?this.toRelativeTime(b-this.now()):this.toRelativeTime(b);
	return this.scheduleRelative(a,d,c)},c.add=jb,c.toAbsoluteTime=jb,c.toRelativeTime=jb,c.schedulePeriodic=function(a,b,c){var d=new lc(this,a,b,c);return d.start()},c.scheduleRelative=function(a,b,c){var d=this.add(this.clock,b);return this.scheduleAbsolute(a,d,c)},c.start=function(){if(!this.isEnabled){this.isEnabled=!0;do{var a=this.getNext();null!==a?(this.comparer(a.dueTime,this.clock)>0&&(this.clock=a.dueTime),a.invoke()):this.isEnabled=!1}while(this.isEnabled)}},c.stop=function(){this.isEnabled=!1},c.advanceTo=function(a){var b=this.comparer(this.clock,a);if(this.comparer(this.clock,a)>0)throw new gb;if(0!==b&&!this.isEnabled){this.isEnabled=!0;do{var c=this.getNext();null!==c&&this.comparer(c.dueTime,a)<=0?(this.comparer(c.dueTime,this.clock)>0&&(this.clock=c.dueTime),c.invoke()):this.isEnabled=!1}while(this.isEnabled);this.clock=a}},c.advanceBy=function(a){var b=this.add(this.clock,a),c=this.comparer(this.clock,b);if(c>0)throw new gb;0!==c&&this.advanceTo(b)},c.sleep=function(a){var b=this.add(this.clock,a);if(this.comparer(this.clock,b)>=0)throw new gb;this.clock=b},c.getNext=function(){for(;this.queue.length>0;){var a=this.queue.peek();if(!a.isCancelled())return a;this.queue.dequeue()}return null},c.scheduleAbsolute=function(a,b,c){function d(a,b){return e.queue.remove(f),c(a,b)}var e=this,f=new fc(this,a,d,b,this.comparer);return this.queue.enqueue(f),f.disposable},b}(gc);Qa.HistoricalScheduler=function(a){function b(b,c){var d=null==b?0:b,e=c||Va;a.call(this,d,e)}Pb(b,a);var c=b.prototype;return c.add=function(a,b){return a+b},c.toAbsoluteTime=function(a){return new Date(a).getTime()},c.toRelativeTime=function(a){return a},b}(Qa.VirtualTimeScheduler),Ea.prototype.equals=function(a){return a===this?!0:null==a?!1:"N"!==a.kind?!1:this.predicate(a.value)},Fa.prototype.equals=function(a){return a===this?!0:null==a?!1:"E"!==a.kind?!1:this.predicate(a.error)};var bg=Qa.ReactiveTest={created:100,subscribed:200,disposed:1e3,onNext:function(a,b){return"function"==typeof b?new cg(a,new Ea(b)):new cg(a,wc.createOnNext(b))},onError:function(a,b){return"function"==typeof b?new cg(a,new Fa(b)):new cg(a,wc.createOnError(b))},onCompleted:function(a){return new cg(a,wc.createOnCompleted())},subscribe:function(a,b){return new dg(a,b)}},cg=Qa.Recorded=function(a,b,c){this.time=a,this.value=b,this.comparer=c||Ua};cg.prototype.equals=function(a){return this.time===a.time&&this.comparer(this.value,a.value)},cg.prototype.toString=function(){return this.value.toString()+"@"+this.time};var dg=Qa.Subscription=function(a,b){this.subscribe=a,this.unsubscribe=b||Number.MAX_VALUE};dg.prototype.equals=function(a){return this.subscribe===a.subscribe&&this.unsubscribe===a.unsubscribe},dg.prototype.toString=function(){return"("+this.subscribe+", "+(this.unsubscribe===Number.MAX_VALUE?"Infinite":this.unsubscribe)+")"};var eg=Qa.MockDisposable=function(a){this.scheduler=a,this.disposes=[],this.disposes.push(this.scheduler.clock)};eg.prototype.dispose=function(){this.disposes.push(this.scheduler.clock)};var fg=function(a){function b(b){a.call(this),this.scheduler=b,this.messages=[]}Pb(b,a);var c=b.prototype;return c.onNext=function(a){this.messages.push(new cg(this.scheduler.clock,wc.createOnNext(a)))},c.onError=function(a){this.messages.push(new cg(this.scheduler.clock,wc.createOnError(a)))},c.onCompleted=function(){this.messages.push(new cg(this.scheduler.clock,wc.createOnCompleted()))},b}(Dc);Ga.prototype.then=function(b,c){var d=this;this.subscriptions.push(new dg(this.scheduler.clock));var e,f=this.subscriptions.length-1,g=Qa.Observer.create(function(c){var h=b(c);if(h&&"function"==typeof h.then)e=h;else{var i=d.scheduler.clock;e=new Ga(d.scheduler,[Qa.ReactiveTest.onNext(i,a),Qa.ReactiveTest.onCompleted(i)])}var j=d.observers.indexOf(g);d.observers.splice(j,1),d.subscriptions[f]=new dg(d.subscriptions[f].subscribe,d.scheduler.clock)},function(a){c(a);var b=d.observers.indexOf(g);d.observers.splice(b,1),d.subscriptions[f]=new dg(d.subscriptions[f].subscribe,d.scheduler.clock)});return this.observers.push(g),e||new Ga(this.scheduler,this.messages)};var gg=function(a){function b(b,c){a.call(this);var d,e,f=this;this.scheduler=b,this.messages=c,this.subscriptions=[],this.observers=[];for(var g=0,h=this.messages.length;h>g;g++)d=this.messages[g],e=d.value,function(a){b.scheduleAbsolute(null,d.time,function(){for(var b=f.observers.slice(0),c=0,d=b.length;d>c;c++)a.accept(b[c]);return Yb})}(e)}return Pb(b,a),b.prototype._subscribe=function(a){var b=this;this.observers.push(a),this.subscriptions.push(new dg(this.scheduler.clock));var c=this.subscriptions.length-1;return Xb(function(){var d=b.observers.indexOf(a);b.observers.splice(d,1),b.subscriptions[c]=new dg(b.subscriptions[c].subscribe,b.scheduler.clock)})},b}(Lc),hg=function(a){function b(b,c){a.call(this),this.scheduler=b,this.messages=c,this.subscriptions=[]}return Pb(b,a),b.prototype._subscribe=function(a){var b,c,d=this;this.subscriptions.push(new dg(this.scheduler.clock));for(var e=this.subscriptions.length-1,f=new Ub,g=0,h=this.messages.length;h>g;g++)b=this.messages[g],c=b.value,function(c){f.add(d.scheduler.scheduleRelative(null,b.time,function(){return c.accept(a),Yb}))}(c);return Xb(function(){d.subscriptions[e]=new dg(d.subscriptions[e].subscribe,d.scheduler.clock),f.dispose()})},b}(Lc);Qa.TestScheduler=function(a){function b(a,b){return a>b?1:b>a?-1:0}function c(){a.call(this,0,b)}return Pb(c,a),c.prototype.scheduleAbsolute=function(b,c,d){return c<=this.clock&&(c=this.clock+1),a.prototype.scheduleAbsolute.call(this,b,c,d)},c.prototype.add=function(a,b){return a+b},c.prototype.toAbsoluteTime=function(a){return new Date(a).getTime()},c.prototype.toRelativeTime=function(a){return a},c.prototype.startScheduler=function(a,b){b||(b={}),null==b.created&&(b.created=bg.created),null==b.subscribed&&(b.subscribed=bg.subscribed),null==b.disposed&&(b.disposed=bg.disposed);var c,d,e=this.createObserver();return this.scheduleAbsolute(null,b.created,function(){return c=a(),Yb}),this.scheduleAbsolute(null,b.subscribed,function(){return d=c.subscribe(e),Yb}),this.scheduleAbsolute(null,b.disposed,function(){return d.dispose(),Yb}),this.start(),e},c.prototype.createHotObservable=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new gg(this,a)},c.prototype.createColdObservable=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new hg(this,a)},c.prototype.createResolvedPromise=function(a,b){return new Ga(this,[Qa.ReactiveTest.onNext(a,b),Qa.ReactiveTest.onCompleted(a)])},c.prototype.createRejectedPromise=function(a,b){return new Ga(this,[Qa.ReactiveTest.onError(a,b)])},c.prototype.createObserver=function(){return new fg(this)},c}(ag);var ig=Qa.AnonymousObservable=function(a){function b(a){return a&&Ya(a.dispose)?a:Ya(a)?Xb(a):Yb}function c(a,c){var d=c[0],f=c[1],g=$a(f.__subscribe).call(f,d);g!==Za||d.fail(Za.e)||e(Za.e),d.setDisposable(b(g))}function d(b,c){this.source=c,this.__subscribe=b,a.call(this)}return Pb(d,a),d.prototype._subscribe=function(a){var b=new jg(a),d=[b,this];return pc.scheduleRequired()?pc.schedule(d,c):c(null,d),b},d}(Lc),jg=function(a){function b(b){a.call(this),this.observer=b,this.m=new ac}Pb(b,a);var c=b.prototype;return c.next=function(a){var b=$a(this.observer.onNext).call(this.observer,a);b===Za&&(this.dispose(),e(b.e))},c.error=function(a){var b=$a(this.observer.onError).call(this.observer,a);this.dispose(),b===Za&&e(b.e)},c.completed=function(){var a=$a(this.observer.onCompleted).call(this.observer);this.dispose(),a===Za&&e(a.e)},c.setDisposable=function(a){this.m.setDisposable(a)},c.getDisposable=function(){return this.m.getDisposable()},c.dispose=function(){a.prototype.dispose.call(this),this.m.dispose()},b}(Gc),kg=function(a){function b(b,c){this._m=b,this._u=c,a.call(this)}return Pb(b,a),b.prototype.subscribeCore=function(a){return new cc(this._m.getDisposable(),this._u.subscribe(a))},b}(Mc),lg=function(a){function b(b,c,d){a.call(this),this.key=b,this.underlyingObservable=d?new kg(d,c):c}return Pb(b,a),b.prototype._subscribe=function(a){return this.underlyingObservable.subscribe(a)},b}(Lc),mg=Qa.Subject=function(a){function b(){a.call(this),this.isDisposed=!1,this.isStopped=!1,this.observers=[],this.hasError=!1}return Pb(b,a),Qb(b.prototype,Dc.prototype,{_subscribe:function(a){return $b(this),this.isStopped?this.hasError?(a.onError(this.error),Yb):(a.onCompleted(),Yb):(this.observers.push(a),new qf(this,a))},hasObservers:function(){return this.observers.length>0},onCompleted:function(){if($b(this),!this.isStopped){this.isStopped=!0;for(var a=0,b=c(this.observers),d=b.length;d>a;a++)b[a].onCompleted();this.observers.length=0}},onError:function(a){if($b(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){if($b(this),!this.isStopped)for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onNext(a)},dispose:function(){this.isDisposed=!0,this.observers=null}}),b.create=function(a,b){return new qg(a,b)},b}(Lc),ng=Qa.AsyncSubject=function(a){function b(){a.call(this),this.isDisposed=!1,this.isStopped=!1,this.hasValue=!1,this.observers=[],this.hasError=!1}return Pb(b,a),Qb(b.prototype,Dc.prototype,{_subscribe:function(a){return $b(this),this.isStopped?(this.hasError?a.onError(this.error):this.hasValue?(a.onNext(this.value),a.onCompleted()):a.onCompleted(),Yb):(this.observers.push(a),new qf(this,a))},hasObservers:function(){return $b(this),this.observers.length>0},onCompleted:function(){var a,b;if($b(this),!this.isStopped){this.isStopped=!0;var d=c(this.observers),b=d.length;if(this.hasValue)for(a=0;b>a;a++){var e=d[a];e.onNext(this.value),e.onCompleted()}else for(a=0;b>a;a++)d[a].onCompleted();this.observers.length=0}},onError:function(a){if($b(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){$b(this),this.isStopped||(this.value=a,this.hasValue=!0)},dispose:function(){this.isDisposed=!0,this.observers=null,this.error=null,this.value=null}}),b}(Lc),og=Qa.BehaviorSubject=function(a){function b(b){a.call(this),this.value=b,this.observers=[],this.isDisposed=!1,this.isStopped=!1,this.hasError=!1}return Pb(b,a),Qb(b.prototype,Dc.prototype,{_subscribe:function(a){return $b(this),this.isStopped?(this.hasError?a.onError(this.error):a.onCompleted(),Yb):(this.observers.push(a),a.onNext(this.value),new qf(this,a))},getValue:function(){if($b(this),this.hasError)throw this.error;return this.value},hasObservers:function(){return this.observers.length>0},onCompleted:function(){if($b(this),!this.isStopped){this.isStopped=!0;for(var a=0,b=c(this.observers),d=b.length;d>a;a++)b[a].onCompleted();this.observers.length=0}},onError:function(a){if($b(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){if($b(this),!this.isStopped){this.value=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onNext(a)}},dispose:function(){this.isDisposed=!0,this.observers=null,this.value=null,this.error=null}}),b}(Lc),pg=Qa.ReplaySubject=function(a){function b(a,b){return Xb(function(){b.dispose(),!a.isDisposed&&a.observers.splice(a.observers.indexOf(b),1)})}function d(b,c,d){this.bufferSize=null==b?e:b,this.windowSize=null==c?e:c,this.scheduler=d||pc,this.q=[],this.observers=[],this.isStopped=!1,this.isDisposed=!1,this.hasError=!1,this.error=null,a.call(this)}var e=Math.pow(2,53)-1;return Pb(d,a),Qb(d.prototype,Dc.prototype,{_subscribe:function(a){$b(this);var c=new Jc(this.scheduler,a),d=b(this,c);this._trim(this.scheduler.now()),this.observers.push(c);for(var e=0,f=this.q.length;f>e;e++)c.onNext(this.q[e].value);return this.hasError?c.onError(this.error):this.isStopped&&c.onCompleted(),c.ensureActive(),d},hasObservers:function(){return this.observers.length>0},_trim:function(a){for(;this.q.length>this.bufferSize;)this.q.shift();for(;this.q.length>0&&a-this.q[0].interval>this.windowSize;)this.q.shift()},onNext:function(a){if($b(this),!this.isStopped){var b=this.scheduler.now();this.q.push({interval:b,value:a}),this._trim(b);for(var d=0,e=c(this.observers),f=e.length;f>d;d++){var g=e[d];g.onNext(a),g.ensureActive()}}},onError:function(a){if($b(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;var b=this.scheduler.now();this._trim(b);for(var d=0,e=c(this.observers),f=e.length;f>d;d++){var g=e[d];g.onError(a),g.ensureActive()}this.observers.length=0}},onCompleted:function(){if($b(this),!this.isStopped){this.isStopped=!0;var a=this.scheduler.now();this._trim(a);for(var b=0,d=c(this.observers),e=d.length;e>b;b++){var f=d[b];f.onCompleted(),f.ensureActive()}this.observers.length=0}},dispose:function(){this.isDisposed=!0,this.observers=null}}),d}(Lc),qg=Qa.AnonymousSubject=function(a){function b(b,c){this.observer=b,this.observable=c,a.call(this)}return Pb(b,a),Qb(b.prototype,Dc.prototype,{_subscribe:function(a){return this.observable.subscribe(a)},onCompleted:function(){this.observer.onCompleted()},onError:function(a){this.observer.onError(a)},onNext:function(a){this.observer.onNext(a)}}),b}(Lc);Qa.Pauser=function(a){function b(){a.call(this)}return Pb(b,a),b.prototype.pause=function(){this.onNext(!1)},b.prototype.resume=function(){this.onNext(!0)},b}(mg),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Pa.Rx=Qa,define(function(){return Qa})):Ia&&Ja?Na?(Ja.exports=Qa).Rx=Qa:Ia.Rx=Qa:Pa.Rx=Qa;var rg=j()}).call(this);
	//# sourceMappingURL=rx.all.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderUtils = __webpack_require__(7);
	var Handle = __webpack_require__(8);
	var $ = __webpack_require__(3);
	var React = __webpack_require__(4);
	var Rx = __webpack_require__(5);

	var Slider = (function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).call(this, props);
	    this.state = { pxHandle: props.marginleft };
	    this.utils = SliderUtils;
	  }

	  _createClass(Slider, [{
	    key: 'showHandle',
	    value: function showHandle(ml, data, range, width, height, px) {
	      var value = this.utils.pxToInd(this.utils.pxPerInd(width, range), this.utils.relativeMouseX(px, ml));
	      console.log(px);
	      return React.createElement(Handle, {
	        px: px,
	        value: value
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;

	      var mouseDown = Rx.Observable.fromEvent(document, 'mousedown');
	      var mouseMove = Rx.Observable.fromEvent(document, 'mousemove');
	      var mouseUp = Rx.Observable.fromEvent(document, 'mouseup');
	      var mouseDrag = mouseDown.selectMany(function () {
	        return mouseMove.takeUntil(mouseUp);
	      });
	      mouseDrag.subscribe(function (e) {
	        _this.setState({ pxHandle: _this.utils.getMouseX(e) });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var marginleft = _props.marginleft;
	      var data = _props.data;
	      var width = _props.width;
	      var height = _props.height;

	      return React.createElement(
	        'div',
	        { id: 'counter' },
	        this.showHandle(marginleft, data, data.length, width, height, this.state.pxHandle)
	      );
	    }
	  }]);

	  return Slider;
	})(React.Component);

	Slider.propTypes = { data: React.PropTypes.array,
	  marginleft: React.PropTypes.number,
	  range: React.PropTypes.number,
	  width: React.PropTypes.number,
	  height: React.PropTypes.number };

	module.exports = Slider;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(3);
	var React = __webpack_require__(4);
	var Rx = __webpack_require__(5);

	var SliderUtils = {
	  getMouseX: function getMouseX(event) {
	    return event.clientX;
	  },
	  pxToInd: function pxToInd(pxperind, relativemousex) {
	    /*
	      returns index of data closest to mouse position
	    */
	    return Math.round(relativemousex / pxperind);
	  },
	  indToPx: function indToPx(pxperind, ind, marginleft) {
	    /*
	      pxperind - number of px per data point
	      ind - index of data point
	      marginleft - px dist from left side of window to left side of slider
	      **converts data index to position relative to window
	    */
	    return marginleft + pxperind * (ind + 1);
	  },
	  pxPerInd: function pxPerInd(widthslider, totalpts) {
	    /*
	     widthslider - width slider in px
	     totalpts - total number of data points
	     returns ratio of px to data point
	    */
	    return widthslider / totalpts;
	  },
	  relativeMouseX: function relativeMouseX(mousex, marginleft) {
	    /*
	      mousex - px value of mouse position relative to window
	      marginleft - px dist from left side of window to left side of slider
	      **converts px value of mouse position to be relative to slider
	    */
	    return mousex - marginleft;
	  }
	};

	module.exports = SliderUtils;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $ = __webpack_require__(3);
	var React = __webpack_require__(4);
	var Rx = __webpack_require__(5);

	var Handle = (function (_React$Component) {
	  _inherits(Handle, _React$Component);

	  function Handle(props) {
	    _classCallCheck(this, Handle);

	    _get(Object.getPrototypeOf(Handle.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Handle, [{
	    key: 'drawHandle',
	    value: function drawHandle(px, value) {
	      console.log(value);
	      console.log(px);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var px = _props.px;
	      var value = _props.value;

	      return React.createElement(
	        'div',
	        { id: 'counter' },
	        this.drawHandle(px, value)
	      );
	    }
	  }]);

	  return Handle;
	})(React.Component);

	Handle.propTypes = { px: React.PropTypes.number,
	  value: React.PropTypes.number };

	module.exports = Handle;

/***/ }
/******/ ]);