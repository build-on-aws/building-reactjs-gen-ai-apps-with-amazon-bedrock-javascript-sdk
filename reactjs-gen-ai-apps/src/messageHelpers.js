export const getMessageList = (messages) => {
    const formatted = messages.map(msg => ({ role: msg.sender, content: [{ type: "text", text: msg.text }] }))
    return formatted
}



export const handleStreamingTokenResponse = ({ type, content_block, delta }, llmUpdate, llmEnd, setLoading ) => {
    let text = ""
    if (type === "content_block_start") text = content_block.text
    if (type === "content_block_delta") text = delta.text
    llmUpdate(msg => msg + text)//.replace(/\n/g, "<br />"))

    if (type === "content_block_stop") {
        llmUpdate(msg => {
            llmEnd(prev => [...prev,{ role: "assistant", content: [{ type: "text", text: msg }] }])
            return ""
        })
        setLoading(false)
    }
}


const readAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            return resolve({ data: fileReader.result, name: file.name, size: file.size, type: file.type });
        }
        fileReader.readAsDataURL(file);
    })
}

const loadImages = async (files) => {
    let images = await Promise.all(files.map(f => { return readAsDataURL(f) }));
    
    return images

}

export const buildContent = async (text, files=[]) => {
    let content = [{ type: "text", text: text }]
    if (files.length) {
        const b64images = await loadImages(files)

        const imgContent = b64images.map(b64i => { 
            let imageBytes = b64i.data.split(",")[1]
            return { "type": "image", "source": { "type": "base64", "media_type": "image/jpeg", "data": imageBytes } }})


        content = text=="" ? imgContent: [...imgContent, ...content]
    }
    return content
}