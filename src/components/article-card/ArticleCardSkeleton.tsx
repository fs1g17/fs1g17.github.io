import { styled } from "@mui/material/styles";

import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

const ResponsiveCardSkeleton = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    height: 320,
    width: 700,
  },
  [theme.breakpoints.down("sm")]: {
    height: 320,
    width: 350,
  },
}));

const ArticleCardSkeleton = () => (
  <ResponsiveCardSkeleton variant="rectangular" />
);

export default ArticleCardSkeleton;
