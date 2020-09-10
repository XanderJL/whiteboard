import React from "react"
import Head from "next/head"
import { Flex, Heading } from "@chakra-ui/core"

const Index = () => {
  return (
    <>
      <Head>
        <title>Whiteboard</title>
        <meta
          name="description"
          content="Temporary whiteboard app for Aluminum Associates"
        />
        <meta name="author" content="Alex Low" />
      </Head>
      <Flex direction="row" wrap="wrap" align="center" justify="space-around">
        <Flex direction="column">
          <Heading as="h1" size="xl">ALUMINUM</Heading>
        </Flex>
        <Flex direction="column">
          <Heading as="h1" size="xl">VINYL</Heading>
        </Flex>
      </Flex>
    </>
  )
}

export default Index
