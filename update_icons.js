import fs from 'fs';
import path from 'path';

const map = {
  'Cardiology.jsx': { old: 'Heart', new: 'GiHeartOrgan' },
  'OrthopedicCare.jsx': { old: 'Activity', new: 'GiJoint' },
  'Oncology.jsx': { old: 'UserPlus', new: 'GiRibbon' },
  'IvfFertility.jsx': { old: 'UserPlus', new: 'GiBabyFace' },
  'Ophthalmology.jsx': { old: 'Eye', new: 'GiEyeTarget' },
  'CosmeticSurgery.jsx': { old: 'Scissors', new: 'GiScalpel' },
  'Neurology.jsx': { old: 'Brain', new: 'GiBrain' },
  'Urology.jsx': { old: 'Activity', new: 'GiKidneys' },
  'Gastroenterology.jsx': { old: 'Pill', new: 'GiStomach' }
};

for (const [file, info] of Object.entries(map)) {
  const filePath = path.join('src/pages', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import
    const importStatement = `import { ${info.new} } from 'react-icons/gi';\n`;
    if (!content.includes(importStatement)) {
      content = content.replace("import './PageStyles.css';", importStatement + "import './PageStyles.css';");
    }
    
    // Replace component usages
    const regex = new RegExp(`<${info.old} size`, 'g');
    content = content.replace(regex, `<${info.new} size`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
