#!/bin/bash

pkill -9 node
node server.js >serv.log &
