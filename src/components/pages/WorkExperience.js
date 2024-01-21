import React from 'react';
import '../../App.css';
import './WorkExperience.css';

export default function WorkExperience() {
  return (
  <>
    <h1 className='Work-Experience'>Work Experience</h1>
    <div className="work_container">
      <div className="wordWrap">
        <div className="Elxsi">
          <img src={process.env.PUBLIC_URL + "/images/ELXSI.jpg"} />
          {/* <img src="images/ELXSI.jpg"></img> */}
          <div>
            <h3>TATA ELXSI &middot; Senior Engineer </h3>
            <b> Nov 2019 - July 2022</b>
            <hr/>
            <div className= "work">
              <div className="work-item">
                <h2>AUTOSAR Diagnostic Stack Development</h2>
                <p>The project showcases the development and implementation of an advanced application layer for the diagnostic module within the AUTOSAR (Automotive Open System Architecture) architecture. The primary objective of this project is to enhance the functionality and security of Electronic Control Unit (ECU) sensors in automobiles.One of the significant contributions of the project lies in the implementation of robust security services. The application layer is fortified using the PRNG (Pseudorandom Number Generator) cryptography algorithm, ensuring the confidentiality and integrity of data exchanged between ECUs.Throughout the development process, the project team actively engaged in core development discussions, collaborating with stakeholders to meet the specific requirements and challenges of the automotive ecosystem.</p>
                </div>
            </div>
            <div className= "work">
              <div className="work-item">
                <h2>DC-DC Converter Research Program for Electric Vehicle</h2>
                <p>In this project, an efficient DC-DC converter circuit was meticulously designed with two prominent topologies: LLC and PSFB. The converter was engineered to efficiently step up the voltage from 420V to 12V. Using Simulink, the circuit design was modeled and extensively simulated, incorporating essential protections and implementing Fuzzy control for optimal performance and stability. The successful implementation of these advanced techniques showcases the project's contribution to the development of high-performance power electronics solutions with improved efficiency and reliability.</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </>
  
  );
}