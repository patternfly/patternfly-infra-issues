<script>
  let {
    Title = '',
    children,
    ...props
  } = $props();
</script>

<h1>Here's something{Title}</h1>
{@render children?.()}