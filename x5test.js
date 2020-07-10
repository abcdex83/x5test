/**
  Необходимо создать вложенную древовидную структуру категорий.
  {
  "id": 0,
  "childs": [
    {
      "id": 1,
      "childs": [
        {
          "id": 2,
          "childs": [
            {
              "id": 3,
              "childs": [
                {
                  "id": 4,
                  "childs": [
                    {
                      "id": 10,
                      "childs": [
                        {
                          "id": 11,
                          "childs": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 5,
                  "childs": []
                }
              ]
            },
            {
              "id": 6,
              "childs": []
            },
            {
              "id": 13,
              "childs": []
            }
          ]
        },
        {
          "id": 7,
          "childs": []
        }
      ]
    },
    {
      "id": 8,
      "childs": [
        {
          "id": 12,
          "childs": []
        },
        {
          "id": 14,
          "childs": []
        }
      ]
    },
    {
      "id": 9,
      "childs": []
    }
  ]
}
  
  
**/


let cats = [
  { id: 1, parent: 0 },
  { id: 2, parent: 1 },
  { id: 3, parent: 2 },
  { id: 4, parent: 3 },
  { id: 5, parent: 3 },
  { id: 6, parent: 2 },
  { id: 7, parent: 1 },
  { id: 8, parent: 0 },
  { id: 9, parent: 0 },
  { id: 10, parent: 4 },
  { id: 11, parent: 10 },
  { id: 12, parent: 8 },
  { id: 13, parent: 2 },
  { id: 14, parent: 8 }
];

function list2tree(list) {
  let tree = { id: 0, childs: [] };
  let index = { 0: tree };
  let tick = false;

  do {
    tick = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i] && index[list[i].parent]) {
        index[list[i].parent].childs.push({ id: list[i].id, childs: [] });
        index[list[i].id] = index[list[i].parent].childs[index[list[i].parent].childs.length - 1];
        list[i] = undefined;
        tick = true;
      }
    }
  } while (tick);

  return tree;
}

console.log(JSON.stringify(list2tree(cats), null, 2));