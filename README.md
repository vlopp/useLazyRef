# useLazyRef

A wrapper to React's own `useRef` to support lazy initialization. So far, lazy init is supported by `useState`, but not `useRef`. Once React updates `useRef`, this package becomes deprecated.

Caution: it does **not** support non-lazy initialization. In this case, you should use the standard `useRef` instead.

# Usage

```
const ref = useLazyRef(() => expensiveComputation());
```
