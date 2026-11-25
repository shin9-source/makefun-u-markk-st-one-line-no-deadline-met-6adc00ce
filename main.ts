import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I was so busy writing the perfect excuse for missing the deadline that I missed the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
