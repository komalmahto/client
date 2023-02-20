import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { USER_SERVER } from "../Config";
import "./ImageCarosel.css";
export default class ImageCarosel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    count: this.props.data.react,
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  async handleClick(id, key) {
    await axios.get("https://geolocation-db.com/json/").then(async (res) => {
      if (res.data.IPv4 !== null) {
        await axios
          .post(`${USER_SERVER}/check-unique`, {
            ipAddres: res.data.IPv4,
            id: id,
          })
          .then((res) => {
            const a = this.props.data.react;
            a[key] = res.data.ipAddress.length;
            this.setState({ count: a });
          });
      }
    });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.data.images.map((item, key) => {
            return (
              <>
                <div className="row" key={key}>
                  <div className="col-8 image-title">
                    <h5 className="pt-2" style={{ color: "grey" }}>
                      If you like it give it a{" "}
                    </h5>{" "}
                  </div>
                  <div className="col-3 d-flex mb-3 image-button">
                    <button
                      onClick={() => this.handleClick(item._id, key)}
                      type="button"
                      className="btn btn-primary btn-lg wow-count"
                    >
                      Wow!
                      <span>{this.state.count[key]}</span>
                    </button>
                  </div>
                  <div className="col-1"></div>
                  <div
                    className="col-12 d-flex justify-content-center align-items-center flex-column"
                    style={{ color: "black" }}
                  >
                    <img
                      className="modal-image"
                      src={item.imageurl}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-12 modal-footer" style={{}}>
                  <button className="button" onClick={this.previous}>
                    <i className="bi-arrow-left"></i>
                    Prev
                  </button>

                  <button className="button" onClick={this.next}>
                    Next
                    <i className="bi-arrow-right"></i>
                  </button>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
