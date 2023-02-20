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
    console.log(props);
  }

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
            console.log(res.data);
            const a = this.props.data.react;
            a[key] = res.data.ipAddress.length;
            console.log(a);

            // this.props.data.setReact((datas) => ({
            //   ...datas,
            //   [key]: this.data.ipAddress.length,
            // }));
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
                <div class="row">
                  {/* <div class="col-4"></div> */}
                  <div class="col-8 image-title">
                    <h5 class="pt-2" style={{ color: "grey" }}>
                      If you like it give it a{" "}
                    </h5>{" "}
                  </div>
                  <div class="col-3 d-flex mb-3 image-button">
                    <button
                      onClick={() => this.handleClick(item._id, key)}
                      type="button"
                      class="btn btn-primary btn-lg wow-count"
                    >
                      Wow!
                      <span>{this.props.data.react[key]}</span>
                    </button>
                  </div>
                  <div class="col-1"></div>
                  <div
                    class="col-12 d-flex justify-content-center align-items-center flex-column"
                    style={{ color: "black" }}
                  >
                    <img
                      className="modal-image"
                      src={item.imageurl}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-12 modal-footer" style={{}}>
                  <button className="button" onClick={this.previous}>
                    <i class="bi-arrow-left"></i>
                    Prev
                  </button>

                  <button className="button" onClick={this.next}>
                    Next
                    <i class="bi-arrow-right"></i>
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
