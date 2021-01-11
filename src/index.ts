export interface CSSClassObject {
  [id: string]: boolean;
}

const reject = (obj: CSSClassObject) => {
  return Object.keys(obj)
    .map((i) => !!obj[i] && i)
    .filter(Boolean)
    .join(` `);
};

export const cssclass = (...values: Array<string | CSSClassObject>): string => {
  const classNames: string[] = [];
  values.forEach((value: string | ClassNamesObject) => {
    if (typeof value === 'string') {
      if (value.trim().length > 0) {
        classNames.push(value);
      }
    } else {
      const mappedValue = reject(value);
      if (mappedValue.trim().length > 0) {
        classNames.push(mappedValue);
      }
    }
  });
  return classNames.join(' ');
};

export default cssclass;

export interface ClassNamesObject {
  [key: string]: boolean;
}
