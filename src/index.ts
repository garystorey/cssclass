export type CSSClassObject = Record<string, boolean>

type CSSClassValue = string | CSSClassObject

const normalizeClassName = (className: string): string => className.trim()

const isString = (value: CSSClassValue): value is string => typeof value === 'string'

const classObjectToList = (obj: CSSClassObject): string[] =>
  Object.entries(obj)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => normalizeClassName(className))
    .filter(Boolean)

const collectClassNames = (value: CSSClassValue): string[] => {
  if (isString(value)) {
    const normalized = normalizeClassName(value)
    return normalized ? [normalized] : []
  }

  return classObjectToList(value)
}

export function cssclass(...values: CSSClassValue[]): string {
  return values.flatMap(collectClassNames).join(' ')
}
