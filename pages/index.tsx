import type { NextPage } from "next";
import React from "react";
import { Stack, Flex } from "@chakra-ui/react";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Head from "next/head";

type HomePageProps = {
	data: ContentfulPagination<ProjectOverviewItem>;
};

const Home: NextPage<HomePageProps> = ({ data }) => {
	return (
    <>
      <Navbar />
	  <Head>
		<title>Taran's Portfolio</title>
	  </Head>
      <Flex as="main" justifyContent="center" flexDirection="column">
        <Stack
          as="main"
          spacing="250px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: "5vw", md: "10vw" }}
          mt={{ base: "15vh", md: "22.5vh" }}
        >
          <About />
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
