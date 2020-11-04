import React from "react";
import { TNC_TYPE } from "../../../constants";
import { connect } from "react-redux";
import { setSeatCount } from "../../../store/actions/actions.js"
import { withRouter } from "react-router-dom";
import "../Modal.css";
import "./SeatCountInfoPopup.css";
import "../../../util/commonStyle.css";
import Config from "../../../config.js";

class seatCountInfoPopupComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSeats: 1
    }
  }

  selectedSeatCount = async () => {
    await this.props.setSeatCount(this.state.numberOfSeats);
    console.log("this.props", this.props)
    this.props.history.push(Config.PATH_TO_SEAT_SELECTION_PAGE, {numberOfSeats : this.state.numberOfSeats})
  }

  componentDidMount() {
    this.setState({
      numberOfSeats:  this.props.seatsCount ? this.props.seatsCount : this.state.numberOfSeats
    })
  }

  setCount = (seatCount) => {
    this.setState({
      numberOfSeats: seatCount
    })
  }

  render() {
    let {numberOfSeats} = this.state;
    // numberOfSeats = this.props.seatsCount ? this.props.seatsCount : numberOfSeats
    // const { status, closeModal } = this.props;
    const seats = [1,2,3,4,5,6,7,8,9,10]
    return (
      <React.Fragment>
        <div className={this.props.status ? "modal-bg back-grayout" : ""}></div>
        <div
          className={
            "modal fade " + (this.props.status ? "modal-show " : "modal-hide ")
          }
        >
          <div className=" modal-dialog-centered m-3" role="document">
            <div className="modal-body modal-mid-txt col-12 termCondition-center">
              <div className="row p-2">
                <p className="col-10 text-left black-txt mb-0 pl-2"></p>
                <p className="col-2 text-right mb-0 pr-2"></p>
              </div>
              <div className="row p-2">
                 <h3> How many seats? </h3>
                <p
                  className="unstyled centered mb-4"
                  style={{ lineHeight: "15px" }}
                >
                  <span
                    htmlFor="styled-checkbox-1 pt-2"
                    style={{ fontSize: "14px", textAlign: "left" }}
                  >
                    &nbsp;
                     {seats.map((seatCount, index) =>
                         <span className={"pts-seat" +(seatCount === numberOfSeats ? " seat-selected" : "")} onClick={() => this.setCount(seatCount)} key={index}> {seatCount} </span>
                     )}
                  </span>
                </p>
              </div>
              <div className="row p-2">
                <p
                  className="col-7 text-left black-txt-normal pt-3 pl-2"
                  style={{ borderTop: "1px solid #cccccc" }}
                >
                  <button
                    className="btn btn-success"
                    onClick={this.selectedSeatCount}
                  >
                    {" "}
                    Select Seats{" "}
                  </button>
                </p>
                <p
                  className="col-5 text-right black-txt-normal pt-3 pr-2"
                  style={{ borderTop: "1px solid #cccccc" }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("seatsCount", state)
  return {
    seatsCount : state.seatsCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSeatCount: (count) => dispatch(setSeatCount(count))
  };
};

const seatCountInfoPopup = connect(
  mapStateToProps,
  mapDispatchToProps
)(seatCountInfoPopupComp);

export default withRouter(seatCountInfoPopup);
