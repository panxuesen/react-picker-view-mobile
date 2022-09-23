import 'react-app-polyfill/ie11';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import PickerView from '../.';
// import { PickerView } from 'antd-mobile'

import { createRoot, Root } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <PickerView columns={[['1', '2'], ['a', 'b']]}/>
    </div>
  );
};

const container = document.getElementById('root')

const root:Root = createRoot(container as HTMLElement)

root.render(<App />);
