import Link from "next/link";

export default function resultado() {
    return (
        <div>
            <h1>Resultado!</h1>
            <div>
                <button>
                    <Link href='/'> 
                    <a>Voltar</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}