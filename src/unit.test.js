import {
  areBracketsEven,
  areWordsAnagrams,
  areStringsAnagrams,
} from './solutions';

describe('areBracketsEven', ()=>{
  // this could use more test cases
  
  test('if the brackets are even: true', () => {
    const input = '{[()][]{}}';

    expect( areBracketsEven(input) ).toEqual(true);
  });
  
  test('if the brackets are odd: false', () => {
    const input = '{[(])[]{}}';

    expect( areBracketsEven(input) ).toEqual(false);
  });

  test('if the brackets are unclosed: false', () => {
    const input = '{[()][]{}';

    expect( areBracketsEven(input) ).toEqual(false);
  });
});

describe('areWordsAnagrams', ()=>{
  test('if the letters multiply to the same thing: true', ()=>{
    const input1 = 'mother in law';
    const input2 = 'woman hitler';

    expect( areWordsAnagrams(input1, input2) ).toEqual(true);
  });

  test('if the letters multiply to different values: false', ()=>{
    const input1 = 'menachem begin';
    const input2 = 'wanted by the british for terrorism';

    expect( areWordsAnagrams(input1, input2) ).toEqual(false);

  });
});

describe('areStringsAnagrams', ()=>{
  test('if the strings use the same chars: true', ()=>{
    const input1 = 'a Gentleman.';
    const input2 = 'eleGant man.';

    expect( areStringsAnagrams(input1, input2) ).toEqual(true);    
  });

  test('if the strings use different chars: false', ()=>{
    const input1 = 'mother in law';
    const input2 = 'woman hitler';

    expect( areStringsAnagrams(input1, input2) ).toEqual(false); // fails on whitespace
  });
});
