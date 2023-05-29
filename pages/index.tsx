import type { NextPage } from "next";
import React from "react";
import { Stack, Flex, Spacer, Box } from "@chakra-ui/react";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Credit from "../components/Credit";

type HomePageProps = {
	data: ContentfulPagination<ProjectOverviewItem>;
};

const Home: NextPage<HomePageProps> = () => (
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
				<Header />
				<Box height="50px" />
				<About />
				<Education />
				<Education />
			</Stack>
		</Flex>
		<Credit />
	</>
);

export default Home;
