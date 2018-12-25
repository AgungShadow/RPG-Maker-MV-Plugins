//=============================================================================
// ▼▼▼▼▼▼                    TroyZ - Cursor Move Fix                     ▼▼▼▼▼▼
//=============================================================================

//=============================================================================
/*:
* @plugindesc v1.0 Fix the cursor moving at first and last command index of window
* @author TroyZ
*
* @help
*
* Script by : Agung Prasetyo (TroyZ)
* Contact me by : Handphone +6282324317485
*                 Whatsapp +6282324317485
* ============================================================================
* Changelog
* ============================================================================
*
* 25 Dec 2018 : Version 1.0 released
*
* ============================================================================
* How this work 
* ============================================================================
*
* All windows that using Window_Selectable as base object will have cursor 
* move problem where at the first and last index the cursor will stuck, 
* forcing you to press the arrow button again only to move the cursor to first
* or last index.
* For example, your menu have 6 index commands. When you're at index 0 you can
* hold down arrow to move into index 6, but when you've reached index 6 and 
* you want to back to index 0 just by holding the down arrow, you can't. This 
* plugin fix that problem by replacing the trigger button use into the repeat 
* button use.
*
* ============================================================================
* How to use
* ============================================================================
*
* Just install it in your plugin manager.
*
* ============================================================================
* Compatibility issues
* ============================================================================
*
* None yet. If you found some, let me know, and bug fixes will come out soon.
*
* ============================================================================
* Who to credit
* ============================================================================
*
* - Allah swt. : For the chance of living that he has given to me.
* - Prophet Muhammad saw. : As a leader and messenger and prophet of Muslim.
*                           I'm proud to be your follower. :)
* - Agung Prasetyo(TroyZ) : Thats me, of course, the ones that made this 
*                           plugin. :P
*
* ============================================================================
* License :
* ============================================================================
*
* - Free Game : Just credit those names above.
* - Commercial Game : Same as free game's license.
*
*/
//=============================================================================
var Imported = Imported || {};
Imported.TroyZ_CursorMoveFix = true;

Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isRepeated('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isRepeated('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isRepeated('right'));
        }
        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isRepeated('left'));
        }
        if (!this.isHandled('pagedown') && Input.isRepeated('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isRepeated('pageup')) {
            this.cursorPageup();
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
};