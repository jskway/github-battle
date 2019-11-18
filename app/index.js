import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemeProvider } from './contexts/theme';

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  // React Element,
  <App />,
  // Where to render the Element to
  document.getElementById('app')
)
