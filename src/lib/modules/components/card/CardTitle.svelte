<script lang='ts'>
  let {
    className = 'card__title',
    text = '',
    children,
    ...props
  } = $props();
</script>


<div class="{pfPrefix(className)}">
  {text}
  {@render children?.()}
</div>