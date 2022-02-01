import '../../App.css'
import {useState} from "react";
import {inside, round} from "../utils";

export default function Arc() {
    const [m, setM] = useState([400, 200])
    const [r, setR] = useState([200, 20])
    const [rotation, setRotation] = useState(0)
    const [largeArc, setLargeArc] = useState(0)
    const [sweep, setSweep] = useState(0)
    const [end, setEnd] = useState([400, 245])
    const [options, setOptions] = useState(new Set([0]))
    let [isDown, setIsDown] = useState(-1)
    return (
        <div>
            <svg id={"graph"} onMouseMove={(e) => {
                let elem = document.querySelector('#graph');
                let rect = elem.getBoundingClientRect();
                let x = e.clientX - rect.x
                let y = e.clientY - rect.y
                if (isDown === 0) {
                    setM([x, y])
                } else if (isDown === 1) {
                    setEnd([x, y])
                }
            }} onMouseDown={(e) => {
                if (isDown === -1) {
                    let elem = document.querySelector('#graph');
                    let rect = elem.getBoundingClientRect();
                    let x = e.clientX - rect.x
                    let y = e.clientY - rect.y
                    if (inside(m[0], m[1], x, y)) {
                        setIsDown(0)
                    } else if (inside(end[0], end[1], x, y)) {
                        setIsDown(1)
                    }
                }
            }} onMouseUp={() => {
                setIsDown(-1)
            }} className={"hi"} width={"800"} height={"500"} viewBox={"0 0 800 500"}>
                <path
                    d={options.has(0) ? `M${m[0]},${m[1]} A${r[0]},${r[1]} ${rotation} ${largeArc} ${sweep}, ${end[0]}, ${end[1]}` : ''}
                    fill={"transparent"} stroke={"rgba(0,183,0,1)"} strokeWidth={"4px"}/>
                <path
                    d={options.has(1) ? `M${m[0]},${m[1]} A${r[0]},${r[1]} ${rotation} 1 0, ${end[0]}, ${end[1]}` : ''}
                    fill={"transparent"} stroke={"rgba(0,117,255,0.4)"} strokeWidth={"4px"}/>
                <path
                    d={options.has(2) ? `M${m[0]},${m[1]} A${r[0]},${r[1]} ${rotation} ${largeArc} 1, ${end[0]}, ${end[1]}` : ''}
                    fill={"transparent"} stroke={"rgba(200,0,0,0.47)"} strokeWidth={"4px"}/>
                ${options.size != 0 ? (
                <>
                    <circle cx={`${m[0]}`} cy={`${m[1]}`} r={5} fill={"blue"}/>
                    <circle cx={`${end[0]}`} cy={`${end[1]}`} r={5} fill={"blue"}/>
                </>
            ) : ""}
            </svg>
            <br/>
            <input style={{
                margin: '10px',
                width: "4em"
            }} type={"number"} placeholder={"rx"} defaultValue={r[0]} onChange={(e)=> {
                setR([e.target.value, r[1]])
            }}/>
            <input style={{
                margin: '10px',
                width: "4em"
            }} type={"number"} placeholder={"ry"} defaultValue={r[1]} onChange={(e)=> {
                setR([r[0], e.target.value])
            }}/>
            <input style={{
                margin: '10px',
                width: "8em"
            }} type={"number"} placeholder={"rotation"} defaultValue={rotation} onChange={(e)=> {
                setRotation(e.target.value)
            }}/>
            <p style={{
                marginTop: "2em",
                color: "rgb(0,183,0)"
            }}><input type={"checkbox"} defaultChecked={true} onChange={(e) => {
                if (e.target.checked) {
                    setOptions(new Set(options.add(0)))
                } else {
                    options.delete(0)
                    setOptions(new Set(options))
                }
            }}/>M {round(m[0])} {round(m[1])} A {round(r[0])} {round(r[1])} {round(rotation)} {largeArc} {sweep} {round(end[0])} {round(end[1])}</p>

            <p style={{
                color: "rgba(0,117,255,1)"
            }}><input type={"checkbox"} defaultChecked={false} onChange={(e) => {
                if (e.target.checked) {
                    setOptions(new Set(options.add(1)))
                } else {
                    options.delete(1)
                    setOptions(new Set(options))
                }
            }}
            />M {round(m[0])} {round(m[1])} A {round(r[0])} {round(r[1])} {round(rotation)} 1 {sweep} {round(end[0])} {round(end[1])}
            </p>

            <p style={{
                color: "rgba(200,0,0,0.47)"
            }}><input type={"checkbox"} defaultChecked={false} onChange={(e) => {
                if (e.target.checked) {
                    setOptions(new Set(options.add(2)))
                } else {
                    options.delete(2)
                    setOptions(new Set(options))
                }
            }}/>M {round(m[0])} {round(m[1])} A {round(r[0])} {round(r[1])} {round(rotation)} {largeArc} 1 {round(end[0])} {round(end[1])}
            </p>

        </div>
    )
}