<template>
  <button v-show="isVisible" class="scroll__top" @click="scrollToTop">
    <!-- <i class="fas fa-angle-up"></i> -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 66.91" style="enable-background:new 0 0 122.88 66.91" xml:space="preserve"><g  style="
    fill: white;
"><path d="M11.68,64.96c-2.72,2.65-7.08,2.59-9.73-0.14c-2.65-2.72-2.59-7.08,0.13-9.73L56.87,1.97l4.8,4.93l-4.81-4.95 c2.74-2.65,7.1-2.58,9.76,0.15c0.08,0.08,0.15,0.16,0.23,0.24L120.8,55.1c2.72,2.65,2.78,7.01,0.13,9.73 c-2.65,2.72-7,2.78-9.73,0.14L61.65,16.5L11.68,64.96L11.68,64.96z"/></g></svg>
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
