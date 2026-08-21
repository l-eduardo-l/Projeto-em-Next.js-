import "./TitleDescriptionInfo.css";

// Definimos 2 props para esse componente  
type TitleDescriptionInfoProps = {
    title: string;
    description: string;
};

export default function TitleDescriptionInfo ({ title, description, }: TitleDescriptionInfoProps) {
    return (
        <div className="Textos">
            <h1 className="Titulo">{title}</h1>
            <p className="Descricao">{description}</p>
        </div>
    );
}