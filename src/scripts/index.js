import 'reset-css';
import '@fortawesome/fontawesome-free/js/all'
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}