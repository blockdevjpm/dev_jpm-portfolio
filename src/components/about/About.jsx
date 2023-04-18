import React from 'react';
import "./about.css";

import academics from "./academics";
import me_img from "../../images/me2.jpeg";
import gsv from "../../images/gsv_1.jpg";

const About = () => {
  return (
    <div>
        <div className='container_1'>
            <img src={me_img} alt="img" className='about_pic' />
            <div className='ab_text_container'>
                <h1>Who am I?</h1>
                <p>
                    A Tech Lover, ready to dive into the real world. Interested in solving real life problems 
                    with the help of Technology and Critical Thinking. Love to write. Interested in the new 
                    fields of Blockchain, Web 3, AI and Quantum Computing. I also love to innovate, create 
                    and build user-friendly, accessible and creative solutions for people.
                </p>
            </div>
        </div>
        <div className='container_2'>
            <div className='ab_text_container_2'>
                <h1>Academics</h1>
                <table>
                    <tr>
                        <th>Course</th>
                        <th>University/College/School</th>
                        <th>Year of Passing</th>
                        <th>Grade</th>
                    </tr>
                    {academics.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.course}</td>
                            <td>{val.school}</td>
                            <td>{val.yop}</td>
                            <td>{val.grade}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
            <img src={gsv} alt="img" className='about_pic_2' />
        </div>
    </div>
  )
}

export default About