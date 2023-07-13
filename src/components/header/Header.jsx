import React, { Component } from "react";

export default class Header extends Component {
  // Khai báo hàm khởi tạo
  constructor() {
    super(); // Kế thừa tất cả các phương thức (Hàm) và thuộc tính (Property) bên trong class cha (Component)
    // Khai báo state
    this.state = {
      company: "Rikkei Academy", // Khai báo biến
    };
  }

  render() {
    // Hàm thay đổi tên công ty
    const handleChangeName = () => {
      // Tiến hành cập nhật/update/thay đổi lại state(trạng thái dữ liệu)
      this.setState({
        company: "RikkeiSoft",
      });
    };

    return (
      <div>
        Header
        <h2>Tên công ty: {this.state.company}</h2>
        <button onClick={handleChangeName}>Thay đổi tên công ty</button>
      </div>
    );
  }
}
