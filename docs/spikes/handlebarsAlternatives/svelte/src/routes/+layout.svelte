<script lang="ts">
  import PageNavigation from '$lib/page/PageNavigation.svelte';
  import PageHeader from '$lib/page/PageHeader.svelte';
  import { Page, PageMain, PageMainBody, PageMainSection, PageSidebar, PageSidebarBody, PageMainContainer } from '$components/page';
  import './md.scss';
  import '$lib/patternfly/patternfly.scss';

  import './workspace.scss';

  // Define our props using runes syntax
  let {
    children,
    ...props
  } = $props();
</script>


<!-- import { pageSidebar } from '$lib/stores/shared.svelte';
<aside class="pf-v6-c-page__sidebar {pageSidebar.expanded}" class:pf-m-expanded={pageSidebar.expanded} class:pf-m-collapsed={!pageSidebar.expanded}> -->

<Page>
  <PageHeader />
  <PageSidebar>
    <PageSidebarBody>
      <PageNavigation />
    </PageSidebarBody>
  </PageSidebar>
  <PageMainContainer>
    <PageMain>
      <PageMainSection isFilled=true>
        <PageMainBody>
          <div class="pf-v6-c-content">
            {@render children?.()}
          </div>
        </PageMainBody>
      </PageMainSection>
    </PageMain>
  </PageMainContainer>
</Page>