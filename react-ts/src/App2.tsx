import React, { useState, useEffect } from "react";

export function App2() {
  const [name, setName] = useState('')
  
  useEffect(() => {
    document.title = `User name ${name}`
  })
  return (
    
    <div>
      <h1>Esse é o título</h1>
      <input value={name} onChange={ev => setName(ev.target.value)}/>
    </div>
  )

}