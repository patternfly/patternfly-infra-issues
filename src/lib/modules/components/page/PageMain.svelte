<script lang='ts'>
  import { pfPrefix } from "../helpers";

  let {
    className = 'page__main',
    text = '',
    type = 'div',
    children,
    ...props
  } = $props();
</script>

<div class="{pfPrefix(className)}">
  {text}
  {@render children?.()}
</div>