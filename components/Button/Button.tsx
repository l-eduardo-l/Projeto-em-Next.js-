//Importa o CSS 
import  "./Button.css";

//Define as Props e seus possiveis tipos
type Buttonprops = {
    children: React.ReactNode

//onClick é opcional e, quando usado, recebe uma função
    onClick?: () => void 
};

//Recebe as Props definidas e faz a desestruturação de props.
export default function Button ({ children, onClick}: Buttonprops) {
    return (

//Renderiza o conteudo utilizando o children recebido pela props, passa a tipagem onclick? para utilização em eventos das páginas.
        <button className="Card" onClick={onClick}>    
            {children}
        </button>
    );
}
