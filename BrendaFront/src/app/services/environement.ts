import { StompConfig } from '@stomp/ng2-stompjs';

export const envCons = {
    BACK_URL : 'http://192.168.56.1:8080/'
};
export interface WsMessage {
id: string;
name: string;
description: string;
deadLine: string;
}
export const stompConfig: StompConfig = {
    url: 'ws://localhost:61614/stomp',
    headers: {
      login: 'admin',
      passcode: 'admin'
      },
    heartbeat_in: 0,
    heartbeat_out: 20000,
    reconnect_delay: 5000,
    debug: true
  } ;
