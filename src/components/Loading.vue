<template>
  <div class="loading-container">
  <span class="loading-text logo-font">Loading<span class="dots"></span></span>
</div>

</template>

<style scoped>
.loading-container {
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  color: #768300;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: transparent;
}

.dots::after {
  display: inline-block;
  width: 1.5em; 
  text-align: left;
  content: '';
  animation: dots 1.2s steps(4, end) infinite;
}

@keyframes dots {
  0%   { content: '';    }
  25%  { content: '.';   }
  50%  { content: '..';  }
  75%  { content: '...'; }
  100% { content: '';    }
}

</style>
