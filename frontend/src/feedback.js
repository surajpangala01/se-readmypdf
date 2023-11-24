import React, { useState } from 'react';
import axios from 'axios'
import './feedback.css'



const FeedbackForm = (props) => {
  const [feedback, setFeedback] = useState('');
    const[bool,setBool] = useState(false)
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the feedback, like sending it to a server or processing it
    // console.log('Feedback submitted:', feedback);
    // value = props.login
    var value = Object.assign({}, props.login);
    value.feedback = feedback
    axios.post('http://localhost:9000/feedback',value)
    .then(data =>{
        setBool(true)
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
    // You can also reset the form or perform any other necessary actions here
  };

  return (
    <div className='Form'>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Type your feedback here..."
        ></textarea>

        <button type="submit">Submit Feedback</button>
        {bool && <span>Thank you</span>}
      </form>
    </div>
  );
};

export default FeedbackForm;
