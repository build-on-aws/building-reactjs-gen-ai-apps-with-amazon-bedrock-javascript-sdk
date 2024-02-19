import { Reachability } from '@aws-amplify/core/internals/utils';
import { loadNetInfo } from '@aws-amplify/react-native';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ReachabilityMonitor = new Reachability().networkMonitor(loadNetInfo());

export { ReachabilityMonitor };
//# sourceMappingURL=index.native.mjs.map
