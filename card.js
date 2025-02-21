#!/usr/bin/env node
'use strict';

//Code of the NPX Card

if (require.main === module) {
    // eslint-disable-next-line unicorn/prefer-top-level-await
    inquirer.prompt(questions).then((answer) => answer.action());
}
//Copyright Luca C. 2025 (lucadsign.vercel.app)
