import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type TypograhyProps = {
  children: React.ReactNode
  size?: "small" | "large"
}

type ParagraphProps = {
  color: string
}

type TitleProps = {
  children: React.ReactNode
  size?: "small" | "large"
}

const Paragraph = ({ children, size}: TypograhyProps & ParagraphProps) => {
  return <h1
  style={{
    fontSize: size === 'small' ? "1.5rem" : "5rem"
  }}
  >{children}</h1>
}

const Title = ({ children, size}: TypograhyProps) => {
  return <h1
  style={{
    fontSize: size === 'small' ? "1.5rem" : "5rem"
  }}
  >{children}</h1>
}

const TitleDefaultProps = {
  size: "small"
}

Title.defaultProps = TitleDefaultProps

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <Title ><span>Hello <b>World</b></span></Title>
    </div>
  )
}

export default App
