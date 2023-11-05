<template>
  <div>
    <LayoutNavbar />
    <div class="container mt-8 flex flex-col min-h-screen h-full">
      <div class="flex-1">
        <slot />
      </div>
      <div class="mt-12">
        <LayoutFooter />
      </div>
    </div>
  </div>
</template>
