import { LeafElement, NodeElement } from './treeElements';


const createTree = (): NodeElement => {
  // create elements
  const el1 = new NodeElement(1);

  const el2 = new NodeElement(2);
  const el3 = new LeafElement(3);

  const el4 = new LeafElement(4);
  const el5 = new NodeElement(5);

  const el6 = new LeafElement(6);
  const el7 = new LeafElement(7);

  // create tree: link elements
  el1.addChild(el2);
  el1.addChild(el3);

  el2.addChild(el4);
  el2.addChild(el5);

  el5.addChild(el6);
  el5.addChild(el7);

  // return root node
  return el1;
};

const rootNode = createTree();

console.log(JSON.stringify(rootNode.show(), null, 2));
// initial values
/*
{
  "id": 1,
  "count": 1,
  "children": [
  {
    "id": 2,
    "count": 2,
    "children": [
      {
        "id": 4,
        "count": 4
      },
      {
        "id": 5,
        "count": 5,
        "children": [
          {
            "id": 6,
            "count": 6
          },
          {
            "id": 7,
            "count": 7
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "count": 3
  }
]
}
*/


rootNode.increment();

console.log(JSON.stringify(rootNode.show(), null, 2));
/*
{
  "id": 1,
  "count": 2,
  "children": [
  {
    "id": 2,
    "count": 3,
    "children": [
      {
        "id": 4,
        "count": 5
      },
      {
        "id": 5,
        "count": 6,
        "children": [
          {
            "id": 6,
            "count": 7
          },
          {
            "id": 7,
            "count": 8
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "count": 4
  }
]
}*/

rootNode.decrement();

console.log(JSON.stringify(rootNode.show(), null, 2));
// same as initial
