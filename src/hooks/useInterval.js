import { useEffect, useRef } from "react"

const useInterval = (callback, delay, state) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            if (!state) {
                clearInterval(id);
            }
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay, state]);
}

export default useInterval;