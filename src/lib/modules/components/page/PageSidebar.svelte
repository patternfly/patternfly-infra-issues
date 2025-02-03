<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";
  import { pageSidebar } from "$lib/stores/shared.svelte";
  let { children, ...props } = $props();
  let sidebarExpanded = $derived(pageSidebar.expanded);
</script>



<Component {...props} name="page__sibebar" classList=[] pf-m-expanded={sidebarExpanded}>
  {@render children?.()}
</Component>