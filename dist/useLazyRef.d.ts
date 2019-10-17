import { MutableRefObject } from 'react';
declare const useLazyRef: <T>(initialValFunc: () => T) => MutableRefObject<T | null>;
export default useLazyRef;
