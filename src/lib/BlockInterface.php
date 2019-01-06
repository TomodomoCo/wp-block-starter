<?php

namespace Tomodomo\BlockLib;

interface BlockInterface
{
    /**
     * Block name
     *
     * @param string
     */
    public function name() : string;

    /**
     * Register the block assets
     *
     * @return array
     */
    public function assets() : array;

    /**
     * Get the block attributes
     *
     * @return array
     */
    public function attributes() : array;
}
