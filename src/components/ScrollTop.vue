<template>
  <button v-show="isVisible" class="scroll__top" @click="scrollToTop">
    <i class="fas fa-angle-up"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false); 

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = (): void => {
  if (window.scrollY > 200) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped> 
.scroll__top {
  position: fixed; 
  bottom: 30px;
  right: 30px; 
  z-index: 999; 
  border: none; 
  outline: none;
  background-color: var(--tg-theme-primary); 
  color: white;
  cursor: pointer; 
  padding: 15px; 
  border-radius: 10px; 
  font-size: 18px; 
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; 
}

.scroll__top:not([style*="display: none"]) { 
}

.scroll__top::after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    right: 5%;
    height: 10px;
    width: 90%;
    opacity: 1;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 80%);
}

.fa-angle-up:before {
    content: "\f106";
}

</style>
