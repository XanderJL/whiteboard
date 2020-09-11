import React from "react"
import Head from "next/head"
import { Box, Flex, Heading } from "@chakra-ui/core"
import { Draggable, Droppable } from "react-beautiful-dnd"

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
      <Box display="flex" flexDir="column" w="100%" h="100vh" p="3rem 1.25rem">
        <Flex direction="row" wrap="wrap" align="center" justify="space-around">
          <Box>
            <Heading as="h1" size="xl">
              ALUMINUM
            </Heading>
            <Flex direction="column">
              <span>bleh</span>
            </Flex>
          </Box>
          <Box>
            <Heading as="h1" size="xl">
              VINYL
            </Heading>
            <Flex direction="column">also bleh</Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Index
