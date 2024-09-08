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
  const present = new Date()
  const dayOfWeek = days[present.getDay()]
  const dayOfMonth = present.getDate()
  const month = months[present.getMonth() - 1]
  const year = present.getFullYear()

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
        <button onClick={() => console.log("Clicou no menos da Contagem")}>
          -
        </button>
        <h2>Contagem: 0</h2>
        <button onClick={() => console.log("Clicou no mais da Contagem")}>
          +
        </button>
      </div>
      <h2>
        Hoje é {dayOfWeek}, {dayOfMonth} de {month}. de {year}
      </h2>
    </div>
  )
}

export { App }
