export default interface item {
    title: string;
    link: string;
    displayLink: string;
    snippet: string;
    pagemap: {
      metatags: {
        "og:image": string
      }
    }
  }