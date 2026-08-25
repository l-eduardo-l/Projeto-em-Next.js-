//Importa os components e o Css utilizado na página.
import PersonalDataForm from "@/components/PersonalDataForm/PersonalDataForm";
import PostCard from "@/components/PostCard/PostCard";
import "./avancado.css";

//Renderiza os componentes da tala.
export default function (){
    return(

//Aplica o css na class ContainerMain e estiliza para organizar os componentes.
        <main className="ContainerMain">

{/*Passa os componentes importados anteriormente*/}
            <PostCard />

            <PersonalDataForm/>
        </main>
    )
}