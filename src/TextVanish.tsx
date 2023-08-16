import {useState, useEffect} from "react";
function getData() {
    return new Promise<number[]>(function(resolve, reject) {
        window.setTimeout(function() {
            console.log("fired");
            resolve([1, 2, 3]);
        }, 5000)
    })
}

function cleanup() {
    console.log("12112223")
}

export default function TextVanish() {
    const [data, setData] = useState<number[]>([]);
    useEffect(function() {
        (async function() {
            const data = await getData();
            setData(data);
        })()

        return cleanup;
    }, []);

    return (
        <div>
            {data}
        </div>
    )
}

