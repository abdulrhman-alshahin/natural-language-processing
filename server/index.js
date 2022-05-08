const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
// const { decodeSoundFile } = require('./soundAnalizer');
const AudioContext = require('web-audio-api/build/AudioContext');
const fs = require('fs');
const readFile = fs.readFile;
const context = new AudioContext();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
let soundfiles = ['alf1.m4a', 'yaa1.m4a', 'yaa2.m4a', 'yaa3.m4a', 'yaa4.m4a'];
let path = './assets/sounds/';
app.get('/', (req, res) => {
  res.send('Express Server');
});

// console.log(decodeSoundFile);
app.post('/isYaa', (req, res) => {
  console.log('working');
  let info = [];
  readFile(path + soundfiles[0], (err, buf) => {
    if (err) throw err;
    context.decodeAudioData(
      buf,
      function (audioBuffer) {
        info.push({
          length: audioBuffer.length,
          duration: audioBuffer.duration,
          sampleRate: audioBuffer.sampleRate,
          numberOfChannels: audioBuffer.numberOfChannels,
        });
        res.json(info);
      },
      (err) => {
        throw err;
      }
    );
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
