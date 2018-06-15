// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { FormElement } from '../';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { Radio } from '../../radio-group/base/example';
import { Tooltip } from '../../tooltips/base/example';
import RecordDetail from '../record-detail/';
import * as Snapshot from '../record-detail/snapshots.data';

const inputLabel = 'Form Element Label';
const defaultInputId = 'input-unique-id';
const errorId = 'error-message-unique-id';

export default (
  <FormElement labelContent={inputLabel} inputId={defaultInputId}>
    <Input id={defaultInputId} />
  </FormElement>
);

export let states = [
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={defaultInputId}
        isRequired
      >
        <Input id={defaultInputId} required />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        formElementClassName="slds-has-error"
        labelContent={inputLabel}
        inputId={defaultInputId}
        errorId={errorId}
        isRequired
        inlineMessage="This field is required"
      >
        <Input id={defaultInputId} required aria-describedby={errorId} />
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'input',
    label: 'Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={defaultInputId}>
        <Input id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'textarea',
    label: 'Textarea',
    element: (
      <FormElement labelContent={inputLabel} inputId={defaultInputId}>
        <Textarea id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" />
      </FormElement>
    )
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element: (
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">
          Form Element Label
        </legend>
        <div className="slds-form-element__control">
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </div>
      </fieldset>
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={defaultInputId}
        inlineMessage="ex: (415)111-2222"
      >
        <Input id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'tooltip-help',
    label: 'Tooltip Help',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '3rem',
          position: 'relative'
        }}
      >
        <FormElement
          labelContent={inputLabel}
          inputId={defaultInputId}
          hasTooltip
        >
          <Input id={defaultInputId} />
        </FormElement>
      </div>
    )
  },
  {
    id: 'stacked',
    label: 'Stacked form layout - View Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.ObjectFieldTypes}
        isViewMode
      />
    )
  },
  {
    id: 'edit-stacked',
    label: 'Stacked form layout - Edit Mode',
    element: (
      <RecordDetail direction="stacked" snapshot={Snapshot.ObjectFieldTypes} />
    )
  },
  {
    id: 'horizontal',
    label: 'Horizontal form layout - View Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypes}
        isViewMode
      />
    )
  },
  {
    id: 'edit-horizontal',
    label: 'Horizontal form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypes}
      />
    )
  }
];
