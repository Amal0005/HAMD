import fs from 'fs';
import Jimp from 'jimp';

async function generateFavicon() {
  try {
    const image = await Jimp.read('public/LogoHAMD.png');
    
    // Resize for favicon size to keep file small, maintain aspect ratio
    image.contain(128, 128);
    
    // Change all non-transparent pixels to white
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      if (this.bitmap.data[idx + 3] > 0) { // If alpha > 0
        this.bitmap.data[idx + 0] = 255; // R
        this.bitmap.data[idx + 1] = 255; // G
        this.bitmap.data[idx + 2] = 255; // B
      }
    });
    
    await image.writeAsync('public/favicon.png');
    console.log("Successfully created public/favicon.png in white!");
  } catch (error) {
    console.error("Error generating favicon:", error);
  }
}

generateFavicon();
