import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        {SECONDARY_STORIES.map((story, index) => (
          <HorizontalBarWrapper key={story.id}>
            <SecondaryStory {...story} />
          </HorizontalBarWrapper>
        ))}
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoriesWrapper>
          {OPINION_STORIES.map((story, index) => (
            <HorizontalBarWrapper key={story.id}>
              <OpinionStory {...story} />
            </HorizontalBarWrapper>
          ))}
        </StoriesWrapper>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement    advertisement'
    'opinion-stories  opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 48px 0px;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement     advertisement';
    grid-template-columns: 16fr 13fr 9fr;
    gap: 0px 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const HorizontalBarWrapper = styled.div`
  :not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const StoriesWrapper = styled.div`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    & > div:not(:last-of-type) {
      padding-bottom: revert;
      margin-bottom: revert;
      border-bottom: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
