<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class MessageSent implements ShouldBroadcastNow
{
    use InteractsWithSockets;

    public function __construct(public array $message) {}

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel('chat.' . $this->message['conversationId']);
    }

    public function broadcastAs(): string
    {
        return 'message.sent';
    }

    public function broadcastWith(): array
    {
        return $this->message;
    }
}
