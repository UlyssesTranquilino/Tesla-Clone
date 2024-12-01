import React, {useState} from 'react'
import dataCarPaint from './dataCarPaint'
import './CarPaint.css'
const CarPaint = () => {

    console.log("CHECKKssK")
    const [currentModel, setCurrentModel] = useState(dataCarPaint[0].model)
    const [currentPaint, setCurrentPaint] = useState(dataCarPaint[0].colors.StealthGray)
    const [currentWheel, setCurrentWheel] = useState(currentPaint.Wheel.PhotonWheels)

    // const [carPaint, setCarPaint] = useState({
    //     sideView: dataCarPaint[0].colors.Wheel.wheel.sideView,
    //     wheelView: dataCarPaint[0].colors.Wheel.wheel.wheelView
    // })

  return (
    <div className='carPaint row'>
        <div className='col car-sideView'>
            <img src={currentWheel.sideView} className='sideView' />
        </div>
    </div>
  )
}

export default CarPaint