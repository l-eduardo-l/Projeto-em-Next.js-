import "./PersonalDataForm.css"
import Input from "@/components/Input/Input";
export default function PersonalDataForm () {
    return (
        <div className="PersonalDataForm">
            <h2>Adicionar dados ao card</h2>

        <div className="PersonalDataInput">
            <Input placeholder="Nome" />
            <Input placeholder="Raça" />
            <Input placeholder="Data de nascimento" />
        </div>

            <button className="PersonalDataButton">
                Salvar
            </button>
        </div>
    );
}