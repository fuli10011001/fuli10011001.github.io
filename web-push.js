var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/eoNE_1CRBdg:APA91bGyza9kVjeBrJ0odgOgQsroB9SmayFj4Z79QZwwbVsbiaHR3hSFSKcCjB41AvqtHcMNUAAkCY6PLNVEJ-0-BJ57H9p09FCJlnLQSw6mbPCul3ZPP8h-0DtpIOc9YqWhUIwt0iG4","expirationTime":null,"keys":{"p256dh":"BKDB2-6ECSsLEfTg3KhjNBJWP6olcvZia_ty6yxDzagGI5YZxCOCsm7ePZGSyPwC3Q2rr46BizJI_dniENu69i4","auth":"lMKfZeI5PBYO9TBScBhvjg"}};

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