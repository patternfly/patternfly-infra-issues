<script lang="ts">
  import { pfPrefix } from "./components/helpers";

  let {
    as = 'div',
    name = 'component',
    states = String || [] || {},
    modifiers = String || [],
    classList = String || [],
    children,
    ...restProps
  } = $props<ComponentProps>();
</script>

<svelte:element this={as} class="{pfPrefix(name)} {classList}" {...restProps}>
  {@render children?.()}
</svelte:element>