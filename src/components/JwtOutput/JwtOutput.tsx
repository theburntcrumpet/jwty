import { Heading, Textarea } from "@chakra-ui/react"

interface Props {
    title:string,
    content:string|undefined
}

function JwtOutput(props:Props) {
    return (
        <>
            <Heading size={"md"}>{props.title}</Heading>
            <Textarea width="100%" height="95%" value={props.content} readOnly resize="none"/>
        </>
        )
}

export default JwtOutput