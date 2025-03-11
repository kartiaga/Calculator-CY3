import { useState } from "react"

export function Calculator() {
  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput(input + value)
  }
}