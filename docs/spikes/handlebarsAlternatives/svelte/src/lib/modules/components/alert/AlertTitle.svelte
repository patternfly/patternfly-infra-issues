<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";
  let { children, ...props } = $props();
</script>

<Component {...props} name="alert__title">
  {@render children?.()}
</Component>