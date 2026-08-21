import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignInForm.css";
import Link from "next/link";

export default function SignInForm() {
    return (
        <div className="ContainerItems">

            <Input placeholder="Email" />

            <Input placeholder="Senha" />

            <Link href  ="/exemplos/avancado">
                <Button>
                    Entrar
                </Button>
            </Link>

        </div>
    );
}
