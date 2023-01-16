import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faRefresh } from '@fortawesome/free-solid-svg-icons';
import './css/index.css';
import { displayTodos } from './js/todo.js';

// Using of the icon we want from fontawesome
library.add(faRefresh, faArrowLeft);
dom.watch();

displayTodos();
