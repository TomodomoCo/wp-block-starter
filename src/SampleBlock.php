<?php

namespace Tomodomo\Blocks;

class SampleBlock extends Block implements BlockInterface
{
    /**
     * The block name
     *
     * @return string
     */
    public function name() : string
    {
        return 'tomodomo/sample';
    }

    /**
     * Register static assets
     *
     * @return array
     */
    public function assets() : array
    {
		// Register the block editor JS
		wp_register_script(
			'tomodomo-sample-editor-script',
			$this->url . 'build/assets/js/script.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-i18n',
			],
			filemtime($this->dir . 'build/assets/js/script.js')
		);

        return [
            'editor_script' => 'tomodomo-sample-editor-script',
        ];
    }

    /**
     * Define block attributes
     *
     * @return array
     */
    public function attributes() : array
    {
        return [];
    }

    /**
     * Define the block render method
     *
     * @return string
     */
    public function render() : string
    {
        return 'Hello, I am a block.';
    }
}
