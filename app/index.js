/*
 * Entry point for the watch app
 */
import document from "document";
import { gettext } from "i18n";

let demotext = document.getElementById("demotext");
//demotext.text = gettext('hello_world');

let testarc = document.getElementById("testarc");

setTimeout(() => {
    testarc.animate("enable");
}, 5000);
