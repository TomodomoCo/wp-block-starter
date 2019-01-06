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
registerBlockType('torrentfreak/opt-in', {
  title: __('TF: Opt-In'),
  keyword: [
    __('optin'),
    __('email'),
    __('form'),
  ],
  icon: {
    background: '#FF0092',
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
