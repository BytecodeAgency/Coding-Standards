/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Bytecode Coding Standards', // Title for your website.
  tagline: 'The Coding Standards used for projects by Bytecode Digital Agency B.V.',
  url: 'https://bytecode.github.io/', // Your website URL
  baseUrl: '/coding-standards/', // Base URL for your project */

  projectName: 'coding-standards',
  organizationName: 'bytecode',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'gen_general', label: 'General'},
    {doc: 'lang_htmlcss', label: 'Languages'},
    {doc: 'arch_design', label: 'Architecture'}
  ],

  /* path to images for header/footer */

  /* Colors for website */
  colors: {
    primaryColor: '#23be87',
    secondaryColor: '#df5252',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Bytecode Digital Agency B.V.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'monokai',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.2.3/mermaid.min.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  markdownPlugins: [
    function mermaid(md) {
        md.renderer.rules.fence_custom.mermaid = function(
            tokens,
            idx,
            options,
            env,
            instance
        ) {
            const currentToken = tokens[idx];
            return `<div class='mermaid' style='text-align:center'>${currentToken.content}</div>`;
        };
    },
],

};

module.exports = siteConfig;
