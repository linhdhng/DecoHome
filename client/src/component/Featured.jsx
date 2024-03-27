import { useState } from "react";
//Featured Product of the week

function Featured() {
    var settings = {
        'async': true,
        'crossDomain': true,
        'url': 'https://sso.auth.wayfair.com/oauth/token',
        'method': 'POST',
        'headers': {
          'content-type': 'application/json',
          'cache-control': 'no-cache',
        },
        'data': {
          'grant_type':'client_credentials',
          'client_id': client_id,
          'client_secret': client_secret,
          'audience': 'https://sandbox.api.wayfair.com/'
        }
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

export default Featured;
