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


        if ($filters['tags'] ?? false) {
            $tagIds = Tag::whereIn('name', $filters['tags'])->pluck('id');

            foreach ($tagIds as $tagId) {
                $query->whereHas('tags', function($subQuery) use ($tagId) {
                        $subQuery->where('tag_id', $tagId);
                });
            }
            Log::info("SQL query: " . $query->toSql());
        }
    }
}
