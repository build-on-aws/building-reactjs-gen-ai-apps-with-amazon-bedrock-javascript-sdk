# Private Assistant With LLM Agent And Whatsapp

Private Assistant is a WhatsApp-integrated app that lets you chat naturally with an LLM hosted on Amazon Bedrock. It can also transcribe voice notes.

Your data sent to this app will be stored securely in your AWS account and will remain private. Sharing private information on WhatsApp is not recommended due to the lack of data security guarantees.

And, of course! ... ready to deploy using [AWS Cloud Development Kit](https://aws.amazon.com/cdk).

> 👩🏻‍🎤 **Something cool:** This assistant app can understands multiple languages.

![Digrama parte 1](/imagenes/gif_01.gif)


✅ **AWS Level**: Intermediate - 200   

**Prerequisites:**

- [AWS Account](https://aws.amazon.com/resources/create-account/?sc_channel=el&sc_campaign=datamlwave&sc_content=cicdcfnaws&sc_geo=mult&sc_country=mult&sc_outcome=acq) 
-  [Foundational knowledge of Python](https://catalog.us-east-1.prod.workshops.aws/workshops/3d705026-9edc-40e8-b353-bdabb116c89c/) 

💰 **Cost to complete**: 
- [Amazon Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/)
- [Amazon Lambda Pricing](https://aws.amazon.com/lambda/pricing/)
- [Amazon Transcribe Pricing](https://aws.amazon.com/transcribe/pricing/)
- [Amazon DynamoDB Pricing](https://aws.amazon.com/dynamodb/pricing/)
- [Amazon APIGateway Pricing](https://aws.amazon.com/api-gateway/pricing/)
- [Whatsapp pricing](https://developers.facebook.com/docs/whatsapp/pricing/)

## Step 0: Activate WhatsApp account Facebook Developers

1- [Get Started with the New WhatsApp Business Platform](https://www.youtube.com/watch?v=CEt_KMMv3V8&list=PLX_K_BlBdZKi4GOFmJ9_67og7pMzm2vXH&index=2&t=17s&pp=gAQBiAQB)

2- [How To Generate a Permanent Access Token — WhatsApp API](https://www.youtube.com/watch?v=LmoiCMJJ6S4&list=PLX_K_BlBdZKi4GOFmJ9_67og7pMzm2vXH&index=1&t=158s&pp=gAQBiAQB)

3- [Get started with the Messenger API for Instagram](https://www.youtube.com/watch?v=Pi2KxYeGMXo&list=PLX_K_BlBdZKi4GOFmJ9_67og7pMzm2vXH&index=5&t=376s&pp=gAQBiAQB)


## Step 1: Previous Configuration

✅ **Clone the repo**

```
git clone https://github.com/build-on-aws/private-assistant-llm-agent-and-whatsapp.git
```

✅ **Go to**: 

```
cd private-assistant
```

✅ **Create The Virtual Environment**: by following the steps in the [README](/private-assistant/README.md)

```
python3 -m venv .venv
```

```
source .venv/bin/activate
```
for windows: 

```
.venv\Scripts\activate.bat
```

✅ **Install The Requirements**:


```
pip install -r requirements.txt
```

✅ **Set Values**:

In [private_assistant_stack.py](/private-assistant/private_assistant/private_assistant_stack.py) edit this line with the whatsapp Facebook Developer app number: 

`
DISPLAY_PHONE_NUMBER = 'YOU-NUMBER'
`

This agent maintains the history of the conversation, which is stored in the `session_tabble` Amazon DynamoDB table, also have control session management in the `session_active_tabble` Amazon DynamoDB table, and sets the time [here](/private-assistant/private_assistant/lambdas/code/langchain_agent_text/lambda_function.py) in this line:


`
if diferencia > 300:  #session time in seg
`

> **Tip:** [Kenton Blacutt](https://github.com/KBB99), an AWS Associate Cloud App Developer, collaborated with Langchain, creating the [Amazon Dynamodb based memory class](https://github.com/langchain-ai/langchain/pull/1058) that allows us to store the history of a langchain agent in an [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?sc_channel=el&sc_campaign=genaiwave&sc_content=working-with-your-live-data-using-langchain&sc_geo=mult&sc_country=mult&sc_outcome=acq).


## Step 2: Deploy The App With CDK.


![Digrama parte 1](/imagenes/arquitectura.png)

Follow steps [here](/private-assistant/README.md)

✅ **Synthesize The Cloudformation Template With The Following Command**:

```
cdk synth
```

✅🚀 **The Deployment**:

```
cdk deploy
```

✅ **Review what is deployed in the stack:** 

- Go to the [AWS Cloudformation console](console.aws.amazon.com/cloudformation), select the region where you deployed and click on `PrivateAssistantStack`:

Then go to the resources tab and explore what's deployed.

## Step 3: Activate WhatsApp Messaging In The App

Go to AWS Secrets Manager and edit the WhatsApp settings and replace them with Facebook Developer settings.

![Digrama parte 1](/imagenes/secret.png)

## Step 4: Configure Webhook In Facebook Developer Application


![Digrama parte 1](/imagenes/webhook.png)

## Let´s try!

It’s your assistant. Ask anything you want!... Remember, the conversation history is saved for uninterrupted chatting. 

![Digrama parte 1](/imagenes/gif_01.gif)

----

## ¡Gracias!

---

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
