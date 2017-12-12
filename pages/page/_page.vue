<template>
  <h1>page</h1>
</template>
<script type="text/javascript">
export default {
  validate({ params, query }) {
    console.log(params);
    
    return true;
  }
}
</script>