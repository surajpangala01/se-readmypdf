// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Home(props) {
// //     return (
// //       <div>
// //         <h1>Home</h1>
// //         <Link to="/login">Login</Link>
// //         <br></br>
// //         <Link to="/signup">Sign Up</Link>
// //         <br/>
// //         {props.login && <Link to="/reader">Reader</Link>}

// //       </div>
// //     );
// //   }
  
// //   export default Home;
  
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './home.css'
// import pdfReader from "./images/pdfReader.png"

// function Home() {
//     return (
//       <div className='d-flex justify-content-center align-items-center vh-100' style={{background:"grey",marginTop:"-120px"}}>
//         <div className='mt-5 w-100'>
//           <div style={{ float: "left", width: "50%", height: "550px", border: "2px solid green" }}>
//             <h1 className='mt-4' style={{ marginLeft: "120px",color:"yellow" }}>Welcome to P.D.F Reader</h1>
//             <div className='ms-3 mt-3' id="quote" style={{border:"3px solid black",backgroundColor:"white",width:"800px",height:"400px",padding:"40px",borderRadius:"30px"}}>
//               <p style={{ fontSize: "24px" }}>
//                 To put it simply, PixelArt makes photo editing easy.<br />
//                 PixelArt photo editor lets you edit photos in just a few clicks. It covers various free online photo editing <br />
//                 tools, so you do basic editing with your images and pixelate yours images. Join our pixel community to <br />
//                 avail yourself and others in Image editing skills. Upload your work on "My Upload" to keep it safe. Take <br />
//                 a look at our photo editing features and have fun !
//               </p>
//             </div>
//           </div>

//           <div className='mr-4' style={{ float: "right", width: "50%", height: "550px", border: "2px solid blue" }}>
//             <img className='mt-5' style={{ width: "800px", height: "470px", marginLeft: "10px", borderRadius: "30px" }} src={pdfReader} alt="img"></img>
//           </div>
//         </div>
//         <div>
        
//   {/* //       <h1>Home</h1>
//   //       <Link to="/login" >Login</Link>
//   //       <br></br>
//   //       <Link to="/signup" >Sign Up</Link>
//   //       <br/>
//   //       <br/>
//   //       <Link to = '/reader'>Reader</Link> */}
//   // </div>
//       </div>
//     );
//   }
  
//   export default Home;

//   // <div>
        
//   //       <h1>Home</h1>
//   //       <Link to="/login" >Login</Link>
//   //       <br></br>
//   //       <Link to="/signup" >Sign Up</Link>
//   //       <br/>
//   //       <br/>
//   //       <Link to = '/reader'>Reader</Link>
//   // </div>

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home(props) {
//     return (
//       <div>
//         <h1>Home</h1>
//         <Link to="/login">Login</Link>
//         <br></br>
//         <Link to="/signup">Sign Up</Link>
//         <br/>
//         {props.login && <Link to="/reader">Reader</Link>}

//       </div>
//     );
//   }
  
//   export default Home;
  
import React from 'react';
import { Link } from 'react-router-dom';
// import './home.css'
import pdfReader from "./images/girl_holding.png"

function Home() {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100' style={{marginTop:"10px"}}>
        <div className='mt-5 w-100'>
          <div style={{ float: "left", width: "50%", height: "550px" }}>
            <h1 className='mt-4' style={{ marginLeft: "120px",color:"black" }}><b>Welcome to P.D.F Reader</b></h1>
            <div className='ms-3 mt-3' id="quote" style={{width:"800px",height:"400px",padding:"40px",borderRadius:"30px"}}>
              <p style={{ fontSize: "20px",fontFamily:"cursive" }}>
                To put it simply, PixelArt makes photo editing easy.<br />
                PixelArt photo editor lets you edit photos in just a few clicks. It covers various free online photo editing <br />
                tools, so you do basic editing with your images and pixelate yours images. Join our pixel community to <br />
                avail yourself and others in Image editing skills. Upload your work on "My Upload" to keep it safe. Take <br />
                a look at our photo editing features and have fun !
              </p>
            </div>
          </div>

          <div className='mr-4' style={{ float: "right", width: "50%", height: "550px"}}>
            <img className='mt-5' style={{ width: "550px", height: "440px", marginLeft: "150px", borderRadius: "30px" }} src={pdfReader} alt="img"></img>
          </div>
        </div>
        <div>
        

        
        
  
  </div>
      </div>
      
    );
  }
  
  export default Home;

  // <div>
        
  //       <h1>Home</h1>
  //       <Link to="/login" >Login</Link>
  //       <br></br>
  //       <Link to="/signup" >Sign Up</Link>
  //       <br/>
  //       <br/>
  //       <Link to = '/reader'>Reader</Link>
  // </div>
  