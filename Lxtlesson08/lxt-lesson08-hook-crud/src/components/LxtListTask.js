import React, { useState, useEffect } from "react";

export default function LxtApp() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    lxtId: "",
    lxtName: "",
    lxtAge: "",
    lxtPhone: "",
    lxtStatus: false,
  });

  useEffect(() => {
    const storedStudents = localStorage.getItem("lxtListStudent");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lxtListStudent", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      lxtId: "",
      lxtName: "",
      lxtAge: "",
      lxtPhone: "",
      lxtStatus: false,
    });
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const handleToggleStatus = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].lxtStatus = !updatedStudents[index].lxtStatus;
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.lxtId}</td>
              <td>{student.lxtName}</td>
              <td>{student.lxtAge}</td>
              <td>{student.lxtPhone}</td>
              <td>
                {student.lxtStatus ? (
                  <span className="badge badge-success">Active</span>
                ) : (
                  <span className="badge badge-danger">Inactive</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteStudent(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleToggleStatus(index)}
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Thêm sinh viên mới</h2>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="lxtId"
          value={newStudent.lxtId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="lxtName"
          value={newStudent.lxtName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="lxtAge"
          value={newStudent.lxtAge}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="lxtPhone"
          value={newStudent.lxtPhone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="checkbox"
          name="lxtStatus"
          checked={newStudent.lxtStatus}
          onChange={() =>
            setNewStudent({
              ...newStudent,
              lxtStatus: !newStudent.lxtStatus,
            })
          }
        />
      </div>
      <button className="btn btn-success" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
}
