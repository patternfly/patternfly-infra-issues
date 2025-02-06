<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";
  let { children, ...props } = $props();
</script>

<Component {...props} name="page__main-body">
  {@render children?.()}
</Component>