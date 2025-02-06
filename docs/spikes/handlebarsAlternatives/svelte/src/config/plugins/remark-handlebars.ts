import { visit } from 'unist-util-visit';

export default function remarkHandlebars() {
  return function transformer(tree) {
    visit(tree, 'html', (node) => {
      // Check if the node contains Handlebars syntax
      if (node.value.includes('{{')) {
        // Wrap the Handlebars content in our component
        node.value = `<HandlebarsBlock template={\`${node.value}\`} context={{}} />`;
      }
    });
  };
}