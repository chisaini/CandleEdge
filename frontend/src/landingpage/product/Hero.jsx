import React from 'react';
function Hero() {
    return ( 
        <div className="container pt-5 border-bottom">
             <div className="row p-5 text-center">
                <h2>CandleEdge Products</h2>
                <h4 className='text-muted pt-3'>Sleek, modern, and intuitive trading platforms</h4>
                <p className=' pt-3 pb-5'>Check out our <a style={{textDecoration:"none"}} href="">investment offerings →</a></p>
             </div>
        </div>
     );
}

export default Hero;