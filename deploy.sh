#!/bin/bash

ftpUser=username
ftpPassword=password
ftpHost=ftp.example.com
ftpPath=/site1/BanglaDateJS

ncftp -u $ftpUser -p $ftpPassword $ftpHost <<EOF
cd $ftpPath

cd $ftpPath/coverage
cd $ftpPath/coverage/lcov-report
rm *.*
cd ..
rmdir $ftpPath/coverage/lcov-report
rm *.*
cd ..
rmdir $ftpPath/coverage 
quit
EOF

ncftpput -R -v -u $ftpUser -p $ftpPassword $ftpHost $ftpPath "coverage"
