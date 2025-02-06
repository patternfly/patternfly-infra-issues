<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";

  let {
    as = 'screenreader',
    type = 'div'
  } = $props();
</script>

<Component this={type} as={as} className='test'>

</Component>