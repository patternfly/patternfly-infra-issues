import handlebars from 'handlebars';

function processHbs(code) {
  return code.replace(/```hbs([\s\S]*?)```/g, (_, templateCode) => {
    return `<div>${handlebars.compile(templateCode.trim())({})}</div>`;
  });
}

export default function hbsProcessor(options) {
  return {
    markup({ content, filename }) {
      return {
        code: processHbs(content),
      };
    },
  };
}

