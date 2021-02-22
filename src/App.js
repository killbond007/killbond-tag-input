import React,{useState} from "react";

import SelectOption from "./components/selectbox/SelectOption";
import SelectBox from "./components/selectbox/SelectBox";

import colors from './colors.json'

import './App.css';

function App() {
    const [selectedValues,setSelectedValues]=useState(['Blue','Red'])

    const  _onSelect=(name,values)=>setSelectedValues(values)

  return (
    <div className="App">
      <header className="App-header">
          <SelectBox width={'400px'} isCreatable={true} isSearchable={true} isMulti={true} value={selectedValues} onSelect={_onSelect}>
              {colors.map(({name,hex},i)=><SelectOption key={i} value={name} label={name} hex={hex}/>)}
          </SelectBox>
      </header>
    </div>
  );
}

export default App;
