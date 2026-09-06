import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                <img className='mb-5' src="media/images/largestBroker.svg" alt="" />
                </div>
                <div style={{width:'42%'}} className="col-lg-6">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million CandleEdge clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div  className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Commodity derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                        <img style={{width:"90%"}} src="media/images/pressLogos.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Awards;