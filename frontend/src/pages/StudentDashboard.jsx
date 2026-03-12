import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function StudentDashboard(){

return(

<DashboardLayout>

<h2>Welcome back, John!</h2>

<div className="stats-grid">

<StatCard
title="Today's Lectures"
value="5"
desc="2 completed, 3 remaining"
/>

<StatCard
title="Attendance Status"
value="87%"
desc="Above minimum requirement"
/>

<StatCard
title="Pending Assignments"
value="3"
desc="Due this week"
/>

<StatCard
title="Unread Announcements"
value="7"
desc="2 urgent"
/>

</div>

</DashboardLayout>

)

}

export default StudentDashboard