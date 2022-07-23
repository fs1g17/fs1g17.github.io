export interface ArtcileUploadRequest {
  title: string;
  abstract: string;
  markdownBody: string;
}

export interface ImageUploadRequest {
  image: File;
}

export interface ArticleCard {
  imgUrl: string;
  title: string;
  abstract: string;
  articleUrl: string;
}

export interface ArticleCardsRequest {
  pageNumber: number;
  pageSize: number;
}

export type ArticleCardsResponse = ArticleCard[];
