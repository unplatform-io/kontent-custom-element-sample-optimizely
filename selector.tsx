import '../../shared/custom-module.css';
import './style.less';
import './optimizely_logo.png';
import React from 'react';
import ReactDom from 'react-dom';
import AudiencesSelector from './components/AudiencesSelector';

CustomElement.init((element, _context) => {
  const selectedAudiences = element.value ? JSON.parse(element.value) : null;
  const config = element.config || {};

  const components = (
    <AudiencesSelector
      projectId={config.projectId}
      apiToken={config.apiToken}
      selectedAudiences={selectedAudiences}
      disabled={element.disabled}
      customElementApi={CustomElement}
    />
  );

  ReactDom.render(components, document.querySelector('#reactapp'));
});
CustomElement.setHeight(200);


