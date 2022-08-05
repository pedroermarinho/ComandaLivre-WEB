import React from 'react';
import { Button } from 'antd';
import './App.less';
import { LayoutApp } from "./Presentation/components/Layout/Index";

function App() {
  return (
      <LayoutApp>
          <Button type="primary">Button</Button>
      </LayoutApp>
  );
}

export default App;
