import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

function AdminDashboard(){

return(

<DashboardLayout>

<h2>Admin Dashboard</h2>

<div className="stats-grid">

<StatCard
title="Total Students"
value="2547"
desc="+124 this semester"
/>

<StatCard
title="Total Faculty"
value="156"
desc="Across 12 departments"
/>

<StatCard
title="Total Courses"
value="84"
desc="32 active this semester"
/>

<StatCard
title="Attendance Overview"
value="89%"
desc="Average across all"
/>

</div>

<div className="dashboard-row">

<div className="dashboard-card">
<h3>Students by Department</h3>
<p>Chart will be added later</p>
</div>

<div className="dashboard-card">
<h3>Attendance Analytics</h3>
<p>Chart will be added later</p>
</div>

</div>

</DashboardLayout>

)

}

export default AdminDashboard