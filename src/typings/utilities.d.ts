export type UncapitalizeKeys<ObjType> =
  ObjType extends Record<infer K extends string, string | number | symbol>
    ? { [Attr in Uncapitalize<K>]: ObjType[Extract<K, Capitalize<Attr> | Attr>] }
    : ObjType

export type CapitalizeKeys<ObjType> =
  ObjType extends Record<infer K extends string, string | number | symbol>
    ? { [Attr in Capitalize<K>]: ObjType[Extract<K, Uncapitalize<Attr> | Attr>] }
    : ObjType

export type ObjKeyTypes = string | number | symbol
