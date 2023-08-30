import React from 'react'
 
const Table = ({data}) => {
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip_Address</th>
          </tr>
        </thead>
        <tbody>
        {data.map((user) =>{

                const {id,first_name,last_name,email,gender,ip_address} = user;

                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                        <td>{ip_address}</td>
                    </tr>
                )
            })
        }
        </tbody>
      </table>
    </>
  )
}

export default Table
