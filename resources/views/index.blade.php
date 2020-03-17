<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet">
    <title>Laravel</title>
</head>

<body>
    <div id='root'></div>
    <script src="{{ mix('js/index.js') }}"></script>
</body>

</html>