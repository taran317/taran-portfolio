import type { NextPage } from "next";
import React from "react";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import Navbar from "../components/Navbar";

type HomePageProps = {
	data: ContentfulPagination<ProjectOverviewItem>;
};

const Home: NextPage<HomePageProps> = ({ data }) => {
	return (
		<Navbar />
	);
};

export default Home;
