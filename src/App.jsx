import {ThemeProvider} from './Contaxt/ThemeContaxt';
import './App.css';
import Container from './Components/Container';
import { UserProvider } from './Contaxt/UserContext';
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
      <Container/>
    </UserProvider>
    </ThemeProvider>
  );
}

export default App;
