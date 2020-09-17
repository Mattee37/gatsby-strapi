import React from "react"

const Agent = agent => {
  const { nombre, email, telefono, id } = agent.agent
  return (
    <ul>
      <li>Nombre: {nombre}</li>
      <li>Email: {email}</li>
      <li>Telefono: {telefono}</li>
      <li>ID: {id}</li>
    </ul>
  )
}

export default Agent
