import React from 'react';
import "./certifications.css";

// import certificates_data from './certificates_data';
import { CertificateCards } from "../../containers";

import img1 from "../../images/ibm_certificate.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.jpg";

const Certifications = () => {
  // const certificateElements = certificates_data.map(i => {
  //   return <CertificateCards 
  //             website={i.website}
  //             image={img1}
  //             title={i.title}
  //           />
  // })

  return (
    <div className='certifications_container'>
        <CertificateCards 
          website=""
          image={img1}
          title="IBM QubitXQubit Quantum Computing Course"
        />
        <CertificateCards 
          website=""
          image={img2}
          title="Codecademy HTML Course"
        />
        <CertificateCards 
          website=""
          image={img3}
          title="Codecademy CSS Course"
        />
        <CertificateCards 
          website=""
          image={img4}
          title="Codecademy Javascript Course"
        />
        <CertificateCards 
          website=""
          image={img5}
          title="Codecademy Data Structures and Algorithms"
        />
        <CertificateCards 
          website=""
          image={img6}
          title="Codecademy Git & Github"
        />
        <CertificateCards 
          website=""
          image={img7}
          title="Google Developers Ranchi's Practical Web Apps Hacking"
        />
        <CertificateCards 
          website=""
          image={img8}
          title="Sololearn C# Course"
        />
    </div>
  )
}

export default Certifications