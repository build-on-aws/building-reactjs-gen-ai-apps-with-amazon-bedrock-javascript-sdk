import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'

import App from './App.jsx'
import './index.css'
import "@cloudscape-design/global-styles/index.css"
import "@aws-amplify/ui-react/styles.css"
import { ThemeProvider,createTheme, defaultTheme } from "@aws-amplify/ui-react";



import awsconfig from './aws-exports'
Amplify.configure(awsconfig);


const studioTheme = createTheme(defaultTheme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={studioTheme}>
  <App />
</ThemeProvider>
)
