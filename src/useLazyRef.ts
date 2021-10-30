import {useRef} from 'react';

const useLazyRef = <T>(initialValFunc: () => T) => {
    const ref = useRef<T>(null!);
    
    if (ref.current === null) {
        ref.current = initialValFunc();
    }
    
    return ref;
};

export default useLazyRef;
