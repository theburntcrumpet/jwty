import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, Heading, Text, Tooltip, useColorMode } from "@chakra-ui/react"

function AppHeader() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (<>
        <Heading>jwty&nbsp;
            <Tooltip label={colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
                {colorMode === "light" ? <MoonIcon onClick={toggleColorMode} /> : <SunIcon onClick={toggleColorMode} />}
            </Tooltip>
        </Heading>
        <Text fontSize='xl'>be a bit jwty</Text>
    </>);
}

export default AppHeader