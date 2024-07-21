// import axios from'axios'
// import {useEffect, useState} from 'react'
// import{Link} from 'react-router-dom'
// const Users = () => {
//     const[users,setUSers]=useState([])
//     useEffect(()=>{
//         axios.get("http://localhost:5550")
//         .then(result=>setUSers(result.data))
//         .catch(err=>console.log(err))
//     },[])
//     const handledelete=(id)=>{
//         axios.delete('http://localhost:5550/deleteuser/'+id)
//         .then(res=>{console.log(res)
//          window.location.reload()   
//         })
//         .catch(err=>console.log(err))

//     }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
//         <div className='w-80 bg-white rounded p-3'>
//             <Link to='/create' className='btn btn-success '>Add</Link>

//             <div className='table'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Age</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                     users.map((user)=>{
//                         return<tr>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.age}</td>
//                             <td>
//                             <Link to={`/update/${user._id}`} className='btn btn-success '>Update</Link>
//                             <button className='btn btn-danger' onClick={(e)=>handledelete(user._id)}>Delete</button>
//                                 </td>

//                         </tr>
//                     })
//                 }
//                 </tbody>
            

//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default Users





import axios from'axios'
import {useEffect, useState} from 'react'
import{Link} from 'react-router-dom'
const Users = () => {
    const[users,setUSers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5550")
        .then(result=>setUSers(result.data))
        .catch(err=>console.log(err))
    },[])
    const handledelete=(id)=>{
        axios.delete('http://localhost:5550/deleteuser/'+id)
        .then(res=>{console.log(res)
         window.location.reload()   
        })
        .catch(err=>console.log(err))

    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
        <div className='w-80 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success '>Add</Link>

            <div className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user)=>{
                        return<tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.designation}</td>
                            <td>{user.gender}</td>
                            <td>{user.course}</td>
                            <td>{user.image}</td>
                            <td>
                            <Link to={`/update/${user._id}`} className='btn btn-success '>Update</Link>
                            <button className='btn btn-danger' onClick={(e)=>handledelete(user._id)}>Delete</button>
                                </td>

                        </tr>
                    })
                }
                </tbody>
            

            </div>

        </div>
      
    </div>
  )
}

export default Users
