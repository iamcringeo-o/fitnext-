import type React from 'react';

export interface ArticleMeta {
  slug: string;
  url: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeyword: string;
  readTime: string;
  publishDate: string;
  image: string;
  imageAlt: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
  plainAnswer?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}
