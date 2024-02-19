
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useEffect, useState } from "react"

import './App.css'
import Menu from "./Menu"
import Layout from './Layout'
import Llm from './LLM'
import Chat from "./Chat"
import { getModel } from "./llmLib";
import BedrockKBAndGenerate from "./BedrockKBAndGenerate"
import BedrockKBRetrieve from "./BedrockKBRetrieve"


const App = ({ signOut, user }) => {
  const [llm, setllm] = useState({}) 
  
  useEffect(() => {
    if (user?.userId){
      getModel().then(model => setllm(model))
    }
  }, [user])



  const router = createBrowserRouter([

    {
      path: "/",
      errorElement: <div>something went wrong!</div>,
      element: <Struct signOut={signOut}  {...user} />,
      children: [
        { path: "llm", element: <Llm llm={llm} /> },
        { path: "chat", element: <Chat llm={llm} /> },
        { path: "retrieveandgenerate", element: <BedrockKBAndGenerate llm={llm} /> },
        { path: "retrieve", element: <BedrockKBRetrieve llm={llm} /> }

      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

const Struct = ({ signOut, ...user }) =>
  [
    <Menu key={1} signOut={signOut} {...user}></Menu>,
    <Layout key={2} ></Layout>
  ]


// Disable sign-up in withAuthenticator

/// The withAuthenticator HOC injects authentication props and handles the authentication flow. 
/// By passing {hideSignUp: true}, it will hide the sign-up option and only show sign-in. 

export default withAuthenticator(App, {
  hideSignUp: true
})