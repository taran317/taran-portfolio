import { Link } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";

type ProjectLinkProps = {
	id: string;
	children: JSX.Element | JSX.Element[];
};

const ProjectLink: React.FC<ProjectLinkProps> = ({ id, children }) => {
	return (
		<NextLink href={`/projects/${id}`} passHref>
            <Link>{children}</Link>
        </NextLink>
	);
};

export default ProjectLink;