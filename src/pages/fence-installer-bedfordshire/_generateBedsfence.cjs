const fs = require('fs');
const path = require('path');

const outputFolder = './';


// Array of towns
const towns = [
  'Ampthill',
    'Arlesey',
    'Barton-le-Clay',
    'Bedford',
    'Biggleswade',
    'Caddington',
    'Cople',
    'Cranfield',
    'Dunstable',
    'Eaton Bray',
    'Flitwick',
    'Harlington',
    'Houghton Regis',
    'Husborne Crawley',
    'Kempston',
    'Leighton Buzzard',
    'Lidlington',
    'Linslade',
    'Luton',
    'Milton Keynes',
    'Potton',
    'Pulloxhill',
    'Sandy',
    'Shefford',
    'Stotfold',
    'Toddington',
    'Turvey',
    'Willington',
    'Woburn',
    'Wootton',
  ];

// Template path
const templatePath = path.join(__dirname, '../landing-templates/FenceInstaller.astro');

// Read the template content
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Generate pages dynamically
towns.forEach((town) => {
  // Convert town for URL (lowercase with hyphen)
  const urlTown = town.toLowerCase().replace(/\s+/g, '-');

  // Define the output path
  const outputPath = path.join(outputFolder, `${urlTown}.astro`);

  // Replace {town} in the template content with the actual town name
  const pageContent = templateContent.replace(/{town}/g, town).replace(/{urlTown}/g, urlTown);

  // Write the modified content to the output file
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated page for ${town} at ${outputPath}`);
});

console.log('Pages generated successfully.');