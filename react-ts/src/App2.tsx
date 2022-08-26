import React, { useState, useEffect } from "react";

export function App2() {
  const [name, setName] = useState('')
  const [clickCount, setClickCount] = useState(1)
  
  useEffect(() => {
    document.title = `User name ${name}`
  })
  return (
    
    <div>
      <h1 onClick={() => setClickCount(prev => prev + 1)}>Esse é o título clicou {clickCount}x vezes</h1>
      <input value={name} onChange={ev => setName(ev.target.value)}/>
    </div>
  )

}