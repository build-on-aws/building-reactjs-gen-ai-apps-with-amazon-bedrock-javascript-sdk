import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandInput extends ListTagsForDeliveryStreamInput {
}
/**
 * @public
 *
 * The output of {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandOutput extends ListTagsForDeliveryStreamOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Lists the tags for the specified delivery stream. This operation has a limit of five
 *          transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListTagsForDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListTagsForDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // ListTagsForDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   ExclusiveStartTagKey: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTagsForDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForDeliveryStreamOutput
 * //   Tags: [ // ListTagsForDeliveryStreamOutputTagList // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   HasMoreTags: true || false, // required
 * // };
 *
 * ```
 *
 * @param ListTagsForDeliveryStreamCommandInput - {@link ListTagsForDeliveryStreamCommandInput}
 * @returns {@link ListTagsForDeliveryStreamCommandOutput}
 * @see {@link ListTagsForDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 */
export declare class ListTagsForDeliveryStreamCommand extends $Command<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: ListTagsForDeliveryStreamCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListTagsForDeliveryStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
