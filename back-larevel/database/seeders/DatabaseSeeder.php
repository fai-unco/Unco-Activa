<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\RaceCategorie;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $categorie1 = new RaceCategorie();
        $categorie1->name = '3k';
        $categorie1->description = '3 kilometros';
        $categorie1->price = '3000';
        $categorie1->color = '#F2B035';
        $categorie1->quotas = '70';
        $categorie1->participants = '0';
        $categorie1->save();


        $categorie2 = new RaceCategorie();
        $categorie2->name = '7k';
        $categorie2->description = '7 kilometros';
        $categorie2->price = '3000';
        $categorie2->color = '#1EB7D9';
        $categorie2->quotas = '70';
        $categorie2->participants = '0';
        $categorie2->save();


        $categorie3 = new RaceCategorie();
        $categorie3->name = '15k';
        $categorie3->description = '15 kilometros';
        $categorie3->price = '3000';
        $categorie3->color = '#127497';
        $categorie3->quotas = '70';
        $categorie3->participants = '0';
        $categorie3->save();

        $categorie4 = new RaceCategorie();
        $categorie4->name = '25k';
        $categorie4->description = '25 kilometros';
        $categorie4->price = '3000';
        $categorie4->color = '#0F3759';
        $categorie4->quotas = '70';
        $categorie4->participants = '0';
        $categorie4->save();
    }
}
