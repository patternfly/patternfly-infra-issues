<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";
  let { children, ...props } = $props();
</script>

<!-- this can be abstracted into a function -->
{#snippet cardChildren()}
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  <!-- {#if props.cardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  {#if props.cardBody}
    <CardBody {...props.cardBody} />
  {/if} -->
{/snippet}

<Component {...props} name="card">
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {@render children?.()}
</Component>