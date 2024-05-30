const fs = require('fs');
const path = require('path');

const outputFolder = './';


// Array of towns
const towns = [
    'Alresford',
    'Asheldham',
    'Barking',
    'Barling',
    'Basildon',
    'Billericay',
    'Bobbingworth',
    'Borley',
    'Bradwell-on-Sea',
    'Braintree',
    'Brentwood',
    'Brightlingsea',
    'Buckhurst Hill',
    'Burnham-on-Crouch',
    'Canvey Island',
    'Chappel',
    'Chelmsford',
    'Chigwell',
    'Chipping Ongar',
    'Clacton-on-Sea', 
    'Clacton',
    'Coggeshall',
    'Colchester',
    'Crays Hill',
    'Dagenham',
    'Danbury',
    'Earls Colne',
    'Epping',
    'Felsted',
    'Frinton-on-Sea',
    'Grays',
    'Great Dunmow',
    'Hadleigh',
    'Halstead',
    'Harlow',
    'Harwich',
    'Hockley',
    'Hornchurch',
    'Ilford',
    'Ingatestone',
    'Kelvedon Hatch',
    'Lamarsh',
    'Langham',
    'Leigh-on-Sea',
    'Loughton',
    'Maldon',
    'Manningtree',
    'Marks Tey',
    'Nazeing',
    'Newport',
    'North Weald Bassett',
    'Pilgrims Hatch',
    'Pitsea',
    'Purfleet',
    'Rainham',
    'Rayleigh',
    'Rochford',
    'Romford',
    'Saffron Walden',
    'Shenfield',
    'Shoeburyness',
    'Sible Hedingham',
    'South Benfleet',
    'South Woodham Ferrers',
    'Southend-on-Sea',
    'Southminster',
    'Stanford Le Hope',
    'Stansted Mountfitchet',
    'Thaxted',
    'Thorpe le Soken',
    'Thundersley',
    'Tilbury',
    'Tiptree',
    'Tollesbury',
    'Waltham Abbey',
    'Walton-on-the-Naze',
    'West Mersea',
    'Westcliff-on-Sea',
    'Wethersfield',
    'White Roding',
    'Wickford',
    'Widdington',
    'Witham',
    'Wivenhoe',
    'Woodford Green',
    'Writtle',
  ];

// Template path
const templatePath = path.join(__dirname, '../landing-templates/LandscapeGardeners.astro');

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