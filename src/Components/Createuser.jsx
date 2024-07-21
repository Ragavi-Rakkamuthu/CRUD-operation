import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [designation, setDesignation] = useState([]);
    const [gender, setGender] = useState();
    const [course, setCourse] = useState([]);
    const [image, setImage] = useState();
    
    const navigate = useNavigate();

    const handleCheckboxChange = (e, setter) => {
        const { value, checked } = e.target;
        setter(prevState => 
            checked ? [...prevState, value] : prevState.filter(v => v !== value)
        );
    };

    const handleFileUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const Submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('designation', designation);
        formData.append('gender', gender);
        formData.append('course', course);
        formData.append('image', image);

        axios.post("http://localhost:5550/createuser", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-80 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text" placeholder='Enter the name' className='form-control'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="text" placeholder='Enter the Email' className='form-control'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Mobile NO</label>
                        <input type="text" placeholder='Enter the mobile number' className='form-control' maxLength={10}
                            onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Designation</label>
                        <div>
                            <input type="checkbox" value="HR" onChange={(e) => handleCheckboxChange(e, setDesignation)} /> HR
                            <input type="checkbox" value="Manager" onChange={(e) => handleCheckboxChange(e, setDesignation)} /> Manager
                            <input type="checkbox" value="Sales" onChange={(e) => handleCheckboxChange(e, setDesignation)} /> Sales
                        </div>
                    </div>
                    <div className="mb-4">
                        <label>Gender</label>
                        <div>
                            <input type="radio" value="Male" name="gender" onChange={(e) => setGender(e.target.value)} /> Male
                            <input type="radio" value="Female" name="gender" onChange={(e) => setGender(e.target.value)} /> Female
                        </div>
                    </div>
                    <div className="mb-5">
                        <label>Course</label>
                        <div>
                            <input type="checkbox" value="MCA" onChange={(e) => handleCheckboxChange(e, setCourse)} /> MCA
                            <input type="checkbox" value="BCA" onChange={(e) => handleCheckboxChange(e, setCourse)} /> BCA
                            <input type="checkbox" value="BSc" onChange={(e) => handleCheckboxChange(e, setCourse)} /> BSc
                        </div>
                    </div>
                    <div className="mb-6">
                        <label>Image</label>
                        <input type="file" className='form-control' onChange={handleFileUpload} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Createuser;


// import {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Createuser = () => {
//     const[name,setName]=useState()
//     const[email,setEmail]=useState()
//     const[mobile,setMobile]=useState()
//     const[designation,setDesignation]=useState()
//     const[gender,setGender]=useState()
//     const[course,setCourse]=useState()
//     const[image,setImage]=useState()
    
//     const navigate=useNavigate()
    
//     const Submit=(e)=>{
//       e.preventDefault();
//       axios.post("http://localhost:5550/createuser",{name,email,mobile,designation,gender,course,image})
//       .then(result=>{
//         console.log(result)
//          navigate('/')
//       })
//       .catch(err=>console.log(err))
      
//     }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
//         <div className='w-80 bg-white rounded p-3'>
//             <form onSubmit={Submit}>
//                 <h2>Add User</h2>
//                 <div className="mb-2">
//                     <label htmlFor="">Name</label>
//                     <input type="text" placeholder='Enter the name' className='form-control'
//                     onChange={(e)=>setName(e.target.value)}/>
//                 </div>
//                 <div className="mb-2">
//                 <label htmlFor="">Email</label>
//                 <input type="text" placeholder='Enter the Email' className='form-control'
//                 onChange={(e)=>setEmail(e.target.value)}/>
//                 </div>
//                 <div className="mb-2">
//                 <label htmlFor="">Mobile NO</label>
//                 <input type="text" placeholder='Enter athe age' className='form-control' maxLength={10}
//                 onChange={(e)=>setMobile(e.target.value)}/>
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="">Designation</label>
//                 <input type="dropdown" placeholder='Enter athe age' className='form-control'
//                 onChange={(e)=>setDesignation(e.target.value)}/>
//                 {/* <select name="dropdown" id="" onChange={(e)=>setDesignation(e.target.value)} style={{'width':'100px'}}>
//                   <option value="HR">HR</option>
//                   <option value="Mangaer">Manager</option>
//                   <option value="Sales">Sales</option>
//                 </select> */}
//                 </div>
//                 <div className="mb-4">
//                 <label htmlFor="">Gender</label>
//                 <input type="radio"  className='form-control'
//                 onChange={(e)=>setGender(e.target.value)}/>
//                 </div>
//                 <div className="mb-5">
//                 <label htmlFor="">Course</label>
//                 <input type="checkbox" placeholder='Enter athe age' className='form-control'
//                 onChange={(e)=>setCourse(e.target.value)}/>
//                 </div>
//                 <div className="mb-6">
//                 <label htmlFor="">Image</label>
//                 <input type="fileupload" placeholder='upload image' className='form-control'
//                 onChange={(e)=>setImage(e.target.value)}/>
//                 </div>
//                 <button className='btn btn-success'>Submit</button>
//             </form>
//         </div>
            
//     </div>
//   )
// }

// export default Createuser 

// -------------------------------------original-----------------------

// import {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Createuser = () => {
//     const[name,setName]=useState()
//     const[email,setEmail]=useState()
//     const[mobile,setMobile]=useState()
//     const[designation,setDesignation]=useState()
//     const[gender,setGender]=useState()
//     const[course,setCourse]=useState()
//     const[image,setImage]=useState()
    
//     const navigate=useNavigate()
    
//     const Submit=(e)=>{
//       e.preventDefault();
//       axios.post("http://localhost:5550/createuser",{name,email,mobile,designation,gender,course,image})
//       .then(result=>{
//         console.log(result)
//          navigate('/')
//       })
//       .catch(err=>console.log(err))
      
//     }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
//         <div className='w-80 bg-white rounded p-3'>
//             <form onSubmit={Submit}>
//                 <h2>Add User</h2>
//                 <div className="mb-2">
//                     <label htmlFor="">Name</label>
//                     <input type="text" placeholder='Enter the name' className='form-control'
//                     onChange={(e)=>setName(e.target.value)}/>
//                 </div>
//                 <div className="mb-2">
//                 <label htmlFor="">Email</label>
//                 <input type="text" placeholder='Enter the Email' className='form-control'
//                 onChange={(e)=>setEmail(e.target.value)}/>
//                 </div>
//                 <div className="mb-2">
//                 <label htmlFor="">Age</label>
//                 <input type="text" placeholder='Enter athe age' className='form-control'
//                 onChange={(e)=>setAge(e.target.value)}/>
//                 </div>
//                 <button className='btn btn-success'>Submit</button>
//             </form>



        
//         </div>
            
//     </div>
//   )
// }

// export default Createuser

