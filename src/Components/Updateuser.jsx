import React,{useEffect,useState} from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Updateuser = () => {
    const{id}=useParams()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:5550/getuser/${id}`)
        .then(result=> {console.log(result)
          setName(result.data.name)
          setEmail(result.data.email)
          setAge(result.data.age)
        })
        .catch(err=>console.log(err))
    },[id])

    const update=(e)=>{
      e.preventDefault()
      axios.put("http://localhost:5550/updateuser/"+id,{name,email,age})
      .then(result=>{
        console.log(result)
         navigate('/')
      })
      .catch(err=>console.log(err))
    }

    // const update = async (id, name, email, age) => {
    //   try {
    //     const result = await axios.put(`http://localhost:5550/updateuser/${id}`, { name, email, age });
    //     console.log('User updated:', result.data);
    //     return result.data;
    //   } catch (error) {
    //     console.log("Data not updated:", error.message);
    //   }
    // };
    


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
    <div className='w-80 bg-white rounded p-3'>
        <form onSubmit={update}>
            <h2>Update User</h2>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter the name' className='form-control'
                value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter the Email' className='form-control'
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter athe age' className='form-control'
            value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
   </div>
</div>
  )
}   

export default Updateuser
