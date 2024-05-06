import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { useNavigate } from "react-router-dom";



const Menu = ({ signOut, groups, ...user }) => {
  let navigate = useNavigate()

  const menuFollow = (e) => {
    console.log("Menu Follow:", e)
    e.preventDefault();
    if (e.detail?.href) {
      navigate(e.detail.href)
    }
  }


  const itemClick = (e) => {
    console.log("Logout:", e)
    console.log("User:", user)
    e.preventDefault();
    if (e.detail.id == "signout") signOut()
  }

  return (
    <TopNavigation

      identity={{
        onFollow: (() => { navigate("/") }),
        title: <div className='title'>Amazon Bedrock Javascript</div>,

      }}
      utilities={[
        {
          type: "button", text: "Chat With Amazon Bedrock", 
          href: "https://aws.amazon.com/bedrock/", external: true, externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "button", text: "Langchain.js", 
          href: "https://js.langchain.com/docs/get_started/introduction", 
          external: true, externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "button", text: "This repo", 
          href: "https://github.com/build-on-aws/building-reactjs-gen-ai-apps-with-amazon-bedrock-javascript-sdk", 
          external: true, externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "menu-dropdown",
          text: "Authors",
          onItemClick: ((e) => { itemClick(e) }),
          iconName: "user-profile",
          items: [
            {
              id: "Eli",
              text: "Elizabeth Fuentes Leone",
              href: "https://www.linkedin.com/in/lizfue/",
              external: true,
              externalIconAriaLabel:
                " (opens in new tab)"
            },
            {
              id: "Kike",
              text: "Enrique Rodríguez",
              href: "https://www.linkedin.com/in/enriquerodriguezgarrido/",
              external: true,
              externalIconAriaLabel:
                " (opens in new tab)"
            },
          ]

        },
        {
          type: "menu-dropdown",
          text: "You",
          onItemClick: ((e) => { itemClick(e) }),
          iconName: "user-profile",
          items: [
            { id: "email", text: user.signInDetails?.loginId },
            {
              id: "signout", text: "Salir"
            }
          ]

        },



      ]}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />

  );
}


export default Menu