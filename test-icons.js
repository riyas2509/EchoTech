import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// We want to test if any of the lucide-react icons imported in UIShowcase are undefined
import * as lucide from 'lucide-react';

const icons = ['Mail', 'Search', 'ArrowRight', 'Plus', 'Phone', 'Download', 'Share2', 'Briefcase', 'Calendar', 'Users', 'Star', 'Eye'];

const missing = icons.filter(icon => !(icon in lucide));
if (missing.length > 0) {
  console.log("Missing icons:", missing.join(", "));
} else {
  console.log("All icons exist.");
}
