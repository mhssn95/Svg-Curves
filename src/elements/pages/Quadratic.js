import '../../App.css'
import {useState} from "react";
import {inside, round} from "../utils";

export default function Quadratic() {
    const [m, setM] = useState([200, 400])
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
                } else if (isDown === 1) {
                    setM([x, y])
                } else if (isDown === 2) {
                    setEnd([x, y])
                }
            }} onMouseDown={(e) => {
                if (isDown === -1) {
                    let elem = document.querySelector('#graph');
                    let rect = elem.getBoundingClientRect();
                    let x = e.clientX - rect.x
                    let y = e.clientY - rect.y
                    if (inside(startControl[0], startControl[1], x, y)) {
                        setIsDown(0)
                    } else if (inside(m[0], m[1], x, y)) {
                        setIsDown(1)
                    } else if (inside(end[0], end[1], x, y)) {
                        setIsDown(2)
                    }
                }
            }} onMouseUp={() => {
                setIsDown(-1)
            }} className={"hi"} width={"800"} height={"500"} viewBox={"0 0 800 500"}>
                <path
                    d={`M${m[0]},${m[1]} Q${startControl[0]},${startControl[1]} ${end[0]},${end[1]}`}
                    fill={"transparent"} stroke={"black"} strokeWidth={"4px"}/>
                <circle cx={`${startControl[0]}`} cy={`${startControl[1]}`} r={3} fill={"red"}/>
                <line x1={m[0]} y1={m[1]} x2={startControl[0]} y2={startControl[1]} stroke={"red"} strokeWidth={"2px"}/>
                <line x1={end[0]} y1={end[1]} x2={startControl[0]} y2={startControl[1]} stroke={"red"}
                      strokeWidth={"2px"}/>
                <circle cx={`${m[0]}`} cy={`${m[1]}`} r={4} fill={"blue"}/>
                <circle cx={`${end[0]}`} cy={`${end[1]}`} r={4} fill={"blue"}/>
            </svg>
            <p className={"svg-text"} style={{
                margin: "2em"
            }}>M {round(m[0])} {round(m[1])} <span className={"blue"}>Q</span> <span className={"red"}>{round(startControl[0])} {round(startControl[1])}</span> {round(end[0])} {round(end[1])}</p>
        </div>
    )
}