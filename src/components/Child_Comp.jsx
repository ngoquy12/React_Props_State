import React, { Component } from "react";

export default class Child_Comp extends Component {
  render() {
    // B2: Tạo ra một function thông qua sự kiện
    const handelChangeImage = () => {
      this.props.handleChangeImage(
        "https://onewaymobile.vn/images/products/2021/09/23/original/iphone-13-pro-max-_-onewaymobile_1632386599-copy.png"
      );
    };
    return (
      <div>
        <p>{this.props.propToChild}</p>
        <img src={this.props.image} alt="" />
        <i>{this.props.productName}</i>
        <button onClick={handelChangeImage}>Thay đổi hình ảnh</button>
      </div>
    );
  }
}
