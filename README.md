# JavaScript Spacey-Standard Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![bitHound Dependencies](https://www.bithound.io/github/davidmarkclements/spacey-standard/badges/dependencies.svg)](https://www.bithound.io/github/davidmarkclements/spacey-standard/master/dependencies/npm)

Like standard, but loosen up on the spacing

![](http://i.giphy.com/qWUsXoFkMaeXe.gif)

## Install

```bash
npm install spacey-standard
```

## Rules

Importantly:

- Up to 3 blank lines allowed 
- Still only 1 blank line at end of file
- Pad blocks however you like
- Check [feross/standard] for the rest of the rules.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-spacey-standard-style](https://cdn.rawgit.com/davidmarkclements/spacey-standard/master/badge.svg)](https://github.com/davidmarkclements/spacey-standard)

```markdown
[![js-spacey-standard-style](https://cdn.rawgit.com/davidmarkclements/spacey-standard/master/badge.svg)](https://github.com/davidmarkclements/spacey-standard)
```

[![js-spacey-standard-style](https://img.shields.io/badge/code--style-spacey--standard-brightgreen.svg)](https://github.com/davidmarkclements/spacey-standard)

```markdown
[![js-spacey-standard-style](https://img.shields.io/badge/code%20style-spacey-standard-brightgreen.svg?style=flat-square)](https://github.com/davidmarkclements/spacey-standard)
```

## Usage

The easiest way to use JavaScript Spacey-Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `spacey-standard` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install spacey-standard -g
```

After you've done that you should be able to use the `spacey-standard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ spacey-standard
Error: Use JavaScript Spacey-Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "spacey-standard": "*"
    },
    "scripts": {
      "test": "spacey-standard && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "spacey-standard": {
    "parser": "babel-eslint"
  }
}
```

### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add these lines to `.vimrc`:

```vim
let g:syntastic_javascript_checkers=['standard']
let g:syntastic_javascript_standard_exec = 'spacey-standard'
```

For automatic formatting on save, add these two lines to `.vimrc`:

```vim
autocmd bufwritepost *.js silent !spacey-standard % --format
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `spacey-standard.ignore` property to `package.json`:

```json
"spacey-standard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `spacey-standard` to it:

```bash
$ spacey-standard --verbose | snazzy
```

See [feross/standard] for more information.

[travis-image]: https://img.shields.io/travis/davidmarkclements/spacey-standard.svg?style=flat-square
[travis-url]: https://travis-ci.org/davidmarkclements/spacey-standard
[npm-image]: https://img.shields.io/npm/v/spacey-standard.svg?style=flat-square
[npm-url]: https://npmjs.org/package/spacey-standard
[downloads-image]: https://img.shields.io/npm/dm/spacey-standard.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/spacey-standard
[feross/standard]: https://github.com/feross/standard
