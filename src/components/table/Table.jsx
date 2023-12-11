import './table.css'
function Table({columns=[], rows=[]}) {
  return (
    <div className="table">
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr key={item.key}>
            {columns.map((column) => (
              <td key={column.key}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table