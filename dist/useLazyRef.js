import { useRef } from 'react';
var useLazyRef = function (initialValFunc) {
    var ref = useRef(null);
    if (ref.current === null) {
        ref.current = initialValFunc();
    }
    return ref;
};
export default useLazyRef;
//# sourceMappingURL=useLazyRef.js.map