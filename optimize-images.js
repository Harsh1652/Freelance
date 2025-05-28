const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  const imagePaths = [
    'src/assets/images/Home/top-view-raw-peanuts-bowl-peanut-butter-wooden-horizontal (1).jpg',
    'src/assets/images/Home/top-view-peanuts-green-background.jpg',
    'src/assets/images/Home/top-view-peanuts-bowl-with-copy-space.jpg',
    'src/assets/images/Home/OurJourney1.jpeg',
    'src/assets/images/Logo.png',
    'src/assets/images/SERVICES .jpg'
  ];

  for (const imagePath of imagePaths) {
    if (fs.existsSync(imagePath)) {
      const ext = path.extname(imagePath);
      const name = path.basename(imagePath, ext);
      const dir = path.dirname(imagePath);
      
      try {
        // Create WebP version
        await sharp(imagePath)
          .webp({ quality: 80 })
          .toFile(path.join(dir, `${name}.webp`));
        
        // Create optimized JPEG/PNG
        if (ext === '.jpg' || ext === '.jpeg') {
          await sharp(imagePath)
            .jpeg({ quality: 75, progressive: true })
            .toFile(path.join(dir, `${name}_optimized${ext}`));
        } else if (ext === '.png') {
          await sharp(imagePath)
            .png({ quality: 75, compressionLevel: 9 })
            .toFile(path.join(dir, `${name}_optimized${ext}`));
        }
        
        console.log(`✅ Optimized: ${imagePath}`);
      } catch (error) {
        console.error(`❌ Error optimizing ${imagePath}:`, error);
      }
    }
  }
};

optimizeImages(); 