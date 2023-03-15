import React from 'react';
import ReactDOM from 'react-dom/client';
import {Converter} from './components/Converter/index';
const input = document.getElementById('root') as Element | DocumentFragment;
const root = ReactDOM.createRoot(input);
root.render(<Converter/>);      