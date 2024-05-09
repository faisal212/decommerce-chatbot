import r2wc from '@r2wc/react-to-web-component';
import Greeting from './components/Greeting'; // Adjust the path to your actual React component
import HelloWorld from './components/HelloWorld';
import MainAiChatBox from './components/MainAiChatBox';

const WebGreeting = r2wc(Greeting, {
  props: { name: 'string' }, // Specify the expected prop types
});
const WebHelloWorld = r2wc(HelloWorld, {
  props: { name: 'string' }, // Specify the expected prop types
});
const WebMainChatBox = r2wc(MainAiChatBox, {
  props: { type: 'string' }, // Specify the expected prop types
});

customElements.define('web-greeting', WebGreeting);
customElements.define('web-hello-world', WebHelloWorld);
customElements.define('web-main-chatbox', WebMainChatBox);
