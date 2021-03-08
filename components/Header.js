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
    >
      <Link href="/aboutme">
        <a>
          <Text
            marginRight={{sm: "15px", md: "30px"}}
            _hover={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
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
          >
            My projects
          </Text>
        </a>
      </Link>
    </Flex>
  )
}