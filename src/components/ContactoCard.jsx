// Componente de tarjeta visual para un contacto individual
export default function ContactoCard({id, nombre, telefono, correo, etiqueta, onEliminar }) {
  return (
    // Tarjeta blanca con borde y sombra leve
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      {/* Título con el nombre del contacto */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{nombre}</h3>

      {/* Datos del contacto (teléfono, correo y etiqueta) */}
      <div className="space-y-2 text-gray-700">
        <p>📞 {telefono}</p>
        <p>✉️ {correo}</p>
        {etiqueta && (
          <span className="inline-block text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {etiqueta}
          </span>
        )}
      </div>

      {/* Botón rojo para eliminar (usa callback onEliminar del padre) */}
      <div className="mt-4">
        <button
          onClick={onEliminar}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}