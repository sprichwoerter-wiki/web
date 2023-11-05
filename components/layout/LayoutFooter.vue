<template>
  <div class="flex py-4 sm:justify-between items-center gap-4 flex-col sm:flex-row">
    <p>
      <NuxtLink to="https://yseeger.me" class="text-sm hover:underline" target="_blank">
        ©{{ new Date().getFullYear() }}
        Yannick Seeger
      </NuxtLink>
    </p>
    <div class="space-x-3">
      <NuxtLink to="/imprint" class="text-sm hover:underline">
        Impressum
      </NuxtLink>
      <NuxtLink to="/privacy" class="text-sm hover:underline">
        Datenschutzerklärung
      </NuxtLink>
    </div>
  </div>
</template>
