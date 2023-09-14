<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\NullableType;

class PostController extends Controller
{
    public function index()
    {
        Log::info('request: ' . request());
        return view('posts', [
            'posts' => Post::latest()->filter(request(['search', 'tag']))->get()
        ]);
    }

    /**
     * @param Request $request
     * @return void
     */
    public function update(Request $request): void
    {
        if ($request->has('postId')) {
            (new Post)->where('id', (int)$request->input('postId'))->update(
                    ['title'=>$request->input('title'), 'text'=>$request->input('text')]);
        }
    }

    /**
     * @param Request $request
     * @return void
     */
    public function create(Request $request): void
    {
        $post = new Post;

        $post->user_id = Auth::id();
        $post->title = $request->input('title');
        $post->text = $request->input('text');

        $post->save();

        $this->addTags($request->input('tags'), $post);
    }

    /**
     * @param String $tags
     * @return void
     */
    private function addTags(String|null $tags, Post $post): void
    {
        $tagsArray = explode(' ', $tags);

        foreach ($tagsArray as $tag) {
            echo $tag . '<br>';
            $tagModel = Tag::firstOrNew(['name' => $tag]);

            if(! $tagModel->id ) {
                $tagModel->save();
            }

            $tagModel->posts()->attach($post);
        }
    }
}
