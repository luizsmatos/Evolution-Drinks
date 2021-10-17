import React from 'react';
import AppProvider from './AppContext/Provider';
import Content from './components/Content';

function App() {
  return (
    <>
      <AppProvider>
        <Content />
      </AppProvider>
    </>
  );
}

export default App;
