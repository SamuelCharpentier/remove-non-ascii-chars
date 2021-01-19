# Remove Non ASCII Chars

Simple plugin to replace non-ASCII characters to ASCII by removing accents,
and remaining non-ASCII characters.

Turns:

    á à â ä ñ

into

    a a a a n

and removes characters like:

    ¡ ¿ ß

## Installation

Launch VS Code Quick Open (Ctrl/Cmd+P), paste the following command, and press enter.

```
ext install remove-non-ascii-chars
```

## Using

1. Bring up the command palette with <kbd>CTRL+SHIFT+P</kbd> (Windows,
   Linux) or <kbd>CMD+SHIFT+P</kbd> on Mac.
2. Type `Remove Non ASCII Chars` until you see the commands.
3. Select `Remove non Ascii characters (File)` for removing in the entire file,
   or `Remove non Ascii characters (Select)` for removing only in the selected
   text.

## Author

Complete rewrite from Python to Javascript of the original package for Sublime of
the same name [Remove​Non​Ascii​Chars](https://packagecontrol.io/packages/RemoveNonAsciiChars#:~:text=Bring%20out%20the%20command%20palette,only%20in%20the%20selected%20text.) originally authored by Gabriel Perren - [@Gabriel-p](https://github.com/Gabriel-p)

## License

[GPL-v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

[wbond]: http://wbond.net/sublime_packages/package_control
[wbond 2]: http://wbond.net/sublime_packages/package_control/installation
