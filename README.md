# setPropTypes()

### Overview

Provides a convenient syntax to set prop types and default props on a React component:
>setPropTypes(_Component_, _callback_)

Set a default prop by, instead of just a prop type, providing an array with both the prop type and the default prop:
>[_propType_, _defaultProp_]

See [prop-types](https://www.npmjs.com/package/prop-types) for more info.

### Example

```javascript
import React from 'react'
import setPropTypes from 'set-prop-types'

export default function App () {
  return <>
    <Greeter name="Jimmy" rating={100} />
    <Greeter name="Johnny" rating="S++" />
  </>
}

function Greeter ({name, rating, line}) {
  return <>
    <h3>Hey, {name}!</h3>
    <p>Your rating is {rating}.</p>
    {line ? <hr /> : null}
  </>
}
setPropTypes(Greeter, T => ({
  name: T.string,
  rating: T.oneOfType([T.string, T.number]),
  line: [T.bool, true]
}))
```
