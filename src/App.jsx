export default function App() {
	const fecha = new Date().toLocaleString();

	return (
		<main>
			<h1>Hola SENA</h1>
			<p>Fecha y hora actual: {fecha}</p>
			
		</main>
	);
}