import React from 'react'

const Row = ({form}) => {
  return (
      <tr>
          <td>{form.username}</td>
          <td>{form.age}</td>
          <td>{form.address}</td>
          <td>{form.selectdept}</td>
          <td>{form.salary}</td>
          <td>{form.isMarried ? "Married" : "Unmarried"}</td>
          <td>{form.photo}</td>
      </tr>
  )
}

export default Row