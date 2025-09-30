#!/bin/bash
rm -rf /var/www/dev/* && tar xvf page.tar.gz --strip-components=1 -C /var/www/dev/
