/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal Dependencies
 */
import Editor from './Editor'
import Renderer from './Renderer'

/**
 * Register slider block.
 */
registerBlockType('tomodomo/sample', {
  title: __('Tomodomo: Sample'),
  keyword: [
    __('sample'),
    __('keyword'),
  ],
  icon: {
    background: '#963F69',
    foreground: '#FFFFFF',
    src: 'arrow-left-alt',
  },
  category: 'widgets',
  attributes: {
  },
  supports: {
    customClassName: false,
  },
  edit: Editor,
  save: Renderer,
})
