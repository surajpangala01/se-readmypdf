// import React,{useState,useEffect} from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import Validation  from './SignupValidation';
// import axios from 'axios'
// function Signup() {
//     const navigate = useNavigate()
//     const [values,setValues] = useState({})

//     const [errors,setErrors] = useState({})
//     const [unable,setUnable] = useState(null)

//     const handleOnchange1=(event)=>{
//         // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
//             valuesk[event.target.name] = event.target.value
//             console.log(valuesk)
//     }

//     const handleOnchange2=(event)=>{
//         // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
//         valuesk[event.target.name] = event.target.value
//         console.log(valuesk)

//     }

//     const handleOnchange3=(event)=>{
//         // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
//         valuesk[event.target.name] = event.target.value
//         console.log(valuesk)

//     }

//     const handleOnchange4=(event)=>{
//         // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
//         valuesk[event.target.name] = event.target.value
//         console.log(valuesk)

//     }

//     const handleSubmit=(event)=>{  
//         setValues(values) 
//         console.log(values)
//         event.preventDefault();
//         // setErrors(Validation(values))
//         console.log("value : ",values)
//         console.log(errors)

        
//             axios.post('http://localhost:9000/signup',values)
//             .then(res =>{
//                 console.log(res.data)
//                 if(res.data){
//                     navigate('/login')

//                 }
//                 else{
//                     setUnable(true)
//                     console.log('no user')
//                 }
//             })
//             .catch(err=>console.log("Error Signing in"))
        

    

//     }
//     useEffect(()=>{
//         var values = new Object;

//     },[])
//     return (
//         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded w-25'>
//             <form action="" onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor='name'>Name</label>
//                     <input type="text" placeholder="Enter Name" name='name' 
//                     onChange={handleOnchange1} className='form-control rounded-0'/>
//                     {errors.name && <span className='text-danger'>{errors.name}</span>}
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor='mobile'>Mobile</label>
//                     <input placeholder="Enter Mobile Number" name='mobile'
//                     onChange={handleOnchange4} className='form-control rounded-0'/> 
//                     {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor='email'>Email</label>
//                     <input placeholder="Enter Email" name='email'
//                     onChange={handleOnchange2} className='form-control rounded-0'/>
//                     {errors.email && <span className='text-danger'>{errors.email}</span>}
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor='password'>Password</label>
//                     <input placeholder="Enter Password" name='password'
//                     onChange={handleOnchange3} className='form-control rounded-0'/> 
//                     {errors.password && <span className='text-danger'>{errors.password}</span>}
//                 </div>

                



//                 <button type='submit' className='btn btn-success w-100'>Sign Up</button>
//                 <p className='d-flex justify-content-center'>T&Cs applied</p>
//                 {unable && <span className='text-danger'>User already Exists</span>}
//                 <Link to="/login" className='btn btn-default border w-100 bg-light'>Login</Link>
//             </form>
//         </div>
//     </div>
//     );
//   }
  
//   export default Signup;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [unable, setUnable] = useState(null);

  const handleOnchange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    try {
      const res = await axios.post('http://localhost:9000/signup', values);
      console.log(res.data);

      if (res.data) {
        navigate('/login');
      } else {
        setUnable(true);
        console.log('no user');
      }
    } catch (err) {
      console.log('Error Signing in', err);
    }
  };

  useEffect(() => {
    setValues({});
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              name='name'
              onChange={handleOnchange}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='mobile'>Mobile</label>
            <input
              type='text'
              placeholder='Enter Mobile Number'
              name='mobile'
              onChange={handleOnchange}
              className='form-control rounded-0'
            />
            {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleOnchange}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleOnchange}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          {/* Add more input fields as needed */}

          <button type='submit' className='btn btn-success w-100'>
            Sign Up
          </button>
          <p className='d-flex justify-content-center'>T&Cs applied</p>
          {unable && <span className='text-danger'>User already Exists</span>}
          <Link to='/login' className='btn btn-default border w-100 bg-light'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
