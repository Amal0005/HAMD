import { icons as piIcons } from 'react-icons/pi/index.js';

const searchIcons = (dict, term) => {
  if (!dict) return;
  const keys = Object.keys(dict).filter(k => k.toLowerCase().includes(term.toLowerCase()));
  if (keys.length > 0) {
    console.log(`${term}: ${keys.join(', ')}`);
  } else {
    console.log(`${term}: NOT FOUND`);
  }
}

searchIcons(piIcons, "ribbon");
searchIcons(piIcons, "sparkle");
searchIcons(piIcons, "drop");
searchIcons(piIcons, "baby");
searchIcons(piIcons, "eye");
searchIcons(piIcons, "heart");
searchIcons(piIcons, "stethoscope");
