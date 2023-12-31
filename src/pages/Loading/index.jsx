import {
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

import { GenerationEssayIcon } from "../../components/icons/Icons"

function EssayGenerationLoading() {

  const neutralLight1 = useColorModeValue("neutralLight.1", "neutralLight.1")
  const neutralDark4 = useColorModeValue("neutralDark.4", "neutralDark.4")

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      backgroundColor={neutralLight1}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex
          marginBottom="22px"
        >
          <iframe src="https://lottie.host/?file=216aed1b-5cc8-4e90-afc3-f0a1a4628e8d/PnDvH3oTgX.json" alt="Mulher escrevendo um texto"></iframe>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Flex>
        <Flex>
          <Text
            color={neutralDark4}
            fontSize="24px"
            fontWeight="600"
            fontFamily="Manrope"
          >
            Gerando redação com tema proposto...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
};

export default EssayGenerationLoading;