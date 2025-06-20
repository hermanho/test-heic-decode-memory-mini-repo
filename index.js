// Node.js program to read HEIC photos from a directory and decode them using heic-decode
const fs = require('fs').promises;
const heicDecode = require('heic-decode');

async function decodeHeicFile() {
  try {
    // repeat 600 times for stress testing
    for (let i = 0; i < 600; i++) {
        try {
        const data = await fs.readFile('photo_001.heic');
        const decoded = await heicDecode({ buffer: data });
        console.log(`Decoded ${i}:`, {
          width: decoded.width,
          height: decoded.height,
          length: decoded.data.length
        });
      } catch (err) {
        console.error(`Error reading or decoding ${i}:`, err);
      }
    }
  } catch (err) {
    console.error('Error reading photos directory:', err);
  }
}

decodeHeicFile();
