import React from 'react';
import AsyncSelect from 'react-select/lib/Async';

interface IAudience {
  id: number;
  name: string;
}

interface IOption {
  value: number;
  label: string;
}

interface IAudiencesSelectorProps {
  selectedAudiences: IAudience[];
  disabled: boolean;
  projectId: string;
  apiToken: string;
  customElementApi: any;
}

interface IAudiencesSelectorState {
  selectedOptions: IOption[];
  disabled: boolean;
}

class AudiencesSelector extends React.Component<IAudiencesSelectorProps, IAudiencesSelectorState> {
  constructor(props) {
    super(props);

    const selectedOptions = this.props.selectedAudiences && this.props.selectedAudiences.map(item => ({
      value: item.id,
      label: item.name,
    }));

    this.state = {
      selectedOptions,
      disabled: this.props.disabled,
    };

    this.props.customElementApi.onDisabledChanged((disabled) => {
      this.setDisabled(!!disabled);
    });

    this.onChange = this.onChange.bind(this);
  }

  setDisabled = (disabled: boolean) => {
    this.setState(() => ({ disabled }));
  };

  getOptionsFromResponse = (inputValue: string, response: any): IOption[] => {
    const audiences = JSON.parse(response);

    return audiences
      .filter((item) =>
        !item.archived && (!inputValue || (item.name.toLowerCase().indexOf(inputValue) >= 0))
      )
      .map((item) => ({
        value: item.id,
        label: item.name
      }));
  };

  promiseOptions = (inputValue: string): Promise<IOption[]> => {
    const {
      apiToken,
      projectId,
    } = this.props;

    return new Promise(resolve => {
      const request = new XMLHttpRequest();
      const url = `https://api.optimizely.com/v2/audiences?project_id=${projectId}`;

      request.open('GET', url, true);
      request.setRequestHeader('Authorization', `Bearer ${apiToken}`);

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          const result = this.getOptionsFromResponse(inputValue, request.response);
          resolve(result);
        }
      };

      request.send();
    });
  }

  onChange = (value: IOption[]) => {
    if (!this.state.disabled) {
      this.setState(() => ({
        selectedOptions: value
      }))
      const selectedAudiences = value && value.map(item => ({ id: item.value, name: item.label }));
      const elementValue = selectedAudiences && selectedAudiences.length ? JSON.stringify(selectedAudiences) : null;
      this.props.customElementApi.setValue(elementValue);
    }
  };

  render() {
    return (
      <AsyncSelect
        isMulti
        defaultOptions
        defaultValue={this.state.selectedOptions}
        loadOptions={this.promiseOptions}
        disabled={this.state.disabled}
        onChange={this.onChange}
        classNamePrefix="selector"
      />
    );
  }
}

export default AudiencesSelector;
