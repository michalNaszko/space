<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
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

        $this->addTags($request->input('tags'), $post->id);
    }

    /**
     * @param String $tags
     * @return void
     */
    private function addTags(String $tags, int $post_id): void
    {
        $tagsArray = explode(' ', $tags);

        foreach ($tagsArray as $tag) {
            echo $tag . '<br>';
            $tagModel = new Tag();
            $tagModel->post_id = $post_id;
            $tagModel->tag = $tag;

            $tagModel->save();
        }
    }
}
