import md from "markdown-it"
import hljs from "highlight.js"

import defineSolidityHighlighting from "highlightjs-solidity"
import useSuperscript from "markdown-it-sup"

defineSolidityHighlighting(hljs)

const mdIt = md()
    .set({
        highlight: (code: any, lang: any) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value
                } catch {}
            }

            try {
                return hljs.highlightAuto(code).value
            } catch {}
        },
    })
    .use(useSuperscript)

mdIt.renderer.rules.link_open = (tokens: any, idx: any, options: any, _: any, self: any) => {
    const tok = tokens[idx].attrIndex("target")

    if (tok < 0) {
        tokens[idx].attrPush(["target", "_blank"])
    } else {
        tokens[idx].attrs[tok][1] = "_blank"
    }

    tokens[idx].attrSet("rel", "noopener noreferrer") // why not, just a good measure
    return self.renderToken(tokens, idx, options)
}

export default mdIt
