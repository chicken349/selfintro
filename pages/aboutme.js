import { Image, Flex, Text, Box, Tooltip } from "@chakra-ui/react"
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
          margin="2.5rem"
          padding="2.5rem"
          boxShadow="dark-lg"
        >
          <Image
            boxSize="300px"
            objectFit="cover"
            src="icon2.jpeg"
            alt="Kevin"
            boxShadow="2xl"
          />
          <Flex
            w="40vw"
            h="auto"
            align="center"
            justify="center"
            direction="column"
          >
            <Flex
              align="center"
              justify="center"
              direction="column"
            >
              <Text fontSize="3xl" align="center" justify="center">
                About Kevin
              </Text>
              <Text fontSize="1xl" align="center" justify="center">
                I have worked in the accounting field over these few years. As I realized that a large proportion of tasks in accounting can, and will be taken over by AI, I decided to dive inside the computer field. I am aiming at becoming an app developer.
              </Text>
            </Flex>
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