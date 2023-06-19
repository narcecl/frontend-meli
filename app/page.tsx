import { getMetadata } from "./utils/metadata";

export const metadata = getMetadata({ title: 'Búsqueda' });

export default function Home(){
	return (
		<section>
                <div className="container">
                    <div className="section--inner mt-16 p-32">
                        <div className="text-center">
                            <h1 className="title--medium">Comienza a buscar</h1>
                            <p>Encuentra productos utilizando el buscador de arriba.</p>
                        </div>
                    </div>
                </div>
            </section>
	)
}
