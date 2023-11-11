"use client"

const PYTHON_404_BYTECODE = `
4           0 RESUME                   0

5           2 BUILD_LIST               0
            4 STORE_FAST               1 (stack)

6           6 LOAD_GLOBAL              1 (NULL + set)
           18 BUILD_LIST               0
           20 LOAD_CONST               1 (('+', '-', '*', '/'))
           22 LIST_EXTEND              1
           24 PRECALL                  1
           28 CALL                     1
           38 STORE_FAST               2 (operators)

8          40 LOAD_FAST                0 (expression)
           42 LOAD_METHOD              1 (split)
           64 PRECALL                  0
           68 CALL                     0
           78 GET_ITER
      >>   80 EXTENDED_ARG             1
           82 FOR_ITER               265 (to 614)
           84 STORE_FAST               3 (token)

9          86 LOAD_FAST                3 (token)
           88 LOAD_METHOD              2 (isdigit)
          110 PRECALL                  0
          114 CALL                     0
          124 POP_JUMP_FORWARD_IF_TRUE    40 (to 206)
          126 LOAD_FAST                3 (token)
          128 LOAD_CONST               2 (0)
          130 BINARY_SUBSCR
          140 LOAD_CONST               3 ('-')
          142 COMPARE_OP               2 (==)
          148 POP_JUMP_FORWARD_IF_FALSE    63 (to 276)
          150 LOAD_FAST                3 (token)
          152 LOAD_CONST               4 (1)
          154 LOAD_CONST               0 (None)
          156 BUILD_SLICE              2
          158 BINARY_SUBSCR
          168 LOAD_METHOD              2 (isdigit)
          190 PRECALL                  0
          194 CALL                     0
          204 POP_JUMP_FORWARD_IF_FALSE    35 (to 276)

10     >>  206 LOAD_FAST                1 (stack)
          208 LOAD_METHOD              3 (append)
          230 LOAD_GLOBAL              9 (NULL + int)
          242 LOAD_FAST                3 (token)
          244 PRECALL                  1
          248 CALL                     1
          258 PRECALL                  1
          262 CALL                     1
          272 POP_TOP
          274 JUMP_BACKWARD           98 (to 80)

11     >>  276 LOAD_FAST                3 (token)
          278 LOAD_FAST                2 (operators)
          280 CONTAINS_OP              0
          282 POP_JUMP_FORWARD_IF_FALSE   163 (to 610)

12         284 LOAD_FAST                1 (stack)
          286 LOAD_METHOD              5 (pop)
          308 PRECALL                  0
          312 CALL                     0
          322 LOAD_FAST                1 (stack)
          324 LOAD_METHOD              5 (pop)
          346 PRECALL                  0
          350 CALL                     0
          360 STORE_FAST               5 (a)
          362 STORE_FAST               4 (b)

13         364 LOAD_FAST                3 (token)
          366 LOAD_CONST               5 ('+')
          368 COMPARE_OP               2 (==)
          374 POP_JUMP_FORWARD_IF_FALSE    25 (to 426)

14         376 LOAD_FAST                1 (stack)
          378 LOAD_METHOD              3 (append)
          400 LOAD_FAST                5 (a)
          402 LOAD_FAST                4 (b)
          404 BINARY_OP                0 (+)
          408 PRECALL                  1
          412 CALL                     1
          422 POP_TOP
          424 JUMP_BACKWARD          173 (to 80)

15     >>  426 LOAD_FAST                3 (token)
          428 LOAD_CONST               3 ('-')
          430 COMPARE_OP               2 (==)
          436 POP_JUMP_FORWARD_IF_FALSE    25 (to 488)

16         438 LOAD_FAST                1 (stack)
          440 LOAD_METHOD              3 (append)
          462 LOAD_FAST                5 (a)
          464 LOAD_FAST                4 (b)
          466 BINARY_OP               10 (-)
          470 PRECALL                  1
          474 CALL                     1
          484 POP_TOP
          486 JUMP_BACKWARD          204 (to 80)

17     >>  488 LOAD_FAST                3 (token)
          490 LOAD_CONST               6 ('*')
          492 COMPARE_OP               2 (==)
          498 POP_JUMP_FORWARD_IF_FALSE    25 (to 550)

18         500 LOAD_FAST                1 (stack)
          502 LOAD_METHOD              3 (append)
          524 LOAD_FAST                5 (a)
          526 LOAD_FAST                4 (b)
          528 BINARY_OP                5 (*)
          532 PRECALL                  1
          536 CALL                     1
          546 POP_TOP
          548 JUMP_BACKWARD          235 (to 80)

19     >>  550 LOAD_FAST                3 (token)
          552 LOAD_CONST               7 ('/')
          554 COMPARE_OP               2 (==)
          560 POP_JUMP_FORWARD_IF_FALSE    24 (to 610)

20         562 LOAD_FAST                1 (stack)
          564 LOAD_METHOD              3 (append)
          586 LOAD_FAST                5 (a)
          588 LOAD_FAST                4 (b)
          590 BINARY_OP               11 (/)
          594 PRECALL                  1
          598 CALL                     1
          608 POP_TOP
      >>  610 EXTENDED_ARG             1
          612 JUMP_BACKWARD          267 (to 80)

22     >>  614 LOAD_FAST                1 (stack)
          616 POP_JUMP_FORWARD_IF_FALSE     8 (to 634)
          618 LOAD_FAST                1 (stack)
          620 LOAD_CONST               2 (0)
          622 BINARY_SUBSCR
          632 JUMP_FORWARD             1 (to 636)
      >>  634 LOAD_CONST               0 (None)
      >>  636 RETURN_VALUE
`

import Link from "next/link"
// export default function NotFound() {
//     return (
//         <main className="flex-grow flex flex-col p-8 h-full mb-auto mt-10 ml-[5%] mr-[5%] sm:ml-[12.5%] sm:mr-[12.5%] md:ml-[25%] md:mr-[25%]">
//             <pre className="m-auto p-4">
//                 <code>{PYTHON_404_BYTECODE}</code>
//             </pre>
//         </main>
//     )
// }

import { useState, useEffect } from "react"

const NotFound = () => {
    const [pythonCode, setPythonCode] = useState<string[]>([])

    useEffect(() => {
        const bytecodeLines = PYTHON_404_BYTECODE.split("\n")
        const infiniteCode = []

        const repeatCount = 10
        for (let i = 0; i < repeatCount; i++) {
            infiniteCode.push(...bytecodeLines)
        }

        setPythonCode(infiniteCode)
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPythonCode(prevCode => [...prevCode, ...prevCode])
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <main className="flex-grow flex flex-col space-y-8 p-8 h-full mb-auto mt-10 ml-[5%] mr-[5%] sm:ml-[12.5%] sm:mr-[12.5%] md:ml-[25%] md:mr-[25%]">
            <div className="flex flex-col m-auto space-y-6">
                <span className="mr-2">Page not found ☹️</span>
                <Link href="/" className="text-blue-500 mt-4 relative group">
                    Back to Main Page
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
            </div>

            <pre className="m-auto p-4">
                <code>
                    {pythonCode.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </code>
            </pre>
        </main>
    )
}

export default NotFound
