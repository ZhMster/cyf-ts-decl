
/**
 * It was hard to customize items and such in Unitale, right? Plus, items wouldn't go away when you used them, because they are the only ones that will ever love you. But now, nobody loves you at all, because items can be deleted and the Inventory System has been simplified! Here are the functions that are created to help you with this hellish mechanism that added items.
 * 
 * [**Note**]: All of Undertale's consumable items, weapons and armors are already implemented in CYF!
 * You can use them in your mod if you want to, all you need to do is:
 * 
 * * Add an item using its long name (you have to add an item with the name ``"Butterscotch Pie"`` if you want the Player to have one, not ``"ButtsPie"``),
 * * Avoid running the ``BattleDialog`` function in ``HandleCustomCommand`` for these items.  
 * 
 * This system extends to any item added to Create Your Frisk's internals.
 * 
 * Some of these functions can only be used in ``HandleItem``. Examples are included at the bottom of this page.
 * 
 * [See the full documentation here](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/cyf-inventory.html)
 */
declare interface Inventory {
    /**
     * Attempts to add the item name to the player's inventory.
     * @param {string} name - The name of the item to add. Must have been set with Inventory.AddCustomItems.
     * @param {number} index - The position to place the item in, starting from 1.
     *                         Will "push away" items if placed in the same position as one.
     *                         If greater than the number of items in the inventory, the item will just be added to the end.
     *                         Default is 8.
     * @returns {boolean} - True if the item was successfully added, false otherwise.
     **/
    AddItem(name: string, index?: number): boolean;
  
    /**
     * Removes the item in position index from the player's inventory.
     * @param {number} index - Index to remove the item from. The first item is position 1.
     **/
    RemoveItem(index: number): void;
  
    /**
     * Returns the name of the item in the inventory at the given index.
     * @param {number} index - Index of the chosen item. The first item is number 1.
     * @returns {string} - The name of the item.
     **/
    GetItem(index: number): string;
  
    /**
     * Returns the type of the item in the inventory at the given index.
     * @param {number} index - Index of the chosen item. The first item is number 1.
     * @returns {number} - The type of the item.
     *                    0 = Consumable. Will be deleted upon use.
     *                    1 = Weapon. You will be able to equip this item as a weapon.
     *                    2 = Armor. You will be able to equip this item as armor.
     *                    3 = Special. This item will not be deleted upon use.
     **/
    GetType(index: number): number;
  
    /**
     * Sets the inventory item at index to the item name.
     * @param {number} index - Index to put the item in. The first item is position 1.
     * @param {string} name - Name of the item to put in the inventory.
     **/
    SetItem(index: number, name: string): void;
  
    /**
     * Uses the inventory item at the given index. Will throw an error if you have no item at the given index, so check if it exists before using this function.
     * @param {number} index - Index of the item to use, starting from 1.
     **/
    UseItem(index: number): void;
  
    /**
     * Adds custom items to the inventory. This has to be used before SetInventory. This adds all items in names to the inventory, where each item matches up with a type in types.
     * @param {string[]} names - The names of your custom items.
     * @param {number[]} types - The item types of your custom items. This array must be the same size as names.
     *                          Types:
     *                          0 = Consumable. Will be deleted upon use.
     *                          1 = Weapon. You will be able to equip this item as a weapon.
     *                          2 = Armor. You will be able to equip this item as armor.
     *                          3 = Special. This item will not be deleted upon use.
     **/
    AddCustomItems(names: string[], types: number[]): void;
  
    /**
     * Sets the player's inventory. To use custom items, this must be used after AddCustomItems.
     * @param {string[]} names - The names of the items.
     **/
    SetInventory(names: string[]): void;
  
    /**
     * Returns the number of items the player has in their inventory. Read-only.
     * @type {number}
     **/
    ItemCount: number;
  
    /**
     * In the encounter function HandleItem only, setting this to true will make the last used item stay in the inventory.
     * @type {boolean}
     **/
    NoDelete: boolean;
  
    /**
     * Used with Weapon and Armor items. If the item is a Weapon, this sets its ATK. If the item is armor, this sets its DEF.
     * @param {number} amount - The amount of ATK/DEF the item will have.
     **/
    SetAmount(amount: number): void;
  }
  