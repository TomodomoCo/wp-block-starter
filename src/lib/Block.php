<?php

namespace Tomodomo\BlockLib;

class Block
{
    /**
     * Set up some helpers
     *
     * @return void
     */
    public function __construct()
    {
        $this->dir = plugin_dir_path(dirname(__DIR__));
        $this->url = plugin_dir_url(dirname(__DIR__));

        return;
    }
}
