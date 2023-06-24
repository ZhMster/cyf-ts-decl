import "../types/Shader"

/**
 * The Misc object provides window-related and computer-related functions.
 */
declare namespace Misc {
    /**
     * Returns the name of the player's session.
     */
    const MachineName: string;
  
    /**
     * Returns the operating system type (Windows, Mac, or Linux).
     */
    const OSType: string;
  
    /**
     * A shader object that affects the entire screen, instead of a single sprite.
     * See The Shader Object for more information.
     */
    const ScreenShader: Shader;
  
    /**
     * Shakes the screen for a specified duration.
     *
     * @param {number} durationInFrames - The duration of the screen shake in frames.
     * @param {number} intensity - The maximum intensity of the screen shake in pixels.
     * @param {boolean} isIntensityDecreasing - Indicates whether the intensity decreases over time.
     */
    function ShakeScreen(durationInFrames: number, intensity?: number, isIntensityDecreasing?: boolean): void;
  
    /**
     * Stops a previous screen shake effect.
     */
    function StopShake(): void;
  
    /**
     * Moves the camera relative to its current position.
     *
     * @param {number} x - The number of pixels to move the camera horizontally.
     * @param {number} y - The number of pixels to move the camera vertically.
     */
    function MoveCamera(x: number, y: number): void;
  
    /**
     * Moves the camera to the specified position.
     *
     * @param {number} x - The x-coordinate to move the camera to.
     * @param {number} y - The y-coordinate to move the camera to.
     */
    function MoveCameraTo(x: number, y: number): void;
  
    /**
     * Resets the position of the camera.
     * In battles, it moves the camera to the default position (0, 0).
     * In the Overworld, it resets the camera to the player's position.
     */
    function ResetCamera(): void;
  
    /**
     * Gets or sets the current x position of the bottom-left corner of the camera.
     */
    let cameraX: number;
  
    /**
     * Gets or sets the current y position of the bottom-left corner of the camera.
     */
    let cameraY: number;
  
    /**
     * Gets or sets whether the game is in fullscreen mode.
     */
    let FullScreen: boolean;
  
    /**
     * Resizes CYF's window to the specified width and height.
     *
     * @param {number} width - The width of the window in pixels.
     * @param {number} height - The height of the window in pixels.
     * @returns {boolean} True if the window was successfully resized, false otherwise.
     */
    function ResizeWindow(width: number, height: number): boolean;
  
    /**
     * Returns the width of the game window when running in windowed mode (even in fullscreen).
     * If set, it will set the width of CYF's window in pixels. 
     * CYF's default width is 640 pixels. 
     * 
     * Will do nothing if the player's screen's width is lower than the requested width.
     * 
     * * NOTE: Only allowed during battles..
     */
    let WindowWidth: number;
  
    /**
     * Returns the height of the game window when running in windowed mode (even in fullscreen).
     * 
     * If set, it will set the height of CYF's window in pixels. 
     * CYF's default height is 480 pixels. 
     * 
     * Will do nothing if the player's screen's height is lower than the requested height.
     * 
     * * NOTE: Only allowed during battles.
     */
    let WindowHeight: number;
  
    /**
     * Returns the width of the user's screen in windowed mode or the number of displayed pixel columns in fullscreen.
     */
    const ScreenWidth: number;
  
    /**
     * Returns the height of the user's screen in windowed mode or the number of displayed pixel rows in fullscreen.
     */
    const ScreenHeight: number;
  
    /**
     * Returns the width of the user's monitor, regardless of the user's settings or if Misc.SetWideFullscreen has been used.
     */
    const MonitorWidth: number;
  
    /**
     * Returns the height of the user's monitor, regardless of the user's settings or if Misc.SetWideFullscreen has been used.
     */
    const MonitorHeight: number;
  
    /**
     * Expands the view in fullscreen to show the space to the left and right of the 640x480 screen space.
     * Only takes effect when in fullscreen and the aspect ratio is wider than 4:3.
     *
     * @param {boolean} wide - Whether to enable wide fullscreen.
     */
    function SetWideFullscreen(wide: boolean): void;

    /**
     * Closes the window instantly.
     */
    function DestroyWindow(): void;

        /**
     * Change the debugger's x position relative to the camera's position.
     */
    let debuggerX: number;

