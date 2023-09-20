<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Posts</title>
</head>
<body>
    <div id="app">
        <example-component></example-component>
    </div>
    <div class="col-span-8">
        @foreach ($posts as $post)
            <h1 class="font-bold text-3xl lg:text-4xl mb-10">
                {{ $post->title }}
            </h1>

            <div class="space-y-4 lg:text-lg leading-loose">{!! $post->text !!}</div>
        @endforeach
    </div>
    <!-- Scripts -->
    @vite('resources/js/app.js')
</body>
</html>
