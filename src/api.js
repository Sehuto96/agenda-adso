// Punto base de la API local (ajusta el puerto si usas otro)
const API = "http://localhost:3002/contactos";

// GET: listar contactos
export async function listarContactos() {
  // Hacemos un GET a /contactos
  const res = await fetch(API);
  // Si la respuesta no es OK (>=400), lanzamos error
  if (!res.ok) throw new Error("Error al listar contactos");
  // Parseamos JSON y lo retornamos (array de contactos)
  return res.json();
}

// POST: crear contacto
export async function crearContacto(data) {
  const { id: _id, ...resto } = data;

  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resto),
  });

  if (!res.ok) throw new Error("Error al crear el contacto");
  return res.json();
}


// DELETE: eliminar contacto por id
export async function eliminarContactoPorId(id) {
  // Hacemos un DELETE a /contactos/:id
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  // Validamos respuesta
  if (!res.ok) throw new Error("Error al eliminar el contacto");
  // Devolvemos true indicando éxito
  return true;
}
