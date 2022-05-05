import logo from './logo.svg'
import './App.css'
import { Body } from './components/Body/Body'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Main } from './components/Main/Main'
import { ColorBox } from './components/ColorBox/ColorBox'
import { Color } from './components/Color/Color'
import { InputColor } from './components/InputColor/InputColor'
import { useState } from 'react'
import { Footer } from './components/Footer/Footer'


function App() {
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');

  const getRed = (value: string) => {
    setRed(value);
  }

  const getGreen = (value: string) => {
    setGreen(value);
  }

  const getBlue = (value: string) => {
    setBlue(value);
  }
  
  return (
    <Body red={red} green={green} blue={blue}>
      <Header>
        <Container>
          <Logo>
            <h1>CHANGE BACKGROUND COLOR</h1>
          </Logo>
        </Container>
      </Header>

      <Main>
        <Container column alignItem>
          <p>Insira nos campos um valor entre 0 e 255</p>
          <ColorBox>
            <Color color="red">
              <InputColor inputColor={getRed}></InputColor>
            </Color>

            <Color color="green">
              <InputColor inputColor={getGreen}></InputColor>
            </Color>

            <Color color="blue">
              <InputColor inputColor={getBlue}></InputColor>
            </Color>
          </ColorBox>          
        </Container>
      </Main>

      <Footer>
        <Container>
          Vitor Sacramento | 2022
        </Container>
      </Footer>
    </Body>
  )
}

export default App
