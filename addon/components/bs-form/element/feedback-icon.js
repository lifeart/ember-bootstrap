import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from 'ember-bootstrap/templates/components/bs-form/element/feedback-icon';
import defaultValue from 'ember-bootstrap/utils/default-decorator';
import deprecateSubclassing from 'ember-bootstrap/utils/deprecate-subclassing';

/**

 @class FormElementFeedbackIcon
 @namespace Components
 @extends Ember.Component
 @private
 */
@templateLayout(layout)
@tagName('')
@deprecateSubclassing
export default class FormElementFeedbackIcon extends Component {
  /**
   * @property show
   * @type {Boolean}
   * @public
   */
  @defaultValue
  show = false;

  /**
   * @property iconName
   * @type {String}
   * @public
   */
  @defaultValue
  iconName = null;
}
