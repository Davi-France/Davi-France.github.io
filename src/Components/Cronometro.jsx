import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 500px;
  margin: 20vh auto;
  border-radius: 0.2rem;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
`
const BoxNumero = styled.div`
  border:  #e70808 3px solid;
  box-shadow: 0px 0px 82px #e20000;
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  text-align: center;
  h1{
    font-weight: 200;
    font-size: 4rem;
    color: #ff3333;
    text-shadow: 0px 0px 10px #e70808;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 4rem;
  button{
    background: none;
    border: #fff 3px solid;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: 200;
    transition: ease-out 0.3s;
    &:hover{
      box-shadow: 0px 0px 16px #ffd2d2;
      text-shadow: 0px 0px 1px #fff;
      transition: ease-out 0.3s;
    }
    &:focus{
    background-color: #fff;
    color:#373737;
    }
  }
`

const Cronometro = () => {
  const [init, setInit] = useState(false)
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [horas, setHoras] = useState(0)

  useEffect(() =>{
    let interval
    
    if(init){
      interval = setInterval(()=>{
        setSegundos((prevSegundos) => {
          if(prevSegundos === 59){
            setMinutos((prevMinutos) =>{
              if(prevMinutos === 59){
                setHoras((prevHoras) => prevHoras + 1)
                return 0
              }else{
                  return prevMinutos + 1
              }
            })
            return 0
          }else{
            return prevSegundos + 1
          }
        })
      }, 1000)
    }

    return () =>{
      clearInterval(interval)
    }

  },[init])

  function initCronometro(){
   setInit(true)
  }

  function pauseCronometro(){
    setInit(false)
  }

  function zerarCronometro(){
    setSegundos(0)
    setMinutos(0)
    setHoras(0)
    setInit(false)
  }

  return (
    <div>
      <Box>
        <BoxNumero>
          <h1>{horas.toString().padStart(2, 0)}:{minutos.toString().padStart(2, 0)}:{segundos.toString().padStart(2,0)}</h1>
        </BoxNumero>
        <BoxButtons>
          <button onClick={initCronometro}>Iniciar</button>
          <button onClick={pauseCronometro}>Pause</button>
          <button onClick={zerarCronometro}>Zerar</button>
        </BoxButtons>
      </Box> 
    </div>
  )
}

export default Cronometro



