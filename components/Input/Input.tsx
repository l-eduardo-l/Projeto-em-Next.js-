// import o Css 
import "./input.css";

// Define as Props
type Inputprops = {
    placeholder: string
};

// Recebe as Props definidas 
export default function Input ({ placeholder }: Inputprops) {
    return (
        // Mostra o conteudo 
        <input className = "BoxInput" placeholder={placeholder} />
    )
}