import React from 'react';

import {
  styled,
  Box,
  BoxProps,
} from "@mui/material";

const InfoBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: "flex-end",
  },
}));

const ChildrenContainer = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

type ImageAlignment = "left" | "right";

interface ImageInfoProps {
  img: string;
  imgAlt: string;
  mdMaxWidth: number;
  lgMaxWidth: number;
  imageAlignment?: ImageAlignment;
  children: React.ReactNode;
}

const ImageInfo = ({ img, imgAlt, mdMaxWidth, lgMaxWidth, imageAlignment = "left", children }: ImageInfoProps) => {

  const getMaxWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      return undefined;
    }

    if (windowWidth >= 900 && windowWidth < 1200) {
      return mdMaxWidth;
    }

    return lgMaxWidth;
  }

  const Image = () => (
    <img
      src={img}
      alt={imgAlt}
      style={{ width: '100%', maxWidth: getMaxWidth() }}
    />
  );

  const Children = () => (
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  );

  return (
    <InfoBox>
      {imageAlignment === "left" || window.innerWidth < 900 ? (
        <>
          <Image />
          <Children />
        </>
      ) : (
        <>
          <Children />
          <Image />
        </>
      )}
    </InfoBox>

  )
};

export default ImageInfo;
