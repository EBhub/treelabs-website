import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

function ProjectOverview() {

    const [activeProj, setActiveProj] = useState(0);

    const projectBox = (src, url, index) => {
        return (<Link
            href={url}
            display="block"
            width="30%"
            height="100px"
            onMouseEnter={() => {setActiveProj(index)}}
            className="proj-link"
            style={{
              backgroundImage: "url("+src+")",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          ></Link>)
    }

    return (
            <Flex mt="20" justifyContent="space-between">
                {projectBox("images/projects/aleph.png","https://alephzero.org", 0)}
                {projectBox("images/projects/panther.png", "https://www.pantherprotocol.io/", 1)}
                {projectBox("images/projects/hashflow.png", "https://hashflow.com/", 2)}
            </Flex>
    );
}

export default ProjectOverview;