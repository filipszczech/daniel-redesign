<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>
  
<script setup>
</script>
  
<style scoped>
    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #000;
        border-radius: 50%;
        width: 72px;
        height: 72px;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
  