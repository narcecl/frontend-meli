interface MetadataProps {
    title: string;
    description?: string;
}

export function getMetadata(props: MetadataProps){
    const { title, description = '' } = props;

    return {
        title: `${title} | MercadoLibre 📦`,
        description: description,
    };
}
