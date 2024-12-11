import { useReducer } from "react"

const DateMsg = ({ count }) => {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    month: "short",
    year: "numeric",
    day: "2-digit",
  }).format(date.setDate(date.getDate() + count))

  const singularPlural = count === 1 || count === -1 ? "dia" : "dias"

  return (
    <h2>
      {count > 0
        ? `${count} ${singularPlural} à partir de hoje será ${formattedDate}`
        : count < 0
        ? `${Math.abs(count)} ${singularPlural} atrás era ${formattedDate}`
        : `Hoje é ${formattedDate}`}
    </h2>
  )
}

const reducer = (state, action) => {
  const obj = {
    increment_step: { ...state, step: state.step + 1 },
    decrement_step: {
      ...state,
      step: state.step === 1 ? state.step : state.step - 1,
    },
    increment_count: { ...state, count: state.count + state.step },
    decrement_count: { ...state, count: state.count - state.step },
  }

  return obj[action.type] || state
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { step: 1, count: 0 })

  const incrementStep = () => dispatch({ type: "increment_step" })
  const incrementCount = () => dispatch({ type: "increment_count" })
  const decrementStep = () => dispatch({ type: "decrement_step" })
  const decrementCount = () => dispatch({ type: "decrement_count" })

  return (
    <div className="container">
      <div className="count">
        <button onClick={decrementStep}>-</button>
        <h2>Intervalo: {state.step}</h2>
        <button onClick={incrementStep}>+</button>
      </div>
      <div className="count">
        <button onClick={decrementCount}>-</button>
        <h2>Contagem: {state.count}</h2>
        <button onClick={incrementCount}>+</button>
      </div>

      <DateMsg count={state.count} />
    </div>
  )
}

export { App }
