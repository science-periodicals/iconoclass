import React from 'react';
import assert from 'assert';
import ReactTestRenderer from 'react-test-renderer';
import Iconoclass from '../src/iconoclass';

describe('iconoclass', function() {
  it('should render an icon', () => {
    const renderer = ReactTestRenderer.create(
      <Iconoclass iconName="dispatch" />
    );
    const renderered = renderer.toJSON();
    assert.equal(renderered.type, 'div');
  });
});
