// import o Css 
import "./input.css";

// Define as Props do input e seus possiveis tipos
type Inputprops = {
    placeholder: string
    type: 'text' | 'password'
};

// Recebe as Props definidas e ja faz a desestruturação 
export default function Input ({ placeholder }: Inputprops) {
    return (
        
// Renderiza o conteudo utilizando o placeholder recebido pelas props
        <input className = "BoxInput" placeholder={placeholder} />
    )
}