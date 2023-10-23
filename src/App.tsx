import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import parseJwt from './SimpleJwtParser'
import AppHeader from './components/AppHeader/AppHeader'
import JwtInput from './components/JwtInput/JwtInput'
import JwtOutput from './components/JwtOutput/JwtOutput'

function App() {
  const invalidJwtMessage = "Please enter a valid JWT.";
  const [encodedJwt, setEncodedJwt] = React.useState("")
  let header, payload, signature = invalidJwtMessage;
  try {
    [header, payload, signature] = parseJwt(encodedJwt);
  } catch {
    [header, payload, signature] = Array(3).fill(invalidJwtMessage);
  }

  return (
    <Container maxW={'container.xl'}>
      <AppHeader />
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(6, 1fr)'
        minHeight={"calc(81vh)"}
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <JwtInput jwtInput={encodedJwt} setJwtInput={setEncodedJwt} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <JwtOutput title="JWT Header" content={header} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <JwtOutput title="JWT Payload" content={payload} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <JwtOutput title="JWT Signature" content={signature} />
        </GridItem>
      </Grid>

    </Container>

  )
}

export default App
