import React from 'react'
import'./MENCSS.css'
import img from './img2.jpg'
function MEN() {
  return (
    <div>
      <div className="menu" style={{
        backgroundImage:`src{$img}`}}>
        <img className='img9' src={img}/>
        <img className='img9' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oATewfdse7itoDSVllPT7FTN_v3Im8Yp2w&usqp=CAU'></img>
        <img className='img9' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobvI7IjigIFrG_0rPOD762BEKnXwWQAsUng&usqp=CAU'></img>
        <img className='img9' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoze_UflfW2IZjHEYGtmBcWvXB7GJhieiy-g&usqp=CAU'></img>

      </div>

    </div>
  )
}

export default MEN