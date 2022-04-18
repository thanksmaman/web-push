var push = require('web-push');
let vapidkeys = {
    publicKey: 'BDYSunqmi-4FMD6G7UXsA8tMJIZVUx3HlkT0qXB_uQSPxDMBbHBxR62RsLuysuTAxbBxFfM6tdUBxefQgd-17Wc',
    privateKey: 't1lY6hYcQfXNSi1CLSum1TpIMB5_RJ_V_tgxHaRZSqc'
  }
  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey,vapidkeys.privateKey);
   let sub = {};

   push.sendNotification(sub,'test Message');

