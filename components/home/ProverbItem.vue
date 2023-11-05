<script lang="ts" setup>
import type { PartialProverb } from "~/util/types"

defineProps<{
  proverb: PartialProverb
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="prose prose-h2:mb-2 prose-p:mt-2">
      <h2>{{ proverb.name }}</h2>
      <div v-html="proverb.explanation" />
    </div>
    <NuxtLink :to="`/${proverb.slug}`" class="italic text-sm w-fit underline">
      Mehr Erfahren
    </NuxtLink>
  </div>
</template>
