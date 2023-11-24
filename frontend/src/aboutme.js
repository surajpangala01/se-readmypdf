import react from 'react';
//import './aboutme.css'
const About = (props) => {
    return(
    <div className='d-flex justify-content-center align-items-center bg-white' style={{border:"2px solid black",marginTop:"80px",width:"600px",height:"300px",marginLeft:"370px",borderRadius:'30px',fontSize:"30px"}}>
        <table>
            <tr>
                <th>Name : </th>
                <th>{props.login.name}</th>
            </tr>
            <tr>
                <th>E-mail : </th>
                <th>{props.login.email}</th>
            </tr>
            <tr>
                <th>Mobile No : </th>
                <th>{props.login.mobile}</th>
            </tr>
        </table>
    </div>
    )
}

export default About;