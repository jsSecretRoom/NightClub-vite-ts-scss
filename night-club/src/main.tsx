import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import ReduxStor from './redux/ReduxStor.tsx'

import App from './routes/App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={ReduxStor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
