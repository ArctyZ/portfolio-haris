'use client'
import { Link } from "react-router";
import {motion} from "framer-motion";
import { useState, useRef } from "react";
export default function Header() {
    const [position, setPosition] = useState({
        left:0,
        width:0,
        opacity:0    
    });
    


  return (
    <div className="flex items-center justify-between pt-4 mt-5 bg-transparent">
        <div>
            <h1 className="text-xl md:text-3xl font-semibold tracking-widest text-white shine"><Link to={"/"}>Haris</Link></h1>
        </div>
        <div className="">
            <ul
            onMouseLeave={() => setPosition({...position,opacity:0})}
            className="flex gap-3 text-md md:text-lg items-center relative  rounded-md  bg-transparent">
                <Tab setPosition={setPosition}><Link to={"/projects"}>Projects</Link></Tab>

                <Tab setPosition={setPosition}><Link to={"/about"}>About</Link></Tab>

                
                <motion.li
                animate={{...position}}
                className="absolute z-0 rounded-md bg-white/10 h-full"/>
            </ul>
        </div>
    </div>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Tab({children , setPosition}:any) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getPosition = (ref:any) => {
        if(!ref?.current) return
        const {width} = ref.current.getBoundingClientRect();
        setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
            
        })
    }

    return(
        <li
        ref={ref}
        onMouseEnter={() => getPosition(ref)}
        className="relative z-10 cursor-pointer p-2 text-white mix-blend-difference"
        >
            {children}
        </li>
    )
}
