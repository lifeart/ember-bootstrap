import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import layout from 'ember-bootstrap/templates/components/bs-form/element/control/checkbox';
import Control from '../control';
import deprecateSubclassing from 'ember-bootstrap/utils/deprecate-subclassing';

/**

 @class FormElementControlCheckbox
 @namespace Components
 @extends Components.FormElementControl
 @private
 */
@templateLayout(layout)
@tagName('')
@deprecateSubclassing
export default class FormElementControlCheckbox extends Control {
  @action
  handleClick(event) {
    this.onChange(event.target.checked);
  }
}
