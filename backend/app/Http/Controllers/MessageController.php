<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        $data = $request->validate([
            'conversationId' => ['required', 'string'],
            'text' => ['required', 'string', 'max:2000'],
        ]);

        $message = [
            'id' => (string) Str::uuid(),
            'conversationId' => $data['conversationId'],
            'text' => $data['text'],
            'time' => now()->format('g:i A'),
            'sender' => [
                'id' => $user?->id,
                'name' => $user?->name,
            ],
        ];

        broadcast(new MessageSent($message))->toOthers();

        return response()->json(['message' => $message]);
    }
}
