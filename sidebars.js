/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Welcome',
      id: 'welcome',
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Setup',
      items: [
        {
          type: "doc",
          id: "setup/requirements"
        },
        {
          type: "doc",
          id: "setup/installation"
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Commands',
      items: [
        {
          type: "doc",
          id: "commands/group"
        },
        {
          type: "doc",
          id: "commands/install"
        },
        {
          type: "doc",
          id: "commands/module"
        },
        {
          type: "doc",
          id: "commands/service"
        },
        {
          type: "doc",
          id: "commands/shutdown"
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: "doc",
          id: "modules/auto-backup"
        },
        {
          type: "doc",
          id: "modules/auto-patcher"
        },
        {
          type: "doc",
          id: "modules/auto-reboot"
        },
        {
          type: "doc",
          id: "modules/plugin-installer"
        },
        {
          type: "doc",
          id: "modules/webinterface"
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Cloud API',
      items: [
        {
          type: "doc",
          id: "api/modules"
        },
        {
          type: "doc",
          id: "api/plugins"
        }
      ]
    }
  ],
};

export default sidebars;
