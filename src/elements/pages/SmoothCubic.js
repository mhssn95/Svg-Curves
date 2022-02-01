import '../../App.css'
import {useState} from "react";
import {inside, reflect, round} from "../utils";

export default function SmoothCubic() {
    const [m, setM] = useState([150, 200])
    const [startControl, setStartControl] = useState([206.87, 121])
    const [endControl, setEndControl] = useState([240.87, 273])
    const [end, setEnd] = useState([300, 200])
    const [smoothEndControl, setSmoothEndControl] = useState([209.87, 399])
    const [smoothEnd, setSmoothEnd] = useState([600, 400])
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
                    setEndControl([x, y])
                } else if (isDown === 2) {
                    setSmoothEndControl([x, y])
                } else if (isDown === 3) {
                    setM([x, y])
                } else if (isDown === 4) {
                    setEnd([x, y])
                } else if (isDown === 5) {
                    setSmoothEnd([x, y])
                }
            }} onMouseDown={(e) => {
                if (isDown === -1) {
                    let elem = document.querySelector('#graph');
                    let rect = elem.getBoundingClientRect();
                    let x = e.clientX - rect.x
                    let y = e.clientY - rect.y
                    if (inside(startControl[0], startControl[1], x, y)) {
                        setIsDown(0)
                    } else if (inside(endControl[0], endControl[1], x, y)) {
                        setIsDown(1)
                    } else if (inside(smoothEndControl[0], smoothEndControl[1], x, y)) {
                        setIsDown(2)
                    } else if (inside(m[0], m[1], x, y)) {
                        setIsDown(3)
                    } else if (inside(end[0], end[1], x, y)) {
                        setIsDown(4)
                    } else if (inside(smoothEnd[0], smoothEnd[1], x, y)) {
                        setIsDown(5)
                    }
                }
            }
            } onMouseUp={() => {
                setIsDown(-1)
            }} className={"hi"} width={"800"} height={"500"} viewBox={"0 0 800 500"}>
                <path
                    d={`M${m[0]},${m[1]} C${startControl[0]},${startControl[1]} ${endControl[0]},${endControl[1]} ${end[0]},${end[1]} S ${smoothEndControl[0]} ${smoothEndControl[1]} ${smoothEnd[0]} ${smoothEnd[1]}`}
                    fill={"transparent"} stroke={"blue"} strokeWidth={"4px"}/>
                <path
                    d={`M${m[0]},${m[1]} C${startControl[0]},${startControl[1]} ${endControl[0]},${endControl[1]} ${end[0]},${end[1]}`}
                    fill={"transparent"} stroke={"black"} strokeWidth={"4px"}/>
                <line x1={m[0]} y1={m[1]} x2={startControl[0]} y2={startControl[1]} stroke={"red"} strokeWidth={"2px"}/>
                <line x1={end[0]} y1={end[1]} x2={endControl[0]} y2={endControl[1]} stroke={"red"} strokeWidth={"2px"}/>
                <line x1={smoothEnd[0]} y1={smoothEnd[1]} x2={smoothEndControl[0]} y2={smoothEndControl[1]}
                      stroke={"blue"} strokeWidth={"2px"}/>
                <line strokeDasharray="5,5" x1={end[0]} y1={end[1]} x2={reflect(endControl[0], end[0])}
                      y2={reflect(endControl[1], end[1])}
                      stroke={"blue"} strokeWidth={"2px"}/>
                <circle cx={`${endControl[0]}`} cy={`${endControl[1]}`} r={3} fill={"red"}/>
                <circle cx={`${startControl[0]}`} cy={`${startControl[1]}`} r={3} fill={"red"}/>
                <circle cx={`${smoothEndControl[0]}`} cy={`${smoothEndControl[1]}`} r={3} fill={"blue"}/>
                <circle cx={`${reflect(endControl[0], end[0])}`} cy={`${reflect(endControl[1], end[1])}`} r={3}
                        fill={"blue"}/>
                <circle cx={`${m[0]}`} cy={`${m[1]}`} r={4} fill={"blue"}/>
                <circle cx={`${end[0]}`} cy={`${end[1]}`} r={4} fill={"blue"}/>
                <circle cx={`${smoothEnd[0]}`} cy={`${smoothEnd[1]}`} r={4} fill={"blue"}/>
            </svg>
            <p style={{
                margin: "4em"
            }}>M {round(m[0])} {round(m[1])} C {round(startControl[0])} {round(startControl[1])} {round(endControl[0])} {round(endControl[1])} {round(end[0])} {round(end[1])} S {round(smoothEndControl[0])} {round(smoothEndControl[1])} {round(smoothEnd[0])} {round(smoothEnd[1])}</p>
        </div>
    )
}