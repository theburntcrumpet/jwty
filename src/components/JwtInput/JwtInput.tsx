import { Heading, Textarea } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface Props {
    jwtInput:string,
    setJwtInput:(jwtInput:string) => void
}

function JwtInput(props:Props) {
    const handleInputChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.currentTarget.value
        props.setJwtInput(inputValue)
      }
    return (
    <>
        <Heading size={"md"}>Encoded Token</Heading>
        <Textarea placeholder='Enter encoded JWT Here.' width="100%" height="100%" value={props.jwtInput} onChange={handleInputChange}/>
    </>
    )
}

export default JwtInput