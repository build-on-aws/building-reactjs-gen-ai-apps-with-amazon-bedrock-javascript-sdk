import { Reachability } from '@aws-amplify/core/internals/utils';
import NetInfo from '@react-native-community/netinfo';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ReachabilityMonitor = () => new Reachability().networkMonitor(NetInfo);

export { ReachabilityMonitor };
//# sourceMappingURL=index.native.mjs.map
