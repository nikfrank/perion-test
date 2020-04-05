import React, { useState } from 'react';
import './App.css';

import {
  areBracketsEven,
  areWordsAnagrams,
  areStringsAnagrams,
} from './solutions';

function App() {
  const [ brackets, setBrackets ] = useState('{[()][]}');
  
  const [ word1, setWord1 ] = useState('Tom Marvolo Riddle');
  const [ word2, setWord2 ] = useState('I am Lord Voldemort');
  
  const [ string1, setString1 ] = useState('coronavirus');
  const [ string2, setString2 ] = useState('carnivorous');
  
  return (
    <div className="App">
      
      <h3>Brackets Even</h3>
      <input value={brackets} onChange={e=> setBrackets(e.target.value)}/>
      <p>are brackets even? {areBracketsEven(brackets) ? 'yes' : 'no'}</p>

      <h3>Word Anagrams</h3>
      <h5>Ignores whitespace, non-latin chars, case</h5>
      <input value={word1} onChange={e=> setWord1(e.target.value)}/>
      <input value={word2} onChange={e=> setWord2(e.target.value)}/>
      <p>are words anagrams? {areWordsAnagrams(word1, word2) ? 'yes' : 'no'}</p>

      <h3>String Anagrams</h3>
      <h5>Whitespace, non-latin char and case sensitive</h5>
      <input value={string1} onChange={e=> setString1(e.target.value)}/>
      <input value={string2} onChange={e=> setString2(e.target.value)}/>
      <p>are strings anagrams? {areStringsAnagrams(string1, string2) ? 'yes' : 'no'}</p>


      <h3>See <code>./src/solutions.js</code> for implementation, <code>./src/unit.test.js</code> for tests</h3>
    </div>
  );
}

export default App;
