/**
 * WordPress Dependencies
 */
import { Fragment } from "@wordpress/element";
import { ServerSideRender } from "@wordpress/components";

/**
 * Internal Dependencies
 */
import Inspector from "./inspector"

/**
 * Block editor
 *
 * @param {object} props
 */
const Editor = (props) => {
  return (
    <Fragment>
      <Inspector
        {...{...props}}
      />
      <ServerSideRender
        block="torrentfreak/opt-in"
        attributes={props.attributes}
      />
    </Fragment>
  )
}

export default Editor
