declare const __brand: unique symbol
type _Brand<B> = { [__brand]: B }

export type Brand<T, B> = T & _Brand<B>