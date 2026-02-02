<template>
  <div
      class="min-h-screen text-base text-black dark:text-white bg-slate-800 dark:bg-slate-800"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <switcher />
    <fooTer />
  </div>
</template>

<script>
import switcher from '@/components/switcher.vue'
import fooTer from '@/components/footer.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    switcher,
    fooTer
  }
}
</script>