import React from "react";

export default function LxtListUsers({ renderLxtListUsers }) {
  console.log("LxtListUsers:", renderLxtListUsers);
  //hien thi du lieu
  let lxtElementUser = renderLxtListUsers.map((lxtUser, index) => {
    return (
      <>
        <tr>
          <td>{lxtUser.id}</td>
          <td>{lxtUser.Username}</td>
          <td>{lxtUser.password}</td>
          <td>{lxtUser.email}</td>
          <td>{lxtUser.phone}</td>
          <td>...</td>
        </tr>
      </>
    );
  });
  return (
    <div className=" row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Chức Năng</th>
            </tr>
          </thead>
          <tbody>{lxtElementUser}</tbody>
        </table>
      </div>
    </div>
  );
}
