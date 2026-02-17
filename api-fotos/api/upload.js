export default async function handler(req, res) {
  // --- CORS básico ---
  res.setHeader("Access-Control-Allow-Origin", "*"); // en prod: pon tu origen exacto
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // --- Fin CORS ---

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  const { image } = req.body || {};
  if (!image) {
    return res.status(400).json({ error: "Debes enviar la imagen en base64" });
  }

  // Aquí iría tu lógica: guardar, analizar, etc.
  return res.status(200).json({
    mensaje: "Imagen recibida correctamente ✔",
    tamano_base64: image.length,
  });
}
``
