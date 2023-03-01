import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Aside } from './pages/Home/components/Aside';
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
import { Router } from './Router';
import { CoffeeContextProvider } from './contexts/CoffeeContext';
import { ClientContextProvider } from './contexts/ClientContext';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <ClientContextProvider>
            <Router /> 
          </ClientContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )

}


