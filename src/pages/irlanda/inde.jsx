  import { Link } from 'react-router-dom';
import './style.css';
function irlanda () {
  return(
    <h2>nome:dublin
        pais:irlanda
        dublin é a capital da irlanda cheia de historia e cultura,como atrações e comidas tradicionais
               <Link to="/">
                <button>navegar para home </button>
            </Link> 
      </h2>
  )
}
export default irlanda