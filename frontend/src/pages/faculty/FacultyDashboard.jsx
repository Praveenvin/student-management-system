import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

function FacultyDashboard() {

  return (

    <DashboardLayout>

      <h2>Faculty Dashboard</h2>

      <div className="stats-grid">

        <StatCard
          title="My Courses"
          value="4"
          desc="Active this semester"
        />

        <StatCard
          title="Pending Assignments"
          value="12"
          desc="To be graded"
        />

        <StatCard
          title="Students in Classes"
          value="186"
          desc="Across all courses"
        />

        <StatCard
          title="Avg. Attendance"
          value="91%"
          desc="This month"
        />

      </div>

      <div className="dashboard-row">

        <div className="dashboard-card">

          <h3>Recent Assignments</h3>

          <table>

            <thead>
              <tr>
                <th>Assignment</th>
                <th>Course</th>
                <th>Submitted</th>
                <th>Due</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Data Structures Lab 5</td>
                <td>CS301</td>
                <td>42/48</td>
                <td>Mar 15</td>
              </tr>

              <tr>
                <td>OS Assignment 3</td>
                <td>CS302</td>
                <td>38/45</td>
                <td>Mar 12</td>
              </tr>

              <tr>
                <td>DBMS Project Phase 1</td>
                <td>CS303</td>
                <td>30/50</td>
                <td>Mar 18</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="dashboard-card">

          <h3>Student Performance</h3>

          <table>

            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Arun Kumar</td>
                <td>CS301</td>
                <td>87</td>
                <td>A</td>
              </tr>

              <tr>
                <td>Priya Sharma</td>
                <td>CS301</td>
                <td>92</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>Rahul Verma</td>
                <td>CS302</td>
                <td>74</td>
                <td>B+</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default FacultyDashboard;