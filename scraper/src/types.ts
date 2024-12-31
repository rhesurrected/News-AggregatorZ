export type NewsListEntry = {
  pic?: string;
  headline?: string;
  site?: string;
  summary?: string;
  link: string;
  contents?: {
    image?: string;
    text: string;
  }
};
