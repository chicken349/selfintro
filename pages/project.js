import { Image, Flex, Text, Tooltip } from "@chakra-ui/react"
import Footer from "../components/Footer";
import Link from 'next/link'
import Header from '../components/Header'

export default function Project() {
  return (
    <div>
      <Header />
      <Flex align="center" justify="center" direction="column" background="#d3d3d3">
        <Flex
          minH="100vh"
          w={{base: "100vw",sm: "100vw",md: "50vw"}}
          maxW="1024px"
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
          <Text fontSize={{sm: "3xl", md: "6xl"}} align="center" justify="center">
            My projects
          </Text>
          <Image maxW="auto" maxH="15rem" src="https://miro.medium.com/max/2000/1*KMsAE8WmWsPJtxkRaov4Ow.gif" alt="Game of Life" />
          <Flex
            align="center"
            justify="center"
            direction="column"
          >
            <Text fontSize={{sm: "2xl" , md: "3xl"}} align="center" justify="center"
              _hover={{
                color: "#0070f3",
                textDecor: "underline"
              }}>
              <a href="https://gameoflife-gules-five.vercel.app/">
                Game of Life &rarr;
                </a>
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