import { useFetch, useRuntimeConfig } from "nuxt/app"

type useFetchType = typeof useFetch

export const useApi: useFetchType = (path, options) => {
  const config = useRuntimeConfig()
  return useFetch(path, {
    ...options,
    baseURL: config.public.apiUrl,
  })
}
