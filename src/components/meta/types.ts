export interface OgpMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
}

export interface DescriptionMetaProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogp?: OgpMetaProps;
}

export interface HeadMetaProps extends DescriptionMetaProps {
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
