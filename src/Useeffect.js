import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [on, setOn] = useState(true)
    const [numb, setNumb] = useState(1)
    const [car, setCar] = useState([])

    useEffect(() => {
        console.log("on/of update");
        console.log(on)
    }, [on])

    useEffect(() => {
        console.log("numb update");
    }, [numb])

    useEffect(() => {
        console.log("car update");
    }, [car])

    const changNumb= (numb)=>{
        setNumb(numb+1)
        console.log(numb)
    }

    const changCar= (car)=>{
        setCar(car+1)
    }


  return (
    <div>useEffect:
        <button onClick={()=>setOn(!on)}>On/Off</button>
        <button onClick={()=>changNumb(numb)}>Numbers</button>
        <button onClick={()=>changCar(car)}>Cars</button>
        <hr/><br></br>
    </div>
  )
}

export default Useeffect