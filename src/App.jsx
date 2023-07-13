import React from "react";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import Parent_Comp from "./components/Parent_Comp";

export default function App() {
  const company = "Rikkei Academy";
  const age = 5;
  // cho một mảng gồm các thông tin:
  const users = [
    {
      id: 1,
      username: "a",
      age: 12,
    },
    {
      id: 2,
      username: "b",
      age: 13,
    },
    {
      id: 3,
      username: "c",
      age: 14,
    },
    {
      id: 4,
      username: "d",
      age: 15,
    },
  ];

  return (
    // <div>
    //   {/* <Header></Header>
    //   <Content />
    //   <Footer /> */}
    //   <h1 class="heading" style={{ font: "30px", backgroundColor: "red" }}>
    //     {/* Binding dữ liệu */}
    //     {company} - {age}
    //   </h1>
    //   {/* Render dữ liệu ra table */}
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Usernam</th>
    //         <th>Age</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.id}>
    //           <td>{user.id}</td>
    //           <td>{user.username}</td>
    //           <td>{user.age}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div style={{ textAlign: "center" }}>
      <Header />
      <h2>Props và State</h2>
      <Parent_Comp />
    </div>
  );
}
