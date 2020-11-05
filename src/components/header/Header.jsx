import React from "react";
import "./Header.css";
import bmslogo from "../../assets/images/bmsLogo";
import backBtn from "../../assets/images/backbtn.png";
import Config from "../../config"


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbackBtn: this.props.location.pathname !== Config.PATH_TO_HOME_PAGE,
      headerTxt: ""
    };
  }

  componentDidMount() {
    this.getHeaderText()
  }

  getHeaderText = () => {
    const pathname = this.props.location.pathname;
    let headerTxt = "BOOK MY SHOW"
    if (pathname === Config.PATH_TO_THEATER_PAGE)
     headerTxt = "CHOOSE CINEMA HALL"
    else if (pathname === Config.PATH_TO_SEAT_SELECTION_PAGE)
     headerTxt = "SELECT YOUR SEAT"
    else
    headerTxt = "BOOK MY SHOW"
    this.setState({
      headerTxt: headerTxt
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  showBackBtn = () => {
    let isbackBtn = false
    if (this.props.location.pathname !== Config.PATH_TO_HOME_PAGE) {
      isbackBtn = true
    }
    this.setState({
      isbackBtn: isbackBtn
    })
  }

  goToHome = () => {
    this.props.history.push(Config.PATH_TO_HOME_PAGE);
    window.location.reload();
  }


  render() {
    const isbackBtn = this.props.location.pathname !== Config.PATH_TO_HOME_PAGE
    return (
      <React.Fragment>
         <div className="header-container">
           {isbackBtn ? <img src= {backBtn} onClick={this.goBack} className="back-btn" /> : "" }
            <p className="headerTxt"> {this.state.headerTxt} </p>
            <div className="clear"></div>
            <div>
              <img src={bmslogo} width="100" height="50" onClick={this.goToHome} className="logo_pos"/>
            </div>
            <div>
            </div>
         </div>
      </React.Fragment>
    );
  }
}


export default Header;
