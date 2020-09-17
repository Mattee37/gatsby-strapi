import React, { useState } from "react"

import Agent from "../components/Agent"

import useAgentes from "../hooks/useAgentes"
import useRAM from "../hooks/useRAM"

const Response = () => {
  const agents = useAgentes()
  console.log(agents)
  return (
    <div>
      <h3>Lista de Agentes</h3>
      {typeof agents !== "string" ? (
        agents.map(agent => <Agent agent={agent} key={agent.id} />)
      ) : (
        <h3>No hay Agentes para mostrar!</h3>
      )}
    </div>
  )
}

export default Response
