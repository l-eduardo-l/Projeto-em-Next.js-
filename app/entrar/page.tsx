import SignInForm from "@/components/SignInForm/SignInForm";
import "./entrar.css";

export default function EntrarPage () {
    return (
        <div className = "Container">
            <h1>Entrar</h1>
            <SignInForm />
        </div>
    );
}