    /**
     * Change the debugger's y position relative to the camera's position.
     */
    let debuggerY: number;

    /**
     * Change the debugger's x position relative to the encounter's bottom-left corner,
     * or the map's bottom-left corner if used in the overworld.
     */
    let debuggerAbsX: number;

    /**
     * Change the debugger's y position relative to the encounter's bottom-left corner,
     * or the map's bottom-left corner if used in the overworld.
     */
    let debuggerAbsY: number;

    /**
     * Move the debugger relative to its current position.
     *
     * @param x - The amount to move the debugger along the x-axis.
     * @param y - The amount to move the debugger along the y-axis.
     */
    function MoveDebugger(x: number, y: number): void;

    /**
     * Move the debugger relative to the camera's current position.
     *
     * @param x - The amount to move the debugger along the x-axis.
     * @param y - The amount to move the debugger along the y-axis.
     */
    function MoveDebuggerTo(x: number, y: number): void;

    /**
     * Move the debugger relative to the encounter's bottom-left corner,
     * or the map's bottom-left corner if used in the overworld.
     *
     * @param x - The amount to move the debugger along the x-axis.
     * @param y - The amount to move the debugger along the y-axis.
     */
    function MoveDebuggerToAbs(x: number, y: number): void;

    /**
     * Whether or not the camera should move the debugger along with it when it moves. True by default.
     */
    let isDebuggerAttachedToCamera: boolean;

    /**
     * **[!]** Warning, this property is informational only and doesn't exists in runtime.
     *
     * Additional notes on the debugger:  
     * The debugger's pivot point is its top-right corner.  
     * Its default absolute position is (620, 480).  
     * Its width is 320 and its height 140.  
     * If Misc.isDebuggerAttachedToCamera is true when the window is resized, the debugger will stick to the top right corner of the screen.
     */
    const _$INFO_DEBUGGER: undefined;

    
    /** 
     * **[WINDOWS OS ONLY]**  
     * Position X of the window from the bottom left corner. */
    let WindowX: number;
    /** 
     * **[WINDOWS OS ONLY]**  
     * Position Y of the window from the bottom left corner. */
    let WindowY: number;
    /** 
     * **[WINDOWS OS ONLY]**  
     * Gets or sets the name of the window. */
    let WindowName: string;
    /**
     * **[WINDOWS OS ONLY]**  
     * Moves the window X pixels horizontally and Y pixels vertically. 
     * @param {number} x - Moves the window horizontally, in pixels. 
     * @param {number} y - Moves the window vertically, in pixels.
     */
    function MoveWindow(x: number, y: number): void;
    /**
     * **[WINDOWS OS ONLY]**  
     * Moves the bottom left corner of the window to the given coordinates.
     * @param {number} x - Position horizontally.
     * @param {number} y - Position vertically.
     */
    function MoveWindowTo(x: number, y: number): void;

    /* -- File Functions -- */
    /**
     * Use this function to check if a file exists.
     * 
     * You should use this before `Misc.OpenFile` if you plan to read a file.
     * @param {string} path Path to the file to open, relative to your Mod folder. Can enter subfolders such as Lua.
     */
    function FileExists(path: string): boolean;
    /**
     * This function returns a list of either files or folders.
     * @param {string} path Path to the file to open, relative to your Mod folder. 
     * Can enter subfolders such as **Lua/**.
     * @param {boolean} getFolders If true, this function will return the names of all Folders in path. Otherwise, this function will return the names of all Files in path.
     */
    function ListDir(path: string, getFolders: boolean): string[];
    /**
     * Use this function to check if a folder exists.
     * @param {string} path Path to the file to open, relative to your Mod folder.
Can enter subfolders such as Lua.
     */
    function DirExists(path: string): boolean;

    /**
     * Attempts to create a folder with the specified path relative to your Mod folder.
     *
     * @param {string} path - The path of the folder to create.
     * @returns {boolean} True if the operation was successful, false otherwise.
     */
    function CreateDir(path: string): boolean;
  
    /**
     * Attempts to move a folder from the specified path to a new location.
     *
     * @param {string} path - The current path of the folder to move.
     * @param {string} newPath - The new path to move the folder to.
     * @returns {boolean} True if the operation was successful, false otherwise.
     */
    function MoveDir(path: string, newPath: string): boolean;
  
