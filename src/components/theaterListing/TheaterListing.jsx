import React from "react";
import { connect } from "react-redux";
import { getTheatersList } from "../../store/actions/actions.js"
import SeatCountInfoPopup from "../popups/seatCountInfoPopup/SeatCountInfoPopup"
import "../../util/commonStyle.css";
import "./TheaterListing.css";

class TheaterListingComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatInfoModal : false
    };
  }

  componentDidMount() {
    this.props.getTheatersList()
  }

  showSeatCountInfo = () => {
     this.setState({
       seatInfoModal : true
     })
  }

  closeModal = () => {
    this.setState({
      seatInfoModal : false
    })
  }


  render() {
    const theatersList =  this.props.theatersList.length ? this.props.theatersList : null
    return (
       <React.Fragment>
          <div>
             <p> {this.props.location.state.name} </p>
          </div>
          { !theatersList ? "" : <ul class="th-listing">
             { theatersList.map((theater, index) =>
               <li key={index}>
                  {index + 1} : {theater.thName} <span onClick={this.showSeatCountInfo} className="pts-seat"> {theater.thTime}</span>
               </li>
             )}
          </ul> }
          <SeatCountInfoPopup status = {this.state.seatInfoModal} closeModal={this.closeModal} />
       </React.Fragment>
    )
  }

}


const mapStateToProps = (state) => {
  console.log("theatersListData", state)
  return {
    theatersList: state.theatersListData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTheatersList: () => dispatch(getTheatersList())
  };
};

const TheaterListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheaterListingComp);

export default TheaterListing;
