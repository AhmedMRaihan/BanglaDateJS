#!/bin/bash

ftpUser="username"
ftpPassword="password"
ftpHost=ftp.example.com
ftpPath=/home/BanglaDateJS

ncftpput -u $ftpUser -p $ftpPassword -R $ftpHost $ftpPath "coverage"
exit 
