<!-- <script lang="ts" definition>
  interface Component<T> {
     props: {
      value: T,
      text: ''

    }
     events: {
       change: (value: T) => void
     }
     slots: {
       default: {}
     }
  }
</script>


<script lang="ts">
  import type { pfPrefix } from "../modules/components/helpers";
  let tag = $state({
    as: 'div',
    name: 'tesrt'
  });

  let {
    text = '',
    children,
    ...props
  } = $props();
</script>

<svelte:element type='{as}' class="{pfPrefix(name)}">
  <slot />
</svelte:element> -->