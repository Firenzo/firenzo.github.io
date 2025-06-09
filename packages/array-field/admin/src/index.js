import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
// import { PluginIcon } from './components/PluginIcon';

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `plugins/${PluginIcon}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${PLUGIN_ID}.plugin.name`,
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import('./pages/App');

    //     return App;
    //   },
    // });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });

    app.customFields.register({
      name: 'array',
      pluginId: 'array-field',
      type: 'json',
      intlLabel: {
        id: 'array-field.label',
        defaultMessage: 'Strings Array',
      },
      intlDescription: {
        id: 'array-field.description',
        defaultMessage: 'Create an array from multiple strings',
      },
      components: {
        Input: async () =>
          import('./components/ArrayField').then((module) => ({
            default: module.ArrayField,
          })),
      },
      options: {
        base: [
          {
            intlLabel: {
              id: 'array-field.option.options',
              defaultMessage: 'Options',
            },
            name: 'options.options',
            type: 'text',
            description: 'Enter comma-separated options',
          },
        ],
      },
    });
  },

  async registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
