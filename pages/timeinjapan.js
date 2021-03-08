import { Image, Flex, Text, Tooltip } from "@chakra-ui/react"
import Footer from "../components/Footer";
import Link from 'next/link'
import Header from '../components/Header'

export default function AboutMe() {
  return (
    <div>
      <Header />
      <Flex align="center" justify="center" direction="column" background="#d3d3d3">
        <Flex
          minH="100vh"
          minW="70vw"
          align="center"
          justify="center"
          direction="column"
          background="white"
          padding="10px"
          boxShadow="dark-lg"
          margin="2.5rem"
          padding="2.5rem"
          boxShadow="dark-lg"
        >
          <Text fontSize="5xl" align="center" justify="center">
            Time in Japan
          </Text>
          <Flex align="center" justify="center" direction="column" marginBottom="3rem" marginTop="1rem">
            <Image
              w="60vw"
              h="auto"
              objectFit="cover"
              src="zao.jpeg"
              alt="zao"
              boxShadow="2xl"
            />
            <Text fontSize="3xl" align="center" justify="center">
              Zao in Yamakata
            </Text>
          </Flex>
          <Flex align="center" justify="center" direction="column" marginBottom="3rem" marginTop="1rem">
            <Image
              w="60vw"
              h="auto"
              objectFit="cover"
              src="cycling.jpeg"
              alt="cycling"
              boxShadow="2xl"
            />
            <Text fontSize="3xl" align="center" justify="center">
              Cycling in ShimaNami Kaido
            </Text>
          </Flex>
          <Flex align="center" justify="center" direction="column" marginBottom="3rem" marginTop="1rem">
            <Image
              w="60vw"
              h="auto"
              objectFit="cover"
              src="yufuin.jpeg"
              alt="yufuin"
              boxShadow="2xl"
            />
            <Text fontSize="3xl" align="center" justify="center">
              Winter morning in Yufuin, Oita
            </Text>
          </Flex>
          <Link href="/">
            <a>
              <Tooltip label="Home" aria-label="A tooltip to home">
                <Image
                  marginTop="30px"
                  w="30px"
                  h="30px"
                  src="home-button.svg"
                />
              </Tooltip>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Footer />

    </div>
  )
}