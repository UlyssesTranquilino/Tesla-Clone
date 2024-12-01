import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';


//CSS
import "./../Model 3 Responsive/sm-640.css";

const SpecsComponent = (props) => {

  const longRangeAWD = props.value.titles[0];
  const longRangeRWD = props.value.titles[1];
  const rearWheelDrive = props.value.titles[2]

  const [currentSpecs, setCurrentSpecs] = useState(longRangeRWD)
  const [styleSpecs, setStyleSpecs] = useState([true, false, false])
 
  function toggleSpecs(num)
  {
    if (num == 0)
    {
      setCurrentSpecs(longRangeAWD)
      setStyleSpecs([true, false, false])
    }
    else if (num == 1)
    {
      setCurrentSpecs(longRangeRWD)
      setStyleSpecs([false, true, false])
    }
    else 
    {
      setCurrentSpecs(rearWheelDrive);
      setStyleSpecs([false, false, true])
    }
  }


  return (
    <div>
      <div className='model3-specs'>
        <h1>Model 3 Specs</h1>
      </div>

      <div className='specs-button'>
        <button className='long-range-AWD' 
          onClick={() => toggleSpecs(0)}
          style={{borderBottom: styleSpecs[0] ? '2px solid white' : '2px solid rgb(54, 54, 54)'}}
          
          >Long Range AWD</button>
        <button className='long-range-RWD' 
          onClick={() => toggleSpecs(1)}
          style={{borderBottom: styleSpecs[1] ? '2px solid white' : '2px solid rgb(54, 54, 54)'}}
          >Long Range RWD</button>

        <button className='rear-wheel-drive' 
          onClick={() => toggleSpecs(2)}
          style={{borderBottom: styleSpecs[2] ? '2px solid white' : '2px solid rgb(54, 54, 54)'}}
          >Rear-Wheel Drive</button>
      </div>



        <div className='container-fluid'>
        <div className='drive-title'>
            <h1>Drive</h1>
        <Row>
            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Battery</p>
              <h3>{currentSpecs.drive.battery}</h3>
            </Col>


            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Range (EPA est.)</p>
              <h3>{currentSpecs.drive.range}</h3>
            </Col>


            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Acceleration</p>
              <h3>{currentSpecs.drive.acceleration}</h3>
            </Col>


            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Drive</p>
              <h3>{currentSpecs.drive.drive}</h3>
            </Col>
        </Row>
        </div>

        <div className='dimension'>
        <h1>Dimension</h1>
        <Row>
          <Col lg={3} md={6} xs={6} className='col-specs'>
            <img src={props.value.image} alt='Model 3 Specs'/>
          </Col>
        </Row>
        <Row>
            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Weight (Curb Mass)</p>
              <h3>{currentSpecs.dimensions.weight}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Cargo</p>
              <h3>{currentSpecs.dimensions.cargo}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Wheels</p>
              <h3>{currentSpecs.dimensions.wheels}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Ground Clearance</p>
              <h3>{currentSpecs.dimensions.groundClearance}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Overall Width</p>
              <h3>{currentSpecs.dimensions.overallWidth}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Overall Height</p>
              <h3>{currentSpecs.dimensions.overallHeight}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Overall Length</p>
              <h3>{currentSpecs.dimensions.overallLength}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Track - Front & Rear</p>
              <h3>{currentSpecs.dimensions.track}</h3>
            </Col>

        </Row>
        </div>
        
        <div className='charging'>
        <h1>Charging</h1>
        <Row>
            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Basic Vehicle</p>
              <h3>{props.value.charging.supercharging}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Basic Vehicle</p>
              <h3>{props.value.charging.chargingSpeed}</h3>
            </Col>

        </Row>
        </div>

        <div className='warranty'>
        <h1>Warranty</h1>
        <Row>
        <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Basic Vehicle</p>
              <h3>{props.value.warranty.basicVehicle}</h3>
            </Col>

            <Col lg={3} md={6} xs={6} className='col-specs'>
              <p>Battery & Drive Unit</p>
              <h3>{props.value.warranty.batteryDrive}</h3>
            </Col>
        </Row>
        </div>

        <div className='other'>
        <h1>Other</h1>
        <Row>
              <p>Owner's Manual</p>
              <p>{props.value.other.infoOne}</p>
              <p>{props.value.other.infoTwo}</p>
              <p>{props.value.other.infoThree}</p>
        </Row>
        </div>

        </div>
    </div>
  )
}

export default SpecsComponent