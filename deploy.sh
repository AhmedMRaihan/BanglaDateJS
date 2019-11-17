#!/bin/bash

#ftpUser="username"
#ftpPassword="password"
#ftpHost=ftp.example.com
#ftpPath=/home/BanglaDateJS
ncftpput -u $ftpUser -p $ftpPassword $ftpHost
cd $ftpPath

cd coverage
cd lcov-report
rm *.*
cd ..
rmdir lcov-report
rm *.*
cd ..
rmdir coverage 
quit

ncftpput -R -v -u $ftpUser -p $ftpPassword $ftpHost $ftpPath "coverage"
