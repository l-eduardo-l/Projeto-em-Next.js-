//importa os componentes e o css utilizado nesse componente 
import "./PersonalDataForm.css"
import Input from "@/components/Input/Input";

//Componente que agrupa os campos de entrada e o botão para formar o formulário de dados pessoais.
export default function PersonalDataForm () {
    return (

// Aplica a classe PersonalDataForm para estilizar e organizar os elementos do componente. 
        <div className="PersonalDataForm">
            <h2>Adicionar dados ao card</h2>

{/* Agrupa os Inputs em um container para facilitar o posicionamento e a estilização. */}
        <div className="PersonalDataInput">
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Raça" />
            <Input type="text" placeholder="Data de nascimento" />
        </div>

{/* Botão HTML padrão com estilização própria, sem reutilizar o componente Button. */}
            <button className="PersonalDataButton">
                Salvar
            </button>
        </div>
    );
}