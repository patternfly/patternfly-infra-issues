<script lang='ts'>
  import { pfPrefix } from "../helpers";
  let {
    className = 'page__main-body',
    text = '',
    children,
    ...props
  } = $props();
</script>


<div class="{pfPrefix(className)} pf-v6-c-markdown pf-v6-c-content">
  {text}
  {@render children?.()}
</div>