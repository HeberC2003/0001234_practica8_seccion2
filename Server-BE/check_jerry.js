//mouseherramienta que nos servira mas tarde
import bcrypt from "bcrypt";

const hash = "$2b$10$XOHI0.vg73ve9Oy73lqU5.W//tVQuqMIAKJn3n25ZA2DUF.YGm6vq";

const candidates = [
  "1234", "12345", "123456", "password", "admin", "jerry", "jerry123",
  "qwerty", "letmein", "secret", "root", "12345678"
];

(async () => {
  for (const pwd of candidates) {
    const ok = await bcrypt.compare(pwd, hash);
    console.log(pwd, "=>", ok ? "MATCH" : "no");
    if (ok) {
      console.log("¡Contraseña encontrada:", pwd);
      process.exit(0);
    }
  }
  console.log("No hay coincidencias");
})();
