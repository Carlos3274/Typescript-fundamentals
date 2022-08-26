import React, { useEffect, useState } from "react";

let intervalIdState: any

export function App3() {
  const [countdown, setCoutdown] = useState(10)

  useEffect(() => {
    intervalIdState = setInterval(() => {
      setCoutdown((prev) => prev - 1)
    }, 1000)
  }, [])


  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(intervalIdState)
    }
  }, [countdown])

  return(
    
    <div>Atenção, faltam {countdown} </div>
  )
  
}