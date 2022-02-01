import '../../App.css'
import {useState} from "react";
import {inside, round} from "../utils";

export default function Quadratic() {
    const m = [200, 400]
    const [startControl, setStartControl] = useState([390, 63])
    const [end, setEnd] = useState([600, 400])
    let [isDown, setIsDown] = useState(-1)
    return (
        <div>
            <svg id={"graph"} onMouseMove={(e) => {
                let elem = document.querySelector('#graph');
                let rect = elem.getBoundingClientRect();
                let x = e.clientX - rect.x
                let y = e.clientY - rect.y
                if (isDown === 0) {
                    setStartControl([x, y])
                }
            }} onMouseDown={(e) => {
                if (isDown === -1) {
                    let elem = document.querySelector('#graph');
                    let rect = elem.getBoundingClientRect();
                    let x = e.clientX - rect.x
                    let y = e.clientY - rect.y
                    if (inside(startControl[0], startControl[1], x, y)) {
                        setIsDown(0)
                    }
                }
            }} onMouseUp={() => {
                setIsDown(-1)
            }} className={"hi"} width={"800"} height={"500"} viewBox={"0 0 800 500"}>
                <circle cx={`${startControl[0]}`} cy={`${startControl[1]}`} r={3} fill={"red"}/>
                <line x1={m[0]} y1={m[1]} x2={startControl[0]} y2={startControl[1]} stroke={"red"} strokeWidth={"2px"}/>
                <line x1={end[0]} y1={end[1]} x2={startControl[0]} y2={startControl[1]} stroke={"red"}
                      strokeWidth={"2px"}/>
                <path
                    d={`M${m[0]},${m[1]} Q${startControl[0]},${startControl[1]} ${end[0]},${end[1]}`}
                    fill={"transparent"} stroke={"black"} strokeWidth={"4px"}/>
            </svg>
            <p style={{
                margin: "4em"
            }}>Q {round(startControl[0])} {round(startControl[1])} {round(end[0])} {round(end[1])}</p>
        </div>
    )
}