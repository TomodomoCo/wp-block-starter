<?php
/**
 * Plugin Name: TorrentFreak › Blocks
 * Plugin URI: https://torrentfreak.com/
 * Version: 1.0.0
 * Description: Custom TorrentFreak blocks for WordPress
 * Author: Tomodomo
 * Author URI: https://tomodomo.co/
 */

// Shorthand for the current directory
$dir = dirname(__FILE__);

/**
 * Run the autoloader
 */
if (file_exists("{$dir}/build/composer/autoload.php")) {
    require "{$dir}/build/composer/autoload.php";
}

add_action('init', function () {
// Block classes to instantiate
$blocks = [
    'OptIn',
];

foreach ($blocks as $block) {
    // Build the path to the block class
    $path = "\\TorrentFreak\\Blocks\\{$block}Block";

    // Instantiate and register the block
    $block = new $path();

    // Define the block configuration
    $config = array_merge(
        [],
        $block->attributes(),
        $block->assets()
    );

    // If intended to be server-registered, add the render callback
    if (method_exists($block, 'render')) {
        $config['render_callback'] = [$block, 'render'];
    }

    // Register the block type
    register_block_type($block->name(), $config);
}
});
