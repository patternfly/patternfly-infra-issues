
export function pfPrefix(name: string = '', type = 'c'  ) {
  return `pf-v6-${type}-${name}`;
}

export function pfv(name: string = '', type = 'c'  ) {
  return `pf-v6-${type}-${name}`;
}

// import { onMount } from 'svelte';
// type ElementWithId = {
//   id: string;
//   parentElement?: HTMLElement | null;
// };

// export function getSiblings(elementId: string): ElementWithId[] {
//   let siblings: ElementWithId[] = [];

//   onMount(() => {
//     const element = document.getElementById(elementId);

//     if (!element) {
//       console.warn('getSiblings: Element not found');
//       return [];
//     }

//     const parent = element.parentElement;

//     if (!parent) {
//       console.warn('getSiblings: Element has no parent');
//       return [];
//     }

//     siblings = Array.from(parent.children)
//       .filter(child => {
//         const childElement = child as HTMLElement;
//         return childElement.id && childElement.id !== elementId;
//       }) as ElementWithId[];
//   });

//   return siblings;
// }
