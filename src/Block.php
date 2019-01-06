<?php

namespace TorrentFreak\Blocks;

class Block
{
    /**
     * Set up some helpers
     *
     * @return void
     */
    public function __construct()
    {
        $this->dir = plugin_dir_path(__DIR__);
        $this->url = plugin_dir_url(__DIR__);

        return;
    }
}
