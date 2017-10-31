import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';


// import stories
configure(() => {
  require('./stories/stories/carousel.Stories.js')
  require('./stories/stories/button.Stories.js')
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  onDeviceUI: true,
});

setTimeout(
  () =>
    setOptions({
      name: 'react ui components stories',
    }),
  100
);

AppRegistry.registerComponent('ReactUiComponentsStories', () => StorybookUI);

export { StorybookUI as default };
