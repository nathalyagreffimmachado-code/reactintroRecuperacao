import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
function calculadora() {

const [num1, setNum1] = useState("")
const [num2, setNum2] = useState("")
const [resultado, setResultado] = useState("")
const [numeros1, setNumeros1] = useState("")
const [numeros2, setNumeros2] = useState("")
const [numeros3, setNumeros3] = useState("")
const [numeros4, setNumeros4] = useState("")


function calcular(event) {event.preventDefault()
const numeros1 = Number(num1) + num2
const numeros2 = Number(num1) * num2
const numeros3 = Number(num1) - num2
const  numeros4 = Number (num1) / num2

setResultado(resultado)
}
  return (
        <>
            <h2>Calculadora</h2>

            <form onSubmit={calcular}>
                <input
                    type="number"
                    placeholder="num1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="num2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <p>{resultado}</p>
                <button type="numeros1">somar</button>
                  <button type="numeros2">subtrair</button>
                    <button type="numeros3">dividir</button>
                      <button type="numeros4">multiplicar</button>
            </form>
            <br />
            <Link to="/">
                <button>navegar para home </button>
            </Link>
        </>
    )
    



}

export default calculadora