import PersonalDataForm from "@/components/PersonalDataForm/PersonalDataForm";
import PostCard from "@/components/PostCard/PostCard";
import "./avancado.css";

export default function (){
    return(
        <main className="ContainerMain">

            <PostCard />

            <PersonalDataForm/>
        </main>
    )
}