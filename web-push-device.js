var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/evWX38faowA:APA91bGIsjb7NkikOqF0EIhynG0fSgdvs_Mi19unagLctvFn7-nPbW1QF_4SPPpZ8HxCh1Q0Y9Rp8jYCgViDQ4YC16xtedG3PArJ7d18rw_ol2TwV85D_5hK_GMYLbvlB0qVdgg5bqdW","expirationTime":null,"keys":{"p256dh":"BE7O3l7S_nttBi2yUjW0xLGw59Qz3zl3fpeaO1E3JyvQCp-vL62K1JKkurwJmpFBxuTBFOiCckqskHn1tt_46dg=","auth":"5owIs9EjczMd2kg-iK6Dlg=="}};

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
