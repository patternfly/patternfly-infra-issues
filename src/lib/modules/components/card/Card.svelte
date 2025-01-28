<script lang='ts'>
  // import { getSiblings } from '../helpers';
  export const cardState = {
  }

  let {
    className = 'card',
    text = '',
    children,
    ...props
  } = $props();
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



<div class="{pfPrefix(className)}" class:pf-m-expanded={cardState.isExpanded}>

  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {text}
  {@render children?.()}
</div>