import React from "react";
function Brokerage() {
  return (
    <div style={{ marginTop: "50px" }} className=" border-top ">
      <div className="row pt-5">
        <div className="col-1"></div>
        <div className="p-5 col-6">
          <h5 style={{ color: "#0d6efd" }} className="text-center">
            Brokerage calculator
          </h5>
          <ul className="text-muted pt-3" style={{fontSize: "13.5px"}}>
            <li>
              <p>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </li>
            <li>
              <p>
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </p>
            </li>
            <li>
              <p>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
            </li>
            <li>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </li>
            <li>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
            </li>
            <li>
              <p>
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
            </li>
          </ul>
        </div>
        <div className=" text-center col p-5">
          <h5 style={{ color: "#0d6efd",marginTop:"150px", marginLeft:"-70px"}} className="margin-auto">
            List of charges
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
