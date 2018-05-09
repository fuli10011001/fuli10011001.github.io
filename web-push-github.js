var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/cJlojoegOaE:APA91bETLymzMpc8SA34mHPcag9ezYEAv5tY3_9HJCKodsZagCnJdZCh8OVWWI9_J7L33PZdRc-aHjEV8aB7JVKij-e19h0iD7jcmHyb14CMhKk_4G0USLuYVA6htaujaI7876qJVs6n","expirationTime":null,"keys":{"p256dh":"BNytsxRsW0sRKt5H9eVEYzoVt1OfMLm9fgnvAUJABLhMQJyHzBDYMI5wHT8jHY0VepBbH3UWCmFX_L96M3GKyl0","auth":"1tRZL8U_afUjuh5N1QAf9A"}};

var payload = 'Hello World!';

var options = {
  gcmAPIKey: 'AAAAm1IEy6I:APA91bFFE5fvyY6Zi2f8PGLswquzlkqW3iCA9hLKXeZhF0DPFqsc7_2WSr56tBcJCQgyCvSkesM0JaTqLqD_FkAB6eSA5DI2Z3ldrFyIcAYIwhL5Ywgd43Z6PFORSX1wXXf_aLrULybe',
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
