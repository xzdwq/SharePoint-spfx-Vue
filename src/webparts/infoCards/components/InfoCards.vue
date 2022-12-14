<template>
    <div :class="$style.InfoCards">
        <div :class="$style.container">
            <div :class="$style.row">
                <div :class="$style.column">
                    <span :class="$style.title">Title: {{message}} {{displayName}}</span>
                    <p :class="$style.subTitle">Customize SharePoint experiences using Web Parts.</p>
                    <p :class="$style.description">{{description}}</p>
                    <a href="https://aka.ms/spfx" :class="$style.button">
                        <span :class="$style.label">Learn more</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * Component's properties
 */
export interface IInfoCardsProps {
    description: string;
    message: string;
    displayName: string;
}

/**
 * Class-component
 */
@Component
export default class InfoCards extends Vue implements IInfoCardsProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public description: string;

    @Prop()
    public message: string;

    @Prop()
    public displayName: string;

}
</script>

<style lang="scss" module>
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/_SPFabricCore.scss';

.InfoCards {
  .container {
    max-width: 700px;
    margin: 0px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .row {
    @include ms-Grid-row;
    @include ms-fontColor-white;
    background-color: $ms-color-themeDark;
    padding: 20px;
  }

  .column {
    @include ms-Grid-col;
    @include ms-lg10;
    @include ms-xl8;
    @include ms-xlPush2;
    @include ms-lgPush1;
  }

  .title {
    @include ms-font-xl;
    @include ms-fontColor-white;
  }

  .subTitle {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .description {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .button {
    // Our button
    text-decoration: none;
    height: 32px;

    // Primary Button
    min-width: 80px;
    background-color: $ms-color-themePrimary;
    border-color: $ms-color-themePrimary;
    color: $ms-color-white;

    // Basic Button
    outline: transparent;
    position: relative;
    font-family: "Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: $ms-font-size-m;
    font-weight: $ms-font-weight-regular;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    padding: 0 16px;

    .label {
      font-weight: $ms-font-weight-semibold;
      font-size: $ms-font-size-m;
      height: 32px;
      line-height: 32px;
      margin: 0 4px;
      vertical-align: top;
      display: inline-block;
    }
  }
}
</style>


