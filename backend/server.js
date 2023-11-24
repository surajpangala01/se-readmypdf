const exp = require('express');
const app = exp();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path')
const {MongoClient} = require('mongodb')
const port = 9000;

const uri = 'mongodb://0.0.0.0:27017/';
var detail; 
var feedback
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(function (err, database) {
  // console.log("hello")
  if (err)
     console.log("db error", err)
  else {
     k = database.db('seprojectdb')
     detail = k.collection('user_detail')
     feedback = k.collection('feedbacks')
     console.log('Connected to MongoDB');
     //Start app only after connection is ready
     // app.listen(5000);
  }
})


app.use(cors());
app.use(exp.json({ limit: 2548576 }));
app.use(fileUpload());




app.post('/upload', (req, res) => {
  var curtime = new Date();
  curtime = curtime.toISOString().replace(/[-:.]/g, '');

  const pdfBlob = req.files.pdfBlob;
  const name = req.files.pdfBlob.name.replace(/\s+/g, '_');
  const pdfFilePath = curtime + '_' + name;

  fs.writeFile('./pdfs/' + pdfFilePath, pdfBlob.data, (err) => {
    if (err) {
      console.error('Error saving PDF blob as a file:', err);
      res.status(500).send('Error saving PDF blob as a file');
      return;
    }
  });

  const pythonScript = './worker.py';
  const args = [curtime, name];

  const pythonProcess = spawn('python', [pythonScript, ...args]);

  pythonProcess.on('exit', (code, signal) => {
    if (code !== 0) {
      console.error(`Python script exited with code ${code} and signal ${signal}`);
      return;
    }
    const baseDirectory = './audio/'
    const audioFilePath = path.join(baseDirectory, `${pdfFilePath.slice(0,-4)}_output.mp3`);
    console.log(audioFilePath)
    // const audioFilePath = `./audio/${pdfFilePath}_output.mp3`;

    if (fs.existsSync(audioFilePath)) {

    } else {
      console.error('Audio file not found.');
    }

    // res.send('hello');
    fs.readFile(audioFilePath, function(err, result) {
      const send_data = {data : result.toString("base64")}
      const dataURL = `data:audio/mp3;base64,${send_data.data}`;
      // console.log(dataURL)
      res.json(dataURL);
    });

  });
});

app.post('/login',async (req,res)=>{
  console.log(req.body)

  const del= await detail.findOne({email:req.body.email})
  console.log(del)
  var out;
  if(req.body.password === del.password){
    out = del
  }
  else out = null
  res.send(out)
})

app.post('/signup',async(req,res)=>{
  console.log(req.body)

  const del = await detail.findOne({email:req.body.email})
  console.log(del)
  if(del){
    res.send(false)
  }
  else{
    await detail.insertOne(req.body)
    res.send(true)
  }
})

app.post('/feedback',async(req,res)=>{
  console.log(req.body)
  feedback.insertOne(req.body)
  res.send('done')
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
