import "../App.css"

const Table = ({owner,tableRow}) => {

    return (
        <div className='table'  style={{width: tableRow ? "50%" : "100%"}}>
            <div className='name-area flex-center'>
                <p className='text' style={{color:"black"}}>{owner.name}</p>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th></th>
                        <th>~16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>19</th>
                        <th>20</th>
                        <th>21</th>
                        <th>bust</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>1HIT</td>
                        <td>{owner.tableData[0][0]}</td>
                        <td>{owner.tableData[0][1]}</td>
                        <td>{owner.tableData[0][2]}</td>
                        <td>{owner.tableData[0][3]}</td>
                        <td>{owner.tableData[0][4]}</td>
                        <td>{owner.tableData[0][5]}</td>
                        <td>{owner.tableData[0][6]}</td>
                    </tr>
                </thead>
                 <thead>
                    <tr>
                        <td>2HIT</td>
                        <td>{owner.tableData[1][0]}</td>
                        <td>{owner.tableData[1][1]}</td>
                        <td>{owner.tableData[1][2]}</td>
                        <td>{owner.tableData[1][3]}</td>
                        <td>{owner.tableData[1][4]}</td>
                        <td>{owner.tableData[1][5]}</td>
                        <td>{owner.tableData[1][6]}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
    
  }
  
  export default Table