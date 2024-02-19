import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { AppLayout, SideNavigation } from '@cloudscape-design/components';

export default () => {
    const [activeHref, setActiveHref] = useState("/")
    useEffect(() => {
        setActiveHref("/")
    }, [])



    let navigate = useNavigate()



    return (
        <AppLayout key={1}
            headerSelector="#h"
            toolsHide={true}
            disableContentPaddings={false}
            navigationHide={false}
            navigation={
                <SideNavigation
                    activeHref={activeHref}

                    header={
                        { href: "/", text: "Demos" }
                    }
                    items={
                        [
                            {
                                type: "section", text: "Chat with Amazon Bedrock", items: [
                                    { type: "link", href: "/llm", text: "Chat Q&A" },
                                    { type: "link", href: "/chat", text: "Chat with Memory" },
                                ]
                            },
                            { type: "divider" },

                            {
                                type: "section", text: "Knowledge Bases for Amazon Bedrock", items: [
                                    { type: 'link', text: `Amazon Bedrock Retrieve => LLM`, href: `/retrieve` },
                                    { type: 'link', text: `Amazon Bedrock Retrieve & Generate`, href: `/retrieveandgenerate` }
                                ]
                            },
                            //{ type: "divider" },
                            //{type: "section", text: "Agents for Amazon Bedrock", items: [
                            //    { type: 'link', text: `Sagemaker / Bedrock Support`, href: `/bedrockagent` },
                            //]
                        //}
                        ]
                    }
                    onFollow={event => {
                        if (!event.detail.external) {
                            event.preventDefault();
                            console.log(event.detail.href)
                            setActiveHref(event.detail.href)
                            navigate(event.detail.href)
                        }
                    }}
                />
            }
            content={<Outlet />}
        />)
}