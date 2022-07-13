**Dropdown with search option**

https://user-images.githubusercontent.com/44315983/178811547-9e2770e8-78b3-44c4-8a42-016ab695639e.mp4

## Setup

```
npm i react-native-searchable-dropdown-item
```

## Alternative Setup

`
Get Dropdown.js, Search.js, Item.js and assets file to same folder and import Dropdown
`

## Sample
``` javascript
import React, {useState} from 'react';
import Dropdown from 'react-native-searchable-dropdown-item';

const App = () => {

  const items = ["Comedy", "History", "Western", "Fictional", "Horror"]
  const [selectedItem, setSelectedItem] = useState("")

  return (

      <Dropdown items={items} selectItem={setSelectedItem} scrollHeight={200} onSelect={() => console.log(selectedItem)}/>

  );
}
```

## Warning

` TypeScript may not find the type declaration for the module, so you may want to add // @ts-ignore before importing. `

## Props

> items = Passing the array with item strings in it

> selectItem = Returning selected item to assign to your state

> scrollHeight = Deciding to scroll view's height (default is 200)

> onSelect = Triggering a function to use right after an item is selected
