/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Messages = (function() {

    /**
     * Namespace Messages.
     * @exports Messages
     * @namespace
     */
    var Messages = {};

    /**
     * MessageType enum.
     * @enum {string}
     * @property {number} HEARTBEAT=0 HEARTBEAT value
     * @property {number} QUERYRESULTS=1 QUERYRESULTS value
     * @property {number} QUERY=2 QUERY value
     * @property {number} PAGEREQUEST=3 PAGEREQUEST value
     * @property {number} PAGERESULT=4 PAGERESULT value
     */
    Messages.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HEARTBEAT"] = 0;
        values[valuesById[1] = "QUERYRESULTS"] = 1;
        values[valuesById[2] = "QUERY"] = 2;
        values[valuesById[3] = "PAGEREQUEST"] = 3;
        values[valuesById[4] = "PAGERESULT"] = 4;
        return values;
    })();

    Messages.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof Messages
         * @interface IMessage
         * @property {string} [type] Message type
         * @property {Messages.IPageRequest} [pagerequest] Message pagerequest
         * @property {Messages.IQueryResults} [queryresults] Message queryresults
         * @property {Messages.IPageResult} [pageresult] Message pageresult
         * @property {Messages.IQuery} [query] Message query
         */

        /**
         * Constructs a new Message.
         * @memberof Messages
         * @classdesc Represents a Message.
         * @constructor
         * @param {Messages.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {string}type
         * @memberof Messages.Message
         * @instance
         */
        Message.prototype.type = "";

        /**
         * Message pagerequest.
         * @member {(Messages.IPageRequest|null|undefined)}pagerequest
         * @memberof Messages.Message
         * @instance
         */
        Message.prototype.pagerequest = null;

        /**
         * Message queryresults.
         * @member {(Messages.IQueryResults|null|undefined)}queryresults
         * @memberof Messages.Message
         * @instance
         */
        Message.prototype.queryresults = null;

        /**
         * Message pageresult.
         * @member {(Messages.IPageResult|null|undefined)}pageresult
         * @memberof Messages.Message
         * @instance
         */
        Message.prototype.pageresult = null;

        /**
         * Message query.
         * @member {(Messages.IQuery|null|undefined)}query
         * @memberof Messages.Message
         * @instance
         */
        Message.prototype.query = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message SubMessage.
         * @member {string|undefined} SubMessage
         * @memberof Messages.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "SubMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pagerequest", "queryresults", "pageresult", "query"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Messages.Message
         * @static
         * @param {Messages.IMessage=} [properties] Properties to set
         * @returns {Messages.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link Messages.Message.verify|verify} messages.
         * @function encode
         * @memberof Messages.Message
         * @static
         * @param {Messages.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.pagerequest != null && message.hasOwnProperty("pagerequest"))
                $root.Messages.PageRequest.encode(message.pagerequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.queryresults != null && message.hasOwnProperty("queryresults"))
                $root.Messages.QueryResults.encode(message.queryresults, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.pageresult != null && message.hasOwnProperty("pageresult"))
                $root.Messages.PageResult.encode(message.pageresult, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.query != null && message.hasOwnProperty("query"))
                $root.Messages.Query.encode(message.query, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Messages.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.Message
         * @static
         * @param {Messages.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.pagerequest = $root.Messages.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.queryresults = $root.Messages.QueryResults.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pageresult = $root.Messages.PageResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.query = $root.Messages.Query.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Messages.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.pagerequest != null && message.hasOwnProperty("pagerequest")) {
                properties.SubMessage = 1;
                var error = $root.Messages.PageRequest.verify(message.pagerequest);
                if (error)
                    return "pagerequest." + error;
            }
            if (message.queryresults != null && message.hasOwnProperty("queryresults")) {
                if (properties.SubMessage === 1)
                    return "SubMessage: multiple values";
                properties.SubMessage = 1;
                error = $root.Messages.QueryResults.verify(message.queryresults);
                if (error)
                    return "queryresults." + error;
            }
            if (message.pageresult != null && message.hasOwnProperty("pageresult")) {
                if (properties.SubMessage === 1)
                    return "SubMessage: multiple values";
                properties.SubMessage = 1;
                error = $root.Messages.PageResult.verify(message.pageresult);
                if (error)
                    return "pageresult." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                if (properties.SubMessage === 1)
                    return "SubMessage: multiple values";
                properties.SubMessage = 1;
                error = $root.Messages.Query.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.Message)
                return object;
            var message = new $root.Messages.Message();
            if (object.type != null)
                message.type = String(object.type);
            if (object.pagerequest != null) {
                if (typeof object.pagerequest !== "object")
                    throw TypeError(".Messages.Message.pagerequest: object expected");
                message.pagerequest = $root.Messages.PageRequest.fromObject(object.pagerequest);
            }
            if (object.queryresults != null) {
                if (typeof object.queryresults !== "object")
                    throw TypeError(".Messages.Message.queryresults: object expected");
                message.queryresults = $root.Messages.QueryResults.fromObject(object.queryresults);
            }
            if (object.pageresult != null) {
                if (typeof object.pageresult !== "object")
                    throw TypeError(".Messages.Message.pageresult: object expected");
                message.pageresult = $root.Messages.PageResult.fromObject(object.pageresult);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".Messages.Message.query: object expected");
                message.query = $root.Messages.Query.fromObject(object.query);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.Message
         * @static
         * @param {Messages.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = "";
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.pagerequest != null && message.hasOwnProperty("pagerequest")) {
                object.pagerequest = $root.Messages.PageRequest.toObject(message.pagerequest, options);
                if (options.oneofs)
                    object.SubMessage = "pagerequest";
            }
            if (message.queryresults != null && message.hasOwnProperty("queryresults")) {
                object.queryresults = $root.Messages.QueryResults.toObject(message.queryresults, options);
                if (options.oneofs)
                    object.SubMessage = "queryresults";
            }
            if (message.pageresult != null && message.hasOwnProperty("pageresult")) {
                object.pageresult = $root.Messages.PageResult.toObject(message.pageresult, options);
                if (options.oneofs)
                    object.SubMessage = "pageresult";
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                object.query = $root.Messages.Query.toObject(message.query, options);
                if (options.oneofs)
                    object.SubMessage = "query";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Messages.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    Messages.PageRequest = (function() {

        /**
         * Properties of a PageRequest.
         * @memberof Messages
         * @interface IPageRequest
         * @property {string} [path] PageRequest path
         */

        /**
         * Constructs a new PageRequest.
         * @memberof Messages
         * @classdesc Represents a PageRequest.
         * @constructor
         * @param {Messages.IPageRequest=} [properties] Properties to set
         */
        function PageRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PageRequest path.
         * @member {string}path
         * @memberof Messages.PageRequest
         * @instance
         */
        PageRequest.prototype.path = "";

        /**
         * Creates a new PageRequest instance using the specified properties.
         * @function create
         * @memberof Messages.PageRequest
         * @static
         * @param {Messages.IPageRequest=} [properties] Properties to set
         * @returns {Messages.PageRequest} PageRequest instance
         */
        PageRequest.create = function create(properties) {
            return new PageRequest(properties);
        };

        /**
         * Encodes the specified PageRequest message. Does not implicitly {@link Messages.PageRequest.verify|verify} messages.
         * @function encode
         * @memberof Messages.PageRequest
         * @static
         * @param {Messages.IPageRequest} message PageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            return writer;
        };

        /**
         * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link Messages.PageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.PageRequest
         * @static
         * @param {Messages.IPageRequest} message PageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.PageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.PageRequest} PageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.PageRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.PageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.PageRequest} PageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PageRequest message.
         * @function verify
         * @memberof Messages.PageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };

        /**
         * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.PageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.PageRequest} PageRequest
         */
        PageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.PageRequest)
                return object;
            var message = new $root.Messages.PageRequest();
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };

        /**
         * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.PageRequest
         * @static
         * @param {Messages.PageRequest} message PageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.path = "";
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this PageRequest to JSON.
         * @function toJSON
         * @memberof Messages.PageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PageRequest;
    })();

    Messages.QueryResults = (function() {

        /**
         * Properties of a QueryResults.
         * @memberof Messages
         * @interface IQueryResults
         * @property {Array.<Messages.IQueryItem>} [results] QueryResults results
         * @property {boolean} [append] QueryResults append
         */

        /**
         * Constructs a new QueryResults.
         * @memberof Messages
         * @classdesc Represents a QueryResults.
         * @constructor
         * @param {Messages.IQueryResults=} [properties] Properties to set
         */
        function QueryResults(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResults results.
         * @member {Array.<Messages.IQueryItem>}results
         * @memberof Messages.QueryResults
         * @instance
         */
        QueryResults.prototype.results = $util.emptyArray;

        /**
         * QueryResults append.
         * @member {boolean}append
         * @memberof Messages.QueryResults
         * @instance
         */
        QueryResults.prototype.append = false;

        /**
         * Creates a new QueryResults instance using the specified properties.
         * @function create
         * @memberof Messages.QueryResults
         * @static
         * @param {Messages.IQueryResults=} [properties] Properties to set
         * @returns {Messages.QueryResults} QueryResults instance
         */
        QueryResults.create = function create(properties) {
            return new QueryResults(properties);
        };

        /**
         * Encodes the specified QueryResults message. Does not implicitly {@link Messages.QueryResults.verify|verify} messages.
         * @function encode
         * @memberof Messages.QueryResults
         * @static
         * @param {Messages.IQueryResults} message QueryResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.Messages.QueryItem.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.append != null && message.hasOwnProperty("append"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.append);
            return writer;
        };

        /**
         * Encodes the specified QueryResults message, length delimited. Does not implicitly {@link Messages.QueryResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.QueryResults
         * @static
         * @param {Messages.IQueryResults} message QueryResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryResults message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.QueryResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.QueryResults} QueryResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.QueryResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.Messages.QueryItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.append = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.QueryResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.QueryResults} QueryResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResults message.
         * @function verify
         * @memberof Messages.QueryResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.Messages.QueryItem.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.append != null && message.hasOwnProperty("append"))
                if (typeof message.append !== "boolean")
                    return "append: boolean expected";
            return null;
        };

        /**
         * Creates a QueryResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.QueryResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.QueryResults} QueryResults
         */
        QueryResults.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.QueryResults)
                return object;
            var message = new $root.Messages.QueryResults();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".Messages.QueryResults.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".Messages.QueryResults.results: object expected");
                    message.results[i] = $root.Messages.QueryItem.fromObject(object.results[i]);
                }
            }
            if (object.append != null)
                message.append = Boolean(object.append);
            return message;
        };

        /**
         * Creates a plain object from a QueryResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.QueryResults
         * @static
         * @param {Messages.QueryResults} message QueryResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults)
                object.append = false;
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.Messages.QueryItem.toObject(message.results[j], options);
            }
            if (message.append != null && message.hasOwnProperty("append"))
                object.append = message.append;
            return object;
        };

        /**
         * Converts this QueryResults to JSON.
         * @function toJSON
         * @memberof Messages.QueryResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryResults;
    })();

    Messages.QueryItem = (function() {

        /**
         * Properties of a QueryItem.
         * @memberof Messages
         * @interface IQueryItem
         * @property {string} [path] QueryItem path
         * @property {string} [name] QueryItem name
         */

        /**
         * Constructs a new QueryItem.
         * @memberof Messages
         * @classdesc Represents a QueryItem.
         * @constructor
         * @param {Messages.IQueryItem=} [properties] Properties to set
         */
        function QueryItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryItem path.
         * @member {string}path
         * @memberof Messages.QueryItem
         * @instance
         */
        QueryItem.prototype.path = "";

        /**
         * QueryItem name.
         * @member {string}name
         * @memberof Messages.QueryItem
         * @instance
         */
        QueryItem.prototype.name = "";

        /**
         * Creates a new QueryItem instance using the specified properties.
         * @function create
         * @memberof Messages.QueryItem
         * @static
         * @param {Messages.IQueryItem=} [properties] Properties to set
         * @returns {Messages.QueryItem} QueryItem instance
         */
        QueryItem.create = function create(properties) {
            return new QueryItem(properties);
        };

        /**
         * Encodes the specified QueryItem message. Does not implicitly {@link Messages.QueryItem.verify|verify} messages.
         * @function encode
         * @memberof Messages.QueryItem
         * @static
         * @param {Messages.IQueryItem} message QueryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified QueryItem message, length delimited. Does not implicitly {@link Messages.QueryItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.QueryItem
         * @static
         * @param {Messages.IQueryItem} message QueryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryItem message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.QueryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.QueryItem} QueryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.QueryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.QueryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.QueryItem} QueryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryItem message.
         * @function verify
         * @memberof Messages.QueryItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a QueryItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.QueryItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.QueryItem} QueryItem
         */
        QueryItem.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.QueryItem)
                return object;
            var message = new $root.Messages.QueryItem();
            if (object.path != null)
                message.path = String(object.path);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a QueryItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.QueryItem
         * @static
         * @param {Messages.QueryItem} message QueryItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.path = "";
                object.name = "";
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this QueryItem to JSON.
         * @function toJSON
         * @memberof Messages.QueryItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryItem;
    })();

    Messages.PageResult = (function() {

        /**
         * Properties of a PageResult.
         * @memberof Messages
         * @interface IPageResult
         * @property {string} [html] PageResult html
         * @property {string} [name] PageResult name
         */

        /**
         * Constructs a new PageResult.
         * @memberof Messages
         * @classdesc Represents a PageResult.
         * @constructor
         * @param {Messages.IPageResult=} [properties] Properties to set
         */
        function PageResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PageResult html.
         * @member {string}html
         * @memberof Messages.PageResult
         * @instance
         */
        PageResult.prototype.html = "";

        /**
         * PageResult name.
         * @member {string}name
         * @memberof Messages.PageResult
         * @instance
         */
        PageResult.prototype.name = "";

        /**
         * Creates a new PageResult instance using the specified properties.
         * @function create
         * @memberof Messages.PageResult
         * @static
         * @param {Messages.IPageResult=} [properties] Properties to set
         * @returns {Messages.PageResult} PageResult instance
         */
        PageResult.create = function create(properties) {
            return new PageResult(properties);
        };

        /**
         * Encodes the specified PageResult message. Does not implicitly {@link Messages.PageResult.verify|verify} messages.
         * @function encode
         * @memberof Messages.PageResult
         * @static
         * @param {Messages.IPageResult} message PageResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.html != null && message.hasOwnProperty("html"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.html);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified PageResult message, length delimited. Does not implicitly {@link Messages.PageResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.PageResult
         * @static
         * @param {Messages.IPageResult} message PageResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PageResult message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.PageResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.PageResult} PageResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.PageResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.html = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PageResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.PageResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.PageResult} PageResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PageResult message.
         * @function verify
         * @memberof Messages.PageResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PageResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.html != null && message.hasOwnProperty("html"))
                if (!$util.isString(message.html))
                    return "html: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a PageResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.PageResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.PageResult} PageResult
         */
        PageResult.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.PageResult)
                return object;
            var message = new $root.Messages.PageResult();
            if (object.html != null)
                message.html = String(object.html);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a PageResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.PageResult
         * @static
         * @param {Messages.PageResult} message PageResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PageResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.html = "";
                object.name = "";
            }
            if (message.html != null && message.hasOwnProperty("html"))
                object.html = message.html;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this PageResult to JSON.
         * @function toJSON
         * @memberof Messages.PageResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PageResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PageResult;
    })();

    Messages.Query = (function() {

        /**
         * Properties of a Query.
         * @memberof Messages
         * @interface IQuery
         * @property {string} [query] Query query
         */

        /**
         * Constructs a new Query.
         * @memberof Messages
         * @classdesc Represents a Query.
         * @constructor
         * @param {Messages.IQuery=} [properties] Properties to set
         */
        function Query(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Query query.
         * @member {string}query
         * @memberof Messages.Query
         * @instance
         */
        Query.prototype.query = "";

        /**
         * Creates a new Query instance using the specified properties.
         * @function create
         * @memberof Messages.Query
         * @static
         * @param {Messages.IQuery=} [properties] Properties to set
         * @returns {Messages.Query} Query instance
         */
        Query.create = function create(properties) {
            return new Query(properties);
        };

        /**
         * Encodes the specified Query message. Does not implicitly {@link Messages.Query.verify|verify} messages.
         * @function encode
         * @memberof Messages.Query
         * @static
         * @param {Messages.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.query != null && message.hasOwnProperty("query"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
            return writer;
        };

        /**
         * Encodes the specified Query message, length delimited. Does not implicitly {@link Messages.Query.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Messages.Query
         * @static
         * @param {Messages.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @function decode
         * @memberof Messages.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Messages.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages.Query();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.query = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Messages.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Messages.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Query message.
         * @function verify
         * @memberof Messages.Query
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Query.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            return null;
        };

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Messages.Query
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Messages.Query} Query
         */
        Query.fromObject = function fromObject(object) {
            if (object instanceof $root.Messages.Query)
                return object;
            var message = new $root.Messages.Query();
            if (object.query != null)
                message.query = String(object.query);
            return message;
        };

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Messages.Query
         * @static
         * @param {Messages.Query} message Query
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Query.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.query = "";
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = message.query;
            return object;
        };

        /**
         * Converts this Query to JSON.
         * @function toJSON
         * @memberof Messages.Query
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Query.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Query;
    })();

    return Messages;
})();

module.exports = $root;
