<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const search = useSearchQuery()

const handleOnSearch = useDebounceFn((query: string) => {
  if (query) {
    router.push({
      query: {
        ...route.query,
        search: query,
      },
    })
  }
  else {
    router.push({
      query: {
        ...route.query,
        search: undefined,
      },
    })
  }
  search.value = query
}, 300)
</script>

<template>
  <nav class="flex container flex-col gap-3 md:flex-row py-4 items-center">
    <NuxtLink to="/" class="text-2xl font-bold flex items-center gap-2 cursor-pointer whitespace-nowrap">
      <img src="/logo.svg" class="w-8 h-8">Deutsche Sprichwörter
    </NuxtLink>
    <div class="flex-1" />
    <div class="w-full sm:max-w-sm lg:max-w-lg">
      <div class="bg-zinc-200 rounded-lg px-3 py-1.5 min-w-full lg:min-w-[400px] flex gap-2 items-center">
        <Icon name="ph:magnifying-glass-bold" class="w-5 h-5 text-zinc-500 font-bold" />
        <input
          type="text" class="bg-transparent w-full outline-none text-zinc-700"
          placeholder="Suche nach Sprichwörtern..." @input="(e) => handleOnSearch((e.target as HTMLInputElement).value)"
        >
      </div>
    </div>
  </nav>
</template>
