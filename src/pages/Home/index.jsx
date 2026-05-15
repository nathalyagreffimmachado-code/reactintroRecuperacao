import { Link } from 'react-router-dom';
import './style.css';
function Home () {
    return (
        <>
        <h2>bem-vindo ao meu sistema</h2>
        <Link to ="/irlanda">
        <button>ir para irlanda</button>
        </Link>
          <Link to ="/calculadora">
        <button>navegar para calculadora</button>
        </Link>
        </>
    )
}
export default Home 