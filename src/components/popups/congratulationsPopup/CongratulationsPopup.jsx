import React from "react";
import { connect } from "react-redux";
import congo from "../../../assets/images/congrats.jpg"
import { setSeatCount } from "../../../store/actions/actions.js"
import { withRouter } from "react-router-dom";
import "../Modal.css";
import "../../../util/commonStyle.css";
import Config from "../../../config.js";

class CongratulationsPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
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

              </div>
              <div className="row p-2">
                <span> congratulation your seats has been booked. </span>
                <img src={congo}  width="300" />
                <p
                  className="col-7 text-left black-txt-normal pt-3 pl-2"
                  style={{ borderTop: "1px solid #cccccc" }}
                >

                  <button
                    className="btn btn-success"
                    onClick={this.props.closeModal}
                  >
                    {" "}
                   Go To Home {" "}
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


export default CongratulationsPopup;
