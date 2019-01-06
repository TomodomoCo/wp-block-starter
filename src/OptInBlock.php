<?php

namespace TorrentFreak\Blocks;

class OptInBlock implements BlockInterface
{
    /**
     */
    public function name() : string
    {
        return 'torrentfreak/opt-in';
    }

    /**
     */
    public function assets() : array
    {
        return [
            'editor_script' => '',
        ];
    }

    /**
     */
    public function attributes() : array
    {
        return [
            'layout' => [
                'type'    => 'string',
                'default' => '',
            ],
        ];
    }

    /**
     */
    public function render() : string
    {
        return '';
    }
}
