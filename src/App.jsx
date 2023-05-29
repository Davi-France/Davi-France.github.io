import { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import Header from "./Components/Header";
import Cronometro from "./Components/Cronometro";


const App = () => { 

    return(
      <>
      <Header>Cronômetro</Header>
      <Cronometro/>
      </>
    )
  };
  
export default App

