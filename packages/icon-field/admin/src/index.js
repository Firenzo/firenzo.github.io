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
      name: 'icon',
      pluginId: 'icon-field',
      type: 'json',
      intlLabel: {
        id: 'icon-field.label',
        defaultMessage: 'Icon',
      },
      intlDescription: {
        id: 'icon-field.description',
        defaultMessage: 'Select an icon from a list',
      },
      components: {
        Input: async () =>
          import('./components/IconSelector').then((module) => ({
            default: module.IconSelector,
          })),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'icon-field.section.settings',
              defaultMessage: 'Field options',
            },
            items: [
              {
                name: 'options.addColorSelector',
                type: 'checkbox',
                intlLabel: {
                  id: 'icon-field.option.add-color-selector',
                  defaultMessage: 'Add color selector',
                },
                defaultValue: false,
              },
              {
                name: 'options.addSizeSelector',
                type: 'checkbox',
                intlLabel: {
                  id: 'icon-field.option.add-size-selector',
                  defaultMessage: 'Add size selector',
                },
                defaultValue: false,
              },
            ],
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
