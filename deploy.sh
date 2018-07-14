#!/bin/bash

#ftpUser="username"
#ftpPassword="password"
#ftpHost=ftp.example.com
#ftpPath=/home/BanglaDateJS

ncftpput -R -v -u $ftpUser -p $ftpPassword $ftpHost $ftpPath "coverage"
