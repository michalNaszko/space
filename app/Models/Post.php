<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;

/**
 * Post
 *
 * @mixin Builder
 * @property $title
 * @property $text
 * @property $user_id
 */
class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'text',
        'user_id'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn($query, $search) =>
            $query
                ->where('title', 'like', '%' . $search . '%')
                ->orWhere('text', 'like', '%' . $search . '%'));


        if ($filters['tag'] ?? false) {
            $tagId = Tag::where('name', $filters['tag'])->first()->id;
            $query
                ->whereHas('tags', function($q) use ($tagId) {
                    $q->where('tag_id', $tagId);
                });
        }
    }
}
