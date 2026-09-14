# Weatherly Raincord Theme

A dark Raincord theme built from Weatherly's production color palette: deep navy surfaces, cream text, slate-blue details, and muted gold accents.

## Palette

| Role | Color |
| --- | --- |
| Canvas | `#0F1E2D` |
| Surface | `#162B3D` |
| Raised surface | `#1E3A50` |
| Primary text | `#F4ECD9` |
| Muted text | `#AFC0CB` |
| Border | `#36546A` |
| Gold accent | `#DDB86F` |
| Link/accent | `#DDB86F` |
| Danger | `#E2877D` |

## Install

`index.json` is a Raincord spec-3 theme. Raincord's standard installer fetches a theme URL without GitHub authentication, so a private repository cannot provide a working anonymous install URL. Keep this repository private for source storage. To install by URL, serve the JSON from a reachable location you explicitly choose. Do not embed GitHub credentials or temporary access tokens in a theme URL.

## Compatibility and validation

The original manifest's 38 semantic and 30 raw color keys are retained. Semantic arrays were converted to spec-3 color strings, and transparent/backdrop values use explicit opacity objects to match Raincord's parser. The original `rosiecord-plumpy` icon-pack setting is retained.

JSON structure and color values were checked against the Raincord source parser. This theme has not been visually tested inside a running Raincord mobile client.

## Credits

- Weatherly colors are based on [weatherly-bot.com](https://weatherly-bot.com/).
- Adapted from [system142857](https://codeberg.org/raincord/OfficialAddons/src/branch/main/Themes/System142857) by mistycalpi.
- The original addon collection is distributed under the BSD 3-Clause License. See `LICENSE`.
