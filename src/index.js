/*global CustomElement*/
import React from "react";
import ReactDom from "react-dom";
import AudiencesSelector from "./components/AudiencesSelector";
import "./custom-element.css";
import "./index.css";

CustomElement.init((element, _context) => {
  const selectedAudiences = element.value ? JSON.parse(element.value) : null;
  const config = element.config || {};

  const components = (
    <div>
      <div className="layout">
        <div className="selector">
          <AudiencesSelector
            projectId={config.projectId}
            apiToken={config.apiToken}
            selectedAudiences={selectedAudiences}
            disabled={element.disabled}
            customElementApi={CustomElement}
          />
        </div>
        <img className="logo" src="optimizely_logo.png" alt="" />
      </div>
      <div class="spacer"></div>
    </div>
  );

  ReactDom.render(components, document.getElementById("root"));
});
