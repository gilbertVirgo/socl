import { PostWrapper, PreviousWrapper, SectionHeading } from "./Latest/styles";

import ActivityIndicator from "../components/ActivityIndicator";
import Featured from "./Latest/Featured";
import Grid from "@component/Grid";
import Posts from "./Latest/Posts";
import Previous from "./Latest/Previous";
import React from "react";
import Section from "@component/Section";
import { fetchPodcastEpisodes } from "../scripts/podcast";
import initGA from "../helpers/initGA";
import styled from "styled-components";

const Link = styled(Section.Link)``;

const delimiter = 4;

export default () => {
  const [episodes, setEpisodes] = React.useState();

  React.useEffect(() => {
    initGA(window.location);

    (async function () {
      const jsonData = await fetchPodcastEpisodes();

      setEpisodes(jsonData);
    })();
  }, []);

  return episodes ? (
    <Grid>
      <Featured
        image={episodes[0].image}
        author={episodes[0].author}
        date={episodes[0].date}
        title={episodes[0].name}
        slug={episodes[0].purpose}
        link={episodes[0].link}
        page="Latest Episode"
      />

      <PostWrapper>
        <SectionHeading>Recent episodes</SectionHeading>
        <Posts postList={episodes.slice(1, delimiter)} />
      </PostWrapper>

      <PreviousWrapper>
        <SectionHeading>Previous episodes</SectionHeading>
        <Previous showPodcastLinks list={episodes.slice(delimiter)} />
        {/* <Link to="https://socl.podbean.com/" nopad>
          See more episodes
        </Link> */}
      </PreviousWrapper>
    </Grid>
  ) : (
    <ActivityIndicator />
  );
};
