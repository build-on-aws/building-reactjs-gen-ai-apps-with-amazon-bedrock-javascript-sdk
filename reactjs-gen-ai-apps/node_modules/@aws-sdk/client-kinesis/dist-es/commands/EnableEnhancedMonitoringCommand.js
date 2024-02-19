import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { de_EnableEnhancedMonitoringCommand, se_EnableEnhancedMonitoringCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class EnableEnhancedMonitoringCommand extends $Command {
    static getEndpointParameterInstructions() {
        return {
            OperationType: { type: "staticContextParams", value: `control` },
            StreamARN: { type: "contextParams", name: "StreamARN" },
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
        this.middlewareStack.use(getEndpointPlugin(configuration, EnableEnhancedMonitoringCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisClient";
        const commandName = "EnableEnhancedMonitoringCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_EnableEnhancedMonitoringCommand(input, context);
    }
    deserialize(output, context) {
        return de_EnableEnhancedMonitoringCommand(output, context);
    }
}
