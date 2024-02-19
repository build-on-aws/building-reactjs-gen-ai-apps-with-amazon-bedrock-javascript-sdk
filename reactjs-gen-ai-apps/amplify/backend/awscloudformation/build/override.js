"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.override = void 0;
function override(resources, amplifyProjectInfo) {
    const authRole = resources.authRole;
    const basePolicies = Array.isArray(authRole.policies) ? authRole.policies : [authRole.policies];
    authRole.policies = [...basePolicies,
        { policyName: "amplify-permissions-custom-resources",
            policyDocument: {
                Version: "2012-10-17",
                Statement: [
                    {
                        Resource: "*",
                        Action: ["bedrock:InvokeModel*", "bedrock:List*", "bedrock:Retrieve*"],
                        Effect: "Allow",
                    }
                ]
            }
        }
    ];
}
exports.override = override;
