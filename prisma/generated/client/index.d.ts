
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model MachineryMaster
 * 
 */
export type MachineryMaster = $Result.DefaultSelection<Prisma.$MachineryMasterPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.machineryMaster`: Exposes CRUD operations for the **MachineryMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MachineryMasters
    * const machineryMasters = await prisma.machineryMaster.findMany()
    * ```
    */
  get machineryMaster(): Prisma.MachineryMasterDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Customer: 'Customer',
    MachineryMaster: 'MachineryMaster'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'customer' | 'machineryMaster'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      MachineryMaster: {
        payload: Prisma.$MachineryMasterPayload<ExtArgs>
        fields: Prisma.MachineryMasterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineryMasterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineryMasterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          findFirst: {
            args: Prisma.MachineryMasterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineryMasterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          findMany: {
            args: Prisma.MachineryMasterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>[]
          }
          create: {
            args: Prisma.MachineryMasterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          createMany: {
            args: Prisma.MachineryMasterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MachineryMasterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          update: {
            args: Prisma.MachineryMasterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          deleteMany: {
            args: Prisma.MachineryMasterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MachineryMasterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MachineryMasterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MachineryMasterPayload>
          }
          aggregate: {
            args: Prisma.MachineryMasterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMachineryMaster>
          }
          groupBy: {
            args: Prisma.MachineryMasterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MachineryMasterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineryMasterCountArgs<ExtArgs>,
            result: $Utils.Optional<MachineryMasterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model User
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
    Mill_id: number | null
    Created_By: number | null
    Modified_By: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    Mill_id: number | null
    Created_By: number | null
    Modified_By: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    Role: string | null
    status: string | null
    Category: string | null
    Mill_id: number | null
    Created_Date: Date | null
    Created_By: number | null
    Modified_Date: Date | null
    Modified_By: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    Role: string | null
    status: string | null
    Category: string | null
    Mill_id: number | null
    Created_Date: Date | null
    Created_By: number | null
    Modified_Date: Date | null
    Modified_By: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    Role: number
    status: number
    Category: number
    Mill_id: number
    Created_Date: number
    Created_By: number
    Modified_Date: number
    Modified_By: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    Mill_id?: true
    Created_By?: true
    Modified_By?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    Mill_id?: true
    Created_By?: true
    Modified_By?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    Role?: true
    status?: true
    Category?: true
    Mill_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    Role?: true
    status?: true
    Category?: true
    Mill_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    Role?: true
    status?: true
    Category?: true
    Mill_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
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
    password: string
    Role: string
    status: string
    Category: string
    Mill_id: number
    Created_Date: Date
    Created_By: number
    Modified_Date: Date | null
    Modified_By: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    Role?: boolean
    status?: boolean
    Category?: boolean
    Mill_id?: boolean
    Created_Date?: boolean
    Created_By?: boolean
    Modified_Date?: boolean
    Modified_By?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    Role?: boolean
    status?: boolean
    Category?: boolean
    Mill_id?: boolean
    Created_Date?: boolean
    Created_By?: boolean
    Modified_Date?: boolean
    Modified_By?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      Role: string
      status: string
      Category: string
      Mill_id: number
      Created_Date: Date
      Created_By: number
      Modified_Date: Date | null
      Modified_By: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly Category: FieldRef<"User", 'String'>
    readonly Mill_id: FieldRef<"User", 'Int'>
    readonly Created_Date: FieldRef<"User", 'DateTime'>
    readonly Created_By: FieldRef<"User", 'Int'>
    readonly Modified_Date: FieldRef<"User", 'DateTime'>
    readonly Modified_By: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    custid: number | null
  }

  export type CustomerSumAggregateOutputType = {
    custid: number | null
  }

  export type CustomerMinAggregateOutputType = {
    custid: number | null
    name: string | null
    address1: string | null
    address2: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    email: string | null
    phone: string | null
    mobile: string | null
    fax: string | null
    customertype: string | null
    status: string | null
    Contact_Person: string | null
    Designation: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    custid: number | null
    name: string | null
    address1: string | null
    address2: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    email: string | null
    phone: string | null
    mobile: string | null
    fax: string | null
    customertype: string | null
    status: string | null
    Contact_Person: string | null
    Designation: string | null
  }

  export type CustomerCountAggregateOutputType = {
    custid: number
    name: number
    address1: number
    address2: number
    city: number
    state: number
    country: number
    pincode: number
    email: number
    phone: number
    mobile: number
    fax: number
    customertype: number
    status: number
    Contact_Person: number
    Designation: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    custid?: true
  }

  export type CustomerSumAggregateInputType = {
    custid?: true
  }

  export type CustomerMinAggregateInputType = {
    custid?: true
    name?: true
    address1?: true
    address2?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    email?: true
    phone?: true
    mobile?: true
    fax?: true
    customertype?: true
    status?: true
    Contact_Person?: true
    Designation?: true
  }

  export type CustomerMaxAggregateInputType = {
    custid?: true
    name?: true
    address1?: true
    address2?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    email?: true
    phone?: true
    mobile?: true
    fax?: true
    customertype?: true
    status?: true
    Contact_Person?: true
    Designation?: true
  }

  export type CustomerCountAggregateInputType = {
    custid?: true
    name?: true
    address1?: true
    address2?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    email?: true
    phone?: true
    mobile?: true
    fax?: true
    customertype?: true
    status?: true
    Contact_Person?: true
    Designation?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    custid: number
    name: string
    address1: string
    address2: string
    city: string
    state: string
    country: string
    pincode: string
    email: string | null
    phone: string
    mobile: string
    fax: string | null
    customertype: string
    status: string
    Contact_Person: string
    Designation: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    custid?: boolean
    name?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    email?: boolean
    phone?: boolean
    mobile?: boolean
    fax?: boolean
    customertype?: boolean
    status?: boolean
    Contact_Person?: boolean
    Designation?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    custid?: boolean
    name?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    email?: boolean
    phone?: boolean
    mobile?: boolean
    fax?: boolean
    customertype?: boolean
    status?: boolean
    Contact_Person?: boolean
    Designation?: boolean
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      custid: number
      name: string
      address1: string
      address2: string
      city: string
      state: string
      country: string
      pincode: string
      email: string | null
      phone: string
      mobile: string
      fax: string | null
      customertype: string
      status: string
      Contact_Person: string
      Designation: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `custid`
     * const customerWithCustidOnly = await prisma.customer.findMany({ select: { custid: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly custid: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly address1: FieldRef<"Customer", 'String'>
    readonly address2: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly state: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly pincode: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly fax: FieldRef<"Customer", 'String'>
    readonly customertype: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'String'>
    readonly Contact_Person: FieldRef<"Customer", 'String'>
    readonly Designation: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
  }



  /**
   * Model MachineryMaster
   */

  export type AggregateMachineryMaster = {
    _count: MachineryMasterCountAggregateOutputType | null
    _avg: MachineryMasterAvgAggregateOutputType | null
    _sum: MachineryMasterSumAggregateOutputType | null
    _min: MachineryMasterMinAggregateOutputType | null
    _max: MachineryMasterMaxAggregateOutputType | null
  }

  export type MachineryMasterAvgAggregateOutputType = {
    Mac_Id: number | null
    Mac_Code: number | null
    Dept_Code: number | null
    Scutchers: number | null
    Deliveries_per_machine: number | null
    Spdls_per_frame: number | null
    Drums_per_machine: number | null
    No_of_heads: number | null
    Mill_id: number | null
    Unit_id: number | null
    Created_By: number | null
    Modified_By: number | null
  }

  export type MachineryMasterSumAggregateOutputType = {
    Mac_Id: number | null
    Mac_Code: number | null
    Dept_Code: number | null
    Scutchers: number | null
    Deliveries_per_machine: number | null
    Spdls_per_frame: number | null
    Drums_per_machine: number | null
    No_of_heads: number | null
    Mill_id: number | null
    Unit_id: number | null
    Created_By: number | null
    Modified_By: number | null
  }

  export type MachineryMasterMinAggregateOutputType = {
    Mac_Id: number | null
    Mac_Code: number | null
    Mac_Name: string | null
    Dept_Code: number | null
    Dept_Name: string | null
    Make: string | null
    Model: string | null
    Group_Name: string | null
    Scutchers: number | null
    Type_of_feed: string | null
    Type_of_card: string | null
    Deliveries_per_machine: number | null
    Spdls_per_frame: number | null
    Drums_per_machine: number | null
    No_of_heads: number | null
    Location: string | null
    Serial_No: string | null
    Purchase_Date: Date | null
    Mill_id: number | null
    Unit_id: number | null
    Created_Date: Date | null
    Created_By: number | null
    Modified_Date: Date | null
    Modified_By: number | null
    Status: string | null
  }

  export type MachineryMasterMaxAggregateOutputType = {
    Mac_Id: number | null
    Mac_Code: number | null
    Mac_Name: string | null
    Dept_Code: number | null
    Dept_Name: string | null
    Make: string | null
    Model: string | null
    Group_Name: string | null
    Scutchers: number | null
    Type_of_feed: string | null
    Type_of_card: string | null
    Deliveries_per_machine: number | null
    Spdls_per_frame: number | null
    Drums_per_machine: number | null
    No_of_heads: number | null
    Location: string | null
    Serial_No: string | null
    Purchase_Date: Date | null
    Mill_id: number | null
    Unit_id: number | null
    Created_Date: Date | null
    Created_By: number | null
    Modified_Date: Date | null
    Modified_By: number | null
    Status: string | null
  }

  export type MachineryMasterCountAggregateOutputType = {
    Mac_Id: number
    Mac_Code: number
    Mac_Name: number
    Dept_Code: number
    Dept_Name: number
    Make: number
    Model: number
    Group_Name: number
    Scutchers: number
    Type_of_feed: number
    Type_of_card: number
    Deliveries_per_machine: number
    Spdls_per_frame: number
    Drums_per_machine: number
    No_of_heads: number
    Location: number
    Serial_No: number
    Purchase_Date: number
    Mill_id: number
    Unit_id: number
    Created_Date: number
    Created_By: number
    Modified_Date: number
    Modified_By: number
    Status: number
    _all: number
  }


  export type MachineryMasterAvgAggregateInputType = {
    Mac_Id?: true
    Mac_Code?: true
    Dept_Code?: true
    Scutchers?: true
    Deliveries_per_machine?: true
    Spdls_per_frame?: true
    Drums_per_machine?: true
    No_of_heads?: true
    Mill_id?: true
    Unit_id?: true
    Created_By?: true
    Modified_By?: true
  }

  export type MachineryMasterSumAggregateInputType = {
    Mac_Id?: true
    Mac_Code?: true
    Dept_Code?: true
    Scutchers?: true
    Deliveries_per_machine?: true
    Spdls_per_frame?: true
    Drums_per_machine?: true
    No_of_heads?: true
    Mill_id?: true
    Unit_id?: true
    Created_By?: true
    Modified_By?: true
  }

  export type MachineryMasterMinAggregateInputType = {
    Mac_Id?: true
    Mac_Code?: true
    Mac_Name?: true
    Dept_Code?: true
    Dept_Name?: true
    Make?: true
    Model?: true
    Group_Name?: true
    Scutchers?: true
    Type_of_feed?: true
    Type_of_card?: true
    Deliveries_per_machine?: true
    Spdls_per_frame?: true
    Drums_per_machine?: true
    No_of_heads?: true
    Location?: true
    Serial_No?: true
    Purchase_Date?: true
    Mill_id?: true
    Unit_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
    Status?: true
  }

  export type MachineryMasterMaxAggregateInputType = {
    Mac_Id?: true
    Mac_Code?: true
    Mac_Name?: true
    Dept_Code?: true
    Dept_Name?: true
    Make?: true
    Model?: true
    Group_Name?: true
    Scutchers?: true
    Type_of_feed?: true
    Type_of_card?: true
    Deliveries_per_machine?: true
    Spdls_per_frame?: true
    Drums_per_machine?: true
    No_of_heads?: true
    Location?: true
    Serial_No?: true
    Purchase_Date?: true
    Mill_id?: true
    Unit_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
    Status?: true
  }

  export type MachineryMasterCountAggregateInputType = {
    Mac_Id?: true
    Mac_Code?: true
    Mac_Name?: true
    Dept_Code?: true
    Dept_Name?: true
    Make?: true
    Model?: true
    Group_Name?: true
    Scutchers?: true
    Type_of_feed?: true
    Type_of_card?: true
    Deliveries_per_machine?: true
    Spdls_per_frame?: true
    Drums_per_machine?: true
    No_of_heads?: true
    Location?: true
    Serial_No?: true
    Purchase_Date?: true
    Mill_id?: true
    Unit_id?: true
    Created_Date?: true
    Created_By?: true
    Modified_Date?: true
    Modified_By?: true
    Status?: true
    _all?: true
  }

  export type MachineryMasterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineryMaster to aggregate.
     */
    where?: MachineryMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineryMasters to fetch.
     */
    orderBy?: MachineryMasterOrderByWithRelationInput | MachineryMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineryMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineryMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineryMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MachineryMasters
    **/
    _count?: true | MachineryMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineryMasterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineryMasterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineryMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineryMasterMaxAggregateInputType
  }

  export type GetMachineryMasterAggregateType<T extends MachineryMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateMachineryMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachineryMaster[P]>
      : GetScalarType<T[P], AggregateMachineryMaster[P]>
  }




  export type MachineryMasterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineryMasterWhereInput
    orderBy?: MachineryMasterOrderByWithAggregationInput | MachineryMasterOrderByWithAggregationInput[]
    by: MachineryMasterScalarFieldEnum[] | MachineryMasterScalarFieldEnum
    having?: MachineryMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineryMasterCountAggregateInputType | true
    _avg?: MachineryMasterAvgAggregateInputType
    _sum?: MachineryMasterSumAggregateInputType
    _min?: MachineryMasterMinAggregateInputType
    _max?: MachineryMasterMaxAggregateInputType
  }

  export type MachineryMasterGroupByOutputType = {
    Mac_Id: number
    Mac_Code: number
    Mac_Name: string
    Dept_Code: number
    Dept_Name: string
    Make: string
    Model: string
    Group_Name: string
    Scutchers: number
    Type_of_feed: string
    Type_of_card: string
    Deliveries_per_machine: number
    Spdls_per_frame: number
    Drums_per_machine: number
    No_of_heads: number
    Location: string
    Serial_No: string
    Purchase_Date: Date | null
    Mill_id: number
    Unit_id: number
    Created_Date: Date
    Created_By: number
    Modified_Date: Date | null
    Modified_By: number
    Status: string
    _count: MachineryMasterCountAggregateOutputType | null
    _avg: MachineryMasterAvgAggregateOutputType | null
    _sum: MachineryMasterSumAggregateOutputType | null
    _min: MachineryMasterMinAggregateOutputType | null
    _max: MachineryMasterMaxAggregateOutputType | null
  }

  type GetMachineryMasterGroupByPayload<T extends MachineryMasterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineryMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineryMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineryMasterGroupByOutputType[P]>
            : GetScalarType<T[P], MachineryMasterGroupByOutputType[P]>
        }
      >
    >


  export type MachineryMasterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Mac_Id?: boolean
    Mac_Code?: boolean
    Mac_Name?: boolean
    Dept_Code?: boolean
    Dept_Name?: boolean
    Make?: boolean
    Model?: boolean
    Group_Name?: boolean
    Scutchers?: boolean
    Type_of_feed?: boolean
    Type_of_card?: boolean
    Deliveries_per_machine?: boolean
    Spdls_per_frame?: boolean
    Drums_per_machine?: boolean
    No_of_heads?: boolean
    Location?: boolean
    Serial_No?: boolean
    Purchase_Date?: boolean
    Mill_id?: boolean
    Unit_id?: boolean
    Created_Date?: boolean
    Created_By?: boolean
    Modified_Date?: boolean
    Modified_By?: boolean
    Status?: boolean
  }, ExtArgs["result"]["machineryMaster"]>

  export type MachineryMasterSelectScalar = {
    Mac_Id?: boolean
    Mac_Code?: boolean
    Mac_Name?: boolean
    Dept_Code?: boolean
    Dept_Name?: boolean
    Make?: boolean
    Model?: boolean
    Group_Name?: boolean
    Scutchers?: boolean
    Type_of_feed?: boolean
    Type_of_card?: boolean
    Deliveries_per_machine?: boolean
    Spdls_per_frame?: boolean
    Drums_per_machine?: boolean
    No_of_heads?: boolean
    Location?: boolean
    Serial_No?: boolean
    Purchase_Date?: boolean
    Mill_id?: boolean
    Unit_id?: boolean
    Created_Date?: boolean
    Created_By?: boolean
    Modified_Date?: boolean
    Modified_By?: boolean
    Status?: boolean
  }


  export type $MachineryMasterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MachineryMaster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Mac_Id: number
      Mac_Code: number
      Mac_Name: string
      Dept_Code: number
      Dept_Name: string
      Make: string
      Model: string
      Group_Name: string
      Scutchers: number
      Type_of_feed: string
      Type_of_card: string
      Deliveries_per_machine: number
      Spdls_per_frame: number
      Drums_per_machine: number
      No_of_heads: number
      Location: string
      Serial_No: string
      Purchase_Date: Date | null
      Mill_id: number
      Unit_id: number
      Created_Date: Date
      Created_By: number
      Modified_Date: Date | null
      Modified_By: number
      Status: string
    }, ExtArgs["result"]["machineryMaster"]>
    composites: {}
  }


  type MachineryMasterGetPayload<S extends boolean | null | undefined | MachineryMasterDefaultArgs> = $Result.GetResult<Prisma.$MachineryMasterPayload, S>

  type MachineryMasterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MachineryMasterFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MachineryMasterCountAggregateInputType | true
    }

  export interface MachineryMasterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MachineryMaster'], meta: { name: 'MachineryMaster' } }
    /**
     * Find zero or one MachineryMaster that matches the filter.
     * @param {MachineryMasterFindUniqueArgs} args - Arguments to find a MachineryMaster
     * @example
     * // Get one MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MachineryMasterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterFindUniqueArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MachineryMaster that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MachineryMasterFindUniqueOrThrowArgs} args - Arguments to find a MachineryMaster
     * @example
     * // Get one MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MachineryMasterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MachineryMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterFindFirstArgs} args - Arguments to find a MachineryMaster
     * @example
     * // Get one MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MachineryMasterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterFindFirstArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MachineryMaster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterFindFirstOrThrowArgs} args - Arguments to find a MachineryMaster
     * @example
     * // Get one MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MachineryMasterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MachineryMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MachineryMasters
     * const machineryMasters = await prisma.machineryMaster.findMany()
     * 
     * // Get first 10 MachineryMasters
     * const machineryMasters = await prisma.machineryMaster.findMany({ take: 10 })
     * 
     * // Only select the `Mac_Id`
     * const machineryMasterWithMac_IdOnly = await prisma.machineryMaster.findMany({ select: { Mac_Id: true } })
     * 
    **/
    findMany<T extends MachineryMasterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MachineryMaster.
     * @param {MachineryMasterCreateArgs} args - Arguments to create a MachineryMaster.
     * @example
     * // Create one MachineryMaster
     * const MachineryMaster = await prisma.machineryMaster.create({
     *   data: {
     *     // ... data to create a MachineryMaster
     *   }
     * })
     * 
    **/
    create<T extends MachineryMasterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterCreateArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MachineryMasters.
     *     @param {MachineryMasterCreateManyArgs} args - Arguments to create many MachineryMasters.
     *     @example
     *     // Create many MachineryMasters
     *     const machineryMaster = await prisma.machineryMaster.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MachineryMasterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MachineryMaster.
     * @param {MachineryMasterDeleteArgs} args - Arguments to delete one MachineryMaster.
     * @example
     * // Delete one MachineryMaster
     * const MachineryMaster = await prisma.machineryMaster.delete({
     *   where: {
     *     // ... filter to delete one MachineryMaster
     *   }
     * })
     * 
    **/
    delete<T extends MachineryMasterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterDeleteArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MachineryMaster.
     * @param {MachineryMasterUpdateArgs} args - Arguments to update one MachineryMaster.
     * @example
     * // Update one MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MachineryMasterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterUpdateArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MachineryMasters.
     * @param {MachineryMasterDeleteManyArgs} args - Arguments to filter MachineryMasters to delete.
     * @example
     * // Delete a few MachineryMasters
     * const { count } = await prisma.machineryMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MachineryMasterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MachineryMasterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineryMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MachineryMasters
     * const machineryMaster = await prisma.machineryMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MachineryMasterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MachineryMaster.
     * @param {MachineryMasterUpsertArgs} args - Arguments to update or create a MachineryMaster.
     * @example
     * // Update or create a MachineryMaster
     * const machineryMaster = await prisma.machineryMaster.upsert({
     *   create: {
     *     // ... data to create a MachineryMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MachineryMaster we want to update
     *   }
     * })
    **/
    upsert<T extends MachineryMasterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MachineryMasterUpsertArgs<ExtArgs>>
    ): Prisma__MachineryMasterClient<$Result.GetResult<Prisma.$MachineryMasterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MachineryMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterCountArgs} args - Arguments to filter MachineryMasters to count.
     * @example
     * // Count the number of MachineryMasters
     * const count = await prisma.machineryMaster.count({
     *   where: {
     *     // ... the filter for the MachineryMasters we want to count
     *   }
     * })
    **/
    count<T extends MachineryMasterCountArgs>(
      args?: Subset<T, MachineryMasterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineryMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MachineryMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineryMasterAggregateArgs>(args: Subset<T, MachineryMasterAggregateArgs>): Prisma.PrismaPromise<GetMachineryMasterAggregateType<T>>

    /**
     * Group by MachineryMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineryMasterGroupByArgs} args - Group by arguments.
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
      T extends MachineryMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineryMasterGroupByArgs['orderBy'] }
        : { orderBy?: MachineryMasterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineryMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineryMasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MachineryMaster model
   */
  readonly fields: MachineryMasterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MachineryMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineryMasterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MachineryMaster model
   */ 
  interface MachineryMasterFieldRefs {
    readonly Mac_Id: FieldRef<"MachineryMaster", 'Int'>
    readonly Mac_Code: FieldRef<"MachineryMaster", 'Int'>
    readonly Mac_Name: FieldRef<"MachineryMaster", 'String'>
    readonly Dept_Code: FieldRef<"MachineryMaster", 'Int'>
    readonly Dept_Name: FieldRef<"MachineryMaster", 'String'>
    readonly Make: FieldRef<"MachineryMaster", 'String'>
    readonly Model: FieldRef<"MachineryMaster", 'String'>
    readonly Group_Name: FieldRef<"MachineryMaster", 'String'>
    readonly Scutchers: FieldRef<"MachineryMaster", 'Int'>
    readonly Type_of_feed: FieldRef<"MachineryMaster", 'String'>
    readonly Type_of_card: FieldRef<"MachineryMaster", 'String'>
    readonly Deliveries_per_machine: FieldRef<"MachineryMaster", 'Int'>
    readonly Spdls_per_frame: FieldRef<"MachineryMaster", 'Int'>
    readonly Drums_per_machine: FieldRef<"MachineryMaster", 'Int'>
    readonly No_of_heads: FieldRef<"MachineryMaster", 'Int'>
    readonly Location: FieldRef<"MachineryMaster", 'String'>
    readonly Serial_No: FieldRef<"MachineryMaster", 'String'>
    readonly Purchase_Date: FieldRef<"MachineryMaster", 'DateTime'>
    readonly Mill_id: FieldRef<"MachineryMaster", 'Int'>
    readonly Unit_id: FieldRef<"MachineryMaster", 'Int'>
    readonly Created_Date: FieldRef<"MachineryMaster", 'DateTime'>
    readonly Created_By: FieldRef<"MachineryMaster", 'Int'>
    readonly Modified_Date: FieldRef<"MachineryMaster", 'DateTime'>
    readonly Modified_By: FieldRef<"MachineryMaster", 'Int'>
    readonly Status: FieldRef<"MachineryMaster", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MachineryMaster findUnique
   */
  export type MachineryMasterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter, which MachineryMaster to fetch.
     */
    where: MachineryMasterWhereUniqueInput
  }


  /**
   * MachineryMaster findUniqueOrThrow
   */
  export type MachineryMasterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter, which MachineryMaster to fetch.
     */
    where: MachineryMasterWhereUniqueInput
  }


  /**
   * MachineryMaster findFirst
   */
  export type MachineryMasterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter, which MachineryMaster to fetch.
     */
    where?: MachineryMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineryMasters to fetch.
     */
    orderBy?: MachineryMasterOrderByWithRelationInput | MachineryMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineryMasters.
     */
    cursor?: MachineryMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineryMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineryMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineryMasters.
     */
    distinct?: MachineryMasterScalarFieldEnum | MachineryMasterScalarFieldEnum[]
  }


  /**
   * MachineryMaster findFirstOrThrow
   */
  export type MachineryMasterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter, which MachineryMaster to fetch.
     */
    where?: MachineryMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineryMasters to fetch.
     */
    orderBy?: MachineryMasterOrderByWithRelationInput | MachineryMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineryMasters.
     */
    cursor?: MachineryMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineryMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineryMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineryMasters.
     */
    distinct?: MachineryMasterScalarFieldEnum | MachineryMasterScalarFieldEnum[]
  }


  /**
   * MachineryMaster findMany
   */
  export type MachineryMasterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter, which MachineryMasters to fetch.
     */
    where?: MachineryMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineryMasters to fetch.
     */
    orderBy?: MachineryMasterOrderByWithRelationInput | MachineryMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MachineryMasters.
     */
    cursor?: MachineryMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineryMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineryMasters.
     */
    skip?: number
    distinct?: MachineryMasterScalarFieldEnum | MachineryMasterScalarFieldEnum[]
  }


  /**
   * MachineryMaster create
   */
  export type MachineryMasterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * The data needed to create a MachineryMaster.
     */
    data: XOR<MachineryMasterCreateInput, MachineryMasterUncheckedCreateInput>
  }


  /**
   * MachineryMaster createMany
   */
  export type MachineryMasterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MachineryMasters.
     */
    data: MachineryMasterCreateManyInput | MachineryMasterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MachineryMaster update
   */
  export type MachineryMasterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * The data needed to update a MachineryMaster.
     */
    data: XOR<MachineryMasterUpdateInput, MachineryMasterUncheckedUpdateInput>
    /**
     * Choose, which MachineryMaster to update.
     */
    where: MachineryMasterWhereUniqueInput
  }


  /**
   * MachineryMaster updateMany
   */
  export type MachineryMasterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MachineryMasters.
     */
    data: XOR<MachineryMasterUpdateManyMutationInput, MachineryMasterUncheckedUpdateManyInput>
    /**
     * Filter which MachineryMasters to update
     */
    where?: MachineryMasterWhereInput
  }


  /**
   * MachineryMaster upsert
   */
  export type MachineryMasterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * The filter to search for the MachineryMaster to update in case it exists.
     */
    where: MachineryMasterWhereUniqueInput
    /**
     * In case the MachineryMaster found by the `where` argument doesn't exist, create a new MachineryMaster with this data.
     */
    create: XOR<MachineryMasterCreateInput, MachineryMasterUncheckedCreateInput>
    /**
     * In case the MachineryMaster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineryMasterUpdateInput, MachineryMasterUncheckedUpdateInput>
  }


  /**
   * MachineryMaster delete
   */
  export type MachineryMasterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
    /**
     * Filter which MachineryMaster to delete.
     */
    where: MachineryMasterWhereUniqueInput
  }


  /**
   * MachineryMaster deleteMany
   */
  export type MachineryMasterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineryMasters to delete
     */
    where?: MachineryMasterWhereInput
  }


  /**
   * MachineryMaster without action
   */
  export type MachineryMasterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineryMaster
     */
    select?: MachineryMasterSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    Role: 'Role',
    status: 'status',
    Category: 'Category',
    Mill_id: 'Mill_id',
    Created_Date: 'Created_Date',
    Created_By: 'Created_By',
    Modified_Date: 'Modified_Date',
    Modified_By: 'Modified_By'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    custid: 'custid',
    name: 'name',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode',
    email: 'email',
    phone: 'phone',
    mobile: 'mobile',
    fax: 'fax',
    customertype: 'customertype',
    status: 'status',
    Contact_Person: 'Contact_Person',
    Designation: 'Designation'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MachineryMasterScalarFieldEnum: {
    Mac_Id: 'Mac_Id',
    Mac_Code: 'Mac_Code',
    Mac_Name: 'Mac_Name',
    Dept_Code: 'Dept_Code',
    Dept_Name: 'Dept_Name',
    Make: 'Make',
    Model: 'Model',
    Group_Name: 'Group_Name',
    Scutchers: 'Scutchers',
    Type_of_feed: 'Type_of_feed',
    Type_of_card: 'Type_of_card',
    Deliveries_per_machine: 'Deliveries_per_machine',
    Spdls_per_frame: 'Spdls_per_frame',
    Drums_per_machine: 'Drums_per_machine',
    No_of_heads: 'No_of_heads',
    Location: 'Location',
    Serial_No: 'Serial_No',
    Purchase_Date: 'Purchase_Date',
    Mill_id: 'Mill_id',
    Unit_id: 'Unit_id',
    Created_Date: 'Created_Date',
    Created_By: 'Created_By',
    Modified_Date: 'Modified_Date',
    Modified_By: 'Modified_By',
    Status: 'Status'
  };

  export type MachineryMasterScalarFieldEnum = (typeof MachineryMasterScalarFieldEnum)[keyof typeof MachineryMasterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    Category?: StringFilter<"User"> | string
    Mill_id?: IntFilter<"User"> | number
    Created_Date?: DateTimeFilter<"User"> | Date | string
    Created_By?: IntFilter<"User"> | number
    Modified_Date?: DateTimeNullableFilter<"User"> | Date | string | null
    Modified_By?: IntFilter<"User"> | number
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Role?: SortOrder
    status?: SortOrder
    Category?: SortOrder
    Mill_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrderInput | SortOrder
    Modified_By?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    Category?: StringFilter<"User"> | string
    Mill_id?: IntFilter<"User"> | number
    Created_Date?: DateTimeFilter<"User"> | Date | string
    Created_By?: IntFilter<"User"> | number
    Modified_Date?: DateTimeNullableFilter<"User"> | Date | string | null
    Modified_By?: IntFilter<"User"> | number
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Role?: SortOrder
    status?: SortOrder
    Category?: SortOrder
    Mill_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrderInput | SortOrder
    Modified_By?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    Role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    Category?: StringWithAggregatesFilter<"User"> | string
    Mill_id?: IntWithAggregatesFilter<"User"> | number
    Created_Date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    Created_By?: IntWithAggregatesFilter<"User"> | number
    Modified_Date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    Modified_By?: IntWithAggregatesFilter<"User"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    custid?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    address1?: StringFilter<"Customer"> | string
    address2?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    state?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    pincode?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    fax?: StringNullableFilter<"Customer"> | string | null
    customertype?: StringFilter<"Customer"> | string
    status?: StringFilter<"Customer"> | string
    Contact_Person?: StringFilter<"Customer"> | string
    Designation?: StringFilter<"Customer"> | string
  }

  export type CustomerOrderByWithRelationInput = {
    custid?: SortOrder
    name?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    fax?: SortOrderInput | SortOrder
    customertype?: SortOrder
    status?: SortOrder
    Contact_Person?: SortOrder
    Designation?: SortOrder
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    custid?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address1?: StringFilter<"Customer"> | string
    address2?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    state?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    pincode?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    fax?: StringNullableFilter<"Customer"> | string | null
    customertype?: StringFilter<"Customer"> | string
    status?: StringFilter<"Customer"> | string
    Contact_Person?: StringFilter<"Customer"> | string
    Designation?: StringFilter<"Customer"> | string
  }, "custid">

  export type CustomerOrderByWithAggregationInput = {
    custid?: SortOrder
    name?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    fax?: SortOrderInput | SortOrder
    customertype?: SortOrder
    status?: SortOrder
    Contact_Person?: SortOrder
    Designation?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    custid?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    address1?: StringWithAggregatesFilter<"Customer"> | string
    address2?: StringWithAggregatesFilter<"Customer"> | string
    city?: StringWithAggregatesFilter<"Customer"> | string
    state?: StringWithAggregatesFilter<"Customer"> | string
    country?: StringWithAggregatesFilter<"Customer"> | string
    pincode?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringWithAggregatesFilter<"Customer"> | string
    fax?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    customertype?: StringWithAggregatesFilter<"Customer"> | string
    status?: StringWithAggregatesFilter<"Customer"> | string
    Contact_Person?: StringWithAggregatesFilter<"Customer"> | string
    Designation?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type MachineryMasterWhereInput = {
    AND?: MachineryMasterWhereInput | MachineryMasterWhereInput[]
    OR?: MachineryMasterWhereInput[]
    NOT?: MachineryMasterWhereInput | MachineryMasterWhereInput[]
    Mac_Id?: IntFilter<"MachineryMaster"> | number
    Mac_Code?: IntFilter<"MachineryMaster"> | number
    Mac_Name?: StringFilter<"MachineryMaster"> | string
    Dept_Code?: IntFilter<"MachineryMaster"> | number
    Dept_Name?: StringFilter<"MachineryMaster"> | string
    Make?: StringFilter<"MachineryMaster"> | string
    Model?: StringFilter<"MachineryMaster"> | string
    Group_Name?: StringFilter<"MachineryMaster"> | string
    Scutchers?: IntFilter<"MachineryMaster"> | number
    Type_of_feed?: StringFilter<"MachineryMaster"> | string
    Type_of_card?: StringFilter<"MachineryMaster"> | string
    Deliveries_per_machine?: IntFilter<"MachineryMaster"> | number
    Spdls_per_frame?: IntFilter<"MachineryMaster"> | number
    Drums_per_machine?: IntFilter<"MachineryMaster"> | number
    No_of_heads?: IntFilter<"MachineryMaster"> | number
    Location?: StringFilter<"MachineryMaster"> | string
    Serial_No?: StringFilter<"MachineryMaster"> | string
    Purchase_Date?: DateTimeNullableFilter<"MachineryMaster"> | Date | string | null
    Mill_id?: IntFilter<"MachineryMaster"> | number
    Unit_id?: IntFilter<"MachineryMaster"> | number
    Created_Date?: DateTimeFilter<"MachineryMaster"> | Date | string
    Created_By?: IntFilter<"MachineryMaster"> | number
    Modified_Date?: DateTimeNullableFilter<"MachineryMaster"> | Date | string | null
    Modified_By?: IntFilter<"MachineryMaster"> | number
    Status?: StringFilter<"MachineryMaster"> | string
  }

  export type MachineryMasterOrderByWithRelationInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Mac_Name?: SortOrder
    Dept_Code?: SortOrder
    Dept_Name?: SortOrder
    Make?: SortOrder
    Model?: SortOrder
    Group_Name?: SortOrder
    Scutchers?: SortOrder
    Type_of_feed?: SortOrder
    Type_of_card?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Location?: SortOrder
    Serial_No?: SortOrder
    Purchase_Date?: SortOrderInput | SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrderInput | SortOrder
    Modified_By?: SortOrder
    Status?: SortOrder
  }

  export type MachineryMasterWhereUniqueInput = Prisma.AtLeast<{
    Mac_Id?: number
    AND?: MachineryMasterWhereInput | MachineryMasterWhereInput[]
    OR?: MachineryMasterWhereInput[]
    NOT?: MachineryMasterWhereInput | MachineryMasterWhereInput[]
    Mac_Code?: IntFilter<"MachineryMaster"> | number
    Mac_Name?: StringFilter<"MachineryMaster"> | string
    Dept_Code?: IntFilter<"MachineryMaster"> | number
    Dept_Name?: StringFilter<"MachineryMaster"> | string
    Make?: StringFilter<"MachineryMaster"> | string
    Model?: StringFilter<"MachineryMaster"> | string
    Group_Name?: StringFilter<"MachineryMaster"> | string
    Scutchers?: IntFilter<"MachineryMaster"> | number
    Type_of_feed?: StringFilter<"MachineryMaster"> | string
    Type_of_card?: StringFilter<"MachineryMaster"> | string
    Deliveries_per_machine?: IntFilter<"MachineryMaster"> | number
    Spdls_per_frame?: IntFilter<"MachineryMaster"> | number
    Drums_per_machine?: IntFilter<"MachineryMaster"> | number
    No_of_heads?: IntFilter<"MachineryMaster"> | number
    Location?: StringFilter<"MachineryMaster"> | string
    Serial_No?: StringFilter<"MachineryMaster"> | string
    Purchase_Date?: DateTimeNullableFilter<"MachineryMaster"> | Date | string | null
    Mill_id?: IntFilter<"MachineryMaster"> | number
    Unit_id?: IntFilter<"MachineryMaster"> | number
    Created_Date?: DateTimeFilter<"MachineryMaster"> | Date | string
    Created_By?: IntFilter<"MachineryMaster"> | number
    Modified_Date?: DateTimeNullableFilter<"MachineryMaster"> | Date | string | null
    Modified_By?: IntFilter<"MachineryMaster"> | number
    Status?: StringFilter<"MachineryMaster"> | string
  }, "Mac_Id">

  export type MachineryMasterOrderByWithAggregationInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Mac_Name?: SortOrder
    Dept_Code?: SortOrder
    Dept_Name?: SortOrder
    Make?: SortOrder
    Model?: SortOrder
    Group_Name?: SortOrder
    Scutchers?: SortOrder
    Type_of_feed?: SortOrder
    Type_of_card?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Location?: SortOrder
    Serial_No?: SortOrder
    Purchase_Date?: SortOrderInput | SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrderInput | SortOrder
    Modified_By?: SortOrder
    Status?: SortOrder
    _count?: MachineryMasterCountOrderByAggregateInput
    _avg?: MachineryMasterAvgOrderByAggregateInput
    _max?: MachineryMasterMaxOrderByAggregateInput
    _min?: MachineryMasterMinOrderByAggregateInput
    _sum?: MachineryMasterSumOrderByAggregateInput
  }

  export type MachineryMasterScalarWhereWithAggregatesInput = {
    AND?: MachineryMasterScalarWhereWithAggregatesInput | MachineryMasterScalarWhereWithAggregatesInput[]
    OR?: MachineryMasterScalarWhereWithAggregatesInput[]
    NOT?: MachineryMasterScalarWhereWithAggregatesInput | MachineryMasterScalarWhereWithAggregatesInput[]
    Mac_Id?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Mac_Code?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Mac_Name?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Dept_Code?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Dept_Name?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Make?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Model?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Group_Name?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Scutchers?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Type_of_feed?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Type_of_card?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Deliveries_per_machine?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Spdls_per_frame?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Drums_per_machine?: IntWithAggregatesFilter<"MachineryMaster"> | number
    No_of_heads?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Location?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Serial_No?: StringWithAggregatesFilter<"MachineryMaster"> | string
    Purchase_Date?: DateTimeNullableWithAggregatesFilter<"MachineryMaster"> | Date | string | null
    Mill_id?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Unit_id?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Created_Date?: DateTimeWithAggregatesFilter<"MachineryMaster"> | Date | string
    Created_By?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Modified_Date?: DateTimeNullableWithAggregatesFilter<"MachineryMaster"> | Date | string | null
    Modified_By?: IntWithAggregatesFilter<"MachineryMaster"> | number
    Status?: StringWithAggregatesFilter<"MachineryMaster"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    Role: string
    status?: string
    Category: string
    Mill_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    Role: string
    status?: string
    Category: string
    Mill_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Mill_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Mill_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    Role: string
    status?: string
    Category: string
    Mill_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Mill_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Mill_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    name: string
    address1: string
    address2: string
    city: string
    state: string
    country: string
    pincode: string
    email?: string | null
    phone: string
    mobile: string
    fax?: string | null
    customertype: string
    status: string
    Contact_Person: string
    Designation: string
  }

  export type CustomerUncheckedCreateInput = {
    custid?: number
    name: string
    address1: string
    address2: string
    city: string
    state: string
    country: string
    pincode: string
    email?: string | null
    phone: string
    mobile: string
    fax?: string | null
    customertype: string
    status: string
    Contact_Person: string
    Designation: string
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    customertype?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Contact_Person?: StringFieldUpdateOperationsInput | string
    Designation?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateInput = {
    custid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    customertype?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Contact_Person?: StringFieldUpdateOperationsInput | string
    Designation?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateManyInput = {
    custid?: number
    name: string
    address1: string
    address2: string
    city: string
    state: string
    country: string
    pincode: string
    email?: string | null
    phone: string
    mobile: string
    fax?: string | null
    customertype: string
    status: string
    Contact_Person: string
    Designation: string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    customertype?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Contact_Person?: StringFieldUpdateOperationsInput | string
    Designation?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    custid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    customertype?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    Contact_Person?: StringFieldUpdateOperationsInput | string
    Designation?: StringFieldUpdateOperationsInput | string
  }

  export type MachineryMasterCreateInput = {
    Mac_Code: number
    Mac_Name: string
    Dept_Code?: number
    Dept_Name: string
    Make?: string
    Model?: string
    Group_Name?: string
    Scutchers?: number
    Type_of_feed?: string
    Type_of_card: string
    Deliveries_per_machine?: number
    Spdls_per_frame?: number
    Drums_per_machine?: number
    No_of_heads?: number
    Location?: string
    Serial_No?: string
    Purchase_Date?: Date | string | null
    Mill_id?: number
    Unit_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
    Status?: string
  }

  export type MachineryMasterUncheckedCreateInput = {
    Mac_Id?: number
    Mac_Code: number
    Mac_Name: string
    Dept_Code?: number
    Dept_Name: string
    Make?: string
    Model?: string
    Group_Name?: string
    Scutchers?: number
    Type_of_feed?: string
    Type_of_card: string
    Deliveries_per_machine?: number
    Spdls_per_frame?: number
    Drums_per_machine?: number
    No_of_heads?: number
    Location?: string
    Serial_No?: string
    Purchase_Date?: Date | string | null
    Mill_id?: number
    Unit_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
    Status?: string
  }

  export type MachineryMasterUpdateInput = {
    Mac_Code?: IntFieldUpdateOperationsInput | number
    Mac_Name?: StringFieldUpdateOperationsInput | string
    Dept_Code?: IntFieldUpdateOperationsInput | number
    Dept_Name?: StringFieldUpdateOperationsInput | string
    Make?: StringFieldUpdateOperationsInput | string
    Model?: StringFieldUpdateOperationsInput | string
    Group_Name?: StringFieldUpdateOperationsInput | string
    Scutchers?: IntFieldUpdateOperationsInput | number
    Type_of_feed?: StringFieldUpdateOperationsInput | string
    Type_of_card?: StringFieldUpdateOperationsInput | string
    Deliveries_per_machine?: IntFieldUpdateOperationsInput | number
    Spdls_per_frame?: IntFieldUpdateOperationsInput | number
    Drums_per_machine?: IntFieldUpdateOperationsInput | number
    No_of_heads?: IntFieldUpdateOperationsInput | number
    Location?: StringFieldUpdateOperationsInput | string
    Serial_No?: StringFieldUpdateOperationsInput | string
    Purchase_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mill_id?: IntFieldUpdateOperationsInput | number
    Unit_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type MachineryMasterUncheckedUpdateInput = {
    Mac_Id?: IntFieldUpdateOperationsInput | number
    Mac_Code?: IntFieldUpdateOperationsInput | number
    Mac_Name?: StringFieldUpdateOperationsInput | string
    Dept_Code?: IntFieldUpdateOperationsInput | number
    Dept_Name?: StringFieldUpdateOperationsInput | string
    Make?: StringFieldUpdateOperationsInput | string
    Model?: StringFieldUpdateOperationsInput | string
    Group_Name?: StringFieldUpdateOperationsInput | string
    Scutchers?: IntFieldUpdateOperationsInput | number
    Type_of_feed?: StringFieldUpdateOperationsInput | string
    Type_of_card?: StringFieldUpdateOperationsInput | string
    Deliveries_per_machine?: IntFieldUpdateOperationsInput | number
    Spdls_per_frame?: IntFieldUpdateOperationsInput | number
    Drums_per_machine?: IntFieldUpdateOperationsInput | number
    No_of_heads?: IntFieldUpdateOperationsInput | number
    Location?: StringFieldUpdateOperationsInput | string
    Serial_No?: StringFieldUpdateOperationsInput | string
    Purchase_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mill_id?: IntFieldUpdateOperationsInput | number
    Unit_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type MachineryMasterCreateManyInput = {
    Mac_Id?: number
    Mac_Code: number
    Mac_Name: string
    Dept_Code?: number
    Dept_Name: string
    Make?: string
    Model?: string
    Group_Name?: string
    Scutchers?: number
    Type_of_feed?: string
    Type_of_card: string
    Deliveries_per_machine?: number
    Spdls_per_frame?: number
    Drums_per_machine?: number
    No_of_heads?: number
    Location?: string
    Serial_No?: string
    Purchase_Date?: Date | string | null
    Mill_id?: number
    Unit_id?: number
    Created_Date: Date | string
    Created_By?: number
    Modified_Date?: Date | string | null
    Modified_By?: number
    Status?: string
  }

  export type MachineryMasterUpdateManyMutationInput = {
    Mac_Code?: IntFieldUpdateOperationsInput | number
    Mac_Name?: StringFieldUpdateOperationsInput | string
    Dept_Code?: IntFieldUpdateOperationsInput | number
    Dept_Name?: StringFieldUpdateOperationsInput | string
    Make?: StringFieldUpdateOperationsInput | string
    Model?: StringFieldUpdateOperationsInput | string
    Group_Name?: StringFieldUpdateOperationsInput | string
    Scutchers?: IntFieldUpdateOperationsInput | number
    Type_of_feed?: StringFieldUpdateOperationsInput | string
    Type_of_card?: StringFieldUpdateOperationsInput | string
    Deliveries_per_machine?: IntFieldUpdateOperationsInput | number
    Spdls_per_frame?: IntFieldUpdateOperationsInput | number
    Drums_per_machine?: IntFieldUpdateOperationsInput | number
    No_of_heads?: IntFieldUpdateOperationsInput | number
    Location?: StringFieldUpdateOperationsInput | string
    Serial_No?: StringFieldUpdateOperationsInput | string
    Purchase_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mill_id?: IntFieldUpdateOperationsInput | number
    Unit_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type MachineryMasterUncheckedUpdateManyInput = {
    Mac_Id?: IntFieldUpdateOperationsInput | number
    Mac_Code?: IntFieldUpdateOperationsInput | number
    Mac_Name?: StringFieldUpdateOperationsInput | string
    Dept_Code?: IntFieldUpdateOperationsInput | number
    Dept_Name?: StringFieldUpdateOperationsInput | string
    Make?: StringFieldUpdateOperationsInput | string
    Model?: StringFieldUpdateOperationsInput | string
    Group_Name?: StringFieldUpdateOperationsInput | string
    Scutchers?: IntFieldUpdateOperationsInput | number
    Type_of_feed?: StringFieldUpdateOperationsInput | string
    Type_of_card?: StringFieldUpdateOperationsInput | string
    Deliveries_per_machine?: IntFieldUpdateOperationsInput | number
    Spdls_per_frame?: IntFieldUpdateOperationsInput | number
    Drums_per_machine?: IntFieldUpdateOperationsInput | number
    No_of_heads?: IntFieldUpdateOperationsInput | number
    Location?: StringFieldUpdateOperationsInput | string
    Serial_No?: StringFieldUpdateOperationsInput | string
    Purchase_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mill_id?: IntFieldUpdateOperationsInput | number
    Unit_id?: IntFieldUpdateOperationsInput | number
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_By?: IntFieldUpdateOperationsInput | number
    Modified_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified_By?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Role?: SortOrder
    status?: SortOrder
    Category?: SortOrder
    Mill_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    Mill_id?: SortOrder
    Created_By?: SortOrder
    Modified_By?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Role?: SortOrder
    status?: SortOrder
    Category?: SortOrder
    Mill_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    Role?: SortOrder
    status?: SortOrder
    Category?: SortOrder
    Mill_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    Mill_id?: SortOrder
    Created_By?: SortOrder
    Modified_By?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CustomerCountOrderByAggregateInput = {
    custid?: SortOrder
    name?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    fax?: SortOrder
    customertype?: SortOrder
    status?: SortOrder
    Contact_Person?: SortOrder
    Designation?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    custid?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    custid?: SortOrder
    name?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    fax?: SortOrder
    customertype?: SortOrder
    status?: SortOrder
    Contact_Person?: SortOrder
    Designation?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    custid?: SortOrder
    name?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    fax?: SortOrder
    customertype?: SortOrder
    status?: SortOrder
    Contact_Person?: SortOrder
    Designation?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    custid?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MachineryMasterCountOrderByAggregateInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Mac_Name?: SortOrder
    Dept_Code?: SortOrder
    Dept_Name?: SortOrder
    Make?: SortOrder
    Model?: SortOrder
    Group_Name?: SortOrder
    Scutchers?: SortOrder
    Type_of_feed?: SortOrder
    Type_of_card?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Location?: SortOrder
    Serial_No?: SortOrder
    Purchase_Date?: SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
    Status?: SortOrder
  }

  export type MachineryMasterAvgOrderByAggregateInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Dept_Code?: SortOrder
    Scutchers?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_By?: SortOrder
    Modified_By?: SortOrder
  }

  export type MachineryMasterMaxOrderByAggregateInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Mac_Name?: SortOrder
    Dept_Code?: SortOrder
    Dept_Name?: SortOrder
    Make?: SortOrder
    Model?: SortOrder
    Group_Name?: SortOrder
    Scutchers?: SortOrder
    Type_of_feed?: SortOrder
    Type_of_card?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Location?: SortOrder
    Serial_No?: SortOrder
    Purchase_Date?: SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
    Status?: SortOrder
  }

  export type MachineryMasterMinOrderByAggregateInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Mac_Name?: SortOrder
    Dept_Code?: SortOrder
    Dept_Name?: SortOrder
    Make?: SortOrder
    Model?: SortOrder
    Group_Name?: SortOrder
    Scutchers?: SortOrder
    Type_of_feed?: SortOrder
    Type_of_card?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Location?: SortOrder
    Serial_No?: SortOrder
    Purchase_Date?: SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_Date?: SortOrder
    Created_By?: SortOrder
    Modified_Date?: SortOrder
    Modified_By?: SortOrder
    Status?: SortOrder
  }

  export type MachineryMasterSumOrderByAggregateInput = {
    Mac_Id?: SortOrder
    Mac_Code?: SortOrder
    Dept_Code?: SortOrder
    Scutchers?: SortOrder
    Deliveries_per_machine?: SortOrder
    Spdls_per_frame?: SortOrder
    Drums_per_machine?: SortOrder
    No_of_heads?: SortOrder
    Mill_id?: SortOrder
    Unit_id?: SortOrder
    Created_By?: SortOrder
    Modified_By?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MachineryMasterDefaultArgs instead
     */
    export type MachineryMasterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MachineryMasterDefaultArgs<ExtArgs>

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