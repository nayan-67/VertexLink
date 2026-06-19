<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::routes(['middleware' => ['auth:sanctum']]);

Broadcast::channel('chat.{conversationId}', function ($user, $conversationId) {
    return true;
});
