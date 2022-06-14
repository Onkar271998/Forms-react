import React from 'react'
import Row from './tableitem'

const Table = ({form}) => {
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Department</th>
                      <th>Salary</th>
                      <th>Married</th>
                      <th>Profile</th>
                  </tr>
              </thead>
              <tbody>
                  {form.map((e) => (
                      <Row key={e.username} form={e} />
                  ))}
              </tbody>
          </table>
    </div>
  )
}

export default Table