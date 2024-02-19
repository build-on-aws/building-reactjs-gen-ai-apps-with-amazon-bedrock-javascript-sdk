import{P as u,B as c,L as a}from"./index-fd_rTpfv.js";const p=`You are given the below API Documentation:
{api_docs}
Using this documentation, generate the full API url to call for answering the user question.
You should build the API url in order to get a response that is as short as possible, while still getting the necessary information to answer the question. Pay attention to deliberately exclude any unnecessary pieces of data in the API call.

Question:{question}
API url:`,l=new u({inputVariables:["api_docs","question"],template:p}),_=`${p} {api_url}

Here is the response from the API:

{api_response}

Summarize this response to answer the original question.

Summary:`,w=new u({inputVariables:["api_docs","question","api_url","api_response"],template:_});class h extends c{get inputKeys(){return[this.inputKey]}get outputKeys(){return[this.outputKey]}constructor(e){super(e),Object.defineProperty(this,"apiAnswerChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"apiRequestChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"apiDocs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"question"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output"}),this.apiRequestChain=e.apiRequestChain,this.apiAnswerChain=e.apiAnswerChain,this.apiDocs=e.apiDocs,this.inputKey=e.inputKey??this.inputKey,this.outputKey=e.outputKey??this.outputKey,this.headers=e.headers??this.headers}async _call(e,t){const i=e[this.inputKey],s=await this.apiRequestChain.predict({question:i,api_docs:this.apiDocs},t==null?void 0:t.getChild("request")),r=await(await fetch(s,{headers:this.headers})).text(),n=await this.apiAnswerChain.predict({question:i,api_docs:this.apiDocs,api_url:s,api_response:r},t==null?void 0:t.getChild("response"));return{[this.outputKey]:n}}_chainType(){return"api_chain"}static async deserialize(e){const{api_request_chain:t,api_answer_chain:i,api_docs:s}=e;if(!t)throw new Error("LLMChain must have api_request_chain");if(!i)throw new Error("LLMChain must have api_answer_chain");if(!s)throw new Error("LLMChain must have api_docs");return new h({apiAnswerChain:await a.deserialize(i),apiRequestChain:await a.deserialize(t),apiDocs:s})}serialize(){return{_type:this._chainType(),api_answer_chain:this.apiAnswerChain.serialize(),api_request_chain:this.apiRequestChain.serialize(),api_docs:this.apiDocs}}static fromLLMAndAPIDocs(e,t,i={}){const{apiUrlPrompt:s=l,apiResponsePrompt:o=w}=i,r=new a({prompt:s,llm:e}),n=new a({prompt:o,llm:e});return new this({apiAnswerChain:n,apiRequestChain:r,apiDocs:t,...i})}}export{h as APIChain};
