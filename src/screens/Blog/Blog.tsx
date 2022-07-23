import { Container } from "@mui/material";
import { FC } from "react";
import { ArticleCard } from "../../components";
import { styled } from "@mui/material/styles";

const ArticleColumn = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *:not(:last-child)": {
    marginBottom: 40,
  },
});

const Blog: FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 1,
      }}
    >
      <ArticleColumn>
        <ArticleCard
          imageUrl="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
          title="Best Fruit & Veggies"
          body="Rich in both soluble and insoluble fiber, such as pectin, hemicellulose, and cellulose, 
        they’re also a source of vitamin C and plant polyphenols, which are disease-fighting 
        compounds found in plants. Sounds like a fancy new supplement? Actually, this is a 
        very common fruit you’re not eating enough of"
          readMoreUrl=""
        />
        <ArticleCard
          imageUrl="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
          title="Best Fruit & Veggies"
          body="Rich in both soluble and insoluble fiber, such as pectin, hemicellulose, and cellulose, 
        they’re also a source of vitamin C and plant polyphenols, which are disease-fighting 
        compounds found in plants. Sounds like a fancy new supplement? Actually, this is a 
        very common fruit you’re not eating enough of"
          readMoreUrl=""
        />
      </ArticleColumn>
    </Container>
  );
};

export default Blog;