    /**
     * Attempts to delete a folder at the specified path.
     *
     * @param {string} path - The path of the folder to delete.
     * @param {boolean} force - If true, forcefully removes the folder even if it's not empty.
     * @returns {boolean} True if the operation was successful, false otherwise.
     */
    function RemoveDir(path: string, force?: boolean): boolean;

    /** 
     * **[!]** Warning, this object/variable doesn't exists in game, only in this typescript declaration.
     *
     * Should be used with `Misc.OpenFile`.
     */
    const enum CYFFileOpenMode {
        Read = "r",
        Write = "w",
        ReadAndWrite = "rw"
    } 

    interface File {
        /**
         * Returns the file mode being used by this File object.
         * 
         * This is what you entered for mode in Misc.OpenFile.
         */
        readonly openMode: CYFFileOpenMode | string;
        /**
         * The number of lines in the file.
         */
        readonly lineCount: number;
        /**
         * The full file path to the opened file.
         */
        readonly filePath: number;
        /**
         * Moves the opened file to the specified new path.
         * Can be used to rename a file.
         *
         * @param new_path - The new path where the file should be moved.
         */
        Move(newPath: string): void

        /**
         * Copies the opened file to the specified new path.
         * If overwrite is set to true, a file at the target path that already exists will be replaced with the opened file.
         *
         * @param new_path - The new path where the file should be copied.
         * @param overwrite - (Optional) Specifies whether to overwrite an existing file at the target path. Default value is `false`.
         */
        Copy(newPath: string, overwrite?: boolean): void
    }

    interface IFileReadable extends File {
        /**
         * Returns the contents of the specified line as a string.
         *
         * @param line - The line number.
         * @returns The contents of line #line as a string.
         */
        ReadLine(line: number): string;

        /**
         * Returns every line in the file as a separate string within an array.
         * Equivalent to using ReadLine on every line.
         *
         * @returns An array of strings representing each line in the file.
         */
        ReadLines(): string[];

        /**
         * Returns an array containing every individual byte in the file as numbers.
         * The bytes are represented as numbers in the resulting array.
         * This operation may cause a lag spike depending on the file size.
         *
         * @returns An array of numbers representing each byte in the file.
         */
        ReadBytes(): number[];
    }
    interface IFileWritable extends File {
        /**
         * Writes the text in data to the file.
         * Supports \n.
         * Creates the file if it doesn't exist.
         * If append is true, the new text will be added to the end of the file (without a new line).
         * Otherwise, the entire file will be replaced by data.
         *
         * @param data - The text to write to the file.
         * @param append - (Optional) Specifies whether to append the text to the existing file. Default value is true.
         */
        Write(data: string, append?: boolean): void;

        /**
         * Sets the contents of line #line in the file to data.
         * Supports \n.
         *
         * @param line - The line number.
         * @param data - The new contents for the line.
         */
        ReplaceLine(line: number, data: string): void;

        /**
         * Removes line #line from the file.
         * The line that came after it previously is now line #line.
         *
         * @param line - The line number to delete.
         */
        DeleteLine(line: number): void;

        /**
         * Writes a series of bytes to the file.
         * This will replace all contents of the file.
         *
         * @param data - An array of numbers representing the bytes to write.
         */
        WriteBytes(data: number[]): void;

        /**
         * Deletes the file.
         * If using "w" or "rw" mode, you can use File.Write to create the file again.
         */
        Delete(): void;
    }
    
    interface FileW extends IFileWritable {}
    interface FileR extends IFileReadable {}

    interface FileRW extends IFileReadable, IFileWritable {}

    /**
     * Opens a file for reading or writing.
     *
     * @param {string} path - The path to the file to open, relative to your Mod folder.
     * @param {string} mode - The mode in which to open the file, defaults to "rw".
     * 
     * Possible values: 
     * * "r" - The file can only be read from.
     * * "w" - The file can only be written to.
     * * "rw" - The file can be read from AND written to.
     * @returns {File} A File object representing the opened file.
     */
    function OpenFile(path: string, mode: "r" | CYFFileOpenMode.Read): FileR;
    function OpenFile(path: string, mode: "w" | CYFFileOpenMode.Write): FileW;
    function OpenFile(path: string, mode: "rw" | CYFFileOpenMode.ReadAndWrite ): FileRW;

}
  