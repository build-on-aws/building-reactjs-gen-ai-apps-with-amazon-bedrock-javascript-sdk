import { useState } from "react"
import { Flashbar } from "@cloudscape-design/components"
import { forwardRef, useImperativeHandle } from 'react'

export default forwardRef(({  }, ref) => {
    const [items, setItems] = useState([])
    useImperativeHandle(ref, () => ({
        showMessage(e, messageType, messageTitle, messageText) {
            setItems(items => {
                const n = items.length
                return [...items, {
                type: messageType,
                dismissible: true,
                dismissLabel: "Dismiss message",
                content: messageText,
                header: messageTitle,
                id: n,
                onDismiss: () =>
                    setItems(items =>
                        items.filter(item => item.id !== n)
                    )
            }]}
            )
        }
    }))


    return (
        <Flashbar
            items={items}
            i18nStrings={{
                ariaLabel: "Notifications",
                notificationBarAriaLabel:
                    "View all notifications",
                notificationBarText: "Notifications",
                errorIconAriaLabel: "Error",
                warningIconAriaLabel: "Warning",
                successIconAriaLabel: "Success",
                infoIconAriaLabel: "Info",
                inProgressIconAriaLabel: "In progress"
            }}
            stackItems
        />
    );
})