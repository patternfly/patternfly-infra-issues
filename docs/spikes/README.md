# Svelte Findings

## Template System Migration Guide: From Handlebars to SvelteKit

### Top-level Summary
Think of this like replacing a monolithic templating engine with microservices - while the system is still running. We're migrating from Handlebars to SvelteKit, but instead of a risky big-bang migration, we're taking the strangler fig pattern approach. The old system keeps running while we gradually wrap new functionality around it.

## Spikes

# 2024.stateofjs.com

## Libraries Experience & Sentiment

<a href="2024.stateofjs.com" target="_blank">
<img src="https://github.com/user-attachments/assets/472ff0ee-f981-4901-9db3-a36054be64e3" alt="state of JS framework sentiment" />
</a>

## Changes Over Time

<a href="2024.stateofjs.com" target="_blank">
<img src="https://github.com/user-attachments/assets/d9f1f791-fd40-4d75-a64e-1321715f95e5" alt="state of JS framework popularity" />
</a>

## The Migration Pattern

Our migration uses three key mechanisms to manage the transition from Handlebars to Svelte:

1. Routes - maintains the same URL structure while the underlying implementation changes
   ```
   /components/alert  →  Choose Implementation
   /modules/alert    →  Choose Implementation
   ```

2. Aliases - provides flexibility to point to either implementation
   ```
   $component/alert  →  Svelte Component
                    →  Handlebars Template
   ```

3. Feature Toggles - controls which implementation is active
   ```
   Component Request → Toggle → Implementation Choice
                           ├─→ Svelte 
                           └─→ Handlebars
   ```

This enables:
- Maintaining existing routes while changing implementations
- Switching between implementations using aliases
- Controlling which version is live
- Rolling back instantly if needed


Similar to how Git allows us to maintain multiple branches while developing new features, our migration maintains dual implementations during transition:

```
main (production) ----*----*----*----> (Handlebars)
                      \    \    \
feature branches       *----*----* --> (SvelteKit)
```

## Architecture Evolution

### Current: Handlebars System
```
templates/
└── base templates
    └── partial templates
        └── component templates
```

### Target: SvelteKit Architecture
```
src/
├── lib/modules/
│   ├── components/      # Component library
│   ├── hbs/            # Legacy support
│   └── layouts/        # Layout system
└── routes/             # Page routing
```

## Migration Path

### Phase 1: Foundation
```
.svelte-kit/
└── src/
    └── lib/
        ├── modules/
        │   ├── components/    # New component system
        │   ├── hbs/          # Legacy template support
        │   ├── layouts/      # Layout architecture
        │   └── utilities/    # Shared utilities
        └── templates/        # Base templates
```

### Phase 2: Component Migration
```javascript
// Before: Handlebars Template
{{!-- alert-template.hbs --}}
<div class="alert {{modifier}}">
  {{content}}
</div>

// After: Svelte Component
<!-- Alert.svelte -->
<script>
  export let modifier = '';
  export let content = '';
</script>

<div class="alert {modifier}">
  {content}
</div>
```

## Implementation Strategy

### Template Manager Abstraction
```javascript
class ModernTemplateManager {
  constructor() {
    this.templates = new Map();
    this.validators = new Map();
  }

  // Supports both systems during migration
  async render(name, context) {
    const template = this.templates.get(name);
    if (template.type === 'hbs') {
      return this.renderHandlebars(template, context);
    }
    return this.renderSvelte(template, context);
  }
}
```

## Migration Workflow

1. Package Structure
   ```
   src/lib/modules/components/
   ├── Alert/
   │   ├── Alert.svelte    # New implementation
   │   └── alert.hbs      # Legacy support
   ```

2. Route Structure
   ```
   src/routes/
   ├── docs/
   │   └── components/
   │       └── alert/
   │           ├── +layout.svelte
   │           └── +page.svelte
   ```

3. Documentation Integration
   ```svelte
   <!-- +page.svelte -->
   <script>
     import { Alert } from '$lib/modules/components';
   </script>

   # Alert Component
   <Alert type="success">
     Migration successful!
   </Alert>
   ```

## Success Metrics

- Zero downtime during migration
- Component-by-component transition
- Maintained documentation coverage
- Improved developer experience

## Rollback Strategy

Components maintain dual implementations until fully migrated:
```javascript
render(name, context) {
  return this.useNewSystem
    ? this.renderSvelte(name, context)
    : this.renderHandlebars(name, context);
}
```

## Developer Guide

1. Setup New Component
   ```bash
   └── src/
       └── lib/
           └── modules/
               └── YOUR_COMPONENT/
                   ├── index.ts
                   ├── Component.svelte
                   └── legacy.hbs
   ```

2. Migration Steps
   ```javascript
   // 1. Create Svelte version
   // 2. Test in isolation
   // 3. Update documentation
   // 4. Remove legacy template
   ```
