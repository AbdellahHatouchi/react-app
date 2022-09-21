import { useState } from "react";




function NumberCrat() {
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(false);
    const addCount = () => {
        setCount(pervCount => (pervCount + 1))
    }
    const subCount = () => {
        setCount(pervCount => {
            // pervCount === 1?setValue(false):pervCount - 1
            if (pervCount === 1) {
                setValue(false);
                setCount(1)
            }else {
                return pervCount - 1
            }
        })
    }
    const changeVar = () =>{
        setValue(true)
    }
    if (value) {
        return (
            <div className="d-flex gap-1">
                <button className="btnC" onClick={subCount}>-</button>
                <span className="spanC">{count}</span>
                <button className="btnC" onClick={addCount}>+</button>
            </div>
        )
    }
    return (
        <div className='d-flex align-items-center gap-1 cart-btn' onClick={changeVar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <span className='text-cart'>Add Cart</span>
        </div>
    )
}
export default NumberCrat