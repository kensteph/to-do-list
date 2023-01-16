import { displayTodos } from './js/todo';
import './css/index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faRefresh } from '@fortawesome/free-solid-svg-icons';

// Using of the icon we want from fontawesome
library.add(faRefresh, faArrowLeft);
dom.watch();

displayTodos();
