import React from 'react';
import Typewriter from "typewriter-effect";

import "./name.css";
import profilePic from "../../images/jpm.png";

const Name = () => {

  return (
    <>
      <div className='name-container'>
        <img src={profilePic} alt="" width="100px" className='dev_pic' />
         <div className='text_container'> 
          <h1>Hey! 
            <br />
              my name is
            <br />
            <span className='name'>
              JPM.
            </span>
          </h1>
          <div className='tw_container'>
            <p>I love</p>
              <span className='tw_text'>
                <Typewriter
                  onInit={(typewriter)=> {
                  typewriter
                  .typeString("{coding}")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("{tech}")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("{puzzles}")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("{pizza}")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
                  }}

                  options={{
                    loop: true,
                    delay: 200
                  }}
                />
              </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Name