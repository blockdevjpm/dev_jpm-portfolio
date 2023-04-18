import React from 'react'
import './learnt.css'

const Learnt = (props) => {

  const backgroundColorsArray = ["#ff7f50", "#352725", "#8a595d", "#f0a93e", "#89CFF0", "#DDA0DD", "#1CAC78"]

  const chooseRandom = arr => arr[Math.floor(Math.random() * arr.length)]

  const styles = {
    backgroundColor: chooseRandom(backgroundColorsArray),
  }

  return (
    <div className='learnt' style={styles} >
        <p className='learnt_text'>{props.topic}</p>
    </div>
  )
}

export default Learnt