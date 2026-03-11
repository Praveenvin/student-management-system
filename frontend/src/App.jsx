import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">EduTrack</h1>

      <h3 className="mb-3">Student List</h3>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>USN</th>
            <th>Department</th>
            <th>Email</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.usn}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;