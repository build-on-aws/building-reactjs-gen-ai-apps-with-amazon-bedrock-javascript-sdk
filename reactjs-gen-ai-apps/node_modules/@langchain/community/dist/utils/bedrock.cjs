"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedrockLLMInputOutputAdapter = void 0;
/**
 * A helper class used within the `Bedrock` class. It is responsible for
 * preparing the input and output for the Bedrock service. It formats the
 * input prompt based on the provider (e.g., "anthropic", "ai21",
 * "amazon") and extracts the generated text from the service response.
 */
class BedrockLLMInputOutputAdapter {
    /** Adapter class to prepare the inputs from Langchain to a format
    that LLM model expects. Also, provides a helper function to extract
    the generated text from the model response. */
    static prepareInput(provider, prompt, maxTokens = 50, temperature = 0, stopSequences = undefined, modelKwargs = {}, bedrockMethod = "invoke") {
        const inputBody = {};
        if (provider === "anthropic") {
            inputBody.prompt = prompt;
            inputBody.max_tokens_to_sample = maxTokens;
            inputBody.temperature = temperature;
            inputBody.stop_sequences = stopSequences;
        }
        else if (provider === "ai21") {
            inputBody.prompt = prompt;
            inputBody.maxTokens = maxTokens;
            inputBody.temperature = temperature;
            inputBody.stopSequences = stopSequences;
        }
        else if (provider === "meta") {
            inputBody.prompt = prompt;
            inputBody.max_gen_len = maxTokens;
            inputBody.temperature = temperature;
        }
        else if (provider === "amazon") {
            inputBody.inputText = prompt;
            inputBody.textGenerationConfig = {
                maxTokenCount: maxTokens,
                temperature,
            };
        }
        else if (provider === "cohere") {
            inputBody.prompt = prompt;
            inputBody.max_tokens = maxTokens;
            inputBody.temperature = temperature;
            inputBody.stop_sequences = stopSequences;
            if (bedrockMethod === "invoke-with-response-stream") {
                inputBody.stream = true;
            }
        }
        return { ...inputBody, ...modelKwargs };
    }
    /**
     * Extracts the generated text from the service response.
     * @param provider The provider name.
     * @param responseBody The response body from the service.
     * @returns The generated text.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static prepareOutput(provider, responseBody) {
        if (provider === "anthropic") {
            return responseBody.completion;
        }
        else if (provider === "ai21") {
            return responseBody?.completions?.[0]?.data?.text ?? "";
        }
        else if (provider === "cohere") {
            return responseBody?.generations?.[0]?.text ?? responseBody?.text ?? "";
        }
        else if (provider === "meta") {
            return responseBody.generation;
        }
        // I haven't been able to get a response with more than one result in it.
        return responseBody.results?.[0]?.outputText;
    }
}
exports.BedrockLLMInputOutputAdapter = BedrockLLMInputOutputAdapter;
