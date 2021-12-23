const Jimp = require('jimp'),
   mainChars = require('./scooby-doo/main-chars.json')

async function generateCard(item) {
   const template = await Jimp.read('./scooby-doo/templates/main-char.png');
   const charImage = await Jimp.read('./scooby-doo/assets/main-chars/' + item.imagePath);
   template.composite(charImage, 100, 100);
   const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
   template.print(font, 10, 350, item.name);
   await template.writeAsync('./dist/' + item.imagePath);
   console.log(`${item.name} card is generated.`);
}

Object.values(mainChars).forEach(val => {
   Object.values(val).forEach(char => {
      generateCard(char);
   });
});