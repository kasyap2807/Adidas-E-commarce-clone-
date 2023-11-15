import React from 'react'
import './fiftysale.css'
function Fiftyoff() {
    const backgroundImageUrl = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/in-fw23-flat-50-hp-mh-d_tcm209-1050070.jpg';
  
  const containerStyle = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '600px', 
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='dividerimg' style={containerStyle}>
        <div className='divider'>
        <h1 className='h1tag'><strong>End of season sale ends in</strong></h1>
        <h3 className='h2tag'>Ends at 12pm </h3><br></br><br></br>
        <button className='buttonsforsale'>shop for boys 👉</button><br></br>
        <button className='buttonsforsale'>shop for girls 👉</button><br></br>
        <button className='buttonsforsale'>shop for kids 👉</button>
        </div>
    </div>
  )
}

export default Fiftyoff