<script lang='ts'>
  import { pfPrefix } from "../helpers";
  let {
    className = 'page__main-section',
    isFilled = true,
    text = '',
    children,
    ...props
  } = $props();
</script>


<section class="{pfPrefix(className)}" class:pf-m-fill={isFilled}>
  {text}
  {@render children?.()}
</section>