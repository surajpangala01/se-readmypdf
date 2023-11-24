// import { useState } from 'react'
import React, { createElement, useState } from 'react'
import loading from './loading.gif'
import { Link } from 'react-router-dom'
// import { ReactDOM } from 'react-dom/client'
import logo from "./images/image.png"
import axios from 'axios'
import './core.css'
const Core = () => {
  // var [selectedFile, setSelectedFile] = useState(FormData);
  var formData = new FormData()
  const [load, setLoad] = useState(null)
  const [data, setData] = useState(null)
  const upload = async (e) => {
    formData.append('pdfBlob', e.target.files[0])
  };



  const submit = async () => {
    setLoad(true)
    axios.post('http://localhost:9000/upload', formData)
      .then(response => {
        // console.log(response)

        var data = response.data
        // console.log(response.data)
        setData(data)
        // const audio_tag = document.createElement('audio')
        // audio_tag.controls = true
        // const source_tag = document.createElement('source')
        // source_tag.src = data
        // source_tag.type = 'audio/mp3'
        // audio_tag.appendChild(source_tag)
        // document.querySelector('#holder').appendChild(audio_tag)
        // // var dat = 
        // var a = document.createElement('a')
        // a.href = data
        // a.innerHTML = 'download'
        // a.download = 'audio.mp3'
        // document.querySelector('#holder').appendChild(a)
        // console.log('hello')
        setLoad(false)
      })
      .catch(error => {
        console.error('Error uploading file:', error.message);
      })
  }
  return (
    <div id='holder'>
      <input type='file' onChange={upload} />
      <button type='submit' onClick={submit}>Submit</button>
      {load && <img src={loading} />}
      {(load === false) &&
        <>
          <audio controls style={{ width: '320px', height: '40px' }}>
            <source src={data} type='audio/mp3'></source>
          </audio >
          <a href={data} download='audio.mp3' style={{ textDecoration: 'none',color: 'green' }}>Download</a>
          <Link to="/feedback" style={{ textDecoration: 'none',color: 'green'}}>Give feedback</Link>
        </>
      }
      <img className='right-image'  src={logo}  alt='right image'/>
      </div>
    // </div>
  )
}

export default Core;