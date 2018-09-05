#! /usr/bin/env node

const { exec } = require('child_process')
const { Gpio } = require('pigpio');

const IO_PIN = 11;

const button = new Gpio(
  IO_PIN,
  {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  },
);

button.on('interrupt', level => {
  console.log('Shutting down system');
  exec('sudo /sbin/shutdown -h now');
});
