import * as heroui from '@heroui/react';
const keys = Object.keys(heroui);
console.log("Keys containing 'Provider':", keys.filter(k => k.toLowerCase().includes('provider')));
console.log("Keys containing 'HeroUI':", keys.filter(k => k.toLowerCase().includes('heroui')));
