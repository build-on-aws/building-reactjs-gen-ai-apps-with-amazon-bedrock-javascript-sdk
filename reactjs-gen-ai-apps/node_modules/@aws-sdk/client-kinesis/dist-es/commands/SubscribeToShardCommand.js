import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SubscribeToShardOutputFilterSensitiveLog, } from "../models/models_0";
import { de_SubscribeToShardCommand, se_SubscribeToShardCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class SubscribeToShardCommand extends $Command {
    static getEndpointParameterInstructions() {
        return {
            OperationType: { type: "staticContextParams", value: `data` },
            ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, SubscribeToShardCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "SubscribeToShardCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: SubscribeToShardOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_SubscribeToShardCommand(input, context);
    }
    deserialize(output, context) {
        return de_SubscribeToShardCommand(output, context);
    }
}
