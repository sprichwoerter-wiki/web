<script lang="ts" setup>
import { usePage } from "~/composables/search"
import type { PartialProverb } from "~/util/types"

defineProps<{
  proverbs: PartialProverb[]
}>()

const page = usePage()
const route = useRoute()
</script>

<template>
  <div>
    <div v-if="proverbs.length > 0" class="flex flex-col gap-12">
      <div class="flex flex-col gap-12">
        <HomeProverbItem v-for="proverb in proverbs" :key="`${proverb.slug}`" :proverb="proverb" />
      </div>
    </div>
    <div v-else>
      <p>Keine Sprichwörter gefunden.</p>
    </div>
    <div v-if="page.success" class="mt-8 w-full flex items-center justify-center gap-4">
      <NuxtLink
        v-if="page.data > 1" :to="{
          query: {
            ...route.query,
            page: page.data - 1,
          },
        }"
        class="hover:underline"
      >
        Zurück
      </NuxtLink>
      <NuxtLink
        v-if="proverbs.length > 0"
        :to="{
          query: {
            ...route.query,
            page: page.data + 1,
          },
        }"
        class="hover:underline"
      >
        Weiter
      </NuxtLink>
    </div>
  </div>
</template>
