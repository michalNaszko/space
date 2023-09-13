<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
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
    }
}
