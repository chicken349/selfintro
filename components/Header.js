import { Flex, Text } from "@chakra-ui/react"
import Link from 'next/link'

export default function Header() {
  return (
    <Flex
      position="sticky"
      top="0px"
      w="100vw"
      h="30px"
      backgroundColor="#d3d3d3"
      justify="flex-end"
      align="center"
      boxShadow="2xl"
      flexWrap="wrap"
      display={{base: "none", sm: "flex"}}
    >
      <Link href="/aboutme">
        <a>
          <Text
            marginRight={{sm: "15px", md: "30px"}}
            _hover={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
            fontSize={{base: "0.5 rem",sm: "0.5rem", md: "1rem"}}
          >
            About me
          </Text>
        </a>
      </Link>
      <Link href="/timeinjapan">
        <a>
          <Text
            marginRight={{sm: "15px", md: "30px"}}
            _hover={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
            fontSize={{base: "0.5 rem",sm: "0.5rem", md: "1rem"}}
          >
            Time in Japan
          </Text>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <Text
            marginRight={{sm: "15px", md: "30px"}}
            _hover={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
            fontSize={{base: "0.5 rem",sm: "0.5rem", md: "1rem"}}
          >
            Contact me
          </Text>
        </a>
      </Link>
      <Link href="/project">
        <a>
          <Text
            marginRight={{sm: "15px", md: "30px"}}
            _hover={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
            fontSize={{base: "0.5 rem",sm: "0.5rem", md: "1rem"}}
          >
            My projects
          </Text>
        </a>
      </Link>
    </Flex>
  )
}