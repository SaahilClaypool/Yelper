import * as $protobuf from "protobufjs";

/** Namespace Messages. */
export namespace Messages {

    /** MessageType enum. */
    enum MessageType {
        HEARTBEAT = 0,
        QUERYRESULTS = 1,
        QUERY = 2,
        PAGEREQUEST = 3,
        PAGERESULT = 4
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: string;

        /** Message pagerequest */
        pagerequest?: Messages.IPageRequest;

        /** Message queryresults */
        queryresults?: Messages.IQueryResults;

        /** Message pageresult */
        pageresult?: Messages.IPageResult;

        /** Message query */
        query?: Messages.IQuery;
    }

    /** Represents a Message. */
    class Message {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IMessage);

        /** Message type. */
        public type: string;

        /** Message pagerequest. */
        public pagerequest?: (Messages.IPageRequest|null);

        /** Message queryresults. */
        public queryresults?: (Messages.IQueryResults|null);

        /** Message pageresult. */
        public pageresult?: (Messages.IPageResult|null);

        /** Message query. */
        public query?: (Messages.IQuery|null);

        /** Message SubMessage. */
        public SubMessage?: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: Messages.IMessage): Messages.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link Messages.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Messages.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): Messages.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PageRequest. */
    interface IPageRequest {

        /** PageRequest path */
        path?: string;
    }

    /** Represents a PageRequest. */
    class PageRequest {

        /**
         * Constructs a new PageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IPageRequest);

        /** PageRequest path. */
        public path: string;

        /**
         * Creates a new PageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PageRequest instance
         */
        public static create(properties?: Messages.IPageRequest): Messages.PageRequest;

        /**
         * Encodes the specified PageRequest message. Does not implicitly {@link Messages.PageRequest.verify|verify} messages.
         * @param message PageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link Messages.PageRequest.verify|verify} messages.
         * @param message PageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.PageRequest;

        /**
         * Decodes a PageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.PageRequest;

        /**
         * Verifies a PageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PageRequest
         */
        public static fromObject(object: { [k: string]: any }): Messages.PageRequest;

        /**
         * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
         * @param message PageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryResults. */
    interface IQueryResults {

        /** QueryResults results */
        results?: Messages.IQueryItem[];
    }

    /** Represents a QueryResults. */
    class QueryResults {

        /**
         * Constructs a new QueryResults.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IQueryResults);

        /** QueryResults results. */
        public results: Messages.IQueryItem[];

        /**
         * Creates a new QueryResults instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryResults instance
         */
        public static create(properties?: Messages.IQueryResults): Messages.QueryResults;

        /**
         * Encodes the specified QueryResults message. Does not implicitly {@link Messages.QueryResults.verify|verify} messages.
         * @param message QueryResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryResults message, length delimited. Does not implicitly {@link Messages.QueryResults.verify|verify} messages.
         * @param message QueryResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryResults message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.QueryResults;

        /**
         * Decodes a QueryResults message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.QueryResults;

        /**
         * Verifies a QueryResults message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryResults message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryResults
         */
        public static fromObject(object: { [k: string]: any }): Messages.QueryResults;

        /**
         * Creates a plain object from a QueryResults message. Also converts values to other types if specified.
         * @param message QueryResults
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.QueryResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryResults to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryItem. */
    interface IQueryItem {

        /** QueryItem path */
        path?: string;

        /** QueryItem name */
        name?: string;
    }

    /** Represents a QueryItem. */
    class QueryItem {

        /**
         * Constructs a new QueryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IQueryItem);

        /** QueryItem path. */
        public path: string;

        /** QueryItem name. */
        public name: string;

        /**
         * Creates a new QueryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryItem instance
         */
        public static create(properties?: Messages.IQueryItem): Messages.QueryItem;

        /**
         * Encodes the specified QueryItem message. Does not implicitly {@link Messages.QueryItem.verify|verify} messages.
         * @param message QueryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IQueryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryItem message, length delimited. Does not implicitly {@link Messages.QueryItem.verify|verify} messages.
         * @param message QueryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IQueryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.QueryItem;

        /**
         * Decodes a QueryItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.QueryItem;

        /**
         * Verifies a QueryItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryItem
         */
        public static fromObject(object: { [k: string]: any }): Messages.QueryItem;

        /**
         * Creates a plain object from a QueryItem message. Also converts values to other types if specified.
         * @param message QueryItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.QueryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PageResult. */
    interface IPageResult {

        /** PageResult html */
        html?: string;

        /** PageResult name */
        name?: string;
    }

    /** Represents a PageResult. */
    class PageResult {

        /**
         * Constructs a new PageResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IPageResult);

        /** PageResult html. */
        public html: string;

        /** PageResult name. */
        public name: string;

        /**
         * Creates a new PageResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PageResult instance
         */
        public static create(properties?: Messages.IPageResult): Messages.PageResult;

        /**
         * Encodes the specified PageResult message. Does not implicitly {@link Messages.PageResult.verify|verify} messages.
         * @param message PageResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IPageResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PageResult message, length delimited. Does not implicitly {@link Messages.PageResult.verify|verify} messages.
         * @param message PageResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IPageResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PageResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PageResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.PageResult;

        /**
         * Decodes a PageResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PageResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.PageResult;

        /**
         * Verifies a PageResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PageResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PageResult
         */
        public static fromObject(object: { [k: string]: any }): Messages.PageResult;

        /**
         * Creates a plain object from a PageResult message. Also converts values to other types if specified.
         * @param message PageResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.PageResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PageResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Query. */
    interface IQuery {

        /** Query query */
        query?: string;
    }

    /** Represents a Query. */
    class Query {

        /**
         * Constructs a new Query.
         * @param [properties] Properties to set
         */
        constructor(properties?: Messages.IQuery);

        /** Query query. */
        public query: string;

        /**
         * Creates a new Query instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Query instance
         */
        public static create(properties?: Messages.IQuery): Messages.Query;

        /**
         * Encodes the specified Query message. Does not implicitly {@link Messages.Query.verify|verify} messages.
         * @param message Query message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Messages.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Query message, length delimited. Does not implicitly {@link Messages.Query.verify|verify} messages.
         * @param message Query message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Messages.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages.Query;

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages.Query;

        /**
         * Verifies a Query message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Query
         */
        public static fromObject(object: { [k: string]: any }): Messages.Query;

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @param message Query
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Messages.Query, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Query to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
