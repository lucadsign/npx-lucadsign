#!/usr/bin/env node
'use strict';

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const open = require("open");

const data = {
    github: chalk.gray("https://github.com/") + chalk.green("lucadsign"),
    handle: chalk.white("@lucadsign"),
    instagram: chalk.gray("https://instagram.com/") + chalk.magenta("luca.dsign"),
    labelCard: chalk.white.bold("           Card:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelPortfolio: chalk.white.bold("  Portfolio:"),
    labelWork: chalk.white.bold("          Work:"),
    name: chalk.bold.green("                   Luca C."),
    npx: chalk.red("npx") + " " + chalk.white("lucadsign"),
    portfolio: chalk.cyan("https://lucadsign.vercel.app"),
    work: `${chalk.white("Founder at")} ${chalk.hex("#ff9900").bold("Currenton")}`,
    
};

const questions = [
    {
        choices: [
            {
                name: `Visit my ${chalk.cyan.bold("Portfolio")}?`,
                value: () => {
                    open("https://lucadsign.vercel.app");
                    console.log("\nOpening portfolio...\n");
                }
            },
            {
                name: `Check out my ${chalk.green.bold("GitHub")}?`,
                value: () => {
                    open("https://github.com/lucadsign");
                    console.log("\nSee you on GitHub!\n");
                }
            },
            {
                name: `Follow my ${chalk.magentaBright.bold("Instagram")}?`,
                value: () => {
                    open("https://instagram.com/luca.dsign");
                    console.log("\nSee you on Instagram!\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("\nStay creative, stay sharp!\n");
                }
            }
        ],
        message: "What do you want to do?",
        name: "action",
        type: "list"
    }
];

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelPortfolio}  ${data.portfolio}`,
        `${data.labelInstagram}  ${data.instagram}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Passionate about coding, chess, and design.")}`,
        `${chalk.italic("Let's build something amazing together!")}`
    ].join("\n"),
    {
        borderColor: "cyan",
        borderStyle: "single",
        float: 'center',
        margin: 1,
        padding: 1
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

if (require.main === module) {
    // eslint-disable-next-line unicorn/prefer-top-level-await
    inquirer.prompt(questions).then((answer) => answer.action());
}
//Copyright Luca C. 2025 (lucadsign.vercel.app)
