import React from 'react'
import './Indian.css'
function Indianje() {
    const backgroundImageUrl = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/in-ss23-bcci-test-jersey-mh-reveal-hp-mh-image-d_tcm209-1028645.jpg';
  
  const containerStyle2 = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    height:'400px',
    width:'1600px',
    backgroundRepeat: 'no-repeat',

  };
  return (
    <div style={containerStyle2}>
        <button className='indian'>shop now 👉</button><br></br>
        <button className='indian2'>Explore more 👉</button>
    </div>
  )
}

export default Indianje