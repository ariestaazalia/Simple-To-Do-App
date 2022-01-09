# SuperTodoApp

This is a simple app using laravel 8.0 with API and jQuery for Gamatechno test

## Getting started

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/8.x/deployment#server-requirements)

Assuming you've already installed on your machine: PHP (>= 7.3.0), [Composer](https://getcomposer.org/), and local web server

## Installation

Clone the repository
```
git clone https://gitlab.com/ariestaazalia/supertodoapp.git
```

Switch to the folder
```
cd supertodoapp
```

Install all the dependencies using composer
```
composer install
```

Copy the env example file and configure 
```
cp .env.example .env
```

Generate key
```
php artisan key:generate
```

Run the database migration (set the database connection in .env first)
```
php artisan migrate --seed
```

Start local development server
```
php artisan serve
```
You can access the app in http://localhost:8000 (Make sure you run your web server, ex: XAMPP, MAMP)

## TLDR
```
git clone https://gitlab.com/ariestaazalia/supertodoapp.git
cd supertodoapp
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Running in Postman
This Application is using API for backend, to run a test:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/18965802-34e9dbb2-3c1f-48d2-951b-b92a8150454c?action=collection%2Ffork&collection-url=entityId%3D18965802-34e9dbb2-3c1f-48d2-951b-b92a8150454c%26entityType%3Dcollection%26workspaceId%3D52425be1-aa99-45e1-9305-df589369f333)
