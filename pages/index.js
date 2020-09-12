import React from "react"
import Head from "next/head"
import { Box, Flex, Grid, Heading } from "@chakra-ui/core"
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
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        h="100vh"
        p={["1.25rem", "3rem 1.25rem"]}
      >
        <Grid
          gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, minmax(0, 1fr))"]}
        >
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
        </Grid>
      </Box>
    </>
  )
}

export default Index
