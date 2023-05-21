#!/bin/bash
# mount proc -o remount,hidepid=0
# systemctl restart polkit.service
php artisan optimize:clear
# systemctl restart php-fpm74.service
systemctl restart php8.2-fpm.service
systemctl restart apache2.service
# systemctl restart nginx.service 
# systemctl restart varnish.service
# systemctl restart mysql.service
php artisan config:cache


