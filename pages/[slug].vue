<script lang="ts" setup>
import type { Proverb } from "~/util/types"

const route = useRoute()
const { public: config } = useRuntimeConfig()

const { data: proverb } = useApi<Proverb>(`/proverbs/${route.params.slug}`)

useSeoMeta({
  title: () => proverb.value?.name ?? "sprichwoerter.wiki",
  description: () => proverb.value?.metaDescription,
  ogImage: () => proverb.value?.coverUrl,
})
</script>

<template>
  <div v-if="proverb" class="prose">
    <h1>{{ proverb.name }}</h1>
    <img v-if="proverb.coverUrl" :src="`${config.cdnUrl}/images/proverbs/${proverb.coverUrl}`" class="max-h-96 rounded-lg">
    <h2>Erklärung</h2>
    <div v-html="proverb.explanation" />
    <h2 v-if="proverb.example">
      Anwendungsbeispiel
    </h2>
    <div v-if="proverb.example" v-html="proverb.example" />
    <h2 v-if="proverb.history">
      Herkunft
    </h2>
    <div v-if="proverb.history" v-html="proverb.history" />
  </div>
  <div v-else>
    <p>Kein Sprichwort gefunden.</p>
  </div>
</template>
