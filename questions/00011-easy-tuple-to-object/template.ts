type TupleToObject<T extends readonly any[]> = {
  [t in T[number]]: t

}
