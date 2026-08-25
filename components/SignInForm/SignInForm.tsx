//import de componentes, biblíotecas e css 
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignInForm.css";
import Link from "next/link";

//Função que agrupa input e Button para gerar um novo componente 
export default function SignInForm() {
    return (

//Class ContainerItems que organiza e se estiliza ara utilizar os componente ja prontos. 
        <div className="ContainerItems">

{/*Input utilizando as props e tipagem para definir entre texto ou password */}
            <Input type="text" placeholder="Email" />

            <Input type="password" placeholder="Senha" />

{/*Button envolto com link para passar um caminho ate: /exemplos/avancados*/}
            <Link href  ="/exemplos/avancado">
                <Button>
                    Entrar
                </Button>
            </Link>
        </div>
    );
}
