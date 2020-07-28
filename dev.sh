#!/bin/bash
pid=$(lsof -i:3030 |grep \(LISTEN\) |awk '{print $2}')
echo $pid
kill -9 $pid
yarn dev