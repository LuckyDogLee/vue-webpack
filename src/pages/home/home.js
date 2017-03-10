import './home.css';
import home from 'html-loader!./home.html';
import Hello from '../../components/hello/hello.js';

export default {
  name: 'home',
  components: {
    'hello': Hello
  },
  template: home,
  data: function() {
    return {
      msg: 'Home Page~'
    }
  }
}