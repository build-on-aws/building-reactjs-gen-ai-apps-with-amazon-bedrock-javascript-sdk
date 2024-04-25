import { AmplifyProjectInfo, AmplifyRootStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyRootStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    const authRole = resources.authRole;
    const basePolicies = Array.isArray(authRole.policies) ? authRole.policies : [authRole.policies];
    authRole.policies = [ ...basePolicies,
      { policyName: "amplify-permissions-custom-resources",
        policyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Resource: "*",
              Action: ["bedrock:Invoke*", "bedrock:List*", "bedrock:Retrieve*"],
              Effect: "Allow",
            }
          ]
        }
      }
    ]
}
