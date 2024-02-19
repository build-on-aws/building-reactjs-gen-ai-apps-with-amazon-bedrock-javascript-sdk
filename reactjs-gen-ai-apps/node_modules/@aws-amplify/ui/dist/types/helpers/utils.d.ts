import { ConsoleLogger as Logger } from 'aws-amplify/utils';
type LoggerCategory = 'Auth' | 'AccountSettings' | 'Geo' | 'Notifications' | 'Storage';
export declare const getLogger: (category: LoggerCategory) => Logger;
export {};
