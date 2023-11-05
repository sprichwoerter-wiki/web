import { z } from "zod"

const DEFAULT_PAGE_SIZE = 30

export function useSearchQuery() {
  const route = useRoute()
  const routeQuery = z.string().optional().safeParse(route.query)

  return useState<string | undefined>("search_query", () => routeQuery.success ? routeQuery.data : undefined)
}

export function usePage() {
  const route = useRoute()
  return computed(() => z.coerce.number().int().min(1).optional().default(1).safeParse(route.query.page))
}

export function useSearch() {
  const searchQuery = useSearchQuery()
  const page = usePage()

  return computed(() => {
    const params = new URLSearchParams()
    if (searchQuery.value)
      params.set("query", searchQuery.value)
    if (page.value.success && page.value.data)
      params.set("offset", `${(page.value.data - 1) * DEFAULT_PAGE_SIZE}`)
    params.set("limit", `${DEFAULT_PAGE_SIZE}`)
    return `/proverbs/search?${params.toString()}`
  })
}
