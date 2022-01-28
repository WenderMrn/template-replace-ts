import Template from "./Template";

const inputText = `\tTítulo da obra\n\nMinha
 **história** começa a ~~muitos~~ anos atrás e ___*underline vai aqui*___\n
 saiba mais em [meu site](http://google.com.br)`;

const tpl = new Template().addTransformers({
  underline: {
    atob: {
      from: /___\*(.+)\*___/g,
      to: "<u>$1</u>",
    },
    btoa: {
      from: /<u>(.+)<\/u>/g,
      to: "___*$1*___",
    },
  },
});

console.log("ORIG: ", JSON.stringify(inputText));

const atob = tpl.atob(inputText);
const btoa = tpl.btoa(atob);

console.log("Atob: ", JSON.stringify(atob));
console.log("Btoa: ", JSON.stringify(btoa));
