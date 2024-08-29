// const express = require('express');
// const bodyParser = require('body-parser');
// const textToSpeech = require('@google-cloud/text-to-speech');
// const fs = require('fs');
// const util = require('util');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const client = new textToSpeech.TextToSpeechClient();

// app.post('/api/text-to-speech', async (req, res) => {
//   const { text } = req.body;

//   const request = {
//     input: { text },
//     voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//     audioConfig: { audioEncoding: 'MP3' },
//   };

//   const [response] = await client.synthesizeSpeech(request);
//   const filePath = path.join(__dirname, 'output.mp3');
//   const writeFile = util.promisify(fs.writeFile);
//   await writeFile(filePath, response.audioContent, 'binary');

//   res.send({ url: `http://localhost:5000/output.mp3` });
// });

// app.use('/output.mp3', express.static(path.join(__dirname, 'output.mp3')));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
