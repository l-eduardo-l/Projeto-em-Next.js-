import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TitleDescriptionInfo from "@/components/TitleDescriptionInfo/TitleDescriptionInfo";
import "./basico.css";
import Link from "next/link";

export default function BasicoPage () {
    return (
        <main className="CardSimples">
            
            <TitleDescriptionInfo title="Votação" description="Aponte um tema para o proximo enem!" />

            <Input placeholder="Digite o próximo assunto para o Enem" />

            <Link href="/entrar">
                <Button>Botãozão</Button>
            </Link>

        </main>
    );
}   