import { Container, Grid, GridItem } from '@chakra-ui/react'
import jwt_decode from "jwt-decode"
import React from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import JwtInput from './components/JwtInput/JwtInput'
import JwtOutput from './components/JwtOutput/JwtOutput'

function App() {
  const invalidJwtMessage = "Please enter a valid JWT.";
  const [encodedJwt, setEncodedJwt] = React.useState("")
  let decodedJwt = invalidJwtMessage;
  let header = invalidJwtMessage;

  try{
    decodedJwt = JSON.stringify(jwt_decode(encodedJwt.trim().replace(/(\r\n|\n|\r)/gm,"")),null,"\t");
    header = JSON.stringify(jwt_decode(encodedJwt.trim().replace(/(\r\n|\n|\r)/gm,""),{header:true}),null,"\t");
  } catch {
    decodedJwt = invalidJwtMessage;
    header = invalidJwtMessage;
  }

  return (
    <Container maxW={'container.xl'}>
      <AppHeader />
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        minHeight={"calc(81vh)"}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={3}>
          <JwtInput jwtInput={encodedJwt} setJwtInput={setEncodedJwt} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <JwtOutput title="JWT Header" content={header}/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <JwtOutput title="JWT Payload" content={decodedJwt}/>
        </GridItem>
      </Grid>

    </Container>

  )
}

export default App
