import { useEffect, useState } from "react";

export default function SimpleComponent1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("SimpleComponent1: useEffect called with count: " + count);

    }, [count])

    function incrementCount() {
        setCount(count + 1);
    }

    return <div>
        SimpleComponent1: <button onClick={incrementCount}>{count}</button>
    </div>
}