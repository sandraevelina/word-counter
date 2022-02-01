import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TextPaster from './Inputter';
import TextAnalyser from './Analyser';

const App = () => {
  const [message, setMessage] = React.useState<string>('');

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<TextPaster sendText={(text) => setMessage(text)} />}
          />
          <Route path="analyse" element={<TextAnalyser text={message} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
