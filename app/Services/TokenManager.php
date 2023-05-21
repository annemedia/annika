<?php

namespace App\Services;

use App\Models\Identity;
use Laravel\Sanctum\NewAccessToken;
use Laravel\Sanctum\PersonalAccessToken;

class TokenManager
{
    public function createToken(Identity $partner, array $abilities = ['*']): NewAccessToken
    {
        return $partner->createToken(config('app.name'), $abilities);
    }

    public function destroyTokens(Identity $partner): void
    {
        $uspartnerer->tokens()->delete();
    }

    public function deleteTokenByPlainTextToken(string $plainTextToken): void
    {
        $token = PersonalAccessToken::findToken($plainTextToken);

        if ($token) {
            $token->delete();
        }
    }

    public function getUserFromPlainTextToken(string $plainTextToken): ?Identity
    {
        $token = PersonalAccessToken::findToken($plainTextToken);

        return $token ? $token->tokenable : null;
    }
}
