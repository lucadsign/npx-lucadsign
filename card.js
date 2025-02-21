#!/usr/bin/env node
'use strict';

console.log("Hello! I am Luca C, a passionate developer that loves to opensource his work on Github!");

if (require.main === module) {
    // eslint-disable-next-line unicorn/prefer-top-level-await
    inquirer.prompt(questions).then((answer) => answer.action());
}
//Copyright Luca C. 2025 (lucadsign.vercel.app)
