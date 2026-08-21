import "./PostCard.css";

export default function PostCard() {
    return (
        <div className="PostCard">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWA9a1VJt6izEf_ifFsnZhtW_QnVaEZuT336gBaYBfPw&s=10"
                alt="" />

            <p>15, mar 2006</p>
            
            <h2>Chico Preguiça</h2>

            <p>Raça: Cão</p>

            <div className="Interactions">
                <span>♥ 34</span>
                <span>◉ 4</span>
                <span>💬 5</span>
            </div>
        </div>
    );
}