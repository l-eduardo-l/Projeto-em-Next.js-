// Importa o Componente SingInForm e o Css utilizado nessa página. 
import SignInForm from "@/components/SignInForm/SignInForm";
import "./entrar.css";

//Responsável por renderizar a página e seus components. 
export default function EntrarPage () {
    return (
//Aplica a class Container para estilizar e organizar os elementos na página.
        <div className = "Container">
            <h1>Entrar</h1>
            <SignInForm />
        </div>
    );
}