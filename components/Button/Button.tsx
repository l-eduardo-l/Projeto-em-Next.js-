// Importa o CSS 
import  "./Button.css";

// Define as Props
type Buttonprops = {
    children: React.ReactNode
};

// Recebe as Props definidas 
export default function Button ({ children }: Buttonprops) {
    return (
        // mostra o  conteudo de button como children
        <button className = "Card">    
            {children}
        </button>
    );
}
