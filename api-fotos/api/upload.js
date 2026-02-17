export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ error: "Debes enviar la imagen en base64" });
  }

  // Aquí puedes hacer lo que quieras con la imagen:
  // - Guardar en base de datos
  // - Enviar a un modelo de IA
  // - Analizar contenido
  // - Guardar en Blob Storage
  // Por ahora solo devolvemos info básica:
  return res.status(200).json({
    mensaje: "Imagen recibida correctamente ✔",
    tamaño_base64: image.length
  });
}