import React from "react";
import "./Header.css";
import bmslogo from "../../assets/images/bmsLogo";
import backBtn from "../../assets/images/backbtn.png";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbackBtn: false
    };
  }

  componentDidMount() {
  }


  render() {
    const {isbackBtn} = this.state;
    console.log("isbackBtn", isbackBtn)
    return (
      <React.Fragment>
         <div className="header-container">
           // {isbackBtn ? <img src= {backBtn} onClick={this.goBack} className="back-btn" /> : "" }
            <div>
              <img src={bmslogo} width="100" height="50" className="logo_pos"/>
            </div>
            <div>
            </div>
         </div>
      </React.Fragment>
    );
  }
}


export default Header;
