import { useState } from "react";
import { FileUpload, FormField, Header, Button, SpaceBetween } from "@cloudscape-design/components";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";
//import * as pdfjs from "pdfjs-dist/legacy/build/pdf.min.mjs"
//import * as pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.min.mjs"
//const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs")
//const pdfjsWorker = await import("pdfjs-dist/legacy/build/pdf.worker.min.mjs")

export default () => {
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(false)

    const handleOnChange = ({ detail }) => {
        console.log(detail.value)
        setValue(detail.value)
    }
    const processDocuments = () => {
        value.forEach(async file => {
            console.log(file)
            const reader = new FileReader()
            const blob = new Blob([file], { type: file.type })

            const loader = new WebPDFLoader(blob);
            console.log("loader:", loader)
            loader.load()
 /*            if (file.type == "application/pdf") {

                reader.onload = e => {
                    console.log(e.target.result)

                }

                reader.readAsText(file)
                //console.log(blob)
                //const blob = await file.arrayBuffer()
                //const loader = new PDFLoader(blob)

                //const loader = new WebPDFLoader(blob)
                //const docs = await loader.load()
                //console.log(docs)

                 } */
            })
    }

    return (
        <Header variant="h1"
            actions={value.length ? <SpaceBetween direction="horizontal" size="xs">
                <Button fullWidth key={2} loading={loading} onClick={processDocuments} variant="primary" >Procesar Documentos</Button>
            </SpaceBetween> : null}
        >
            <FormField key={1}
                label="Documents (pdf, doc, txt)"
                description="Choose documents to query"
            >
                <FileUpload
                    onChange={handleOnChange}
                    value={value}
                    i18nStrings={{
                        uploadButtonText: e =>
                            e ? "Choose files" : "Choose file",
                        dropzoneText: e =>
                            e
                                ? "Drop files to upload"
                                : "Drop file to upload",
                        removeFileAriaLabel: e =>
                            `Remove file ${e + 1}`,
                        limitShowFewer: "Show fewer files",
                        limitShowMore: "Show more files",
                        errorIconAriaLabel: "Error"
                    }}
                    multiple
                    showFileLastModified
                    showFileSize
                    showFileThumbnail
                    tokenLimit={3}
                />
            </FormField>
        </Header>


    )
}