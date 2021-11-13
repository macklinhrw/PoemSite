import { useColorMode, useColorModeValue as mode } from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react"

const DarkToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      {/*<Switch value={colorMode} onChange={toggleColorMode} size="md" alignItems="center" />*/}
      <Button onClick={toggleColorMode} size="md" alignItems="center" colorScheme="purple" bg={"purple.500"}>
        Toggle Dark
      </Button>
    </div>
  )
}
export default DarkToggle;
