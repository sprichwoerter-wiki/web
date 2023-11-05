<script lang="ts" setup>
import type { PartialProverb } from "~/util/types"

const search = useSearch()
const { data } = useApi<PartialProverb[]>(() => search.value)
</script>

<template>
  <HomeProverbsGrid v-if="data" :proverbs="data" />
</template>
