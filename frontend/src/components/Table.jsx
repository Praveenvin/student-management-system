function Table({columns, data}){

return(
<table>
<thead>
<tr>
{columns.map(col => <th>{col}</th>)}
</tr>
</thead>

<tbody>
{data.map(row => (
<tr>
<td>{row.name}</td>
<td>{row.course}</td>
</tr>
))}
</tbody>

</table>
)

}

export default Table