import type { Article } from '@/types/article'
import { announcingPaccTrack } from './announcing-pacc-track'

export const articles: Article[] = [
  announcingPaccTrack,
  //hydrogenPlatformLaunch,
  //paccPartnersWithGridstor,
  //paccExpandsToTexas,
  //paccProcessesMillionthKilogram,
  //paccSecuresSeriesA,
  //paccNamedTopInnovator,
]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
