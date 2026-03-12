import { Link } from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h2>EduTrack</h2>

<ul>

<li><Link to="/student">Dashboard</Link></li>
<li><Link to="/attendance">Attendance</Link></li>
<li><Link to="/timetable">Timetable</Link></li>
<li><Link to="/study-material">Study Material</Link></li>
<li><Link to="/assignments">Assignments</Link></li>
<li><Link to="/marks">Internal Marks</Link></li>
<li><Link to="/leave">Leave Requests</Link></li>
<li><Link to="/messages">Messaging</Link></li>
<li><Link to="/reports">Reports</Link></li>
<li><Link to="/profile">Profile & Settings</Link></li>

</ul>

</div>

)

}

export default Sidebar