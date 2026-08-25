// Define esta página como Client Component, permitindo interações no navegador.
"use client";

//imports de componentes, biblíotecas e Css utilizado nessa página.
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TitleDescriptionInfo from "@/components/TitleDescriptionInfo/TitleDescriptionInfo";
import Link from "next/link";
import "./basico.css";

//Função que Renderiza os componentes na tela 
export default function BasicoPage () {
    return (

//Aplica a class CardSimples para estilizar e organizar os elementos na página.
<main className="CardSimples">
            
{/*Passando duas props de TitleDescriptionInfo. */} 
            <TitleDescriptionInfo title="Votação" description="Aponte um tema para o proximo enem!" />

{/*Passando props de input com type Password. */}
            <Input placeholder="Digite o próximo assunto para o Enem" type="password"/>

{/*Link traça um caminho entre as páginas, ja o onclick executa uma função ao clicar no botão. */}
            <Link href="/entrar">
                <Button onClick={() => alert("Esse é um Alet de click!!")}>Botãozão</Button>
            </Link>

        </main>
    );
}   
