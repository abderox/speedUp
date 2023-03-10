# SpeedUp Chrome Extension

SpeedUp is a small Chrome extension that adds a floating button to web pages that have video elements without the playback rate control. The button allows you to control the playback speed of the video, making it easier to watch videos at your preferred speed.

<p
    align="center"
    style="text-align: center;"
>
    <img
        src="./icons/icon128.png"
        alt="SpeedUp icon"
        width="128"
    />
</p>

## NB

- This extension is not intended to be used on videos with custom controls. It is intended to be used on videos with the default HTML5 video controls.
- If the ad on youtube is skipped late (when the page is loaded for the first time), simply click the video to skip it immediately.

## New features v1.0.4.0

```diff
+ You can now drag and drop the floating button anywhere in the document.
```

## New features v1.0.3.0

```diff
+ Click the 'b' key to toggle the video between blurry and clear.
+ Click the 'h' to muet and toggle the video between blurry and clear.
```

## New features v1.0.2.0

```diff
+ Automatically skip skipable ads (Immediately)
+ Added a full screen button to the floating button
```

<p
    align="center"
>
    <img
        src="./github/ad-skip.png"
        alt="SpeedUp icon"
        width="300"
        height="500"
    />
    <img
        src="./github/demo2.png"
        alt="SpeedUp icon"
        width="300"
        height="500"
    />
</p>

## How to Install

- Download the extension by clicking on the `Code` button at the top of the extension's GitHub page, and then clicking `Download ZIP`.
- Extract the contents of the downloaded ZIP file to a folder on your computer.
- Open the Chrome browser and navigate to `chrome://extensions`.
- Turn on `Developer mode` by clicking the switch at the top-right corner of the page.
- Click `Load unpacked` and select the folder where you extracted the extension files.
 
## How to Use

After installing the extension, visit a web page that has a video element without the playback rate control. You should see a floating button appear on the video that says `x1`. Click on the button to open the playback rate menu and select a different speed. You can also use the keyboard shortcuts  **`s`**  and  **`d`**
to decrease and increase the playback rate, respectively. _Double clicking_ the floating button, makes bothe of the `+` & `-` disappear.
- The extension  remembers the last playback rate used . It is stored in LocaleStorage.

## Demo

<p
    align="center"
    style="text-align: center;"
>
    <img
        src="./github/demo.png"
        alt="SpeedUp demo"
        width="920"
    />
</p>

## Known Issues

- The extension may not work on some web pages that have video elements with custom controls.
- The extension may not work on videos embedded in iframes.


## Feedback and Contributions

If you would like to contribute to the extension's development, please fork the project on GitHub and submit a pull request with your changes.

## License

This extension is licensed under the MIT License. See the LICENSE file for details.