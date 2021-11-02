import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  outline: none;\n  border: none;\n  padding: 5px;\n  border-radius: 50px;\n"], ["\n  background-color: ", ";\n  outline: none;\n  border: none;\n  padding: 5px;\n  border-radius: 50px;\n"])), function (props) { return props.backgroundColor; });
function Button(_a) {
    var text = _a.text; _a.backgroundColor;
    return React.createElement(StyledButton, { backgroundColor: '#2a2a2a' }, text);
}
var templateObject_1;

export { Button };
//# sourceMappingURL=index.esm.js.map
