(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsforce.modules.api.Apex"] = factory();
	else
		root["jsforce.modules.api.Apex"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	/**
	 * @file Manages Salesforce Apex REST endpoint calls
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var jsforce = __webpack_require__(1);

	/**
	 * API class for Apex REST endpoint call
	 *
	 * @class
	 * @param {Connection} conn Connection
	 */
	var Apex = function(conn) {
	  this._conn = conn;
	};

	/**
	 * @private
	 */
	Apex.prototype._baseUrl = function() {
	  return this._conn.instanceUrl + "/services/apexrest";
	};

	/**
	 * @private
	 */
	Apex.prototype._createRequestParams = function(method, path, body, options) {
	  var params = {
	    method: method,
	    url: this._baseUrl() + path
	  },
	  _headers = {};
	  if(options && 'object' === typeof options['headers']){
	    _headers = options['headers'];
	  }
	  if (!/^(GET|DELETE)$/i.test(method)) {
	    _headers["Content-Type"] = "application/json";
	  }
	  params.headers = _headers;
	  if (body) {
	    params.body = JSON.stringify(body);
	  }
	  return params;
	};

	/**
	 * Call Apex REST service in GET request
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} options - Holds headers and other meta data for the request.
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Apex.prototype.get = function(path, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  return this._conn.request(this._createRequestParams('GET', path, undefined, options)).thenCall(callback);
	};

	/**
	 * Call Apex REST service in POST request
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} [body] - Request body
	 * @param {Object} options - Holds headers and other meta data for the request.
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Apex.prototype.post = function(path, body, options, callback) {
	  if (typeof body === 'function') {
	    callback = body;
	    body = undefined;
	    options = undefined;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var params = this._createRequestParams('POST', path, body, options);
	  return this._conn.request(params).thenCall(callback);
	};

	/**
	 * Call Apex REST service in PUT request
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} [body] - Request body
	 * @param {Object} [options] - Holds headers and other meta data for the request.
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Apex.prototype.put = function(path, body, options, callback) {
	  if (typeof body === 'function') {
	    callback = body;
	    body = undefined;
	    options = undefined;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var params = this._createRequestParams('PUT', path, body, options);
	  return this._conn.request(params).thenCall(callback);
	};

	/**
	 * Call Apex REST service in PATCH request
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} [body] - Request body
	 * @param {Object} [options] - Holds headers and other meta data for the request.
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Apex.prototype.patch = function(path, body, options, callback) {
	  if (typeof body === 'function') {
	    callback = body;
	    body = undefined;
	    options = undefined;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var params = this._createRequestParams('PATCH', path, body, options);
	  return this._conn.request(params).thenCall(callback);
	};

	/**
	 * Synonym of Apex#delete()
	 *
	 * @method Apex#del
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} [body] - Request body
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	/**
	 * Call Apex REST service in DELETE request
	 *
	 * @method Apex#delete
	 *
	 * @param {String} path - URL path to Apex REST service
	 * @param {Object} [body] - Request body
	 * @param {Object} [options] - Holds headers and other meta data for the request.
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Apex.prototype.del =
	  Apex.prototype["delete"] = function(path, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  return this._conn.request(this._createRequestParams('DELETE', path, undefined, options)).thenCall(callback);
	};


	/*--------------------------------------------*/
	/*
	 * Register hook in connection instantiation for dynamically adding this API module features
	 */
	jsforce.on('connection:new', function(conn) {
	  conn.apex = new Apex(conn);
	});


	module.exports = Apex;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file JSforce Core
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */
	'use strict';

	var EventEmitter = __webpack_require__(2).EventEmitter;

	var jsforce = module.exports = new EventEmitter();
	jsforce.VERSION = __webpack_require__(3);
	jsforce.Connection = __webpack_require__(4);
	jsforce.OAuth2 = __webpack_require__(18);
	jsforce.Date = jsforce.SfDate = __webpack_require__(54);
	jsforce.RecordStream = __webpack_require__(56);
	jsforce.Promise = __webpack_require__(12);
	jsforce.require = __webpack_require__(227);


/***/ },
/* 2 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	module.exports = '1.7.1';


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*global Buffer */
	/**
	 * @file Connection class to keep the API session information and manage requests
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var events  = __webpack_require__(2),
	    inherits = __webpack_require__(9),
	    _       = __webpack_require__(10),
	    Promise = __webpack_require__(12),
	    Logger  = __webpack_require__(17),
	    OAuth2  = __webpack_require__(18),
	    Query   = __webpack_require__(53),
	    SObject = __webpack_require__(66),
	    QuickAction = __webpack_require__(69),
	    HttpApi = __webpack_require__(70),
	    Transport = __webpack_require__(22),
	    Process = __webpack_require__(226),
	    Cache   = __webpack_require__(68);

	var defaults = {
	  loginUrl: "https://login.salesforce.com",
	  instanceUrl: "",
	  version: "37.0"
	};

	/**
	 * Connection class to keep the API session information and manage requests
	 *
	 * @constructor
	 * @extends events.EventEmitter
	 * @param {Object} [options] - Connection options
	 * @param {OAuth2|Object} [options.oauth2] - OAuth2 instance or options to be passed to OAuth2 constructor
	 * @param {String} [options.logLevel] - Output logging level (DEBUG|INFO|WARN|ERROR|FATAL)
	 * @param {String} [options.version] - Salesforce API Version (without "v" prefix)
	 * @param {Number} [options.maxRequest] - Max number of requests allowed in parallel call
	 * @param {String} [options.loginUrl] - Salesforce Login Server URL (e.g. https://login.salesforce.com/)
	 * @param {String} [options.instanceUrl] - Salesforce Instance URL (e.g. https://na1.salesforce.com/)
	 * @param {String} [options.serverUrl] - Salesforce SOAP service endpoint URL (e.g. https://na1.salesforce.com/services/Soap/u/28.0)
	 * @param {String} [options.accessToken] - Salesforce OAuth2 access token
	 * @param {String} [options.sessionId] - Salesforce session ID
	 * @param {String} [options.refreshToken] - Salesforce OAuth2 refresh token
	 * @param {String|Object} [options.signedRequest] - Salesforce Canvas signed request (Raw Base64 string, JSON string, or deserialized JSON)
	 * @param {String} [options.proxyUrl] - Cross-domain proxy server URL, used in browser client, non Visualforce app.
	 * @param {Object} [options.callOptions] - Call options used in each SOAP/REST API request. See manual.
	 */
	var Connection = module.exports = function(options) {
	  options = options || {};

	  this._logger = new Logger(options.logLevel);

	  var oauth2 = options.oauth2 || {
	    loginUrl : options.loginUrl,
	    clientId : options.clientId,
	    clientSecret : options.clientSecret,
	    redirectUri : options.redirectUri,
	    proxyUrl: options.proxyUrl
	  };

	  /**
	   * OAuth2 object
	   * @member {OAuth2} Connection#oauth2
	   */
	  this.oauth2 = oauth2 = oauth2 instanceof OAuth2 ? oauth2 : new OAuth2(oauth2);

	  this.loginUrl = options.loginUrl || oauth2.loginUrl || defaults.loginUrl;
	  this.version = options.version || defaults.version;
	  this.maxRequest = options.maxRequest || this.maxRequest || 10;

	  /** @private */
	  this._transport =
	    options.proxyUrl ? new Transport.ProxyTransport(options.proxyUrl) : new Transport();

	  this.callOptions = options.callOptions;

	  /*
	   * Fire connection:new event to notify jsforce plugin modules
	   */
	  var jsforce = __webpack_require__(1);
	  jsforce.emit('connection:new', this);

	  /**
	   * Streaming API object
	   * @member {Streaming} Connection#streaming
	   */
	  // this.streaming = new Streaming(this);
	  /**
	   * Bulk API object
	   * @member {Bulk} Connection#bulk
	   */
	  // this.bulk = new Bulk(this);
	  /**
	   * Tooling API object
	   * @member {Tooling} Connection#tooling
	   */
	  // this.tooling = new Tooling(this);
	  /**
	   * Analytics API object
	   * @member {Analytics} Connection#analytics
	   */
	  // this.analytics = new Analytics(this);
	  /**
	   * Chatter API object
	   * @member {Chatter} Connection#chatter
	   */
	  // this.chatter = new Chatter(this);
	  /**
	   * Metadata API object
	   * @member {Metadata} Connection#metadata
	   */
	  // this.metadata = new Metadata(this);

	  /**
	   * SOAP API object
	   * @member {SoapApi} Connection#soap
	   */
	  // this.soap = new SoapApi(this);

	  /**
	   * Apex REST API object
	   * @member {Apex} Connection#apex
	   */
	  // this.apex = new Apex(this);

	  /**
	   * @member {Process} Connection#process
	   */
	  this.process = new Process(this);

	  /**
	   * Cache object for result
	   * @member {Cache} Connection#cache
	   */
	  this.cache = new Cache();

	  // Allow to delegate connection refresh to outer function
	  var self = this;
	  var refreshFn = options.refreshFn;
	  if (!refreshFn && this.oauth2.clientId && this.oauth2.clientSecret) {
	    refreshFn = oauthRefreshFn;
	  }
	  if (refreshFn) {
	    this._refreshDelegate = new HttpApi.SessionRefreshDelegate(this, refreshFn);
	  }

	  var cacheOptions = {
	    key: function(type) { return type ? "describe." + type : "describe"; }
	  };
	  this.describe$ = this.cache.makeCacheable(this.describe, this, cacheOptions);
	  this.describe = this.cache.makeResponseCacheable(this.describe, this, cacheOptions);
	  this.describeSObject$ = this.describe$;
	  this.describeSObject = this.describe;

	  cacheOptions = { key: 'describeGlobal' };
	  this.describeGlobal$ = this.cache.makeCacheable(this.describeGlobal, this, cacheOptions);
	  this.describeGlobal = this.cache.makeResponseCacheable(this.describeGlobal, this, cacheOptions);

	  this.initialize(options);
	};

	inherits(Connection, events.EventEmitter);

	/**
	 * Initialize connection.
	 *
	 * @protected
	 * @param {Object} options - Initialization options
	 * @param {String} [options.instanceUrl] - Salesforce Instance URL (e.g. https://na1.salesforce.com/)
	 * @param {String} [options.serverUrl] - Salesforce SOAP service endpoint URL (e.g. https://na1.salesforce.com/services/Soap/u/28.0)
	 * @param {String} [options.accessToken] - Salesforce OAuth2 access token
	 * @param {String} [options.sessionId] - Salesforce session ID
	 * @param {String} [options.refreshToken] - Salesforce OAuth2 refresh token
	 * @param {String|Object} [options.signedRequest] - Salesforce Canvas signed request (Raw Base64 string, JSON string, or deserialized JSON)
	 * @param {UserInfo} [options.userInfo] - Logged in user information
	 */
	Connection.prototype.initialize = function(options) {
	  if (!options.instanceUrl && options.serverUrl) {
	    options.instanceUrl = options.serverUrl.split('/').slice(0, 3).join('/');
	  }
	  this.instanceUrl = options.instanceUrl || options.serverUrl || this.instanceUrl || defaults.instanceUrl;

	  this.accessToken = options.sessionId || options.accessToken || this.accessToken;
	  this.refreshToken = options.refreshToken || this.refreshToken;
	  if (this.refreshToken && !this._refreshDelegate) {
	    throw new Error("Refresh token is specified without oauth2 client information or refresh function");
	  }

	  this.signedRequest = options.signedRequest && parseSignedRequest(options.signedRequest);
	  if (this.signedRequest) {
	    this.accessToken = this.signedRequest.client.oauthToken;
	    if (Transport.CanvasTransport.supported) {
	      this._transport = new Transport.CanvasTransport(this.signedRequest);
	    }
	  }

	  if (options.userInfo) {
	    this.userInfo = options.userInfo;
	  }

	  this.limitInfo = {};

	  this.sobjects = {};
	  this.cache.clear();
	  this.cache.get('describeGlobal').on('value', _.bind(function(res) {
	    if (res.result) {
	      var types = _.map(res.result.sobjects, function(so) { return so.name; });
	      types.forEach(this.sobject, this);
	    }
	  }, this));

	  if (this.tooling) {
	    this.tooling.initialize();
	  }

	  this._sessionType = options.sessionId ? "soap" : "oauth2";

	};

	/** @private **/
	function oauthRefreshFn(conn, callback) {
	  conn.oauth2.refreshToken(conn.refreshToken, function(err, res) {
	    if (err) { return callback(err); }
	    var userInfo = parseIdUrl(res.id);
	    conn.initialize({
	      instanceUrl : res.instance_url,
	      accessToken : res.access_token,
	      userInfo : userInfo
	    });
	    callback(null, res.access_token, res);
	  });
	}

	/** @private **/
	function parseSignedRequest(sr) {
	  if (_.isString(sr)) {
	    if (sr[0] === '{') { // might be JSON
	      return JSON.parse(sr);
	    } else { // might be original base64-encoded signed request
	      var msg = sr.split('.').pop(); // retrieve latter part
	      var json = new Buffer(msg, 'base64').toString('utf-8');
	      return JSON.parse(json);
	    }
	    return null;
	  }
	  return sr;
	}


	/** @private **/
	Connection.prototype._baseUrl = function() {
	  return [ this.instanceUrl, "services/data", "v" + this.version ].join('/');
	};

	/**
	 * Convert path to absolute url
	 * @private
	 */
	Connection.prototype._normalizeUrl = function(url) {
	  if (url[0] === '/') {
	    if (url.indexOf('/services/') === 0) {
	      return this.instanceUrl + url;
	    } else {
	      return this._baseUrl() + url;
	    }
	  } else {
	    return url;
	  }
	};

	/**
	 * Send REST API request with given HTTP request info, with connected session information.
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String|Object} request - HTTP request object or URL to GET request
	 * @param {String} request.method - HTTP method URL to send HTTP request
	 * @param {String} request.url - URL to send HTTP request
	 * @param {Object} [request.headers] - HTTP request headers in hash object (key-value)
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.request = function(request, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = null;
	  }
	  options = options || {};
	  var self = this;

	  // if request is simple string, regard it as url in GET method
	  if (_.isString(request)) {
	    request = { method: 'GET', url: request };
	  }
	  // if url is given in relative path, prepend base url or instance url before.
	  request.url = this._normalizeUrl(request.url);

	  var httpApi = new HttpApi(this, options);

	  // log api usage and its quota
	  httpApi.on('response', function(response) {
	    if (response.headers && response.headers["sforce-limit-info"]) {
	      var apiUsage = response.headers["sforce-limit-info"].match(/api\-usage=(\d+)\/(\d+)/);
	      if (apiUsage) {
	        self.limitInfo = {
	          apiUsage: {
	            used: parseInt(apiUsage[1], 10),
	            limit: parseInt(apiUsage[2], 10)
	          }
	        };
	      }
	    }
	  });
	  return httpApi.request(request).thenCall(callback);
	};

	/**
	 * Send HTTP GET request
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String} url - Endpoint URL to request HTTP GET
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.requestGet = function(url, options, callback) {
	  var request = {
	    method: "GET",
	    url: url
	  };
	  return this.request(request, options, callback);
	};


	/**
	 * Send HTTP POST request with JSON body, with connected session information
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String} url - Endpoint URL to request HTTP POST
	 * @param {Object} body - Any JS object which can be serialized to JSON
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.requestPost = function(url, body, options, callback) {
	  var request = {
	    method: "POST",
	    url: url,
	    body: JSON.stringify(body),
	    headers: { "content-type": "application/json" }
	  };
	  return this.request(request, options, callback);
	};

	/**
	 * Send HTTP PUT request with JSON body, with connected session information
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String} url - Endpoint URL to request HTTP PUT
	 * @param {Object} body - Any JS object which can be serialized to JSON
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.requestPut = function(url, body, options, callback) {
	  var request = {
	    method: "PUT",
	    url: url,
	    body: JSON.stringify(body),
	    headers: { "content-type": "application/json" }
	  };
	  return this.request(request, options, callback);
	};

	/**
	 * Send HTTP PATCH request with JSON body
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String} url - Endpoint URL to request HTTP PATCH
	 * @param {Object} body - Any JS object which can be serialized to JSON
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.requestPatch = function(url, body, options, callback) {
	  var request = {
	    method: "PATCH",
	    url: url,
	    body: JSON.stringify(body),
	    headers: { "content-type": "application/json" }
	  };
	  return this.request(request, options, callback);
	};

	/**
	 * Send HTTP DELETE request
	 *
	 * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
	 * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
	 * , or relative path from version root ('/sobjects/Account/describe').
	 *
	 * @param {String} url - Endpoint URL to request HTTP DELETE
	 * @param {Object} [options] - HTTP API request options
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	Connection.prototype.requestDelete = function(url, options, callback) {
	  var request = {
	    method: "DELETE",
	    url: url
	  };
	  return this.request(request, options, callback);
	};


	/** @private */
	function formatDate(date) {
	  function pad(number) {
	    if (number < 10) {
	      return '0' + number;
	    }
	    return number;
	  }

	  return date.getUTCFullYear() +
	    '-' + pad(date.getUTCMonth() + 1) +
	    '-' + pad(date.getUTCDate()) +
	    'T' + pad(date.getUTCHours()) +
	    ':' + pad(date.getUTCMinutes()) +
	    ':' + pad(date.getUTCSeconds()) +
	    '+00:00';
	}


	/** @private **/
	function parseIdUrl(idUrl) {
	  var idUrls = idUrl.split("/");
	  var userId = idUrls.pop(), orgId = idUrls.pop();
	  return {
	    id: userId,
	    organizationId: orgId,
	    url: idUrl
	  };
	}

	/**
	 * @callback Callback
	 * @type {Function}
	 * @param {Error} err - Callback error
	 * @param {T} response - Callback response
	 * @template T
	 */

	/**
	 * @typedef {Object} QueryResult
	 * @prop {Boolean} done - Flag if the query is fetched all records or not
	 * @prop {String} [nextRecordsUrl] - URL locator for next record set, (available when done = false)
	 * @prop {Number} totalSize - Total size for query
	 * @prop {Array.<Record>} [records] - Array of records fetched
	 */

	/**
	 * Execute query by using SOQL
	 *
	 * @param {String} soql - SOQL string
	 * @param {Object} [options] - Query options
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<QueryResult>} [callback] - Callback function
	 * @returns {Query.<QueryResult>}
	 */
	Connection.prototype.query = function(soql, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var query = new Query(this, soql, options);
	  if (callback) {
	    query.run(callback);
	  }
	  return query;
	};

	/**
	 * Execute query by using SOQL, including deleted records
	 *
	 * @param {String} soql - SOQL string
	 * @param {Object} [options] - Query options
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<QueryResult>} [callback] - Callback function
	 * @returns {Query.<QueryResult>}
	 */
	Connection.prototype.queryAll = function(soql, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var query = new Query(this, soql, options);
	  query.scanAll(true);
	  if (callback) {
	    query.run(callback);
	  }
	  return query;
	};

	/**
	 * Query next record set by using query locator
	 *
	 * @param {String} locator - Next record set locator
	 * @param {Object} [options] - Query options
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<QueryResult>} [callback] - Callback function
	 * @returns {Query.<QueryResult>}
	 */
	Connection.prototype.queryMore = function(locator, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = undefined;
	  }
	  var query = new Query(this, { locator: locator }, options);
	  if (callback) {
	    query.run(callback);
	  }
	  return query;
	};

	/**
	 * Retrieve specified records
	 *
	 * @param {String} type - SObject Type
	 * @param {String|Array.<String>} ids - A record ID or array of record IDs
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<Record|Array.<Record>>} [callback] - Callback function
	 * @returns {Promise.<Record|Array.<Record>>}
	 */
	Connection.prototype.retrieve = function(type, ids, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var isArray = _.isArray(ids);
	  ids = isArray ? ids : [ ids ];
	  if (ids.length > self.maxRequest) {
	    return Promise.reject(new Error("Exceeded max limit of concurrent call")).thenCall(callback);
	  }
	  return Promise.all(
	    _.map(ids, function(id) {
	      if (!id) { return Promise.reject(new Error('Invalid record ID. Specify valid record ID value')).thenCall(callback); }
	      var url = [ self._baseUrl(), "sobjects", type, id ].join('/');
	      return self.request({ method: 'GET', url: url, headers: options.headers });
	    })
	  ).then(function(results) {
	    return !isArray && _.isArray(results) ? results[0] : results;
	  }).thenCall(callback);
	};


	/**
	 * @typedef RecordResult
	 * @prop {Boolean} success - The result is succeessful or not
	 * @prop {String} [id] - Record ID
	 * @prop {Array.<String>} [errors] - Errors (available when success = false)
	 */

	/**
	 * Synonym of Connection#create()
	 *
	 * @method Connection#insert
	 * @param {String} type - SObject Type
	 * @param {Object|Array.<Object>} records - A record or array of records to create
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Create records
	 *
	 * @method Connection#create
	 * @param {String} type - SObject Type
	 * @param {Record|Array.<Record>} records - A record or array of records to create
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	Connection.prototype.insert =
	Connection.prototype.create = function(type, records, options, callback) {
	  if (!_.isString(type)) {
	    // reverse order
	    callback = options;
	    options = records;
	    records = type;
	    type = null;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var isArray = _.isArray(records);
	  records = isArray ? records : [ records ];
	  if (records.length > self.maxRequest) {
	    return Promise.reject(new Error("Exceeded max limit of concurrent call")).thenCall(callback);
	  }
	  return Promise.all(
	    _.map(records, function(record) {
	      var sobjectType = type || (record.attributes && record.attributes.type) || record.type;
	      if (!sobjectType) {
	        throw new Error('No SObject Type defined in record');
	      }
	      record = _.clone(record);
	      delete record.Id;
	      delete record.type;
	      delete record.attributes;

	      var url = [ self._baseUrl(), "sobjects", sobjectType ].join('/');
	      return self.request({
	        method : 'POST',
	        url : url,
	        body : JSON.stringify(record),
	        headers : _.defaults(options.headers || {}, {
	          "Content-Type" : "application/json"
	        })
	      });
	    })
	  ).then(function(results) {
	    return !isArray && _.isArray(results) ? results[0] : results;
	  }).thenCall(callback);
	};

	/**
	 * Update records
	 *
	 * @param {String} type - SObject Type
	 * @param {Record|Array.<Record>} records - A record or array of records to update
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	Connection.prototype.update = function(type, records, options, callback) {
	  if (!_.isString(type)) {
	    // reverse order
	    callback = options;
	    options = records;
	    records = type;
	    type = null;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var isArray = _.isArray(records);
	  records = isArray ? records : [ records ];
	  if (records.length > self.maxRequest) {
	    return Promise.reject(new Error("Exceeded max limit of concurrent call")).thenCall(callback);
	  }
	  return Promise.all(
	    _.map(records, function(record) {
	      var id = record.Id;
	      if (!id) {
	        throw new Error('Record id is not found in record.');
	      }
	      var sobjectType = type || (record.attributes && record.attributes.type) || record.type;
	      if (!sobjectType) {
	        throw new Error('No SObject Type defined in record');
	      }
	      record = _.clone(record);
	      delete record.Id;
	      delete record.type;
	      delete record.attributes;

	      var url = [ self._baseUrl(), "sobjects", sobjectType, id ].join('/');
	      return self.request({
	        method : 'PATCH',
	        url : url,
	        body : JSON.stringify(record),
	        headers : _.defaults(options.headers || {}, {
	          "Content-Type" : "application/json"
	        })
	      }, {
	        noContentResponse: { id : id, success : true, errors : [] }
	      });
	    })
	  ).then(function(results) {
	    return !isArray && _.isArray(results) ? results[0] : results;
	  }).thenCall(callback);
	};

	/**
	 * Upsert records
	 *
	 * @param {String} type - SObject Type
	 * @param {Record|Array.<Record>} records - Record or array of records to upsert
	 * @param {String} extIdField - External ID field name
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	Connection.prototype.upsert = function(type, records, extIdField, options, callback) {
	  // You can omit "type" argument, when the record includes type information.
	  if (!_.isString(type)) {
	    // reverse order
	    callback = options;
	    options = extIdField;
	    extIdField = records;
	    records = type;
	    type = null;
	  }
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var isArray = _.isArray(records);
	  records = isArray ? records : [ records ];
	  if (records.length > self.maxRequest) {
	    return Promise.reject(new Error("Exceeded max limit of concurrent call")).thenCall(callback);
	  }
	  return Promise.all(
	    _.map(records, function(record) {
	      var sobjectType = type || (record.attributes && record.attributes.type) || record.type;
	      var extId = record[extIdField];
	      if (!extId) {
	        return Promise.reject(new Error('External ID is not defined in the record'));
	      }
	      record = _.clone(record);
	      delete record[extIdField];
	      delete record.type;
	      delete record.attributes;

	      var url = [ self._baseUrl(), "sobjects", sobjectType, extIdField, extId ].join('/');
	      return self.request({
	        method : 'PATCH',
	        url : url,
	        body : JSON.stringify(record),
	        headers : _.defaults(options.headers || {}, {
	          "Content-Type" : "application/json"
	        })
	      }, {
	        noContentResponse: { success : true, errors : [] }
	      });
	    })
	  ).then(function(results) {
	    return !isArray && _.isArray(results) ? results[0] : results;
	  }).thenCall(callback);
	};

	/**
	 * Synonym of Connection#destroy()
	 *
	 * @method Connection#delete
	 * @param {String} type - SObject Type
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Synonym of Connection#destroy()
	 *
	 * @method Connection#del
	 * @param {String} type - SObject Type
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Delete records
	 *
	 * @method Connection#destroy
	 * @param {String} type - SObject Type
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	Connection.prototype["delete"] =
	Connection.prototype.del =
	Connection.prototype.destroy = function(type, ids, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var isArray = _.isArray(ids);
	  ids = isArray ? ids : [ ids ];
	  if (ids.length > self.maxRequest) {
	    return Promise.reject(new Error("Exceeded max limit of concurrent call")).thenCall(callback);
	  }
	  return Promise.all(
	    _.map(ids, function(id) {
	      var url = [ self._baseUrl(), "sobjects", type, id ].join('/');
	      return self.request({
	        method : 'DELETE',
	        url : url,
	        headers: options.headers || null
	      }, {
	        noContentResponse: { id : id, success : true, errors : [] }
	      });
	    })
	  ).then(function(results) {
	    return !isArray && _.isArray(results) ? results[0] : results;
	  }).thenCall(callback);
	};

	/**
	 * Execute search by SOSL
	 *
	 * @param {String} sosl - SOSL string
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<Array.<RecordResult>>}
	 */
	Connection.prototype.search = function(sosl, callback) {
	  var url = this._baseUrl() + "/search?q=" + encodeURIComponent(sosl);
	  return this.request(url).thenCall(callback);
	};

	/**
	 * Result returned by describeSObject call
	 *
	 * @typedef {Object} DescribeSObjectResult
	 */
	/**
	 * Synonym of Connection#describe()
	 *
	 * @method Connection#describeSObject
	 * @param {String} type - SObject Type
	 * @param {Callback.<DescribeSObjectResult>} [callback] - Callback function
	 * @returns {Promise.<DescribeSObjectResult>}
	 */
	/**
	 * Describe SObject metadata
	 *
	 * @method Connection#describe
	 * @param {String} type - SObject Type
	 * @param {Callback.<DescribeSObjectResult>} [callback] - Callback function
	 * @returns {Promise.<DescribeSObjectResult>}
	 */
	Connection.prototype.describe =
	Connection.prototype.describeSObject = function(type, callback) {
	  var url = [ this._baseUrl(), "sobjects", type, "describe" ].join('/');
	  return this.request(url).thenCall(callback);
	};


	/**
	 * Result returned by describeGlobal call
	 *
	 * @typedef {Object} DescribeGlobalResult
	 */
	/**
	 * Describe global SObjects
	 *
	 * @param {Callback.<DescribeGlobalResult>} [callback] - Callback function
	 * @returns {Promise.<DescribeGlobalResult>}
	 */
	Connection.prototype.describeGlobal = function(callback) {
	  var url = this._baseUrl() + "/sobjects";
	  return this.request(url).thenCall(callback);
	};


	/**
	 * Get SObject instance
	 *
	 * @param {String} type - SObject Type
	 * @returns {SObject}
	 */
	Connection.prototype.sobject = function(type) {
	  this.sobjects = this.sobjects || {};
	  var sobject = this.sobjects[type] =
	    this.sobjects[type] || new SObject(this, type);
	  return sobject;
	};

	/**
	 * Get identity information of current user
	 *
	 * @param {Object} [options] - Identity call options
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in identity request
	 * @param {Callback.<IdentityInfo>} [callback] - Callback function
	 * @returns {Promise.<IdentityInfo>}
	 */
	Connection.prototype.identity = function(options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var self = this;
	  var idUrl = this.userInfo && this.userInfo.url;
	  return Promise.resolve(
	    idUrl ?
	    { identity: idUrl } :
	    this.request({ method: 'GET', url: this._baseUrl(), headers: options.headers })
	  ).then(function(res) {
	    var url = res.identity;
	    url += '?format=json&oauth_token=' + encodeURIComponent(self.accessToken);
	    var transport = Transport.JsonpTransport.supported ?
	      new Transport.JsonpTransport('callback') :
	      undefined;
	    return self.request({ method: 'GET', url: url }, { transport: transport });
	  }).then(function(res) {
	    self.userInfo = {
	      id: res.user_id,
	      organizationId: res.organization_id,
	      url: res.id
	    };
	    return res;
	  }).thenCall(callback);
	};

	/**
	 * @typedef UserInfo
	 * @prop {String} id - User ID
	 * @prop {String} organizationId - Organization ID
	 * @prop {String} url - Identity URL of the user
	 */

	/**
	 * Authorize (using oauth2 web server flow)
	 *
	 * @param {String} code - Authorization code
	 * @param {Callback.<UserInfo>} [callback] - Callback function
	 * @returns {Promise.<UserInfo>}
	 */
	Connection.prototype.authorize = function(code, callback) {
	  var self = this;
	  var logger = this._logger;

	  return this.oauth2.requestToken(code).then(function(res) {
	    logger.debug("OAuth2 token response = " + JSON.stringify(res));
	    var userInfo = parseIdUrl(res.id);
	    self.initialize({
	      instanceUrl : res.instance_url,
	      accessToken : res.access_token,
	      refreshToken : res.refresh_token,
	      userInfo: userInfo
	    });
	    logger.debug("<login> completed. user id = " + userInfo.id + ", org id = " + userInfo.organizationId);
	    return userInfo;

	  }).thenCall(callback);

	};


	/**
	 * Login to Salesforce
	 *
	 * @param {String} username - Salesforce username
	 * @param {String} password - Salesforce password (and security token, if required)
	 * @param {Callback.<UserInfo>} [callback] - Callback function
	 * @returns {Promise.<UserInfo>}
	 */
	Connection.prototype.login = function(username, password, callback) {
	  // register refreshDelegate for session expiration
	  this._refreshDelegate = new HttpApi.SessionRefreshDelegate(this, createUsernamePasswordRefreshFn(username, password));
	  if (this.oauth2 && this.oauth2.clientId && this.oauth2.clientSecret) {
	    return this.loginByOAuth2(username, password, callback);
	  } else {
	    return this.loginBySoap(username, password, callback);
	  }
	};

	/** @private **/
	function createUsernamePasswordRefreshFn(username, password) {
	  return function(conn, callback) {
	    conn.login(username, password, function(err) {
	      if (err) { return callback(err); }
	      callback(null, conn.accessToken);
	    });
	  };
	}

	/**
	 * Login by OAuth2 username & password flow
	 *
	 * @param {String} username - Salesforce username
	 * @param {String} password - Salesforce password (and security token, if required)
	 * @param {Callback.<UserInfo>} [callback] - Callback function
	 * @returns {Promise.<UserInfo>}
	 */
	Connection.prototype.loginByOAuth2 = function(username, password, callback) {
	  var self = this;
	  var logger = this._logger;
	  return this.oauth2.authenticate(username, password).then(function(res) {
	    logger.debug("OAuth2 token response = " + JSON.stringify(res));
	    var userInfo = parseIdUrl(res.id);
	    self.initialize({
	      instanceUrl : res.instance_url,
	      accessToken : res.access_token,
	      userInfo: userInfo
	    });
	    logger.debug("<login> completed. user id = " + userInfo.id + ", org id = " + userInfo.organizationId);
	    return userInfo;

	  }).thenCall(callback);

	};

	/**
	 * @private
	 */
	function esc(str) {
	  return str && String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
	                           .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

	/**
	 * Login by SOAP web service API
	 *
	 * @param {String} username - Salesforce username
	 * @param {String} password - Salesforce password (and security token, if required)
	 * @param {Callback.<UserInfo>} [callback] - Callback function
	 * @returns {Promise.<UserInfo>}
	 */
	Connection.prototype.loginBySoap = function(username, password, callback) {
	  var self = this;
	  var logger = this._logger;
	  var body = [
	    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/">',
	      '<se:Header/>',
	      '<se:Body>',
	        '<login xmlns="urn:partner.soap.sforce.com">',
	          '<username>' + esc(username) + '</username>',
	          '<password>' + esc(password) + '</password>',
	        '</login>',
	      '</se:Body>',
	    '</se:Envelope>'
	  ].join('');

	  var soapLoginEndpoint = [ this.loginUrl, "services/Soap/u", this.version ].join('/');

	  return this._transport.httpRequest({
	    method : 'POST',
	    url : soapLoginEndpoint,
	    body : body,
	    headers : {
	      "Content-Type" : "text/xml",
	      "SOAPAction" : '""'
	    }
	  }).then(function(response) {
	    var m;
	    if (response.statusCode >= 400) {
	      m = response.body.match(/<faultstring>([^<]+)<\/faultstring>/);
	      var faultstring = m && m[1];
	      throw new Error(faultstring || response.body);
	    }
	    logger.debug("SOAP response = " + response.body);
	    m = response.body.match(/<serverUrl>([^<]+)<\/serverUrl>/);
	    var serverUrl = m && m[1];
	    m = response.body.match(/<sessionId>([^<]+)<\/sessionId>/);
	    var sessionId = m && m[1];
	    m = response.body.match(/<userId>([^<]+)<\/userId>/);
	    var userId = m && m[1];
	    m = response.body.match(/<organizationId>([^<]+)<\/organizationId>/);
	    var orgId = m && m[1];
	    var idUrl = soapLoginEndpoint.split('/').slice(0, 3).join('/');
	    idUrl += "/id/" + orgId + "/" + userId;
	    var userInfo = {
	      id: userId,
	      organizationId: orgId,
	      url: idUrl
	    };
	    self.initialize({
	      serverUrl: serverUrl.split('/').slice(0, 3).join('/'),
	      sessionId: sessionId,
	      userInfo: userInfo
	    });
	    logger.debug("<login> completed. user id = " + userId + ", org id = " + orgId);
	    return userInfo;

	  }).thenCall(callback);

	};

	/**
	 * Logout the current session
	 *
	 * @param {Callback.<undefined>} [callback] - Callback function
	 * @returns {Promise.<undefined>}
	 */
	Connection.prototype.logout = function(callback) {
	  if (this._sessionType === "oauth2") {
	    return this.logoutByOAuth2(callback);
	  } else {
	    return this.logoutBySoap(callback);
	  }
	};

	/**
	 * Logout the current session by revoking access token via OAuth2 session revoke
	 *
	 * @param {Callback.<undefined>} [callback] - Callback function
	 * @returns {Promise.<undefined>}
	 */
	Connection.prototype.logoutByOAuth2 = function(callback) {
	  var self = this;
	  var logger = this._logger;

	  return this.oauth2.revokeToken(this.accessToken).then(function() {
	    // Destroy the session bound to this connection
	    self.accessToken = null;
	    self.userInfo = null;
	    self.refreshToken = null;
	    self.instanceUrl = null;
	    self.cache.clear();

	    // nothing useful returned by logout API, just return
	    return undefined;
	  }).thenCall(callback);
	};


	/**
	 * Logout the session by using SOAP web service API
	 *
	 * @param {Callback.<undefined>} [callback] - Callback function
	 * @returns {Promise.<undefined>}
	 */
	Connection.prototype.logoutBySoap = function(callback) {
	  var self = this;
	  var logger = this._logger;

	  var body = [
	    '<se:Envelope xmlns:se="http://schemas.xmlsoap.org/soap/envelope/">',
	      '<se:Header>',
	        '<SessionHeader xmlns="urn:partner.soap.sforce.com">',
	          '<sessionId>' + esc(this.accessToken) + '</sessionId>',
	        '</SessionHeader>',
	      '</se:Header>',
	      '<se:Body>',
	        '<logout xmlns="urn:partner.soap.sforce.com"/>',
	      '</se:Body>',
	    '</se:Envelope>'
	  ].join('');

	  return this._transport.httpRequest({
	    method : 'POST',
	    url : [ this.instanceUrl, "services/Soap/u", this.version ].join('/'),
	    body : body,
	    headers : {
	      "Content-Type" : "text/xml",
	      "SOAPAction" : '""'
	    }
	  }).then(function(response) {
	    logger.debug("SOAP statusCode = " + response.statusCode + ", response = " + response.body);
	    if (response.statusCode >= 400) {
	      var m = response.body.match(/<faultstring>([^<]+)<\/faultstring>/);
	      var faultstring = m && m[1];
	      throw new Error(faultstring || response.body);
	    }

	    // Destroy the session bound to this connection
	    self.accessToken = null;
	    self.userInfo = null;
	    self.refreshToken = null;
	    self.instanceUrl = null;
	    self.cache.clear();

	    // nothing useful returned by logout API, just return
	    return undefined;

	  }).thenCall(callback);
	};

	/**
	 * List recently viewed records
	 *
	 * @param {String} [type] - SObject type
	 * @param {Number} [limit] - Limit num to fetch
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<Array.<RecordResult>>}
	 */
	Connection.prototype.recent = function(type, limit, callback) {
	  if (!_.isString(type)) {
	    callback = limit;
	    limit = type;
	    type = undefined;
	  }
	  if (!_.isNumber(limit)) {
	    callback = limit;
	    limit = undefined;
	  }
	  var url;
	  if (type) {
	    url = [ this._baseUrl(), "sobjects", type ].join('/');
	    return this.request(url).then(function(res) {
	      return limit ? res.recentItems.slice(0, limit) : res.recentItems;
	    }).thenCall(callback);
	  } else {
	    url = this._baseUrl() + "/recent";
	    if (limit) {
	      url += "?limit=" + limit;
	    }
	    return this.request(url).thenCall(callback);
	  }

	};

	/**
	 * @typedef {Object} UpdatedRecordsInfo
	 * @prop {String} latestDateCovered - The timestamp of the last date covered.
	 * @prop {Array.<String>} ids - Updated record IDs.
	 */

	/**
	 * Retrieve updated records
	 *
	 * @param {String} type - SObject Type
	 * @param {String|Date} start - start date or string representing the start of the interval
	 * @param {String|Date} end - start date or string representing the end of the interval must be > start
	 * @param {Callback.<UpdatedRecordsInfo>} [callback] - Callback function
	 * @returns {Promise.<UpdatedRecordsInfo>}
	 */
	Connection.prototype.updated = function (type, start, end, callback) {
	  var url = [ this._baseUrl(), "sobjects", type, "updated" ].join('/');

	  if (typeof start === 'string') {
	    start = new Date(start);
	  }

	  if (start instanceof Date) {
	    start = formatDate(start);
	  }

	  if (start) {
	    url += "?start=" + encodeURIComponent(start);
	  }

	  if (typeof end === 'string') {
	    end = new Date(end);
	  }

	  if (end instanceof Date) {
	    end = formatDate(end);
	  }

	  if (end) {
	    url += "&end=" + encodeURIComponent(end);
	  }

	  return this.request(url).thenCall(callback);
	};

	/**
	 * @typedef {Object} DeletedRecordsInfo
	 * @prop {String} earliestDateAvailable - The timestamp of the earliest date available
	 * @prop {String} latestDateCovered - The timestamp of the last date covered
	 * @prop {Array.<Object>} deletedRecords - Updated records
	 * @prop {String} deletedRecords.id - Record ID
	 * @prop {String} deletedRecords.deletedDate - The timestamp when this record was deleted
	 */

	/**
	 * Retrieve deleted records
	 *
	 * @param {String} type - SObject Type
	 * @param {String|Date} start - start date or string representing the start of the interval
	 * @param {String|Date} end - start date or string representing the end of the interval
	 * @param {Callback.<DeletedRecordsInfo>} [callback] - Callback function
	 * @returns {Promise.<DeletedRecordsInfo>}
	 */
	Connection.prototype.deleted = function (type, start, end, callback) {
	  var url = [ this._baseUrl(), "sobjects", type, "deleted" ].join('/');

	  if (typeof start === 'string') {
	    start = new Date(start);
	  }

	  if (start instanceof Date) {
	    start = formatDate(start);
	  }

	  if (start) {
	    url += "?start=" + encodeURIComponent(start);
	  }

	  if (typeof end === 'string') {
	    end = new Date(end);
	  }

	  if (end instanceof Date) {
	    end = formatDate(end);
	  }

	  if (end) {
	    url += "&end=" + encodeURIComponent(end);
	  }

	  return this.request(url).thenCall(callback);
	};


	/**
	 * @typedef {Object} TabsInfo - See the API document for detail structure
	 */

	/**
	 * Returns a list of all tabs
	 *
	 * @param {Callback.<TabsInfo>} [callback] - Callback function
	 * @returns {Promise.<TabsInfo>}
	 */
	Connection.prototype.tabs = function(callback) {
	  var url = [ this._baseUrl(), "tabs" ].join('/');
	  return this.request(url).thenCall(callback);
	};


	/**
	 * @typedef {Object} LimitsInfo - See the API document for detail structure
	 */

	/**
	 * Returns curren system limit in the organization
	 *
	 * @param {Callback.<LimitsInfo>} [callback] - Callback function
	 * @returns {Promise.<LimitsInfo>}
	 */
	Connection.prototype.limits = function(callback) {
	  var url = [ this._baseUrl(), "limits" ].join('/');
	  return this.request(url).thenCall(callback);
	};


	/**
	 * @typedef {Object} ThemeInfo - See the API document for detail structure
	 */

	/**
	 * Returns a theme info
	 *
	 * @param {Callback.<ThemeInfo>} [callback] - Callback function
	 * @returns {Promise.<ThemeInfo>}
	 */
	Connection.prototype.theme = function(callback) {
	  var url = [ this._baseUrl(), "theme" ].join('/');
	  return this.request(url).thenCall(callback);
	};

	/**
	 * Returns all registered global quick actions
	 *
	 * @param {Callback.<Array.<QuickAction~QuickActionInfo>>} [callback] - Callback function
	 * @returns {Promise.<Array.<QuickAction~QuickActionInfo>>}
	 */
	Connection.prototype.quickActions = function(callback) {
	  return this.request("/quickActions").thenCall(callback);
	};

	/**
	 * Get reference for specified global quick aciton
	 *
	 * @param {String} actionName - Name of the global quick action
	 * @returns {QuickAction}
	 */
	Connection.prototype.quickAction = function(actionName) {
	  return new QuickAction(this, "/quickActions/" + actionName);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(6)
	var ieee754 = __webpack_require__(7)
	var isArray = __webpack_require__(8)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * @license
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash core -o ./dist/lodash.core.js`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '4.17.2';

	  /** Error message constants. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used to compose bitmasks for value comparisons. */
	  var COMPARE_PARTIAL_FLAG = 1,
	      COMPARE_UNORDERED_FLAG = 2;

	  /** Used to compose bitmasks for function metadata. */
	  var WRAP_BIND_FLAG = 1,
	      WRAP_PARTIAL_FLAG = 32;

	  /** Used as references for various `Number` constants. */
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991;

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      asyncTag = '[object AsyncFunction]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      proxyTag = '[object Proxy]',
	      regexpTag = '[object RegExp]',
	      stringTag = '[object String]';

	  /** Used to match HTML entities and HTML characters. */
	  var reUnescapedHtml = /[&<>"']/g,
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	  /** Used as a reference to the global object. */
	  var root = freeGlobal || freeSelf || Function('return this')();

	  /** Detect free variable `exports`. */
	  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayPush(array, values) {
	    array.push.apply(array, values);
	    return array;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 1 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function baseProperty(key) {
	    return function(object) {
	      return object == null ? undefined : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function basePropertyOf(object) {
	    return function(key) {
	      return object == null ? undefined : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }

	  /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
	  function baseValues(object, props) {
	    return baseMap(props, function(key) {
	      return object[key];
	    });
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  var escapeHtmlChar = basePropertyOf(htmlEscapes);

	  /**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function(arg) {
	      return func(transform(arg));
	    };
	  }

	  /*--------------------------------------------------------------------------*/

	  /** Used for built-in method references. */
	  var arrayProto = Array.prototype,
	      objectProto = Object.prototype;

	  /** Used to check objects for own properties. */
	  var hasOwnProperty = objectProto.hasOwnProperty;

	  /** Used to generate unique IDs. */
	  var idCounter = 0;

	  /**
	   * Used to resolve the
	   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	   * of values.
	   */
	  var nativeObjectToString = objectProto.toString;

	  /** Used to restore the original `_` reference in `_.noConflict`. */
	  var oldDash = root._;

	  /** Built-in value references. */
	  var objectCreate = Object.create,
	      propertyIsEnumerable = objectProto.propertyIsEnumerable;

	  /* Built-in method references for those with the same name as other `lodash` methods. */
	  var nativeIsFinite = root.isFinite,
	      nativeKeys = overArg(Object.keys, Object),
	      nativeMax = Math.max;

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` object which wraps `value` to enable implicit method
	   * chain sequences. Methods that operate on and return arrays, collections,
	   * and functions can be chained together. Methods that retrieve a single value
	   * or may return a primitive value will automatically end the chain sequence
	   * and return the unwrapped value. Otherwise, the value must be unwrapped
	   * with `_#value`.
	   *
	   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	   * enabled using `_.chain`.
	   *
	   * The execution of chained methods is lazy, that is, it's deferred until
	   * `_#value` is implicitly or explicitly called.
	   *
	   * Lazy evaluation allows several methods to support shortcut fusion.
	   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	   * the creation of intermediate arrays and can greatly reduce the number of
	   * iteratee executions. Sections of a chain sequence qualify for shortcut
	   * fusion if the section is applied to an array of at least `200` elements
	   * and any iteratees accept only one argument. The heuristic for whether a
	   * section qualifies for shortcut fusion is subject to change.
	   *
	   * Chaining is supported in custom builds as long as the `_#value` method is
	   * directly or indirectly included in the build.
	   *
	   * In addition to lodash methods, wrappers have `Array` and `String` methods.
	   *
	   * The wrapper `Array` methods are:
	   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	   *
	   * The wrapper `String` methods are:
	   * `replace` and `split`
	   *
	   * The wrapper methods that support shortcut fusion are:
	   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	   *
	   * The chainable wrapper methods are:
	   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	   * `zipObject`, `zipObjectDeep`, and `zipWith`
	   *
	   * The wrapper methods that are **not** chainable by default are:
	   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	   * `upperFirst`, `value`, and `words`
	   *
	   * @name _
	   * @constructor
	   * @category Seq
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns the new `lodash` wrapper instance.
	   * @example
	   *
	   * function square(n) {
	   *   return n * n;
	   * }
	   *
	   * var wrapped = _([1, 2, 3]);
	   *
	   * // Returns an unwrapped value.
	   * wrapped.reduce(_.add);
	   * // => 6
	   *
	   * // Returns a wrapped value.
	   * var squares = wrapped.map(square);
	   *
	   * _.isArray(squares);
	   * // => false
	   *
	   * _.isArray(squares.value());
	   * // => true
	   */
	  function lodash(value) {
	    return value instanceof LodashWrapper
	      ? value
	      : new LodashWrapper(value);
	  }

	  /**
	   * The base implementation of `_.create` without support for assigning
	   * properties to the created object.
	   *
	   * @private
	   * @param {Object} proto The object to inherit from.
	   * @returns {Object} Returns the new object.
	   */
	  var baseCreate = (function() {
	    function object() {}
	    return function(proto) {
	      if (!isObject(proto)) {
	        return {};
	      }
	      if (objectCreate) {
	        return objectCreate(proto);
	      }
	      object.prototype = proto;
	      var result = new object;
	      object.prototype = undefined;
	      return result;
	    };
	  }());

	  /**
	   * The base constructor for creating `lodash` wrapper objects.
	   *
	   * @private
	   * @param {*} value The value to wrap.
	   * @param {boolean} [chainAll] Enable explicit method chain sequences.
	   */
	  function LodashWrapper(value, chainAll) {
	    this.__wrapped__ = value;
	    this.__actions__ = [];
	    this.__chain__ = !!chainAll;
	  }

	  LodashWrapper.prototype = baseCreate(lodash.prototype);
	  LodashWrapper.prototype.constructor = LodashWrapper;

	  /*------------------------------------------------------------------------*/

	  /**
	   * Used by `_.defaults` to customize its `_.assignIn` use.
	   *
	   * @private
	   * @param {*} objValue The destination value.
	   * @param {*} srcValue The source value.
	   * @param {string} key The key of the property to assign.
	   * @param {Object} object The parent object of `objValue`.
	   * @returns {*} Returns the value to assign.
	   */
	  function assignInDefaults(objValue, srcValue, key, object) {
	    if (objValue === undefined ||
	        (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	      return srcValue;
	    }
	    return objValue;
	  }

	  /**
	   * Assigns `value` to `key` of `object` if the existing value is not equivalent
	   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	   * for equality comparisons.
	   *
	   * @private
	   * @param {Object} object The object to modify.
	   * @param {string} key The key of the property to assign.
	   * @param {*} value The value to assign.
	   */
	  function assignValue(object, key, value) {
	    var objValue = object[key];
	    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	        (value === undefined && !(key in object))) {
	      baseAssignValue(object, key, value);
	    }
	  }

	  /**
	   * The base implementation of `assignValue` and `assignMergeValue` without
	   * value checks.
	   *
	   * @private
	   * @param {Object} object The object to modify.
	   * @param {string} key The key of the property to assign.
	   * @param {*} value The value to assign.
	   */
	  function baseAssignValue(object, key, value) {
	    object[key] = value;
	  }

	  /**
	   * The base implementation of `_.delay` and `_.defer` which accepts `args`
	   * to provide to `func`.
	   *
	   * @private
	   * @param {Function} func The function to delay.
	   * @param {number} wait The number of milliseconds to delay invocation.
	   * @param {Array} args The arguments to provide to `func`.
	   * @returns {number|Object} Returns the timer id or timeout object.
	   */
	  function baseDelay(func, wait, args) {
	    if (typeof func != 'function') {
	      throw new TypeError(FUNC_ERROR_TEXT);
	    }
	    return setTimeout(function() { func.apply(undefined, args); }, wait);
	  }

	  /**
	   * The base implementation of `_.forEach` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array|Object} Returns `collection`.
	   */
	  var baseEach = createBaseEach(baseForOwn);

	  /**
	   * The base implementation of `_.every` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`
	   */
	  function baseEvery(collection, predicate) {
	    var result = true;
	    baseEach(collection, function(value, index, collection) {
	      result = !!predicate(value, index, collection);
	      return result;
	    });
	    return result;
	  }

	  /**
	   * The base implementation of methods like `_.max` and `_.min` which accepts a
	   * `comparator` to determine the extremum value.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The iteratee invoked per iteration.
	   * @param {Function} comparator The comparator used to compare values.
	   * @returns {*} Returns the extremum value.
	   */
	  function baseExtremum(array, iteratee, comparator) {
	    var index = -1,
	        length = array.length;

	    while (++index < length) {
	      var value = array[index],
	          current = iteratee(value);

	      if (current != null && (computed === undefined
	            ? (current === current && !false)
	            : comparator(current, computed)
	          )) {
	        var computed = current,
	            result = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.filter` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
	  function baseFilter(collection, predicate) {
	    var result = [];
	    baseEach(collection, function(value, index, collection) {
	      if (predicate(value, index, collection)) {
	        result.push(value);
	      }
	    });
	    return result;
	  }

	  /**
	   * The base implementation of `_.flatten` with support for restricting flattening.
	   *
	   * @private
	   * @param {Array} array The array to flatten.
	   * @param {number} depth The maximum recursion depth.
	   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	   * @param {Array} [result=[]] The initial result value.
	   * @returns {Array} Returns the new flattened array.
	   */
	  function baseFlatten(array, depth, predicate, isStrict, result) {
	    var index = -1,
	        length = array.length;

	    predicate || (predicate = isFlattenable);
	    result || (result = []);

	    while (++index < length) {
	      var value = array[index];
	      if (depth > 0 && predicate(value)) {
	        if (depth > 1) {
	          // Recursively flatten arrays (susceptible to call stack limits).
	          baseFlatten(value, depth - 1, predicate, isStrict, result);
	        } else {
	          arrayPush(result, value);
	        }
	      } else if (!isStrict) {
	        result[result.length] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `baseForOwn` which iterates over `object`
	   * properties returned by `keysFunc` and invokes `iteratee` for each property.
	   * Iteratee functions may exit iteration early by explicitly returning `false`.
	   *
	   * @private
	   * @param {Object} object The object to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {Function} keysFunc The function to get the keys of `object`.
	   * @returns {Object} Returns `object`.
	   */
	  var baseFor = createBaseFor();

	  /**
	   * The base implementation of `_.forOwn` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Object} object The object to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Object} Returns `object`.
	   */
	  function baseForOwn(object, iteratee) {
	    return object && baseFor(object, iteratee, keys);
	  }

	  /**
	   * The base implementation of `_.functions` which creates an array of
	   * `object` function property names filtered from `props`.
	   *
	   * @private
	   * @param {Object} object The object to inspect.
	   * @param {Array} props The property names to filter.
	   * @returns {Array} Returns the function names.
	   */
	  function baseFunctions(object, props) {
	    return baseFilter(props, function(key) {
	      return isFunction(object[key]);
	    });
	  }

	  /**
	   * The base implementation of `getTag` without fallbacks for buggy environments.
	   *
	   * @private
	   * @param {*} value The value to query.
	   * @returns {string} Returns the `toStringTag`.
	   */
	  function baseGetTag(value) {
	    return objectToString(value);
	  }

	  /**
	   * The base implementation of `_.gt` which doesn't coerce arguments.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {boolean} Returns `true` if `value` is greater than `other`,
	   *  else `false`.
	   */
	  function baseGt(value, other) {
	    return value > other;
	  }

	  /**
	   * The base implementation of `_.isArguments`.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	   */
	  var baseIsArguments = noop;

	  /**
	   * The base implementation of `_.isDate` without Node.js optimizations.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	   */
	  function baseIsDate(value) {
	    return isObjectLike(value) && baseGetTag(value) == dateTag;
	  }

	  /**
	   * The base implementation of `_.isEqual` which supports partial comparisons
	   * and tracks traversed objects.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @param {boolean} bitmask The bitmask flags.
	   *  1 - Unordered comparison
	   *  2 - Partial comparison
	   * @param {Function} [customizer] The function to customize comparisons.
	   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   */
	  function baseIsEqual(value, other, bitmask, customizer, stack) {
	    if (value === other) {
	      return true;
	    }
	    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	      return value !== value && other !== other;
	    }
	    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	  }

	  /**
	   * A specialized version of `baseIsEqual` for arrays and objects which performs
	   * deep comparisons and tracks traversed objects enabling objects with circular
	   * references to be compared.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	    var objIsArr = isArray(object),
	        othIsArr = isArray(other),
	        objTag = arrayTag,
	        othTag = arrayTag;

	    if (!objIsArr) {
	      objTag = baseGetTag(object);
	      objTag = objTag == argsTag ? objectTag : objTag;
	    }
	    if (!othIsArr) {
	      othTag = baseGetTag(other);
	      othTag = othTag == argsTag ? objectTag : othTag;
	    }
	    var objIsObj = objTag == objectTag,
	        othIsObj = othTag == objectTag,
	        isSameTag = objTag == othTag;

	    stack || (stack = []);
	    var objStack = find(stack, function(entry) {
	      return entry[0] == object;
	    });
	    var othStack = find(stack, function(entry) {
	      return entry[0] == other;
	    });
	    if (objStack && othStack) {
	      return objStack[1] == other;
	    }
	    stack.push([object, other]);
	    stack.push([other, object]);
	    if (isSameTag && !objIsObj) {
	      var result = (objIsArr)
	        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	      stack.pop();
	      return result;
	    }
	    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	      if (objIsWrapped || othIsWrapped) {
	        var objUnwrapped = objIsWrapped ? object.value() : object,
	            othUnwrapped = othIsWrapped ? other.value() : other;

	        var result = equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	        stack.pop();
	        return result;
	      }
	    }
	    if (!isSameTag) {
	      return false;
	    }
	    var result = equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	    stack.pop();
	    return result;
	  }

	  /**
	   * The base implementation of `_.isRegExp` without Node.js optimizations.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	   */
	  function baseIsRegExp(value) {
	    return isObjectLike(value) && baseGetTag(value) == regexpTag;
	  }

	  /**
	   * The base implementation of `_.iteratee`.
	   *
	   * @private
	   * @param {*} [value=_.identity] The value to convert to an iteratee.
	   * @returns {Function} Returns the iteratee.
	   */
	  function baseIteratee(func) {
	    if (typeof func == 'function') {
	      return func;
	    }
	    if (func == null) {
	      return identity;
	    }
	    return (typeof func == 'object' ? baseMatches : baseProperty)(func);
	  }

	  /**
	   * The base implementation of `_.lt` which doesn't coerce arguments.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {boolean} Returns `true` if `value` is less than `other`,
	   *  else `false`.
	   */
	  function baseLt(value, other) {
	    return value < other;
	  }

	  /**
	   * The base implementation of `_.map` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
	  function baseMap(collection, iteratee) {
	    var index = -1,
	        result = isArrayLike(collection) ? Array(collection.length) : [];

	    baseEach(collection, function(value, key, collection) {
	      result[++index] = iteratee(value, key, collection);
	    });
	    return result;
	  }

	  /**
	   * The base implementation of `_.matches` which doesn't clone `source`.
	   *
	   * @private
	   * @param {Object} source The object of property values to match.
	   * @returns {Function} Returns the new spec function.
	   */
	  function baseMatches(source) {
	    var props = nativeKeys(source);
	    return function(object) {
	      var length = props.length;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (length--) {
	        var key = props[length];
	        if (!(key in object &&
	              baseIsEqual(source[key], object[key], COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
	            )) {
	          return false;
	        }
	      }
	      return true;
	    };
	  }

	  /**
	   * The base implementation of `_.pick` without support for individual
	   * property identifiers.
	   *
	   * @private
	   * @param {Object} object The source object.
	   * @param {string[]} paths The property paths to pick.
	   * @returns {Object} Returns the new object.
	   */
	  function basePick(object, props) {
	    object = Object(object);
	    return reduce(props, function(result, key) {
	      if (key in object) {
	        result[key] = object[key];
	      }
	      return result;
	    }, {});
	  }

	  /**
	   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	   *
	   * @private
	   * @param {Function} func The function to apply a rest parameter to.
	   * @param {number} [start=func.length-1] The start position of the rest parameter.
	   * @returns {Function} Returns the new function.
	   */
	  function baseRest(func, start) {
	    return setToString(overRest(func, start, identity), func + '');
	  }

	  /**
	   * The base implementation of `_.slice` without an iteratee call guard.
	   *
	   * @private
	   * @param {Array} array The array to slice.
	   * @param {number} [start=0] The start position.
	   * @param {number} [end=array.length] The end position.
	   * @returns {Array} Returns the slice of `array`.
	   */
	  function baseSlice(array, start, end) {
	    var index = -1,
	        length = array.length;

	    if (start < 0) {
	      start = -start > length ? 0 : (length + start);
	    }
	    end = end > length ? length : end;
	    if (end < 0) {
	      end += length;
	    }
	    length = start > end ? 0 : ((end - start) >>> 0);
	    start >>>= 0;

	    var result = Array(length);
	    while (++index < length) {
	      result[index] = array[index + start];
	    }
	    return result;
	  }

	  /**
	   * Copies the values of `source` to `array`.
	   *
	   * @private
	   * @param {Array} source The array to copy values from.
	   * @param {Array} [array=[]] The array to copy values to.
	   * @returns {Array} Returns `array`.
	   */
	  function copyArray(source) {
	    return baseSlice(source, 0, source.length);
	  }

	  /**
	   * The base implementation of `_.some` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function baseSome(collection, predicate) {
	    var result;

	    baseEach(collection, function(value, index, collection) {
	      result = predicate(value, index, collection);
	      return !result;
	    });
	    return !!result;
	  }

	  /**
	   * The base implementation of `wrapperValue` which returns the result of
	   * performing a sequence of actions on the unwrapped `value`, where each
	   * successive action is supplied the return value of the previous.
	   *
	   * @private
	   * @param {*} value The unwrapped value.
	   * @param {Array} actions Actions to perform to resolve the unwrapped value.
	   * @returns {*} Returns the resolved value.
	   */
	  function baseWrapperValue(value, actions) {
	    var result = value;
	    return reduce(actions, function(result, action) {
	      return action.func.apply(action.thisArg, arrayPush([result], action.args));
	    }, result);
	  }

	  /**
	   * Compares values to sort them in ascending order.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function compareAscending(value, other) {
	    if (value !== other) {
	      var valIsDefined = value !== undefined,
	          valIsNull = value === null,
	          valIsReflexive = value === value,
	          valIsSymbol = false;

	      var othIsDefined = other !== undefined,
	          othIsNull = other === null,
	          othIsReflexive = other === other,
	          othIsSymbol = false;

	      if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	          (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	          (valIsNull && othIsDefined && othIsReflexive) ||
	          (!valIsDefined && othIsReflexive) ||
	          !valIsReflexive) {
	        return 1;
	      }
	      if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	          (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	          (othIsNull && valIsDefined && valIsReflexive) ||
	          (!othIsDefined && valIsReflexive) ||
	          !othIsReflexive) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * Copies properties of `source` to `object`.
	   *
	   * @private
	   * @param {Object} source The object to copy properties from.
	   * @param {Array} props The property identifiers to copy.
	   * @param {Object} [object={}] The object to copy properties to.
	   * @param {Function} [customizer] The function to customize copied values.
	   * @returns {Object} Returns `object`.
	   */
	  function copyObject(source, props, object, customizer) {
	    var isNew = !object;
	    object || (object = {});

	    var index = -1,
	        length = props.length;

	    while (++index < length) {
	      var key = props[index];

	      var newValue = customizer
	        ? customizer(object[key], source[key], key, object, source)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = source[key];
	      }
	      if (isNew) {
	        baseAssignValue(object, key, newValue);
	      } else {
	        assignValue(object, key, newValue);
	      }
	    }
	    return object;
	  }

	  /**
	   * Creates a function like `_.assign`.
	   *
	   * @private
	   * @param {Function} assigner The function to assign values.
	   * @returns {Function} Returns the new assigner function.
	   */
	  function createAssigner(assigner) {
	    return baseRest(function(object, sources) {
	      var index = -1,
	          length = sources.length,
	          customizer = length > 1 ? sources[length - 1] : undefined;

	      customizer = (assigner.length > 3 && typeof customizer == 'function')
	        ? (length--, customizer)
	        : undefined;

	      object = Object(object);
	      while (++index < length) {
	        var source = sources[index];
	        if (source) {
	          assigner(object, source, index, customizer);
	        }
	      }
	      return object;
	    });
	  }

	  /**
	   * Creates a `baseEach` or `baseEachRight` function.
	   *
	   * @private
	   * @param {Function} eachFunc The function to iterate over a collection.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {Function} Returns the new base function.
	   */
	  function createBaseEach(eachFunc, fromRight) {
	    return function(collection, iteratee) {
	      if (collection == null) {
	        return collection;
	      }
	      if (!isArrayLike(collection)) {
	        return eachFunc(collection, iteratee);
	      }
	      var length = collection.length,
	          index = fromRight ? length : -1,
	          iterable = Object(collection);

	      while ((fromRight ? index-- : ++index < length)) {
	        if (iteratee(iterable[index], index, iterable) === false) {
	          break;
	        }
	      }
	      return collection;
	    };
	  }

	  /**
	   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	   *
	   * @private
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {Function} Returns the new base function.
	   */
	  function createBaseFor(fromRight) {
	    return function(object, iteratee, keysFunc) {
	      var index = -1,
	          iterable = Object(object),
	          props = keysFunc(object),
	          length = props.length;

	      while (length--) {
	        var key = props[fromRight ? length : ++index];
	        if (iteratee(iterable[key], key, iterable) === false) {
	          break;
	        }
	      }
	      return object;
	    };
	  }

	  /**
	   * Creates a function that produces an instance of `Ctor` regardless of
	   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	   *
	   * @private
	   * @param {Function} Ctor The constructor to wrap.
	   * @returns {Function} Returns the new wrapped function.
	   */
	  function createCtor(Ctor) {
	    return function() {
	      // Use a `switch` statement to work with class constructors. See
	      // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	      // for more details.
	      var args = arguments;
	      var thisBinding = baseCreate(Ctor.prototype),
	          result = Ctor.apply(thisBinding, args);

	      // Mimic the constructor's `return` behavior.
	      // See https://es5.github.io/#x13.2.2 for more details.
	      return isObject(result) ? result : thisBinding;
	    };
	  }

	  /**
	   * Creates a `_.find` or `_.findLast` function.
	   *
	   * @private
	   * @param {Function} findIndexFunc The function to find the collection index.
	   * @returns {Function} Returns the new find function.
	   */
	  function createFind(findIndexFunc) {
	    return function(collection, predicate, fromIndex) {
	      var iterable = Object(collection);
	      if (!isArrayLike(collection)) {
	        var iteratee = baseIteratee(predicate, 3);
	        collection = keys(collection);
	        predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	      }
	      var index = findIndexFunc(collection, predicate, fromIndex);
	      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	    };
	  }

	  /**
	   * Creates a function that wraps `func` to invoke it with the `this` binding
	   * of `thisArg` and `partials` prepended to the arguments it receives.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} partials The arguments to prepend to those provided to
	   *  the new function.
	   * @returns {Function} Returns the new wrapped function.
	   */
	  function createPartial(func, bitmask, thisArg, partials) {
	    if (typeof func != 'function') {
	      throw new TypeError(FUNC_ERROR_TEXT);
	    }
	    var isBind = bitmask & WRAP_BIND_FLAG,
	        Ctor = createCtor(func);

	    function wrapper() {
	      var argsIndex = -1,
	          argsLength = arguments.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          args = Array(leftLength + argsLength),
	          fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	      while (++leftIndex < leftLength) {
	        args[leftIndex] = partials[leftIndex];
	      }
	      while (argsLength--) {
	        args[leftIndex++] = arguments[++argsIndex];
	      }
	      return fn.apply(isBind ? thisArg : this, args);
	    }
	    return wrapper;
	  }

	  /**
	   * A specialized version of `baseIsEqualDeep` for arrays with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Array} array The array to compare.
	   * @param {Array} other The other array to compare.
	   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Object} stack Tracks traversed `array` and `other` objects.
	   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	   */
	  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	        arrLength = array.length,
	        othLength = other.length;

	    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	      return false;
	    }
	    var index = -1,
	        result = true,
	        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? [] : undefined;

	    // Ignore non-index properties.
	    while (++index < arrLength) {
	      var arrValue = array[index],
	          othValue = other[index];

	      var compared;
	      if (compared !== undefined) {
	        if (compared) {
	          continue;
	        }
	        result = false;
	        break;
	      }
	      // Recursively compare arrays (susceptible to call stack limits).
	      if (seen) {
	        if (!baseSome(other, function(othValue, othIndex) {
	              if (!indexOf(seen, othIndex) &&
	                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	                return seen.push(othIndex);
	              }
	            })) {
	          result = false;
	          break;
	        }
	      } else if (!(
	            arrValue === othValue ||
	              equalFunc(arrValue, othValue, bitmask, customizer, stack)
	          )) {
	        result = false;
	        break;
	      }
	    }
	    return result;
	  }

	  /**
	   * A specialized version of `baseIsEqualDeep` for comparing objects of
	   * the same `toStringTag`.
	   *
	   * **Note:** This function only supports comparing values with tags of
	   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {string} tag The `toStringTag` of the objects to compare.
	   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Object} stack Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	    switch (tag) {

	      case boolTag:
	      case dateTag:
	      case numberTag:
	        // Coerce booleans to `1` or `0` and dates to milliseconds.
	        // Invalid dates are coerced to `NaN`.
	        return eq(+object, +other);

	      case errorTag:
	        return object.name == other.name && object.message == other.message;

	      case regexpTag:
	      case stringTag:
	        // Coerce regexes to strings and treat strings, primitives and objects,
	        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	        // for more details.
	        return object == (other + '');

	    }
	    return false;
	  }

	  /**
	   * A specialized version of `baseIsEqualDeep` for objects with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Object} stack Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	        objProps = keys(object),
	        objLength = objProps.length,
	        othProps = keys(other),
	        othLength = othProps.length;

	    if (objLength != othLength && !isPartial) {
	      return false;
	    }
	    var index = objLength;
	    while (index--) {
	      var key = objProps[index];
	      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	        return false;
	      }
	    }
	    var result = true;

	    var skipCtor = isPartial;
	    while (++index < objLength) {
	      key = objProps[index];
	      var objValue = object[key],
	          othValue = other[key];

	      var compared;
	      // Recursively compare objects (susceptible to call stack limits).
	      if (!(compared === undefined
	            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	            : compared
	          )) {
	        result = false;
	        break;
	      }
	      skipCtor || (skipCtor = key == 'constructor');
	    }
	    if (result && !skipCtor) {
	      var objCtor = object.constructor,
	          othCtor = other.constructor;

	      // Non `Object` object instances with different constructors are not equal.
	      if (objCtor != othCtor &&
	          ('constructor' in object && 'constructor' in other) &&
	          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	        result = false;
	      }
	    }
	    return result;
	  }

	  /**
	   * A specialized version of `baseRest` which flattens the rest array.
	   *
	   * @private
	   * @param {Function} func The function to apply a rest parameter to.
	   * @returns {Function} Returns the new function.
	   */
	  function flatRest(func) {
	    return setToString(overRest(func, undefined, flatten), func + '');
	  }

	  /**
	   * Checks if `value` is a flattenable `arguments` object or array.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	   */
	  function isFlattenable(value) {
	    return isArray(value) || isArguments(value);
	  }

	  /**
	   * This function is like
	   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	   * except that it includes inherited enumerable properties.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   */
	  function nativeKeysIn(object) {
	    var result = [];
	    if (object != null) {
	      for (var key in Object(object)) {
	        result.push(key);
	      }
	    }
	    return result;
	  }

	  /**
	   * Converts `value` to a string using `Object.prototype.toString`.
	   *
	   * @private
	   * @param {*} value The value to convert.
	   * @returns {string} Returns the converted string.
	   */
	  function objectToString(value) {
	    return nativeObjectToString.call(value);
	  }

	  /**
	   * A specialized version of `baseRest` which transforms the rest array.
	   *
	   * @private
	   * @param {Function} func The function to apply a rest parameter to.
	   * @param {number} [start=func.length-1] The start position of the rest parameter.
	   * @param {Function} transform The rest array transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overRest(func, start, transform) {
	    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	    return function() {
	      var args = arguments,
	          index = -1,
	          length = nativeMax(args.length - start, 0),
	          array = Array(length);

	      while (++index < length) {
	        array[index] = args[start + index];
	      }
	      index = -1;
	      var otherArgs = Array(start + 1);
	      while (++index < start) {
	        otherArgs[index] = args[index];
	      }
	      otherArgs[start] = transform(array);
	      return func.apply(this, otherArgs);
	    };
	  }

	  /**
	   * Sets the `toString` method of `func` to return `string`.
	   *
	   * @private
	   * @param {Function} func The function to modify.
	   * @param {Function} string The `toString` result.
	   * @returns {Function} Returns `func`.
	   */
	  var setToString = identity;

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates an array with all falsey values removed. The values `false`, `null`,
	   * `0`, `""`, `undefined`, and `NaN` are falsey.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Array
	   * @param {Array} array The array to compact.
	   * @returns {Array} Returns the new array of filtered values.
	   * @example
	   *
	   * _.compact([0, 1, false, 2, '', 3]);
	   * // => [1, 2, 3]
	   */
	  function compact(array) {
	    return baseFilter(array, Boolean);
	  }

	  /**
	   * Creates a new array concatenating `array` with any additional arrays
	   * and/or values.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Array
	   * @param {Array} array The array to concatenate.
	   * @param {...*} [values] The values to concatenate.
	   * @returns {Array} Returns the new concatenated array.
	   * @example
	   *
	   * var array = [1];
	   * var other = _.concat(array, 2, [3], [[4]]);
	   *
	   * console.log(other);
	   * // => [1, 2, 3, [4]]
	   *
	   * console.log(array);
	   * // => [1]
	   */
	  function concat() {
	    var length = arguments.length;
	    if (!length) {
	      return [];
	    }
	    var args = Array(length - 1),
	        array = arguments[0],
	        index = length;

	    while (index--) {
	      args[index - 1] = arguments[index];
	    }
	    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	  }

	  /**
	   * This method is like `_.find` except that it returns the index of the first
	   * element `predicate` returns truthy for instead of the element itself.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Array
	   * @param {Array} array The array to inspect.
	   * @param {Function} [predicate=_.identity] The function invoked per iteration.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {number} Returns the index of the found element, else `-1`.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney',  'active': false },
	   *   { 'user': 'fred',    'active': false },
	   *   { 'user': 'pebbles', 'active': true }
	   * ];
	   *
	   * _.findIndex(users, function(o) { return o.user == 'barney'; });
	   * // => 0
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.findIndex(users, { 'user': 'fred', 'active': false });
	   * // => 1
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.findIndex(users, ['active', false]);
	   * // => 0
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.findIndex(users, 'active');
	   * // => 2
	   */
	  function findIndex(array, predicate, fromIndex) {
	    var length = array == null ? 0 : array.length;
	    if (!length) {
	      return -1;
	    }
	    var index = fromIndex == null ? 0 : toInteger(fromIndex);
	    if (index < 0) {
	      index = nativeMax(length + index, 0);
	    }
	    return baseFindIndex(array, baseIteratee(predicate, 3), index);
	  }

	  /**
	   * Flattens `array` a single level deep.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Array
	   * @param {Array} array The array to flatten.
	   * @returns {Array} Returns the new flattened array.
	   * @example
	   *
	   * _.flatten([1, [2, [3, [4]], 5]]);
	   * // => [1, 2, [3, [4]], 5]
	   */
	  function flatten(array) {
	    var length = array == null ? 0 : array.length;
	    return length ? baseFlatten(array, 1) : [];
	  }

	  /**
	   * Recursively flattens `array`.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Array
	   * @param {Array} array The array to flatten.
	   * @returns {Array} Returns the new flattened array.
	   * @example
	   *
	   * _.flattenDeep([1, [2, [3, [4]], 5]]);
	   * // => [1, 2, 3, 4, 5]
	   */
	  function flattenDeep(array) {
	    var length = array == null ? 0 : array.length;
	    return length ? baseFlatten(array, INFINITY) : [];
	  }

	  /**
	   * Gets the first element of `array`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @alias first
	   * @category Array
	   * @param {Array} array The array to query.
	   * @returns {*} Returns the first element of `array`.
	   * @example
	   *
	   * _.head([1, 2, 3]);
	   * // => 1
	   *
	   * _.head([]);
	   * // => undefined
	   */
	  function head(array) {
	    return (array && array.length) ? array[0] : undefined;
	  }

	  /**
	   * Gets the index at which the first occurrence of `value` is found in `array`
	   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	   * for equality comparisons. If `fromIndex` is negative, it's used as the
	   * offset from the end of `array`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Array
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   * @example
	   *
	   * _.indexOf([1, 2, 1, 2], 2);
	   * // => 1
	   *
	   * // Search from the `fromIndex`.
	   * _.indexOf([1, 2, 1, 2], 2, 2);
	   * // => 3
	   */
	  function indexOf(array, value, fromIndex) {
	    var length = array == null ? 0 : array.length;
	    if (typeof fromIndex == 'number') {
	      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	    } else {
	      fromIndex = 0;
	    }
	    var index = (fromIndex || 0) - 1,
	        isReflexive = value === value;

	    while (++index < length) {
	      var other = array[index];
	      if ((isReflexive ? other === value : other !== other)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Gets the last element of `array`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Array
	   * @param {Array} array The array to query.
	   * @returns {*} Returns the last element of `array`.
	   * @example
	   *
	   * _.last([1, 2, 3]);
	   * // => 3
	   */
	  function last(array) {
	    var length = array == null ? 0 : array.length;
	    return length ? array[length - 1] : undefined;
	  }

	  /**
	   * Creates a slice of `array` from `start` up to, but not including, `end`.
	   *
	   * **Note:** This method is used instead of
	   * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	   * returned.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Array
	   * @param {Array} array The array to slice.
	   * @param {number} [start=0] The start position.
	   * @param {number} [end=array.length] The end position.
	   * @returns {Array} Returns the slice of `array`.
	   */
	  function slice(array, start, end) {
	    var length = array == null ? 0 : array.length;
	    start = start == null ? 0 : +start;
	    end = end === undefined ? length : +end;
	    return length ? baseSlice(array, start, end) : [];
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	   * chain sequences enabled. The result of such sequences must be unwrapped
	   * with `_#value`.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.3.0
	   * @category Seq
	   * @param {*} value The value to wrap.
	   * @returns {Object} Returns the new `lodash` wrapper instance.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney',  'age': 36 },
	   *   { 'user': 'fred',    'age': 40 },
	   *   { 'user': 'pebbles', 'age': 1 }
	   * ];
	   *
	   * var youngest = _
	   *   .chain(users)
	   *   .sortBy('age')
	   *   .map(function(o) {
	   *     return o.user + ' is ' + o.age;
	   *   })
	   *   .head()
	   *   .value();
	   * // => 'pebbles is 1'
	   */
	  function chain(value) {
	    var result = lodash(value);
	    result.__chain__ = true;
	    return result;
	  }

	  /**
	   * This method invokes `interceptor` and returns `value`. The interceptor
	   * is invoked with one argument; (value). The purpose of this method is to
	   * "tap into" a method chain sequence in order to modify intermediate results.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Seq
	   * @param {*} value The value to provide to `interceptor`.
	   * @param {Function} interceptor The function to invoke.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * _([1, 2, 3])
	   *  .tap(function(array) {
	   *    // Mutate input array.
	   *    array.pop();
	   *  })
	   *  .reverse()
	   *  .value();
	   * // => [2, 1]
	   */
	  function tap(value, interceptor) {
	    interceptor(value);
	    return value;
	  }

	  /**
	   * This method is like `_.tap` except that it returns the result of `interceptor`.
	   * The purpose of this method is to "pass thru" values replacing intermediate
	   * results in a method chain sequence.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Seq
	   * @param {*} value The value to provide to `interceptor`.
	   * @param {Function} interceptor The function to invoke.
	   * @returns {*} Returns the result of `interceptor`.
	   * @example
	   *
	   * _('  abc  ')
	   *  .chain()
	   *  .trim()
	   *  .thru(function(value) {
	   *    return [value];
	   *  })
	   *  .value();
	   * // => ['abc']
	   */
	  function thru(value, interceptor) {
	    return interceptor(value);
	  }

	  /**
	   * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	   *
	   * @name chain
	   * @memberOf _
	   * @since 0.1.0
	   * @category Seq
	   * @returns {Object} Returns the new `lodash` wrapper instance.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36 },
	   *   { 'user': 'fred',   'age': 40 }
	   * ];
	   *
	   * // A sequence without explicit chaining.
	   * _(users).head();
	   * // => { 'user': 'barney', 'age': 36 }
	   *
	   * // A sequence with explicit chaining.
	   * _(users)
	   *   .chain()
	   *   .head()
	   *   .pick('user')
	   *   .value();
	   * // => { 'user': 'barney' }
	   */
	  function wrapperChain() {
	    return chain(this);
	  }

	  /**
	   * Executes the chain sequence to resolve the unwrapped value.
	   *
	   * @name value
	   * @memberOf _
	   * @since 0.1.0
	   * @alias toJSON, valueOf
	   * @category Seq
	   * @returns {*} Returns the resolved unwrapped value.
	   * @example
	   *
	   * _([1, 2, 3]).value();
	   * // => [1, 2, 3]
	   */
	  function wrapperValue() {
	    return baseWrapperValue(this.__wrapped__, this.__actions__);
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Checks if `predicate` returns truthy for **all** elements of `collection`.
	   * Iteration is stopped once `predicate` returns falsey. The predicate is
	   * invoked with three arguments: (value, index|key, collection).
	   *
	   * **Note:** This method returns `true` for
	   * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	   * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	   * elements of empty collections.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [predicate=_.identity] The function invoked per iteration.
	   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   * @example
	   *
	   * _.every([true, 1, null, 'yes'], Boolean);
	   * // => false
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36, 'active': false },
	   *   { 'user': 'fred',   'age': 40, 'active': false }
	   * ];
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.every(users, { 'user': 'barney', 'active': false });
	   * // => false
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.every(users, ['active', false]);
	   * // => true
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.every(users, 'active');
	   * // => false
	   */
	  function every(collection, predicate, guard) {
	    predicate = guard ? undefined : predicate;
	    return baseEvery(collection, baseIteratee(predicate));
	  }

	  /**
	   * Iterates over elements of `collection`, returning an array of all elements
	   * `predicate` returns truthy for. The predicate is invoked with three
	   * arguments: (value, index|key, collection).
	   *
	   * **Note:** Unlike `_.remove`, this method returns a new array.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [predicate=_.identity] The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   * @see _.reject
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36, 'active': true },
	   *   { 'user': 'fred',   'age': 40, 'active': false }
	   * ];
	   *
	   * _.filter(users, function(o) { return !o.active; });
	   * // => objects for ['fred']
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.filter(users, { 'age': 36, 'active': true });
	   * // => objects for ['barney']
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.filter(users, ['active', false]);
	   * // => objects for ['fred']
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.filter(users, 'active');
	   * // => objects for ['barney']
	   */
	  function filter(collection, predicate) {
	    return baseFilter(collection, baseIteratee(predicate));
	  }

	  /**
	   * Iterates over elements of `collection`, returning the first element
	   * `predicate` returns truthy for. The predicate is invoked with three
	   * arguments: (value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} [predicate=_.identity] The function invoked per iteration.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {*} Returns the matched element, else `undefined`.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney',  'age': 36, 'active': true },
	   *   { 'user': 'fred',    'age': 40, 'active': false },
	   *   { 'user': 'pebbles', 'age': 1,  'active': true }
	   * ];
	   *
	   * _.find(users, function(o) { return o.age < 40; });
	   * // => object for 'barney'
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.find(users, { 'age': 1, 'active': true });
	   * // => object for 'pebbles'
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.find(users, ['active', false]);
	   * // => object for 'fred'
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.find(users, 'active');
	   * // => object for 'barney'
	   */
	  var find = createFind(findIndex);

	  /**
	   * Iterates over elements of `collection` and invokes `iteratee` for each element.
	   * The iteratee is invoked with three arguments: (value, index|key, collection).
	   * Iteratee functions may exit iteration early by explicitly returning `false`.
	   *
	   * **Note:** As with other "Collections" methods, objects with a "length"
	   * property are iterated like arrays. To avoid this behavior use `_.forIn`
	   * or `_.forOwn` for object iteration.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @alias each
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	   * @returns {Array|Object} Returns `collection`.
	   * @see _.forEachRight
	   * @example
	   *
	   * _.forEach([1, 2], function(value) {
	   *   console.log(value);
	   * });
	   * // => Logs `1` then `2`.
	   *
	   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	   *   console.log(key);
	   * });
	   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	   */
	  function forEach(collection, iteratee) {
	    return baseEach(collection, baseIteratee(iteratee));
	  }

	  /**
	   * Creates an array of values by running each element in `collection` thru
	   * `iteratee`. The iteratee is invoked with three arguments:
	   * (value, index|key, collection).
	   *
	   * Many lodash methods are guarded to work as iteratees for methods like
	   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	   *
	   * The guarded methods are:
	   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   * @example
	   *
	   * function square(n) {
	   *   return n * n;
	   * }
	   *
	   * _.map([4, 8], square);
	   * // => [16, 64]
	   *
	   * _.map({ 'a': 4, 'b': 8 }, square);
	   * // => [16, 64] (iteration order is not guaranteed)
	   *
	   * var users = [
	   *   { 'user': 'barney' },
	   *   { 'user': 'fred' }
	   * ];
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.map(users, 'user');
	   * // => ['barney', 'fred']
	   */
	  function map(collection, iteratee) {
	    return baseMap(collection, baseIteratee(iteratee));
	  }

	  /**
	   * Reduces `collection` to a value which is the accumulated result of running
	   * each element in `collection` thru `iteratee`, where each successive
	   * invocation is supplied the return value of the previous. If `accumulator`
	   * is not given, the first element of `collection` is used as the initial
	   * value. The iteratee is invoked with four arguments:
	   * (accumulator, value, index|key, collection).
	   *
	   * Many lodash methods are guarded to work as iteratees for methods like
	   * `_.reduce`, `_.reduceRight`, and `_.transform`.
	   *
	   * The guarded methods are:
	   * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	   * and `sortBy`
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @returns {*} Returns the accumulated value.
	   * @see _.reduceRight
	   * @example
	   *
	   * _.reduce([1, 2], function(sum, n) {
	   *   return sum + n;
	   * }, 0);
	   * // => 3
	   *
	   * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	   *   (result[value] || (result[value] = [])).push(key);
	   *   return result;
	   * }, {});
	   * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	   */
	  function reduce(collection, iteratee, accumulator) {
	    return baseReduce(collection, baseIteratee(iteratee), accumulator, arguments.length < 3, baseEach);
	  }

	  /**
	   * Gets the size of `collection` by returning its length for array-like
	   * values or the number of own enumerable string keyed properties for objects.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object|string} collection The collection to inspect.
	   * @returns {number} Returns the collection size.
	   * @example
	   *
	   * _.size([1, 2, 3]);
	   * // => 3
	   *
	   * _.size({ 'a': 1, 'b': 2 });
	   * // => 2
	   *
	   * _.size('pebbles');
	   * // => 7
	   */
	  function size(collection) {
	    if (collection == null) {
	      return 0;
	    }
	    collection = isArrayLike(collection) ? collection : nativeKeys(collection);
	    return collection.length;
	  }

	  /**
	   * Checks if `predicate` returns truthy for **any** element of `collection`.
	   * Iteration is stopped once `predicate` returns truthy. The predicate is
	   * invoked with three arguments: (value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} [predicate=_.identity] The function invoked per iteration.
	   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   * @example
	   *
	   * _.some([null, 0, 'yes', false], Boolean);
	   * // => true
	   *
	   * var users = [
	   *   { 'user': 'barney', 'active': true },
	   *   { 'user': 'fred',   'active': false }
	   * ];
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.some(users, { 'user': 'barney', 'active': false });
	   * // => false
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.some(users, ['active', false]);
	   * // => true
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.some(users, 'active');
	   * // => true
	   */
	  function some(collection, predicate, guard) {
	    predicate = guard ? undefined : predicate;
	    return baseSome(collection, baseIteratee(predicate));
	  }

	  /**
	   * Creates an array of elements, sorted in ascending order by the results of
	   * running each element in a collection thru each iteratee. This method
	   * performs a stable sort, that is, it preserves the original sort order of
	   * equal elements. The iteratees are invoked with one argument: (value).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {...(Function|Function[])} [iteratees=[_.identity]]
	   *  The iteratees to sort by.
	   * @returns {Array} Returns the new sorted array.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'fred',   'age': 48 },
	   *   { 'user': 'barney', 'age': 36 },
	   *   { 'user': 'fred',   'age': 40 },
	   *   { 'user': 'barney', 'age': 34 }
	   * ];
	   *
	   * _.sortBy(users, [function(o) { return o.user; }]);
	   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	   *
	   * _.sortBy(users, ['user', 'age']);
	   * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	   */
	  function sortBy(collection, iteratee) {
	    var index = 0;
	    iteratee = baseIteratee(iteratee);

	    return baseMap(baseMap(collection, function(value, key, collection) {
	      return { 'value': value, 'index': index++, 'criteria': iteratee(value, key, collection) };
	    }).sort(function(object, other) {
	      return compareAscending(object.criteria, other.criteria) || (object.index - other.index);
	    }), baseProperty('value'));
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a function that invokes `func`, with the `this` binding and arguments
	   * of the created function, while it's called less than `n` times. Subsequent
	   * calls to the created function return the result of the last `func` invocation.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Function
	   * @param {number} n The number of calls at which `func` is no longer invoked.
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * jQuery(element).on('click', _.before(5, addContactToList));
	   * // => Allows adding up to 4 contacts to the list.
	   */
	  function before(n, func) {
	    var result;
	    if (typeof func != 'function') {
	      throw new TypeError(FUNC_ERROR_TEXT);
	    }
	    n = toInteger(n);
	    return function() {
	      if (--n > 0) {
	        result = func.apply(this, arguments);
	      }
	      if (n <= 1) {
	        func = undefined;
	      }
	      return result;
	    };
	  }

	  /**
	   * Creates a function that invokes `func` with the `this` binding of `thisArg`
	   * and `partials` prepended to the arguments it receives.
	   *
	   * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	   * may be used as a placeholder for partially applied arguments.
	   *
	   * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	   * property of bound functions.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Function
	   * @param {Function} func The function to bind.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {...*} [partials] The arguments to be partially applied.
	   * @returns {Function} Returns the new bound function.
	   * @example
	   *
	   * function greet(greeting, punctuation) {
	   *   return greeting + ' ' + this.user + punctuation;
	   * }
	   *
	   * var object = { 'user': 'fred' };
	   *
	   * var bound = _.bind(greet, object, 'hi');
	   * bound('!');
	   * // => 'hi fred!'
	   *
	   * // Bound with placeholders.
	   * var bound = _.bind(greet, object, _, '!');
	   * bound('hi');
	   * // => 'hi fred!'
	   */
	  var bind = baseRest(function(func, thisArg, partials) {
	    return createPartial(func, WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG, thisArg, partials);
	  });

	  /**
	   * Defers invoking the `func` until the current call stack has cleared. Any
	   * additional arguments are provided to `func` when it's invoked.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Function
	   * @param {Function} func The function to defer.
	   * @param {...*} [args] The arguments to invoke `func` with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.defer(function(text) {
	   *   console.log(text);
	   * }, 'deferred');
	   * // => Logs 'deferred' after one millisecond.
	   */
	  var defer = baseRest(function(func, args) {
	    return baseDelay(func, 1, args);
	  });

	  /**
	   * Invokes `func` after `wait` milliseconds. Any additional arguments are
	   * provided to `func` when it's invoked.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Function
	   * @param {Function} func The function to delay.
	   * @param {number} wait The number of milliseconds to delay invocation.
	   * @param {...*} [args] The arguments to invoke `func` with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.delay(function(text) {
	   *   console.log(text);
	   * }, 1000, 'later');
	   * // => Logs 'later' after one second.
	   */
	  var delay = baseRest(function(func, wait, args) {
	    return baseDelay(func, toNumber(wait) || 0, args);
	  });

	  /**
	   * Creates a function that negates the result of the predicate `func`. The
	   * `func` predicate is invoked with the `this` binding and arguments of the
	   * created function.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Function
	   * @param {Function} predicate The predicate to negate.
	   * @returns {Function} Returns the new negated function.
	   * @example
	   *
	   * function isEven(n) {
	   *   return n % 2 == 0;
	   * }
	   *
	   * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	   * // => [1, 3, 5]
	   */
	  function negate(predicate) {
	    if (typeof predicate != 'function') {
	      throw new TypeError(FUNC_ERROR_TEXT);
	    }
	    return function() {
	      var args = arguments;
	      return !predicate.apply(this, args);
	    };
	  }

	  /**
	   * Creates a function that is restricted to invoking `func` once. Repeat calls
	   * to the function return the value of the first invocation. The `func` is
	   * invoked with the `this` binding and arguments of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Function
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var initialize = _.once(createApplication);
	   * initialize();
	   * initialize();
	   * // => `createApplication` is invoked once
	   */
	  function once(func) {
	    return before(2, func);
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a shallow clone of `value`.
	   *
	   * **Note:** This method is loosely based on the
	   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	   * and supports cloning arrays, array buffers, booleans, date objects, maps,
	   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	   * arrays. The own enumerable properties of `arguments` objects are cloned
	   * as plain objects. An empty object is returned for uncloneable values such
	   * as error objects, functions, DOM nodes, and WeakMaps.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to clone.
	   * @returns {*} Returns the cloned value.
	   * @see _.cloneDeep
	   * @example
	   *
	   * var objects = [{ 'a': 1 }, { 'b': 2 }];
	   *
	   * var shallow = _.clone(objects);
	   * console.log(shallow[0] === objects[0]);
	   * // => true
	   */
	  function clone(value) {
	    if (!isObject(value)) {
	      return value;
	    }
	    return isArray(value) ? copyArray(value) : copyObject(value, nativeKeys(value));
	  }

	  /**
	   * Performs a
	   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	   * comparison between two values to determine if they are equivalent.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   * @example
	   *
	   * var object = { 'a': 1 };
	   * var other = { 'a': 1 };
	   *
	   * _.eq(object, object);
	   * // => true
	   *
	   * _.eq(object, other);
	   * // => false
	   *
	   * _.eq('a', 'a');
	   * // => true
	   *
	   * _.eq('a', Object('a'));
	   * // => false
	   *
	   * _.eq(NaN, NaN);
	   * // => true
	   */
	  function eq(value, other) {
	    return value === other || (value !== value && other !== other);
	  }

	  /**
	   * Checks if `value` is likely an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	   *  else `false`.
	   * @example
	   *
	   * _.isArguments(function() { return arguments; }());
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */
	  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	      !propertyIsEnumerable.call(value, 'callee');
	  };

	  /**
	   * Checks if `value` is classified as an `Array` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	   * @example
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   *
	   * _.isArray(document.body.children);
	   * // => false
	   *
	   * _.isArray('abc');
	   * // => false
	   *
	   * _.isArray(_.noop);
	   * // => false
	   */
	  var isArray = Array.isArray;

	  /**
	   * Checks if `value` is array-like. A value is considered array-like if it's
	   * not a function and has a `value.length` that's an integer greater than or
	   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	   * @example
	   *
	   * _.isArrayLike([1, 2, 3]);
	   * // => true
	   *
	   * _.isArrayLike(document.body.children);
	   * // => true
	   *
	   * _.isArrayLike('abc');
	   * // => true
	   *
	   * _.isArrayLike(_.noop);
	   * // => false
	   */
	  function isArrayLike(value) {
	    return value != null && isLength(value.length) && !isFunction(value);
	  }

	  /**
	   * Checks if `value` is classified as a boolean primitive or object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	   * @example
	   *
	   * _.isBoolean(false);
	   * // => true
	   *
	   * _.isBoolean(null);
	   * // => false
	   */
	  function isBoolean(value) {
	    return value === true || value === false ||
	      (isObjectLike(value) && baseGetTag(value) == boolTag);
	  }

	  /**
	   * Checks if `value` is classified as a `Date` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	   * @example
	   *
	   * _.isDate(new Date);
	   * // => true
	   *
	   * _.isDate('Mon April 23 2012');
	   * // => false
	   */
	  var isDate = baseIsDate;

	  /**
	   * Checks if `value` is an empty object, collection, map, or set.
	   *
	   * Objects are considered empty if they have no own enumerable string keyed
	   * properties.
	   *
	   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	   * jQuery-like collections are considered empty if they have a `length` of `0`.
	   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	   * @example
	   *
	   * _.isEmpty(null);
	   * // => true
	   *
	   * _.isEmpty(true);
	   * // => true
	   *
	   * _.isEmpty(1);
	   * // => true
	   *
	   * _.isEmpty([1, 2, 3]);
	   * // => false
	   *
	   * _.isEmpty({ 'a': 1 });
	   * // => false
	   */
	  function isEmpty(value) {
	    if (isArrayLike(value) &&
	        (isArray(value) || isString(value) ||
	          isFunction(value.splice) || isArguments(value))) {
	      return !value.length;
	    }
	    return !nativeKeys(value).length;
	  }

	  /**
	   * Performs a deep comparison between two values to determine if they are
	   * equivalent.
	   *
	   * **Note:** This method supports comparing arrays, array buffers, booleans,
	   * date objects, error objects, maps, numbers, `Object` objects, regexes,
	   * sets, strings, symbols, and typed arrays. `Object` objects are compared
	   * by their own, not inherited, enumerable properties. Functions and DOM
	   * nodes are **not** supported.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   * @example
	   *
	   * var object = { 'a': 1 };
	   * var other = { 'a': 1 };
	   *
	   * _.isEqual(object, other);
	   * // => true
	   *
	   * object === other;
	   * // => false
	   */
	  function isEqual(value, other) {
	    return baseIsEqual(value, other);
	  }

	  /**
	   * Checks if `value` is a finite primitive number.
	   *
	   * **Note:** This method is based on
	   * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	   * @example
	   *
	   * _.isFinite(3);
	   * // => true
	   *
	   * _.isFinite(Number.MIN_VALUE);
	   * // => true
	   *
	   * _.isFinite(Infinity);
	   * // => false
	   *
	   * _.isFinite('3');
	   * // => false
	   */
	  function isFinite(value) {
	    return typeof value == 'number' && nativeIsFinite(value);
	  }

	  /**
	   * Checks if `value` is classified as a `Function` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   *
	   * _.isFunction(/abc/);
	   * // => false
	   */
	  function isFunction(value) {
	    if (!isObject(value)) {
	      return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = baseGetTag(value);
	    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	  }

	  /**
	   * Checks if `value` is a valid array-like length.
	   *
	   * **Note:** This method is loosely based on
	   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	   * @example
	   *
	   * _.isLength(3);
	   * // => true
	   *
	   * _.isLength(Number.MIN_VALUE);
	   * // => false
	   *
	   * _.isLength(Infinity);
	   * // => false
	   *
	   * _.isLength('3');
	   * // => false
	   */
	  function isLength(value) {
	    return typeof value == 'number' &&
	      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	  }

	  /**
	   * Checks if `value` is the
	   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	   * @example
	   *
	   * _.isObject({});
	   * // => true
	   *
	   * _.isObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isObject(_.noop);
	   * // => true
	   *
	   * _.isObject(null);
	   * // => false
	   */
	  function isObject(value) {
	    var type = typeof value;
	    return value != null && (type == 'object' || type == 'function');
	  }

	  /**
	   * Checks if `value` is object-like. A value is object-like if it's not `null`
	   * and has a `typeof` result of "object".
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   * @example
	   *
	   * _.isObjectLike({});
	   * // => true
	   *
	   * _.isObjectLike([1, 2, 3]);
	   * // => true
	   *
	   * _.isObjectLike(_.noop);
	   * // => false
	   *
	   * _.isObjectLike(null);
	   * // => false
	   */
	  function isObjectLike(value) {
	    return value != null && typeof value == 'object';
	  }

	  /**
	   * Checks if `value` is `NaN`.
	   *
	   * **Note:** This method is based on
	   * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	   * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	   * `undefined` and other non-number values.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   * @example
	   *
	   * _.isNaN(NaN);
	   * // => true
	   *
	   * _.isNaN(new Number(NaN));
	   * // => true
	   *
	   * isNaN(undefined);
	   * // => true
	   *
	   * _.isNaN(undefined);
	   * // => false
	   */
	  function isNaN(value) {
	    // An `NaN` primitive is the only value that is not equal to itself.
	    // Perform the `toStringTag` check first to avoid errors with some
	    // ActiveX objects in IE.
	    return isNumber(value) && value != +value;
	  }

	  /**
	   * Checks if `value` is `null`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	   * @example
	   *
	   * _.isNull(null);
	   * // => true
	   *
	   * _.isNull(void 0);
	   * // => false
	   */
	  function isNull(value) {
	    return value === null;
	  }

	  /**
	   * Checks if `value` is classified as a `Number` primitive or object.
	   *
	   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	   * classified as numbers, use the `_.isFinite` method.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	   * @example
	   *
	   * _.isNumber(3);
	   * // => true
	   *
	   * _.isNumber(Number.MIN_VALUE);
	   * // => true
	   *
	   * _.isNumber(Infinity);
	   * // => true
	   *
	   * _.isNumber('3');
	   * // => false
	   */
	  function isNumber(value) {
	    return typeof value == 'number' ||
	      (isObjectLike(value) && baseGetTag(value) == numberTag);
	  }

	  /**
	   * Checks if `value` is classified as a `RegExp` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	   * @example
	   *
	   * _.isRegExp(/abc/);
	   * // => true
	   *
	   * _.isRegExp('/abc/');
	   * // => false
	   */
	  var isRegExp = baseIsRegExp;

	  /**
	   * Checks if `value` is classified as a `String` primitive or object.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	   * @example
	   *
	   * _.isString('abc');
	   * // => true
	   *
	   * _.isString(1);
	   * // => false
	   */
	  function isString(value) {
	    return typeof value == 'string' ||
	      (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	  }

	  /**
	   * Checks if `value` is `undefined`.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	   * @example
	   *
	   * _.isUndefined(void 0);
	   * // => true
	   *
	   * _.isUndefined(null);
	   * // => false
	   */
	  function isUndefined(value) {
	    return value === undefined;
	  }

	  /**
	   * Converts `value` to an array.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to convert.
	   * @returns {Array} Returns the converted array.
	   * @example
	   *
	   * _.toArray({ 'a': 1, 'b': 2 });
	   * // => [1, 2]
	   *
	   * _.toArray('abc');
	   * // => ['a', 'b', 'c']
	   *
	   * _.toArray(1);
	   * // => []
	   *
	   * _.toArray(null);
	   * // => []
	   */
	  function toArray(value) {
	    if (!isArrayLike(value)) {
	      return values(value);
	    }
	    return value.length ? copyArray(value) : [];
	  }

	  /**
	   * Converts `value` to an integer.
	   *
	   * **Note:** This method is loosely based on
	   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to convert.
	   * @returns {number} Returns the converted integer.
	   * @example
	   *
	   * _.toInteger(3.2);
	   * // => 3
	   *
	   * _.toInteger(Number.MIN_VALUE);
	   * // => 0
	   *
	   * _.toInteger(Infinity);
	   * // => 1.7976931348623157e+308
	   *
	   * _.toInteger('3.2');
	   * // => 3
	   */
	  var toInteger = Number;

	  /**
	   * Converts `value` to a number.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to process.
	   * @returns {number} Returns the number.
	   * @example
	   *
	   * _.toNumber(3.2);
	   * // => 3.2
	   *
	   * _.toNumber(Number.MIN_VALUE);
	   * // => 5e-324
	   *
	   * _.toNumber(Infinity);
	   * // => Infinity
	   *
	   * _.toNumber('3.2');
	   * // => 3.2
	   */
	  var toNumber = Number;

	  /**
	   * Converts `value` to a string. An empty string is returned for `null`
	   * and `undefined` values. The sign of `-0` is preserved.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to convert.
	   * @returns {string} Returns the converted string.
	   * @example
	   *
	   * _.toString(null);
	   * // => ''
	   *
	   * _.toString(-0);
	   * // => '-0'
	   *
	   * _.toString([1, 2, 3]);
	   * // => '1,2,3'
	   */
	  function toString(value) {
	    if (typeof value == 'string') {
	      return value;
	    }
	    return value == null ? '' : (value + '');
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Assigns own enumerable string keyed properties of source objects to the
	   * destination object. Source objects are applied from left to right.
	   * Subsequent sources overwrite property assignments of previous sources.
	   *
	   * **Note:** This method mutates `object` and is loosely based on
	   * [`Object.assign`](https://mdn.io/Object/assign).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.10.0
	   * @category Object
	   * @param {Object} object The destination object.
	   * @param {...Object} [sources] The source objects.
	   * @returns {Object} Returns `object`.
	   * @see _.assignIn
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   * }
	   *
	   * function Bar() {
	   *   this.c = 3;
	   * }
	   *
	   * Foo.prototype.b = 2;
	   * Bar.prototype.d = 4;
	   *
	   * _.assign({ 'a': 0 }, new Foo, new Bar);
	   * // => { 'a': 1, 'c': 3 }
	   */
	  var assign = createAssigner(function(object, source) {
	    copyObject(source, nativeKeys(source), object);
	  });

	  /**
	   * This method is like `_.assign` except that it iterates over own and
	   * inherited source properties.
	   *
	   * **Note:** This method mutates `object`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @alias extend
	   * @category Object
	   * @param {Object} object The destination object.
	   * @param {...Object} [sources] The source objects.
	   * @returns {Object} Returns `object`.
	   * @see _.assign
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   * }
	   *
	   * function Bar() {
	   *   this.c = 3;
	   * }
	   *
	   * Foo.prototype.b = 2;
	   * Bar.prototype.d = 4;
	   *
	   * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	   * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	   */
	  var assignIn = createAssigner(function(object, source) {
	    copyObject(source, nativeKeysIn(source), object);
	  });

	  /**
	   * This method is like `_.assignIn` except that it accepts `customizer`
	   * which is invoked to produce the assigned values. If `customizer` returns
	   * `undefined`, assignment is handled by the method instead. The `customizer`
	   * is invoked with five arguments: (objValue, srcValue, key, object, source).
	   *
	   * **Note:** This method mutates `object`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @alias extendWith
	   * @category Object
	   * @param {Object} object The destination object.
	   * @param {...Object} sources The source objects.
	   * @param {Function} [customizer] The function to customize assigned values.
	   * @returns {Object} Returns `object`.
	   * @see _.assignWith
	   * @example
	   *
	   * function customizer(objValue, srcValue) {
	   *   return _.isUndefined(objValue) ? srcValue : objValue;
	   * }
	   *
	   * var defaults = _.partialRight(_.assignInWith, customizer);
	   *
	   * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	   * // => { 'a': 1, 'b': 2 }
	   */
	  var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	    copyObject(source, keysIn(source), object, customizer);
	  });

	  /**
	   * Creates an object that inherits from the `prototype` object. If a
	   * `properties` object is given, its own enumerable string keyed properties
	   * are assigned to the created object.
	   *
	   * @static
	   * @memberOf _
	   * @since 2.3.0
	   * @category Object
	   * @param {Object} prototype The object to inherit from.
	   * @param {Object} [properties] The properties to assign to the object.
	   * @returns {Object} Returns the new object.
	   * @example
	   *
	   * function Shape() {
	   *   this.x = 0;
	   *   this.y = 0;
	   * }
	   *
	   * function Circle() {
	   *   Shape.call(this);
	   * }
	   *
	   * Circle.prototype = _.create(Shape.prototype, {
	   *   'constructor': Circle
	   * });
	   *
	   * var circle = new Circle;
	   * circle instanceof Circle;
	   * // => true
	   *
	   * circle instanceof Shape;
	   * // => true
	   */
	  function create(prototype, properties) {
	    var result = baseCreate(prototype);
	    return properties == null ? result : assign(result, properties);
	  }

	  /**
	   * Assigns own and inherited enumerable string keyed properties of source
	   * objects to the destination object for all destination properties that
	   * resolve to `undefined`. Source objects are applied from left to right.
	   * Once a property is set, additional values of the same property are ignored.
	   *
	   * **Note:** This method mutates `object`.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The destination object.
	   * @param {...Object} [sources] The source objects.
	   * @returns {Object} Returns `object`.
	   * @see _.defaultsDeep
	   * @example
	   *
	   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	   * // => { 'a': 1, 'b': 2 }
	   */
	  var defaults = baseRest(function(args) {
	    args.push(undefined, assignInDefaults);
	    return assignInWith.apply(undefined, args);
	  });

	  /**
	   * Checks if `path` is a direct property of `object`.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path to check.
	   * @returns {boolean} Returns `true` if `path` exists, else `false`.
	   * @example
	   *
	   * var object = { 'a': { 'b': 2 } };
	   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	   *
	   * _.has(object, 'a');
	   * // => true
	   *
	   * _.has(object, 'a.b');
	   * // => true
	   *
	   * _.has(object, ['a', 'b']);
	   * // => true
	   *
	   * _.has(other, 'a');
	   * // => false
	   */
	  function has(object, path) {
	    return object != null && hasOwnProperty.call(object, path);
	  }

	  /**
	   * Creates an array of the own enumerable property names of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects. See the
	   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	   * for more details.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   *   this.b = 2;
	   * }
	   *
	   * Foo.prototype.c = 3;
	   *
	   * _.keys(new Foo);
	   * // => ['a', 'b'] (iteration order is not guaranteed)
	   *
	   * _.keys('hi');
	   * // => ['0', '1']
	   */
	  var keys = nativeKeys;

	  /**
	   * Creates an array of the own and inherited enumerable property names of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Object
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   *   this.b = 2;
	   * }
	   *
	   * Foo.prototype.c = 3;
	   *
	   * _.keysIn(new Foo);
	   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	   */
	  var keysIn = nativeKeysIn;

	  /**
	   * Creates an object composed of the picked `object` properties.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The source object.
	   * @param {...(string|string[])} [paths] The property paths to pick.
	   * @returns {Object} Returns the new object.
	   * @example
	   *
	   * var object = { 'a': 1, 'b': '2', 'c': 3 };
	   *
	   * _.pick(object, ['a', 'c']);
	   * // => { 'a': 1, 'c': 3 }
	   */
	  var pick = flatRest(function(object, paths) {
	    return object == null ? {} : basePick(object, paths);
	  });

	  /**
	   * This method is like `_.get` except that if the resolved value is a
	   * function it's invoked with the `this` binding of its parent object and
	   * its result is returned.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path of the property to resolve.
	   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	   * @returns {*} Returns the resolved value.
	   * @example
	   *
	   * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	   *
	   * _.result(object, 'a[0].b.c1');
	   * // => 3
	   *
	   * _.result(object, 'a[0].b.c2');
	   * // => 4
	   *
	   * _.result(object, 'a[0].b.c3', 'default');
	   * // => 'default'
	   *
	   * _.result(object, 'a[0].b.c3', _.constant('default'));
	   * // => 'default'
	   */
	  function result(object, path, defaultValue) {
	    var value = object == null ? undefined : object[path];
	    if (value === undefined) {
	      value = defaultValue;
	    }
	    return isFunction(value) ? value.call(object) : value;
	  }

	  /**
	   * Creates an array of the own enumerable string keyed property values of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property values.
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   *   this.b = 2;
	   * }
	   *
	   * Foo.prototype.c = 3;
	   *
	   * _.values(new Foo);
	   * // => [1, 2] (iteration order is not guaranteed)
	   *
	   * _.values('hi');
	   * // => ['h', 'i']
	   */
	  function values(object) {
	    return object == null ? [] : baseValues(object, keys(object));
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	   * corresponding HTML entities.
	   *
	   * **Note:** No other characters are escaped. To escape additional
	   * characters use a third-party library like [_he_](https://mths.be/he).
	   *
	   * Though the ">" character is escaped for symmetry, characters like
	   * ">" and "/" don't need escaping in HTML and have no special meaning
	   * unless they're part of a tag or unquoted attribute value. See
	   * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	   * (under "semi-related fun fact") for more details.
	   *
	   * When working with HTML you should always
	   * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	   * XSS vectors.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category String
	   * @param {string} [string=''] The string to escape.
	   * @returns {string} Returns the escaped string.
	   * @example
	   *
	   * _.escape('fred, barney, & pebbles');
	   * // => 'fred, barney, &amp; pebbles'
	   */
	  function escape(string) {
	    string = toString(string);
	    return (string && reHasUnescapedHtml.test(string))
	      ? string.replace(reUnescapedHtml, escapeHtmlChar)
	      : string;
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * This method returns the first argument it receives.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Util
	   * @param {*} value Any value.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * var object = { 'a': 1 };
	   *
	   * console.log(_.identity(object) === object);
	   * // => true
	   */
	  function identity(value) {
	    return value;
	  }

	  /**
	   * Creates a function that invokes `func` with the arguments of the created
	   * function. If `func` is a property name, the created function returns the
	   * property value for a given element. If `func` is an array or object, the
	   * created function returns `true` for elements that contain the equivalent
	   * source properties, otherwise it returns `false`.
	   *
	   * @static
	   * @since 4.0.0
	   * @memberOf _
	   * @category Util
	   * @param {*} [func=_.identity] The value to convert to a callback.
	   * @returns {Function} Returns the callback.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36, 'active': true },
	   *   { 'user': 'fred',   'age': 40, 'active': false }
	   * ];
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	   * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.filter(users, _.iteratee(['user', 'fred']));
	   * // => [{ 'user': 'fred', 'age': 40 }]
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.map(users, _.iteratee('user'));
	   * // => ['barney', 'fred']
	   *
	   * // Create custom iteratee shorthands.
	   * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	   *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	   *     return func.test(string);
	   *   };
	   * });
	   *
	   * _.filter(['abc', 'def'], /ef/);
	   * // => ['def']
	   */
	  var iteratee = baseIteratee;

	  /**
	   * Creates a function that performs a partial deep comparison between a given
	   * object and `source`, returning `true` if the given object has equivalent
	   * property values, else `false`.
	   *
	   * **Note:** The created function is equivalent to `_.isMatch` with `source`
	   * partially applied.
	   *
	   * Partial comparisons will match empty array and empty object `source`
	   * values against any array or object value, respectively. See `_.isEqual`
	   * for a list of supported value comparisons.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Util
	   * @param {Object} source The object of property values to match.
	   * @returns {Function} Returns the new spec function.
	   * @example
	   *
	   * var objects = [
	   *   { 'a': 1, 'b': 2, 'c': 3 },
	   *   { 'a': 4, 'b': 5, 'c': 6 }
	   * ];
	   *
	   * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	   * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	   */
	  function matches(source) {
	    return baseMatches(assign({}, source));
	  }

	  /**
	   * Adds all own enumerable string keyed function properties of a source
	   * object to the destination object. If `object` is a function, then methods
	   * are added to its prototype as well.
	   *
	   * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	   * avoid conflicts caused by modifying the original.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Util
	   * @param {Function|Object} [object=lodash] The destination object.
	   * @param {Object} source The object of functions to add.
	   * @param {Object} [options={}] The options object.
	   * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	   * @returns {Function|Object} Returns `object`.
	   * @example
	   *
	   * function vowels(string) {
	   *   return _.filter(string, function(v) {
	   *     return /[aeiou]/i.test(v);
	   *   });
	   * }
	   *
	   * _.mixin({ 'vowels': vowels });
	   * _.vowels('fred');
	   * // => ['e']
	   *
	   * _('fred').vowels().value();
	   * // => ['e']
	   *
	   * _.mixin({ 'vowels': vowels }, { 'chain': false });
	   * _('fred').vowels();
	   * // => ['e']
	   */
	  function mixin(object, source, options) {
	    var props = keys(source),
	        methodNames = baseFunctions(source, props);

	    if (options == null &&
	        !(isObject(source) && (methodNames.length || !props.length))) {
	      options = source;
	      source = object;
	      object = this;
	      methodNames = baseFunctions(source, keys(source));
	    }
	    var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
	        isFunc = isFunction(object);

	    baseEach(methodNames, function(methodName) {
	      var func = source[methodName];
	      object[methodName] = func;
	      if (isFunc) {
	        object.prototype[methodName] = function() {
	          var chainAll = this.__chain__;
	          if (chain || chainAll) {
	            var result = object(this.__wrapped__),
	                actions = result.__actions__ = copyArray(this.__actions__);

	            actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	            result.__chain__ = chainAll;
	            return result;
	          }
	          return func.apply(object, arrayPush([this.value()], arguments));
	        };
	      }
	    });

	    return object;
	  }

	  /**
	   * Reverts the `_` variable to its previous value and returns a reference to
	   * the `lodash` function.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Util
	   * @returns {Function} Returns the `lodash` function.
	   * @example
	   *
	   * var lodash = _.noConflict();
	   */
	  function noConflict() {
	    if (root._ === this) {
	      root._ = oldDash;
	    }
	    return this;
	  }

	  /**
	   * This method returns `undefined`.
	   *
	   * @static
	   * @memberOf _
	   * @since 2.3.0
	   * @category Util
	   * @example
	   *
	   * _.times(2, _.noop);
	   * // => [undefined, undefined]
	   */
	  function noop() {
	    // No operation performed.
	  }

	  /**
	   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Util
	   * @param {string} [prefix=''] The value to prefix the ID with.
	   * @returns {string} Returns the unique ID.
	   * @example
	   *
	   * _.uniqueId('contact_');
	   * // => 'contact_104'
	   *
	   * _.uniqueId();
	   * // => '105'
	   */
	  function uniqueId(prefix) {
	    var id = ++idCounter;
	    return toString(prefix) + id;
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Computes the maximum value of `array`. If `array` is empty or falsey,
	   * `undefined` is returned.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Math
	   * @param {Array} array The array to iterate over.
	   * @returns {*} Returns the maximum value.
	   * @example
	   *
	   * _.max([4, 2, 8, 6]);
	   * // => 8
	   *
	   * _.max([]);
	   * // => undefined
	   */
	  function max(array) {
	    return (array && array.length)
	      ? baseExtremum(array, identity, baseGt)
	      : undefined;
	  }

	  /**
	   * Computes the minimum value of `array`. If `array` is empty or falsey,
	   * `undefined` is returned.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Math
	   * @param {Array} array The array to iterate over.
	   * @returns {*} Returns the minimum value.
	   * @example
	   *
	   * _.min([4, 2, 8, 6]);
	   * // => 2
	   *
	   * _.min([]);
	   * // => undefined
	   */
	  function min(array) {
	    return (array && array.length)
	      ? baseExtremum(array, identity, baseLt)
	      : undefined;
	  }

	  /*------------------------------------------------------------------------*/

	  // Add methods that return wrapped values in chain sequences.
	  lodash.assignIn = assignIn;
	  lodash.before = before;
	  lodash.bind = bind;
	  lodash.chain = chain;
	  lodash.compact = compact;
	  lodash.concat = concat;
	  lodash.create = create;
	  lodash.defaults = defaults;
	  lodash.defer = defer;
	  lodash.delay = delay;
	  lodash.filter = filter;
	  lodash.flatten = flatten;
	  lodash.flattenDeep = flattenDeep;
	  lodash.iteratee = iteratee;
	  lodash.keys = keys;
	  lodash.map = map;
	  lodash.matches = matches;
	  lodash.mixin = mixin;
	  lodash.negate = negate;
	  lodash.once = once;
	  lodash.pick = pick;
	  lodash.slice = slice;
	  lodash.sortBy = sortBy;
	  lodash.tap = tap;
	  lodash.thru = thru;
	  lodash.toArray = toArray;
	  lodash.values = values;

	  // Add aliases.
	  lodash.extend = assignIn;

	  // Add methods to `lodash.prototype`.
	  mixin(lodash, lodash);

	  /*------------------------------------------------------------------------*/

	  // Add methods that return unwrapped values in chain sequences.
	  lodash.clone = clone;
	  lodash.escape = escape;
	  lodash.every = every;
	  lodash.find = find;
	  lodash.forEach = forEach;
	  lodash.has = has;
	  lodash.head = head;
	  lodash.identity = identity;
	  lodash.indexOf = indexOf;
	  lodash.isArguments = isArguments;
	  lodash.isArray = isArray;
	  lodash.isBoolean = isBoolean;
	  lodash.isDate = isDate;
	  lodash.isEmpty = isEmpty;
	  lodash.isEqual = isEqual;
	  lodash.isFinite = isFinite;
	  lodash.isFunction = isFunction;
	  lodash.isNaN = isNaN;
	  lodash.isNull = isNull;
	  lodash.isNumber = isNumber;
	  lodash.isObject = isObject;
	  lodash.isRegExp = isRegExp;
	  lodash.isString = isString;
	  lodash.isUndefined = isUndefined;
	  lodash.last = last;
	  lodash.max = max;
	  lodash.min = min;
	  lodash.noConflict = noConflict;
	  lodash.noop = noop;
	  lodash.reduce = reduce;
	  lodash.result = result;
	  lodash.size = size;
	  lodash.some = some;
	  lodash.uniqueId = uniqueId;

	  // Add aliases.
	  lodash.each = forEach;
	  lodash.first = head;

	  mixin(lodash, (function() {
	    var source = {};
	    baseForOwn(lodash, function(func, methodName) {
	      if (!hasOwnProperty.call(lodash.prototype, methodName)) {
	        source[methodName] = func;
	      }
	    });
	    return source;
	  }()), { 'chain': false });

	  /*------------------------------------------------------------------------*/

	  /**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type {string}
	   */
	  lodash.VERSION = VERSION;

	  // Add `Array` methods to `lodash.prototype`.
	  baseEach(['pop', 'join', 'replace', 'reverse', 'split', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	    var func = (/^(?:replace|split)$/.test(methodName) ? String.prototype : arrayProto)[methodName],
	        chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	        retUnwrapped = /^(?:pop|join|replace|shift)$/.test(methodName);

	    lodash.prototype[methodName] = function() {
	      var args = arguments;
	      if (retUnwrapped && !this.__chain__) {
	        var value = this.value();
	        return func.apply(isArray(value) ? value : [], args);
	      }
	      return this[chainName](function(value) {
	        return func.apply(isArray(value) ? value : [], args);
	      });
	    };
	  });

	  // Add chain sequence methods to the `lodash` wrapper.
	  lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	  /*--------------------------------------------------------------------------*/

	  // Some AMD build optimizers, like r.js, check for condition patterns like:
	  if (true) {
	    // Expose Lodash on the global object to prevent errors when Lodash is
	    // loaded by a script tag in the presence of an AMD loader.
	    // See http://requirejs.org/docs/errors.html#mismatch for more details.
	    // Use `_.noConflict` to remove Lodash from the global object.
	    root._ = lodash;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return lodash;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds it.
	  else if (freeModule) {
	    // Export for Node.js.
	    (freeModule.exports = lodash)._ = lodash;
	    // Export for CommonJS support.
	    freeExports._ = lodash;
	  }
	  else {
	    // Export to the global object.
	    root._ = lodash;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(11)(module)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*global process*/

	'use strict';

	var _ = __webpack_require__(10);

	/**
	 * @callback ResolvedCallback
	 * @param {T} result - Resolved value
	 * @returns {S}
	 * @template T,S
	 */

	/**
	 * @callback RejectedCallback
	 * @param {Error} reason - Rejected reason
	 * @returns {S}
	 * @template S
	 */

	/**
	 * @callback ResolveCallback
	 * @param {T} result
	 * @template T
	 */

	/**
	 * @callback RejectedCallback
	 * @param {Error} reason - Rejected reason
	 * @returns {S}
	 * @template S
	 */

	/**
	 * @callback PromiseCallback
	 * @param {ResolveCallback.<T>} resolve
	 * @param {RejectCallback} reject
	 * @template T
	 */

	/**
	 * Promise class with a little extension
	 *
	 * @class Promise
	 * @constructor
	 * @param {PromiseCallback.<T>}
	 * @template T
	 */
	var Promise = __webpack_require__(14);

	/**
	 * The "then" method from the Promises/A+ specification
	 *
	 * @method Promise#then
	 * @param {FulfilledCallback.<T, S1>} [onFulfilled]
	 * @param {RejectedCallback.<S2>} [onRejected]
	 * @returns {Promise.<S1|S2>}
	 */

	/**
	 * Call "then" using given node-style callback function.
	 * This is basically same as "nodeify" except that it always return the original promise
	 *
	 * @method Promise#thenCall
	 * @param {Callback.<T>} [callback] - Callback function
	 * @returns {Promise}
	 */
	Promise.prototype.thenCall = function(callback) {
	  if (_.isFunction(callback)) {
	    this.then(function(res) {
	      process.nextTick(function() {
	        callback(null, res);
	      });
	    }, function(err) {
	      process.nextTick(function() {
	        callback(err);
	      });
	    });
	  }
	  return this;
	};

	/**
	 * A sugar method, equivalent to promise.then(undefined, onRejected).
	 *
	 * @method Promise#catch
	 * @param {RejectedCallback.<S>} onRejected
	 * @returns {Promise.<S>}
	 */

	/**
	 * Synonym of Promise#catch
	 *
	 * @method Promise#fail
	 * @param {RejectedCallback.<S>} onRejected
	 * @returns {Promise.<S>}
	 */
	Promise.prototype.fail = Promise.prototype['catch'];

	/**
	 * Returns resolving promise with given reason
	 *
	 * @method Promise.resolve
	 * @param {*} result - Resolved value
	 * @returns {Promise}
	 */

	/**
	 * Returns rejecting promise with given reason
	 *
	 * @method Promise.reject
	 * @param {Error} reason - Rejecting reason
	 * @returns {Promise}
	 */

	/**
	 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise,
	 * or is rejected with the same rejection reason as the first promise to be rejected.
	 *
	 * @method Promise.all
	 * @param {Array.<Promise.<*>|*>} promises
	 * @returns {Promise.<Array.<*>>}
	 */

	/**
	 * Returns a deferred object
	 *
	 * @method Promise.defer
	 * @returns {Deferred}
	 */
	Promise.defer = function() {
	  return new Deferred();
	};

	/**
	 * Deferred object
	 *
	 * @protected
	 * @constructor
	 */
	var Deferred = function() {
	  var self = this;
	  this.promise = new Promise(function(resolve, reject) {
	    self.resolve = resolve;
	    self.reject = reject;
	  });
	};

	/**
	 * Resolve promise
	 * @method Deferred#resolve
	 * @param {*} result - Resolving result
	 */

	/**
	 * Reject promise
	 * @method Deferred#reject
	 * @param {Error} error - Rejecting reason
	 */

	/**
	 *
	 */
	module.exports = Promise;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(15);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(16);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @protected
	 * @class
	 * @constructor
	 * @param {String|Number} logLevel - Log level
	 */
	var Logger = module.exports = function(logLevel) {
	  if (typeof logLevel === 'string') {
	    logLevel = LogLevels[logLevel];
	  }
	  if (!logLevel) {
	    logLevel = LogLevels.INFO;
	  }
	  this._logLevel = logLevel;
	};

	/**
	 * @memberof Logger
	 */
	var LogLevels = Logger.LogLevels = {
	  "DEBUG" : 1,
	  "INFO" : 2,
	  "WARN" : 3,
	  "ERROR" : 4,
	  "FATAL" : 5
	};

	/**
	 * Output log
	 *
	 * @param {String} level - Logging target level
	 * @param {String} message - Message to log
	 */
	Logger.prototype.log = function(level, message) {
	  if (this._logLevel <= level) {
	    if (level < LogLevels.ERROR) {
	      console.log(message);
	    } else {
	      console.error(message);
	    }
	  }
	};

	for (var level in LogLevels) {
	  Logger.prototype[level.toLowerCase()] = createLoggerFunction(LogLevels[level]);
	}

	function createLoggerFunction(level) {
	  return function(message) { this.log(level, message); };
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Manages Salesforce OAuth2 operations
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var querystring = __webpack_require__(19),
	    _ = __webpack_require__(10),
	    Transport = __webpack_require__(22);

	var defaults = {
	  loginUrl : "https://login.salesforce.com"
	};

	/**
	 * OAuth2 class
	 *
	 * @class
	 * @constructor
	 * @param {Object} options - OAuth2 config options
	 * @param {String} [options.loginUrl] - Salesforce login server URL
	 * @param {String} [options.authzServiceUrl] - OAuth2 authorization service URL. If not specified, it generates from default by adding to login server URL.
	 * @param {String} [options.tokenServiceUrl] - OAuth2 token service URL. If not specified it generates from default by adding to login server URL.
	 * @param {String} options.clientId - OAuth2 client ID.
	 * @param {String} options.clientSecret - OAuth2 client secret.
	 * @param {String} options.redirectUri - URI to be callbacked from Salesforce OAuth2 authorization service.
	 */
	var OAuth2 = module.exports = function(options) {
	  if (options.authzServiceUrl && options.tokenServiceUrl) {
	    this.loginUrl = options.authzServiceUrl.split('/').slice(0, 3).join('/');
	    this.authzServiceUrl = options.authzServiceUrl;
	    this.tokenServiceUrl = options.tokenServiceUrl;
	    this.revokeServiceUrl = options.revokeServiceUrl;
	  } else {
	    this.loginUrl = options.loginUrl || defaults.loginUrl;
	    this.authzServiceUrl = this.loginUrl + "/services/oauth2/authorize";
	    this.tokenServiceUrl = this.loginUrl + "/services/oauth2/token";
	    this.revokeServiceUrl = this.loginUrl + "/services/oauth2/revoke";
	  }
	  this.clientId = options.clientId;
	  this.clientSecret = options.clientSecret;
	  this.redirectUri = options.redirectUri;
	  this._transport =
	    options.proxyUrl ? new Transport.ProxyTransport(options.proxyUrl) : new Transport();
	};



	/**
	 *
	 */
	_.extend(OAuth2.prototype, /** @lends OAuth2.prototype **/ {

	  /**
	   * Get Salesforce OAuth2 authorization page URL to redirect user agent.
	   *
	   * @param {Object} params - Parameters
	   * @param {String} params.scope - Scope values in space-separated string
	   * @param {String} params.state - State parameter
	   * @returns {String} Authorization page URL
	   */
	  getAuthorizationUrl : function(params) {
	    params = _.extend({
	      response_type : "code",
	      client_id : this.clientId,
	      redirect_uri : this.redirectUri
	    }, params || {});
	    return this.authzServiceUrl +
	      (this.authzServiceUrl.indexOf('?') >= 0 ? "&" : "?") +
	      querystring.stringify(params);
	  },

	  /**
	   * @typedef TokenResponse
	   * @type {Object}
	   * @property {String} access_token
	   * @property {String} refresh_token
	   */

	  /**
	   * OAuth2 Refresh Token Flow
	   *
	   * @param {String} refreshToken - Refresh token
	   * @param {Callback.<TokenResponse>} [callback] - Callback function
	   * @returns {Promise.<TokenResponse>}
	   */
	  refreshToken : function(refreshToken, callback) {
	    return this._postParams({
	      grant_type : "refresh_token",
	      refresh_token : refreshToken,
	      client_id : this.clientId,
	      client_secret : this.clientSecret
	    }, callback);
	  },

	  /**
	   * OAuth2 Web Server Authentication Flow (Authorization Code)
	   * Access Token Request
	   *
	   * @param {String} code - Authorization code
	   * @param {Callback.<TokenResponse>} [callback] - Callback function
	   * @returns {Promise.<TokenResponse>}
	   */
	  requestToken : function(code, callback) {
	    return this._postParams({
	      grant_type : "authorization_code",
	      code : code,
	      client_id : this.clientId,
	      client_secret : this.clientSecret,
	      redirect_uri : this.redirectUri
	    }, callback);
	  },

	  /**
	   * OAuth2 Username-Password Flow (Resource Owner Password Credentials)
	   *
	   * @param {String} username - Salesforce username
	   * @param {String} password - Salesforce password
	   * @param {Callback.<TokenResponse>} [callback] - Callback function
	   * @returns {Promise.<TokenResponse>}
	   */
	  authenticate : function(username, password, callback) {
	    return this._postParams({
	      grant_type : "password",
	      username : username,
	      password : password,
	      client_id : this.clientId,
	      client_secret : this.clientSecret,
	      redirect_uri : this.redirectUri
	    }, callback);
	  },

	  /**
	   * OAuth2 Revoke Session Token
	   *
	   * @param {String} accessToken - Access token to revoke
	   * @param {Callback.<undefined>} [callback] - Callback function
	   * @returns {Promise.<undefined>}
	   */
	  revokeToken : function(accessToken, callback) {
	    var req;
	    if (Transport.JsonpTransport.supported) {
	      var jsonpTransport = new Transport.JsonpTransport('callback');
	      req = jsonpTransport.httpRequest({
	        method: 'GET',
	        url : this.revokeServiceUrl + '?' + querystring.stringify({ token: accessToken })
	      });
	    } else {
	      req = this._transport.httpRequest({
	        method : 'POST',
	        url : this.revokeServiceUrl,
	        body: querystring.stringify({ token: accessToken }),
	        headers: {
	          "Content-Type": "application/x-www-form-urlencoded"
	        }
	      });
	    }
	    return req.then(function(response) {
	      if (response.statusCode >= 400) {
	        var res = querystring.parse(response.body);
	        if (!res || !res.error) {
	          res = { error: "ERROR_HTTP_"+response.statusCode, error_description: response.body };
	        }
	        var err = new Error(res.error_description);
	        err.name = res.error;
	        throw err;
	      }
	    }).thenCall(callback);
	  },

	  /**
	   * @private
	   */
	  _postParams : function(params, callback) {
	    return this._transport.httpRequest({
	      method : 'POST',
	      url : this.tokenServiceUrl,
	      body : querystring.stringify(params),
	      headers : {
	        "content-type" : "application/x-www-form-urlencoded"
	      }
	    }).then(function(response) {
	      var res;
	      try {
	        res = JSON.parse(response.body);
	      } catch(e) {}
	      if (response.statusCode >= 400) {
	        res = res || { error: "ERROR_HTTP_"+response.statusCode, error_description: response.body };
	        var err = new Error(res.error_description);
	        err.name = res.error;
	        throw err;
	      }
	      return res;
	    }).thenCall(callback);
	  }

	});


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(20);
	exports.encode = exports.stringify = __webpack_require__(21);


/***/ },
/* 20 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*global process, Sfdc */

	'use strict';

	var inherits = __webpack_require__(9),
	    Promise = __webpack_require__(12);

	/* */

	var request = __webpack_require__(23),
	    canvas = __webpack_require__(51),
	    jsonp = __webpack_require__(52);

	// set options if defaults setting is available in request, which is not available in xhr module.
	if (request.defaults) {
	  var defaults = {
	    followAllRedirects: true
	  };
	  if (process.env.HTTP_PROXY) {
	    defaults.proxy = process.env.HTTP_PROXY;
	  }
	  if (parseInt(process.env.HTTP_TIMEOUT)) {
	    defaults.timeout = parseInt(process.env.HTTP_TIMEOUT);
	  }
	  request = request.defaults(defaults);
	}

	var baseUrl;
	if (typeof window === 'undefined') {
	  baseUrl = process.env.LOCATION_BASE_URL || "";
	} else {
	  var apiHost = normalizeApiHost(window.location.host);
	  baseUrl = apiHost ? "https://" + apiHost : "";
	}

	/**
	 * Add stream() method to promise (and following promise chain), to access original request stream.
	 * @private
	 */
	function streamify(promise, factory) {
	  var _then = promise.then;
	  promise.then = function() {
	    factory();
	    var newPromise = _then.apply(promise, arguments);
	    return streamify(newPromise, factory);
	  };
	  promise.stream = factory;
	  return promise;
	}

	/**
	 * Normarize Salesforce API host name
	 * @private
	 */
	function normalizeApiHost(apiHost) {
	  var m = /(\w+)\.(visual\.force|salesforce)\.com$/.exec(apiHost);
	  if (m) {
	    apiHost = m[1] + ".salesforce.com";
	  }
	  return apiHost;
	}

	/**
	 * Class for HTTP request transport
	 *
	 * @class
	 * @protected
	 */
	var Transport = module.exports = function() {};

	/**
	 * Make HTTP request, returns promise instead of stream
	 *
	 * @param {Object} params - HTTP request
	 * @param {Callback.<Object>} [callback] - Calback Function
	 * @returns {Promise.<Object>}
	 */
	Transport.prototype.httpRequest = function(params, callback) {
	  var deferred = Promise.defer();
	  var req;
	  var httpRequest = this._getHttpRequestModule();
	  var createRequest = function() {
	    if (!req) {
	      req = httpRequest(params, function(err, response) {
	        if (err) {
	          deferred.reject(err);
	        } else {
	          deferred.resolve(response);
	        }
	      });
	    }
	    return req;
	  };
	  return streamify(deferred.promise, createRequest).thenCall(callback);
	};

	/** @protected **/
	Transport.prototype._getHttpRequestModule = function() {
	  return request;
	};


	/**
	 * Class for JSONP request transport
	 * @class Transport~JsonpTransport
	 * @protected
	 * @extends Transport
	 * @param {String} jsonpParam - Callback parameter name for JSONP invokation.
	 */
	var JsonpTransport = Transport.JsonpTransport = function(jsonpParam) {
	  this._jsonpParam = jsonpParam;
	};

	inherits(JsonpTransport, Transport);

	/** @protected **/
	JsonpTransport.prototype._getHttpRequestModule = function() {
	  return jsonp.createRequest(this._jsonpParam);
	};

	JsonpTransport.supported = jsonp.supported;


	/**
	 * Class for Sfdc Canvas request transport
	 * @class Transport~CanvasTransport
	 * @protected
	 * @extends Transport
	 * @param {Object} signedRequest - Parsed signed request object
	 */
	var CanvasTransport = Transport.CanvasTransport = function(signedRequest) {
	  this._signedRequest = signedRequest;
	};

	inherits(CanvasTransport, Transport);

	/** @protected **/
	CanvasTransport.prototype._getHttpRequestModule = function() {
	  return canvas.createRequest(this._signedRequest);
	};

	CanvasTransport.supported = canvas.supported;


	/**
	 * Class for HTTP request transport using AJAX proxy service
	 *
	 * @class Transport~ProxyTransport
	 * @protected
	 * @extends Transport
	 * @param {String} proxyUrl - AJAX Proxy server URL
	 */
	var ProxyTransport = Transport.ProxyTransport = function(proxyUrl) {
	  this._proxyUrl = proxyUrl;
	};

	inherits(ProxyTransport, Transport);

	/**
	 * Make HTTP request via AJAX proxy
	 *
	 * @method Transport~ProxyTransport#httpRequest
	 * @param {Object} params - HTTP request
	 * @param {Callback.<Object>} [callback] - Calback Function
	 * @returns {Promise.<Object>}
	 */
	ProxyTransport.prototype.httpRequest = function(params, callback) {
	  var url = params.url;
	  if (url.indexOf("/") === 0) {
	    url = baseUrl + url;
	  }
	  var proxyParams = {
	    method: params.method,
	    url: this._proxyUrl + '?' + Date.now() + "." + ("" + Math.random()).substring(2),
	    headers: {
	      'salesforceproxy-endpoint': url
	    }
	  };
	  if (params.body || params.body === "") {
	    proxyParams.body = params.body;
	  }
	  if (params.headers) {
	    for (var name in params.headers) {
	      proxyParams.headers[name] = params.headers[name];
	    }
	  }
	  return ProxyTransport.super_.prototype.httpRequest.call(this, proxyParams, callback);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Duplex = __webpack_require__(24).Duplex;
	var _ = __webpack_require__(10);

	module.exports = function(params, callback) {
	  var xhr = new XMLHttpRequest();
	  xhr.open(params.method, params.url);
	  if (params.headers) {
	    for (var header in params.headers) {
	      xhr.setRequestHeader(header, params.headers[header]);
	    }
	  }
	  xhr.setRequestHeader("Accept", "*/*");
	  var response;
	  var str = new Duplex();
	  str._read = function(size) {
	    if (response) {
	      str.push(response.body);
	    }
	  };
	  var bufs = [];
	  var sent = false;
	  str._write = function(chunk, encoding, callback) {
	    bufs.push(chunk.toString(encoding === "buffer" ? "binary" : encoding));
	    callback();
	  };
	  str.on('finish', function() {
	    if (!sent) {
	      xhr.send(bufs.join(''));
	      sent = true;
	    }
	  });
	  if (params.body || params.body === "" || !/^(put|post|patch)$/i.test(params.method)) {
	    xhr.send(params.body);
	    sent = true;
	  }
	  xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4) {
	      var headerNames = getResponseHeaderNames(xhr);
	      var headers = {};
	      _.forEach(headerNames, function(headerName) {
	        if (headerName) {
	          headers[headerName] = xhr.getResponseHeader(headerName);
	        }
	      });
	      response = {
	        statusCode: xhr.status,
	        headers: headers,
	        body: xhr.response
	      };
	      if (!response.statusCode) {
	        response.statusCode = 400;
	        response.body = "Access Declined";
	      }
	      if (callback) {
	        callback(null, response, response.body);
	      }
	      str.end();
	    }
	  };
	  return str;
	};

	function getResponseHeaderNames(xhr) {
	  var headerLines = (xhr.getAllResponseHeaders() || "").split(/[\r\n]+/);
	  return _.map(headerLines, function(headerLine) {
	    return headerLine.split(/\s*:/)[0].toLowerCase();
	  });
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var Stream = (function (){
	  try {
	    return __webpack_require__(25); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(40);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(46);
	exports.Duplex = __webpack_require__(45);
	exports.Transform = __webpack_require__(49);
	exports.PassThrough = __webpack_require__(50);

	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(2).EventEmitter;
	var inherits = __webpack_require__(9);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(26);
	Stream.Writable = __webpack_require__(36);
	Stream.Duplex = __webpack_require__(37);
	Stream.Transform = __webpack_require__(38);
	Stream.PassThrough = __webpack_require__(39);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = __webpack_require__(27);
	exports.Stream = __webpack_require__(25);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(32);
	exports.Duplex = __webpack_require__(31);
	exports.Transform = __webpack_require__(34);
	exports.PassThrough = __webpack_require__(35);
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = __webpack_require__(25);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(28);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(5).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(2).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(25);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(30);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(31);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(33).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(31);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(33).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	var Readable = __webpack_require__(27);
	var Writable = __webpack_require__(32);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(5).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	var Stream = __webpack_require__(25);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(31);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(31);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(5).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(31);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(34);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32)


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31)


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34)


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35)


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(41);
	/*</replacement>*/

	/*<replacement>*/
	var isArray = __webpack_require__(8);
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	/*<replacement>*/
	var EE = __webpack_require__(2).EventEmitter;

	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(25);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(2).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(5).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(42);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = __webpack_require__(43);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/

	var BufferList = __webpack_require__(44);
	var StringDecoder;

	util.inherits(Readable, Stream);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}

	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(45);

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(33).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(45);

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(33).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;

	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var buffer = __webpack_require__(5);
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Buffer = __webpack_require__(5).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(42);
	/*</replacement>*/

	module.exports = BufferList;

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = __webpack_require__(41);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	var Readable = __webpack_require__(40);
	var Writable = __webpack_require__(46);

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(41);
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(48)
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(25);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(2).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(5).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(42);
	/*</replacement>*/

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(45);

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;

	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}

	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(45);

	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(47).setImmediate))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(13).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47).setImmediate, __webpack_require__(47).clearImmediate))

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = __webpack_require__(45);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);

	  if (data !== null && data !== undefined) stream.push(data);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = __webpack_require__(49);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(9);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*global Sfdc */
	'use strict';

	var Duplex = __webpack_require__(24).Duplex,
	    _ = __webpack_require__(10);

	function parseHeaders(hs) {
	  var headers = {};
	  hs.split(/\n/).forEach(function(line) {
	    var pair = line.split(/\s*:\s*/);
	    var name = pair[0].toLowerCase();
	    var value = pair[1];
	    headers[name] = value;
	  });
	  return headers;
	}

	module.exports = {

	  supported: typeof Sfdc === 'object' && typeof Sfdc.canvas !== 'undefined',

	  createRequest: function(signedRequest) {
	    return function(params, callback) {
	      var response;
	      var str = new Duplex();
	      str._read = function(size) {
	        if (response) {
	          str.push(response.body);
	        }
	      };
	      var bufs = [];
	      var sent = false;
	      str._write = function(chunk, encoding, callback) {
	        bufs.push(chunk.toString(encoding));
	        callback();
	      };
	      str.on('finish', function() {
	        if (!sent) {
	          send(bufs.join(''));
	          sent = true;
	        }
	      });
	      if (params.body || params.body === "" || !/^(put|post|patch)$/i.test(params.method)) {
	        send(params.body);
	        sent = true;
	      }

	      function send(body) {
	        var settings = {
	          client: signedRequest.client,
	          method: params.method,
	          data: body
	        };
	        if (params.headers) {
	          settings.headers = {};
	          for (var name in params.headers) {
	            if (name.toLowerCase() === 'content-type') {
	              settings.contentType = params.headers[name];
	            } else {
	              settings.headers[name] = params.headers[name];
	            }
	          }
	        }
	        settings.success = function(data) {
	          var headers = parseHeaders(data.responseHeaders);
	          var body = data.payload;
	          if (!_.isString(body)) {
	            body = JSON.stringify(body);
	          }
	          response = {
	            statusCode : data.status,
	            headers: headers,
	            body: body
	          };
	          if (callback) {
	            callback(null, response, response.body);
	          }
	          str.end();
	        };
	        settings.failure = function(err) {
	          if (callback) {
	            callback(err);
	          }
	        };
	        Sfdc.canvas.client.ajax(params.url, settings);
	      }
	      return str;
	    };
	  }
	};


/***/ },
/* 52 */
/***/ function(module, exports) {

	/*global window, document */
	'use strict';

	var _index = 0;

	module.exports = {

	  supported: typeof window !== 'undefined' && typeof document !== 'undefined',

	  createRequest: function(jsonpParam, timeout) {
	    jsonpParam = jsonpParam || 'callback';
	    timeout = timeout || 10000;

	    return function(params, callback) {
	      if (params.method.toUpperCase() !== 'GET') {
	        return callback(new Error('JSONP only supports GET request.'));
	      }
	      var cbFuncName = '_jsforce_jsonpCallback_' + (++_index);
	      var callbacks = window;
	      var url = params.url;
	      url += url.indexOf('?')>0 ? '&' : '?';
	      url += jsonpParam + '=' + cbFuncName;

	      var script = document.createElement('script');
	      script.type = 'text/javascript';
	      script.src = url;
	      document.documentElement.appendChild(script);

	      var pid = setTimeout(function() {
	        cleanup();
	        callback(new Error("JSONP call time out."));
	      }, timeout);

	      callbacks[cbFuncName] = function(res) {
	        cleanup();
	        callback(null, {
	          statusCode: 200,
	          headers: { "content-type": "application/json" },
	          body: JSON.stringify(res)
	        });
	      };

	      var cleanup = function() {
	        clearTimeout(pid);
	        document.documentElement.removeChild(script);
	        delete callbacks[cbFuncName];
	      };
	    };

	  }

	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*global process*/
	/**
	 * @file Manages query for records in Salesforce
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var inherits = __webpack_require__(9),
	    events = __webpack_require__(2),
	    stream = __webpack_require__(24),
	    _      = __webpack_require__(10),
	    Promise = __webpack_require__(12),
	    SfDate = __webpack_require__(54),
	    SOQLBuilder = __webpack_require__(55),
	    RecordStream = __webpack_require__(56);

	/**
	 * Query
	 *
	 * @protected
	 * @class
	 * @extends {stream.Readable}
	 * @implements Promise.<T>
	 * @template T
	 * @param {Connection} conn - Connection object
	 * @param {Object|String} config - Query config object or SOQL string
	 * @param {Object} [options] - Default query options
	 * @param {Boolean} [options.autoFetch] - Using auto fetch mode or not
	 * @param {Number} [options.maxFetch] - Max fetching records in auto fetch mode
	 * @param {Boolean} [options.scanAll] - Including deleted records for query target or not
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 */
	var Query = module.exports = function(conn, config, options) {
	  Query.super_.call(this, { objectMode: true });

	  this._conn = conn;
	  if (_.isString(config)) { // if query config is string, it is given in SOQL.
	    this._soql = config;
	  } else if (config.locator && config.locator.indexOf("/") >= 0) { // if locator given in url for next records
	    this._locator = config.locator.split("/").pop();
	  } else {
	    this._config = config;
	    this.select(config.fields);
	    if (config.includes) {
	      this.include(config.includes);
	    }
	  }
	  this._options = _.defaults({
	    maxFetch: 10000,
	    autoFetch: false,
	    scanAll: false,
	    responseTarget: ResponseTargets.QueryResult
	  }, options || {});
	  this._executed = false;
	  this._finished = false;
	  this._chaining = false;

	  this._deferred = Promise.defer();

	  var self = this;
	};

	inherits(Query, stream.Readable);

	/**
	 * Select fields to include in the returning result
	 *
	 * @param {Object|Array.<String>|String} fields - Fields to fetch. Format can be in JSON object (MongoDB-like), array of field names, or comma-separated field names.
	 * @returns {Query.<T>}
	 */
	Query.prototype.select = function(fields) {
	  if (this._soql) {
	    throw Error("Cannot set select fields for the query which has already built SOQL.");
	  }
	  fields = fields || '*';
	  if (_.isString(fields)) {
	    fields = fields.split(/\s*,\s*/);
	  } else if (_.isObject(fields) && !_.isArray(fields)) {
	    var _fields =  [];
	    for (var k in fields) {
	      if (fields[k]) { _fields.push(k); }
	    }
	    fields = _fields;
	  }
	  this._config.fields = fields;
	  return this;
	};

	/**
	 * Set query conditions to filter the result records
	 *
	 * @param {Object|String} conditions - Conditions in JSON object (MongoDB-like), or raw SOQL WHERE clause string.
	 * @returns {Query.<T>}
	 */
	Query.prototype.where = function(conditions) {
	  if (this._soql) {
	    throw Error("Cannot set where conditions for the query which has already built SOQL.");
	  }
	  this._config.conditions = conditions;
	  return this;
	};

	/**
	 * Limit the returning result
	 *
	 * @param {Number} limit - Maximum number of records the query will return.
	 * @returns {Query.<T>}
	 */
	Query.prototype.limit = function(limit) {
	  if (this._soql) {
	    throw Error("Cannot set limit for the query which has already built SOQL.");
	  }
	  this._config.limit = limit;
	  return this;
	};

	/**
	 * Synonym of Query#skip()
	 *
	 * @method Query#offset
	 * @param {Number} offset - Offset number where begins returning results.
	 * @returns {Query.<T>}
	 */
	/**
	 * Skip records
	 *
	 * @method Query#offset
	 * @param {Number} offset - Offset number where begins returning results.
	 * @returns {Query.<T>}
	 */
	Query.prototype.skip =
	Query.prototype.offset = function(offset) {
	  if (this._soql) {
	    throw Error("Cannot set skip/offset for the query which has already built SOQL.");
	  }
	  this._config.offset = offset;
	  return this;
	};

	/**
	 * Synonym of Query#sort()
	 *
	 * @memthod Query#orderby
	 * @param {String|Object} sort - Sorting field or hash object with field name and sord direction
	 * @param {String|Number} [dir] - Sorting direction (ASC|DESC|1|-1)
	 * @returns {Query.<T>}
	 */
	/**
	 * Set query sort with direction
	 *
	 * @method Query#sort
	 * @param {String|Object} sort - Sorting field or hash object with field name and sord direction
	 * @param {String|Number} [dir] - Sorting direction (ASC|DESC|1|-1)
	 * @returns {Query.<T>}
	 */
	Query.prototype.sort =
	Query.prototype.orderby = function(sort, dir) {
	  if (this._soql) {
	    throw Error("Cannot set sort for the query which has already built SOQL.");
	  }
	  if (_.isString(sort) && _.isString(dir)) {
	    sort = [ [ sort, dir ] ];
	  }
	  this._config.sort = sort;
	  return this;
	};

	/**
	 * Include child relationship query
	 *
	 * @param {String} childRelName - Child relationship name to include in query result
	 * @param {Object|String} [conditions] - Conditions in JSON object (MongoDB-like), or raw SOQL WHERE clause string.
	 * @param {Object|Array.<String>|String} [fields] - Fields to fetch. Format can be in JSON object (MongoDB-like), array of field names, or comma-separated field names.
	 * @param {Object} [options] - Optional query configulations.
	 * @param {Number} [options.limit] - Maximum number of records the query will return.
	 * @param {Number} [options.offset] - Offset number where begins returning results.
	 * @param {Number} [options.skip] - Synonym of options.offset.
	 * @returns {Query~SubQuery}
	 */
	Query.prototype.include = function(childRelName, conditions, fields, options) {
	  if (this._soql) {
	    throw Error("Cannot include child relationship into the query which has already built SOQL.");
	  }
	  if (_.isObject(childRelName)) {
	    var includes = childRelName;
	    for (var crname in includes) {
	      var config = includes[crname];
	      this.include(crname, config.conditions, config.fields, config);
	    }
	    return;
	  }
	  var childConfig = {
	    table: childRelName,
	    conditions: conditions,
	    fields: fields,
	    limit: options && options.limit,
	    offset: options && (options.offset || options.skip),
	    sort: options && options.sort
	  };
	  if (!_.isArray(this._config.includes)) this._config.includes = [];
	  this._config.includes.push(childConfig);
	  var childQuery = new SubQuery(this._conn, this, childConfig);
	  this._children = this._children || [];
	  this._children.push(childQuery);
	  return childQuery;
	};


	/**
	 * Setting maxFetch query option
	 *
	 * @param {Number} maxFetch - Max fetching records in auto fetch mode
	 * @returns {Query.<T>}
	 */
	Query.prototype.maxFetch = function(maxFetch) {
	  this._options.maxFetch = maxFetch;
	  return this;
	};

	/**
	 * Switching auto fetch mode
	 *
	 * @param {Boolean} autoFetch - Using auto fetch mode or not
	 * @returns {Query.<T>}
	 */
	Query.prototype.autoFetch = function(autoFetch) {
	  this._options.autoFetch = autoFetch;
	  return this;
	};

	/**
	 * Set flag to scan all records including deleted and archived.
	 *
	 * @param {Boolean} scanAll - Flag whether include deleted/archived record or not. Default is false.
	 * @returns {Query.<T>}
	 */
	Query.prototype.scanAll = function(scanAll) {
	  this._options.scanAll = scanAll;
	  return this;
	};

	/**
	 * @private
	 */
	var ResponseTargets = Query.ResponseTargets = {};
	[ "QueryResult", "Records", "SingleRecord", "Count" ].forEach(function(f) {
	  ResponseTargets[f] = f;
	});

	/**
	 * @protected
	 * @param {String} responseTarget - Query response target
	 * @returns {Query.<S>}
	 */
	Query.prototype.setResponseTarget = function(responseTarget) {
	  if (responseTarget in ResponseTargets) {
	    this._options.responseTarget = responseTarget;
	  }
	  return this;
	};


	/**
	 * Synonym of Query#execute()
	 *
	 * @method Query#run
	 * @param {Object} [options] - Query options
	 * @param {Boolean} [options.autoFetch] - Using auto fetch mode or not
	 * @param {Number} [options.maxFetch] - Max fetching records in auto fetch mode
	 * @param {Boolean} [options.scanAll] - Including deleted records for query target or not
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<T>} [callback] - Callback function
	 * @returns {Query.<T>}
	 */
	Query.prototype.run =
	/**
	 * Synonym of Query#execute()
	 *
	 * @method Query#exec
	 * @param {Object} [options] - Query options
	 * @param {Boolean} [options.autoFetch] - Using auto fetch mode or not
	 * @param {Number} [options.maxFetch] - Max fetching records in auto fetch mode
	 * @param {Boolean} [options.scanAll] - Including deleted records for query target or not
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<T>} [callback] - Callback function
	 * @returns {Query.<T>}
	 */
	Query.prototype.exec =
	/**
	 * Execute query and fetch records from server.
	 *
	 * @method Query#execute
	 * @param {Object} [options] - Query options
	 * @param {Boolean} [options.autoFetch] - Using auto fetch mode or not
	 * @param {Number} [options.maxFetch] - Max fetching records in auto fetch mode
	 * @param {Boolean} [options.scanAll] - Including deleted records for query target or not
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in query request
	 * @param {Callback.<T>} [callback] - Callback function
	 * @returns {Query.<T>}
	 */
	Query.prototype.execute = function(options, callback) {
	  var self = this;
	  var logger = this._conn._logger;
	  var deferred = this._deferred;

	  if (this._executed) {
	    deferred.reject(new Error("re-executing already executed query"));
	    return this;
	  }

	  if (this._finished) {
	    deferred.reject(new Error("executing already closed query"));
	    return this;
	  }

	  if (typeof options === "function") {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  options = {
	    headers: options.headers || self._options.headers,
	    responseTarget: options.responseTarget || self._options.responseTarget,
	    autoFetch: options.autoFetch || self._options.autoFetch,
	    maxFetch: options.maxFetch || self._options.maxFetch,
	    scanAll: options.scanAll || self._options.scanAll
	  };

	  // callback and promise resolution;
	  var promiseCallback = function(err, res) {
	    if (_.isFunction(callback)) {
	      try {
	        res = callback(err, res);
	        err = null;
	      } catch(e) {
	        err = e;
	      }
	    }
	    if (err) {
	      deferred.reject(err);
	    } else {
	      deferred.resolve(res);
	    }
	  };
	  this.once('response', function(res) {
	    promiseCallback(null, res);
	  });
	  this.once('error', function(err) {
	    promiseCallback(err);
	  });

	  // collect fetched records in array
	  // only when response target is Records and
	  // either callback or chaining promises are available to this query.
	  this.once('fetch', function() {
	    if (options.responseTarget === ResponseTargets.Records && (self._chaining || callback)) {
	      logger.debug('--- collecting all fetched records ---');
	      var records = [];
	      var onRecord = function(record) {
	        records.push(record);
	      };
	      self.on('record', onRecord);
	      self.once('end', function() {
	        self.removeListener('record', onRecord);
	        self.emit('response', records, self);
	      });
	    }
	  });

	  // flag to prevent re-execution
	  this._executed = true;

	  // start actual query
	  logger.debug('>>> Query start >>>');
	  this._execute(options).then(function() {
	    logger.debug('*** Query finished ***');
	  }).fail(function(err) {
	    logger.debug('--- Query error ---');
	    self.emit('error', err);
	  });

	  // return Query instance for chaining
	  return this;
	};

	/**
	 * @private
	 */
	Query.prototype._execute = function(options) {
	  var self = this;
	  var logger = this._conn._logger;
	  var responseTarget = options.responseTarget;
	  var autoFetch = options.autoFetch;
	  var maxFetch = options.maxFetch;
	  var scanAll = options.scanAll;

	  return Promise.resolve(
	    self._locator ?
	    self._conn._baseUrl() + "/query/" + self._locator :
	    self.toSOQL().then(function(soql) {
	      self.totalFetched = 0;
	      logger.debug("SOQL = " + soql);
	      return self._conn._baseUrl() + "/" + (scanAll ? "queryAll" : "query") + "?q=" + encodeURIComponent(soql);
	    })
	  ).then(function(url) {
	    return self._conn.request({
	      method: 'GET',
	      url: url,
	      headers: options.headers
	    });
	  }).then(function(data) {
	    self.emit("fetch");
	    self.totalSize = data.totalSize;
	    var res;
	    switch(responseTarget) {
	      case ResponseTargets.SingleRecord:
	        res = data.records && data.records.length > 0 ? data.records[0] : null;
	        break;
	      case ResponseTargets.Records:
	        res = data.records;
	        break;
	      case ResponseTargets.Count:
	        res = data.totalSize;
	        break;
	      default:
	        res = data;
	    }
	    // only fire response event when it should be notified per fetch
	    if (responseTarget !== ResponseTargets.Records) {
	      self.emit("response", res, self);
	    }

	    // streaming record instances
	    for (var i=0, l=data.records.length; i<l; i++) {
	      if (self.totalFetched >= maxFetch) {
	        self._finished = true;
	        break;
	      }
	      var record = data.records[i];
	      self.push(record);
	      self.emit('record', record, self.totalFetched++, self);
	    }
	    if (data.nextRecordsUrl) {
	      self._locator = data.nextRecordsUrl.split('/').pop();
	    }
	    self._finished = self._finished || data.done || !autoFetch;
	    if (self._finished) {
	      self.push(null);
	    } else {
	      self._execute(options);
	    }
	    return res;
	  });
	};

	/**
	 * Readable stream implementation
	 *
	 * @override
	 * @private
	 */
	Query.prototype._read = function(size) {
	  if (!this._finished && !this._executed) {
	    this.execute({ autoFetch: true });
	  }
	};

	/** @override **/
	Query.prototype.on = function(e, fn) {
	  if (e === 'record') {
	    var self = this;
	    this.on('readable', function() {
	      while(self.read() !== null) {} // discard buffered records
	    });
	  }
	  return Query.super_.prototype.on.call(this, e, fn);
	};

	/** @override **/
	Query.prototype.addListener = Query.prototype.on;


	/**
	 * @private
	 */
	Query.prototype._expandFields = function() {
	  if (this._soql) {
	    return Promise.reject(new Error("Cannot expand fields for the query which has already built SOQL."));
	  }
	  var self = this;
	  var logger = self._conn._logger;
	  var conn = this._conn;
	  var table = this._config.table;
	  var fields = this._config.fields || [];

	  logger.debug('_expandFields: table = ' + table + ', fields = ' + fields.join(', '));

	  return Promise.all([
	    Promise.resolve(self._parent ? findRelationTable(table) : table)
	      .then(function(table) {
	        return Promise.all(
	          _.map(fields, function(field) { return expandAsteriskField(table, field); })
	        ).then(function(expandedFields) {
	          self._config.fields = _.flatten(expandedFields);
	        });
	      }),
	    Promise.all(
	      _.map(self._children || [], function(childQuery) {
	        return childQuery._expandFields();
	      })
	    )
	  ]);

	  function findRelationTable(rname) {
	    var ptable = self._parent._config.table;
	    logger.debug('finding table for relation "' + rname + '" in "' + ptable + '"...');
	    return describeCache(ptable).then(function(sobject) {
	      var upperRname = rname.toUpperCase();
	      var childRelation = _.find(sobject.childRelationships, function(cr) {
	        return (cr.relationshipName || '').toUpperCase() === upperRname;
	      });
	      return childRelation ? childRelation.childSObject :
	        Promise.reject(new Error("No child relationship found: " + rname ));
	    });
	  }

	  function describeCache(table) {
	    logger.debug('describe cache: '+table);
	    var deferred = Promise.defer();
	    conn.describe$(table, function(err, sobject) {
	      logger.debug('... done.');
	      if (err) { deferred.reject(err); }
	      else { deferred.resolve(sobject); }
	    });
	    return deferred.promise;
	  }

	  function expandAsteriskField(table, field) {
	    logger.debug('expanding field "'+ field + '" in "' + table + '"...');
	    var fpath = field.split('.');
	    return fpath[fpath.length - 1] === '*' ?
	      describeCache(table).then(function(sobject) {
	        logger.debug('table '+table+'has been described');
	        if (fpath.length > 1) {
	          var rname = fpath.shift();
	          var rfield = _.find(sobject.fields, function(f) {
	            return f.relationshipName &&
	                   f.relationshipName.toUpperCase() === rname.toUpperCase();
	          });
	          if (rfield) {
	            var rtable = rfield.referenceTo.length === 1 ? rfield.referenceTo[0] : 'Name';
	            return expandAsteriskField(rtable, fpath.join('.')).then(function(fpaths) {
	              return _.map(fpaths, function(fpath) { return rname + '.' + fpath; });
	            });
	          } else {
	            return [];
	          }
	        } else {
	          return _.map(sobject.fields, function(f) { return f.name; });
	        }
	      }) :
	      Promise.resolve([ field ]);
	  }
	};

	/**
	 * Explain plan for executing query
	 *
	 * @param {Callback.<ExplainInfo>} [callback] - Callback function
	 * @returns {Promise.<ExplainInfo>}
	 */
	Query.prototype.explain = function(callback) {
	  var self = this;
	  var logger = this._conn._logger;
	  return self.toSOQL().then(function(soql) {
	    logger.debug("SOQL = " + soql);
	    var url = "/query/?explain=" + encodeURIComponent(soql);
	    return self._conn.request(url);
	  }).thenCall(callback);
	};

	/**
	 * Return SOQL expression for the query
	 *
	 * @param {Callback.<String>} [callback] - Callback function
	 * @returns {Promise.<String>}
	 */
	Query.prototype.toSOQL = function(callback) {
	  var self = this;
	  return Promise.resolve(self._soql ||
	    self._expandFields().then(function() { return SOQLBuilder.createSOQL(self._config); })
	  ).thenCall(callback);
	};

	/**
	 * Create data stream of queried records.
	 * Automatically resume query if paused.
	 *
	 * @param {String} [type] - Type of outgoing data format. Currently 'csv' is default value and the only supported.
	 * @param {Object} [options] - Options passed to converter
	 * @returns {stream.Readable}
	 */
	Query.prototype.stream = RecordStream.Serializable.prototype.stream;

	/**
	 * Get record stream of queried records applying the given mapping function
	 *
	 * @param {RecordMapFunction} fn - Record mapping function
	 * @returns {RecordStream.Serializable}
	 */
	Query.prototype.map = RecordStream.prototype.map;

	/**
	 * Get record stream of queried records, applying the given filter function
	 *
	 * @param {RecordFilterFunction} fn - Record filtering function
	 * @returns {RecordStream.Serializable}
	 */
	Query.prototype.filter = RecordStream.prototype.map;

	/**
	 * Synonym of Query#destroy()
	 *
	 * @method Query#delete
	 * @param {String} [type] - SObject type. Required for SOQL based query object.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	/**
	 * Synonym of Query#destroy()
	 *
	 * @method Query#del
	 * @param {String} [type] - SObject type. Required for SOQL based query object.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	/**
	 * Bulk delete queried records
	 *
	 * @method Query#destroy
	 * @param {String} [type] - SObject type. Required for SOQL based query object.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<Array.<RecordResult>>}
	 */
	Query.prototype["delete"] =
	Query.prototype.del =
	Query.prototype.destroy = function(type, callback) {
	  if (typeof type === 'function') {
	    callback = type;
	    type = null;
	  }
	  type = type || (this._config && this._config.table);
	  if (!type) {
	    throw new Error("SOQL based query needs SObject type information to bulk delete.");
	  }
	  var batch = this._conn.sobject(type).deleteBulk();
	  var deferred = Promise.defer();
	  var handleError = function(err) {
	    if (err.name === 'ClientInputError') { deferred.resolve([]); } // if batch input receives no records
	    else { deferred.reject(err); }
	  };
	  this.on('error', handleError)
	    .pipe(batch)
	    .on('response', function(res) { deferred.resolve(res); })
	    .on('error', handleError);
	  return deferred.promise.thenCall(callback);
	};

	/**
	 * Bulk update queried records, using given mapping function/object
	 *
	 * @param {Record|RecordMapFunction} mapping - Mapping record or record mapping function
	 * @param {String} [type] - SObject type. Required for SOQL based query object.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<Array.<RecordResult>>}
	 */
	Query.prototype.update = function(mapping, type, callback) {
	  if (typeof type === 'function') {
	    callback = type;
	    type = null;
	  }
	  type = type || (this._config && this._config.table);
	  if (!type) {
	    throw new Error("SOQL based query needs SObject type information to bulk update.");
	  }
	  var updateStream = _.isFunction(mapping) ? RecordStream.map(mapping) : RecordStream.recordMapStream(mapping);
	  var batch = this._conn.sobject(type).updateBulk();
	  var deferred = Promise.defer();
	  var handleError = function(err) {
	    if (err.name === 'ClientInputError') { deferred.resolve([]); } // if batch input receives no records
	    else { deferred.reject(err); }
	  };
	  this.on('error', handleError)
	    .pipe(updateStream)
	    .on('error', handleError)
	    .pipe(batch)
	    .on('response', function(res) { deferred.resolve(res); })
	    .on('error', handleError);
	  return deferred.promise.thenCall(callback);
	};

	/**
	 * Promise/A+ interface
	 * http://promises-aplus.github.io/promises-spec/
	 *
	 * Delegate to deferred promise, return promise instance for query result
	 *
	 * @param {FulfilledCallback.<T, S1>} [onFulfilled]
	 * @param {RejectedCallback.<S2>} [onRejected]
	 * @returns {Promise.<S1|S2>}
	 */
	Query.prototype.then = function(onResolved, onReject) {
	  this._chaining = true;
	  if (!this._finished && !this._executed) { this.execute(); }
	  return this._deferred.promise.then.apply(this._deferred.promise, arguments);
	};

	/**
	 * Promise/A+ extension
	 * Call "then" using given node-style callback function
	 *
	 * @param {Callback.<T>} [callback] - Callback function
	 * @returns {Query}
	 */
	Query.prototype.thenCall = function(callback) {
	  if (_.isFunction(callback)) {
	    this.then(function(res) {
	      process.nextTick(function() {
	        callback(null, res);
	      });
	    }, function(err) {
	      process.nextTick(function() {
	        callback(err);
	      });
	    });
	  }
	  return this;
	};

	/*--------------------------------------------*/

	/**
	 * SubQuery object for representing child relationship query
	 *
	 * @protected
	 * @class Query~SubQuery
	 * @extends Query
	 * @param {Connection} conn - Connection object
	 * @param {Query} parent - Parent query object
	 * @param {Object} config - Sub query configuration
	 */
	var SubQuery = function(conn, parent, config) {
	  SubQuery.super_.call(this, conn, config);
	  this._parent = parent;
	};

	inherits(SubQuery, Query);

	/**
	 * @method Query~SubQuery#include
	 * @override
	 */
	SubQuery.prototype.include = function() {
	  throw new Error("Not allowed to include another subquery in subquery.");
	};

	/**
	 * Back the context to parent query object
	 *
	 * @method Query~SubQuery#end
	 * @returns {Query}
	 */
	SubQuery.prototype.end = function() {
	  return this._parent;
	};

	/**
	 * If execute is called in subquery context, delegate it to parent query object
	 *
	 * @method Query~SubQuery#execute
	 * @override
	 */
	SubQuery.prototype.run =
	SubQuery.prototype.exec =
	SubQuery.prototype.execute = function() {
	  return this._parent.execute.apply(this._parent, arguments);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);

	/**
	 * A date object to keep Salesforce date literal
	 *
	 * @class
	 * @constructor
	 * @see http://www.salesforce.com/us/developer/docs/soql_sosl/Content/sforce_api_calls_soql_select_dateformats.htm
	 */
	var SfDate = module.exports = function(literal) {
	  this._literal = literal;
	};

	/**
	 * Returns literal when converted to string
	 *
	 * @override
	 */
	SfDate.prototype.toString =
	SfDate.prototype.toJSON = function() { return this._literal; };


	/** @private **/
	function zeropad(n) { return (n<10 ? "0" : "") + n; }

	/**
	 * Convert JavaScript date object to ISO8601 Date format (e.g. 2012-10-31)
	 *
	 * @param {String|Number|Date} date - Input date
	 * @returns {SfDate} - Salesforce date literal with ISO8601 date format
	 */
	SfDate.toDateLiteral = function(date) {
	  if (_.isNumber(date)) {
	    date = new Date(date);
	  } else if (_.isString(date)) {
	    date = SfDate.parseDate(date);
	  }
	  var yy = date.getFullYear();
	  var mm = date.getMonth()+1;
	  var dd = date.getDate();
	  var dstr = [ yy, zeropad(mm), zeropad(dd) ].join("-");
	  return new SfDate(dstr);
	};

	/**
	 * Convert JavaScript date object to ISO8601 DateTime format
	 * (e.g. 2012-10-31T12:34:56Z)
	 *
	 * @param {String|Number|Date} date - Input date
	 * @returns {SfDate} - Salesforce date literal with ISO8601 datetime format
	 */
	SfDate.toDateTimeLiteral = function(date) {
	  if (_.isNumber(date)) {
	    date = new Date(date);
	  } else if (_.isString(date)) {
	    date = SfDate.parseDate(date);
	  }
	  var yy = date.getUTCFullYear();
	  var mm = date.getUTCMonth()+1;
	  var dd = date.getUTCDate();
	  var hh = date.getUTCHours();
	  var mi = date.getUTCMinutes();
	  var ss = date.getUTCSeconds();
	  var dtstr =
	    [ yy, zeropad(mm), zeropad(dd) ].join("-") + "T" +
	    [ zeropad(hh), zeropad(mi), zeropad(ss) ].join(":") + "Z";
	  return new SfDate(dtstr);
	};

	/**
	 * Parse IS08601 date(time) formatted string and return date instance
	 *
	 * @param {String} str
	 * @returns {Date}
	 */
	SfDate.parseDate = function(str) {
	  var d = new Date();
	  var regexp = /^([\d]{4})-?([\d]{2})-?([\d]{2})(T([\d]{2}):?([\d]{2}):?([\d]{2})(.([\d]{3}))?(Z|([\+\-])([\d]{2}):?([\d]{2})))?$/;
	  var m = str.match(regexp);
	  if (m) {
	    d = new Date(0);
	    if (!m[4]) {
	      d.setFullYear(parseInt(m[1], 10));
	      d.setDate(parseInt(m[3], 10));
	      d.setMonth(parseInt(m[2], 10) - 1);
	      d.setHours(0);
	      d.setMinutes(0);
	      d.setSeconds(0);
	      d.setMilliseconds(0);
	    } else {
	      d.setUTCFullYear(parseInt(m[1], 10));
	      d.setUTCDate(parseInt(m[3], 10));
	      d.setUTCMonth(parseInt(m[2], 10) - 1);
	      d.setUTCHours(parseInt(m[5], 10));
	      d.setUTCMinutes(parseInt(m[6], 10));
	      d.setUTCSeconds(parseInt(m[7], 10));
	      d.setUTCMilliseconds(parseInt(m[9] || '0', 10));
	      if (m[10] && m[10] !== 'Z') {
	        var offset = parseInt(m[12],10) * 60 + parseInt(m[13], 10);
	        d.setTime((m[11] === '+' ? -1 : 1) * offset * 60 * 1000 +d.getTime());
	      }
	    }
	    return d;
	  } else {
	    throw new Error("Invalid date format is specified : " + str);
	  }
	};

	/*
	 * Pre-defined Salesforce Date Literals
	 */
	var SfDateLiterals = {
	  YESTERDAY: 1,
	  TODAY: 1,
	  TOMORROW: 1,
	  LAST_WEEK: 1,
	  THIS_WEEK: 1,
	  NEXT_WEEK: 1,
	  LAST_MONTH: 1,
	  THIS_MONTH: 1,
	  NEXT_MONTH: 1,
	  LAST_90_DAYS: 1,
	  NEXT_90_DAYS: 1,
	  LAST_N_DAYS: 2,
	  NEXT_N_DAYS: 2,
	  NEXT_N_WEEKS: 2,
	  LAST_N_WEEKS: 2,
	  NEXT_N_MONTHS: 2,
	  LAST_N_MONTHS: 2,
	  THIS_QUARTER: 1,
	  LAST_QUARTER: 1,
	  NEXT_QUARTER: 1,
	  NEXT_N_QUARTERS: 2,
	  LAST_N_QUARTERS: 2,
	  THIS_YEAR: 1,
	  LAST_YEAR: 1,
	  NEXT_YEAR: 1,
	  NEXT_N_YEARS: 2,
	  LAST_N_YEARS: 2,
	  THIS_FISCAL_QUARTER: 1,
	  LAST_FISCAL_QUARTER: 1,
	  NEXT_FISCAL_QUARTER: 1,
	  NEXT_N_FISCAL_QUARTERS:2,
	  LAST_N_FISCAL_QUARTERS:2,
	  THIS_FISCAL_YEAR:1,
	  LAST_FISCAL_YEAR:1,
	  NEXT_FISCAL_YEAR:1,
	  NEXT_N_FISCAL_YEARS: 2,
	  LAST_N_FISCAL_YEARS: 2
	};

	for (var literal in SfDateLiterals) {
	  var type = SfDateLiterals[literal];
	  SfDate[literal] =
	   type === 1 ? new SfDate(literal) : createLiteralBuilder(literal);
	}

	/** @private **/
	function createLiteralBuilder(literal) {
	  return function(num) { return new SfDate(literal + ":" + num); };
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Create and build SOQL string from configuration
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var _      = __webpack_require__(10),
	    SfDate = __webpack_require__(54);


	/**
	 * Create SOQL
	 * @private
	 */
	function createSOQL(query) {
	  var soql = [
	    "SELECT ",
	    createFieldsClause(query.fields, query.includes),
	    " FROM ",
	    query.table
	  ].join("");
	  var cond = createConditionClause(query.conditions);
	  if (cond) {
	    soql += " WHERE " + cond;
	  }
	  var orderby = createOrderByClause(query.sort);
	  if (orderby) {
	    soql += " ORDER BY " + orderby;
	  }
	  if (query.limit) {
	    soql += " LIMIT " + query.limit;
	  }
	  if (query.offset) {
	    soql += " OFFSET " + query.offset;
	  }
	  return soql;
	}

	/** @private **/
	function createFieldsClause(fields, childQueries) {
	  childQueries = _.map(_.values(childQueries || {}), function(cquery) {
	    return '(' + createSOQL(cquery) + ')';
	  });
	  return (fields || [ "Id" ]).concat(childQueries).join(', ');
	}

	/** @private **/
	function createConditionClause(conditions, operator, depth) {
	  if (_.isString(conditions)) {
	    return conditions;
	  }
	  conditions = conditions || [];
	  operator = operator || "AND";
	  depth = depth || 0;
	  if (!isArray(conditions)) { // if passed in hash object
	    conditions = _.keys(conditions).map(function(key) {
	      return {
	        key: key,
	        value: conditions[key]
	      };
	    });
	  } else {
	    conditions = conditions.map(function(cond) {
	      var conds = [];
	      for (var key in cond) {
	        conds.push({
	          key: key,
	          value: cond[key]
	        });
	      }
	      return conds.length>1 ? conds : conds[0];
	    });
	  }
	  conditions = conditions.map(function(cond) {
	    var d = depth+1, op;
	    switch (cond.key) {
	      case "$or" :
	      case "$and" :
	      case "$not" :
	        if (operator !== "NOT" && conditions.length === 1) {
	          d = depth; // not change tree depth
	        }
	        op = cond.key === "$or" ? "OR" :
	             cond.key === "$and" ? "AND" :
	             "NOT";
	        return createConditionClause(cond.value, op, d);
	      default:
	        return createFieldExpression(cond.key, cond.value);
	    }
	  }).filter(function(expr) { return expr; });

	  var paren;
	  if (operator === 'NOT') {
	    paren = depth > 0;
	    return (paren ? "(" : "") + "NOT " + conditions[0] + (paren ? ")" : "");
	  } else {
	    paren = depth > 0 && conditions.length > 1;
	    return (paren ? "(" : "") + conditions.join(" "+operator+" ") + (paren ? ")" : "");
	  }
	}

	var opMap = {
	  "="     : "=",
	  "$eq"   : "=",
	  "!="    : "!=",
	  "$ne"   : "!=",
	  ">"     : ">",
	  "$gt"   : ">",
	  "<"     : "<",
	  "$lt"   : "<",
	  ">="    : ">=",
	  "$gte"  : ">=",
	  "<="    : "<=",
	  "$lte"  : "<=",
	  "$like" : "LIKE",
	  "$nlike" : "NOT LIKE",
	  "$in"   : "IN",
	  "$nin"  : "NOT IN",
	  "$includes" : "INCLUDES",
	  "$excludes" : "EXCLUDES",
	  "$exists" : "EXISTS"
	};

	/** @private **/
	function createFieldExpression(field, value) {
	  var op = "$eq";

	  // Assume the `$in` operator if value is an array and none was supplied.
	  if (_.isArray(value)) { op = "$in"; }
	  // Otherwise, if an object was passed then process the supplied ops.
	  else if (_.isObject(value)) {
	    var _value;
	    for (var k in value) {
	      if (k[0] === "$") {
	        op = k;
	        value = value[k];
	        break;
	      }
	    }
	  }
	  var sfop = opMap[op];
	  if (!sfop || _.isUndefined(value)) { return null; }
	  var valueExpr = createValueExpression(value);
	  if (_.isUndefined(valueExpr)) { return null; }
	  switch (sfop) {
	    case "NOT LIKE":
	      return "(" + [ "NOT", field, 'LIKE', valueExpr ].join(" ") + ")";
	    case "EXISTS":
	      return [ field, value ? "!=" : "=", "null" ].join(" ");
	    default:
	      return [ field, sfop, valueExpr ].join(" ");
	  }
	}

	/** @private **/
	function createValueExpression(value) {
	  if (isArray(value)) {
	    return value.length > 0 ?
	           "(" + value.map(createValueExpression).join(", ") + ")" :
	           undefined;
	  }
	  if (value instanceof SfDate) {
	    return value.toString();
	  }
	  if (_.isString(value)) {
	    return "'" + escapeSOQLString(value) + "'";
	  }
	  if (_.isNumber(value)) {
	    return (value).toString();
	  }
	  if (_.isNull(value)) {
	    return "null";
	  }
	  return value;
	}

	/** @private **/
	function escapeSOQLString(str) {
	  return String(str || '').replace(/'/g, "\\'");
	}

	/** @private **/
	function isArray(a) {
	  return _.isObject(a) && _.isFunction(a.pop);
	}


	/** @private **/
	function createOrderByClause(sort) {
	  sort = sort || [];
	  if (_.isString(sort)) {
	    if (/,|\s+(asc|desc)\s*$/.test(sort)) {
	      // must be specified in pure "order by" clause. Return raw config.
	      return sort;
	    }
	    // sort order in mongoose-style expression.
	    // e.g. "FieldA -FieldB" => "ORDER BY FieldA ASC, FieldB DESC"
	    sort = sort.split(/\s+/).map(function(field) {
	      var dir = "ASC"; // ascending
	      var flag = field[0];
	      if (flag === '-') {
	        dir = "DESC";
	        field = field.substring(1);
	      } else if (flag === '+') {
	        field = field.substring(1);
	      }
	      return [ field, dir ];
	    });
	  } else if (!isArray(sort)) {
	    sort = _.keys(sort).map(function(field) {
	      var dir = sort[field];
	      return [ field, dir ];
	    });
	  }
	  return sort.map(function(s) {
	    var field = s[0], dir = s[1];
	    switch (String(dir)) {
	      case "DESC":
	      case "desc":
	      case "descending":
	      case "-":
	      case "-1":
	        dir = "DESC";
	        break;
	      default:
	        dir = "ASC";
	    }
	    return field + " " + dir;
	  }).join(", ");
	}


	exports.createSOQL = createSOQL;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Represents stream that handles Salesforce record as stream data
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var events = __webpack_require__(2),
	    stream = __webpack_require__(24),
	    Duplex = stream.Duplex,
	    Transform = stream.Transform,
	    PassThrough = stream.PassThrough,
	    inherits = __webpack_require__(9),
	    _      = __webpack_require__(10),
	    CSV    = __webpack_require__(57);


	/**
	 * Class for Record Stream
	 *
	 * @class
	 * @constructor
	 * @extends stream.Transform
	 */
	var RecordStream = module.exports = function() {
	  RecordStream.super_.call(this, { objectMode: true });
	};

	inherits(RecordStream, Transform);


	/*
	 * @override
	 */
	RecordStream.prototype._transform = function(record, enc, callback) {
	  this.emit('record', record);
	  this.push(record);
	  callback();
	};

	/**
	 * Get record stream of queried records applying the given mapping function
	 *
	 * @param {RecordMapFunction} fn - Record mapping function
	 * @returns {RecordStream}
	 */
	RecordStream.prototype.map = function(fn) {
	  return this.pipe(RecordStream.map(fn));
	};

	/**
	 * Get record stream of queried records, applying the given filter function
	 *
	 * @param {RecordFilterFunction} fn - Record filtering function
	 * @returns {RecordStream}
	 */
	RecordStream.prototype.filter = function(fn) {
	  return this.pipe(RecordStream.filter(fn));
	};


	/**
	 * @class RecordStream.Serializable
	 * @extends {RecordStream}
	 */
	var Serializable = RecordStream.Serializable = function() {
	  Serializable.super_.call(this);
	  this._dataStream = null;
	};

	inherits(Serializable, RecordStream);

	/**
	 * Create readable data stream which emits serialized record data
	 *
	 * @param {String} [type] - Type of outgoing data format. Currently 'csv' is default value and the only supported.
	 * @param {Object} [options] - Options passed to converter
	 * @returns {stream.Readable}
	*/
	Serializable.prototype.stream = function(type, options) {
	  type = type || 'csv';
	  var converter = DataStreamConverters[type];
	  if (!converter) {
	    throw new Error('Converting [' + type + '] data stream is not supported.');
	  }
	  if (!this._dataStream) {
	    this._dataStream = new PassThrough();
	    this.pipe(converter.serialize(options))
	      .pipe(this._dataStream);
	  }
	  return this._dataStream;
	};


	/**
	 * @class RecordStream.Parsable
	 * @extends {RecordStream}
	 */
	var Parsable = RecordStream.Parsable = function() {
	  Parsable.super_.call(this);
	  this._dataStream = null;
	};

	inherits(Parsable, RecordStream);

	/**
	 * Create writable data stream which accepts serialized record data
	 *
	 * @param {String} [type] - Type of outgoing data format. Currently 'csv' is default value and the only supported.
	 * @param {Object} [options] - Options passed to converter
	 * @returns {stream.Readable}
	*/
	Parsable.prototype.stream = function(type, options) {
	  type = type || 'csv';
	  var converter = DataStreamConverters[type];
	  if (!converter) {
	    throw new Error('Converting [' + type + '] data stream is not supported.');
	  }
	  if (!this._dataStream) {
	    this._dataStream = new PassThrough();
	    this._parserStream = converter.parse(options);
	    this._parserStream.pipe(this).pipe(new PassThrough({ objectMode: true, highWaterMark: ( 500 * 1000 ) }));
	  }
	  return this._dataStream;
	};


	/* @override */
	Parsable.prototype.on = function(ev, fn) {
	  if (ev === 'readable' || ev === 'record') {
	    this._dataStream.pipe(this._parserStream);
	  }
	  return Parsable.super_.prototype.on.call(this, ev, fn);
	};

	/* @override */
	Parsable.prototype.addListener = Parsable.prototype.on;

	/* --------------------------------------------------- */

	/**
	 * @callback RecordMapFunction
	 * @param {Record} record - Source record to map
	 * @returns {Record}
	 */

	/**
	 * Create a record stream which maps records and pass them to downstream
	 *
	 * @param {RecordMapFunction} fn - Record mapping function
	 * @returns {RecordStream.Serializable}
	 */
	RecordStream.map = function(fn) {
	  var mapStream = new RecordStream.Serializable();
	  mapStream._transform = function(record, enc, callback) {
	    var rec = fn(record) || record; // if not returned record, use same record
	    this.push(rec);
	    callback();
	  };
	  return mapStream;
	};

	/**
	 * Create mapping stream using given record template
	 *
	 * @param {Record} record - Mapping record object. In mapping field value, temlate notation can be used to refer field value in source record, if noeval param is not true.
	 * @param {Boolean} [noeval] - Disable template evaluation in mapping record.
	 * @returns {RecordStream.Serializable}
	 */
	RecordStream.recordMapStream = function(record, noeval) {
	  return RecordStream.map(function(rec) {
	    var mapped = { Id: rec.Id };
	    for (var prop in record) {
	      mapped[prop] = noeval ? record[prop] : evalMapping(record[prop], rec);
	    }
	    return mapped;
	  });

	  function evalMapping(value, mapping) {
	    if (_.isString(value)) {
	      var m = /^\$\{(\w+)\}$/.exec(value);
	      if (m) { return mapping[m[1]]; }
	      return value.replace(/\$\{(\w+)\}/g, function($0, prop) {
	        var v = mapping[prop];
	        return _.isNull(v) || _.isUndefined(v) ? "" : String(v);
	      });
	    } else {
	      return value;
	    }
	  }
	};

	/**
	 * @callback RecordFilterFunction
	 * @param {Record} record - Source record to filter
	 * @returns {Boolean}
	 */

	/**
	 * Create a record stream which filters records and pass them to downstream
	 *
	 * @param {RecordFilterFunction} fn - Record filtering function
	 * @returns {RecordStream.Serializable}
	 */
	RecordStream.filter = function(fn) {
	  var filterStream = new RecordStream.Serializable();
	  filterStream._transform = function(record, enc, callback) {
	    if (fn(record)) { this.push(record); }
	    callback();
	  };
	  return filterStream;
	};

	/**
	 * @private
	 */
	function convertRecordForSerialization(record, options) {
	  return Object.keys(record).reduce(function(rec, key) {
	    var value = rec[key];
	    var t = typeof value;
	    var urec = {};
	    if (key === 'attributes') { // 'attributes' prop will be ignored
	      rec = _.extend({}, rec);
	      delete rec[key];
	    } else if (options.nullValue && value === null) {
	      urec[key] = options.nullValue;
	      rec = _.extend({}, rec, urec);
	    } else if (value !== null && typeof value === 'object') {
	      var precord = convertRecordForSerialization(value, options);
	      rec = Object.keys(precord).reduce(function(prec, pkey) {
	        prec[key + '.' + pkey] = precord[pkey];
	        return prec;
	      }, _.extend({}, rec));
	    }
	    return rec;
	  }, record);
	}

	/**
	 * @private
	 */
	function createPipelineStream(s1, s2) {
	  var pipeline = new PassThrough();
	  pipeline.on('pipe', function(source) {
	    source.unpipe(pipeline);
	    source.pipe(s1).pipe(s2);
	  });
	  pipeline.pipe = function(dest, options) {
	    return s2.pipe(dest, options);
	  };
	  return pipeline;
	}

	/** ---------------------------------------------------------------------- **/

	/**
	 * @private
	 */
	var CSVStreamConverter = {
	  serialize: function(options) {
	    options = options || {};
	    return createPipelineStream(
	      RecordStream.map(function(record) {
	        return convertRecordForSerialization(record, options);
	      }),
	      CSV.serializeCSVStream(options)
	    );
	  },
	  parse: function(options) {
	    return CSV.parseCSVStream(options);
	  }
	};

	/**
	 * @private
	 */
	var DataStreamConverters = RecordStream.DataStreamConverters = {
	  csv: CSVStreamConverter
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10),
	    csvParse = __webpack_require__(58),
	    csvParseSync = __webpack_require__(62),
	    csvStringify = __webpack_require__(63),
	    csvStringifySync = __webpack_require__(65);

	/**
	 * @private
	 */
	function parseCSV(str, options) {
	  options = _.extend({}, options, { columns: true });
	  return csvParseSync(str, options);
	}

	/**
	 * @private
	 */
	function toCSV(records, options) {
	  options = _.extend({}, options, { header: true });
	  return csvStringifySync(records, options);
	}

	/**
	 * @private
	 */
	function parseCSVStream(options) {
	  options = _.extend({}, options, { columns: true });
	  return csvParse(options);
	}

	/**
	 * @private
	 */
	function serializeCSVStream(options) {
	  options = _.extend({}, options, { header: true });
	  return csvStringify(options);
	}


	/**
	 * @protected
	 */
	module.exports = {
	  parseCSV: parseCSV,
	  toCSV: toCSV,
	  parseCSVStream: parseCSVStream,
	  serializeCSVStream: serializeCSVStream
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, process) {// Generated by CoffeeScript 1.10.0
	var Parser, StringDecoder, stream, util;

	stream = __webpack_require__(25);

	util = __webpack_require__(59);

	StringDecoder = __webpack_require__(33).StringDecoder;

	module.exports = function() {
	  var callback, called, chunks, data, options, parser;
	  if (arguments.length === 3) {
	    data = arguments[0];
	    options = arguments[1];
	    callback = arguments[2];
	    if (typeof callback !== 'function') {
	      throw Error("Invalid callback argument: " + (JSON.stringify(callback)));
	    }
	    if (!(typeof data === 'string' || Buffer.isBuffer(arguments[0]))) {
	      return callback(Error("Invalid data argument: " + (JSON.stringify(data))));
	    }
	  } else if (arguments.length === 2) {
	    if (typeof arguments[0] === 'string' || Buffer.isBuffer(arguments[0])) {
	      data = arguments[0];
	    } else {
	      options = arguments[0];
	    }
	    if (typeof arguments[1] === 'function') {
	      callback = arguments[1];
	    } else {
	      options = arguments[1];
	    }
	  } else if (arguments.length === 1) {
	    if (typeof arguments[0] === 'function') {
	      callback = arguments[0];
	    } else {
	      options = arguments[0];
	    }
	  }
	  if (options == null) {
	    options = {};
	  }
	  parser = new Parser(options);
	  if (data != null) {
	    process.nextTick(function() {
	      parser.write(data);
	      return parser.end();
	    });
	  }
	  if (callback) {
	    called = false;
	    chunks = options.objname ? {} : [];
	    parser.on('readable', function() {
	      var chunk, results;
	      results = [];
	      while (chunk = parser.read()) {
	        if (options.objname) {
	          results.push(chunks[chunk[0]] = chunk[1]);
	        } else {
	          results.push(chunks.push(chunk));
	        }
	      }
	      return results;
	    });
	    parser.on('error', function(err) {
	      called = true;
	      return callback(err);
	    });
	    parser.on('end', function() {
	      if (!called) {
	        return callback(null, chunks);
	      }
	    });
	  }
	  return parser;
	};

	Parser = function(options) {
	  var base, base1, base10, base11, base12, base13, base14, base15, base16, base2, base3, base4, base5, base6, base7, base8, base9, k, v;
	  if (options == null) {
	    options = {};
	  }
	  options.objectMode = true;
	  this.options = {};
	  for (k in options) {
	    v = options[k];
	    this.options[k] = v;
	  }
	  stream.Transform.call(this, this.options);
	  if ((base = this.options).rowDelimiter == null) {
	    base.rowDelimiter = null;
	  }
	  if ((base1 = this.options).delimiter == null) {
	    base1.delimiter = ',';
	  }
	  if ((base2 = this.options).quote == null) {
	    base2.quote = '"';
	  }
	  if ((base3 = this.options).escape == null) {
	    base3.escape = '"';
	  }
	  if ((base4 = this.options).columns == null) {
	    base4.columns = null;
	  }
	  if ((base5 = this.options).comment == null) {
	    base5.comment = '';
	  }
	  if ((base6 = this.options).objname == null) {
	    base6.objname = false;
	  }
	  if ((base7 = this.options).trim == null) {
	    base7.trim = false;
	  }
	  if ((base8 = this.options).ltrim == null) {
	    base8.ltrim = false;
	  }
	  if ((base9 = this.options).rtrim == null) {
	    base9.rtrim = false;
	  }
	  if ((base10 = this.options).auto_parse == null) {
	    base10.auto_parse = false;
	  }
	  if ((base11 = this.options).auto_parse_date == null) {
	    base11.auto_parse_date = false;
	  }
	  if ((base12 = this.options).relax == null) {
	    base12.relax = false;
	  }
	  if ((base13 = this.options).relax_column_count == null) {
	    base13.relax_column_count = false;
	  }
	  if ((base14 = this.options).skip_empty_lines == null) {
	    base14.skip_empty_lines = false;
	  }
	  if ((base15 = this.options).max_limit_on_data_read == null) {
	    base15.max_limit_on_data_read = 128000;
	  }
	  if ((base16 = this.options).skip_lines_with_empty_values == null) {
	    base16.skip_lines_with_empty_values = false;
	  }
	  this.lines = 0;
	  this.count = 0;
	  this.skipped_line_count = 0;
	  this.empty_line_count = 0;
	  this.is_int = /^(\-|\+)?([1-9]+[0-9]*)$/;
	  this.is_float = function(value) {
	    return (value - parseFloat(value) + 1) >= 0;
	  };
	  this.decoder = new StringDecoder();
	  this.buf = '';
	  this.quoting = false;
	  this.commenting = false;
	  this.field = '';
	  this.nextChar = null;
	  this.closingQuote = 0;
	  this.line = [];
	  this.chunks = [];
	  this.rawBuf = '';
	  return this;
	};

	util.inherits(Parser, stream.Transform);

	module.exports.Parser = Parser;

	Parser.prototype._transform = function(chunk, encoding, callback) {
	  var err, error;
	  if (chunk instanceof Buffer) {
	    chunk = this.decoder.write(chunk);
	  }
	  try {
	    this.__write(chunk, false);
	    return callback();
	  } catch (error) {
	    err = error;
	    return this.emit('error', err);
	  }
	};

	Parser.prototype._flush = function(callback) {
	  var err, error;
	  try {
	    this.__write(this.decoder.end(), true);
	    if (this.quoting) {
	      this.emit('error', new Error("Quoted field not terminated at line " + (this.lines + 1)));
	      return;
	    }
	    if (this.line.length > 0) {
	      this.__push(this.line);
	    }
	    return callback();
	  } catch (error) {
	    err = error;
	    return this.emit('error', err);
	  }
	};

	Parser.prototype.__push = function(line) {
	  var field, i, j, len, lineAsColumns, rawBuf, row;
	  if (this.options.skip_lines_with_empty_values && line.join('').trim() === '') {
	    return;
	  }
	  row = null;
	  if (this.options.columns === true) {
	    this.options.columns = line;
	    rawBuf = '';
	    return;
	  } else if (typeof this.options.columns === 'function') {
	    this.options.columns = this.options.columns(line);
	    rawBuf = '';
	    return;
	  }
	  if (!this.line_length && line.length > 0) {
	    this.line_length = this.options.columns ? this.options.columns.length : line.length;
	  }
	  if (line.length === 1 && line[0] === '') {
	    this.empty_line_count++;
	  } else if (line.length !== this.line_length) {
	    if (this.options.relax_column_count) {
	      this.skipped_line_count++;
	    } else if (this.options.columns != null) {
	      throw Error("Number of columns on line " + this.lines + " does not match header");
	    } else {
	      throw Error("Number of columns is inconsistent on line " + this.lines);
	    }
	  } else {
	    this.count++;
	  }
	  if (this.options.columns != null) {
	    lineAsColumns = {};
	    for (i = j = 0, len = line.length; j < len; i = ++j) {
	      field = line[i];
	      if (this.options.columns[i] === false) {
	        continue;
	      }
	      lineAsColumns[this.options.columns[i]] = field;
	    }
	    if (this.options.objname) {
	      row = [lineAsColumns[this.options.objname], lineAsColumns];
	    } else {
	      row = lineAsColumns;
	    }
	  } else {
	    row = line;
	  }
	  if (this.options.raw) {
	    this.push({
	      raw: this.rawBuf,
	      row: row
	    });
	    return this.rawBuf = '';
	  } else {
	    return this.push(row);
	  }
	};

	Parser.prototype.__write = function(chars, end, callback) {
	  var areNextCharsDelimiter, areNextCharsRowDelimiters, auto_parse, char, escapeIsQuote, i, isDelimiter, isEscape, isNextCharAComment, isQuote, isRowDelimiter, is_float, is_int, l, ltrim, nextCharPos, ref, remainingBuffer, results, rowDelimiter, rowDelimiterLength, rtrim, wasCommenting;
	  is_int = (function(_this) {
	    return function(value) {
	      if (typeof _this.is_int === 'function') {
	        return _this.is_int(value);
	      } else {
	        return _this.is_int.test(value);
	      }
	    };
	  })(this);
	  is_float = (function(_this) {
	    return function(value) {
	      if (typeof _this.is_float === 'function') {
	        return _this.is_float(value);
	      } else {
	        return _this.is_float.test(value);
	      }
	    };
	  })(this);
	  auto_parse = (function(_this) {
	    return function(value) {
	      var m;
	      if (_this.options.auto_parse && is_int(_this.field)) {
	        _this.field = parseInt(_this.field);
	      } else if (_this.options.auto_parse && is_float(_this.field)) {
	        _this.field = parseFloat(_this.field);
	      } else if (_this.options.auto_parse && _this.options.auto_parse_date) {
	        m = Date.parse(_this.field);
	        if (!isNaN(m)) {
	          _this.field = new Date(m);
	        }
	      }
	      return _this.field;
	    };
	  })(this);
	  ltrim = this.options.trim || this.options.ltrim;
	  rtrim = this.options.trim || this.options.rtrim;
	  chars = this.buf + chars;
	  l = chars.length;
	  rowDelimiterLength = this.options.rowDelimiter ? this.options.rowDelimiter.length : 0;
	  i = 0;
	  if (this.lines === 0 && 0xFEFF === chars.charCodeAt(0)) {
	    i++;
	  }
	  while (i < l) {
	    if (!end) {
	      remainingBuffer = chars.substr(i, l - i);
	      if ((!this.commenting && l - i < this.options.comment.length && this.options.comment.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && l - i < rowDelimiterLength && this.options.rowDelimiter.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && this.quoting && l - i < (this.options.quote.length + rowDelimiterLength) && (this.options.quote + this.options.rowDelimiter).substr(0, l - i) === remainingBuffer) || (l - i <= this.options.delimiter.length && this.options.delimiter.substr(0, l - i) === remainingBuffer) || (l - i <= this.options.escape.length && this.options.escape.substr(0, l - i) === remainingBuffer)) {
	        break;
	      }
	    }
	    char = this.nextChar ? this.nextChar : chars.charAt(i);
	    this.nextChar = l > i + 1 ? chars.charAt(i + 1) : '';
	    if (this.options.raw) {
	      this.rawBuf += char;
	    }
	    if (this.options.rowDelimiter == null) {
	      if ((!this.quoting) && (char === '\n' || char === '\r')) {
	        rowDelimiter = char;
	        nextCharPos = i + 1;
	      } else if (this.nextChar === '\n' || this.nextChar === '\r') {
	        rowDelimiter = this.nextChar;
	        nextCharPos = i + 2;
	        if (this.raw) {
	          rawBuf += this.nextChar;
	        }
	      }
	      if (rowDelimiter) {
	        if (rowDelimiter === '\r' && chars.charAt(nextCharPos) === '\n') {
	          rowDelimiter += '\n';
	        }
	        this.options.rowDelimiter = rowDelimiter;
	        rowDelimiterLength = this.options.rowDelimiter.length;
	      }
	    }
	    if (!this.commenting && char === this.options.escape) {
	      escapeIsQuote = this.options.escape === this.options.quote;
	      isEscape = this.nextChar === this.options.escape;
	      isQuote = this.nextChar === this.options.quote;
	      if (!(escapeIsQuote && !this.field && !this.quoting) && (isEscape || isQuote)) {
	        i++;
	        char = this.nextChar;
	        this.nextChar = chars.charAt(i + 1);
	        this.field += char;
	        if (this.options.raw) {
	          this.rawBuf += char;
	        }
	        i++;
	        continue;
	      }
	    }
	    if (!this.commenting && char === this.options.quote) {
	      if (this.quoting) {
	        areNextCharsRowDelimiters = this.options.rowDelimiter && chars.substr(i + 1, this.options.rowDelimiter.length) === this.options.rowDelimiter;
	        areNextCharsDelimiter = chars.substr(i + 1, this.options.delimiter.length) === this.options.delimiter;
	        isNextCharAComment = this.nextChar === this.options.comment;
	        if (this.nextChar && !areNextCharsRowDelimiters && !areNextCharsDelimiter && !isNextCharAComment) {
	          if (this.options.relax) {
	            this.quoting = false;
	            this.field = "" + this.options.quote + this.field;
	          } else {
	            throw Error("Invalid closing quote at line " + (this.lines + 1) + "; found " + (JSON.stringify(this.nextChar)) + " instead of delimiter " + (JSON.stringify(this.options.delimiter)));
	          }
	        } else {
	          this.quoting = false;
	          this.closingQuote = this.options.quote.length;
	          i++;
	          if (end && i === l) {
	            this.line.push(auto_parse(this.field));
	            this.field = '';
	          }
	          continue;
	        }
	      } else if (!this.field) {
	        this.quoting = true;
	        i++;
	        continue;
	      } else if (this.field && !this.options.relax) {
	        throw Error("Invalid opening quote at line " + (this.lines + 1));
	      }
	    }
	    isRowDelimiter = this.options.rowDelimiter && chars.substr(i, this.options.rowDelimiter.length) === this.options.rowDelimiter;
	    if (isRowDelimiter || (end && i === l - 1)) {
	      this.lines++;
	    }
	    wasCommenting = false;
	    if (!this.commenting && !this.quoting && this.options.comment && chars.substr(i, this.options.comment.length) === this.options.comment) {
	      this.commenting = true;
	    } else if (this.commenting && isRowDelimiter) {
	      wasCommenting = true;
	      this.commenting = false;
	    }
	    isDelimiter = chars.substr(i, this.options.delimiter.length) === this.options.delimiter;
	    if (!this.commenting && !this.quoting && (isDelimiter || isRowDelimiter)) {
	      if (isRowDelimiter && this.line.length === 0 && this.field === '') {
	        if (wasCommenting || this.options.skip_empty_lines) {
	          i += this.options.rowDelimiter.length;
	          this.nextChar = chars.charAt(i);
	          continue;
	        }
	      }
	      if (rtrim) {
	        if (!this.closingQuote) {
	          this.field = this.field.trimRight();
	        }
	      }
	      this.line.push(auto_parse(this.field));
	      this.closingQuote = 0;
	      this.field = '';
	      if (isDelimiter) {
	        i += this.options.delimiter.length;
	        this.nextChar = chars.charAt(i);
	        if (end && !this.nextChar) {
	          isRowDelimiter = true;
	          this.line.push('');
	        }
	      }
	      if (isRowDelimiter) {
	        this.__push(this.line);
	        this.line = [];
	        i += (ref = this.options.rowDelimiter) != null ? ref.length : void 0;
	        this.nextChar = chars.charAt(i);
	        continue;
	      }
	    } else if (!this.commenting && !this.quoting && (char === ' ' || char === '\t')) {
	      if (!(ltrim && !this.field)) {
	        this.field += char;
	      }
	      if (end && i + 1 === l) {
	        if (this.options.trim || this.options.rtrim) {
	          this.field = this.field.trimRight();
	        }
	      }
	      i++;
	    } else if (!this.commenting) {
	      this.field += char;
	      i++;
	    } else {
	      i++;
	    }
	    if (!this.commenting && this.field.length > this.options.max_limit_on_data_read) {
	      throw Error("Delimiter not found in the file " + (JSON.stringify(this.options.delimiter)));
	    }
	    if (!this.commenting && this.line.length > this.options.max_limit_on_data_read) {
	      throw Error("Row delimiter not found in the file " + (JSON.stringify(this.options.rowDelimiter)));
	    }
	  }
	  if (end) {
	    if (rtrim) {
	      if (!this.closingQuote) {
	        this.field = this.field.trimRight();
	      }
	    }
	    if (this.field !== '') {
	      this.line.push(auto_parse(this.field));
	      this.field = '';
	    }
	    if (this.field.length > this.options.max_limit_on_data_read) {
	      throw Error("Delimiter not found in the file " + (JSON.stringify(this.options.delimiter)));
	    }
	    if (l === 0) {
	      this.lines++;
	    }
	    if (this.line.length > this.options.max_limit_on_data_read) {
	      throw Error("Row delimiter not found in the file " + (JSON.stringify(this.options.rowDelimiter)));
	    }
	  }
	  this.buf = '';
	  results = [];
	  while (i < l) {
	    this.buf += chars.charAt(i);
	    results.push(i++);
	  }
	  return results;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer, __webpack_require__(13)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(60);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(61);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Generated by CoffeeScript 1.10.0
	var StringDecoder, parse;

	StringDecoder = __webpack_require__(33).StringDecoder;

	parse = __webpack_require__(58);

	module.exports = function(data, options) {
	  var decoder, parser, records;
	  if (options == null) {
	    options = {};
	  }
	  records = options.objname ? {} : [];
	  if (data instanceof Buffer) {
	    decoder = new StringDecoder();
	    data = decoder.write(data);
	  }
	  parser = new parse.Parser(options);
	  parser.push = function(record) {
	    if (options.objname) {
	      return records[record[0]] = record[1];
	    } else {
	      return records.push(record);
	    }
	  };
	  parser.__write(data, false);
	  if (data instanceof Buffer) {
	    parser.__write(data.end(), true);
	  }
	  parser._flush((function() {}));
	  return records;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.10.0
	var Stringifier, get, stream, util;

	stream = __webpack_require__(25);

	util = __webpack_require__(59);

	get = __webpack_require__(64);

	module.exports = function() {
	  var callback, chunks, data, options, stringifier;
	  if (arguments.length === 3) {
	    data = arguments[0];
	    options = arguments[1];
	    callback = arguments[2];
	  } else if (arguments.length === 2) {
	    if (Array.isArray(arguments[0])) {
	      data = arguments[0];
	    } else {
	      options = arguments[0];
	    }
	    if (typeof arguments[1] === 'function') {
	      callback = arguments[1];
	    } else {
	      options = arguments[1];
	    }
	  } else if (arguments.length === 1) {
	    if (typeof arguments[0] === 'function') {
	      callback = arguments[0];
	    } else if (Array.isArray(arguments[0])) {
	      data = arguments[0];
	    } else {
	      options = arguments[0];
	    }
	  }
	  if (options == null) {
	    options = {};
	  }
	  stringifier = new Stringifier(options);
	  if (data) {
	    process.nextTick(function() {
	      var d, j, len;
	      for (j = 0, len = data.length; j < len; j++) {
	        d = data[j];
	        stringifier.write(d);
	      }
	      return stringifier.end();
	    });
	  }
	  if (callback) {
	    chunks = [];
	    stringifier.on('readable', function() {
	      var chunk, results;
	      results = [];
	      while (chunk = stringifier.read()) {
	        results.push(chunks.push(chunk));
	      }
	      return results;
	    });
	    stringifier.on('error', function(err) {
	      return callback(err);
	    });
	    stringifier.on('end', function() {
	      return callback(null, chunks.join(''));
	    });
	  }
	  return stringifier;
	};

	Stringifier = function(opts) {
	  var base, base1, base10, base11, base12, base2, base3, base4, base5, base6, base7, base8, base9, k, options, v;
	  if (opts == null) {
	    opts = {};
	  }
	  options = {};
	  for (k in opts) {
	    v = opts[k];
	    options[k] = v;
	  }
	  stream.Transform.call(this, options);
	  this.options = options;
	  if ((base = this.options).delimiter == null) {
	    base.delimiter = ',';
	  }
	  if ((base1 = this.options).quote == null) {
	    base1.quote = '"';
	  }
	  if ((base2 = this.options).quoted == null) {
	    base2.quoted = false;
	  }
	  if ((base3 = this.options).quotedString == null) {
	    base3.quotedString = false;
	  }
	  if ((base4 = this.options).eof == null) {
	    base4.eof = true;
	  }
	  if ((base5 = this.options).escape == null) {
	    base5.escape = '"';
	  }
	  if ((base6 = this.options).columns == null) {
	    base6.columns = null;
	  }
	  if ((base7 = this.options).header == null) {
	    base7.header = false;
	  }
	  if ((base8 = this.options).formatters == null) {
	    base8.formatters = {};
	  }
	  if ((base9 = this.options.formatters).date == null) {
	    base9.date = function(value) {
	      return '' + value.getTime();
	    };
	  }
	  if ((base10 = this.options.formatters).bool == null) {
	    base10.bool = function(value) {
	      if (value) {
	        return '1';
	      } else {
	        return '';
	      }
	    };
	  }
	  if ((base11 = this.options.formatters).object == null) {
	    base11.object = function(value) {
	      return JSON.stringify(value);
	    };
	  }
	  if ((base12 = this.options).rowDelimiter == null) {
	    base12.rowDelimiter = '\n';
	  }
	  if (this.countWriten == null) {
	    this.countWriten = 0;
	  }
	  switch (this.options.rowDelimiter) {
	    case 'auto':
	      this.options.rowDelimiter = null;
	      break;
	    case 'unix':
	      this.options.rowDelimiter = "\n";
	      break;
	    case 'mac':
	      this.options.rowDelimiter = "\r";
	      break;
	    case 'windows':
	      this.options.rowDelimiter = "\r\n";
	      break;
	    case 'unicode':
	      this.options.rowDelimiter = "\u2028";
	  }
	  return this;
	};

	util.inherits(Stringifier, stream.Transform);

	module.exports.Stringifier = Stringifier;

	Stringifier.prototype.headers = function() {
	  var k, label, labels;
	  if (!this.options.header) {
	    return;
	  }
	  if (!this.options.columns) {
	    return;
	  }
	  labels = this.options.columns;
	  if (typeof labels === 'object') {
	    labels = (function() {
	      var results;
	      results = [];
	      for (k in labels) {
	        label = labels[k];
	        results.push(label);
	      }
	      return results;
	    })();
	  }
	  if (this.options.eof) {
	    labels = this.stringify(labels) + this.options.rowDelimiter;
	  } else {
	    labels = this.stringify(labels);
	  }
	  return stream.Transform.prototype.write.call(this, labels);
	};

	Stringifier.prototype.end = function(chunk, encoding, callback) {
	  if (this.countWriten === 0) {
	    this.headers();
	  }
	  return stream.Transform.prototype.end.apply(this, arguments);
	};

	Stringifier.prototype.write = function(chunk, encoding, callback) {
	  var base, e, error, preserve;
	  if (chunk == null) {
	    return;
	  }
	  preserve = typeof chunk !== 'object';
	  if (!preserve) {
	    if (this.countWriten === 0 && !Array.isArray(chunk)) {
	      if ((base = this.options).columns == null) {
	        base.columns = Object.keys(chunk);
	      }
	    }
	    try {
	      this.emit('record', chunk, this.countWriten);
	    } catch (error) {
	      e = error;
	      return this.emit('error', e);
	    }
	    if (this.options.eof) {
	      chunk = this.stringify(chunk) + this.options.rowDelimiter;
	    } else {
	      chunk = this.stringify(chunk);
	      if (this.options.header || this.countWriten) {
	        chunk = this.options.rowDelimiter + chunk;
	      }
	    }
	  }
	  if (typeof chunk === 'number') {
	    chunk = "" + chunk;
	  }
	  if (this.countWriten === 0) {
	    this.headers();
	  }
	  if (!preserve) {
	    this.countWriten++;
	  }
	  return stream.Transform.prototype.write.call(this, chunk, encoding, callback);
	};

	Stringifier.prototype._transform = function(chunk, encoding, callback) {
	  this.push(chunk);
	  return callback();
	};

	Stringifier.prototype.stringify = function(line) {
	  var _line, column, columns, containsEscape, containsLinebreak, containsQuote, containsdelimiter, delimiter, escape, field, i, j, l, newLine, quote, ref, ref1, regexp, shouldQuote, value;
	  if (typeof line !== 'object') {
	    return line;
	  }
	  columns = this.options.columns;
	  if (typeof columns === 'object' && columns !== null && !Array.isArray(columns)) {
	    columns = Object.keys(columns);
	  }
	  delimiter = this.options.delimiter;
	  quote = this.options.quote;
	  escape = this.options.escape;
	  if (!Array.isArray(line)) {
	    _line = [];
	    if (columns) {
	      for (i = j = 0, ref = columns.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	        column = columns[i];
	        value = get(line, column);
	        _line[i] = typeof value === 'undefined' || value === null ? '' : value;
	      }
	    } else {
	      for (column in line) {
	        _line.push(line[column]);
	      }
	    }
	    line = _line;
	    _line = null;
	  } else if (columns) {
	    line.splice(columns.length);
	  }
	  if (Array.isArray(line)) {
	    newLine = '';
	    for (i = l = 0, ref1 = line.length; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
	      field = line[i];
	      if (typeof field === 'string') {

	      } else if (typeof field === 'number') {
	        field = '' + field;
	      } else if (typeof field === 'boolean') {
	        field = this.options.formatters.bool(field);
	      } else if (field instanceof Date) {
	        field = this.options.formatters.date(field);
	      } else if (typeof field === 'object' && field !== null) {
	        field = this.options.formatters.object(field);
	      }
	      if (field) {
	        containsdelimiter = field.indexOf(delimiter) >= 0;
	        containsQuote = field.indexOf(quote) >= 0;
	        containsEscape = field.indexOf(escape) >= 0 && (escape !== quote);
	        containsLinebreak = field.indexOf('\r') >= 0 || field.indexOf('\n') >= 0;
	        shouldQuote = containsQuote || containsdelimiter || containsLinebreak || this.options.quoted || (this.options.quotedString && typeof line[i] === 'string');
	        if (shouldQuote && containsEscape) {
	          regexp = escape === '\\' ? new RegExp(escape + escape, 'g') : new RegExp(escape, 'g');
	          field = field.replace(regexp, escape + escape);
	        }
	        if (containsQuote) {
	          regexp = new RegExp(quote, 'g');
	          field = field.replace(regexp, escape + quote);
	        }
	        if (shouldQuote) {
	          field = quote + field + quote;
	        }
	        newLine += field;
	      } else if (this.options.quotedEmpty || ((this.options.quotedEmpty == null) && line[i] === '' && this.options.quotedString)) {
	        newLine += quote + quote;
	      }
	      if (i !== line.length - 1) {
	        newLine += delimiter;
	      }
	    }
	    line = newLine;
	  }
	  return line;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 64 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Generated by CoffeeScript 1.10.0
	var StringDecoder, stringify;

	StringDecoder = __webpack_require__(33).StringDecoder;

	stringify = __webpack_require__(63);

	module.exports = function(records, options) {
	  var data, decoder, i, len, record, stringifier;
	  if (options == null) {
	    options = {};
	  }
	  data = [];
	  if (records instanceof Buffer) {
	    decoder = new StringDecoder();
	    records = decoder.write(records);
	  }
	  stringifier = new stringify.Stringifier(options);
	  stringifier.push = function(record) {
	    if (record) {
	      return data.push(record.toString());
	    }
	  };
	  for (i = 0, len = records.length; i < len; i++) {
	    record = records[i];
	    stringifier.write(record);
	  }
	  stringifier.end();
	  return data.join('');
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Represents Salesforce SObject
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var _      = __webpack_require__(10),
	    Record = __webpack_require__(67),
	    Query  = __webpack_require__(53),
	    Cache  = __webpack_require__(68),
	    QuickAction = __webpack_require__(69);

	/**
	 * A class for organizing all SObject access
	 *
	 * @constructor
	 */
	var SObject = module.exports = function(conn, type) {
	  this._conn = conn;
	  this.type = type;
	  var cacheOptions = { key: "describe." + this.type };
	  this.describe$ = conn.cache.makeCacheable(this.describe, this, cacheOptions);
	  this.describe = conn.cache.makeResponseCacheable(this.describe, this, cacheOptions);

	  cacheOptions = { key: "layouts." + this.type };
	  this.layouts$ = conn.cache.makeCacheable(this.layouts, this, cacheOptions);
	  this.layouts = conn.cache.makeResponseCacheable(this.layouts, this, cacheOptions);

	  cacheOptions = { key: "compactLayouts." + this.type };
	  this.compactLayouts$ = conn.cache.makeCacheable(this.compactLayouts, this, cacheOptions);
	  this.compactLayouts = conn.cache.makeResponseCacheable(this.compactLayouts, this, cacheOptions);

	  cacheOptions = { key: "approvalLayouts." + this.type };
	  this.approvalLayouts$ = conn.cache.makeCacheable(this.approvalLayouts, this, cacheOptions);
	  this.approvalLayouts = conn.cache.makeResponseCacheable(this.approvalLayouts, this, cacheOptions);
	};

	/**
	 * Synonym of SObject#create()
	 *
	 * @method SObject#insert
	 * @param {Record|Array.<Record>} records - A record or array of records to create
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Create records
	 *
	 * @method SObject#create
	 * @param {Record|Array.<Record>} records - A record or array of records to create
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	SObject.prototype.insert =
	SObject.prototype.create = function(records, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.create(this.type, records, options, callback);
	};

	/**
	 * Retrieve specified records
	 *
	 * @param {String|Array.<String>} ids - A record ID or array of record IDs
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<Record|Array.<Record>>} [callback] - Callback function
	 * @returns {Promise.<Record|Array.<Record>>}
	 */
	SObject.prototype.retrieve = function(ids, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.retrieve(this.type, ids, options, callback);
	};

	/**
	 * Update records
	 *
	 * @param {Record|Array.<Record>} records - A record or array of records to update
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	SObject.prototype.update = function(records, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.update(this.type, records, options, callback);
	};

	/**
	 * Upsert records
	 *
	 * @param {Record|Array.<Record>} records - Record or array of records to upsert
	 * @param {String} extIdField - External ID field name
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	SObject.prototype.upsert = function(records, extIdField, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.upsert(this.type, records, extIdField, options, callback);
	};

	/**
	 * Synonym of SObject#destroy()
	 *
	 * @method SObject#delete
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Synonym of SObject#destroy()
	 *
	 * @method SObject#del
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	/**
	 * Delete records
	 *
	 * @method SObject#destroy
	 * @param {String|Array.<String>} ids - A ID or array of IDs to delete
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult|Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<RecordResult|Array.<RecordResult>>}
	 */
	SObject.prototype["delete"] =
	SObject.prototype.del =
	SObject.prototype.destroy = function(ids, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.destroy(this.type, ids, options, callback);
	};

	/**
	 * Describe SObject metadata
	 *
	 * @param {Callback.<DescribeSObjectResult>} [callback] - Callback function
	 * @returns {Promise.<DescribeSObjectResult>}
	 */
	SObject.prototype.describe = function(callback) {
	  return this._conn.describe(this.type, callback);
	};

	/**
	 * Get record representation instance by given id
	 *
	 * @param {String} id - A record ID
	 * @returns {RecordReference}
	 */
	SObject.prototype.record = function(id) {
	  return new Record(this._conn, this.type, id);
	};

	/**
	 * Find and fetch records which matches given conditions
	 *
	 * @param {Object|String} [conditions] - Conditions in JSON object (MongoDB-like), or raw SOQL WHERE clause string.
	 * @param {Object|Array.<String>|String} [fields] - Fields to fetch. Format can be in JSON object (MongoDB-like), array of field names, or comma-separated field names.
	 * @param {Object} [options] - Query options.
	 * @param {Number} [options.limit] - Maximum number of records the query will return.
	 * @param {Number} [options.offset] - Offset number where begins returning results.
	 * @param {Number} [options.skip] - Synonym of options.offset.
	 * @param {Callback.<Array.<Record>>} [callback] - Callback function
	 * @returns {Query.<Array.<Record>>}
	 */
	SObject.prototype.find = function(conditions, fields, options, callback) {
	  if (typeof conditions === 'function') {
	    callback = conditions;
	    conditions = {};
	    fields = null;
	    options = null;
	  } else if (typeof fields === 'function') {
	    callback = fields;
	    fields = null;
	    options = null;
	  } else if (typeof options === 'function') {
	    callback = options;
	    options = null;
	  }
	  options = options || {};
	  var config = {
	    fields: fields,
	    includes: options.includes,
	    table: this.type,
	    conditions: conditions,
	    limit: options.limit,
	    offset: options.offset || options.skip
	  };
	  var query = new Query(this._conn, config, options);
	  query.setResponseTarget(Query.ResponseTargets.Records);
	  if (callback) { query.run(callback); }
	  return query;
	};

	/**
	 * Fetch one record which matches given conditions
	 *
	 * @param {Object|String} [conditions] - Conditions in JSON object (MongoDB-like), or raw SOQL WHERE clause string.
	 * @param {Object|Array.<String>|String} [fields] - Fields to fetch. Format can be in JSON object (MongoDB-like), array of field names, or comma-separated field names.
	 * @param {Object} [options] - Query options.
	 * @param {Number} [options.limit] - Maximum number of records the query will return.
	 * @param {Number} [options.offset] - Offset number where begins returning results.
	 * @param {Number} [options.skip] - Synonym of options.offset.
	 * @param {Callback.<Record>} [callback] - Callback function
	 * @returns {Query.<Record>}
	 */
	SObject.prototype.findOne = function(conditions, fields, options, callback) {
	  if (typeof conditions === 'function') {
	    callback = conditions;
	    conditions = {};
	    fields = null;
	    options = null;
	  } else if (typeof fields === 'function') {
	    callback = fields;
	    fields = null;
	    options = null;
	  } else if (typeof options === 'function') {
	    callback = options;
	    options = null;
	  }
	  options = _.extend(options || {}, { limit: 1 });
	  var query = this.find(conditions, fields, options);
	  query.setResponseTarget(Query.ResponseTargets.SingleRecord);
	  if (callback) { query.run(callback); }
	  return query;
	};

	/**
	 * Find and fetch records only by specifying fields to fetch.
	 *
	 * @param {Object|Array.<String>|String} [fields] - Fields to fetch. Format can be in JSON object (MongoDB-like), array of field names, or comma-separated field names.
	 * @param {Callback.<Array.<Record>>} [callback] - Callback function
	 * @returns {Query.<Array.<Record>>}
	 */
	SObject.prototype.select = function(fields, callback) {
	  return this.find(null, fields, null, callback);
	};

	/**
	 * Count num of records which matches given conditions
	 *
	 * @param {Object|String} [conditions] - Conditions in JSON object (MongoDB-like), or raw SOQL WHERE clause string.
	 * @param {Callback.<Number>} [callback] - Callback function
	 * @returns {Query.<Number>}
	 */
	SObject.prototype.count = function(conditions, callback) {
	  if (typeof conditions === 'function') {
	    callback = conditions;
	    conditions = {};
	  }
	  var query = this.find(conditions, { "count()" : true });
	  query.setResponseTarget("Count");
	  if (callback) { query.run(callback); }
	  return query;
	};


	/**
	 * Call Bulk#load() to execute bulkload, returning batch object
	 *
	 * @param {String} operation - Bulk load operation ('insert', 'update', 'upsert', 'delete', or 'hardDelete')
	 * @param {Object} [options] - Options for bulk loading operation
	 * @param {String} [options.extIdField] - External ID field name (used when upsert operation).
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulkload. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.bulkload = function(operation, options, input, callback) {
	  return this._conn.bulk.load(this.type, operation, options, input, callback);
	};

	/**
	 * Synonym of SObject#createBulk()
	 *
	 * @method SObject#insertBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk insert. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	/**
	 * Bulkly insert input data using bulk API
	 *
	 * @method SObject#createBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk insert. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.insertBulk =
	SObject.prototype.createBulk = function(input, callback) {
	  return this.bulkload("insert", input, callback);
	};

	/**
	 * Bulkly update records by input data using bulk API
	 *
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk update Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.updateBulk = function(input, callback) {
	  return this.bulkload("update", input, callback);
	};

	/**
	 * Bulkly upsert records by input data using bulk API
	 *
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk upsert. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {String} [options.extIdField] - External ID field name
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.upsertBulk = function(input, extIdField, callback) {
	  return this.bulkload("upsert", { extIdField: extIdField }, input, callback);
	};

	/**
	 * Synonym of SObject#destroyBulk()
	 *
	 * @method SObject#deleteBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk delete. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	/**
	 * Bulkly delete records specified by input data using bulk API
	 *
	 * @method SObject#destroyBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk delete. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.deleteBulk =
	SObject.prototype.destroyBulk = function(input, callback) {
	  return this.bulkload("delete", input, callback);
	};

	/**
	 * Synonym of SObject#destroyHardBulk()
	 *
	 * @method SObject#deleteHardBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk delete. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	/**
	 * Bulkly hard delete records specified in input data using bulk API
	 *
	 * @method SObject#destroyHardBulk
	 * @param {Array.<Record>|stream.Stream|String} [input] - Input source for bulk delete. Accepts array of records, CSv string, and CSV data input stream.
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Bulk~Batch}
	 */
	SObject.prototype.deleteHardBulk =
	SObject.prototype.destroyHardBulk = function(input, callback) {
	  return this.bulkload("hardDelete", input, callback);
	};

	/**
	 * Retrieve recently accessed records
	 *
	 * @param {Callback.<Array.<RecordResult>>} [callback] - Callback function
	 * @returns {Promise.<Array.<RecordResult>>}
	 */
	SObject.prototype.recent = function (callback) {
	  return this._conn.recent(this.type, callback);
	};

	/**
	 * Retrieve the updated records
	 *
	 * @param {String|Date} start - start date or string representing the start of the interval
	 * @param {String|Date} end - start date or string representing the end of the interval, must be > start
	 * @param {Callback.<UpdatedRecordsInfo>} [callback] - Callback function
	 * @returns {Promise.<UpdatedRecordsInfo>}
	 */
	SObject.prototype.updated = function (start, end, callback) {
	  return this._conn.updated(this.type, start, end, callback);
	};

	/**
	 * Retrieve the deleted records
	 *
	 * @param {String|Date} start - start date or string representing the start of the interval
	 * @param {String|Date} end - start date or string representing the end of the interval, must be > start
	 * @param {Callback.<DeletedRecordsInfo>} [callback] - Callback function
	 * @returns {Promise.<DeletedRecordsInfo>}
	 */
	SObject.prototype.deleted = function (start, end, callback) {
	  return this._conn.deleted(this.type, start, end, callback);
	};

	/**
	 * @typedef {Object} LayoutInfo
	 * @prop {Array.<Object>} layouts - Array of layouts
	 * @prop {Array.<Object>} recordTypeMappings - Array of record type mappings
	 */
	/**
	 * Describe layout information for SObject
	 *
	 * @param {String} [layoutName] - Name of named layout. (e.g. UserAlt in User SObject)
	 * @param {Callback.<LayoutInfo>} [callback] - Callback function
	 * @returns {Promise.<LayoutInfo>}
	 */
	SObject.prototype.layouts = function(layoutName, callback) {
	  if (typeof layoutName === 'function') {
	    callback = layoutName;
	    layoutName = null;
	  }
	  var url = "/sobjects/" + this.type + "/describe/" + (layoutName ? "namedLayouts/"+layoutName : "layouts");
	  return this._conn.request(url, callback);
	};

	/**
	 * @typedef {Object} CompactLayoutInfo
	 * @prop {Array.<Object>} compactLayouts - Array of compact layouts
	 * @prop {String} defaultCompactLayoutId - ID of default compact layout
	 * @prop {Array.<Object>} recordTypeCompactLayoutMappings - Array of record type mappings
	 */
	/**
	 * Describe compact layout information defined for SObject
	 *
	 * @param {Callback.<CompactLayoutInfo>} [callback] - Callback function
	 * @returns {Promise.<CompactLayoutInfo>}
	 */
	SObject.prototype.compactLayouts = function(callback) {
	  var url = "/sobjects/" + this.type + "/describe/compactLayouts";
	  return this._conn.request(url, callback);
	};


	/**
	 * @typedef {Object} ApprovalLayoutInfo
	 * @prop {Array.<Object>} approvalLayouts - Array of approval layouts
	 */
	/**
	 * Describe compact layout information defined for SObject
	 *
	 * @param {Callback.<ApprovalLayoutInfo>} [callback] - Callback function
	 * @returns {Promise.<ApprovalLayoutInfo>}
	 */
	SObject.prototype.approvalLayouts = function(callback) {
	  var url = "/sobjects/" + this.type + "/describe/approvalLayouts";
	  return this._conn.request(url, callback);
	};

	/**
	 * Returns the list of list views for the SObject
	 *
	 * @param {Callback.<ListViewsInfo>} [callback] - Callback function
	 * @returns {Promise.<ListViewsInfo>}
	 */
	SObject.prototype.listviews = function(callback) {
	  var url = this._conn._baseUrl() + '/sobjects/' + this.type + '/listviews';
	  return this._conn.request(url, callback);
	};

	/**
	 * Returns the list view info in specifed view id
	 *
	 * @param {String} id - List view ID
	 * @returns {ListView}
	 */
	SObject.prototype.listview = function(id) {
	  return new ListView(this._conn, this.type, id);
	};

	/**
	 * Returns all registered quick actions for the SObject
	 *
	 * @param {Callback.<Array.<QuickAction~QuickActionInfo>>} [callback] - Callback function
	 * @returns {Promise.<Array.<QuickAction~QuickActionInfo>>}
	 */
	SObject.prototype.quickActions = function(callback) {
	  return this._conn.request("/sobjects/" + this.type + "/quickActions").thenCall(callback);
	};

	/**
	 * Get reference for specified quick aciton in the SObject
	 *
	 * @param {String} actionName - Name of the quick action
	 * @returns {QuickAction}
	 */
	SObject.prototype.quickAction = function(actionName) {
	  return new QuickAction(this._conn, "/sobjects/" + this.type + "/quickActions/" + actionName);
	};


	/**
	 * A class for organizing list view information
	 *
	 * @protected
	 * @class ListView
	 * @param {Connection} conn - Connection instance
	 * @param {SObject} type - SObject type
	 * @param {String} id - List view ID
	 */
	var ListView = function(conn, type, id) {
	  this._conn = conn;
	  this.type = type;
	  this.id = id;
	};

	/**
	 * Executes query for the list view and returns the resulting data and presentation information.
	 *
	 * @param {Callback.<ListViewResultInfo>} [callback] - Callback function
	 * @returns {Promise.<ListViewResultInfo>}
	 */
	ListView.prototype.results = function(callback) {
	  var url =  this._conn._baseUrl() + '/sobjects/' + this.type + '/listviews/' + this.id + '/results';
	  return this._conn.request(url, callback);
	};


	/**
	 * Returns detailed information about a list view
	 *
	 * @param {Object} [options] - Identity call options
	 * @param {Object} [options.headers] - Additional HTTP request headers sent in identity request
	 * @param {Callback.<ListViewDescribeInfo>} [callback] - Callback function
	 * @returns {Promise.<ListViewDescribeInfo>}
	 */
	ListView.prototype.describe = function(options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var url =  this._conn._baseUrl() + '/sobjects/' + this.type + '/listviews/' + this.id + '/describe';
	  return this._conn.request({ method: 'GET', url: url, headers: options.headers }, callback);
	};

	/**
	 * Explain plan for executing list view
	 *
	 * @param {Callback.<ExplainInfo>} [callback] - Callback function
	 * @returns {Promise.<ExplainInfo>}
	 */
	ListView.prototype.explain = function(callback) {
	  var url = "/query/?explain=" + this.id;
	  return this._conn.request(url, callback);
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Represents Salesforce record information
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var _ = __webpack_require__(10);

	/**
	 * A simple hash object including record field information
	 *
	 * @typedef {Object} Record
	 */

	/**
	 * Remote reference to record information
	 *
	 * @protected
	 * @class
	 * @constructor
	 * @param {Connection} conn - Connection object
	 * @param {String} type - SObject type
	 * @param {String} id - Record ID
	 */
	var RecordReference = module.exports = function(conn, type, id) {
	  this._conn = conn;
	  this.type = type;
	  this.id = id;
	};

	/**
	 * Retrieve record field information
	 *
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<Record>} [callback] - Callback function
	 * @returns {Promise.<Record>}
	 */
	RecordReference.prototype.retrieve = function(options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.retrieve(this.type, this.id, options, callback);
	};

	/**
	 * Update record field information
	 *
	 * @param {Record} record - A Record which includes fields to update
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult>} [callback] - Callback function
	 * @returns {Promise.<RecordResult>}
	 */
	RecordReference.prototype.update = function(record, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  record = _.clone(record);
	  record.Id = this.id;
	  return this._conn.update(this.type, record, options, callback);
	};

	/**
	 * Synonym of Record#destroy()
	 *
	 * @method RecordReference#delete
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult>} [callback] - Callback function
	 * @returns {Promise.<RecordResult>}
	 */
	RecordReference.prototype["delete"] =
	/**
	 * Synonym of Record#destroy()
	 *
	 * @method RecordReference#del
	 * @param {Callback.<RecordResult>} [callback] - Callback function
	 * @returns {Promise.<RecordResult>}
	 */
	RecordReference.prototype.del =
	/**
	 * Delete record field
	 *
	 * @method RecordReference#destroy
	 * @param {Object} [options] - Options for rest api.
	 * @param {Callback.<RecordResult>} [callback] - Callback function
	 * @returns {Promise.<RecordResult>}
	 */
	RecordReference.prototype.destroy = function(options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }
	  return this._conn.destroy(this.type, this.id, options, callback);
	};

	/**
	 * Get blob field as stream
	 *
	 * @param {String} fieldName - Blob field name
	 * @returns {stream.Stream}
	 */
	RecordReference.prototype.blob = function(fieldName) {
	  var url = [ this._conn._baseUrl(), 'sobjects', this.type, this.id, fieldName ].join('/');
	  return this._conn.request(url).stream();
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Manages asynchronous method response cache
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var events = __webpack_require__(2),
	    inherits = __webpack_require__(9),
	    _      = __webpack_require__(10);

	/**
	 * Class for managing cache entry
	 *
	 * @private
	 * @class
	 * @constructor
	 * @template T
	 */
	var CacheEntry = function() {
	  this.fetching = false;
	};

	inherits(CacheEntry, events.EventEmitter);

	/**
	 * Get value in the cache entry
	 *
	 * @param {Callback.<T>} [callback] - Callback function callbacked the cache entry updated
	 * @returns {T|undefined}
	 */
	CacheEntry.prototype.get = function(callback) {
	  if (!callback) {
	    return this._value;
	  } else {
	    this.once('value', callback);
	    if (!_.isUndefined(this._value)) {
	      this.emit('value', this._value);
	    }
	  }
	};

	/**
	 * Set value in the cache entry
	 *
	 * @param {T} [value] - A value for caching
	 */
	CacheEntry.prototype.set = function(value) {
	  this._value = value;
	  this.emit('value', this._value);
	};

	/**
	 * Clear cached value
	 */
	CacheEntry.prototype.clear = function() {
	  this.fetching = false;
	  delete this._value;
	};


	/**
	 * Caching manager for async methods
	 *
	 * @class
	 * @constructor
	 */
	var Cache = function() {
	  this._entries = {};
	};

	/**
	 * retrive cache entry, or create if not exists.
	 *
	 * @param {String} [key] - Key of cache entry
	 * @returns {CacheEntry}
	 */
	Cache.prototype.get = function(key) {
	  if (key && this._entries[key]) {
	    return this._entries[key];
	  } else {
	    var entry = new CacheEntry();
	    this._entries[key] = entry;
	    return entry;
	  }
	};

	/**
	 * clear cache entries prefix matching given key
	 * @param {String} [key] - Key prefix of cache entry to clear
	 */
	Cache.prototype.clear = function(key) {
	  for (var k in this._entries) {
	    if (!key || k.indexOf(key) === 0) {
	      this._entries[k].clear();
	    }
	  }
	};

	/**
	 * create and return cache key from namespace and serialized arguments.
	 * @private
	 */
	function createCacheKey(namespace, args) {
	  args = Array.prototype.slice.apply(args);
	  return namespace + '(' + _.map(args, function(a){ return JSON.stringify(a); }).join(',') + ')';
	}

	/**
	 * Enable caching for async call fn to intercept the response and store it to cache.
	 * The original async calll fn is always invoked.
	 *
	 * @protected
	 * @param {Function} fn - Function to covert cacheable
	 * @param {Object} [scope] - Scope of function call
	 * @param {Object} [options] - Options
	 * @return {Function} - Cached version of function
	 */
	Cache.prototype.makeResponseCacheable = function(fn, scope, options) {
	  var cache = this;
	  options = options || {};
	  return function() {
	    var args = Array.prototype.slice.apply(arguments);
	    var callback = args.pop();
	    if (!_.isFunction(callback)) {
	      args.push(callback);
	      callback = null;
	    }
	    var key = _.isString(options.key) ? options.key :
	              _.isFunction(options.key) ? options.key.apply(scope, args) :
	              createCacheKey(options.namespace, args);
	    var entry = cache.get(key);
	    entry.fetching = true;
	    if (callback) {
	      args.push(function(err, result) {
	        entry.set({ error: err, result: result });
	        callback(err, result);
	      });
	    }
	    var ret, error;
	    try {
	      ret = fn.apply(scope || this, args);
	    } catch(e) {
	      error = e;
	    }
	    if (ret && _.isFunction(ret.then)) { // if the returned value is promise
	      if (!callback) {
	        return ret.then(function(result) {
	          entry.set({ error: undefined, result: result });
	          return result;
	        }, function(err) {
	          entry.set({ error: err, result: undefined });
	          throw err;
	        });
	      } else {
	        return ret;
	      }
	    } else {
	      entry.set({ error: error, result: ret });
	      if (error) { throw error; }
	      return ret;
	    }
	  };
	};

	/**
	 * Enable caching for async call fn to lookup the response cache first, then invoke original if no cached value.
	 *
	 * @protected
	 * @param {Function} fn - Function to covert cacheable
	 * @param {Object} [scope] - Scope of function call
	 * @param {Object} [options] - Options
	 * @return {Function} - Cached version of function
	 */
	Cache.prototype.makeCacheable = function(fn, scope, options) {
	  var cache = this;
	  options = options || {};
	  var $fn = function() {
	    var args = Array.prototype.slice.apply(arguments);
	    var callback = args.pop();
	    if (!_.isFunction(callback)) {
	      args.push(callback);
	    }
	    var key = _.isString(options.key) ? options.key :
	              _.isFunction(options.key) ? options.key.apply(scope, args) :
	              createCacheKey(options.namespace, args);
	    var entry = cache.get(key);
	    if (!_.isFunction(callback)) { // if callback is not given in last arg, return cached result (immediate).
	      var value = entry.get();
	      if (!value) { throw new Error('Function call result is not cached yet.'); }
	      if (value.error) { throw value.error; }
	      return value.result;
	    }
	    entry.get(function(value) {
	      callback(value.error, value.result);
	    });
	    if (!entry.fetching) { // only when no other client is calling function
	      entry.fetching = true;
	      args.push(function(err, result) {
	        entry.set({ error: err, result: result });
	      });
	      fn.apply(scope || this, args);
	    }
	  };
	  $fn.clear = function() {
	    var key = _.isString(options.key) ? options.key :
	              _.isFunction(options.key) ? options.key.apply(scope, arguments) :
	              createCacheKey(options.namespace, arguments);
	    cache.clear(key);
	  };
	  return $fn;
	};


	module.exports = Cache;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * @file Represents Salesforce QuickAction
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';


	/**
	 * A class for quick action
	 *
	 * @protected
	 * @constructor
	 */
	var QuickAction = module.exports = function(conn, path) {
	  this._conn = conn;
	  this._path = path;
	};

	/**
	 * @typedef {Object} QuickAction~QuickActionInfo
	 * @prop {String} type - Type of the action (e.g. Create, Update, Post, LogACall)
	 * @prop {String} name - Name of the action
	 * @prop {String} label - Label of the action
	 * @prop {Object} urls - Endpoint URL information of the action
	 */
	/**
	 * @typedef {QuickAction~QuickActionInfo} QuickAction~QuickActionDescriveInfo
	 * @prop {String} contextSobjectType - Object type used for the action
	 * @prop {String} targetSobjectType - Object type of the action to target
	 * @prop {String} targetParentField - Field name in the target object which refers parent(context) object record ID.
	 * @prop {String} targetRecordTypeId - Record type of the targeted record
	 * @prop {Object} layout - Layout sections that comprise an action
	 */

	/**
	 * Describe the action's information (including layout, etc.)
	 *
	 * @param {Callback.<QuickAction~QuickActionDescriveInfo>} [callback] - Callback function
	 * @returns {Promise.<QuickAction~QuickActionDescriveInfo>}
	 */
	QuickAction.prototype.describe = function(callback) {
	  var url = this._path + "/describe";
	  return this._conn.request(url).thenCall(callback);
	};

	/**
	 * Retrieve default field values in the action (for given record, if specified)
	 *
	 * @param {String} [contextId] - ID of record to get default values specific to the record
	 * @param {Callback.<Record>} [callback] - Callback function
	 * @returns {Promise.<Record>}
	 */
	QuickAction.prototype.defaultValues = function(contextId, callback) {
	  if (typeof contextId === 'function') {
	    callback = contextId;
	    contextId = null;
	  }
	  var url = this._path + "/defaultValues";
	  if (contextId) {
	    url += "/" + contextId;
	  }
	  return this._conn.request(url).thenCall(callback);
	};

	/**
	 * @typedef {Object} QuickAction~QuickActionResult
	 * @param {String} id - Record id of the action result
	 * @param {Array.<String>} feedItemIds - List of IDs for feed item
	 * @param {Boolean} success - True if the action successfully completed
	 * @param {Boolean} created - True if the action yields a new record
	 * @param {String} contextId - Context record ID of the action
	 * @param {Array.<Object>} errors - Errors if the action failed
	 */

	/**
	 * Execute the action for given context Id and record information
	 * 
	 * @param {String} contextId - Context record ID of the action
	 * @param {Record} record - Input record information for the action
	 * @param {Callback.<QuickAction~QuickActionResult>} [callback] - Callback function
	 * @returns {Promise.<QuickAction~QuickActionResult>}
	 */
	QuickAction.prototype.execute = function(contextId, record, callback) {
	  var body = {
	    contextId: contextId,
	    record: record
	  };
	  return this._conn.requestPost(this._path, body).thenCall(callback);
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(9),
	    events = __webpack_require__(2),
	    _ = __webpack_require__(10),
	    Promise = __webpack_require__(12);

	/**
	 * HTTP based API class with authorization hook
	 *
	 * @constructor
	 * @extends events.EventEmitter
	 * @param {Connection} conn - Connection object
	 * @param {Object} [options] - Http API Options
	 * @param {String} [options.responseType] - Overriding content mime-type in response
	 * @param {Transport} [options.transport] - Transport for http api
	 * @param {Object} [options.noContentResponse] - Alternative response when no content returned in response (= HTTP 204)
	 */
	var HttpApi = function(conn, options) {
	  options = options || {};
	  this._conn = conn;
	  this.on('resume', function(err) { conn.emit('resume', err); });
	  this._responseType = options.responseType;
	  this._transport = options.transport || conn._transport;
	  this._noContentResponse = options.noContentResponse;
	};

	inherits(HttpApi, events.EventEmitter);

	/**
	 * Callout to API endpoint using http
	 *
	 * @param {Object} request - Http Request object
	 * @param {String} request.url - Endpoint URL to request
	 * @param {String} request.method - Http method for request
	 * @param {Object} [request.headers] - Http request headers in hash object
	 * @param {Callback.<Object>} callback - Callback function
	 * @returns {Promise.<Object>} -
	 */
	HttpApi.prototype.request = function(request, callback) {
	  var self = this;
	  var conn = this._conn;
	  var logger = conn._logger;
	  var refreshDelegate = this.getRefreshDelegate();
	  // remember previous instance url in case it changes after a refresh
	  var lastInstanceUrl = conn.instanceUrl;

	  var deferred = Promise.defer();

	  var onResume = function(err) {
	    if (err) {
	      deferred.reject(err);
	      return;
	    }
	    // check to see if the token refresh has changed the instance url
	    if(lastInstanceUrl !== conn.instanceUrl){
	      // if the instance url has changed
	      // then replace the current request urls instance url fragment
	      // with the updated instance url
	      request.url = request.url.replace(lastInstanceUrl,conn.instanceUrl);
	    }

	    self.request(request).then(function(response) {
	      deferred.resolve(response);
	    }, function(err) {
	      deferred.reject(err);
	    });
	  };

	  if (refreshDelegate && refreshDelegate._refreshing) {
	    refreshDelegate.once('resume', onResume);
	    return deferred.promise.thenCall(callback);
	  }

	  // hook before sending
	  self.beforeSend(request);

	  self.emit('request', request);
	  logger.debug("<request> method=" + request.method + ", url=" + request.url);
	  var requestTime = Date.now();

	  return this._transport.httpRequest(request).then(function(response) {
	    var responseTime = Date.now();
	    logger.debug("elappsed time : " + (responseTime - requestTime) + "msec");
	    logger.debug("<response> status=" + response.statusCode + ", url=" + request.url);

	    self.emit('response', response);
	    // Refresh token if session has been expired and requires authentication
	    // when session refresh delegate is available
	    if (self.isSessionExpired(response) && refreshDelegate) {
	      refreshDelegate.refresh(requestTime, onResume);
	      return deferred.promise;
	    }
	    if (self.isErrorResponse(response)) {
	      var err = self.getError(response);
	      throw err;
	    }
	    return self.getResponseBody(response);
	  }, function(err) {
	    var responseTime = Date.now();
	    logger.debug("elappsed time : " + (responseTime - requestTime) + "msec");
	    logger.error(err);
	    throw err;
	  })
	  .thenCall(callback);
	};

	/**
	 * @protected
	 */
	HttpApi.prototype.getRefreshDelegate = function() {
	  return this._conn._refreshDelegate;
	};

	/**
	 *
	 * @protected
	 */
	HttpApi.prototype.beforeSend = function(request) {
	  request.headers = request.headers || {};
	  if (this._conn.accessToken) {
	    request.headers.Authorization = "Bearer " + this._conn.accessToken;
	  }
	  if (this._conn.callOptions) {
	    var callOptions = [];
	    for (var name in this._conn.callOptions) {
	      callOptions.push(name + "=" + this._conn.callOptions[name]);
	    }
	    request.headers["Sforce-Call-Options"] = callOptions.join(', ');
	  }
	};

	/**
	 * Detect response content mime-type
	 * @protected
	 */
	HttpApi.prototype.getResponseContentType = function(response) {
	  return this._responseType || response.headers && response.headers["content-type"];
	};

	/**
	 *
	 */
	HttpApi.prototype.parseResponseBody = function(response) {
	  var contentType = this.getResponseContentType(response);
	  var parseBody = /^(text|application)\/xml(;|$)/.test(contentType) ? parseXML :
	         /^application\/json(;|$)/.test(contentType) ? parseJSON :
	         /^text\/csv(;|$)/.test(contentType) ? parseCSV :
	         parseText;
	  try {
	    return parseBody(response.body);
	  } catch(e) {
	    return response.body;
	  }
	};

	/**
	 * Get response body
	 * @protected
	 */
	HttpApi.prototype.getResponseBody = function(response) {
	  if (response.statusCode === 204) { // No Content
	    return this._noContentResponse;
	  }
	  var body = this.parseResponseBody(response);
	  var err;
	  if (this.hasErrorInResponseBody(body)) {
	    err = this.getError(response, body);
	    throw err;
	  }
	  if (response.statusCode === 300) { // Multiple Choices
	    err = new Error('Multiple records found');
	    err.name = "MULTIPLE_CHOICES";
	    err.content = body;
	    throw err;
	  }
	  return body;
	};

	/** @private */
	function parseJSON(str) {
	  return JSON.parse(str);
	}

	/** @private */
	function parseXML(str) {
	  var ret = {};
	  __webpack_require__(71).parseString(str, { explicitArray: false }, function(err, result) {
	    ret = { error: err, result : result };
	  });
	  if (ret.error) { throw ret.error; }
	  return ret.result;
	}

	/** @private */
	function parseCSV(str) {
	  return __webpack_require__(57).parseCSV(str);
	}

	/** @private */
	function parseText(str) { return str; }


	/**
	 * Detect session expiry
	 * @protected
	 */
	HttpApi.prototype.isSessionExpired = function(response) {
	  return response.statusCode === 401;
	};

	/**
	 * Detect error response
	 * @protected
	 */
	HttpApi.prototype.isErrorResponse = function(response) {
	  return response.statusCode >= 400;
	};

	/**
	 * Detect error in response body
	 * @protected
	 */
	HttpApi.prototype.hasErrorInResponseBody = function(body) {
	  return false;
	};

	/**
	 * Parsing error message in response
	 * @protected
	 */
	HttpApi.prototype.parseError = function(body) {
	  var errors = body;
	  return _.isArray(errors) ? errors[0] : errors;
	};

	/**
	 * Get error message in response
	 * @protected
	 */
	HttpApi.prototype.getError = function(response, body) {
	  var error;
	  try {
	    error = this.parseError(body || this.parseResponseBody(response));
	  } catch(e) {}
	  error = _.isObject(error) && _.isString(error.message) ? error : {
	    errorCode: 'ERROR_HTTP_' + response.statusCode,
	    message : response.body
	  };
	  var err = new Error(error.message);
	  err.name = error.errorCode;
	  for (var key in error) { err[key] = error[key]; }
	  return err;
	};

	/*-------------------------------------------------------------------------*/

	/**
	 * @protected
	 */
	var SessionRefreshDelegate = function(conn, refreshFn) {
	  this._conn = conn;
	  this._refreshFn = refreshFn;
	  this._refreshing = false;
	};

	inherits(SessionRefreshDelegate, events.EventEmitter);

	/**
	 * Refresh access token
	 * @private
	 */
	SessionRefreshDelegate.prototype.refresh = function(since, callback) {
	  // Callback immediately When refreshed after designated time
	  if (this._lastRefreshedAt > since) { return callback(); }
	  var self = this;
	  var conn = this._conn;
	  var logger = conn._logger;
	  self.once('resume', callback);
	  if (self._refreshing) { return; }
	  logger.debug("<refresh token>");
	  self._refreshing = true;
	  return self._refreshFn(conn, function(err, accessToken, res) {
	    if (!err) {
	      logger.debug("Connection refresh completed. Refreshed access token = " + accessToken);
	      conn.accessToken = accessToken;
	      conn.emit("refresh", accessToken, res);
	    }
	    self._lastRefreshedAt = Date.now();
	    self._refreshing = false;
	    self.emit('resume', err);
	  });
	};


	/**
	 *
	 */
	HttpApi.SessionRefreshDelegate = SessionRefreshDelegate;
	module.exports = HttpApi;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  var bom, builder, escapeCDATA, events, isEmpty, processName, processors, requiresCDATA, sax, setImmediate, wrapCDATA,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  sax = __webpack_require__(72);

	  events = __webpack_require__(2);

	  builder = __webpack_require__(73);

	  bom = __webpack_require__(224);

	  processors = __webpack_require__(225);

	  setImmediate = __webpack_require__(47).setImmediate;

	  isEmpty = function(thing) {
	    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
	  };

	  processName = function(processors, processedName) {
	    var i, len, process;
	    for (i = 0, len = processors.length; i < len; i++) {
	      process = processors[i];
	      processedName = process(processedName);
	    }
	    return processedName;
	  };

	  requiresCDATA = function(entry) {
	    return entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0;
	  };

	  wrapCDATA = function(entry) {
	    return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
	  };

	  escapeCDATA = function(entry) {
	    return entry.replace(']]>', ']]]]><![CDATA[>');
	  };

	  exports.processors = processors;

	  exports.defaults = {
	    "0.1": {
	      explicitCharkey: false,
	      trim: true,
	      normalize: true,
	      normalizeTags: false,
	      attrkey: "@",
	      charkey: "#",
	      explicitArray: false,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: false,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      childkey: '@@',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      emptyTag: ''
	    },
	    "0.2": {
	      explicitCharkey: false,
	      trim: false,
	      normalize: false,
	      normalizeTags: false,
	      attrkey: "$",
	      charkey: "_",
	      explicitArray: true,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: true,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      preserveChildrenOrder: false,
	      childkey: '$$',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      rootName: 'root',
	      xmldec: {
	        'version': '1.0',
	        'encoding': 'UTF-8',
	        'standalone': true
	      },
	      doctype: null,
	      renderOpts: {
	        'pretty': true,
	        'indent': '  ',
	        'newline': '\n'
	      },
	      headless: false,
	      chunkSize: 10000,
	      emptyTag: '',
	      cdata: false
	    }
	  };

	  exports.ValidationError = (function(superClass) {
	    extend(ValidationError, superClass);

	    function ValidationError(message) {
	      this.message = message;
	    }

	    return ValidationError;

	  })(Error);

	  exports.Builder = (function() {
	    function Builder(opts) {
	      var key, ref, value;
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	    }

	    Builder.prototype.buildObject = function(rootObj) {
	      var attrkey, charkey, render, rootElement, rootName;
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      if ((Object.keys(rootObj).length === 1) && (this.options.rootName === exports.defaults['0.2'].rootName)) {
	        rootName = Object.keys(rootObj)[0];
	        rootObj = rootObj[rootName];
	      } else {
	        rootName = this.options.rootName;
	      }
	      render = (function(_this) {
	        return function(element, obj) {
	          var attr, child, entry, index, key, value;
	          if (typeof obj !== 'object') {
	            if (_this.options.cdata && requiresCDATA(obj)) {
	              element.raw(wrapCDATA(obj));
	            } else {
	              element.txt(obj);
	            }
	          } else {
	            for (key in obj) {
	              if (!hasProp.call(obj, key)) continue;
	              child = obj[key];
	              if (key === attrkey) {
	                if (typeof child === "object") {
	                  for (attr in child) {
	                    value = child[attr];
	                    element = element.att(attr, value);
	                  }
	                }
	              } else if (key === charkey) {
	                if (_this.options.cdata && requiresCDATA(child)) {
	                  element = element.raw(wrapCDATA(child));
	                } else {
	                  element = element.txt(child);
	                }
	              } else if (Array.isArray(child)) {
	                for (index in child) {
	                  if (!hasProp.call(child, index)) continue;
	                  entry = child[index];
	                  if (typeof entry === 'string') {
	                    if (_this.options.cdata && requiresCDATA(entry)) {
	                      element = element.ele(key).raw(wrapCDATA(entry)).up();
	                    } else {
	                      element = element.ele(key, entry).up();
	                    }
	                  } else {
	                    element = render(element.ele(key), entry).up();
	                  }
	                }
	              } else if (typeof child === "object") {
	                element = render(element.ele(key), child).up();
	              } else {
	                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
	                  element = element.ele(key).raw(wrapCDATA(child)).up();
	                } else {
	                  if (child == null) {
	                    child = '';
	                  }
	                  element = element.ele(key, child.toString()).up();
	                }
	              }
	            }
	          }
	          return element;
	        };
	      })(this);
	      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
	        headless: this.options.headless,
	        allowSurrogateChars: this.options.allowSurrogateChars
	      });
	      return render(rootElement, rootObj).end(this.options.renderOpts);
	    };

	    return Builder;

	  })();

	  exports.Parser = (function(superClass) {
	    extend(Parser, superClass);

	    function Parser(opts) {
	      this.parseString = bind(this.parseString, this);
	      this.reset = bind(this.reset, this);
	      this.assignOrPush = bind(this.assignOrPush, this);
	      this.processAsync = bind(this.processAsync, this);
	      var key, ref, value;
	      if (!(this instanceof exports.Parser)) {
	        return new exports.Parser(opts);
	      }
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	      if (this.options.xmlns) {
	        this.options.xmlnskey = this.options.attrkey + "ns";
	      }
	      if (this.options.normalizeTags) {
	        if (!this.options.tagNameProcessors) {
	          this.options.tagNameProcessors = [];
	        }
	        this.options.tagNameProcessors.unshift(processors.normalize);
	      }
	      this.reset();
	    }

	    Parser.prototype.processAsync = function() {
	      var chunk, err, error1;
	      try {
	        if (this.remaining.length <= this.options.chunkSize) {
	          chunk = this.remaining;
	          this.remaining = '';
	          this.saxParser = this.saxParser.write(chunk);
	          return this.saxParser.close();
	        } else {
	          chunk = this.remaining.substr(0, this.options.chunkSize);
	          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
	          this.saxParser = this.saxParser.write(chunk);
	          return setImmediate(this.processAsync);
	        }
	      } catch (error1) {
	        err = error1;
	        if (!this.saxParser.errThrown) {
	          this.saxParser.errThrown = true;
	          return this.emit(err);
	        }
	      }
	    };

	    Parser.prototype.assignOrPush = function(obj, key, newValue) {
	      if (!(key in obj)) {
	        if (!this.options.explicitArray) {
	          return obj[key] = newValue;
	        } else {
	          return obj[key] = [newValue];
	        }
	      } else {
	        if (!(obj[key] instanceof Array)) {
	          obj[key] = [obj[key]];
	        }
	        return obj[key].push(newValue);
	      }
	    };

	    Parser.prototype.reset = function() {
	      var attrkey, charkey, ontext, stack;
	      this.removeAllListeners();
	      this.saxParser = sax.parser(this.options.strict, {
	        trim: false,
	        normalize: false,
	        xmlns: this.options.xmlns
	      });
	      this.saxParser.errThrown = false;
	      this.saxParser.onerror = (function(_this) {
	        return function(error) {
	          _this.saxParser.resume();
	          if (!_this.saxParser.errThrown) {
	            _this.saxParser.errThrown = true;
	            return _this.emit("error", error);
	          }
	        };
	      })(this);
	      this.saxParser.onend = (function(_this) {
	        return function() {
	          if (!_this.saxParser.ended) {
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      })(this);
	      this.saxParser.ended = false;
	      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
	      this.resultObject = null;
	      stack = [];
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      this.saxParser.onopentag = (function(_this) {
	        return function(node) {
	          var key, newValue, obj, processedKey, ref;
	          obj = {};
	          obj[charkey] = "";
	          if (!_this.options.ignoreAttrs) {
	            ref = node.attributes;
	            for (key in ref) {
	              if (!hasProp.call(ref, key)) continue;
	              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
	                obj[attrkey] = {};
	              }
	              newValue = _this.options.attrValueProcessors ? processName(_this.options.attrValueProcessors, node.attributes[key]) : node.attributes[key];
	              processedKey = _this.options.attrNameProcessors ? processName(_this.options.attrNameProcessors, key) : key;
	              if (_this.options.mergeAttrs) {
	                _this.assignOrPush(obj, processedKey, newValue);
	              } else {
	                obj[attrkey][processedKey] = newValue;
	              }
	            }
	          }
	          obj["#name"] = _this.options.tagNameProcessors ? processName(_this.options.tagNameProcessors, node.name) : node.name;
	          if (_this.options.xmlns) {
	            obj[_this.options.xmlnskey] = {
	              uri: node.uri,
	              local: node.local
	            };
	          }
	          return stack.push(obj);
	        };
	      })(this);
	      this.saxParser.onclosetag = (function(_this) {
	        return function() {
	          var cdata, emptyStr, err, error1, key, node, nodeName, obj, objClone, old, s, xpath;
	          obj = stack.pop();
	          nodeName = obj["#name"];
	          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
	            delete obj["#name"];
	          }
	          if (obj.cdata === true) {
	            cdata = obj.cdata;
	            delete obj.cdata;
	          }
	          s = stack[stack.length - 1];
	          if (obj[charkey].match(/^\s*$/) && !cdata) {
	            emptyStr = obj[charkey];
	            delete obj[charkey];
	          } else {
	            if (_this.options.trim) {
	              obj[charkey] = obj[charkey].trim();
	            }
	            if (_this.options.normalize) {
	              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
	            }
	            obj[charkey] = _this.options.valueProcessors ? processName(_this.options.valueProcessors, obj[charkey]) : obj[charkey];
	            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	              obj = obj[charkey];
	            }
	          }
	          if (isEmpty(obj)) {
	            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
	          }
	          if (_this.options.validator != null) {
	            xpath = "/" + ((function() {
	              var i, len, results;
	              results = [];
	              for (i = 0, len = stack.length; i < len; i++) {
	                node = stack[i];
	                results.push(node["#name"]);
	              }
	              return results;
	            })()).concat(nodeName).join("/");
	            try {
	              obj = _this.options.validator(xpath, s && s[nodeName], obj);
	            } catch (error1) {
	              err = error1;
	              _this.emit("error", err);
	            }
	          }
	          if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
	            if (!_this.options.preserveChildrenOrder) {
	              node = {};
	              if (_this.options.attrkey in obj) {
	                node[_this.options.attrkey] = obj[_this.options.attrkey];
	                delete obj[_this.options.attrkey];
	              }
	              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
	                node[_this.options.charkey] = obj[_this.options.charkey];
	                delete obj[_this.options.charkey];
	              }
	              if (Object.getOwnPropertyNames(obj).length > 0) {
	                node[_this.options.childkey] = obj;
	              }
	              obj = node;
	            } else if (s) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              objClone = {};
	              for (key in obj) {
	                if (!hasProp.call(obj, key)) continue;
	                objClone[key] = obj[key];
	              }
	              s[_this.options.childkey].push(objClone);
	              delete obj["#name"];
	              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	                obj = obj[charkey];
	              }
	            }
	          }
	          if (stack.length > 0) {
	            return _this.assignOrPush(s, nodeName, obj);
	          } else {
	            if (_this.options.explicitRoot) {
	              old = obj;
	              obj = {};
	              obj[nodeName] = old;
	            }
	            _this.resultObject = obj;
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      })(this);
	      ontext = (function(_this) {
	        return function(text) {
	          var charChild, s;
	          s = stack[stack.length - 1];
	          if (s) {
	            s[charkey] += text;
	            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              charChild = {
	                '#name': '__text__'
	              };
	              charChild[charkey] = text;
	              if (_this.options.normalize) {
	                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
	              }
	              s[_this.options.childkey].push(charChild);
	            }
	            return s;
	          }
	        };
	      })(this);
	      this.saxParser.ontext = ontext;
	      return this.saxParser.oncdata = (function(_this) {
	        return function(text) {
	          var s;
	          s = ontext(text);
	          if (s) {
	            return s.cdata = true;
	          }
	        };
	      })(this);
	    };

	    Parser.prototype.parseString = function(str, cb) {
	      var err, error1;
	      if ((cb != null) && typeof cb === "function") {
	        this.on("end", function(result) {
	          this.reset();
	          return cb(null, result);
	        });
	        this.on("error", function(err) {
	          this.reset();
	          return cb(err);
	        });
	      }
	      try {
	        str = str.toString();
	        if (str.trim() === '') {
	          this.emit("end", null);
	          return true;
	        }
	        str = bom.stripBOM(str);
	        if (this.options.async) {
	          this.remaining = str;
	          setImmediate(this.processAsync);
	          return this.saxParser;
	        }
	        return this.saxParser.write(str).close();
	      } catch (error1) {
	        err = error1;
	        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
	          this.emit('error', err);
	          return this.saxParser.errThrown = true;
	        } else if (this.saxParser.ended) {
	          throw err;
	        }
	      }
	    };

	    return Parser;

	  })(events.EventEmitter);

	  exports.parseString = function(str, a, b) {
	    var cb, options, parser;
	    if (b != null) {
	      if (typeof b === 'function') {
	        cb = b;
	      }
	      if (typeof a === 'object') {
	        options = a;
	      }
	    } else {
	      if (typeof a === 'function') {
	        cb = a;
	      }
	      options = {};
	    }
	    parser = new exports.Parser(options);
	    return parser.parseString(str, cb);
	  };

	}).call(this);


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {;(function (sax) { // wrapper for non-node envs
	  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
	  sax.SAXParser = SAXParser
	  sax.SAXStream = SAXStream
	  sax.createStream = createStream

	  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
	  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
	  // since that's the earliest that a buffer overrun could occur.  This way, checks are
	  // as rare as required, but as often as necessary to ensure never crossing this bound.
	  // Furthermore, buffers are only tested at most once per write(), so passing a very
	  // large string into write() might have undesirable effects, but this is manageable by
	  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
	  // edge case, result in creating at most one complete copy of the string passed in.
	  // Set to Infinity to have unlimited buffers.
	  sax.MAX_BUFFER_LENGTH = 64 * 1024

	  var buffers = [
	    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
	    'procInstName', 'procInstBody', 'entity', 'attribName',
	    'attribValue', 'cdata', 'script'
	  ]

	  sax.EVENTS = [
	    'text',
	    'processinginstruction',
	    'sgmldeclaration',
	    'doctype',
	    'comment',
	    'opentagstart',
	    'attribute',
	    'opentag',
	    'closetag',
	    'opencdata',
	    'cdata',
	    'closecdata',
	    'error',
	    'end',
	    'ready',
	    'script',
	    'opennamespace',
	    'closenamespace'
	  ]

	  function SAXParser (strict, opt) {
	    if (!(this instanceof SAXParser)) {
	      return new SAXParser(strict, opt)
	    }

	    var parser = this
	    clearBuffers(parser)
	    parser.q = parser.c = ''
	    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
	    parser.opt = opt || {}
	    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
	    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
	    parser.tags = []
	    parser.closed = parser.closedRoot = parser.sawRoot = false
	    parser.tag = parser.error = null
	    parser.strict = !!strict
	    parser.noscript = !!(strict || parser.opt.noscript)
	    parser.state = S.BEGIN
	    parser.strictEntities = parser.opt.strictEntities
	    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
	    parser.attribList = []

	    // namespaces form a prototype chain.
	    // it always points at the current tag,
	    // which protos to its parent tag.
	    if (parser.opt.xmlns) {
	      parser.ns = Object.create(rootNS)
	    }

	    // mostly just for error reporting
	    parser.trackPosition = parser.opt.position !== false
	    if (parser.trackPosition) {
	      parser.position = parser.line = parser.column = 0
	    }
	    emit(parser, 'onready')
	  }

	  if (!Object.create) {
	    Object.create = function (o) {
	      function F () {}
	      F.prototype = o
	      var newf = new F()
	      return newf
	    }
	  }

	  if (!Object.keys) {
	    Object.keys = function (o) {
	      var a = []
	      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
	      return a
	    }
	  }

	  function checkBufferLength (parser) {
	    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
	    var maxActual = 0
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      var len = parser[buffers[i]].length
	      if (len > maxAllowed) {
	        // Text/cdata nodes can get big, and since they're buffered,
	        // we can get here under normal conditions.
	        // Avoid issues by emitting the text node now,
	        // so at least it won't get any bigger.
	        switch (buffers[i]) {
	          case 'textNode':
	            closeText(parser)
	            break

	          case 'cdata':
	            emitNode(parser, 'oncdata', parser.cdata)
	            parser.cdata = ''
	            break

	          case 'script':
	            emitNode(parser, 'onscript', parser.script)
	            parser.script = ''
	            break

	          default:
	            error(parser, 'Max buffer length exceeded: ' + buffers[i])
	        }
	      }
	      maxActual = Math.max(maxActual, len)
	    }
	    // schedule the next check for the earliest possible buffer overrun.
	    var m = sax.MAX_BUFFER_LENGTH - maxActual
	    parser.bufferCheckPosition = m + parser.position
	  }

	  function clearBuffers (parser) {
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      parser[buffers[i]] = ''
	    }
	  }

	  function flushBuffers (parser) {
	    closeText(parser)
	    if (parser.cdata !== '') {
	      emitNode(parser, 'oncdata', parser.cdata)
	      parser.cdata = ''
	    }
	    if (parser.script !== '') {
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }
	  }

	  SAXParser.prototype = {
	    end: function () { end(this) },
	    write: write,
	    resume: function () { this.error = null; return this },
	    close: function () { return this.write(null) },
	    flush: function () { flushBuffers(this) }
	  }

	  var Stream
	  try {
	    Stream = __webpack_require__(25).Stream
	  } catch (ex) {
	    Stream = function () {}
	  }

	  var streamWraps = sax.EVENTS.filter(function (ev) {
	    return ev !== 'error' && ev !== 'end'
	  })

	  function createStream (strict, opt) {
	    return new SAXStream(strict, opt)
	  }

	  function SAXStream (strict, opt) {
	    if (!(this instanceof SAXStream)) {
	      return new SAXStream(strict, opt)
	    }

	    Stream.apply(this)

	    this._parser = new SAXParser(strict, opt)
	    this.writable = true
	    this.readable = true

	    var me = this

	    this._parser.onend = function () {
	      me.emit('end')
	    }

	    this._parser.onerror = function (er) {
	      me.emit('error', er)

	      // if didn't throw, then means error was handled.
	      // go ahead and clear error, so we can write again.
	      me._parser.error = null
	    }

	    this._decoder = null

	    streamWraps.forEach(function (ev) {
	      Object.defineProperty(me, 'on' + ev, {
	        get: function () {
	          return me._parser['on' + ev]
	        },
	        set: function (h) {
	          if (!h) {
	            me.removeAllListeners(ev)
	            me._parser['on' + ev] = h
	            return h
	          }
	          me.on(ev, h)
	        },
	        enumerable: true,
	        configurable: false
	      })
	    })
	  }

	  SAXStream.prototype = Object.create(Stream.prototype, {
	    constructor: {
	      value: SAXStream
	    }
	  })

	  SAXStream.prototype.write = function (data) {
	    if (typeof Buffer === 'function' &&
	      typeof Buffer.isBuffer === 'function' &&
	      Buffer.isBuffer(data)) {
	      if (!this._decoder) {
	        var SD = __webpack_require__(33).StringDecoder
	        this._decoder = new SD('utf8')
	      }
	      data = this._decoder.write(data)
	    }

	    this._parser.write(data.toString())
	    this.emit('data', data)
	    return true
	  }

	  SAXStream.prototype.end = function (chunk) {
	    if (chunk && chunk.length) {
	      this.write(chunk)
	    }
	    this._parser.end()
	    return true
	  }

	  SAXStream.prototype.on = function (ev, handler) {
	    var me = this
	    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
	      me._parser['on' + ev] = function () {
	        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
	        args.splice(0, 0, ev)
	        me.emit.apply(me, args)
	      }
	    }

	    return Stream.prototype.on.call(me, ev, handler)
	  }

	  // character classes and tokens
	  var whitespace = '\r\n\t '

	  // this really needs to be replaced with character classes.
	  // XML allows all manner of ridiculous numbers and digits.
	  var number = '0124356789'
	  var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

	  // (Letter | "_" | ":")
	  var quote = '\'"'
	  var attribEnd = whitespace + '>'
	  var CDATA = '[CDATA['
	  var DOCTYPE = 'DOCTYPE'
	  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
	  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
	  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

	  // turn all the string character sets into character class objects.
	  whitespace = charClass(whitespace)
	  number = charClass(number)
	  letter = charClass(letter)

	  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
	  // This implementation works on strings, a single character at a time
	  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
	  // without a significant breaking change to either this  parser, or the
	  // JavaScript language.  Implementation of an emoji-capable xml parser
	  // is left as an exercise for the reader.
	  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

	  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

	  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
	  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

	  quote = charClass(quote)
	  attribEnd = charClass(attribEnd)

	  function charClass (str) {
	    return str.split('').reduce(function (s, c) {
	      s[c] = true
	      return s
	    }, {})
	  }

	  function isRegExp (c) {
	    return Object.prototype.toString.call(c) === '[object RegExp]'
	  }

	  function is (charclass, c) {
	    return isRegExp(charclass) ? !!c.match(charclass) : charclass[c]
	  }

	  function not (charclass, c) {
	    return !is(charclass, c)
	  }

	  var S = 0
	  sax.STATE = {
	    BEGIN: S++, // leading byte order mark or whitespace
	    BEGIN_WHITESPACE: S++, // leading whitespace
	    TEXT: S++, // general stuff
	    TEXT_ENTITY: S++, // &amp and such.
	    OPEN_WAKA: S++, // <
	    SGML_DECL: S++, // <!BLARG
	    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
	    DOCTYPE: S++, // <!DOCTYPE
	    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
	    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
	    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
	    COMMENT_STARTING: S++, // <!-
	    COMMENT: S++, // <!--
	    COMMENT_ENDING: S++, // <!-- blah -
	    COMMENT_ENDED: S++, // <!-- blah --
	    CDATA: S++, // <![CDATA[ something
	    CDATA_ENDING: S++, // ]
	    CDATA_ENDING_2: S++, // ]]
	    PROC_INST: S++, // <?hi
	    PROC_INST_BODY: S++, // <?hi there
	    PROC_INST_ENDING: S++, // <?hi "there" ?
	    OPEN_TAG: S++, // <strong
	    OPEN_TAG_SLASH: S++, // <strong /
	    ATTRIB: S++, // <a
	    ATTRIB_NAME: S++, // <a foo
	    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
	    ATTRIB_VALUE: S++, // <a foo=
	    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
	    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
	    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
	    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
	    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
	    CLOSE_TAG: S++, // </a
	    CLOSE_TAG_SAW_WHITE: S++, // </a   >
	    SCRIPT: S++, // <script> ...
	    SCRIPT_ENDING: S++ // <script> ... <
	  }

	  sax.XML_ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'"
	  }

	  sax.ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'",
	    'AElig': 198,
	    'Aacute': 193,
	    'Acirc': 194,
	    'Agrave': 192,
	    'Aring': 197,
	    'Atilde': 195,
	    'Auml': 196,
	    'Ccedil': 199,
	    'ETH': 208,
	    'Eacute': 201,
	    'Ecirc': 202,
	    'Egrave': 200,
	    'Euml': 203,
	    'Iacute': 205,
	    'Icirc': 206,
	    'Igrave': 204,
	    'Iuml': 207,
	    'Ntilde': 209,
	    'Oacute': 211,
	    'Ocirc': 212,
	    'Ograve': 210,
	    'Oslash': 216,
	    'Otilde': 213,
	    'Ouml': 214,
	    'THORN': 222,
	    'Uacute': 218,
	    'Ucirc': 219,
	    'Ugrave': 217,
	    'Uuml': 220,
	    'Yacute': 221,
	    'aacute': 225,
	    'acirc': 226,
	    'aelig': 230,
	    'agrave': 224,
	    'aring': 229,
	    'atilde': 227,
	    'auml': 228,
	    'ccedil': 231,
	    'eacute': 233,
	    'ecirc': 234,
	    'egrave': 232,
	    'eth': 240,
	    'euml': 235,
	    'iacute': 237,
	    'icirc': 238,
	    'igrave': 236,
	    'iuml': 239,
	    'ntilde': 241,
	    'oacute': 243,
	    'ocirc': 244,
	    'ograve': 242,
	    'oslash': 248,
	    'otilde': 245,
	    'ouml': 246,
	    'szlig': 223,
	    'thorn': 254,
	    'uacute': 250,
	    'ucirc': 251,
	    'ugrave': 249,
	    'uuml': 252,
	    'yacute': 253,
	    'yuml': 255,
	    'copy': 169,
	    'reg': 174,
	    'nbsp': 160,
	    'iexcl': 161,
	    'cent': 162,
	    'pound': 163,
	    'curren': 164,
	    'yen': 165,
	    'brvbar': 166,
	    'sect': 167,
	    'uml': 168,
	    'ordf': 170,
	    'laquo': 171,
	    'not': 172,
	    'shy': 173,
	    'macr': 175,
	    'deg': 176,
	    'plusmn': 177,
	    'sup1': 185,
	    'sup2': 178,
	    'sup3': 179,
	    'acute': 180,
	    'micro': 181,
	    'para': 182,
	    'middot': 183,
	    'cedil': 184,
	    'ordm': 186,
	    'raquo': 187,
	    'frac14': 188,
	    'frac12': 189,
	    'frac34': 190,
	    'iquest': 191,
	    'times': 215,
	    'divide': 247,
	    'OElig': 338,
	    'oelig': 339,
	    'Scaron': 352,
	    'scaron': 353,
	    'Yuml': 376,
	    'fnof': 402,
	    'circ': 710,
	    'tilde': 732,
	    'Alpha': 913,
	    'Beta': 914,
	    'Gamma': 915,
	    'Delta': 916,
	    'Epsilon': 917,
	    'Zeta': 918,
	    'Eta': 919,
	    'Theta': 920,
	    'Iota': 921,
	    'Kappa': 922,
	    'Lambda': 923,
	    'Mu': 924,
	    'Nu': 925,
	    'Xi': 926,
	    'Omicron': 927,
	    'Pi': 928,
	    'Rho': 929,
	    'Sigma': 931,
	    'Tau': 932,
	    'Upsilon': 933,
	    'Phi': 934,
	    'Chi': 935,
	    'Psi': 936,
	    'Omega': 937,
	    'alpha': 945,
	    'beta': 946,
	    'gamma': 947,
	    'delta': 948,
	    'epsilon': 949,
	    'zeta': 950,
	    'eta': 951,
	    'theta': 952,
	    'iota': 953,
	    'kappa': 954,
	    'lambda': 955,
	    'mu': 956,
	    'nu': 957,
	    'xi': 958,
	    'omicron': 959,
	    'pi': 960,
	    'rho': 961,
	    'sigmaf': 962,
	    'sigma': 963,
	    'tau': 964,
	    'upsilon': 965,
	    'phi': 966,
	    'chi': 967,
	    'psi': 968,
	    'omega': 969,
	    'thetasym': 977,
	    'upsih': 978,
	    'piv': 982,
	    'ensp': 8194,
	    'emsp': 8195,
	    'thinsp': 8201,
	    'zwnj': 8204,
	    'zwj': 8205,
	    'lrm': 8206,
	    'rlm': 8207,
	    'ndash': 8211,
	    'mdash': 8212,
	    'lsquo': 8216,
	    'rsquo': 8217,
	    'sbquo': 8218,
	    'ldquo': 8220,
	    'rdquo': 8221,
	    'bdquo': 8222,
	    'dagger': 8224,
	    'Dagger': 8225,
	    'bull': 8226,
	    'hellip': 8230,
	    'permil': 8240,
	    'prime': 8242,
	    'Prime': 8243,
	    'lsaquo': 8249,
	    'rsaquo': 8250,
	    'oline': 8254,
	    'frasl': 8260,
	    'euro': 8364,
	    'image': 8465,
	    'weierp': 8472,
	    'real': 8476,
	    'trade': 8482,
	    'alefsym': 8501,
	    'larr': 8592,
	    'uarr': 8593,
	    'rarr': 8594,
	    'darr': 8595,
	    'harr': 8596,
	    'crarr': 8629,
	    'lArr': 8656,
	    'uArr': 8657,
	    'rArr': 8658,
	    'dArr': 8659,
	    'hArr': 8660,
	    'forall': 8704,
	    'part': 8706,
	    'exist': 8707,
	    'empty': 8709,
	    'nabla': 8711,
	    'isin': 8712,
	    'notin': 8713,
	    'ni': 8715,
	    'prod': 8719,
	    'sum': 8721,
	    'minus': 8722,
	    'lowast': 8727,
	    'radic': 8730,
	    'prop': 8733,
	    'infin': 8734,
	    'ang': 8736,
	    'and': 8743,
	    'or': 8744,
	    'cap': 8745,
	    'cup': 8746,
	    'int': 8747,
	    'there4': 8756,
	    'sim': 8764,
	    'cong': 8773,
	    'asymp': 8776,
	    'ne': 8800,
	    'equiv': 8801,
	    'le': 8804,
	    'ge': 8805,
	    'sub': 8834,
	    'sup': 8835,
	    'nsub': 8836,
	    'sube': 8838,
	    'supe': 8839,
	    'oplus': 8853,
	    'otimes': 8855,
	    'perp': 8869,
	    'sdot': 8901,
	    'lceil': 8968,
	    'rceil': 8969,
	    'lfloor': 8970,
	    'rfloor': 8971,
	    'lang': 9001,
	    'rang': 9002,
	    'loz': 9674,
	    'spades': 9824,
	    'clubs': 9827,
	    'hearts': 9829,
	    'diams': 9830
	  }

	  Object.keys(sax.ENTITIES).forEach(function (key) {
	    var e = sax.ENTITIES[key]
	    var s = typeof e === 'number' ? String.fromCharCode(e) : e
	    sax.ENTITIES[key] = s
	  })

	  for (var s in sax.STATE) {
	    sax.STATE[sax.STATE[s]] = s
	  }

	  // shorthand
	  S = sax.STATE

	  function emit (parser, event, data) {
	    parser[event] && parser[event](data)
	  }

	  function emitNode (parser, nodeType, data) {
	    if (parser.textNode) closeText(parser)
	    emit(parser, nodeType, data)
	  }

	  function closeText (parser) {
	    parser.textNode = textopts(parser.opt, parser.textNode)
	    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
	    parser.textNode = ''
	  }

	  function textopts (opt, text) {
	    if (opt.trim) text = text.trim()
	    if (opt.normalize) text = text.replace(/\s+/g, ' ')
	    return text
	  }

	  function error (parser, er) {
	    closeText(parser)
	    if (parser.trackPosition) {
	      er += '\nLine: ' + parser.line +
	        '\nColumn: ' + parser.column +
	        '\nChar: ' + parser.c
	    }
	    er = new Error(er)
	    parser.error = er
	    emit(parser, 'onerror', er)
	    return parser
	  }

	  function end (parser) {
	    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
	    if ((parser.state !== S.BEGIN) &&
	      (parser.state !== S.BEGIN_WHITESPACE) &&
	      (parser.state !== S.TEXT)) {
	      error(parser, 'Unexpected end')
	    }
	    closeText(parser)
	    parser.c = ''
	    parser.closed = true
	    emit(parser, 'onend')
	    SAXParser.call(parser, parser.strict, parser.opt)
	    return parser
	  }

	  function strictFail (parser, message) {
	    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
	      throw new Error('bad call to strictFail')
	    }
	    if (parser.strict) {
	      error(parser, message)
	    }
	  }

	  function newTag (parser) {
	    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
	    var parent = parser.tags[parser.tags.length - 1] || parser
	    var tag = parser.tag = { name: parser.tagName, attributes: {} }

	    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
	    if (parser.opt.xmlns) {
	      tag.ns = parent.ns
	    }
	    parser.attribList.length = 0
	    emitNode(parser, 'onopentagstart', tag)
	  }

	  function qname (name, attribute) {
	    var i = name.indexOf(':')
	    var qualName = i < 0 ? [ '', name ] : name.split(':')
	    var prefix = qualName[0]
	    var local = qualName[1]

	    // <x "xmlns"="http://foo">
	    if (attribute && name === 'xmlns') {
	      prefix = 'xmlns'
	      local = ''
	    }

	    return { prefix: prefix, local: local }
	  }

	  function attrib (parser) {
	    if (!parser.strict) {
	      parser.attribName = parser.attribName[parser.looseCase]()
	    }

	    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
	      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
	      parser.attribName = parser.attribValue = ''
	      return
	    }

	    if (parser.opt.xmlns) {
	      var qn = qname(parser.attribName, true)
	      var prefix = qn.prefix
	      var local = qn.local

	      if (prefix === 'xmlns') {
	        // namespace binding attribute. push the binding into scope
	        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
	          strictFail(parser,
	            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
	          strictFail(parser,
	            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else {
	          var tag = parser.tag
	          var parent = parser.tags[parser.tags.length - 1] || parser
	          if (tag.ns === parent.ns) {
	            tag.ns = Object.create(parent.ns)
	          }
	          tag.ns[local] = parser.attribValue
	        }
	      }

	      // defer onattribute events until all attributes have been seen
	      // so any new bindings can take effect. preserve attribute order
	      // so deferred events can be emitted in document order
	      parser.attribList.push([parser.attribName, parser.attribValue])
	    } else {
	      // in non-xmlns mode, we can emit the event right away
	      parser.tag.attributes[parser.attribName] = parser.attribValue
	      emitNode(parser, 'onattribute', {
	        name: parser.attribName,
	        value: parser.attribValue
	      })
	    }

	    parser.attribName = parser.attribValue = ''
	  }

	  function openTag (parser, selfClosing) {
	    if (parser.opt.xmlns) {
	      // emit namespace binding events
	      var tag = parser.tag

	      // add namespace info to tag
	      var qn = qname(parser.tagName)
	      tag.prefix = qn.prefix
	      tag.local = qn.local
	      tag.uri = tag.ns[qn.prefix] || ''

	      if (tag.prefix && !tag.uri) {
	        strictFail(parser, 'Unbound namespace prefix: ' +
	          JSON.stringify(parser.tagName))
	        tag.uri = qn.prefix
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (tag.ns && parent.ns !== tag.ns) {
	        Object.keys(tag.ns).forEach(function (p) {
	          emitNode(parser, 'onopennamespace', {
	            prefix: p,
	            uri: tag.ns[p]
	          })
	        })
	      }

	      // handle deferred onattribute events
	      // Note: do not apply default ns to attributes:
	      //   http://www.w3.org/TR/REC-xml-names/#defaulting
	      for (var i = 0, l = parser.attribList.length; i < l; i++) {
	        var nv = parser.attribList[i]
	        var name = nv[0]
	        var value = nv[1]
	        var qualName = qname(name, true)
	        var prefix = qualName.prefix
	        var local = qualName.local
	        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
	        var a = {
	          name: name,
	          value: value,
	          prefix: prefix,
	          local: local,
	          uri: uri
	        }

	        // if there's any attributes with an undefined namespace,
	        // then fail on them now.
	        if (prefix && prefix !== 'xmlns' && !uri) {
	          strictFail(parser, 'Unbound namespace prefix: ' +
	            JSON.stringify(prefix))
	          a.uri = prefix
	        }
	        parser.tag.attributes[name] = a
	        emitNode(parser, 'onattribute', a)
	      }
	      parser.attribList.length = 0
	    }

	    parser.tag.isSelfClosing = !!selfClosing

	    // process the tag
	    parser.sawRoot = true
	    parser.tags.push(parser.tag)
	    emitNode(parser, 'onopentag', parser.tag)
	    if (!selfClosing) {
	      // special case for <script> in non-strict mode.
	      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
	        parser.state = S.SCRIPT
	      } else {
	        parser.state = S.TEXT
	      }
	      parser.tag = null
	      parser.tagName = ''
	    }
	    parser.attribName = parser.attribValue = ''
	    parser.attribList.length = 0
	  }

	  function closeTag (parser) {
	    if (!parser.tagName) {
	      strictFail(parser, 'Weird empty close tag.')
	      parser.textNode += '</>'
	      parser.state = S.TEXT
	      return
	    }

	    if (parser.script) {
	      if (parser.tagName !== 'script') {
	        parser.script += '</' + parser.tagName + '>'
	        parser.tagName = ''
	        parser.state = S.SCRIPT
	        return
	      }
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }

	    // first make sure that the closing tag actually exists.
	    // <a><b></c></b></a> will close everything, otherwise.
	    var t = parser.tags.length
	    var tagName = parser.tagName
	    if (!parser.strict) {
	      tagName = tagName[parser.looseCase]()
	    }
	    var closeTo = tagName
	    while (t--) {
	      var close = parser.tags[t]
	      if (close.name !== closeTo) {
	        // fail the first time in strict mode
	        strictFail(parser, 'Unexpected close tag')
	      } else {
	        break
	      }
	    }

	    // didn't find it.  we already failed for strict, so just abort.
	    if (t < 0) {
	      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
	      parser.textNode += '</' + parser.tagName + '>'
	      parser.state = S.TEXT
	      return
	    }
	    parser.tagName = tagName
	    var s = parser.tags.length
	    while (s-- > t) {
	      var tag = parser.tag = parser.tags.pop()
	      parser.tagName = parser.tag.name
	      emitNode(parser, 'onclosetag', parser.tagName)

	      var x = {}
	      for (var i in tag.ns) {
	        x[i] = tag.ns[i]
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (parser.opt.xmlns && tag.ns !== parent.ns) {
	        // remove namespace bindings introduced by tag
	        Object.keys(tag.ns).forEach(function (p) {
	          var n = tag.ns[p]
	          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
	        })
	      }
	    }
	    if (t === 0) parser.closedRoot = true
	    parser.tagName = parser.attribValue = parser.attribName = ''
	    parser.attribList.length = 0
	    parser.state = S.TEXT
	  }

	  function parseEntity (parser) {
	    var entity = parser.entity
	    var entityLC = entity.toLowerCase()
	    var num
	    var numStr = ''

	    if (parser.ENTITIES[entity]) {
	      return parser.ENTITIES[entity]
	    }
	    if (parser.ENTITIES[entityLC]) {
	      return parser.ENTITIES[entityLC]
	    }
	    entity = entityLC
	    if (entity.charAt(0) === '#') {
	      if (entity.charAt(1) === 'x') {
	        entity = entity.slice(2)
	        num = parseInt(entity, 16)
	        numStr = num.toString(16)
	      } else {
	        entity = entity.slice(1)
	        num = parseInt(entity, 10)
	        numStr = num.toString(10)
	      }
	    }
	    entity = entity.replace(/^0+/, '')
	    if (numStr.toLowerCase() !== entity) {
	      strictFail(parser, 'Invalid character entity')
	      return '&' + parser.entity + ';'
	    }

	    return String.fromCodePoint(num)
	  }

	  function beginWhiteSpace (parser, c) {
	    if (c === '<') {
	      parser.state = S.OPEN_WAKA
	      parser.startTagPosition = parser.position
	    } else if (not(whitespace, c)) {
	      // have to process this as a text node.
	      // weird, but happens.
	      strictFail(parser, 'Non-whitespace before first tag.')
	      parser.textNode = c
	      parser.state = S.TEXT
	    }
	  }

	  function charAt (chunk, i) {
	    var result = ''
	    if (i < chunk.length) {
	      result = chunk.charAt(i)
	    }
	    return result
	  }

	  function write (chunk) {
	    var parser = this
	    if (this.error) {
	      throw this.error
	    }
	    if (parser.closed) {
	      return error(parser,
	        'Cannot write after close. Assign an onready handler.')
	    }
	    if (chunk === null) {
	      return end(parser)
	    }
	    if (typeof chunk === 'object') {
	      chunk = chunk.toString()
	    }
	    var i = 0
	    var c = ''
	    while (true) {
	      c = charAt(chunk, i++)
	      parser.c = c
	      if (!c) {
	        break
	      }
	      if (parser.trackPosition) {
	        parser.position++
	        if (c === '\n') {
	          parser.line++
	          parser.column = 0
	        } else {
	          parser.column++
	        }
	      }
	      switch (parser.state) {
	        case S.BEGIN:
	          parser.state = S.BEGIN_WHITESPACE
	          if (c === '\uFEFF') {
	            continue
	          }
	          beginWhiteSpace(parser, c)
	          continue

	        case S.BEGIN_WHITESPACE:
	          beginWhiteSpace(parser, c)
	          continue

	        case S.TEXT:
	          if (parser.sawRoot && !parser.closedRoot) {
	            var starti = i - 1
	            while (c && c !== '<' && c !== '&') {
	              c = charAt(chunk, i++)
	              if (c && parser.trackPosition) {
	                parser.position++
	                if (c === '\n') {
	                  parser.line++
	                  parser.column = 0
	                } else {
	                  parser.column++
	                }
	              }
	            }
	            parser.textNode += chunk.substring(starti, i - 1)
	          }
	          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
	            parser.state = S.OPEN_WAKA
	            parser.startTagPosition = parser.position
	          } else {
	            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) {
	              strictFail(parser, 'Text data outside of root node.')
	            }
	            if (c === '&') {
	              parser.state = S.TEXT_ENTITY
	            } else {
	              parser.textNode += c
	            }
	          }
	          continue

	        case S.SCRIPT:
	          // only non-strict
	          if (c === '<') {
	            parser.state = S.SCRIPT_ENDING
	          } else {
	            parser.script += c
	          }
	          continue

	        case S.SCRIPT_ENDING:
	          if (c === '/') {
	            parser.state = S.CLOSE_TAG
	          } else {
	            parser.script += '<' + c
	            parser.state = S.SCRIPT
	          }
	          continue

	        case S.OPEN_WAKA:
	          // either a /, ?, !, or text is coming next.
	          if (c === '!') {
	            parser.state = S.SGML_DECL
	            parser.sgmlDecl = ''
	          } else if (is(whitespace, c)) {
	            // wait for it...
	          } else if (is(nameStart, c)) {
	            parser.state = S.OPEN_TAG
	            parser.tagName = c
	          } else if (c === '/') {
	            parser.state = S.CLOSE_TAG
	            parser.tagName = ''
	          } else if (c === '?') {
	            parser.state = S.PROC_INST
	            parser.procInstName = parser.procInstBody = ''
	          } else {
	            strictFail(parser, 'Unencoded <')
	            // if there was some whitespace, then add that in.
	            if (parser.startTagPosition + 1 < parser.position) {
	              var pad = parser.position - parser.startTagPosition
	              c = new Array(pad).join(' ') + c
	            }
	            parser.textNode += '<' + c
	            parser.state = S.TEXT
	          }
	          continue

	        case S.SGML_DECL:
	          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
	            emitNode(parser, 'onopencdata')
	            parser.state = S.CDATA
	            parser.sgmlDecl = ''
	            parser.cdata = ''
	          } else if (parser.sgmlDecl + c === '--') {
	            parser.state = S.COMMENT
	            parser.comment = ''
	            parser.sgmlDecl = ''
	          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
	            parser.state = S.DOCTYPE
	            if (parser.doctype || parser.sawRoot) {
	              strictFail(parser,
	                'Inappropriately located doctype declaration')
	            }
	            parser.doctype = ''
	            parser.sgmlDecl = ''
	          } else if (c === '>') {
	            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
	            parser.sgmlDecl = ''
	            parser.state = S.TEXT
	          } else if (is(quote, c)) {
	            parser.state = S.SGML_DECL_QUOTED
	            parser.sgmlDecl += c
	          } else {
	            parser.sgmlDecl += c
	          }
	          continue

	        case S.SGML_DECL_QUOTED:
	          if (c === parser.q) {
	            parser.state = S.SGML_DECL
	            parser.q = ''
	          }
	          parser.sgmlDecl += c
	          continue

	        case S.DOCTYPE:
	          if (c === '>') {
	            parser.state = S.TEXT
	            emitNode(parser, 'ondoctype', parser.doctype)
	            parser.doctype = true // just remember that we saw it.
	          } else {
	            parser.doctype += c
	            if (c === '[') {
	              parser.state = S.DOCTYPE_DTD
	            } else if (is(quote, c)) {
	              parser.state = S.DOCTYPE_QUOTED
	              parser.q = c
	            }
	          }
	          continue

	        case S.DOCTYPE_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.q = ''
	            parser.state = S.DOCTYPE
	          }
	          continue

	        case S.DOCTYPE_DTD:
	          parser.doctype += c
	          if (c === ']') {
	            parser.state = S.DOCTYPE
	          } else if (is(quote, c)) {
	            parser.state = S.DOCTYPE_DTD_QUOTED
	            parser.q = c
	          }
	          continue

	        case S.DOCTYPE_DTD_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.state = S.DOCTYPE_DTD
	            parser.q = ''
	          }
	          continue

	        case S.COMMENT:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDING
	          } else {
	            parser.comment += c
	          }
	          continue

	        case S.COMMENT_ENDING:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDED
	            parser.comment = textopts(parser.opt, parser.comment)
	            if (parser.comment) {
	              emitNode(parser, 'oncomment', parser.comment)
	            }
	            parser.comment = ''
	          } else {
	            parser.comment += '-' + c
	            parser.state = S.COMMENT
	          }
	          continue

	        case S.COMMENT_ENDED:
	          if (c !== '>') {
	            strictFail(parser, 'Malformed comment')
	            // allow <!-- blah -- bloo --> in non-strict mode,
	            // which is a comment of " blah -- bloo "
	            parser.comment += '--' + c
	            parser.state = S.COMMENT
	          } else {
	            parser.state = S.TEXT
	          }
	          continue

	        case S.CDATA:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING
	          } else {
	            parser.cdata += c
	          }
	          continue

	        case S.CDATA_ENDING:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING_2
	          } else {
	            parser.cdata += ']' + c
	            parser.state = S.CDATA
	          }
	          continue

	        case S.CDATA_ENDING_2:
	          if (c === '>') {
	            if (parser.cdata) {
	              emitNode(parser, 'oncdata', parser.cdata)
	            }
	            emitNode(parser, 'onclosecdata')
	            parser.cdata = ''
	            parser.state = S.TEXT
	          } else if (c === ']') {
	            parser.cdata += ']'
	          } else {
	            parser.cdata += ']]' + c
	            parser.state = S.CDATA
	          }
	          continue

	        case S.PROC_INST:
	          if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else if (is(whitespace, c)) {
	            parser.state = S.PROC_INST_BODY
	          } else {
	            parser.procInstName += c
	          }
	          continue

	        case S.PROC_INST_BODY:
	          if (!parser.procInstBody && is(whitespace, c)) {
	            continue
	          } else if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else {
	            parser.procInstBody += c
	          }
	          continue

	        case S.PROC_INST_ENDING:
	          if (c === '>') {
	            emitNode(parser, 'onprocessinginstruction', {
	              name: parser.procInstName,
	              body: parser.procInstBody
	            })
	            parser.procInstName = parser.procInstBody = ''
	            parser.state = S.TEXT
	          } else {
	            parser.procInstBody += '?' + c
	            parser.state = S.PROC_INST_BODY
	          }
	          continue

	        case S.OPEN_TAG:
	          if (is(nameBody, c)) {
	            parser.tagName += c
	          } else {
	            newTag(parser)
	            if (c === '>') {
	              openTag(parser)
	            } else if (c === '/') {
	              parser.state = S.OPEN_TAG_SLASH
	            } else {
	              if (not(whitespace, c)) {
	                strictFail(parser, 'Invalid character in tag name')
	              }
	              parser.state = S.ATTRIB
	            }
	          }
	          continue

	        case S.OPEN_TAG_SLASH:
	          if (c === '>') {
	            openTag(parser, true)
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Forward-slash in opening tag not followed by >')
	            parser.state = S.ATTRIB
	          }
	          continue

	        case S.ATTRIB:
	          // haven't read the attribute name yet.
	          if (is(whitespace, c)) {
	            continue
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (is(nameStart, c)) {
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_NAME:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (c === '>') {
	            strictFail(parser, 'Attribute without value')
	            parser.attribValue = parser.attribName
	            attrib(parser)
	            openTag(parser)
	          } else if (is(whitespace, c)) {
	            parser.state = S.ATTRIB_NAME_SAW_WHITE
	          } else if (is(nameBody, c)) {
	            parser.attribName += c
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_NAME_SAW_WHITE:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (is(whitespace, c)) {
	            continue
	          } else {
	            strictFail(parser, 'Attribute without value')
	            parser.tag.attributes[parser.attribName] = ''
	            parser.attribValue = ''
	            emitNode(parser, 'onattribute', {
	              name: parser.attribName,
	              value: ''
	            })
	            parser.attribName = ''
	            if (c === '>') {
	              openTag(parser)
	            } else if (is(nameStart, c)) {
	              parser.attribName = c
	              parser.state = S.ATTRIB_NAME
	            } else {
	              strictFail(parser, 'Invalid attribute name')
	              parser.state = S.ATTRIB
	            }
	          }
	          continue

	        case S.ATTRIB_VALUE:
	          if (is(whitespace, c)) {
	            continue
	          } else if (is(quote, c)) {
	            parser.q = c
	            parser.state = S.ATTRIB_VALUE_QUOTED
	          } else {
	            strictFail(parser, 'Unquoted attribute value')
	            parser.state = S.ATTRIB_VALUE_UNQUOTED
	            parser.attribValue = c
	          }
	          continue

	        case S.ATTRIB_VALUE_QUOTED:
	          if (c !== parser.q) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_Q
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          parser.q = ''
	          parser.state = S.ATTRIB_VALUE_CLOSED
	          continue

	        case S.ATTRIB_VALUE_CLOSED:
	          if (is(whitespace, c)) {
	            parser.state = S.ATTRIB
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (is(nameStart, c)) {
	            strictFail(parser, 'No whitespace between attributes')
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_VALUE_UNQUOTED:
	          if (not(attribEnd, c)) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_U
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          if (c === '>') {
	            openTag(parser)
	          } else {
	            parser.state = S.ATTRIB
	          }
	          continue

	        case S.CLOSE_TAG:
	          if (!parser.tagName) {
	            if (is(whitespace, c)) {
	              continue
	            } else if (not(nameStart, c)) {
	              if (parser.script) {
	                parser.script += '</' + c
	                parser.state = S.SCRIPT
	              } else {
	                strictFail(parser, 'Invalid tagname in closing tag.')
	              }
	            } else {
	              parser.tagName = c
	            }
	          } else if (c === '>') {
	            closeTag(parser)
	          } else if (is(nameBody, c)) {
	            parser.tagName += c
	          } else if (parser.script) {
	            parser.script += '</' + parser.tagName
	            parser.tagName = ''
	            parser.state = S.SCRIPT
	          } else {
	            if (not(whitespace, c)) {
	              strictFail(parser, 'Invalid tagname in closing tag')
	            }
	            parser.state = S.CLOSE_TAG_SAW_WHITE
	          }
	          continue

	        case S.CLOSE_TAG_SAW_WHITE:
	          if (is(whitespace, c)) {
	            continue
	          }
	          if (c === '>') {
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Invalid characters in closing tag')
	          }
	          continue

	        case S.TEXT_ENTITY:
	        case S.ATTRIB_VALUE_ENTITY_Q:
	        case S.ATTRIB_VALUE_ENTITY_U:
	          var returnState
	          var buffer
	          switch (parser.state) {
	            case S.TEXT_ENTITY:
	              returnState = S.TEXT
	              buffer = 'textNode'
	              break

	            case S.ATTRIB_VALUE_ENTITY_Q:
	              returnState = S.ATTRIB_VALUE_QUOTED
	              buffer = 'attribValue'
	              break

	            case S.ATTRIB_VALUE_ENTITY_U:
	              returnState = S.ATTRIB_VALUE_UNQUOTED
	              buffer = 'attribValue'
	              break
	          }

	          if (c === ';') {
	            parser[buffer] += parseEntity(parser)
	            parser.entity = ''
	            parser.state = returnState
	          } else if (is(parser.entity.length ? entityBody : entityStart, c)) {
	            parser.entity += c
	          } else {
	            strictFail(parser, 'Invalid character in entity name')
	            parser[buffer] += '&' + parser.entity + c
	            parser.entity = ''
	            parser.state = returnState
	          }

	          continue

	        default:
	          throw new Error(parser, 'Unknown state: ' + parser.state)
	      }
	    } // while

	    if (parser.position >= parser.bufferCheckPosition) {
	      checkBufferLength(parser)
	    }
	    return parser
	  }

	  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
	  if (!String.fromCodePoint) {
	    (function () {
	      var stringFromCharCode = String.fromCharCode
	      var floor = Math.floor
	      var fromCodePoint = function () {
	        var MAX_SIZE = 0x4000
	        var codeUnits = []
	        var highSurrogate
	        var lowSurrogate
	        var index = -1
	        var length = arguments.length
	        if (!length) {
	          return ''
	        }
	        var result = ''
	        while (++index < length) {
	          var codePoint = Number(arguments[index])
	          if (
	            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	            codePoint < 0 || // not a valid Unicode code point
	            codePoint > 0x10FFFF || // not a valid Unicode code point
	            floor(codePoint) !== codePoint // not an integer
	          ) {
	            throw RangeError('Invalid code point: ' + codePoint)
	          }
	          if (codePoint <= 0xFFFF) { // BMP code point
	            codeUnits.push(codePoint)
	          } else { // Astral code point; split in surrogate halves
	            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	            codePoint -= 0x10000
	            highSurrogate = (codePoint >> 10) + 0xD800
	            lowSurrogate = (codePoint % 0x400) + 0xDC00
	            codeUnits.push(highSurrogate, lowSurrogate)
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	            result += stringFromCharCode.apply(null, codeUnits)
	            codeUnits.length = 0
	          }
	        }
	        return result
	      }
	      if (Object.defineProperty) {
	        Object.defineProperty(String, 'fromCodePoint', {
	          value: fromCodePoint,
	          configurable: true,
	          writable: true
	        })
	      } else {
	        String.fromCodePoint = fromCodePoint
	      }
	    }())
	  }
	})( false ? this.sax = {} : exports)

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, assign;

	  assign = __webpack_require__(74);

	  XMLBuilder = __webpack_require__(124);

	  module.exports.create = function(name, xmldec, doctype, options) {
	    options = assign({}, xmldec, doctype, options);
	    return new XMLBuilder(name, options).root();
	  };

	}).call(this);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(75),
	    copyObject = __webpack_require__(93),
	    createAssigner = __webpack_require__(94),
	    isArrayLike = __webpack_require__(104),
	    isPrototype = __webpack_require__(107),
	    keys = __webpack_require__(108);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(76),
	    eq = __webpack_require__(92);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(77);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(79),
	    getValue = __webpack_require__(91);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(80),
	    isMasked = __webpack_require__(88),
	    isObject = __webpack_require__(87),
	    toSource = __webpack_require__(90);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(81),
	    isObject = __webpack_require__(87);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(82),
	    getRawTag = __webpack_require__(85),
	    objectToString = __webpack_require__(86);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(84);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(82);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(89);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(75),
	    baseAssignValue = __webpack_require__(76);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(95),
	    isIterateeCall = __webpack_require__(103);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(96),
	    overRest = __webpack_require__(97),
	    setToString = __webpack_require__(99);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(98);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(100),
	    shortOut = __webpack_require__(102);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(101),
	    defineProperty = __webpack_require__(77),
	    identity = __webpack_require__(96);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(92),
	    isArrayLike = __webpack_require__(104),
	    isIndex = __webpack_require__(106),
	    isObject = __webpack_require__(87);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(80),
	    isLength = __webpack_require__(105);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(109),
	    baseKeys = __webpack_require__(121),
	    isArrayLike = __webpack_require__(104);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(110),
	    isArguments = __webpack_require__(111),
	    isArray = __webpack_require__(114),
	    isBuffer = __webpack_require__(115),
	    isIndex = __webpack_require__(106),
	    isTypedArray = __webpack_require__(117);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(112),
	    isObjectLike = __webpack_require__(113);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(81),
	    isObjectLike = __webpack_require__(113);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(83),
	    stubFalse = __webpack_require__(116);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(118),
	    baseUnary = __webpack_require__(119),
	    nodeUtil = __webpack_require__(120);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(81),
	    isLength = __webpack_require__(105),
	    isObjectLike = __webpack_require__(113);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(84);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(107),
	    nativeKeys = __webpack_require__(122);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(123);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

	  XMLStringifier = __webpack_require__(125);

	  XMLDeclaration = __webpack_require__(126);

	  XMLDocType = __webpack_require__(217);

	  XMLElement = __webpack_require__(138);

	  module.exports = XMLBuilder = (function() {
	    function XMLBuilder(name, options) {
	      var root, temp;
	      if (name == null) {
	        throw new Error("Root element needs a name");
	      }
	      if (options == null) {
	        options = {};
	      }
	      this.options = options;
	      this.stringify = new XMLStringifier(options);
	      temp = new XMLElement(this, 'doc');
	      root = temp.element(name);
	      root.isRoot = true;
	      root.documentObject = this;
	      this.rootObject = root;
	      if (!options.headless) {
	        root.declaration(options);
	        if ((options.pubID != null) || (options.sysID != null)) {
	          root.doctype(options);
	        }
	      }
	    }

	    XMLBuilder.prototype.root = function() {
	      return this.rootObject;
	    };

	    XMLBuilder.prototype.end = function(options) {
	      return this.toString(options);
	    };

	    XMLBuilder.prototype.toString = function(options) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      r = '';
	      if (this.xmldec != null) {
	        r += this.xmldec.toString(options);
	      }
	      if (this.doctype != null) {
	        r += this.doctype.toString(options);
	      }
	      r += this.rootObject.toString(options);
	      if (pretty && r.slice(-newline.length) === newline) {
	        r = r.slice(0, -newline.length);
	      }
	      return r;
	    };

	    return XMLBuilder;

	  })();

	}).call(this);


/***/ },
/* 125 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLStringifier,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    hasProp = {}.hasOwnProperty;

	  module.exports = XMLStringifier = (function() {
	    function XMLStringifier(options) {
	      this.assertLegalChar = bind(this.assertLegalChar, this);
	      var key, ref, value;
	      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
	      this.noDoubleEncoding = options != null ? options.noDoubleEncoding : void 0;
	      ref = (options != null ? options.stringify : void 0) || {};
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this[key] = value;
	      }
	    }

	    XMLStringifier.prototype.eleName = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.eleText = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(this.elEscape(val));
	    };

	    XMLStringifier.prototype.cdata = function(val) {
	      val = '' + val || '';
	      if (val.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.comment = function(val) {
	      val = '' + val || '';
	      if (val.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.raw = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attName = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attValue = function(val) {
	      val = '' + val || '';
	      return this.attEscape(val);
	    };

	    XMLStringifier.prototype.insTarget = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.insValue = function(val) {
	      val = '' + val || '';
	      if (val.match(/\?>/)) {
	        throw new Error("Invalid processing instruction value: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlVersion = function(val) {
	      val = '' + val || '';
	      if (!val.match(/1\.[0-9]+/)) {
	        throw new Error("Invalid version number: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlEncoding = function(val) {
	      val = '' + val || '';
	      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
	        throw new Error("Invalid encoding: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlStandalone = function(val) {
	      if (val) {
	        return "yes";
	      } else {
	        return "no";
	      }
	    };

	    XMLStringifier.prototype.dtdPubID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdSysID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdElementValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttType = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttDefault = function(val) {
	      if (val != null) {
	        return '' + val || '';
	      } else {
	        return val;
	      }
	    };

	    XMLStringifier.prototype.dtdEntityValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdNData = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.convertAttKey = '@';

	    XMLStringifier.prototype.convertPIKey = '?';

	    XMLStringifier.prototype.convertTextKey = '#text';

	    XMLStringifier.prototype.convertCDataKey = '#cdata';

	    XMLStringifier.prototype.convertCommentKey = '#comment';

	    XMLStringifier.prototype.convertRawKey = '#raw';

	    XMLStringifier.prototype.assertLegalChar = function(str) {
	      var chars, chr;
	      if (this.allowSurrogateChars) {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
	      } else {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      }
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
	      }
	      return str;
	    };

	    XMLStringifier.prototype.elEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
	    };

	    XMLStringifier.prototype.attEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	    };

	    return XMLStringifier;

	  })();

	}).call(this);


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDeclaration, XMLNode, create, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  isObject = __webpack_require__(87);

	  XMLNode = __webpack_require__(130);

	  module.exports = XMLDeclaration = (function(superClass) {
	    extend(XMLDeclaration, superClass);

	    function XMLDeclaration(parent, version, encoding, standalone) {
	      var ref;
	      XMLDeclaration.__super__.constructor.call(this, parent);
	      if (isObject(version)) {
	        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
	      }
	      if (!version) {
	        version = '1.0';
	      }
	      this.version = this.stringify.xmlVersion(version);
	      if (encoding != null) {
	        this.encoding = this.stringify.xmlEncoding(encoding);
	      }
	      if (standalone != null) {
	        this.standalone = this.stringify.xmlStandalone(standalone);
	      }
	    }

	    XMLDeclaration.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?xml';
	      r += ' version="' + this.version + '"';
	      if (this.encoding != null) {
	        r += ' encoding="' + this.encoding + '"';
	      }
	      if (this.standalone != null) {
	        r += ' standalone="' + this.standalone + '"';
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDeclaration;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssign = __webpack_require__(128),
	    baseCreate = __webpack_require__(129);

	/**
	 * Creates an object that inherits from the `prototype` object. If a
	 * `properties` object is given, its own enumerable string keyed properties
	 * are assigned to the created object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Object
	 * @param {Object} prototype The object to inherit from.
	 * @param {Object} [properties] The properties to assign to the object.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * function Shape() {
	 *   this.x = 0;
	 *   this.y = 0;
	 * }
	 *
	 * function Circle() {
	 *   Shape.call(this);
	 * }
	 *
	 * Circle.prototype = _.create(Shape.prototype, {
	 *   'constructor': Circle
	 * });
	 *
	 * var circle = new Circle;
	 * circle instanceof Circle;
	 * // => true
	 *
	 * circle instanceof Shape;
	 * // => true
	 */
	function create(prototype, properties) {
	  var result = baseCreate(prototype);
	  return properties == null ? result : baseAssign(result, properties);
	}

	module.exports = create;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(93),
	    keys = __webpack_require__(108);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(87);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isEmpty, isFunction, isObject,
	    hasProp = {}.hasOwnProperty;

	  isObject = __webpack_require__(87);

	  isFunction = __webpack_require__(80);

	  isEmpty = __webpack_require__(131);

	  XMLElement = null;

	  XMLCData = null;

	  XMLComment = null;

	  XMLDeclaration = null;

	  XMLDocType = null;

	  XMLRaw = null;

	  XMLText = null;

	  module.exports = XMLNode = (function() {
	    function XMLNode(parent) {
	      this.parent = parent;
	      this.options = this.parent.options;
	      this.stringify = this.parent.stringify;
	      if (XMLElement === null) {
	        XMLElement = __webpack_require__(138);
	        XMLCData = __webpack_require__(215);
	        XMLComment = __webpack_require__(216);
	        XMLDeclaration = __webpack_require__(126);
	        XMLDocType = __webpack_require__(217);
	        XMLRaw = __webpack_require__(222);
	        XMLText = __webpack_require__(223);
	      }
	    }

	    XMLNode.prototype.element = function(name, attributes, text) {
	      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
	      lastChild = null;
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (Array.isArray(name)) {
	        for (j = 0, len = name.length; j < len; j++) {
	          item = name[j];
	          lastChild = this.element(item);
	        }
	      } else if (isFunction(name)) {
	        lastChild = this.element(name.apply());
	      } else if (isObject(name)) {
	        for (key in name) {
	          if (!hasProp.call(name, key)) continue;
	          val = name[key];
	          if (isFunction(val)) {
	            val = val.apply();
	          }
	          if ((isObject(val)) && (isEmpty(val))) {
	            val = null;
	          }
	          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
	            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
	          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
	            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
	          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
	            for (k = 0, len1 = val.length; k < len1; k++) {
	              item = val[k];
	              childNode = {};
	              childNode[key] = item;
	              lastChild = this.element(childNode);
	            }
	          } else if (isObject(val)) {
	            lastChild = this.element(key);
	            lastChild.element(val);
	          } else {
	            lastChild = this.element(key, val);
	          }
	        }
	      } else {
	        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
	          lastChild = this.text(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
	          lastChild = this.cdata(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
	          lastChild = this.comment(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
	          lastChild = this.raw(text);
	        } else {
	          lastChild = this.node(name, attributes, text);
	        }
	      }
	      if (lastChild == null) {
	        throw new Error("Could not create any elements with: " + name);
	      }
	      return lastChild;
	    };

	    XMLNode.prototype.insertBefore = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.insertAfter = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i + 1);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.remove = function() {
	      var i, ref;
	      if (this.isRoot) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
	      return this.parent;
	    };

	    XMLNode.prototype.node = function(name, attributes, text) {
	      var child, ref;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      child = new XMLElement(this, name, attributes);
	      if (text != null) {
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };

	    XMLNode.prototype.text = function(value) {
	      var child;
	      child = new XMLText(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.raw = function(value) {
	      var child;
	      child = new XMLRaw(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.declaration = function(version, encoding, standalone) {
	      var doc, xmldec;
	      doc = this.document();
	      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
	      doc.xmldec = xmldec;
	      return doc.root();
	    };

	    XMLNode.prototype.doctype = function(pubID, sysID) {
	      var doc, doctype;
	      doc = this.document();
	      doctype = new XMLDocType(doc, pubID, sysID);
	      doc.doctype = doctype;
	      return doctype;
	    };

	    XMLNode.prototype.up = function() {
	      if (this.isRoot) {
	        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };

	    XMLNode.prototype.root = function() {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };

	    XMLNode.prototype.document = function() {
	      return this.root().documentObject;
	    };

	    XMLNode.prototype.end = function(options) {
	      return this.document().toString(options);
	    };

	    XMLNode.prototype.prev = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };

	    XMLNode.prototype.next = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };

	    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
	      var clonedRoot;
	      clonedRoot = xmlbuilder.root().clone();
	      clonedRoot.parent = this;
	      clonedRoot.isRoot = false;
	      this.children.push(clonedRoot);
	      return this;
	    };

	    XMLNode.prototype.ele = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.nod = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.txt = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.doc = function() {
	      return this.document();
	    };

	    XMLNode.prototype.dec = function(version, encoding, standalone) {
	      return this.declaration(version, encoding, standalone);
	    };

	    XMLNode.prototype.dtd = function(pubID, sysID) {
	      return this.doctype(pubID, sysID);
	    };

	    XMLNode.prototype.e = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.n = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.t = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.d = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.c = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.r = function(value) {
	      return this.raw(value);
	    };

	    XMLNode.prototype.u = function() {
	      return this.up();
	    };

	    return XMLNode;

	  })();

	}).call(this);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(121),
	    getTag = __webpack_require__(132),
	    isArguments = __webpack_require__(111),
	    isArray = __webpack_require__(114),
	    isArrayLike = __webpack_require__(104),
	    isBuffer = __webpack_require__(115),
	    isPrototype = __webpack_require__(107),
	    isTypedArray = __webpack_require__(117);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(133),
	    Map = __webpack_require__(134),
	    Promise = __webpack_require__(135),
	    Set = __webpack_require__(136),
	    WeakMap = __webpack_require__(137),
	    baseGetTag = __webpack_require__(81),
	    toSource = __webpack_require__(90);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78),
	    root = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78),
	    root = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78),
	    root = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78),
	    root = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78),
	    root = __webpack_require__(83);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isFunction, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  isObject = __webpack_require__(87);

	  isFunction = __webpack_require__(80);

	  every = __webpack_require__(139);

	  XMLNode = __webpack_require__(130);

	  XMLAttribute = __webpack_require__(213);

	  XMLProcessingInstruction = __webpack_require__(214);

	  module.exports = XMLElement = (function(superClass) {
	    extend(XMLElement, superClass);

	    function XMLElement(parent, name, attributes) {
	      XMLElement.__super__.constructor.call(this, parent);
	      if (name == null) {
	        throw new Error("Missing element name");
	      }
	      this.name = this.stringify.eleName(name);
	      this.children = [];
	      this.instructions = [];
	      this.attributes = {};
	      if (attributes != null) {
	        this.attribute(attributes);
	      }
	    }

	    XMLElement.prototype.clone = function() {
	      var att, attName, clonedSelf, i, len, pi, ref, ref1;
	      clonedSelf = create(XMLElement.prototype, this);
	      if (clonedSelf.isRoot) {
	        clonedSelf.documentObject = null;
	      }
	      clonedSelf.attributes = {};
	      ref = this.attributes;
	      for (attName in ref) {
	        if (!hasProp.call(ref, attName)) continue;
	        att = ref[attName];
	        clonedSelf.attributes[attName] = att.clone();
	      }
	      clonedSelf.instructions = [];
	      ref1 = this.instructions;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        pi = ref1[i];
	        clonedSelf.instructions.push(pi.clone());
	      }
	      clonedSelf.children = [];
	      this.children.forEach(function(child) {
	        var clonedChild;
	        clonedChild = child.clone();
	        clonedChild.parent = clonedSelf;
	        return clonedSelf.children.push(clonedChild);
	      });
	      return clonedSelf;
	    };

	    XMLElement.prototype.attribute = function(name, value) {
	      var attName, attValue;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isObject(name)) {
	        for (attName in name) {
	          if (!hasProp.call(name, attName)) continue;
	          attValue = name[attName];
	          this.attribute(attName, attValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        if (!this.options.skipNullAttributes || (value != null)) {
	          this.attributes[name] = new XMLAttribute(this, name, value);
	        }
	      }
	      return this;
	    };

	    XMLElement.prototype.removeAttribute = function(name) {
	      var attName, i, len;
	      if (name == null) {
	        throw new Error("Missing attribute name");
	      }
	      name = name.valueOf();
	      if (Array.isArray(name)) {
	        for (i = 0, len = name.length; i < len; i++) {
	          attName = name[i];
	          delete this.attributes[attName];
	        }
	      } else {
	        delete this.attributes[name];
	      }
	      return this;
	    };

	    XMLElement.prototype.instruction = function(target, value) {
	      var i, insTarget, insValue, instruction, len;
	      if (target != null) {
	        target = target.valueOf();
	      }
	      if (value != null) {
	        value = value.valueOf();
	      }
	      if (Array.isArray(target)) {
	        for (i = 0, len = target.length; i < len; i++) {
	          insTarget = target[i];
	          this.instruction(insTarget);
	        }
	      } else if (isObject(target)) {
	        for (insTarget in target) {
	          if (!hasProp.call(target, insTarget)) continue;
	          insValue = target[insTarget];
	          this.instruction(insTarget, insValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        instruction = new XMLProcessingInstruction(this, target, value);
	        this.instructions.push(instruction);
	      }
	      return this;
	    };

	    XMLElement.prototype.toString = function(options, level) {
	      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      ref3 = this.instructions;
	      for (i = 0, len = ref3.length; i < len; i++) {
	        instruction = ref3[i];
	        r += instruction.toString(options, level);
	      }
	      if (pretty) {
	        r += space;
	      }
	      r += '<' + this.name;
	      ref4 = this.attributes;
	      for (name in ref4) {
	        if (!hasProp.call(ref4, name)) continue;
	        att = ref4[name];
	        r += att.toString(options);
	      }
	      if (this.children.length === 0 || every(this.children, function(e) {
	        return e.value === '';
	      })) {
	        r += '/>';
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        ref5 = this.children;
	        for (j = 0, len1 = ref5.length; j < len1; j++) {
	          child = ref5[j];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };

	    XMLElement.prototype.att = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLElement.prototype.a = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.i = function(target, value) {
	      return this.instruction(target, value);
	    };

	    return XMLElement;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEvery = __webpack_require__(140),
	    baseEvery = __webpack_require__(141),
	    baseIteratee = __webpack_require__(147),
	    isArray = __webpack_require__(114),
	    isIterateeCall = __webpack_require__(103);

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}

	module.exports = every;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = arrayEvery;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(142);

	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	module.exports = baseEvery;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(143),
	    createBaseEach = __webpack_require__(146);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(144),
	    keys = __webpack_require__(108);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(145);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(104);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(148),
	    baseMatchesProperty = __webpack_require__(194),
	    identity = __webpack_require__(96),
	    isArray = __webpack_require__(114),
	    property = __webpack_require__(210);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(149),
	    getMatchData = __webpack_require__(191),
	    matchesStrictComparable = __webpack_require__(193);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(150),
	    baseIsEqual = __webpack_require__(178);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(151),
	    stackClear = __webpack_require__(158),
	    stackDelete = __webpack_require__(159),
	    stackGet = __webpack_require__(160),
	    stackHas = __webpack_require__(161),
	    stackSet = __webpack_require__(162);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(152),
	    listCacheDelete = __webpack_require__(153),
	    listCacheGet = __webpack_require__(155),
	    listCacheHas = __webpack_require__(156),
	    listCacheSet = __webpack_require__(157);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(154);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(92);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(154);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(154);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(154);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(151);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(151),
	    Map = __webpack_require__(134),
	    MapCache = __webpack_require__(163);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(164),
	    mapCacheDelete = __webpack_require__(172),
	    mapCacheGet = __webpack_require__(175),
	    mapCacheHas = __webpack_require__(176),
	    mapCacheSet = __webpack_require__(177);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(165),
	    ListCache = __webpack_require__(151),
	    Map = __webpack_require__(134);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(166),
	    hashDelete = __webpack_require__(168),
	    hashGet = __webpack_require__(169),
	    hashHas = __webpack_require__(170),
	    hashSet = __webpack_require__(171);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(167);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(78);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(167);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(167);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(167);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(173);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(174);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 174 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(173);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(173);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(173);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(179),
	    isObject = __webpack_require__(87),
	    isObjectLike = __webpack_require__(113);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(150),
	    equalArrays = __webpack_require__(180),
	    equalByTag = __webpack_require__(186),
	    equalObjects = __webpack_require__(190),
	    getTag = __webpack_require__(132),
	    isArray = __webpack_require__(114),
	    isBuffer = __webpack_require__(115),
	    isTypedArray = __webpack_require__(117);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(181),
	    arraySome = __webpack_require__(184),
	    cacheHas = __webpack_require__(185);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(163),
	    setCacheAdd = __webpack_require__(182),
	    setCacheHas = __webpack_require__(183);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 184 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(82),
	    Uint8Array = __webpack_require__(187),
	    eq = __webpack_require__(92),
	    equalArrays = __webpack_require__(180),
	    mapToArray = __webpack_require__(188),
	    setToArray = __webpack_require__(189);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(108);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(192),
	    keys = __webpack_require__(108);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(87);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 193 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(178),
	    get = __webpack_require__(195),
	    hasIn = __webpack_require__(207),
	    isKey = __webpack_require__(198),
	    isStrictComparable = __webpack_require__(192),
	    matchesStrictComparable = __webpack_require__(193),
	    toKey = __webpack_require__(206);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(196);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(197),
	    toKey = __webpack_require__(206);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(114),
	    isKey = __webpack_require__(198),
	    stringToPath = __webpack_require__(200),
	    toString = __webpack_require__(203);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(114),
	    isSymbol = __webpack_require__(199);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(81),
	    isObjectLike = __webpack_require__(113);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(201);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(202);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(163);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(204);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(82),
	    arrayMap = __webpack_require__(205),
	    isArray = __webpack_require__(114),
	    isSymbol = __webpack_require__(199);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 205 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(199);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(208),
	    hasPath = __webpack_require__(209);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 208 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(197),
	    isArguments = __webpack_require__(111),
	    isArray = __webpack_require__(114),
	    isIndex = __webpack_require__(106),
	    isLength = __webpack_require__(105),
	    toKey = __webpack_require__(206);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(211),
	    basePropertyDeep = __webpack_require__(212),
	    isKey = __webpack_require__(198),
	    toKey = __webpack_require__(206);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 211 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(196);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, create;

	  create = __webpack_require__(127);

	  module.exports = XMLAttribute = (function() {
	    function XMLAttribute(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing attribute name of element " + parent.name);
	      }
	      if (value == null) {
	        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
	      }
	      this.name = this.stringify.attName(name);
	      this.value = this.stringify.attValue(value);
	    }

	    XMLAttribute.prototype.clone = function() {
	      return create(XMLAttribute.prototype, this);
	    };

	    XMLAttribute.prototype.toString = function(options, level) {
	      return ' ' + this.name + '="' + this.value + '"';
	    };

	    return XMLAttribute;

	  })();

	}).call(this);


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLProcessingInstruction, create;

	  create = __webpack_require__(127);

	  module.exports = XMLProcessingInstruction = (function() {
	    function XMLProcessingInstruction(parent, target, value) {
	      this.stringify = parent.stringify;
	      if (target == null) {
	        throw new Error("Missing instruction target");
	      }
	      this.target = this.stringify.insTarget(target);
	      if (value) {
	        this.value = this.stringify.insValue(value);
	      }
	    }

	    XMLProcessingInstruction.prototype.clone = function() {
	      return create(XMLProcessingInstruction.prototype, this);
	    };

	    XMLProcessingInstruction.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?';
	      r += this.target;
	      if (this.value) {
	        r += ' ' + this.value;
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLProcessingInstruction;

	  })();

	}).call(this);


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  XMLNode = __webpack_require__(130);

	  module.exports = XMLCData = (function(superClass) {
	    extend(XMLCData, superClass);

	    function XMLCData(parent, text) {
	      XMLCData.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing CDATA text");
	      }
	      this.text = this.stringify.cdata(text);
	    }

	    XMLCData.prototype.clone = function() {
	      return create(XMLCData.prototype, this);
	    };

	    XMLCData.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<![CDATA[' + this.text + ']]>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLCData;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLComment, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  XMLNode = __webpack_require__(130);

	  module.exports = XMLComment = (function(superClass) {
	    extend(XMLComment, superClass);

	    function XMLComment(parent, text) {
	      XMLComment.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing comment text");
	      }
	      this.text = this.stringify.comment(text);
	    }

	    XMLComment.prototype.clone = function() {
	      return create(XMLComment.prototype, this);
	    };

	    XMLComment.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!-- ' + this.text + ' -->';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLComment;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

	  create = __webpack_require__(127);

	  isObject = __webpack_require__(87);

	  XMLCData = __webpack_require__(215);

	  XMLComment = __webpack_require__(216);

	  XMLDTDAttList = __webpack_require__(218);

	  XMLDTDEntity = __webpack_require__(219);

	  XMLDTDElement = __webpack_require__(220);

	  XMLDTDNotation = __webpack_require__(221);

	  XMLProcessingInstruction = __webpack_require__(214);

	  module.exports = XMLDocType = (function() {
	    function XMLDocType(parent, pubID, sysID) {
	      var ref, ref1;
	      this.documentObject = parent;
	      this.stringify = this.documentObject.stringify;
	      this.children = [];
	      if (isObject(pubID)) {
	        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
	      }
	      if (sysID == null) {
	        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
	      }
	      if (pubID != null) {
	        this.pubID = this.stringify.dtdPubID(pubID);
	      }
	      if (sysID != null) {
	        this.sysID = this.stringify.dtdSysID(sysID);
	      }
	    }

	    XMLDocType.prototype.element = function(name, value) {
	      var child;
	      child = new XMLDTDElement(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      var child;
	      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.entity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, false, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.pEntity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, true, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.notation = function(name, value) {
	      var child;
	      child = new XMLDTDNotation(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.instruction = function(target, value) {
	      var child;
	      child = new XMLProcessingInstruction(this, target, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.root = function() {
	      return this.documentObject.root();
	    };

	    XMLDocType.prototype.document = function() {
	      return this.documentObject;
	    };

	    XMLDocType.prototype.toString = function(options, level) {
	      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!DOCTYPE ' + this.root().name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      if (this.children.length > 0) {
	        r += ' [';
	        if (pretty) {
	          r += newline;
	        }
	        ref3 = this.children;
	        for (i = 0, len = ref3.length; i < len; i++) {
	          child = ref3[i];
	          r += child.toString(options, level + 1);
	        }
	        r += ']';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    XMLDocType.prototype.ele = function(name, value) {
	      return this.element(name, value);
	    };

	    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
	    };

	    XMLDocType.prototype.ent = function(name, value) {
	      return this.entity(name, value);
	    };

	    XMLDocType.prototype.pent = function(name, value) {
	      return this.pEntity(name, value);
	    };

	    XMLDocType.prototype.not = function(name, value) {
	      return this.notation(name, value);
	    };

	    XMLDocType.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLDocType.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLDocType.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLDocType.prototype.up = function() {
	      return this.root();
	    };

	    XMLDocType.prototype.doc = function() {
	      return this.document();
	    };

	    return XMLDocType;

	  })();

	}).call(this);


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDAttList, create;

	  create = __webpack_require__(127);

	  module.exports = XMLDTDAttList = (function() {
	    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      this.stringify = parent.stringify;
	      if (elementName == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (attributeName == null) {
	        throw new Error("Missing DTD attribute name");
	      }
	      if (!attributeType) {
	        throw new Error("Missing DTD attribute type");
	      }
	      if (!defaultValueType) {
	        throw new Error("Missing DTD attribute default");
	      }
	      if (defaultValueType.indexOf('#') !== 0) {
	        defaultValueType = '#' + defaultValueType;
	      }
	      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
	        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
	      }
	      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
	        throw new Error("Default value only applies to #FIXED or #DEFAULT");
	      }
	      this.elementName = this.stringify.eleName(elementName);
	      this.attributeName = this.stringify.attName(attributeName);
	      this.attributeType = this.stringify.dtdAttType(attributeType);
	      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
	      this.defaultValueType = defaultValueType;
	    }

	    XMLDTDAttList.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
	      if (this.defaultValueType !== '#DEFAULT') {
	        r += ' ' + this.defaultValueType;
	      }
	      if (this.defaultValue) {
	        r += ' "' + this.defaultValue + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDAttList;

	  })();

	}).call(this);


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDEntity, create, isObject;

	  create = __webpack_require__(127);

	  isObject = __webpack_require__(87);

	  module.exports = XMLDTDEntity = (function() {
	    function XMLDTDEntity(parent, pe, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing entity name");
	      }
	      if (value == null) {
	        throw new Error("Missing entity value");
	      }
	      this.pe = !!pe;
	      this.name = this.stringify.eleName(name);
	      if (!isObject(value)) {
	        this.value = this.stringify.dtdEntityValue(value);
	      } else {
	        if (!value.pubID && !value.sysID) {
	          throw new Error("Public and/or system identifiers are required for an external entity");
	        }
	        if (value.pubID && !value.sysID) {
	          throw new Error("System identifier is required for a public external entity");
	        }
	        if (value.pubID != null) {
	          this.pubID = this.stringify.dtdPubID(value.pubID);
	        }
	        if (value.sysID != null) {
	          this.sysID = this.stringify.dtdSysID(value.sysID);
	        }
	        if (value.nData != null) {
	          this.nData = this.stringify.dtdNData(value.nData);
	        }
	        if (this.pe && this.nData) {
	          throw new Error("Notation declaration is not allowed in a parameter entity");
	        }
	      }
	    }

	    XMLDTDEntity.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ENTITY';
	      if (this.pe) {
	        r += ' %';
	      }
	      r += ' ' + this.name;
	      if (this.value) {
	        r += ' "' + this.value + '"';
	      } else {
	        if (this.pubID && this.sysID) {
	          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	        } else if (this.sysID) {
	          r += ' SYSTEM "' + this.sysID + '"';
	        }
	        if (this.nData) {
	          r += ' NDATA ' + this.nData;
	        }
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDEntity;

	  })();

	}).call(this);


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDElement, create;

	  create = __webpack_require__(127);

	  module.exports = XMLDTDElement = (function() {
	    function XMLDTDElement(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (!value) {
	        value = '(#PCDATA)';
	      }
	      if (Array.isArray(value)) {
	        value = '(' + value.join(',') + ')';
	      }
	      this.name = this.stringify.eleName(name);
	      this.value = this.stringify.dtdElementValue(value);
	    }

	    XMLDTDElement.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDElement;

	  })();

	}).call(this);


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDNotation, create;

	  create = __webpack_require__(127);

	  module.exports = XMLDTDNotation = (function() {
	    function XMLDTDNotation(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing notation name");
	      }
	      if (!value.pubID && !value.sysID) {
	        throw new Error("Public or system identifiers are required for an external entity");
	      }
	      this.name = this.stringify.eleName(name);
	      if (value.pubID != null) {
	        this.pubID = this.stringify.dtdPubID(value.pubID);
	      }
	      if (value.sysID != null) {
	        this.sysID = this.stringify.dtdSysID(value.sysID);
	      }
	    }

	    XMLDTDNotation.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!NOTATION ' + this.name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.pubID) {
	        r += ' PUBLIC "' + this.pubID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDNotation;

	  })();

	}).call(this);


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLRaw, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  XMLNode = __webpack_require__(130);

	  module.exports = XMLRaw = (function(superClass) {
	    extend(XMLRaw, superClass);

	    function XMLRaw(parent, text) {
	      XMLRaw.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing raw text");
	      }
	      this.value = this.stringify.raw(text);
	    }

	    XMLRaw.prototype.clone = function() {
	      return create(XMLRaw.prototype, this);
	    };

	    XMLRaw.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLRaw;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLText, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(127);

	  XMLNode = __webpack_require__(130);

	  module.exports = XMLText = (function(superClass) {
	    extend(XMLText, superClass);

	    function XMLText(parent, text) {
	      XMLText.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing element text");
	      }
	      this.value = this.stringify.eleText(text);
	    }

	    XMLText.prototype.clone = function() {
	      return create(XMLText.prototype, this);
	    };

	    XMLText.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLText;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 224 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  exports.stripBOM = function(str) {
	    if (str[0] === '\uFEFF') {
	      return str.substring(1);
	    } else {
	      return str;
	    }
	  };

	}).call(this);


/***/ },
/* 225 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  var prefixMatch;

	  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

	  exports.normalize = function(str) {
	    return str.toLowerCase();
	  };

	  exports.firstCharLowerCase = function(str) {
	    return str.charAt(0).toLowerCase() + str.slice(1);
	  };

	  exports.stripPrefix = function(str) {
	    return str.replace(prefixMatch, '');
	  };

	  exports.parseNumbers = function(str) {
	    if (!isNaN(str)) {
	      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
	    }
	    return str;
	  };

	  exports.parseBooleans = function(str) {
	    if (/^(?:true|false)$/i.test(str)) {
	      str = str.toLowerCase() === 'true';
	    }
	    return str;
	  };

	}).call(this);


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Process class to manage/run workflow rule and approval process
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var _ = __webpack_require__(10),
	    Promise = __webpack_require__(12),
	    Conneciton = __webpack_require__(4);

	/**
	 * A class which manages process rules and approval processes
	 *
	 * @class
	 * @param {Connection} conn - Connection object
	 */
	var Process = module.exports = function(conn) {
	  /**
	   * Object which mangages process rules
	   * @member {Process~ProcessRule} Process#rule
	   */
	  this.rule = new ProcessRule(conn);
	  /**
	   * Object which mangages approval process
	   * @member {Process~ApprovalProcess} Process#approval
	   */
	  this.approval = new ApprovalProcess(conn);
	};

	/**
	 * A class which manages process (workflow) rules
	 *
	 * @class Process~ProcessRule
	 * @param {Connection} conn - Connection object
	 */
	var ProcessRule = function(conn) {
	  this._conn = conn;
	};

	/**
	 * @typedef {Object} Process~ProcessRuleDefinition
	 * @prop {String} id - Id of approval process definition
	 * @prop {String} name - Name of process rule definition
	 * @prop {String} object - SObject name which process rule is defined
	 */

	/**
	 * Get all process rule definitions registered to sobjects
	 *
	 * @method Process~ProcessRule#list
	 * @param {Callback.<Map.<String, Array.<Process~ProcessRuleDefinition>>>} [callback] - Callback function
	 * @returns {Promise.<Map.<String, Array.<Process~ProcessRuleDefinition>>>}
	 */
	ProcessRule.prototype.list = function(callback) {
	  return this._conn.request("/process/rules").then(function(res) {
	    return res.rules;
	  }).thenCall(callback);
	};


	/**
	 * @typedef {Object} Process~ProcessRuleTriggerResult
	 * @prop {Boolean} success - Is process rule trigger succeeded or not
	 * @prop {Array.<Object>} errors - Array of errors returned if the request failed
	 */

	/**
	 * Trigger process rule for given entities
	 *
	 * @method Process~ProcessRule#trigger
	 * @param {String|Array.<String>} contextIds - Entity ID(s) to trigger workflow process
	 * @param {Callback.<Process~ProcessRuleTriggerResult>} [callback] - Callback function
	 * @returns {Promise.<Process~ProcessRuleTriggerResult>}
	 */
	ProcessRule.prototype.trigger = function(contextIds, callback) {
	  contextIds = _.isArray(contextIds) ? contextIds : [ contextIds ];
	  return this._conn.request({
	    method: "POST",
	    url: "/process/rules/",
	    body: JSON.stringify({
	      contextIds: contextIds
	    }),
	    headers: {
	      "content-type": "application/json"
	    }
	  }).thenCall(callback);
	};

	/**
	 * A class which manages approval processes
	 *
	 * @class Process~ApprovalProcess
	 * @param {Connection} conn - Connection object
	 */
	var ApprovalProcess = function(conn) {
	  this._conn = conn;
	};

	/**
	 * @typedef {Object} Process~ApprovalProcessDefinition
	 * @prop {String} id - Id of approval process definition
	 * @prop {String} name - Name of approval process definition
	 * @prop {String} object - SObject name which approval process is defined
	 * @prop {Number} sortOrder - Processing order of approval in SObject
	 */
	/**
	 * Get all approval process definitions registered to sobjects
	 *
	 * @method Process~ApprovalProcess#list
	 * @param {Callback.<Map.<String, Array.<ApprovalProcessDefinition>>>} [callback] - Callback function
	 * @returns {Promise.<Map.<String, Array.<ApprovalProcessDefinition>>>}
	 */
	ApprovalProcess.prototype.list = function(callback) {
	  return this._conn.request("/process/approvals").then(function(res) {
	    return res.approvals;
	  }).thenCall(callback);
	};

	/**
	 * @typedef {Object} Process~ApprovalProcessRequestResult
	 * @prop {Boolean} success - True if processing or approval completed successfully
	 * @prop {Array.<Object>} errors - The set of errors returned if the request failed
	 * @prop {Array.<String>} actorIds - IDs of the users who are currently assigned to this approval step
	 * @prop {String} entityId - Object being processed
	 * @prop {String} instanceId - ID of the ProcessInstance associated with the object submitted for processing
	 * @prop {String} instanceStatus - Status of the current process instance (not an individual object but the entire process instance)
	 * @prop {Array.<String>} newWorkItemIds - Case-insensitive IDs that point to ProcessInstanceWorkitem items (the set of pending approval requests)
	 */

	/**
	 * Send bulk requests for approval process
	 *
	 * @method Process~ApprovalProcess#request
	 * @param {Array.<ApprovalProcessRequest>} requests - Array of approval process request to send
	 * @param {Callback.<Array.<ApprovalProcessRequestResult>>} - Callback function
	 * @param {Promise.<Array.<ApprovalProcessRequestResult>>}
	 */
	ApprovalProcess.prototype.request = function(requests, callback) {
	  requests = requests.map(function(req) {
	    return req._request ? req._request : req;
	  });
	  return this._conn.request({
	    method: 'POST',
	    url: '/process/approvals',
	    headers: { "content-type": "application/json" },
	    body: JSON.stringify({ requests: requests })
	  }).thenCall(callback);
	};

	/**
	 * Create approval process request
	 *
	 * @private
	 */
	ApprovalProcess.prototype._createRequest = function(actionType, contextId, comments, options, callback) {
	  if (typeof comments === "function") {
	    callback = comments;
	    options = null;
	    comments = null;
	  }
	  if (typeof options === "function") {
	    callback = options;
	    options = null;
	  }
	  options = options || {};
	  var request = {
	    actionType: actionType,
	    contextId: contextId,
	    comments: comments
	  };
	  _.extend(request, options);
	  return new ApprovalProcessRequest(this, request).thenCall(callback);
	};

	/**
	 * Submit approval request for an item
	 *
	 * @method Process~ApprovalProcess#submit
	 * @param {String} contextId - ID of the item that is being acted upon
	 * @param {String} [comments] - Comment to add to the history step associated with this request
	 * @param {Object} [options] - Request parameters
	 * @param {Array.<String>} [options.nextApproverIds] - If the process requires specification of the next approval, the ID of the user to be assigned the next request
	 * @param {String} [options.processDefinitionNameOrId] - Developer name or ID of the process definition
	 * @param {Boolean} [options.skipEntryCriteria] - Determines whether to evaluate the entry criteria for the process (true) or not (false) if the process definition name or ID isn’t null
	 * @param {Callback.<ApprovalProcessRequestResult>} [callback] - Callback function
	 * @returns {ApprovalProcessRequest}
	 */
	ApprovalProcess.prototype.submit = function(contextId, comments, options, callback) {
	  return this._createRequest("Submit", contextId, comments, options, callback);
	};

	/**
	 * Approve approval request for an item
	 *
	 * @method Process~ApprovalProcess#approve
	 * @param {String} workitemId - ID of the item that is being acted upon
	 * @param {String} [comments] - Comment to add to the history step associated with this request
	 * @param {Object} [options] - Request parameters
	 * @param {Array.<String>} [options.nextApproverIds] - If the process requires specification of the next approval, the ID of the user to be assigned the next request
	 * @param {String} [options.processDefinitionNameOrId] - Developer name or ID of the process definition
	 * @param {Boolean} [options.skipEntryCriteria] - Determines whether to evaluate the entry criteria for the process (true) or not (false) if the process definition name or ID isn’t null
	 * @param {Callback.<ApprovalProcessRequestResult>} [callback] - Callback function
	 * @returns {ApprovalProcessRequest}
	 */
	ApprovalProcess.prototype.approve = function(workitemId, comments, options, callback) {
	  return this._createRequest("Approve", workitemId, comments, options, callback);
	};

	/**
	 * Reject approval request for an item
	 *
	 * @method Process~ApprovalProcess#reject
	 * @param {String} workitemId - ID of the item that is being acted upon
	 * @param {String} [comments] - Comment to add to the history step associated with this request
	 * @param {Object} [options] - Request parameters
	 * @param {Array.<String>} [options.nextApproverIds] - If the process requires specification of the next approval, the ID of the user to be assigned the next request
	 * @param {String} [options.processDefinitionNameOrId] - Developer name or ID of the process definition
	 * @param {Boolean} [options.skipEntryCriteria] - Determines whether to evaluate the entry criteria for the process (true) or not (false) if the process definition name or ID isn’t null
	 * @param {Callback.<ApprovalProcessRequestResult>} [callback] - Callback function
	 * @returns {ApprovalProcessRequest}
	 */
	ApprovalProcess.prototype.reject = function(workitemId, comments, options, callback) {
	  return this._createRequest("Reject", workitemId, comments, options, callback);
	};

	/**
	 * A class representing approval process request
	 *
	 * @protected
	 * @class Process~ApprovalProcessRequest
	 * @implements {Promise.<Process~ApprovalProcessRequestResult>}
	 * @param {Process~ApprovalProcess} process - ApprovalProcess
	 * @param {Object} request - Request parameters
	 * @param {String} request.actionType - Represents the kind of action to take: Submit, Approve, or Reject
	 * @param {String} request.contextId - ID of the item that is being acted upon
	 * @param {String} request.comments - Comment to add to the history step associated with this request
	 * @param {Array.<String>} [request.nextApproverIds] - If the process requires specification of the next approval, the ID of the user to be assigned the next request
	 * @param {String} [request.processDefinitionNameOrId] - Developer name or ID of the process definition
	 * @param {Boolean} [request.skipEntryCriteria] - Determines whether to evaluate the entry criteria for the process (true) or not (false) if the process definition name or ID isn’t null
	 */
	var ApprovalProcessRequest = function(process, request) {
	  this._process = process;
	  this._request = request;
	};

	/**
	 * Promise/A+ interface
	 * http://promises-aplus.github.io/promises-spec/
	 *
	 * @method Process~ApprovalProcessRequest#then
	 */
	ApprovalProcessRequest.prototype.then = function(onResolve, onReject) {
	  if (!this._promise) {
	    this._promise = this._process.request([ this ]).then(function(rets) {
	      return rets[0];
	    });
	  }
	  this._promise.then(onResolve, onReject);
	};

	/**
	 * Promise/A+ extension
	 * Call "then" using given node-style callback function
	 *
	 * @method Process~ApprovalProcessRequest#thenCall
	 */
	ApprovalProcessRequest.prototype.thenCall = function(callback) {
	  return callback ? this.then(function(res) {
	    callback(null, res);
	  }, function(err) {
	    callback(err);
	  }) :
	  this;
	};


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var required = __webpack_require__(228);

	module.exports = function(name) {
	  if (name === './jsforce' || name === 'jsforce') {
	    name = './core';
	  }
	  var m = required[name];
	  if (typeof m === 'undefined') {
	    throw new Error("Cannot find module '" + name + "'");
	  }
	  return m;
	};


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// This file content is dynamically created in build script
	"use strict";
	module.exports = {
	  'inherits': __webpack_require__(9),
	  'util': __webpack_require__(59),
	  'events': __webpack_require__(2),
	  'lodash/core': __webpack_require__(10),
	  'readable-stream': __webpack_require__(24),
	  'multistream': __webpack_require__(229),
	  './VERSION': __webpack_require__(3),
	  './cache': __webpack_require__(68),
	  './connection': __webpack_require__(4),
	  './core': __webpack_require__(1),
	  './csv': __webpack_require__(57),
	  './date': __webpack_require__(54),
	  './http-api': __webpack_require__(70),
	  './logger': __webpack_require__(17),
	  './oauth2': __webpack_require__(18),
	  './process': __webpack_require__(226),
	  './promise': __webpack_require__(12),
	  './query': __webpack_require__(53),
	  './quick-action': __webpack_require__(69),
	  './record-stream': __webpack_require__(56),
	  './record': __webpack_require__(67),
	  './soap': __webpack_require__(230),
	  './sobject': __webpack_require__(66),
	  './soql-builder': __webpack_require__(55),
	  './transport': __webpack_require__(22)
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = MultiStream

	var inherits = __webpack_require__(9)
	var stream = __webpack_require__(24)

	inherits(MultiStream, stream.Readable)

	function MultiStream (streams, opts) {
	  var self = this
	  if (!(self instanceof MultiStream)) return new MultiStream(streams, opts)
	  stream.Readable.call(self, opts)

	  self.destroyed = false

	  self._drained = false
	  self._forwarding = false
	  self._current = null

	  if (typeof streams === 'function') {
	    self._queue = streams
	  } else {
	    self._queue = streams.map(toStreams2)
	    self._queue.forEach(function (stream) {
	      if (typeof stream !== 'function') self._attachErrorListener(stream)
	    })
	  }

	  self._next()
	}

	MultiStream.obj = function (streams) {
	  return new MultiStream(streams, { objectMode: true, highWaterMark: 16 })
	}

	MultiStream.prototype._read = function () {
	  this._drained = true
	  this._forward()
	}

	MultiStream.prototype._forward = function () {
	  if (this._forwarding || !this._drained || !this._current) return
	  this._forwarding = true

	  var chunk
	  while ((chunk = this._current.read()) !== null) {
	    this._drained = this.push(chunk)
	  }

	  this._forwarding = false
	}

	MultiStream.prototype.destroy = function (err) {
	  if (this.destroyed) return
	  this.destroyed = true

	  if (this._current && this._current.destroy) this._current.destroy()
	  if (typeof this._queue !== 'function') {
	    this._queue.forEach(function (stream) {
	      if (stream.destroy) stream.destroy()
	    })
	  }

	  if (err) this.emit('error', err)
	  this.emit('close')
	}

	MultiStream.prototype._next = function () {
	  var self = this
	  self._current = null

	  if (typeof self._queue === 'function') {
	    self._queue(function (err, stream) {
	      if (err) return self.destroy(err)
	      stream = toStreams2(stream)
	      self._attachErrorListener(stream)
	      self._gotNextStream(stream)
	    })
	  } else {
	    var stream = self._queue.shift()
	    if (typeof stream === 'function') {
	      stream = toStreams2(stream())
	      self._attachErrorListener(stream)
	    }
	    self._gotNextStream(stream)
	  }
	}

	MultiStream.prototype._gotNextStream = function (stream) {
	  var self = this

	  if (!stream) {
	    self.push(null)
	    self.destroy()
	    return
	  }

	  self._current = stream
	  self._forward()

	  stream.on('readable', onReadable)
	  stream.once('end', onEnd)
	  stream.once('close', onClose)

	  function onReadable () {
	    self._forward()
	  }

	  function onClose () {
	    if (!stream._readableState.ended) {
	      self.destroy()
	    }
	  }

	  function onEnd () {
	    self._current = null
	    stream.removeListener('readable', onReadable)
	    stream.removeListener('end', onEnd)
	    stream.removeListener('close', onClose)
	    self._next()
	  }
	}

	MultiStream.prototype._attachErrorListener = function (stream) {
	  var self = this
	  if (!stream) return

	  stream.once('error', onError)

	  function onError (err) {
	    stream.removeListener('error', onError)
	    self.destroy(err)
	  }
	}

	function toStreams2 (s) {
	  if (!s || typeof s === 'function' || s._readableState) return s

	  var wrap = new stream.Readable().wrap(s)
	  if (s.destroy) {
	    wrap.destroy = s.destroy.bind(s)
	  }
	  return wrap
	}


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Manages method call to SOAP endpoint
	 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
	 */

	'use strict';

	var inherits = __webpack_require__(9),
	    _ = __webpack_require__(10),
	    xml2js = __webpack_require__(71),
	    HttpApi = __webpack_require__(70);


	/**
	 * Class for SOAP endpoint of Salesforce
	 *
	 * @protected
	 * @class
	 * @constructor
	 * @param {Connection} conn - Connection instance
	 * @param {Object} options - SOAP endpoint setting options
	 * @param {String} options.endpointUrl - SOAP endpoint URL
	 * @param {String} [options.xmlns] - XML namespace for method call (default is "urn:partner.soap.sforce.com")
	 */
	var SOAP = module.exports = function(conn, options) {
	  SOAP.super_.apply(this, arguments);
	  this._endpointUrl = options.endpointUrl;
	  this._xmlns = options.xmlns || 'urn:partner.soap.sforce.com';
	};

	inherits(SOAP, HttpApi);

	/**
	 * Invoke SOAP call using method and arguments
	 *
	 * @param {String} method - Method name
	 * @param {Object} args - Arguments for the method call
	 * @param {Object} [schema] - Schema definition of response message
	 * @param {Callback.<Object>} [callback] - Callback function
	 * @returns {Promise.<Object>}
	 */
	SOAP.prototype.invoke = function(method, args, schema, callback) {
	  if (typeof schema === 'function') {
	    callback = schema;
	    schema = null;
	  }
	  var message = {};
	  message[method] = args;
	  return this.request({
	    method: 'POST',
	    url: this._endpointUrl,
	    headers: {
	      'Content-Type': 'text/xml',
	      'SOAPAction': '""'
	    },
	    message: message
	  }).then(function(res) {
	    return schema ? convertType(res, schema) : res;
	  }).thenCall(callback);
	};

	/* @private */
	function convertType(value, schema) {
	  if (_.isArray(value)) {
	    return value.map(function(v) {
	      return convertType(v, schema && schema[0])
	    });
	  } else if (_.isObject(value)) {
	    if (value.$ && value.$['xsi:nil'] === 'true') {
	      return null;
	    } else if (_.isArray(schema)) {
	      return [ convertType(value, schema[0]) ];
	    } else {
	      var o = {};
	      for (var key in value) {
	        o[key] = convertType(value[key], schema && schema[key]);
	      }
	      return o;
	    }
	  } else {
	    if (_.isArray(schema)) {
	      return [ convertType(value, schema[0]) ];
	    } else if (_.isObject(schema)) {
	      return {};
	    } else {
	      switch(schema) {
	        case 'string':
	          return String(value);
	        case 'number':
	          return Number(value);
	        case 'boolean':
	          return value === 'true';
	        default:
	          return value;
	      }
	    }
	  }
	}

	/** @override **/
	SOAP.prototype.beforeSend = function(request) {
	  request.body = this._createEnvelope(request.message);
	};

	/** @override **/
	SOAP.prototype.isSessionExpired = function(response) {
	  return response.statusCode === 500 &&
	    /<faultcode>[a-zA-Z]+:INVALID_SESSION_ID<\/faultcode>/.test(response.body);
	};

	/** @override **/
	SOAP.prototype.parseError = function(body) {
	  var error = lookupValue(body, [ /:Envelope$/, /:Body$/, /:Fault$/ ]);
	  return {
	    errorCode: error.faultcode,
	    message: error.faultstring
	  };
	};

	/** @override **/
	SOAP.prototype.getResponseBody = function(response) {
	  var body = SOAP.super_.prototype.getResponseBody.call(this, response);
	  return lookupValue(body, [ /:Envelope$/, /:Body$/, /.+/ ]);
	};

	/**
	 * @private
	 */
	function lookupValue(obj, propRegExps) {
	  var regexp = propRegExps.shift();
	  if (!regexp) {
	    return obj;
	  }
	  else {
	    for (var prop in obj) {
	      if (regexp.test(prop)) {
	        return lookupValue(obj[prop], propRegExps);
	      }
	    }
	    return null;
	  }
	}

	/**
	 * @private
	 */
	function toXML(name, value) {
	  if (_.isObject(name)) {
	    value = name;
	    name = null;
	  }
	  if (_.isArray(value)) {
	    return _.map(value, function(v) { return toXML(name, v); }).join('');
	  } else {
	    var attrs = [];
	    var elems = [];
	    if (_.isObject(value)) {
	      for (var k in value) {
	        var v = value[k];
	        if (k[0] === '@') {
	          k = k.substring(1);
	          attrs.push(k + '="' + v + '"');
	        } else {
	          elems.push(toXML(k, v));
	        }
	      }
	      value = elems.join('');
	    } else {
	      value = String(value)
	        .replace(/&/g, '&amp;')
	        .replace(/</g, '&lt;')
	        .replace(/>/g, '&gt;')
	        .replace(/"/g, '&quot;')
	        .replace(/'/g, '&apos;');
	    }
	    var startTag = name ? '<' + name + (attrs.length > 0 ? ' ' + attrs.join(' ') : '') + '>' : '';
	    var endTag = name ? '</' + name + '>' : '';
	    return  startTag + value + endTag;
	  }
	}

	/**
	 * @private
	 */
	SOAP.prototype._createEnvelope = function(message) {
	  var header = {};
	  var conn = this._conn;
	  if (conn.accessToken) {
	    header.SessionHeader = { sessionId: this._conn.accessToken };
	  }
	  if (conn.callOptions) {
	    header.CallOptions = conn.callOptions;
	  }
	  return [
	    '<?xml version="1.0" encoding="UTF-8"?>',
	    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"',
	    ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"',
	    ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">',
	    '<soapenv:Header xmlns="' + this._xmlns + '">',
	    toXML(header),
	    '</soapenv:Header>',
	    '<soapenv:Body xmlns="' + this._xmlns + '">',
	    toXML(message),
	    '</soapenv:Body>',
	    '</soapenv:Envelope>'
	  ].join('');
	};


/***/ }
/******/ ])
});
;