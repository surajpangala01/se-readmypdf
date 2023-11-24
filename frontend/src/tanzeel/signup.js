import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Validation  from './SignupValidation';

function Signup() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})

    const handleOnchange=(event)=>{
        setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));


    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100' style={{backgroundImage:"linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",height:"100%"}}>
        <div className='bg-white p-3 rounded' style={{border:"3px solid black",width:"700px",height:"600px", boxShadow: '10px 10px 5px 5px grey'}}>
            <form action="" onSubmit={handleSubmit}>
                <h1 className='d-flex justify-content-center align-items-center mb-4'>Sign Up Form</h1>
                <div className='mb-3'>
                    <label className='mb-2' htmlFor='name'><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" name='name' 
                    onChange={handleOnchange} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className='mb-3'>
                    <label className='mb-2' htmlFor='email'><strong>Email</strong></label>
                    <input placeholder="Enter Email" name='email'
                    onChange={handleOnchange} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className='mb-3'>
                    <label className='mb-2' htmlFor='password'><strong>Password</strong></label>
                    <input placeholder="Enter Password" name='password'
                    onChange={handleOnchange} className='form-control rounded-0'/> 
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>

                <button type='submit' className='mt-4 mb-4 btn btn-success d-flex justify-content-center' style={{width:"200px",borderRadius:"20px"}}>Sign Up</button>
                <p className='d-flex justify-content-center' style={{marginLeft:"420px"}}>Already registered ?</p>
                <Link to="/login" className='btn btn-default border bg-light mt-1' style={{width:"200px",marginLeft:"440px",borderRadius:"20px"}}>Login</Link>

            </form>
        </div>
    </div>
    );
  }
  
  export default Signup;