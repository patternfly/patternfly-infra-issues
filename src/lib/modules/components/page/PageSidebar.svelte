<script lang='ts'>
  import { pfPrefix } from "../helpers";
  let {
    className = 'page__sidebar',
    text = '',
    children,
    ...props
  } = $props();
</script>


<div class="{pfPrefix(className)}">
  {text}
  {@render children?.()}
</div>