<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: #f1f1f1;
}

.w1170 {
  width: 1170px;
  margin: 0 auto;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
