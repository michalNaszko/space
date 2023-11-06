<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        for($i = 0; $i < 80; ++$i){
            DB::table('users')->insert([
                'name' => Str::random(5),
                'email' => Str::random(5).'@gmail.com',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
