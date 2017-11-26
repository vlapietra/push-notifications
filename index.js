"use strict";

console.log('push notifications test');

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});