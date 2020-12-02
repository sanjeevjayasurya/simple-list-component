import React from 'react'
import { hugeList } from './components/Faker'
import { FixedSizeList } from 'react-window'

function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={hugeList[index].avatar}
        alt={hugeList[index].name}
        width={50}
      />
      <p> {hugeList[index].name} - {hugeList[index].email} </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={hugeList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default App;
