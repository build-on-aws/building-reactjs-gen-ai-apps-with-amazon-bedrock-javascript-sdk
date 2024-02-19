import { ConsoleLogger } from 'aws-amplify/utils';

const getLogger = (category) => new ConsoleLogger(`AmplifyUI:${category}`);

export { getLogger };
