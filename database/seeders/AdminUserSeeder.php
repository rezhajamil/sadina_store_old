<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [[
            'name' => 'Admin',
            'email' => 'admin@sadina.store',
            'role' => 'superadmin',
            'email_verified_at' => Date::now(),
            'password' => bcrypt('admin123'),
        ]];

        foreach ($users as $key => $data) {
            User::create($data);
        }
    }
}
