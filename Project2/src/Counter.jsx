import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <p className="result">{count}</p>
            <div className="btn-container">
                <button className="btn" onClick={() => setCount(count - 1)}>DEC -</button>
                <button className="btn" onClick={() => setCount(count + 1)}>INC +</button>
            </div>
        </>
    )
}

export default Counter