<template>
  <div class="container flex justify-center items-center">
    <nav class="pagination" aria-label="Pagination Navigation">
      <button class="page-btn" :disabled="currentPage === 1" @click="$emit('update:modelValue', currentPage - 1)"
        aria-label="Previous page">
         Previous
      </button>

      <template v-for="page in displayedPages" :key="pageKey(page)">
        <button v-if="page !== '...'" :class="['page-btn', { active: page === currentPage }]"
          @click="$emit('update:modelValue', page)" :aria-current="page === currentPage ? 'page' : null">
          {{ page }}
        </button>
        <span v-else class="ellipsis">...</span>
      </template>

      <button class="page-btn" :disabled="currentPage === totalPages"
        @click="$emit('update:modelValue', currentPage + 1)" aria-label="Next page">
        Next 
      </button>
    </nav>
  </div>

</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
    validator: (v) => v > 0,
  },
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:modelValue']);

const { totalPages, modelValue } = toRefs(props);

const currentPage = computed(() => modelValue.value);

const displayedPages = computed(() => {
  const pages = [];
  const firstPage = 1;
  const lastPage = totalPages.value;

  pages.push(firstPage);

  if (totalPages.value <= 5) {
    for (let p = 2; p <= lastPage; p++) {
      pages.push(p);
    }
  } else {
    if (currentPage.value <= 3) {
      pages.push(2, 3,'...', lastPage);
    } else if (currentPage.value >= lastPage - 2) {
      pages.push('...',lastPage - 2, lastPage - 1, lastPage);
    } else {
      pages.push('...', currentPage.value, '...', lastPage);
    }
  }

  return pages;
});

const pageKey = (page) => (page === '...' ? `ellipsis-${Math.random()}` : `page-${page}`);
</script>

<style scoped>
.pagination {
  display: inline-flex;
  gap: 0.5rem;
  user-select: none;
  font-family: 'Inter', sans-serif;
  align-items: center;
  margin: 20px auto;
}

.page-btn {
  padding: 0.4rem 0.9rem;
  font-weight: 600;
  font-size: 0.9rem;
  background: transparent;
  border-radius: 6px;
  color: #717D11;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.page-btn:hover:not(:disabled) {
  background-color: #717D11;
  color: white;
}

.page-btn:disabled {
  cursor: default;
  opacity: 0.4;
  border-color: #bbb;
  color: #bbb;
}

.page-btn.active {
  background-color: #717D11;
  color: white;
  cursor: default;
  border-color: #717D11;
}

.ellipsis {
  user-select: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: #717D11;
  padding: 0 0.6rem;
}
</style>
