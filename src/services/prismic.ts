import Prismic from '@prismicio/client'

export function getPrismicClient(request?: unknown) {
  return Prismic.client(process.env.PRISMIC_END_POINT, {
    req: request,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })
}
