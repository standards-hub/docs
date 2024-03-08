<template>
  <div class="flex justify-end italic text-slate-400 dark:text-slate-500">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Last commit date: {{ lastCommitDate }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      error: null,
      lastCommitDate: null,
    };
  },

  // setup() {
  //   const currentFilePath = ref('')
  //   const route = useRoute()

  //   onMounted(() => {
  //     const routeParams = route.params
  //     const filePath = buildFilePath(routeParams)

  //     currentFilePath.value = filePath
  //   })
  //   const buildFilePath = (routeParams) => {
  //     const { section, subSection } = routeParams

  //     const filePath = `/content/${section}/${subSection}`

  //     return filePath
  //   }

  //   return {currentFilePath}
  // },


  async created() {
    try {
      

      const owner = "standards-hub";
      const repo = "docs";

      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=content/1.getting-started/1.index.md`;
      
      const response = await axios.get(apiUrl);
      const lastCommitDate = response.data[0]?.commit?.author?.date;

      if (lastCommitDate) {
        const dateObject = new Date(lastCommitDate);
        const formattedDate = dateObject.toLocaleString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
        });

        this.lastCommitDate = formattedDate;
      } else {
        this.lastCommitDate = "No commit date available";
      }

      this.loading = false;
    } catch (error) {
      this.error = "Error fetching data from GitHub API";
      this.loading = false;
    }
  },
}
</script>

<style></style>
