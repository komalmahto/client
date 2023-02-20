import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ImageCarosel from "./ImageCarosel";
export default class Modal extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "#000000",
      color: "white",
    };

    return (
      <div className="modal show fade" tabindex="-1" style={modelStyle}>
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title head tran_color ">komal</h3>
              <button
                type="button"
                className=" btn btn-secondary"
                onClick={this.props.hide}
                data-bs-dismiss="modal"
                style={{ color: "#FFFFFF" }}
              >
                Close
              </button>
            </div>
            <div className="modal-body text-center">
              <ImageCarosel data={this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
