import './hello.css';
import hello from 'html-loader!./hello.html';

export default {
  name: 'hello',
  template: hello
}