import React, { useState } from 'react'

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


const Paragraph = ({ children, size, color }: TypograhyProps & ParagraphProps) => {

  return <h1
  style={{
    fontSize: size === 'small' ? "1.5rem" : "5rem",
    color: color
  }}
  >{children}</h1>
}

const Title = ({ children, size}: TypograhyProps) => {
  return <h1
  style={{

    fontSize: size === 'small' ? "1.5rem" : "3rem"
  }}
  >{children}</h1>
}

const TitleDefaultProps = {
  size: "small"
}

Title.defaultProps = TitleDefaultProps

const User = {
  id: Math.random(),
  name: "John Doe",
  age: 30,
  isAdmin: true,
}

type UserAttributes = typeof User

function sumNumbers (a: number, b: number) {
  return a + b
}

function List<ItemType> ({ items, render }: {
  items: ItemType[];
  // O diferencial é que o item de render está herdando de ItemType, neste exemplo os dois serão Arrays.
  render: (item: ItemType, index: number) => React.ReactNode}) {  
  return (
    <ul>
      {
        items.map((item, index) => {
          return render(item, index)  
        })}
    </ul>
  )
}

// exemplo básico de generics
function identity <T>(value: T) : T {
  return value;
}
console.log(identity<Number>(1))
console.log(identity<String>("Hello World"))
// A tipagem é definida somente na hora da execução da função


function App() {
  const [count, setCount] = useState(0)

  const items = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    }

  ]

  return (
    <div className="App">
    
      <Title size='large'><span>Hello <b>World</b></span></Title>

      <Paragraph color='aquamarine' size='small'>\
        Eu sou um parágrafo
      </Paragraph>

      <Paragraph size='small' color='gray
      '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iusto!</Paragraph>
      <List 
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p>{item.name}</p>
          }
          return <h3>{item.name}</h3>
        }}
      />

    </div>

  )
}

export default App
