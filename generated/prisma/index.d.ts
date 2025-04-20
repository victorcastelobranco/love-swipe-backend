
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model matches
 * 
 */
export type matches = $Result.DefaultSelection<Prisma.$matchesPayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.matchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    matches: 'matches',
    message: 'message',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "matches" | "message" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      matches: {
        payload: Prisma.$matchesPayload<ExtArgs>
        fields: Prisma.matchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findFirst: {
            args: Prisma.matchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findMany: {
            args: Prisma.matchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          create: {
            args: Prisma.matchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          createMany: {
            args: Prisma.matchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.matchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          update: {
            args: Prisma.matchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          deleteMany: {
            args: Prisma.matchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.matchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.matchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.matchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    matches?: matchesOmit
    message?: messageOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matches_matches_user1IdTouser: number
    matches_matches_user2IdTouser: number
    message_message_senderIdTouser: number
    message_message_receiverIdTouser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches_matches_user1IdTouser?: boolean | UserCountOutputTypeCountMatches_matches_user1IdTouserArgs
    matches_matches_user2IdTouser?: boolean | UserCountOutputTypeCountMatches_matches_user2IdTouserArgs
    message_message_senderIdTouser?: boolean | UserCountOutputTypeCountMessage_message_senderIdTouserArgs
    message_message_receiverIdTouser?: boolean | UserCountOutputTypeCountMessage_message_receiverIdTouserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches_matches_user1IdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches_matches_user2IdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_receiverIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    timestamp: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    timestamp: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    timestamp: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    timestamp?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    timestamp?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    timestamp?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    timestamp: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    timestamp?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "timestamp", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      timestamp: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly timestamp: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesAvgAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
  }

  export type MatchesSumAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
  }

  export type MatchesMinAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
    timestamp: Date | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
    timestamp: Date | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    timestamp: number
    _all: number
  }


  export type MatchesAvgAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
  }

  export type MatchesSumAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
  }

  export type MatchesMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    timestamp?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    timestamp?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    timestamp?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to aggregate.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type matchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithAggregationInput | matchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: matchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _avg?: MatchesAvgAggregateInputType
    _sum?: MatchesSumAggregateInputType
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: number
    user1Id: number
    user2Id: number
    timestamp: Date
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends matchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type matchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    timestamp?: boolean
    user_matches_user1IdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_matches_user2IdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>



  export type matchesSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    timestamp?: boolean
  }

  export type matchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "timestamp", ExtArgs["result"]["matches"]>
  export type matchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_matches_user1IdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_matches_user2IdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $matchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "matches"
    objects: {
      user_matches_user1IdTouser: Prisma.$userPayload<ExtArgs>
      user_matches_user2IdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user1Id: number
      user2Id: number
      timestamp: Date
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type matchesGetPayload<S extends boolean | null | undefined | matchesDefaultArgs> = $Result.GetResult<Prisma.$matchesPayload, S>

  type matchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface matchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['matches'], meta: { name: 'matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {matchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matchesFindUniqueArgs>(args: SelectSubset<T, matchesFindUniqueArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matchesFindUniqueOrThrowArgs>(args: SelectSubset<T, matchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matchesFindFirstArgs>(args?: SelectSubset<T, matchesFindFirstArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matchesFindFirstOrThrowArgs>(args?: SelectSubset<T, matchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends matchesFindManyArgs>(args?: SelectSubset<T, matchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {matchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends matchesCreateArgs>(args: SelectSubset<T, matchesCreateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {matchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matchesCreateManyArgs>(args?: SelectSubset<T, matchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matches.
     * @param {matchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends matchesDeleteArgs>(args: SelectSubset<T, matchesDeleteArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {matchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matchesUpdateArgs>(args: SelectSubset<T, matchesUpdateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {matchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matchesDeleteManyArgs>(args?: SelectSubset<T, matchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matchesUpdateManyArgs>(args: SelectSubset<T, matchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matches.
     * @param {matchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends matchesUpsertArgs>(args: SelectSubset<T, matchesUpsertArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchesCountArgs>(
      args?: Subset<T, matchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends matchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matchesGroupByArgs['orderBy'] }
        : { orderBy?: matchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, matchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the matches model
   */
  readonly fields: matchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_matches_user1IdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_matches_user2IdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the matches model
   */
  interface matchesFieldRefs {
    readonly id: FieldRef<"matches", 'Int'>
    readonly user1Id: FieldRef<"matches", 'Int'>
    readonly user2Id: FieldRef<"matches", 'Int'>
    readonly timestamp: FieldRef<"matches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * matches findUnique
   */
  export type matchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findUniqueOrThrow
   */
  export type matchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findFirst
   */
  export type matchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findFirstOrThrow
   */
  export type matchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findMany
   */
  export type matchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches create
   */
  export type matchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to create a matches.
     */
    data: XOR<matchesCreateInput, matchesUncheckedCreateInput>
  }

  /**
   * matches createMany
   */
  export type matchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matches.
     */
    data: matchesCreateManyInput | matchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matches update
   */
  export type matchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to update a matches.
     */
    data: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
    /**
     * Choose, which matches to update.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches updateMany
   */
  export type matchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matches.
     */
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
  }

  /**
   * matches upsert
   */
  export type matchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The filter to search for the matches to update in case it exists.
     */
    where: matchesWhereUniqueInput
    /**
     * In case the matches found by the `where` argument doesn't exist, create a new matches with this data.
     */
    create: XOR<matchesCreateInput, matchesUncheckedCreateInput>
    /**
     * In case the matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
  }

  /**
   * matches delete
   */
  export type matchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter which matches to delete.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches deleteMany
   */
  export type matchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to delete
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to delete.
     */
    limit?: number
  }

  /**
   * matches without action
   */
  export type matchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    timestamp: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    timestamp: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    timestamp: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    timestamp?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    timestamp?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: string
    timestamp: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    timestamp?: boolean
    user_message_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_receiverIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type messageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "timestamp", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_message_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_receiverIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      user_message_senderIdTouser: Prisma.$userPayload<ExtArgs>
      user_message_receiverIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      content: string
      timestamp: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_message_senderIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_message_receiverIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'Int'>
    readonly senderId: FieldRef<"message", 'Int'>
    readonly receiverId: FieldRef<"message", 'Int'>
    readonly content: FieldRef<"message", 'String'>
    readonly timestamp: FieldRef<"message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    birth: Date | null
    gender: string | null
    location: string | null
    interests: string | null
    profilePicture: string | null
    verified: boolean | null
    isPremium: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    birth: Date | null
    gender: string | null
    location: string | null
    interests: string | null
    profilePicture: string | null
    verified: boolean | null
    isPremium: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    bio: number
    birth: number
    gender: number
    location: number
    interests: number
    profilePicture: number
    verified: number
    isPremium: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    birth?: true
    gender?: true
    location?: true
    interests?: true
    profilePicture?: true
    verified?: true
    isPremium?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    birth?: true
    gender?: true
    location?: true
    interests?: true
    profilePicture?: true
    verified?: true
    isPremium?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    birth?: true
    gender?: true
    location?: true
    interests?: true
    profilePicture?: true
    verified?: true
    isPremium?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    bio: string | null
    birth: Date | null
    gender: string | null
    location: string | null
    interests: string | null
    profilePicture: string | null
    verified: boolean | null
    isPremium: boolean | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    birth?: boolean
    gender?: boolean
    location?: boolean
    interests?: boolean
    profilePicture?: boolean
    verified?: boolean
    isPremium?: boolean
    matches_matches_user1IdTouser?: boolean | user$matches_matches_user1IdTouserArgs<ExtArgs>
    matches_matches_user2IdTouser?: boolean | user$matches_matches_user2IdTouserArgs<ExtArgs>
    message_message_senderIdTouser?: boolean | user$message_message_senderIdTouserArgs<ExtArgs>
    message_message_receiverIdTouser?: boolean | user$message_message_receiverIdTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    birth?: boolean
    gender?: boolean
    location?: boolean
    interests?: boolean
    profilePicture?: boolean
    verified?: boolean
    isPremium?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "bio" | "birth" | "gender" | "location" | "interests" | "profilePicture" | "verified" | "isPremium", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches_matches_user1IdTouser?: boolean | user$matches_matches_user1IdTouserArgs<ExtArgs>
    matches_matches_user2IdTouser?: boolean | user$matches_matches_user2IdTouserArgs<ExtArgs>
    message_message_senderIdTouser?: boolean | user$message_message_senderIdTouserArgs<ExtArgs>
    message_message_receiverIdTouser?: boolean | user$message_message_receiverIdTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      matches_matches_user1IdTouser: Prisma.$matchesPayload<ExtArgs>[]
      matches_matches_user2IdTouser: Prisma.$matchesPayload<ExtArgs>[]
      message_message_senderIdTouser: Prisma.$messagePayload<ExtArgs>[]
      message_message_receiverIdTouser: Prisma.$messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      bio: string | null
      birth: Date | null
      gender: string | null
      location: string | null
      interests: string | null
      profilePicture: string | null
      verified: boolean | null
      isPremium: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches_matches_user1IdTouser<T extends user$matches_matches_user1IdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$matches_matches_user1IdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches_matches_user2IdTouser<T extends user$matches_matches_user2IdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$matches_matches_user2IdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_senderIdTouser<T extends user$message_message_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_senderIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_receiverIdTouser<T extends user$message_message_receiverIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_receiverIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly bio: FieldRef<"user", 'String'>
    readonly birth: FieldRef<"user", 'DateTime'>
    readonly gender: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
    readonly interests: FieldRef<"user", 'String'>
    readonly profilePicture: FieldRef<"user", 'String'>
    readonly verified: FieldRef<"user", 'Boolean'>
    readonly isPremium: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.matches_matches_user1IdTouser
   */
  export type user$matches_matches_user1IdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * user.matches_matches_user2IdTouser
   */
  export type user$matches_matches_user2IdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * user.message_message_senderIdTouser
   */
  export type user$message_message_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.message_message_receiverIdTouser
   */
  export type user$message_message_receiverIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    timestamp: 'timestamp'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    timestamp: 'timestamp'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    bio: 'bio',
    birth: 'birth',
    gender: 'gender',
    location: 'location',
    interests: 'interests',
    profilePicture: 'profilePicture',
    verified: 'verified',
    isPremium: 'isPremium'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const adminOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const messageOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type messageOrderByRelevanceFieldEnum = (typeof messageOrderByRelevanceFieldEnum)[keyof typeof messageOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    bio: 'bio',
    gender: 'gender',
    location: 'location',
    interests: 'interests',
    profilePicture: 'profilePicture'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    timestamp?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    timestamp?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringFilter<"admin"> | string
    timestamp?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    timestamp?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    timestamp?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type matchesWhereInput = {
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    id?: IntFilter<"matches"> | number
    user1Id?: IntFilter<"matches"> | number
    user2Id?: IntFilter<"matches"> | number
    timestamp?: DateTimeFilter<"matches"> | Date | string
    user_matches_user1IdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_matches_user2IdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type matchesOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    timestamp?: SortOrder
    user_matches_user1IdTouser?: userOrderByWithRelationInput
    user_matches_user2IdTouser?: userOrderByWithRelationInput
  }

  export type matchesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    user1Id?: IntFilter<"matches"> | number
    user2Id?: IntFilter<"matches"> | number
    timestamp?: DateTimeFilter<"matches"> | Date | string
    user_matches_user1IdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_matches_user2IdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type matchesOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    timestamp?: SortOrder
    _count?: matchesCountOrderByAggregateInput
    _avg?: matchesAvgOrderByAggregateInput
    _max?: matchesMaxOrderByAggregateInput
    _min?: matchesMinOrderByAggregateInput
    _sum?: matchesSumOrderByAggregateInput
  }

  export type matchesScalarWhereWithAggregatesInput = {
    AND?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    OR?: matchesScalarWhereWithAggregatesInput[]
    NOT?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"matches"> | number
    user1Id?: IntWithAggregatesFilter<"matches"> | number
    user2Id?: IntWithAggregatesFilter<"matches"> | number
    timestamp?: DateTimeWithAggregatesFilter<"matches"> | Date | string
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: IntFilter<"message"> | number
    senderId?: IntFilter<"message"> | number
    receiverId?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    timestamp?: DateTimeFilter<"message"> | Date | string
    user_message_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_receiverIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    user_message_senderIdTouser?: userOrderByWithRelationInput
    user_message_receiverIdTouser?: userOrderByWithRelationInput
    _relevance?: messageOrderByRelevanceInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    senderId?: IntFilter<"message"> | number
    receiverId?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    timestamp?: DateTimeFilter<"message"> | Date | string
    user_message_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_receiverIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message"> | number
    senderId?: IntWithAggregatesFilter<"message"> | number
    receiverId?: IntWithAggregatesFilter<"message"> | number
    content?: StringWithAggregatesFilter<"message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"message"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    birth?: DateTimeNullableFilter<"user"> | Date | string | null
    gender?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    interests?: StringNullableFilter<"user"> | string | null
    profilePicture?: StringNullableFilter<"user"> | string | null
    verified?: BoolNullableFilter<"user"> | boolean | null
    isPremium?: BoolNullableFilter<"user"> | boolean | null
    matches_matches_user1IdTouser?: MatchesListRelationFilter
    matches_matches_user2IdTouser?: MatchesListRelationFilter
    message_message_senderIdTouser?: MessageListRelationFilter
    message_message_receiverIdTouser?: MessageListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    isPremium?: SortOrderInput | SortOrder
    matches_matches_user1IdTouser?: matchesOrderByRelationAggregateInput
    matches_matches_user2IdTouser?: matchesOrderByRelationAggregateInput
    message_message_senderIdTouser?: messageOrderByRelationAggregateInput
    message_message_receiverIdTouser?: messageOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    birth?: DateTimeNullableFilter<"user"> | Date | string | null
    gender?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    interests?: StringNullableFilter<"user"> | string | null
    profilePicture?: StringNullableFilter<"user"> | string | null
    verified?: BoolNullableFilter<"user"> | boolean | null
    isPremium?: BoolNullableFilter<"user"> | boolean | null
    matches_matches_user1IdTouser?: MatchesListRelationFilter
    matches_matches_user2IdTouser?: MatchesListRelationFilter
    message_message_senderIdTouser?: MessageListRelationFilter
    message_message_receiverIdTouser?: MessageListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    isPremium?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    bio?: StringNullableWithAggregatesFilter<"user"> | string | null
    birth?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
    interests?: StringNullableWithAggregatesFilter<"user"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"user"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isPremium?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
  }

  export type adminCreateInput = {
    email: string
    password: string
    timestamp?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    timestamp?: Date | string
  }

  export type adminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    email: string
    password: string
    timestamp?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesCreateInput = {
    timestamp?: Date | string
    user_matches_user1IdTouser: userCreateNestedOneWithoutMatches_matches_user1IdTouserInput
    user_matches_user2IdTouser: userCreateNestedOneWithoutMatches_matches_user2IdTouserInput
  }

  export type matchesUncheckedCreateInput = {
    id?: number
    user1Id: number
    user2Id: number
    timestamp?: Date | string
  }

  export type matchesUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_matches_user1IdTouser?: userUpdateOneRequiredWithoutMatches_matches_user1IdTouserNestedInput
    user_matches_user2IdTouser?: userUpdateOneRequiredWithoutMatches_matches_user2IdTouserNestedInput
  }

  export type matchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesCreateManyInput = {
    id?: number
    user1Id: number
    user2Id: number
    timestamp?: Date | string
  }

  export type matchesUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageCreateInput = {
    content: string
    timestamp?: Date | string
    user_message_senderIdTouser: userCreateNestedOneWithoutMessage_message_senderIdTouserInput
    user_message_receiverIdTouser: userCreateNestedOneWithoutMessage_message_receiverIdTouserInput
  }

  export type messageUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    timestamp?: Date | string
  }

  export type messageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_senderIdTouser?: userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput
    user_message_receiverIdTouser?: userUpdateOneRequiredWithoutMessage_message_receiverIdTouserNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    timestamp?: Date | string
  }

  export type messageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    timestamp?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    timestamp?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    timestamp?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type matchesCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    timestamp?: SortOrder
  }

  export type matchesAvgOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type matchesMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    timestamp?: SortOrder
  }

  export type matchesMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    timestamp?: SortOrder
  }

  export type matchesSumOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type messageOrderByRelevanceInput = {
    fields: messageOrderByRelevanceFieldEnum | messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MatchesListRelationFilter = {
    every?: matchesWhereInput
    some?: matchesWhereInput
    none?: matchesWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type matchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    interests?: SortOrder
    profilePicture?: SortOrder
    verified?: SortOrder
    isPremium?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    interests?: SortOrder
    profilePicture?: SortOrder
    verified?: SortOrder
    isPremium?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    interests?: SortOrder
    profilePicture?: SortOrder
    verified?: SortOrder
    isPremium?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutMatches_matches_user1IdTouserInput = {
    create?: XOR<userCreateWithoutMatches_matches_user1IdTouserInput, userUncheckedCreateWithoutMatches_matches_user1IdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMatches_matches_user1IdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMatches_matches_user2IdTouserInput = {
    create?: XOR<userCreateWithoutMatches_matches_user2IdTouserInput, userUncheckedCreateWithoutMatches_matches_user2IdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMatches_matches_user2IdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutMatches_matches_user1IdTouserNestedInput = {
    create?: XOR<userCreateWithoutMatches_matches_user1IdTouserInput, userUncheckedCreateWithoutMatches_matches_user1IdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMatches_matches_user1IdTouserInput
    upsert?: userUpsertWithoutMatches_matches_user1IdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatches_matches_user1IdTouserInput, userUpdateWithoutMatches_matches_user1IdTouserInput>, userUncheckedUpdateWithoutMatches_matches_user1IdTouserInput>
  }

  export type userUpdateOneRequiredWithoutMatches_matches_user2IdTouserNestedInput = {
    create?: XOR<userCreateWithoutMatches_matches_user2IdTouserInput, userUncheckedCreateWithoutMatches_matches_user2IdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMatches_matches_user2IdTouserInput
    upsert?: userUpsertWithoutMatches_matches_user2IdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatches_matches_user2IdTouserInput, userUpdateWithoutMatches_matches_user2IdTouserInput>, userUncheckedUpdateWithoutMatches_matches_user2IdTouserInput>
  }

  export type userCreateNestedOneWithoutMessage_message_senderIdTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_senderIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMessage_message_receiverIdTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_receiverIdTouserInput, userUncheckedCreateWithoutMessage_message_receiverIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_receiverIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_senderIdTouserInput
    upsert?: userUpsertWithoutMessage_message_senderIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_senderIdTouserInput, userUpdateWithoutMessage_message_senderIdTouserInput>, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutMessage_message_receiverIdTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_receiverIdTouserInput, userUncheckedCreateWithoutMessage_message_receiverIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_receiverIdTouserInput
    upsert?: userUpsertWithoutMessage_message_receiverIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_receiverIdTouserInput, userUpdateWithoutMessage_message_receiverIdTouserInput>, userUncheckedUpdateWithoutMessage_message_receiverIdTouserInput>
  }

  export type matchesCreateNestedManyWithoutUser_matches_user1IdTouserInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput> | matchesCreateWithoutUser_matches_user1IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user1IdTouserInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesCreateNestedManyWithoutUser_matches_user2IdTouserInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput> | matchesCreateWithoutUser_matches_user2IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user2IdTouserInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_senderIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_receiverIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput> | messageCreateWithoutUser_message_receiverIdTouserInput[] | messageUncheckedCreateWithoutUser_message_receiverIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_receiverIdTouserInput | messageCreateOrConnectWithoutUser_message_receiverIdTouserInput[]
    createMany?: messageCreateManyUser_message_receiverIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutUser_matches_user1IdTouserInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput> | matchesCreateWithoutUser_matches_user1IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user1IdTouserInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutUser_matches_user2IdTouserInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput> | matchesCreateWithoutUser_matches_user2IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user2IdTouserInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_receiverIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput> | messageCreateWithoutUser_message_receiverIdTouserInput[] | messageUncheckedCreateWithoutUser_message_receiverIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_receiverIdTouserInput | messageCreateOrConnectWithoutUser_message_receiverIdTouserInput[]
    createMany?: messageCreateManyUser_message_receiverIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type matchesUpdateManyWithoutUser_matches_user1IdTouserNestedInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput> | matchesCreateWithoutUser_matches_user1IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutUser_matches_user1IdTouserInput | matchesUpsertWithWhereUniqueWithoutUser_matches_user1IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user1IdTouserInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutUser_matches_user1IdTouserInput | matchesUpdateWithWhereUniqueWithoutUser_matches_user1IdTouserInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutUser_matches_user1IdTouserInput | matchesUpdateManyWithWhereWithoutUser_matches_user1IdTouserInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUpdateManyWithoutUser_matches_user2IdTouserNestedInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput> | matchesCreateWithoutUser_matches_user2IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutUser_matches_user2IdTouserInput | matchesUpsertWithWhereUniqueWithoutUser_matches_user2IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user2IdTouserInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutUser_matches_user2IdTouserInput | matchesUpdateWithWhereUniqueWithoutUser_matches_user2IdTouserInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutUser_matches_user2IdTouserInput | matchesUpdateManyWithWhereWithoutUser_matches_user2IdTouserInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_senderIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_receiverIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput> | messageCreateWithoutUser_message_receiverIdTouserInput[] | messageUncheckedCreateWithoutUser_message_receiverIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_receiverIdTouserInput | messageCreateOrConnectWithoutUser_message_receiverIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_receiverIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_receiverIdTouserInput[]
    createMany?: messageCreateManyUser_message_receiverIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_receiverIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_receiverIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_receiverIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_receiverIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserNestedInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput> | matchesCreateWithoutUser_matches_user1IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutUser_matches_user1IdTouserInput | matchesUpsertWithWhereUniqueWithoutUser_matches_user1IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user1IdTouserInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutUser_matches_user1IdTouserInput | matchesUpdateWithWhereUniqueWithoutUser_matches_user1IdTouserInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutUser_matches_user1IdTouserInput | matchesUpdateManyWithWhereWithoutUser_matches_user1IdTouserInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserNestedInput = {
    create?: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput> | matchesCreateWithoutUser_matches_user2IdTouserInput[] | matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput | matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutUser_matches_user2IdTouserInput | matchesUpsertWithWhereUniqueWithoutUser_matches_user2IdTouserInput[]
    createMany?: matchesCreateManyUser_matches_user2IdTouserInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutUser_matches_user2IdTouserInput | matchesUpdateWithWhereUniqueWithoutUser_matches_user2IdTouserInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutUser_matches_user2IdTouserInput | matchesUpdateManyWithWhereWithoutUser_matches_user2IdTouserInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput> | messageCreateWithoutUser_message_receiverIdTouserInput[] | messageUncheckedCreateWithoutUser_message_receiverIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_receiverIdTouserInput | messageCreateOrConnectWithoutUser_message_receiverIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_receiverIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_receiverIdTouserInput[]
    createMany?: messageCreateManyUser_message_receiverIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_receiverIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_receiverIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_receiverIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_receiverIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type userCreateWithoutMatches_matches_user1IdTouserInput = {
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user2IdTouser?: matchesCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userUncheckedCreateWithoutMatches_matches_user1IdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user2IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userCreateOrConnectWithoutMatches_matches_user1IdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatches_matches_user1IdTouserInput, userUncheckedCreateWithoutMatches_matches_user1IdTouserInput>
  }

  export type userCreateWithoutMatches_matches_user2IdTouserInput = {
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesCreateNestedManyWithoutUser_matches_user1IdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userUncheckedCreateWithoutMatches_matches_user2IdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user1IdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    message_message_receiverIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userCreateOrConnectWithoutMatches_matches_user2IdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatches_matches_user2IdTouserInput, userUncheckedCreateWithoutMatches_matches_user2IdTouserInput>
  }

  export type userUpsertWithoutMatches_matches_user1IdTouserInput = {
    update: XOR<userUpdateWithoutMatches_matches_user1IdTouserInput, userUncheckedUpdateWithoutMatches_matches_user1IdTouserInput>
    create: XOR<userCreateWithoutMatches_matches_user1IdTouserInput, userUncheckedCreateWithoutMatches_matches_user1IdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatches_matches_user1IdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatches_matches_user1IdTouserInput, userUncheckedUpdateWithoutMatches_matches_user1IdTouserInput>
  }

  export type userUpdateWithoutMatches_matches_user1IdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user2IdTouser?: matchesUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMatches_matches_user1IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user2IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUpsertWithoutMatches_matches_user2IdTouserInput = {
    update: XOR<userUpdateWithoutMatches_matches_user2IdTouserInput, userUncheckedUpdateWithoutMatches_matches_user2IdTouserInput>
    create: XOR<userCreateWithoutMatches_matches_user2IdTouserInput, userUncheckedCreateWithoutMatches_matches_user2IdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatches_matches_user2IdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatches_matches_user2IdTouserInput, userUncheckedUpdateWithoutMatches_matches_user2IdTouserInput>
  }

  export type userUpdateWithoutMatches_matches_user2IdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMatches_matches_user2IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    message_message_receiverIdTouser?: messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userCreateWithoutMessage_message_senderIdTouserInput = {
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_receiverIdTouser?: messageCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userUncheckedCreateWithoutMessage_message_senderIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_receiverIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_receiverIdTouserInput
  }

  export type userCreateOrConnectWithoutMessage_message_senderIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
  }

  export type userCreateWithoutMessage_message_receiverIdTouserInput = {
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
  }

  export type userUncheckedCreateWithoutMessage_message_receiverIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    bio?: string | null
    birth?: Date | string | null
    gender?: string | null
    location?: string | null
    interests?: string | null
    profilePicture?: string | null
    verified?: boolean | null
    isPremium?: boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user1IdTouserInput
    matches_matches_user2IdTouser?: matchesUncheckedCreateNestedManyWithoutUser_matches_user2IdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
  }

  export type userCreateOrConnectWithoutMessage_message_receiverIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_receiverIdTouserInput, userUncheckedCreateWithoutMessage_message_receiverIdTouserInput>
  }

  export type userUpsertWithoutMessage_message_senderIdTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_senderIdTouserInput, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
    create: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_senderIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_senderIdTouserInput, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
  }

  export type userUpdateWithoutMessage_message_senderIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_receiverIdTouser?: messageUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_receiverIdTouser?: messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserNestedInput
  }

  export type userUpsertWithoutMessage_message_receiverIdTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_receiverIdTouserInput, userUncheckedUpdateWithoutMessage_message_receiverIdTouserInput>
    create: XOR<userCreateWithoutMessage_message_receiverIdTouserInput, userUncheckedCreateWithoutMessage_message_receiverIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_receiverIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_receiverIdTouserInput, userUncheckedUpdateWithoutMessage_message_receiverIdTouserInput>
  }

  export type userUpdateWithoutMessage_message_receiverIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_receiverIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPremium?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matches_matches_user1IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserNestedInput
    matches_matches_user2IdTouser?: matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
  }

  export type matchesCreateWithoutUser_matches_user1IdTouserInput = {
    timestamp?: Date | string
    user_matches_user2IdTouser: userCreateNestedOneWithoutMatches_matches_user2IdTouserInput
  }

  export type matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput = {
    id?: number
    user2Id: number
    timestamp?: Date | string
  }

  export type matchesCreateOrConnectWithoutUser_matches_user1IdTouserInput = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput>
  }

  export type matchesCreateManyUser_matches_user1IdTouserInputEnvelope = {
    data: matchesCreateManyUser_matches_user1IdTouserInput | matchesCreateManyUser_matches_user1IdTouserInput[]
    skipDuplicates?: boolean
  }

  export type matchesCreateWithoutUser_matches_user2IdTouserInput = {
    timestamp?: Date | string
    user_matches_user1IdTouser: userCreateNestedOneWithoutMatches_matches_user1IdTouserInput
  }

  export type matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput = {
    id?: number
    user1Id: number
    timestamp?: Date | string
  }

  export type matchesCreateOrConnectWithoutUser_matches_user2IdTouserInput = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput>
  }

  export type matchesCreateManyUser_matches_user2IdTouserInputEnvelope = {
    data: matchesCreateManyUser_matches_user2IdTouserInput | matchesCreateManyUser_matches_user2IdTouserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_senderIdTouserInput = {
    content: string
    timestamp?: Date | string
    user_message_receiverIdTouser: userCreateNestedOneWithoutMessage_message_receiverIdTouserInput
  }

  export type messageUncheckedCreateWithoutUser_message_senderIdTouserInput = {
    id?: number
    receiverId: number
    content: string
    timestamp?: Date | string
  }

  export type messageCreateOrConnectWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput>
  }

  export type messageCreateManyUser_message_senderIdTouserInputEnvelope = {
    data: messageCreateManyUser_message_senderIdTouserInput | messageCreateManyUser_message_senderIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_receiverIdTouserInput = {
    content: string
    timestamp?: Date | string
    user_message_senderIdTouser: userCreateNestedOneWithoutMessage_message_senderIdTouserInput
  }

  export type messageUncheckedCreateWithoutUser_message_receiverIdTouserInput = {
    id?: number
    senderId: number
    content: string
    timestamp?: Date | string
  }

  export type messageCreateOrConnectWithoutUser_message_receiverIdTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput>
  }

  export type messageCreateManyUser_message_receiverIdTouserInputEnvelope = {
    data: messageCreateManyUser_message_receiverIdTouserInput | messageCreateManyUser_message_receiverIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type matchesUpsertWithWhereUniqueWithoutUser_matches_user1IdTouserInput = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutUser_matches_user1IdTouserInput, matchesUncheckedUpdateWithoutUser_matches_user1IdTouserInput>
    create: XOR<matchesCreateWithoutUser_matches_user1IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user1IdTouserInput>
  }

  export type matchesUpdateWithWhereUniqueWithoutUser_matches_user1IdTouserInput = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutUser_matches_user1IdTouserInput, matchesUncheckedUpdateWithoutUser_matches_user1IdTouserInput>
  }

  export type matchesUpdateManyWithWhereWithoutUser_matches_user1IdTouserInput = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserInput>
  }

  export type matchesScalarWhereInput = {
    AND?: matchesScalarWhereInput | matchesScalarWhereInput[]
    OR?: matchesScalarWhereInput[]
    NOT?: matchesScalarWhereInput | matchesScalarWhereInput[]
    id?: IntFilter<"matches"> | number
    user1Id?: IntFilter<"matches"> | number
    user2Id?: IntFilter<"matches"> | number
    timestamp?: DateTimeFilter<"matches"> | Date | string
  }

  export type matchesUpsertWithWhereUniqueWithoutUser_matches_user2IdTouserInput = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutUser_matches_user2IdTouserInput, matchesUncheckedUpdateWithoutUser_matches_user2IdTouserInput>
    create: XOR<matchesCreateWithoutUser_matches_user2IdTouserInput, matchesUncheckedCreateWithoutUser_matches_user2IdTouserInput>
  }

  export type matchesUpdateWithWhereUniqueWithoutUser_matches_user2IdTouserInput = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutUser_matches_user2IdTouserInput, matchesUncheckedUpdateWithoutUser_matches_user2IdTouserInput>
  }

  export type matchesUpdateManyWithWhereWithoutUser_matches_user2IdTouserInput = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserInput>
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_senderIdTouserInput, messageUncheckedUpdateWithoutUser_message_senderIdTouserInput>
    create: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_senderIdTouserInput, messageUncheckedUpdateWithoutUser_message_senderIdTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_senderIdTouserInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: IntFilter<"message"> | number
    senderId?: IntFilter<"message"> | number
    receiverId?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    timestamp?: DateTimeFilter<"message"> | Date | string
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_receiverIdTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_receiverIdTouserInput, messageUncheckedUpdateWithoutUser_message_receiverIdTouserInput>
    create: XOR<messageCreateWithoutUser_message_receiverIdTouserInput, messageUncheckedCreateWithoutUser_message_receiverIdTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_receiverIdTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_receiverIdTouserInput, messageUncheckedUpdateWithoutUser_message_receiverIdTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_receiverIdTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserInput>
  }

  export type matchesCreateManyUser_matches_user1IdTouserInput = {
    id?: number
    user2Id: number
    timestamp?: Date | string
  }

  export type matchesCreateManyUser_matches_user2IdTouserInput = {
    id?: number
    user1Id: number
    timestamp?: Date | string
  }

  export type messageCreateManyUser_message_senderIdTouserInput = {
    id?: number
    receiverId: number
    content: string
    timestamp?: Date | string
  }

  export type messageCreateManyUser_message_receiverIdTouserInput = {
    id?: number
    senderId: number
    content: string
    timestamp?: Date | string
  }

  export type matchesUpdateWithoutUser_matches_user1IdTouserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_matches_user2IdTouser?: userUpdateOneRequiredWithoutMatches_matches_user2IdTouserNestedInput
  }

  export type matchesUncheckedUpdateWithoutUser_matches_user1IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUncheckedUpdateManyWithoutUser_matches_user1IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUpdateWithoutUser_matches_user2IdTouserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_matches_user1IdTouser?: userUpdateOneRequiredWithoutMatches_matches_user1IdTouserNestedInput
  }

  export type matchesUncheckedUpdateWithoutUser_matches_user2IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUncheckedUpdateManyWithoutUser_matches_user2IdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUpdateWithoutUser_message_senderIdTouserInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_receiverIdTouser?: userUpdateOneRequiredWithoutMessage_message_receiverIdTouserNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyWithoutUser_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUpdateWithoutUser_message_receiverIdTouserInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_senderIdTouser?: userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_receiverIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyWithoutUser_message_receiverIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}