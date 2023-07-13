import React, { Component } from "react";
import Child_Comp from "./Child_Comp";

export default class Parent_Comp extends Component {
  constructor() {
    super();
    this.state = {
      productName: "Điện thoại Iphone",
      iamge: "https://cdn.tgdd.vn/ValueIcons/iphone.jpg",
    };
  }
  render() {
    //B1: Tạo ra một hàm để thay đổi hình ảnh
    const handleChangeImage = (linkImage) => {
      // B3: Sử dụng state được gửi lên từ component con
      console.log("linkImage", linkImage);
      this.setState({
        iamge: linkImage,
      });
    };

    return (
      <div>
        Parent_Comp
        <Child_Comp
          propToChild={"Props truyền từ component cha xuống component con"}
          productName={this.state.productName}
          image={this.state.iamge}
          handleChangeImage={handleChangeImage}
        />
      </div>
    );
  }
}
