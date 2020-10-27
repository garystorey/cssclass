export interface CSSClassObject {
  [id: string]: boolean | undefined | null;
}

const reject = (obj: CSSClassObject) => {
  return Object.keys(obj)
    .map((i) => !!obj[i] && i)
    .filter(Boolean)
    .join(` `);
};

export const cssclass = (obj: CSSClassObject) => {
  return [obj].map(reject).join(` `);
};

export default cssclass;
