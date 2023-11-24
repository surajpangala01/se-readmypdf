import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
// import Validation from './LoginValidation'
import axios from 'axios'
function Login(props){
    const history = useNavigate();
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const [valid,setValidate] = useState(null)
    const [errors,setErrors] = useState({})

    const handleOnchange1=(event)=>{
        // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
        setValues({email:event.target.value})
    }

    const handleOnchange2=(event)=>{
        // setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
        const k = values
        k.password = event.target.value
        setValues(k)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        // setErrors(Validation(values));
        console.log(values)
        axios.post('http://localhost:9000/login',values)
        .then(res=>{
            console.log(res)
            if(res.data){
                var k = res.data
                delete k._id
                props.setLogin(k)
                history('/')
            }
            else{
                setValidate(true)
                console.log("User doesn't exist")
            }
        })
        .catch(err=>{
            console.log('Error logging in')
        })
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input placeholder="Enter Email" name="email"
                        onChange={handleOnchange1} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input placeholder="Enter Password" name="password"
                        onChange={handleOnchange2} className='form-control rounded-0'/> 
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    {valid && <span className='text-danger'>Incorrect credentials</span>} 
                    <button type='submit' className='btn btn-success w-100'>Log in</button>
                    <p className='d-flex justify-content-center'>T&Cs applied</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light'>Create account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;