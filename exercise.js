const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => nums.reduce((min, currVal) => min < currVal ? min : currVal, Infinity);

const mergeObjects = (obj1, obj2) => {
	return {...obj1, ...obj2}
};

const doubleAndReturnArgs = (arr, ...nums) => {
	const doubleNums = nums.map(num => num * 2);

	return [...arr, ...doubleNums];
};

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);

	return items.filter((val,index) => index !== randomIndex);
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
	const newObj = {...obj};
	newObj[key] = val;

	return newObj;
};

const removeKey = (obj, key) => {
	const newObj = {...obj};
	delete newObj[key];

	return newObj;
};

const combine = (obj1, obj2) => {
	return {...obj1, ... obj2};
};

const update = (obj, key, val) => {
	const newObj = {...obj};
	newObj[key] = val;

	return newObj;
};