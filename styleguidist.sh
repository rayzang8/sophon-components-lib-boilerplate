#!/bin/bash
pid=$(lsof -i:6060 |grep \(LISTEN\) |awk '{print $2}')
echo $pid
kill -9 $pid
yarn start