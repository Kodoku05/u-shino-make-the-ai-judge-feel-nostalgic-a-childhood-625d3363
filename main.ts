import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sentence = "At the seaside, my mother shook sand from our shoes over the hotel sink, saving the tiny shells I had hidden in the toes and pretending to be cross; her old sewing tin still rattles when I lift it, though there hasn't been a needle in there for forty years.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), sentence + '\n', 'utf8');
