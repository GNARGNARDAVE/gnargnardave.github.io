---
layout: default
title: HOME
---

# Hi Todd
![alt text](https://scontent.fphl2-1.fna.fbcdn.net/v/t1.0-9/28576670_10155371965902544_9201992672083959850_n.jpg?oh=f12ad52b58f45eea20271c2b2582d182&oe=5B73A64A "GIMME YOUR MONEY")

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, enim eget consequat luctus, justo massa faucibus eros, blandit fermentum est nisi in nisi. Aliquam vehicula vel dolor id porttitor. Sed sed ante vel eros viverra bibendum in sed sapien. Integer ultricies sapien in massa lacinia, et ornare arcu dignissim. In hac habitasse platea dictumst. Fusce semper ligula eu neque ornare, sodales varius sem finibus. Fusce dignissim orci nec sagittis elementum.

Ut consequat, neque ac congue volutpat, purus sem volutpat metus, eget dignissim diam lorem vitae eros. Proin vestibulum ut justo at sodales. Duis dignissim dictum consequat. Praesent id sollicitudin enim. Morbi dapibus luctus lectus, vitae bibendum tortor dignissim sit amet. Aenean nec leo dui. Praesent efficitur, arcu et molestie sagittis, mauris mauris molestie ipsum, id pellentesque libero leo et nisl.


<button id="demo-show-snackbar" class="mdl-button mdl-js-button mdl-button--raised" type="button">Show My Message</button>
<div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
  <div class="mdl-snackbar__text"></div>
  <button class="mdl-snackbar__action" type="button"></button>
</div>
<script>
(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-snackbar-example');
  var showSnackbarButton = document.querySelector('#demo-show-snackbar');
  var handler = function(event) {
    showSnackbarButton.style.backgroundColor = '';
  };
  showSnackbarButton.addEventListener('click', function() {
    'use strict';
    showSnackbarButton.style.backgroundColor = '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var data = {
      message: 'Thank you.',
      timeout: 2000,
      actionHandler: handler,
      actionText: 'Undo'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());
</script>