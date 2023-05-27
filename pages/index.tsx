import type { NextPage } from "next";
import React from "react";
import { Stack, Flex, Spacer } from "@chakra-ui/react";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Head from "next/head";
import Education from "../components/Education";

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
			spacing="200px"
			justifyContent="center"
			alignItems="flex-start"
			px={{ base: "5vw", md: "10vw" }}
			mt={{ base: "15vh", md: "22.5vh" }}
        >
			{/* spacer after header */}
			<Header />
			<Spacer />
			<About />
			<Education />
			<Education />
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
