# CreateYourFrisk Typescript Declarations.

Contains declarations to be used with [TypescriptToLua](https://typescripttolua.github.io/). 

All important stuff is located in `typings/`, you can use them by adding reference path on starting of file.
```ts
/// <reference path="./cyf-ts-decl_yarn/typings/Encounter.d.ts" />
```
There's `Encounter.d.ts`, `Monster.d.ts` and `Waves.d.ts`. You shouldn't import `index.d.ts`, it'll import only the [E/M/W] vars/methods/events. 

It contains "AbstractTypes" that represents some different types for better representation but in game they might represent simple objects such as array of array, such as [``Color``](https://github.com/ZhMster/cyf-declarations/blob/main/typings/types/AbstractTypes.d.ts#L14) and [``Color32``](https://github.com/ZhMster/cyf-declarations/blob/main/typings/types/AbstractTypes.d.ts#L18). Also aswell, there is enums such as [``DialogBubbles``](https://github.com/ZhMster/cyf-declarations/blob/main/typings/loaders/monster/specialvars.d.ts#L78) and [``DefaultStates``](https://github.com/ZhMster/cyf-declarations/blob/main/typings/helpers/enums/State.d.ts#L2).

This project is still **incomplete**, but if you find a way to use this, let me know.

# Todo

- [x] Modules (8/10) - UI and Inventory isn't done.

- [ ] Bullet & Projectiles

- [ ] Text Object
- [ ] Sprite Object
- [ ] Shader Object
- [ ] Bullet Object

- [ ] Text Commands 


# DevNote

I'm not the man of know everything, so there will be some possible errors. And I made them as fast as I can, so I used AI to boost most of process.

If I would tag a version for this, I would say... DECL v**0.2.1** - CYF v0.6.2.2

I'll progressivelly update this but if you find anything that should be changed feel free to commit.
