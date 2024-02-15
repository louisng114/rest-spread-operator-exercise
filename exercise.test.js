it ("should filter out odds with filterOutOdds()", () => {
    expect(filterOutOdds(1,4,12,-3)).toEqual([4,12]);
    expect(filterOutOdds(1,-1)).toEqual([]);
});

it ("should find min with findMin()", () => {
    expect(findMin(1,4,12,-3)).toBe(-3);
    expect(findMin(1,-1)).toBe(-1);
    expect(findMin(3,1)).toBe(1);
});

it ("should merge two objects with mergeObjects()", () => {
    expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
});

it ("should return a new array with the original array values and all of additional arguments doubled with doubleAndReturnArgs()", () => {
    expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
    expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8]);
});

it ("should return an array with length of one less with removeRandom()", () => {
    expect(removeRandom([1,2,3]).length).toBe(2);
    expect(removeRandom([2]).length).toBe(0);
});

it ("should not return an array with all three elements with removeRandom([1,2,3])", () => {
    const newArr = removeRandom([1,2,3]);
    
    expect(newArr.includes(1) && newArr.includes(2) && newArr.includes(3)).toBe(false);
});

it ("should return an array with at least two elements with removeRandom([1,2,3])", () => {
    const newArr = removeRandom([1,2,3]);
    
    expect(newArr.includes(1) && newArr.includes(2) || newArr.includes(1) && newArr.includes(3) || newArr.includes(2) && newArr.includes(3)).toBe(true);
});

it ("should merge two arrays with extend()", () => {
    expect(extend([1,2], [4,3,1])).toEqual([1,2,4,3,1]);
});

it ("should add a key/val pair with addKeyVal()", () => {
    expect(addKeyVal({tetrahedron : 4, cube : 6}, "octahedron", 8)).toEqual({tetrahedron : 4, cube : 6, octahedron : 8});
});

it ("should remove a key/val pair with removeKey()", () => {
    expect(removeKey({tetrahedron : 4, cube : 6, octahedron : 8}, "cube")).toEqual({tetrahedron : 4, octahedron : 8});
});

it ("should merge two objects with combine()", () => {
    expect(combine({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
});

it ("should update a key/val pair with update()", () => {
    expect(update({tetrahedron : 4, cube : 6, octahedron : 7}, "octahedron", 8)).toEqual({tetrahedron : 4, cube : 6, octahedron : 8});
});
