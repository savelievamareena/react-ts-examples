import {useCallback, useState} from "react";

export function Counter() {

    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, []);
    return (
        <div>
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}