import * as strings from 'InfoCardsWebPartStrings';

import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

// Importing Vue.js SFC
import InfoCardsComponent from './components/InfoCards.vue';
import { Version } from '@microsoft/sp-core-library';
// Importing Vue.js
import Vue from 'vue';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IInfoCardsWebPartProps {
  description: string;
  message: string;
  displayName: string;
}

export default class InfoCardsWebPart extends BaseClientSideWebPart<IInfoCardsWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    const hours: number = new Date().getHours();
    let _message: string = "Доброе утро!";

    if (hours > 11) {
      if (hours > 18) {
        _message = "Добрый вечер!";
      } else {
        _message = "Добрый день!";
      }
    }

    let el = new Vue({
      el: `#${id}`,
      render: h => h(InfoCardsComponent, {
        props: {
          description: this.properties.description,
          message: _message,
          displayName: this.context.pageContext.user.displayName
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
