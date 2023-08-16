import {useRef} from "react";

export function CounterRef() {
    const count = useRef(0);
    // @ts-ignore
    window["count"] = count;
    return (
        <button
            onClick={() => {
                count.current = count.current + 1;
            }}
        >
            {count.current}
        </button>
    );
}