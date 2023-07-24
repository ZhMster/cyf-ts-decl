# CreateYourFrisk Typescript Declarations.

Contains typescript declarations of [CreateYourFrisk](https://github.com/RhenaudTheLukark/CreateYourFrisk) to be used with [TypescriptToLua](https://typescripttolua.github.io/). 

All important stuff is located in `typings/`, you can use them by adding reference path on starting of file, The path should be relative or absolute to where is located cyf-declarations. You should only place one of them in their respectives files.
```ts
/// <reference path="./cyf-ts-decl/typings/Encounter.d.ts" />
/// <reference path="./cyf-ts-decl/typings/Monster.d.ts" />
/// <reference path="./cyf-ts-decl/typings/Waves.d.ts" />
```
You shouldn't import `index.d.ts`, it'll import only the vars/methods/events that exists both in **Encounter**, **Monster** and **Waves** scripts. 

It contains "AbstractTypes" that represents some different types for better representation but in game they might represent simple objects such as array of array, such as [``Color``](https://github.com/ZhMster/cyf-ts-decl/blob/main/typings/types/AbstractTypes.d.ts#L14) and [``Color32``](https://github.com/ZhMster/cyf-ts-decl/blob/main/typings/types/AbstractTypes.d.ts#L18). Also aswell, there is enums such as [``DialogBubbles``](https://github.com/ZhMster/cyf-ts-decl/blob/main/typings/loaders/monster/specialvars.d.ts#L78) and [``DefaultStates``](https://github.com/ZhMster/cyf-ts-decl/blob/main/typings/helpers/enums/State.d.ts#L2).

This project is still **incomplete**, but if you find a way to use this, let me know.
# Missing stuff/Incomplete

- Modules (8/10) - UI and Inventory isn't done.
- Bullet & Projectiles
- Text Commands 
- Improve TSDoc and Comments.
- Make TSConfig.json equivalents to place in `Encounters/`, `Monsters/` and `Waves/`.
      
# DevNote

I'm not a man who knows everything, so there will be some possible errors. And I made them as fast as I possible, so I used AI to boost most of process.

If I would tag a version for this, I would say... DECL v**0.2.1** - CYF **v0.6.2.2**

I'll progressivelly update this but if you find anything that should be changed feel free to commit.

### ALSO BEFORE POSTING ANYTHING IN ISSUES, MAKE SURE YOU GOOGLE IT.
