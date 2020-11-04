import React from "react";
import "./SeatSelectionPage.css";
import "../../util/commonStyle.css";
import CongratulationsPopup from "../popups/congratulationsPopup/CongratulationsPopup"
class SeatSelectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatDto : {
        pts: [
          {clm: "K", seats: [26,27,28,29,30]},
          {clm: "L", seats: [21,22,23,24,25]},
          {clm: "M", seats: [16,17,18,19,20]}
        ],
        sl: [
          {clm: "D", seats: [11,12,13,14,15]},
          {clm: "C", seats: [6,7,8,9,10]},
          {clm: "B", seats: [1,2,3,4,5]}
        ]
      },
       seats: [],
       isSelected : false,
       payAmount: 0,
       showCongrats: false
    };
  }

  selectSeats = (id, count) => {
    let seatCount = this.props.location.state.numberOfSeats;
    if (!this.state.isSelected || this.state.seats.includes(count)) {
      let arr = this.state.seats;
      let isSelected;
      let payAmount = this.state.payAmount;
      if (arr.includes(count)) {
        let index = arr.indexOf(count)
        console.log("index", index)
        arr.splice(index, 1);
        if (id === "pt1")  {
          payAmount = payAmount - 300
        } else {
          payAmount = payAmount - 200
        }
        console.log("arr", arr)
      } else {
      console.log("arr.length !== seatCount", arr.length !== seatCount,  arr.length, seatCount)
      if (arr.length !== seatCount) {
        arr.push(count)
        if (id === "pt1")  {
          payAmount = payAmount + 300
        } else {
          payAmount = payAmount + 200
        }
        if (arr.length === seatCount) {
            isSelected = true
        }
      }
    }
      this.setState({
        seats: arr,
        isSelected: isSelected,
        payAmount: payAmount
      })
    }
    //  else {
    //   alert(`you have already selected ${seatCount} seats`);
    // }

  }

  showCongratsPopup = () => {
    this.setState({
      showCongrats : true
    })
  }

  closeModal = () => {
    this.props.history.push("/");
  }


  render() {
    const {pts, pt, seatDto,seats, payAmount, isSelected} = this.state;
    console.log("seats", seats, payAmount);
    return (
       <React.Fragment>
         <div className="book-seats">
          <b> Platinum supirior (Rs 300 ) </b>
            <div className="pts-container">
              {seatDto.pts.map((ptsData, k) =>
                <React.Fragment key={"hjdsds"+ptsData.clm}>
                <div className="pts-clm" >
                  <span className="mr-right">{ptsData.clm} </span>
                  <div className="pts-seat-dir">
                    {ptsData.seats.map((_pts, l) =>
                      <span className={"pts-seat" +(seats && seats.includes(_pts) ? " seat-selected" : "")}  key={"oiui"+_pts} onClick ={() => this.selectSeats("pt1", _pts)}> {_pts} </span>
                    )}
                  </div>
                 </div>
                 <div>
                 </div>
                 </React.Fragment>
              )}
            </div>

            <b> Silver (Rs 200) </b>
             <div className="pts-container">
               {seatDto.sl.map((slData, i) =>
                 <React.Fragment key={"dsds" +slData.clm}>
                 <div className="pts-clm" >
                   <span className="mr-right">{slData.clm} </span>
                   <div className="pts-seat-dir">
                     {slData.seats.map((_sl , j) =>
                       <span className={"pts-seat" +(seats && seats.includes(_sl) ? " seat-selected" : "")}  key={"uiyt" +_sl} onClick ={() => this.selectSeats("sl1", _sl)}> {_sl} </span>
                     )}
                   </div>
                  </div>
                  <div>
                  </div>
                  </React.Fragment>
               )}
             </div>

             {isSelected ? <button className="btn btn-success pay-btn" onClick={this.showCongratsPopup}> Pay {this.state.payAmount}</button> : ""}
             <CongratulationsPopup  status={this.state.showCongrats} closeModal={this.closeModal}/>
         </div>
       </React.Fragment>
    )
  }

}



export default SeatSelectionPage;
