interface MetadataProps {
    title: string;
    description?: string;
}

const defaultDescription = 'Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.';

export function getMetadata(props: MetadataProps){
    const {
        title,
        description = defaultDescription
    } = props;

    return {
        title: `${title} | MercadoLibre 📦`,
        description: description,
    };
}
