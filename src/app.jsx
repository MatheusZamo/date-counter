import { useState } from "react"

const days = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-feira",
  "Sexta-feira",
]

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abri",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
]

const App = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount((count) => count + 1)
  const decrementCount = () => setCount((count) => count - 1)

  const present = new Date()
  const dayOfWeek = days[present.getDay()]
  const dayOfMonth = present.getDate()
  const month = months[present.getMonth() - 1]
  const year = present.getFullYear()

  const showMessage = () => {
    const defaultMessage = `Hoje é ${dayOfWeek}, ${dayOfMonth} de ${month}. de ${year}`

    const decrementMessage = `${Math.abs(count)} dia atrás era ${
      days[present.getDay() + count]
    }, ${Math.abs(dayOfMonth + count)} de ${month}. de ${year}`

    const incrementMessage = `${count} dia à partir de hoje será ${
      days[present.getDay() + count]
    }, ${dayOfMonth + count} de ${month}. de ${year}`

    if (count === 0) {
      return defaultMessage
    }

    if (count > 0) {
      return incrementMessage
    }

    if (count < 0) {
      return decrementMessage
    }
  }

  //mensagem dinamica - 1 dia à partir de hoje será domingo, 29 de out. de 2024
  return (
    <div className="container">
      <div className="count">
        <button onClick={() => console.log("Clicou no menos do Intervalo")}>
          -
        </button>
        <h2>Intervalo: 1</h2>
        <button onClick={() => console.log("Clicou no mais do Intervalo")}>
          +
        </button>
      </div>
      <div className="count">
        <button onClick={decrementCount}>-</button>
        <h2>Contagem: {Math.abs(count)}</h2>
        <button onClick={incrementCount}>+</button>
      </div>
      <h2>{showMessage()}</h2>
    </div>
  )
}

export { App }

//mensagem padrao -  Hoje é {dayOfWeek}, {dayOfMonth} de {month}. de {year}
