import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material'

import ReactDOM from 'react-dom';

import { BodyWidget } from './components/BodyWidget';
import { Application } from './Application';

import './main.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2f2f2f',
      paper: '#2f2f2f',
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bfbfbf'
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  var app = new Application();
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BodyWidget app={app} />
    </ThemeProvider>,
    document.querySelector('#application'),);
});
