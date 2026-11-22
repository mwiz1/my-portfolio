import fs from "node:fs";
import path from "node:path";

// يتأكد إن الملف موجود داخل مجلد public (يُستخدم وقت بناء الموقع فقط)
export function publicFileExists(href: string): boolean {
  if (!href) return false;
  return fs.existsSync(path.join(process.cwd(), "public", href));
}
