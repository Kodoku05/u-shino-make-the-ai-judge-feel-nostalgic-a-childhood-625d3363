import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_FILE = 'entry.txt';
const sentence = "At the seaside, my mother shook sand from our shoes over the hotel sink, saving the tiny shells I had hidden in the toes and pretending to be cross; her old sewing tin still rattles when I lift it, though there hasn't been a needle in there for forty years.";
if (!sentence.trim() || /[\r\n]/.test(sentence)) {
  throw new Error('Sentence must be non-empty and contain no newline characters.');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), sentence + '\n', 'utf8');
